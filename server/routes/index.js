const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res, next) => {
  try {
    let results = await db.all();
    res.json(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
router.post("/post", (req, res, next) => {
  let newItem = new Item({
    itemName: req.body.itemName
  });
  newItem.save(err => {
    if (err) {
      res.json(err);
    } else {
      res.json({ msg: "Item has successfully been posted" });
    }
  });
  res.json(results);
});

module.exports = router;
