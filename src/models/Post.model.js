const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: mongoose.ObjectId, ref: 'Category'}
},
{
    timestamps: true
}
)

const Post = mongoose.model('Post', postSchema);

module.exports = Post