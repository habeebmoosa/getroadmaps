import {GoogleGenerativeAI} from "@google/generative-ai"
import Roadmaps from "@/models/Roadmaps";

export async function POST(req: Request) {
    const data = await req.json();
    const prompt = data.prompt;
    const roadmapId = data.roadmapId;

    const genAI = new GoogleGenerativeAI(process.env.API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    let message = `
            ROLE: Roadmap Generator Tool
            DESCRIPTION: A tool that generates a roadmap based on the user's input prompt.
            INPUT: User input prompt.
            OUTPUT: The output should be generated in json file that contains two objects are 'nodes' and 'edges'. This json file is designed for reactflwo input. Generate only json without markdown.

            FORMAT:

            {
                "nodes": [
                    {
                        "id": "1",
                        "type": "start",
                        "data": {
                            "label": "Start"
                        },
                        "position": {
                            "x": 250,
                            "y": 50
                        }
                    },
                    {
                        "id": "2",
                        "data": {
                            "label": "Node 1"
                        },
                        "position": {
                            "x": 250,
                            "y": 150
                        }
                    },
                    and more...
                ],
                "edges": [
                    {
                        "id": "e1-2",
                        "source": "1",
                        "target": "2",
                        "animated": false
                    },
                    and more...
                ]
            }

            PROMPT:

            ${prompt}
        `;

    try {
        const result = await model.generateContent(message);
        const response = await result.response;
        const msg = response.text();

        const regex = /```json\n({[\s\S]*?})\n```/;
        const match = msg.match(regex);

        if (match) {
            const jsonString = match[1];
            const jsonObject = JSON.parse(jsonString);
            console.log(jsonObject);

            const newRoadmap = {
                name: prompt,
                prompt: prompt,
                roadmap: jsonString,
            };

            const response = await Roadmaps.findByIdAndUpdate({_id: roadmapId}, newRoadmap, {new:true});
            console.log(response)
            
            return new Response(JSON.stringify(jsonObject), {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }else{
            return new Response(JSON.stringify({error: "No JSON data found"}), {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }
    }catch (error) {
        return new Response(JSON.stringify({error: "Error occure"}), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}