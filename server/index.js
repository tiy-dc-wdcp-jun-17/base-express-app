const fs = require("fs");
const path = require("path");
const url = require("url");
const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const morgan = require("morgan");
const session = require("express-session");

// Make our new app.
const app = express();

// Check if there is an ENV variable and set it as an app variable.
app.set("port", process.env.PORT || 3000);

// Expose the public folder to the internet to serve CSS / Frontend JS
app.use("/public", express.static(path.join(__dirname, "public")));

// **************** MUSTACHE SETUP ↓

// Register '.mustache' extension with The Mustache Express
app.engine("mustache", mustacheExpress());

// Turn on default template engine
app.set("view engine", "mustache");

// Set where we store our views
app.set("views", __dirname + "/views");

// **************** MUSTACHE SETUP ↑

// Setup Body Parser for forms
app.use(bodyParser.urlencoded({ extended: false }));

// Setup Express Validator
app.use(expressValidator());

// Log to STDOUT with the dev format
app.use(morgan("dev"));

// Setup a session store using express-session
app.use(
  session({
    secret: "you-should-REALLY-change-this",
    resave: false,
    saveUninitialized: false
  })
);

// **************** ROUTES ↓

app.use("/", require("./routes/homepage"));

// **************** ROUTES ↑

// Load our student routes nested under /another-place
// app.use('/another-place', require("./studentRoutes"));
app.listen(app.get("port"), () => {
  console.log(
    `Node runnning in ${app.get("env")} mode at http://localhost:${app.get(
      "port"
    )}`
  );
});
