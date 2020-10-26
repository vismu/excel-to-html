require("isomorphic-fetch");
const fs = require("fs");
const { render } = require("mustache");
const excelToJson = require("convert-excel-to-json");

const data = excelToJson({
  sourceFile: "resource.xls",
});

const template = fs.readFileSync(__dirname + "/template.html", "utf8");

const result = render(template, data);

fs.writeFile("result.html", result, (err) => {
  if (err) return console.log(err);
  console.log("resource.xls > result.html");
});
