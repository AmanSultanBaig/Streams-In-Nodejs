const fs = require("fs");
const path = require("path")
const { Transform } = require("stream");

const readStream = fs.createReadStream(path.join("output.txt"));
const writeStream = fs.createWriteStream(path.join("input.txt"));

const upperCaseStream = () => {
    return new Transform({
       transform(chunk, encoding, callback) {
        const uppercase = chunk.toString().toUpperCase();
        callback(null, uppercase)
       }
    })
}

const upperCase = upperCaseStream()

readStream.pipe(upperCase).pipe(writeStream);