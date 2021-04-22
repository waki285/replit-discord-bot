const http = require("http");
const discord = require("discord.js");
const client = new discord.Client();
http.createServer(function(req, res) {
  res.write("OK");
  res.end();
}).listen(8080);