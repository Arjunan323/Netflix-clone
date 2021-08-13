const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");

//UPDATE
router.put("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECURITY_KEY
      ).toString();
    }

    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("you are not allowed to update");
  }
});

//DELETE
router.delete("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
       await User.findByIdAndDelete(req.params.id);

      res.status(200).json("User has been deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("you are not allowed to delete");
  }
});

//GET
router.get("/find/:id", verify , async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL
router.get("/", verify , async (req, res) => {

  const query = req.query.new;

  if (req.user.isAdmin) {
    try {
      const user = query ? await User.find().limit(10) : await User.find()
      const { password, ...info } = user._doc;
      res.status(200).json(info);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("you are not allowed to see all user");
  }
});

//GET USER STATS
router.get("/:id", verify , async (req, res) => {

  if(req.user.id == req.params.id || req.user.isAdmin){
    
  }

});

module.exports = router;
