import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("COnnected to mongodb");
    }
    catch(error) {
        console.log("err connecting", error.message);
    }
};

export default connectToMongoDB;