const { Readable } = require("stream");
const crypto = require("crypto");

const CHUNK_SIZE = 1024 * 1024; // 1 MB

class DownloadStream extends Readable {
    constructor() {
        super({
            highWaterMark: CHUNK_SIZE * 4,
        });

        this.chunk = Buffer.allocUnsafe(CHUNK_SIZE);
        crypto.randomFillSync(this.chunk);
    }

    _read() {
        while (this.push(this.chunk)) {
            // Keep pushing until backpressure says stop
        }
    }
}

module.exports = DownloadStream;