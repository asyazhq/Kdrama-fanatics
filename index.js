// Scroll to the top
function scrollTop() {
  const scrollTop = document.getElementById(scroll - top)

  if (this.scrollY >= 560) scrollTop.classList.add('scroll-top');
  else scrollTop.classList.remove(scroll - top);
}

window.addEventListener('scroll', scrollTop)


//Change color of the h2 in carousel
function mouseOver() {
  document.getElementById("toNextD").style.color = "rgb(198, 61, 47)";
}

function mouseOut() {
  document.getElementById("toNextD").style.color = "black";
}

function mouseOver1() {
  document.getElementById("toNextM").style.color = "rgb(198, 61, 47)";
}

function mouseOut1() {
  document.getElementById("toNextM").style.color = "black";
}

//Pausing the other videos when a new video starts playing
const videos = document.querySelectorAll('video');

videos.forEach(function (video) {
  video.addEventListener('play', function () {
    pauseOtherVideos(video);
  });
});

function pauseOtherVideos(currentVideo) {
  videos.forEach(function (video) {
    if (video !== currentVideo) {
      video.pause();
    }
  });
}


//Sound jquery
$('#mybtn').click(function () {
  var audio = new Audio('assets/sound.mp3');
  audio.onended = function () {
    alert('Thank you for subscribing to our website! I hope you had a great time exploring it!');
  };
  audio.play();
});


//Kdrama slider

var slider1 = document.querySelector('.slider1 .list');
var items1 = document.querySelectorAll('.slider1 .list .item');
var next1 = document.getElementById('next1');
var prev1 = document.getElementById('prev1');
var dots1 = document.querySelectorAll('.slider1 .dots li');

var lengthItems1 = items1.length - 1;
var active1 = 0;
next1.onclick = function () {
  active1 = active1 + 1 <= lengthItems1 ? active1 + 1 : 0;
  reloadSlider1();
}
prev1.onclick = function () {
  active1 = active1 - 1 >= 0 ? active1 - 1 : lengthItems1;
  reloadSlider1();
}
var refreshInterval1 = setInterval(() => { next1.click() }, 3000);
function reloadSlider1() {
  slider1.style.left = -items1[active1].offsetLeft + 'px';

  var last_active_dot1 = document.querySelector('.slider1 .dots li.active');
  last_active_dot1.classList.remove('active');
  dots1[active1].classList.add('active');

  clearInterval(refreshInterval1);
  refreshInterval1 = setInterval(() => { next1.click() }, 3000);
}

dots1.forEach((li, key) => {
  li.addEventListener('click', () => {
    active1 = key;
    reloadSlider1();
  })
})

// Movie slider
var slider2 = document.querySelector('.slider2 .list');
var items2 = document.querySelectorAll('.slider2 .list .item');
var next2 = document.getElementById('next2');
var prev2 = document.getElementById('prev2');
var dots2 = document.querySelectorAll('.slider2 .dots li');

var lengthItems2 = items2.length - 1;
var active2 = 0;
next2.onclick = function () {
  active2 = active2 + 1 <= lengthItems2 ? active2 + 1 : 0;
  reloadSlider2();
}
prev2.onclick = function () {
  active2 = active2 - 1 >= 0 ? active2 - 1 : lengthItems2;
  reloadSlider2();
}
var refreshInterval2 = setInterval(() => { next2.click() }, 3000);
function reloadSlider2() {
  slider2.style.left = -items2[active2].offsetLeft + 'px';

  var last_active_dot2 = document.querySelector('.slider2 .dots li.active');
  last_active_dot2.classList.remove('active');
  dots2[active2].classList.add('active');

  clearInterval(refreshInterval2);
  refreshInterval2 = setInterval(() => { next2.click() }, 3000);
}

dots2.forEach((li, key) => {
  li.addEventListener('click', () => {
    active2 = key;
    reloadSlider2();
  })
})

window.onresize = function (event) {
  reloadSlider1();
  reloadSlider2();
};


//kdrama filter
function w3AddClass(element, name) {
  element.classList.add(name);
}

function w3RemoveClass(element, name) {
  element.classList.remove(name);
}

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1 || c == "") {
      w3AddClass(x[i], "show");
    }
  }
  var btns = document.getElementsByClassName("btnFilter");
  for (i = 0; i < btns.length; i++) {
    btns[i].classList.remove("active");
  }
  event.currentTarget.classList.add("active");
}

// Show filtered elements by default
filterSelection("all");



//keypress 
function typing() {
  document.getElementById("email").style.backgroundColor = "#feffb8";
}

