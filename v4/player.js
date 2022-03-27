
function playM3u8(url){
  console.log(url)
  var video = document.getElementById('player');
  video.source = url

}

playM3u8(window.location.href.split("url=")[1])