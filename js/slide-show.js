var slideImagesBox = document.querySelector('.slide-images');
var allImages = document.querySelectorAll('.slide-images img');
var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');
var pauseButton = document.querySelector('.pause');
var playButton = document.querySelector('.play');
var captionBox = document.querySelector('.caption p');
var allDots = document.querySelectorAll('.dots');
var activeImage = 0;
var timer = null;

//Function hide allImages
function hideAll() {

  for (i = 0; i < allImages.length; i++) {
    allImages[i].classList.remove('active');
  }
};

//Function show Active Slide
function showActiveSlide(index) {

  hideAll();

  if (activeImage < 0) activeImage = allImages.length - 1;
  if (activeImage >= allImages.length) activeImage = 0;

  allImages[activeImage].classList.add('active');
  //data Index
  var dataIndex = parseInt(allImages[activeImage].getAttribute('data-index'));
  activeImage = dataIndex;
  //dataCaption
  var dataCaption = allImages[dataIndex].getAttribute('data-caption');
  captionBox.innerHTML = dataCaption;
  //dots
  allDots[dataIndex].classList.add('active');
  var newdataIndex = parseInt(dataIndex - 1);
  if (newdataIndex >= allDots.length) {
    newdataIndex = 0
  };
  if (newdataIndex < 0) {
    newdataIndex = allDots.length - 1
  };
  allDots[newdataIndex].classList.remove('active');
}

//prevButton click evt
prevButton.addEventListener('click', function() {
  activeImage--;
  showActiveSlide(activeImage);
  //dots
  allDots[activeImage].classList.add('active');
  var newIndex = activeImage + 1;
  if (newIndex >= allDots.length) {
    newIndex = 0
  };
  allDots[newIndex].classList.remove('active');
})

//nextButton click evt
nextButton.addEventListener('click', function() {
  activeImage++;
  showActiveSlide(activeImage);

})

showActiveSlide(activeImage);

//function setInterval
var timer = setInterval(function() {
  activeImage++;
  showActiveSlide(activeImage);
}, 2500);

/// pauseButton click evt
pauseButton.addEventListener('click', function() {
  playButton.classList.add('active');
  pauseButton.classList.add('active');
  clearInterval(timer);
  timer = null;
});

//playButton click evt
playButton.addEventListener('click', function() {
  if (!timer) {
    timer = setInterval(function() {
      activeImage++;
      showActiveSlide(activeImage);
    }, 2500);
  };
  playButton.classList.remove('active');
  pauseButton.classList.remove('active');
});
//dots click evt
for (var i = 0; i < allDots.length; i++) {
  allDots[i].addEventListener('click', function(evt) {
    var dataIndex = parseInt(evt.target.getAttribute('data-index'));
    console.log(dataIndex);
    showActiveSlide(dataIndex);
  })
}
