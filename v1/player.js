
function playM3u8(url){
    if(Hls.isSupported()) {
        var video = document.getElementById('player');
        video.volume = 1.0;
        var hls = new Hls();
        console.log(url)
        video.source = url
        hls.loadSource(m3u8Url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED,function() {
          video.play();
        });
        document.title = url
      }
  }
  
  playM3u8(window.location.href.split("url=")[1])