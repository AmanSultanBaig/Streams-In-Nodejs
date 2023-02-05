const fs = require("fs");
const { PassThrough, Duplex } = require("stream")
const path = require("path");

const readStream = fs.createReadStream(path.join("output.txt"));
const writeStream = fs.createWriteStream(path.join("input.txt"));

class Throttle extends Duplex {
    constructor(ms){
        super();
        this.delay = ms
    }

    _read() {}

    _write(chunk, encoding, callback) {
        this.push(chunk);
        setTimeout(callback, this.delay)
    }

    _final() {
        this.push(null)
    }
}

const passThrough = new PassThrough()
const throttle = new Throttle(1000)

let total = 0;

passThrough.on("data", (chunk) => {
    total += chunk.length;
    console.log("bytes ", total)
})

readStream.pipe(throttle).pipe(passThrough).pipe(writeStream)