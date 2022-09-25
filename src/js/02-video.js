import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const TIME_PLAYER = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

if (localStorage.getItem(TIME_PLAYER)) {
  player.setCurrentTime(localStorage.getItem(TIME_PLAYER));
}

function getTimeCode(data) {
  localStorage.setItem(TIME_PLAYER, data.seconds);
}

player.on('timeupdate', throttle(getTimeCode, 1000));
