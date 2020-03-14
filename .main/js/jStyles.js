
window.onload = startup();

function startup() {
  $(".load-container").hide();
}

$(document).ready(function() {
  // $(".title-container").hide();
  $(".title-container").animate({opacity:1}, 1000);
  setTimeout(function () {
    $(".subheading-container").animate({opacity:1}, 1000);
      setTimeout(function () {
      $(".section-1").animate({opacity:1}, 1000);
      }, 500);
  }, 500);

});

function checkFilled() {
   if($('.input-3').val().length > 0) {
     document.getElementById("adj-button").value="Submit";
   } else {
     document.getElementById("adj-button").value="Skip";
   }
}

$(document).ready(function() {
  var inputs = $("input");

  inputs.on("focus", function() {
    var inp_val = $(this).val();

    $(this)
      .parent()
      .addClass("filled");
  });

  inputs.on("blur", function() {
    var inp_val = $(this).val();

    if (inp_val == "") {
      $(this)
        .parent()
        .removeClass("filled");
    }
  });
});
