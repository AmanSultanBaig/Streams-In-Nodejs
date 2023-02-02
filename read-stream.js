const fs = require("fs");
const path = require("path")

let data = "";
// Note: create output.txt file manually and put some dummy content in it.
const readStream = fs.createReadStream(path.join("output.txt"));

readStream.on("data", (chunk) => data += chunk);

readStream.on("end", () => console.log(data," Reading Done..."))