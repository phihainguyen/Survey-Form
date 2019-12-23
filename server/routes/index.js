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
  // let newItem = new Item({
  //   itemName: req.body.itemName
  // });
  // newItem.save(err => {
  //   if (err) {
  //     res.json(err);
  //   } else {
  //     res.json({ msg: "Item has successfully been posted" });
  //   }
  // });
  // res.json(results);
  console.log("this is the post from routerRoutes");
  res.send({ hello: "Message has been posted" });
});

router.get("/", function(req, res) {
  res.send("Birds home page");
});
// define the about route
router.get("/about", function(req, res) {
  res.send("About birds");
});
module.exports = router;
