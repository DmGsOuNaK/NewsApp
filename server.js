const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

/* ---------------------  Login page set up ----------------------------*/


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });
  const userSchema = new mongoose.Schema({
    username: String,
    password: String
  });
  
  const User = mongoose.model("User", userSchema);
  app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username, password });
      if (user) {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(401).json({ message: "Invalid username or password" });
      }
    } catch (error) {
      console.error("Error during login", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
/* ---------------------  Register Page set up ----------------------------*/


 app.post("/register", async (req, res) => {
    const { fname, lname, email, password } = req.body;
    try {
      // Create a new user object
      const user = new User({ fname, lname, email, password });
  
      // Save the user object to the database
      await user.save();
  
      res.status(201).json({ message: "Registration successful" });
    } catch (error) {
      console.error("Error during registration", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
   