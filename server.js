const methodoverride = require("method-override");
const bodyParser = require("body-parser");
const path = require("path");
const exphbs = require("express-handlebars");
const app = require("./controllers/burgers_controller.js");

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.listen(PORT, () => console.log("App listening on PORT: " + PORT));

app.set("views", __dirname + "/views");
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: __dirname + "/views/layouts/main.handlebars",
    partialsDir: __dirname + "/views/partials"
  })
);
app.set("view engine", "handlebars");
