const fs = require("fs");

const writeStream = fs.createWriteStream("input.txt");
writeStream.write("Hello World", "utf8");

writeStream.end();

writeStream.on("finish", () => console.log("Writing done"))