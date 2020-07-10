


 //кнопка наверх
$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();
 
}
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
 
});

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



$(function () {
    var location = window.location.href; //url текущей страницы
    var cur_url =  location.split('/').pop();
    if(cur_url.indexOf('#') + 1) {
      cur_url =  cur_url.split('#').shift() ;
    }
    $('.menu li').each(function () {
        var link = $(this).find('a').attr('href');
 
        if (cur_url == link) {

            $(this).addClass('current');
          
            A
        }
    });
});