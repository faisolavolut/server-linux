import HyperExpress, { MiddlewareHandler } from "hyper-express";
const mime = require("mime-types")
const { v4: uuidv4 } = require('uuid');
const { pipeline } = require("node:stream/promises");
const fs = require("node:fs");
import path from "path";

const webserver = new HyperExpress.Server({
  max_body_length: 1000000000000,
});

// Create GET route to serve 'Hello World'
webserver.get("/", (req, res) => {
  res.send("ok");
});

webserver.any("/upload", async (req, res) => {
  await req.multipart(async (field) => {
    if (field.file) {
      let pathFile = path.join(
        "./storage",
        "images",
        uuidv4() + path.extname(field.file.name || ''),
        
      );
      console.log(pathFile)
      console.log('halo')
      try {
        // await field.write(pathFile);
        await pipeline(field.file.stream, fs.createWriteStream(pathFile));
      } catch (err) {
        console.log("error", err);
      }
    }
  });
  res.send("ok");
});

// Activate webserver by calling .listen(port, callback);
webserver
  .listen(12300)
  .then(() => console.log(`Webserver started on port ${'http://localhost:12300'}`))
  .catch(() => console.log("Failed to start webserver on port 80"));
