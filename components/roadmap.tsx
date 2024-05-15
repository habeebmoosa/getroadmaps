"use client";

import { useCallback } from 'react';
import ReactFlow, {
    addEdge,
    Connection,
    Edge,
    Controls,
    ReactFlowProvider,
    Background,
    BackgroundVariant,
    ControlButton
} from 'reactflow';

import 'reactflow/dist/style.css';
import { DownloadFlow } from './roadmappdf';

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

    const onConnect = useCallback(
        (params: Connection | Edge) => setEdges((eds: Edge[]) => addEdge(params, eds)),
        [setEdges],
    );

    return (
        <div className='w-[75vw] h-[100vh]'>
            <ReactFlowProvider>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                >
                    <Controls className='p-1 flex flex-col items-center justify-center bg-slate-800 rounded-sm'>
                        <ControlButton>
                            <DownloadFlow nodes={nodes} />
                        </ControlButton>
                    </Controls>
                    <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
                </ReactFlow>
            </ReactFlowProvider>
        </div>
    );
};