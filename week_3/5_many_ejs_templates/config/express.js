var express = require("express"),
  morgan = require("morgan"),
  compress = require("compression"),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override");

module.exports = function () {

  var app = express();

  console.log('aaaaaaaaaaaaaaa ', process.env.NODE_ENV);

  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  } else if (process.env.NODE_ENV === "production") {
    app.use(compress());
  }

  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  app.use(bodyParser.json());
  app.use(methodOverride());

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    app.use(express.static('./public'));

  require('../app/routes/index.server.routes.js')(app);
  require('../app/routes/about.server.routes.js')(app);
  require('../app/routes/home.server.routes.js')(app);
  
  return app;
};
