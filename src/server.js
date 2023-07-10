const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");

app.use(express.json());
app.use(cors());

const mongoUrl = 'mongodb://localhost:27017/news-aggregator';
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.log(error);
  });

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  newpassword: String,
  confirmpassword: String,
});

const User = mongoose.model("UserInfo", userSchema);

app.post("/Register", async (req, res) => {
  const { fname, lname, email, newpassword, confirmpassword } = req.body;
  try {
    await User.create({
      fname,
      lname,
      email,
      newpassword,
      confirmpassword
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
