const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verifyToken");

//CREATE
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const newList = new List(req.body);
      const savedList = await newList.save();
      res.status(201).json(savedList);
    } catch (err) {
      res.send(500).json(err);
    }
  } else {
    res.status(403).json("you are not allowed ");
  }
});

//DELETE

router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json("List has been deleted");
    } catch (err) {
      res.send(500).json(err);
    }
  } else {
    res.status(403).json("you are not allowed ");
  }
});


router.delete("/:id", verify, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genere;
  let list = [];

  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          {
            $sample: { size: 10 },
          },
          {
            $match: { type: typeQuery, genre: genreQuery },
          },
        ]);
      } else {
        list = await List.aggregate([
          {
            $sample: { size: 10 },
          },
          {
            $match: { type: typeQuery },
          },
        ]);
      }
    } else {
      list = await List.aggregate([
        {
          $sample: { size: 10 },
        },
      ]);
    }

    res.send(200).json(list);
  } catch (err) {
    res.send(500).json(err);
  }
});

module.exports = router;