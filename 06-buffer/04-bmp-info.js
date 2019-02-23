#!usr/bin/node

const fs=require("fs");
      log=console.log;
const filename=process.argv[2];
var buf=fs.readFileSync(filename);
log("BMP file width:",buf.readInt32LE(0x12));
log("BMP file height:",but.readInt32E(0x16));
log('BMP file color depth:',but.readUInt16LE(0x1c));
