const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "files");

// console.log(dirPath);
//Write File
for (let i = 0; i < 5; i++) {
  fs.writeFileSync(dirPath + `/hello${i}.txt`, "This is a Test files");
}
//Read File
fs.readdir(dirPath, (err, files) => {
  files.forEach((item) => {
    console.log(item);
  });
});
