const connect = require("connect");
const app = connect();

// Middleware functions
function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}

function helloWorld(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("App has started");
}

function goodbyeWorld(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("goodbye");
}

app.use(logger);
app.use("/hello", helloWorld);
app.use("/goodbye", goodbyeWorld);

app.listen(3000);

console.log("Server running at http://localhost:3000/");
