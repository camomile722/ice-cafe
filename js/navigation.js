var navIcon = document.querySelector('.nav-icon i');
var navi = document.querySelector('.navigation');
var subNavButton = document.querySelector('.navigation ul .sub-nav');
var subNav = document.querySelector('#sub-nav-box');

//------------------drop-down menu---------------
navIcon.addEventListener('click', function() {
  navi.classList.toggle('active');
});
//-------------------sub-Menu----------------------
subNavButton.addEventListener('click', function() {
  subNav.classList.toggle('active');
});
