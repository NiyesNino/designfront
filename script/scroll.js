 $(document).ready(function(){
    $(window).scroll(function (event) {
         var top = $(window).scrollTop();
       var divH1 = $('#first-page').outerHeight() - $('header').outerHeight();
       var divH2 = divH1;
       var divH3 = divH2 + $('#page3').outerHeight();
       var divH4 = divH3 + $('#page4').outerHeight();
       var divH5 = divH4 + $('#page5').outerHeight();
       if(top < divH1){
         $("a").removeClass('active');
         $(".accueil-link").addClass('active');
       }
       if(top >= divH2){
         $("a").removeClass('active');
         $(".occasion-link").addClass('active');
       }
       if(top >= divH3){
         $("a").removeClass('active');
         $(".a-propos-link").addClass('active');
       }
       if(top >= divH4){
         $("a").removeClass('active');
         $(".boutique-link").addClass('active');
       }
       if(top >= divH5){
         $("a").removeClass('active');
         $(".contact-link").addClass('active');
       }
        });
  });