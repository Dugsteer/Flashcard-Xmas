// LOADER, SIDEBAR and ABOUT INFO
const sidey = document.getElementById('sidebar');
const loader = document.getElementById("loaderDiv");
const extra = document.getElementById('info');
const ball = document.getElementById('ball');
const blue = window.matchMedia("(max-width: 800px)");
const cheers = new Audio('sounds/cheers.mp3');

function deactivate(){
    ball.classList.remove('action');
}

function kickball(){
    ball.classList.add('action');
    cheers.play();
    setTimeout(deactivate, 2000);
}



//     setInterval(switchpic, 2000);

//Play applause 

function clapping(){
    const claps = new Audio("sounds/applause.wav");
    claps.play();
}

// Show and hide about info
function show(){info.classList.toggle('xxc');};
function unshow(){info.classList.remove('xxc');};

//Center the loader wherever the page is
function checkForTop (){loader.style.top = (window.pageYOffset) + "px";}
checkForTop();

//Manage the loader
function stopLoader() {loader.classList.add("stop");}
function startLoader(){loader.classList.remove("stop"); setTimeout(stopLoader, 1000);}
setTimeout(stopLoader, 1000);

//Stop the sidebar appearing on small screens with matchmedia
function myFunction(x) {if (blue.matches) {sidey.classList.remove("block");}}
function toggler() {sidey.classList.toggle("block");}
myFunction(blue);

//Change main pic

// setInterval(picChanger, 5000);
// picChanger();

// function picChanger(){
//   mainpic.innerHTML === '<img src="img/froggy.png" alt="decorative">' ? mainpic.innerHTML = '<img src="img/froggy2.png" alt="decorative">' :  mainpic.innerHTML ='<img src="img/froggy.png" alt="decorative">'
// }

//FLIP CARDS

const inner = document.getElementById('inner');

function flipMe(){
    inner.classList.toggle('turnMe');
}

//CHANGE CARDS
const count = document.getElementById('count');
let imageArt = document.getElementById('image-art');
let imageText = document.getElementById('image-text');

var imageList = [
    "archery.jpg",
    "badminton.jpg",
    "basketball.jpg",
    "boxing.jpg",
    "climbing.jpg",
    "darts.jpg",
    "diving.jpg",
    "driving.jpg",
    "football.jpg",
    "golf.jpg",
    "gymnastics.jpg",
    "hang-gliding.jpg",
    "hiking.jpg",
    "hockey.jpg",
    "horse-riding.jpg",
    "ice-skating.jpg",
    "karate.jpg",
    "paddle-surfing.jpg",
    "rugby.jpg",
    "running.jpg",
    "sailing.jpg",
    "skiing.jpg",
    "surfing.jpg",
    "swimming.jpg",
    "table-tennis.jpg",
    "tennis.jpg",
    "weight-lifting.jpg",
    "windsurfing.jpg",
    "yoga.jpg"
];


let y = imageText.innerHTML;
let z = y.concat(".jpg");
let x = imageList.indexOf(z);


function goForwards() {
  if (x < imageList.length - 1) {
    x++;
    imageArt.src =  `/img/${imageList[x]}`;
   imageText.textContent = `${imageList[x].slice(0, -4)}`;
    count.innerHTML = `${x + 1}/${imageList.length}`;
    return x;
  } else {
    imageArt.src = ` /img/${imageList[imageList.length - 1]}`;
    imageText.textContent = `${imageList[imageList.length - 1].slice(0, -4)}`;
    count.innerHTML = `${imageList.length}/${imageList.length}`;
    x = 0;
    x = imageList.length -1;
    return x;
  }
}

function goBackwards() {
  if (x > 0) {
    x--;
    imageArt.src =  `/img/${imageList[x]}`;
    imageText.textContent = `${imageList[x].slice(0, -4)}`;
    count.innerHTML = `${x + 1}/${imageList.length}`;
    return x;
  } else {
    imageArt.src = ` /img/${imageList[0]}`;
    imageText.textContent = `${imageList[0].slice(0, -4)}`;
    count.innerHTML = `${1}/${imageList.length}`;
    x = 0;
    return x;
  }
}

goForwards();
goBackwards();
