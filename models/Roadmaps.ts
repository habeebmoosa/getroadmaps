import mongoose, { Schema } from "mongoose";

export interface IRoadmaps {
    name: string;
    prompt: string;
    roadmap: string;
    userId: string;
}

const roadmapSchema: Schema = new mongoose.Schema({
    name: {
        type: String,
        default: "New Roadmap Space"
    },
    prompt: {
        type: String,
        default: ""
    },
    roadmap: {
        type: String,
        default: `{ "nodes": [ { "id": "1", "type": "start", "data": { "label": "Enter the prompt" }, "position": { "x": 370, "y": 300 }}, { "id": "2", "data": { "label": "Hit the Generate button" }, "position": { "x": 520, "y": 400 } } ], "edges": [ { "id": "e1-2", "source": "1", "target": "2", "animated": false } ] }`
    },
    userId: {
        type: String,
        required: true
    }
})

export default mongoose.models.Roadmaps || mongoose.model<IRoadmaps>("Roadmaps", roadmapSchema);