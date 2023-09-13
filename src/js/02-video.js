import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const VIDEO_KEY = 'videoplayer-current-time';
const player = new Player('vimeo-player');

player.on('timeupdate', throttle(onVideoTimeSave, 1000));

if (localStorage.getItem(VIDEO_KEY)) {
  player.setCurrentTime(localStorage.getItem(VIDEO_KEY));
}
function onVideoTimeSave(evt) {
  let currentTime = evt.seconds;
  localStorage.setItem(VIDEO_KEY, currentTime);
}
