var url = window.location.href.split("url=")[1];
document.title = url
const pl = new DPlayer({
container: document.getElementById('player'),
preload:'none',
theme:'#44bdff',
video: {
    url: url,
},
});