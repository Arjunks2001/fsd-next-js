import PostModel from "@/models/postModel";
import connectMongo from "@/utills/connectMongo";

export async function GET(request) {
    try {
        await connectMongo()
        const postData=await PostModel.find({})
        return Response.json(postData)
    } catch (error) {
        return Response.json(error)
    }
}