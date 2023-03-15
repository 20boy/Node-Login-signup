if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//Import Libraries
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const initializePassport = require("./passportconfig");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");

//Database for storing Password
const Users = [];

initializePassport(
  passport,
  (email) => Users.find(Users.email == email),
  (id = Users.find((Users) => Users.id === id))
);

app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SECRET_SESSION,
    resave: false, //We won't resave the session Valuable if nothing is changed
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Configuring the Login post functionality
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/index",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

//Configuring the register post functionality
app.post("/signup", async (req, res) => {
  try {
    const hashedPasswd = await bcrypt.hash(req.body.password, 10);
    Users.push({
      id: Date.now().toString(),
      Firstname: req.body.Firstname,
      Secondname: req.body.Secondname,
      Email: req.body.email,
      Password: hashedPasswd,
    });
    console.log(Users);
    res.redirect("/login");
  } catch (error) {
    console.log(error);
    res.redirect("/signup");
  }
});

//Routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});
//End Routes

app.listen(5500)
  ? console.log(`app working on port ${5500}`)
  : console.log("Nope");
