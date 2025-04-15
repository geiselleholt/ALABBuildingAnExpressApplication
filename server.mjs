import express from "express";
import beachRoutes from "./routes/beachRoutes.mjs";

const app = express();
// const pug = require("pug");

// const compiledFunction = pug.compileFile("template.pug");
// console.log(
//   compiledFunction({
//     name: "Timothy",
//   })
// );
app.engine("template", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    const rendered = content
      .toString()
      .replaceAll("#title#", `${options.title}`);
    return callback(null, rendered);
  });
});

app.set("views", "./views"); // specify the views directory
app.set("view engine", "template"); // register the template engine

app.use("/beaches", beachRoutes);
// res.render("index", options);

app.listen(3000, () => {
  console.log(`Server runnung`);
});
