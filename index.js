const fs = require("fs");

//////////////////////////////

/*
//  blocking sync
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `this is what we know: ${textIn}.\ncreated on: ${new Date()}`;

fs.writeFileSync("./txt/output.txt", textOut);
console.log("file has been written");

//  non blocking async
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) {
    console.log(err);
    return;
  }
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(data3);
      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("files written");
      });
    });
  });
});
console.log("will read file...");
*/

////////////////////////////////////
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end("hello from the server");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to request on port 8000");
});
