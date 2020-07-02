$(document).ready(function() { 

    $(".image").click(function(){    
      var img = $(this);    
      var src = img.attr('src'); 
        $("body").append("<div class='popup'>"+ 
                "<div class='popup_bg'></div>"+ 
                "<img src='"+src+"' class='popup_img' />"+ "<div class='close_popup'><i></i></div>" +
                "</div>");
              $(".popup").fadeIn(800); 
              $(".popup_bg").click(function(){        
              $(".popup").fadeOut(800);    
              setTimeout(function() {    
              $(".popup").remove(); 
                         }, 800);
              });
                 $(".popup").click(function(){
                 $(".popup").fadeOut(800);
                   setTimeout(function() {
                   $(".popup").remove();
                   }, 800);
                 });
                    $(".close_popup").click(function(){
                     $(".popup").fadeOut(800);
                     setTimeout(function() {
                     $(".popup").remove();
                     }, 800);
                    });
    });
});

$(document).ready(function(){
  $('a[href*=#]').bind("click", function(e){
  var anchor = $(this);
  $('html, body').stop().animate({
  scrollTop: $(anchor.attr('href')).offset().top
  }, 1000);
  e.preventDefault();
  });
  return false;
  });