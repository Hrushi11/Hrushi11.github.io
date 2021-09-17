$(document).ready(function () {
  /* For the sticky navigation */
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;",
    }
  );

  /* Scroll on buttons */
  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-projects").offset().top },
      350
    );
  });

  /* Animations on scroll */
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );

  /* Mobile navigation */
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");

    nav.slideToggle(200);
  });
});
