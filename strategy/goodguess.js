let lovebotPlayer = require('lovebotplayer');

module.exports = (player, opponents) => {
  return lovebotPlayer.goodguess(player, opponents);
};