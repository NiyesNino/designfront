//carousel 1//
		var slideIndex = 1;
		showSlides(slideIndex);

		function plusSlides(n) {
		  showSlides(slideIndex += n);
		}

		function currentSlide(n) {
		  showSlides(slideIndex = n);
		}

		function showSlides(n) {
		  var i;
		  var slides = document.getElementsByClassName("mySlides");
		  var dots = document.getElementsByClassName("dot");
		  if (n > slides.length) {slideIndex = 1}    
		  if (n < 1) {slideIndex = slides.length}
		  for (i = 0; i < slides.length; i++) {
		      slides[i].style.display = "none";  
		  }
		  for (i = 0; i < dots.length; i++) {
		      dots[i].className = dots[i].className.replace(" active", "");
		  }
		  slides[slideIndex-1].style.display = "block";  
		  dots[slideIndex-1].className += " active";
		}
//carousel 2//
		var slideIndex2 = 1;
		showSlides2(slideIndex2);

		function plusSlides2(n2) {
		  showSlides2(slideIndex2 += n2);
		}

		function currentSlide2(n2) {
		  showSlides2(slideIndex2 = n2);
		}

		function showSlides2(n2) {
		  var i2;
		  var slides2 = document.getElementsByClassName("mySlides2");
		  var dots2 = document.getElementsByClassName("dot2");
		  if (n2 > slides2.length) {slideIndex2 = 1}    
		  if (n2 < 1) {slideIndex2 = slides2.length}
		  for (i2 = 0; i2 < slides2.length; i2++) {
		      slides2[i2].style.display = "none";  
		  }
		  for (i2 = 0; i2 < dots2.length; i2++) {
		      dots2[i2].className = dots2[i2].className.replace(" active", "");
		  }
		  slides2[slideIndex2-1].style.display = "block";  
		  dots2[slideIndex2-1].className += " active";
		}




 $(document).ready(function(){
    $(".nav-item").click(function () {
      $("a.active").removeClass('active');
      $(this).addClass('active');
      var active_section = $(this).attr('href'); //get active section id
      $('html, body').animate({
      //and scroll to the section
      scrollTop: $(active_section).offset().top
      }, 1000);
    });
  
  
   $(document).scroll(function () {
   //get document scroll position
     var position = $(document).scrollTop(); 
     //get header height
     var header = $('nav').outerHeight();
     
     //check active section
     $('.section').each(function(i) {
         if($(this).position().top <= (position + header))
          {
               $("a.active").removeClass('active');
               $("a").eq(i).addClass('active');
          }
      });
   }); 
  
 });
