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
        hideP("error");
        nohideIframe("videoFrame");
        return match[7];
      
    } else {

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
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.getElementById('user-icon');
const menu_items = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0%';
}
function close(){
    mainMenu.style.top = '-150%';
return;
}

  var audio = new Audio('button-click.mp3');
function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
  }
