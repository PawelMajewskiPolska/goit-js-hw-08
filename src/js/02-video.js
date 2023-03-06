import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_TIME = 'videoplayer-current-time';

const currentPlayer = document.querySelector('#vimeo-player');

const player = new Player(currentPlayer);

player.on(
  'timeupdate',
  throttle(function (time) {
    localStorage.setItem(LOCALSTORAGE_TIME, JSON.stringify(time.seconds));
  }, 1000)
);

if (localStorage.getItem(LOCALSTORAGE_TIME) !== null) {
  player.setCurrentTime(parseInt(localStorage.getItem(LOCALSTORAGE_TIME)));
} else {
  player.setCurrentTime(0);
}
