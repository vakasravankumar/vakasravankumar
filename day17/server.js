const express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");
const Empuser = require("./model/edb");
let app = express();

mongoose.connect("mongodb://localhost/employee", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));

//=====================
// ROUTES
//=====================

app.get("/home", function (req, res) {
    res.render("home");
});

app.get("/register", function (req, res) {
    res.render("register");
});

app.post("/register", async (req, res) => {
    try {
        const user = await Empuser.create({
            empid: req.body.empid,
            username: req.body.username,
            age: req.body.age,
            email: req.body.email,
            address: req.body.address,
            salary: req.body.salary
        });
         return res.status(200).json(user);
        res.redirect("/home"); // Redirect to home or another page after successful registration
    } catch (err) {
        console.error(err);
        res.status(500).send("There was a problem with the registration.");
    }
});

app.get("/logout", function (req, res) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/home');
    });
});

app.listen(3000, function () {
    console.log("Server Has Started!");
});
