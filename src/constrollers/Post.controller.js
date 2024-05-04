const Post = require("../models/Post.model");

const createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    const response = await post.save();

    if (response) {
      return res.json({
        message: "Post was created successfully",
        detail: response,
      });
    }
  } catch (error) {
    return res.json({
      message: "Error",
      detail: error.message,
    });
  }
};

const updatePost = async (req, res) => {
  try {
    
    const newPost = req.body

        const response = await Post.findByIdAndUpdate(
            newPost.id,
            { $set: newPost },
            { new: true }
        )

        if(response){
            return res.json({
                message: 'Producto actualizado correctamente',
                detail: response
            })
        }
  } catch (error) {
    return res.json({
      message: "Error",
      detail: error.message,
    });
  }
}

const deletePost = async (req, res) => {
  try {
      const response = await Post.findByIdAndDelete(req.body.postId)
      if (response){
          return res.json({
              message: 'Producto eliminado exitosamente'
          })
      }
  } catch (error) {
      return res.json({
          message: 'Error',
          detail: error.message
      })
  }
}


const getAllPosts = async (req, res) => {
  try {
    const response = await Post.find().populate("category").populate("user");
    if (response) {
      return res.json({
        message: "Post list",
        detail: response,
      });
    }
  } catch (error) {
    return res.json({
      message: "Error",
      detail: error.message,
    });
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getAllPosts
};
