import { FaPlus } from "react-icons/fa";

interface RoadmapSpacesProps {
    roadmaps?: any;
    createRoadmapSpace: any;
    getRoadmapData: any;
    roadmapId: any;
    setRoadmapId: any;
}

export const RoadmapSpaces = ({ roadmaps, createRoadmapSpace, getRoadmapData, roadmapId, setRoadmapId }: RoadmapSpacesProps) => {
    const handleRoadmap = (roadmapId: any) => {
        getRoadmapData(roadmapId);
        setRoadmapId(roadmapId);
    }

    const deleteRoadmapSpace = async () =>{
        await fetch(`/api/roadmap?roadmapId=${roadmapId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        setRoadmapId(null);
    }

    return (
        <div className="flex flex-col gap-3">
            {
                roadmaps && roadmaps.length > 0 && (
                    roadmaps.map((roadmap: any) => (
                        roadmap._id === roadmapId ? (
                            <div key={roadmap._id}
                                className="w-full py-5 bg-slate-800 rounded-lg text-white p-2 cursor-pointer hover:bg-slate-800 flex flex-row gap-1 justify-between"
                                onClick={() => { handleRoadmap(roadmap._id); }}
                            >
                                <p>{roadmap.name}</p>
                                <div className="" onClick={deleteRoadmapSpace}>
                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-1 12.5a2 2 0 01-2 1.5H8a2 2 0 01-2-1.5L5 7m5-3V3a1 1 0 011-1h2a1 1 0 011 1v1m-7 4h10" />
                                    </svg>
                                </div>


                            </div>
                        ) : (
                            <div key={roadmap._id}
                                className="w-full py-5 bg-slate-700 rounded-lg text-white p-2 cursor-pointer hover:bg-slate-800"
                                onClick={() => { handleRoadmap(roadmap._id); }}
                            >
                                {roadmap.name}
                            </div>
                        )
                    ))
                )
            }
            {
                roadmaps && roadmaps.length < 3 && (
                    <button className="flex justify-center w-full py-5 bg-slate-700 rounded-lg text-white text-center" title="Create Roadmap Space" onClick={createRoadmapSpace}>
                        <FaPlus />
                    </button>
                )
            }
        </div>
    )
}