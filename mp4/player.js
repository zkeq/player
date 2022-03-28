var url = window.location.href.split("url=")[1];
document.title = url

var cookie = {
  set: function(name, value) {
          var Days = 1;
          var exp = new Date();
          exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
          document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
          },
          get: function(name) {
                  var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
                  if(arr = document.cookie.match(reg)) {
                          return unescape(arr[2]);
                  } else {
                          return null;
                  }
          },
          del: function(name) {
                  var exp = new Date();
                  exp.setTime(exp.getTime() - 1);
                  var cval = getCookie(name);
                  if(cval != null) {
                          document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
                  }
          }
  };
  var videoID =  url;//设置一个视频的id （唯一，可以设置为页面地址,可用md5）
  var cookieTime = cookie.get('time_' + videoID);
  if(!cookieTime || cookieTime == undefined) {
          cookieTime = 0;
  }


const pl = new DPlayer({
container: document.getElementById('player'),
preload:'none',
theme:'#44bdff',
video: {
    url: url,
},
});

if(cookieTime > 0) { //如果记录时间大于0，则设置视频播放后跳转至上次记录时间
    pl.seek(cookieTime);
}

pl.on('timeupdate', function () {
    cookie.set('time_' + videoID, pl.video.currentTime);
});