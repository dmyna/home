window.onSpotifyWebPlaybackSDKReady = () => {
  const token = 'BQD4lZEEorlfJLqIfnMbFdAm5tGDB1FlveVwE76njTP2k7ewevDgoOnNQCf16tyfphPBTabH6x54CU1lDKWfKxZpn-mA3lSk4zRAPa50laDsHbFF6UZNcZweI59ZIWOk49YDwmv8V19GUDBFtDBzMgxWs6gm1cUcXJdKzFKVfbfMw3QpW0Ni9BVjkLE5fdd70cb82MApXoSlz3sMldvA8Dg';
  const player = new Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: cb => {
      cb(token);
    },
    volume: 1
  }); // Ready

  player.addListener('ready', ({
    device_id
  }) => {
    console.log('Ready with Device ID', device_id);
  }); // Not Ready

  player.addListener('not_ready', ({
    device_id
  }) => {
    console.log('Device ID has gone offline', device_id);
  });
  player.addListener('initialization_error', ({
    message
  }) => {
    console.error(message);
  });
  player.addListener('authentication_error', ({
    message
  }) => {
    console.error(message);
  });
  player.addListener('account_error', ({
    message
  }) => {
    console.error(message);
  });

  document.getElementById('togglePlay').onclick = function () {
    player.togglePlay();
  };

  player.connect();
};