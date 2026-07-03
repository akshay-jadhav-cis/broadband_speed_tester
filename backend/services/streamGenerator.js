const { Readable } = require("stream");
const crypto = require("crypto");

const CHUNK_SIZE = 64 * 1024; // 64 KB

class DownloadStream extends Readable {

    constructor() {
        super();

        this.chunk = Buffer.alloc(CHUNK_SIZE);
        crypto.randomFillSync(this.chunk);
    }

    _read() {
        this.push(this.chunk);
    }
}

module.exports = DownloadStream;