// Just a basic server setup for this site
var Stack = require('stack'),
    Creationix = require('creationix'),
    Http = require('http');
Http.createServer(Stack(
  Creationix.log(),
  // Ternary operator says if JOYENT == true, use env.HOME, else (after ":") local directory.
  require('wheat')(__dirname + "/..")
)).listen(process.env.JOYENT ? 80 : 3001);
console.log(__dirname);
console.log(process.env.JOYENT ? "Wheat server listening on port 80" : "Wheat server listening on port 3001");
