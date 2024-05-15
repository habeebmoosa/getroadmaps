"use client";

import { useCallback, useState } from 'react';
import ReactFlow, {
    addEdge,
    Connection,
    Edge,
    Controls,
    ReactFlowProvider,
    Background,
    BackgroundVariant,
    ControlButton,
    MiniMap
} from 'reactflow';

import 'reactflow/dist/style.css';
import { DownloadFlow } from './roadmappdf';
import { RiMap2Line } from 'react-icons/ri';

interface RoadMapProps {
    nodes: any;
    edges: any;
    onNodesChange: any;
    onEdgesChange: any;
    setNodes: any;
    setEdges: any;
}



export const RoadMap = ({
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    setNodes,
    setEdges
}: RoadMapProps) => {

    const [showMap, setShowMap] = useState<boolean>(false);

    const onConnect = useCallback(
        (params: Connection | Edge) => setEdges((eds: Edge[]) => addEdge(params, eds)),
        [setEdges],
    );

    const proOptions = { hideAttribution: true };

    return (
        <div className='w-[75vw] h-[100vh]'>
            <ReactFlowProvider>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    proOptions={proOptions}
                >
                    <Controls className='p-1 flex flex-col items-center justify-center bg-slate-800 rounded-sm'>
                        <ControlButton>
                            <DownloadFlow nodes={nodes} />
                        </ControlButton>
                        <ControlButton onClick={() => setShowMap(!showMap)}>
                            <RiMap2Line title='Map view' />
                        </ControlButton>
                    </Controls>
                    <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
                    <div className='bg-red-50 p-1'>
                        {showMap && <MiniMap />}
                    </div>
                </ReactFlow>
            </ReactFlowProvider>
        </div>
    );
};