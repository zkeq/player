
function playM3u8(url){
  if(Hls.isSupported()) {
      var player = videojs("player");
      player.src(url);
      player.load(url);
      document.title = url
    }
}

playM3u8(window.location.href.split("url=")[1])