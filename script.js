function displayVideo() {
    var videoUrl = document.getElementById('videoInput').value;
    var videoFrame = document.getElementById('videoFrame');
    var videoId = extractVideoId(videoUrl);
    var embedUrl = 'https://www.youtube.com/embed/' + videoId;

    videoFrame.setAttribute('src', embedUrl);
}

function extractVideoId(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);

    if (match && match[7].length === 11) {
        document.getElementById('title').style.marginTop='0';
       
        hideP("error");
        nohideIframe("videoFrame");
        return match[7];
      
    } else {
        document.getElementById('title').style.marginTop='50px';
        hideIframe("videoFrame");
        nohideP("error");
    }
}
function nohideP(pId) {
    var p = document.getElementById(pId);
    if (p) {
       
      p.style.display = "inline-block";
    }
  }
  function hideP(pId) {
    var p = document.getElementById(pId);
    if (p) {
       
      p.style.display = "none";
    }
  }
  function hideIframe(iframId) {
    var fram = document.getElementById(iframId);
    if (fram) {
       
      fram.style.display = "none";
    }
  }
  function nohideIframe(iframId) {
    var fram = document.getElementById(iframId);
    if (fram) {
       
      fram.style.display = "inline-block";
    }
  }
  var audio = new Audio('button-click.mp3');
function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
  }