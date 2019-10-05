const fs = require("fs");
var path = require("path");

const srcFolder = path.resolve(__dirname, "srcImage") + "/";
const outFolder = path.resolve(__dirname, "srcImage") + "/";

var d = new Date();
var curr_date = d.getDate();
var curr_month = d.getMonth() + 1;
var curr_year = d.getFullYear();

var data_f = curr_date + "-" + curr_month + "-" + curr_year;
var myPrefix = "-tr1-";
var prefix = myPrefix + data_f;

fs.readdir(srcFolder, (err, files) => {
  files.forEach((file, i) => {
    let extension = path.extname(file);
    const rgex = /^\d+/;
    let res = file.match(rgex);
    if (res) {
      fs.rename(srcFolder + file, outFolder + i + prefix + extension, err => {
        if (err) throw err;
        console.log(`rename - ${file} completed!`);
      });
    }
  });
});
