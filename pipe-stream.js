const fs = require("fs");
const path = require("path")

// Note: create output.txt file manually and put some dummy content in it.

const readStream = fs.createReadStream(path.join("output.txt"));
const writeStream = fs.createWriteStream(path.join("input.txt"));

readStream.pipe(writeStream);