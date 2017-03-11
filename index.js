let lovebotplayer = require('lovebotplayer');
let port = process.env.PORT || 8080;

lovebotplayer.start({
  port: port,
  enableLogging: true
});