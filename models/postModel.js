import { Schema, model, models } from "mongoose";

const postSchema=new Schema({
    title:String,
    description:String,
    image:String
},
{
    toJSON:{virtuals:true}
});
postSchema.virtual('short_description').get(function(){
    return this.description.substring(0,30)+"..."
})


const PostModel=models.post || model("post",postSchema)

export default PostModel;