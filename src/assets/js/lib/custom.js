/*============ NAVBAR TRANSPARENT TO SOLID: ============*/
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
      $(".primary-nav").addClass("solid");
    } else {
      $(".primary-nav").removeClass("solid");
    }
  });
});

/*============ TOGGLE MOBILE NAV OPEN/CLOSED & CHANGE HAMBURGER ICON: ============*/
$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".primary-nav .menu").slideToggle('slow');
    $(".primary-nav .menu").toggleClass("show");
    // change hamburger to "X"
    $(".hamburger").toggleClass("change");
  });
});

/*============ CLOSE MOBILE NAV ON CLICK: ============*/
$(document).ready(function () {
  $(document).click(function (event) {
    var $trigger = $(".hamburger");

    if ($trigger !== event.target && !$trigger.has(event.target).length && $trigger.hasClass('change')) {
      $(".primary-nav .menu").removeClass("show")
      $($trigger).removeClass("change");
      $(".primary-nav .menu").slideUp('slow');
    }
  });
});

/*============ BOUNCING DOWN ARROW: ============*/
$(document).ready(function () {
  $(window).scroll(function () {
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
  });
});

/*============ TESTIMONIAL CAROUSEL: ============*/
$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    stagePadding: 50,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    smartSpeed: 1500,
    margin: 50,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      }
    }
  });
});

/*============ SKILLS COUNTER UP: ============*/
$(document).ready(function () {
  $('.counter').counterUp({
    delay: 30,
    time: 1800
  });
});

/*============ SCROLL TO TOP OF PAGE: ============*/
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".top-scroll").fadeIn();
    } else {
      $(".top-scroll").fadeOut();
    }
  });
});

/*============ ADD ACTIVE CLASS TO SIDE-NAV: ============*/
$(document).ready(function () {
  let url = window.location.href;
  $(".side-nav li a").each(function () {
    if (this.href === url) {
      $(this).addClass("is-active");
    }
  });
});

/*============ ADD ACTIVE CLASS TO PRIMARY-NAV: ============*/
$(document).ready(function () {
  $('.menu a.is-active[href*="pricing"]').each(function () {
    $('.primary-nav .menu a[href$=pricing]').addClass('is-active');
  });
});

/*============ HIDE ALERT CALLOUT ON CONTACT FORM IF FIELDS HAVE BEEN FIXED: ============*/
$(document).ready(function () {
  $("input, textarea").on("change.zf.abide", function (ev, elem) {
    var invalid_fields = $("form").find("[data-invalid]");
    if (invalid_fields.length > 0) $(".alert.callout").css("display", "block");
    else $(".alert.callout").css("display", "none");
  });
});

/*============ ANIMATE PROGRESS BARS ============*/
$(document).ready(function () {
  $('#header').waypoint(function (direction) {
    if (direction === 'down') {
      $('.progress-meter').width(function () {
        // this here refers to individual .progress-bar items
        return $(this).data('score');
      });
    } else {
      $('.progress-meter').width(0);
    }
  }, {
    offset: '-5%'
  });
});

/*============ BUILD AND LOOP THROUGH THE PORTFOLIO ============*/