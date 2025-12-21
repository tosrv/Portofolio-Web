import express from "express";
import hbs from "hbs";

const app = express();
const port = 3000;

app.set("view engine", "hbs");
app.set("views", "src/views");
app.use("/assets", express.static("src/assets"));
hbs.registerPartials("src/views/sections");
hbs.registerPartials("src/views/partials");

app.get("/", (req, res) => {
  res.render("layouts/main", { layout: false });
});

app.listen(port, () => {
  console.log(`Server runing on port: ${port}`);
});
