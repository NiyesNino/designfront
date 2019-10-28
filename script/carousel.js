



function initSlideShow (container){
	var buttonLeft = container.querySelector(".prev")
	var buttonRight = container.querySelector(".next")
	var slideIndex = 1;
	buttonLeft.addEventListener("click", function(){
		plusSlides(-1)
	});
	buttonRight.addEventListener("click", function(){
		plusSlides(1)
	});
		showSlides(slideIndex);

		function plusSlides(n) {
		  showSlides(slideIndex += n);
		}

		function currentSlide(n) {
		  showSlides(slideIndex = n);
		}

		function showSlides(n) {
		  var i;
		  var slides = container.querySelectorAll(".mySlides");
		  if (n > slides.length) {slideIndex = 1}    
		  if (n < 1) {slideIndex = slides.length}
		  for (i = 0; i < slides.length; i++) {
		      slides[i].style.display = "none";  
		  }
		
		  slides[slideIndex-1].style.display = "block";  
		}
}

var slideShows = document.querySelectorAll(".slideshow-container")
for (i = 0; i < slideShows.length; i++) {
		        initSlideShow(slideShows[i])
		  }
