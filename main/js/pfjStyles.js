$(document).ready(function() {

    setTimeout(function () {
    $(".logo").animate({opacity:1}, 500);   
    $(".top-line").animate({opacity:1}, 500); 
        setTimeout(function () {
        $(".hr").animate({opacity:1}, 500);
            $(".years-active").animate({opacity:1}, 500);
            $(".team-location").animate({opacity:1}, 500);
            $(".social-media-box").animate({opacity:1}, 500);
            setTimeout(function () {
                $(".season-info").animate({opacity:1}, 500);
            }, 250);
            }, 250);
               }, 250);
});

//var div = $('.post');
//makeTextRight();
function makeTextRight() {
    setTimeout(function() {
   // Get the current height of the div and save it as a variable.
   var height = $('.post').height();
//    console.log(height);
   // Set the font-size and line-height of the text within the div according to the current height.
   $(".post-year").css({
      'font-size': (height/2.4) + 'px',
//      'line-height': height + 'px'
   })
    }, 1);
}

$(window).resize(function () {
       var height = $('.post').height();
//    console.log(height);
   // Set the font-size and line-height of the text within the div according to the current height.
   $(".post-year").css({
      'font-size': (height/2.4) + 'px',
//      'line-height': height + 'px'
   })
});