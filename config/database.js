import mongoose from "mongoose";

let connected = false;

const connectdb = async () => {
    mongoose.set("strictQuery", true);
    if (connected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected");
        connected = true;
    } catch (error) {
        console.log(error);
    }
}

export default connectdb

