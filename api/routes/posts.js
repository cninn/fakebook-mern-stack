const router = require("express").Router();

const Post = require("../models/Postmodel.js");
const User = require("../models/Usermodel.js");


//! create a post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//! update a post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("gönderi güncellendi");
    } else {
      res.status(403).json("Sadece kendi gönderilerini düzenleyebilirsin");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//! delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne({ $set: req.body });
      res.status(200).json("gönderi silindi");
    } else {
      res.status(403).json("Sadece kendi gönderilerini sileibilirsin");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
//! like and disslike a post

router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("beğenildi");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("beğenekten vazgeçildi");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//! get a post

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json("aradığınız post bulunamadı", error);
  }
});

//! get timeline posts

router.get("/timeline/:userId", async (req, res) => {
  let postArray = [];
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.status(200).json(userPosts.concat(...friendPosts))
  } catch (error) {
    res.status(500).json(error.errors);
    console.log(error);
  }
});

module.exports = router;
