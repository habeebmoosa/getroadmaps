import mongoose, { Schema } from "mongoose";

export interface IUser {
    userId: string;
    credits: number;
}

const userSchema:Schema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    credits: {
        type: Number,
        required: true,
        default: 5
    }
});

export default mongoose.models.User || mongoose.model<IUser>("User", userSchema);