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
  const name = req.body.name;
  const email = req.body.email;
  const age = req.body.age;
  const role = req.body.role;
  const userRecommend = req.body.userRecommend;
  const favorite = req.body.favorite;
  const improve = req.body.improve;
  const comment = req.body.comment;
  const user = {
    name: name,
    email: email,
    age: age,
    role: role,
    userRecommend: userRecommend,
    favorite: favorite,
    improve: improve,
    comment: comment
  };
  res.json({ msg: user });
});

module.exports = router;
