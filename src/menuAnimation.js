$(document).ready(function() {
  // function to open/close nav
  function toggleNav(){
    // if nav is open, close it
    if($("nav").is(":visible")){
      $("nav").fadeOut();
      $("button").removeClass("menu");
    }
    // if nav is closed, open it
    else{
      $("button").addClass("menu");
      $("nav").fadeIn().css('display', 'flex');
    }
  }

  // close nav
  $("#nav-close").click(function(){
    toggleNav();
  });

  // scroll to sections
  $("nav li").click(function(){
    // get index of clicked li and select according section
    var index = $(this).index();
    var target = $("content section").eq(index);
    
    toggleNav();
    
    $('html,body').delay(1).animate({
      scrollTop: target.offset().top
    }, 500);
  });

  // when clicking + or ☰ button
  $("#menuButton").click(function() {
    // when clicking ☰ button, open nav
      toggleNav();
    //} 
  });

});