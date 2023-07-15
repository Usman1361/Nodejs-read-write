//crud operations in File System
const { error } = require("console");
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/test.txt`;
// console.log(dirPath);

//*************************Create File*********************** */
// fs.writeFileSync(filePath, "This is a file used in crud file operation.");

//*************************Read File*********************** */
// fs.readFile(filePath, "utf-8", (error, file) => {
//   if (error) throw err;
//   else {
//     console.log(file);
//   }
// });

//*************************Update File*********************** */
// fs.appendFile(filePath, " and updated data is.", (err) => {
//   if (!err) {
//     console.log("File updated successfuly!");
//   }
// });

//*************************Rename File*********************** */
// fs.rename(filePath, `${dirPath}/testUpdated.txt`, (err) => {
//   if (!err) {
//     console.log("file renamed successfuly!!");
//   }
// });

//*************************Delete File*********************** */
// fs.unlinkSync(`${dirPath}/testUpdated.txt`);
