var url = window.location.href.split("url=")[1];
const pl = new DPlayer({
container: document.getElementById('player'),
preload:'none',
theme:'#44bdff',
video: {
    url: url,
    type: 'hls',
},
});
document.title = url