"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import { RoadMap } from "@/components/roadmap";
import { useEffect, useState } from "react";
import { useEdgesState, useNodesState } from "reactflow";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { TheAlertDialog } from "@/components/alertDialog";
import { Subscription } from "@/components/subscription";
import Image from "next/image";
import Link from "next/link";

const initialData = {
    nodes: [
        {
            id: '1',
            type: 'input',
            data: { label: 'Enter the prompt' },
            position: { x: 370, y: 300 },
        },
        {
            id: '2',
            data: { label: 'Hit the Generate button' },
            position: { x: 520, y: 400 },
        },
    ],
    edges: [
        { id: 'e1-2', source: '1', target: '2', animated: false },
    ],
};

export default function Roadmap() {

    const [credits, setCredits] = useState();

    const credit = async () => {
        const credits = await fetch("/api/credits", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const creditsData = await credits.json();
        setCredits(creditsData.user.credits);
    }

    useEffect(() => {
        credit();
    }, []);

    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);

    const [nodes, setNodes, onNodesChange] = useNodesState(initialData.nodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialData.edges);
    const [apiData, setApiData] = useState(null);

    const makeAPIRequest = async () => {

        setLoading(true);
        const response = await fetch("/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt: prompt })
        });

        const data = await response.json();

        if (data) {
            const response = await fetch("/api/credits/usecredits", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const creditsData = await response.json();
            setCredits(creditsData.newCredits.credits);
        }

        setApiData(data);
        setLoading(false);
    }

    useEffect(() => {
        if (apiData) {
            const { nodes, edges } = apiData as { nodes: any[], edges: any[] };
            setNodes(nodes);
            setEdges(edges);
        }
    }, [apiData, setNodes, setEdges]);

    return (
        <div>
            <div className="xl:hidden flex items-center flex-col gap-5">
                <h1 className="text-center text-2xl mt-24 px-5">At this time, our web app does not support mobile devices.
                If there is any issues give feedback to us.
                </h1>
                <a href={"https://docs.google.com/forms/d/e/1FAIpQLScNZ6vtlFMkmo0t_dWTx6CXfoEIZzm5KAjg-euCA49046beKw/viewform?usp=sf_link"} target={"_blank"} className="">
                    <Button>Report</Button>
                </a>
            </div>
            <div className="hidden xl:flex items-center bg-slate-50 h-screen mx-auto flex-row-reverse">
                <aside className="flex flex-col items-center w-96 h-screen bg-slate-800 justify-between">
                    <div className="gap-10">
                        <div className="mt-5 flex flex-row justify-between">
                            <Link href={"/"} className="flex flex-row items-center gap-1">
                                <Image
                                    src={"/icon.svg"}
                                    alt="Get RoadMaps"
                                    width={40}
                                    height={40}
                                />
                                <h1 className="hidden sm:block bg-gradient-to-r from-emerald-300 via-green-500 to-lime-300 bg-clip-text text-2xl tracking-tight text-transparent font-bold">Get RoadMaps</h1>
                            </Link>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                        <div className="flex flex-col gap-4 justify-center items-center">
                            <Textarea className="h-20 w-80 mt-5" placeholder="Enter the prompt here..."
                                onChange={(e) => setPrompt(e.target.value)}
                            />
                            {
                                prompt.length > 0 ? (
                                    credits === 0 ? (
                                        <TheAlertDialog
                                            heading={"No credits left"}
                                            description={"You have no credits left. Please contact the developer."}
                                        />
                                    ) : (
                                        <Button className="w-80" onClick={makeAPIRequest}>Generate Roadmap</Button>
                                    )
                                ) : (
                                    <TheAlertDialog
                                        heading={"Empty prompt"}
                                        description={"Please enter a prompt before hitting the Generate button."}
                                    />
                                )
                            }

                            {loading &&
                                <div role="status" className="mt-10">
                                    <svg aria-hidden="true" className="w-28 h-28 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="w-80 h-14 bg-slate-600 mb-5 rounded-lg flex justify-center items-center">
                        <Subscription credits={credits} />
                    </div>
                </aside>
                <div>
                    <RoadMap
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        setNodes={setNodes}
                        setEdges={setEdges}
                    />
                </div>
            </div>
        </div>
    );
}
