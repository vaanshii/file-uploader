require("dotenv").config();

const express = require("express");
const path = require("node:path");
const passport = require("passport");
const sessionMiddleware = require("./config/session");
const { error } = require("node:console");

require("./config/passport");

const app = express();
const PORT = process.env.PORT;

// core middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "public"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// session and passport
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, (error) => {
	if (error) {
		throw error;
	}

	console.log(`Server running on port: ${PORT}`);
});
