const { App, getParts } = require("uWebSockets.js");
const {join, extname}  = require("path");
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");

const port = 12300;

const app = App({}).post('/upload', async (res:any, req:any) => {
  
  const header = req.getHeader('content-type');
  let buffer = Buffer.from('');
  await res.onData(async (chunk:any, isLast:any) => {
    /* Buffer this anywhere you want to */
    console.log('Got chunk of data with length ' + chunk.byteLength + ', isLast: ' + isLast);
    buffer = Buffer.concat([buffer, Buffer.from(chunk)]);
    /* We respond when we are done */
    if (isLast) {
      const data = getParts(buffer, header);
      let pathFile = join(
        "./storage",
        "images",
        uuidv4() + extname(data[0].filename || ''),
      );
      const fileStream = fs.createWriteStream(pathFile)
      await fileStream.write(Buffer.from(data[0].data))
      res.end('Thanks for the data!');
    }
  });

  res.onAborted(() => {
    /* Request was prematurely aborted, stop reading */
    console.log('Eh, okay. Thanks for nothing!');
  });
}).listen(port, (token:any) => {
  if (token) {
    console.log('Listening to port ' + port);
  } else {
    console.log('Failed to listen to port ' + port);
  }
});