function displayVideo() {
  var videoUrl = document.getElementById('videoInput').value;
  var videoFrame = document.getElementById('videoFrame');
  var videoId = extractVideoId(videoUrl);

  if (videoId) {
      var embedUrl = 'https://www.youtube.com/embed/' + videoId;
      videoFrame.setAttribute('src', embedUrl);
      showElement(videoFrame);
      hideElement(document.getElementById('error'));
  } else {
      hideElement(videoFrame);
      showElement(document.getElementById('error'));
  }
}

function extractVideoId(url) {
 
  var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|live\/|watch\?v=|&v=)([^#\&\?]{11}).*/;
  var match = url.match(regExp);

  if (match && match[2].length === 11) {
      return match[2];
  } else {
      return null;
  }
}

function showElement(element) {
  element.style.display = 'inline-block';
}

function hideElement(element) {
  element.style.display = 'none';
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
