const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/Usermodel.js");

//! update user

router.put("/:id", async (req, res) => {
  //todo validation password
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        return res.status(500).json(error);
      }
    }
    // todo update password
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("güncelleme işlemi başarılı");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("Sadece kendi hesabını güncelleyebilirsin");
  }
});

//! delete user

router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.deleteOne({ _id: req.params.id });

      res.status(200).json("silme işlemi başarılı");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("Sadece kendi hesabını silebilirsin");
  }
});

//! get a user

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    res.status(500).json(error);
  }
});

//! follow a user

router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("takip etme başarılı");
      } else {
        res.status(403).json("zaten bu kişiyi takip ediyorsunuz");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Kendini takip edemezsin");
  }
});

//! unfollow a user

router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json("takibi bırakma işlemi başarılı");
      } else {
        res.status(403).json("zaten bu kişiyi takip etmiyorsun");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Kendini takipten çıkamazsın");
  }
});


module.exports = router;
