let title = document.getElementById('title');
let changeTitleBtn = document.getElementById('changeTitle');

changeTitleBtn.addEventListener('click', function(e){
    title.textContent = "You clicked button 1";
});

let pulseBtn = document.getElementById('pulseBtn');
pulseBtn.addEventListener('click', function(e){
    title.textContent = "Pulse";
    title.classList.add('pulse');
});

let rollBtn = document.getElementById('rollBtn');
rollBtn.addEventListener('click', function(e){
    title.textContent = "Barrel Roll";
    title.classList.add('barrelRoll');
});

let shakeBtn = document.getElementById('shakeBtn');
shakeBtn.addEventListener('click', function(e){
    shakeBtn.textContent = "shake shake shake";
    shakeBtn.classList.add('shake');
});

let colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', function(e){
    title.classList.add('yellowGreen');
});

let fadeOutBtn = document.getElementById('fadeOutBtn');
fadeOutBtn.addEventListener('click', function(e){
    fadeOutBtn.classList.add('fadeOut');
});

let fadeInBtn = document.getElementById('fadeInBtn');
fadeInBtn.addEventListener('click', function(e){
    fadeInBtn.classList.add('fadeIn');
});

let beatBtn = document.getElementById('beatBtn');
beatBtn.addEventListener('click', function(e){
    beatBtn.classList.add('heartbeat');
});

let slideUpBtn = document.getElementById('slideUpBtn');
slideUpBtn.addEventListener('click', function(e){
    slideUpBtn.classList.add('slideUp');
});

let slideDownBtn = document.getElementById('slideDownBtn');
slideDownBtn.addEventListener('click', function(e){
    slideDownBtn.classList.add('slideDown');
});