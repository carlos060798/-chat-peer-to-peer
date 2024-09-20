import mongoose, { Document, Schema, Types } from "mongoose";


export interface IUser extends Document {
    name: string;
    email: string;
    password: string;



}

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true

    },
    password: {
        type: String,
        required: true
    },

},
    {
        timestamps: true
    }

)

const User = mongoose.model<IUser>('User', UserSchema);
export default User;