import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config({path:".env"})

const mongoURI = process.env.mongoURI;
async function connectToMongo() {
    await mongoose.connect(mongoURI)
        .then(() => {
            console.log("Connected MongoDB");
        }).
        catch((error) => {
            console.log(error);
        })
}

export default connectToMongo;