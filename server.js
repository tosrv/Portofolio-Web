import express from "express";
import hbs from "hbs";
import { home } from "./src/controller/control.js";

const app = express();
const port = 3000;

app.set("view engine", "hbs");
app.set("views", "src/views");
app.use("/assets", express.static("src/assets"));
hbs.registerPartials("src/views/sections");
hbs.registerPartials("src/views/partials");

app.get("/", home);

app.listen(port, () => {
  console.log(`Server runing on port: ${port}`);
});
