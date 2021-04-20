$(document).ready(function () {
  anime({
    targets: '.drop-down-arrow',
    translateY: 10,
    delay: function (el, i) {
      return i * 100;
    },
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  });
  $('.mobile-inner .mobile-wrapper:last')
    .css('border-bottom', 'none');
  $("#nav_toggle").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $("#nav-mobile").toggleClass("active");
  });

  $("#close-mobile").on("click", function (event) {
    event.preventDefault();
    $("#nav-mobile").toggleClass("active");
  });

  $(".modal-open").on("click", function (event) {
    event.preventDefault();
    $("#nav-mobile").toggleClass("active");
  });

  $("#mobile-features").on("click", function (event) {
    event.preventDefault();
    $("#nav-mobile").toggleClass("active");
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".main-features").offset().top - 15
    }, 500);
  });

  $("#mobile-home").on("click", function (event) {
    event.preventDefault();
    $("#nav-mobile").toggleClass("active");
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".download-desktop-app").offset().top
    }, 500);
  });

  $('.description').on('input', function (e) {
    var textEntered, countRemaining, counter;
    textEntered = $(this).val();
    counter = (450 - (textEntered.length));
    countRemaining = document.getElementById('charactersRemaining');
    countRemaining.innerText = counter;
  })

  var carousel = $("#owl-demo").owlCarousel({
    navigation: true, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    items: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    loop: true,
    touchDrag: false,
    mouseDrag: false
  });

  $('.profile-card[data-slide="0"').addClass('active')

  $('.profile-card').click(function () {
    $('.profile-card').removeClass('active')
    $(this).addClass('active')

    carousel.trigger('to.owl.carousel', [$(this).data().slide, 300]);
  })

  carousel.on('changed.owl.carousel', function (event) {
    $('.profile-card').removeClass('active')
    $($('.profile-cards-desktop .profile-card')[event.page.index]).addClass('active');
    $($('.profile-cards-mobile .profile-card')[event.page.index]).addClass('active');
  })

  $('.drop-down-arrow', ).click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $('.main-features').offset().top
    }, 500);
  });

  $('#features-scroll', ).click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $('.main-features').offset().top
    }, 500);
  });

  $('#home-scroll', ).click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $('.download-desktop-app').offset().top
    }, 500);
  });

  AOS.init({
    duration: 3200
  });

  $('.field').on('keyup', function () {
    $(this).removeClass('error');
  })

  $('.modal-open').on('click', function () {
    $('#modal-contact').modal({
      escapeClose: false,
      clickClose: false,
      showClose: false
    })
  })


  $('.modal-form').submit(function (e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var message = $('.description').val();
    var fields = $('.field');
    $("input").removeClass('error');
    $("textarea").removeClass('error')

    required(name, '#name')
    required(subject, '#subject')
    required(message, '.description')
    required(email, '#email')

    if (isValidEmail(email) == false) {
      $('#email').addClass('error');
    }

    $('span.accepted').remove();
    $('span.error-text').remove();

    if ($(fields).hasClass('error')) {
      $('.submit-modal').before('<span class="error-text">Make sure all fields are correct</span>');
    } else {
      $('.submit-modal').before('<span class="accepted">Message sent - thank you!</span>');
      setTimeout(function () {
        $('.close_modal').trigger('click')
      }, 1500)
    }
  });
});

var required = function (value, selector) {
  if (!value.length) {
    $(selector).addClass('error')
  }
}

var isValidEmail = function (email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!regex.test(email)) {
    return false;
  } else {
    return true;
  }
}