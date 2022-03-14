var card = document.querySelector('.card');
var container = document.querySelector('.container');

container.addEventListener('mousemove', function(event){
    // X and Y Axis Movement
    var xAxis = (window.innerWidth / 2 - event.pageX) / 20;
    var yAxis = (window.innerWidth / 2 - event.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Responsive Mouse Hovering
container.addEventListener('mouseleave', function(event){
    card.style.transform = "all 0.5s ease";
    card.style.transform = "rotateX(0deg) rotateY(0deg)";  
});

// Variables for querySelector
var title = document.querySelector('.title');
var social = document.querySelector('.social');
var profile = document.querySelector('.profile');
var photo = document.querySelector('.photo');


// Variables that will transform
title.style.transform = "translateZ(100px)";
social.style.transform = "translateZ(100px)";
profile.style.transform = "translateZ(100px)";
photo.style.transform = "translateZ(100px)";