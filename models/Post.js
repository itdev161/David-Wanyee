import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema ({
    User: {
        type:'ObjectId',
        ref:'User'
    },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('Post', PostSchema);

export default Post;