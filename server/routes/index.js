const express = require("express");
const router = express.Router();
const db = require("../db");
const app = express();

app.use(express.json());

router.get("/", async (req, res, next) => {
  try {
    let results = await db.all();
    res.json(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post("/form", function(req, res) {
  console.log(req.body);

  res.json({ msg: "Has been posted" });
});

module.exports = router;
