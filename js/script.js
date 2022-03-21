//loading
$(window).on('load', function(){
  $('#loading-wrap').delay(900).fadeOut(800);
});
$(function(){
  setTimeout('stopload()', 10000);
})
function stopload(){
  $('#loading-wrap').delay(900).fadeOut(800);
}


//hamburger menu btn & drawer menu
$(function () {
  $('#hamburger-btn').click(function () {
    $('body').toggleClass('is-drawer-active')

    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', 'true')
      $('#drawer').attr('area-hidden','false')
    } else {
      $(this).attr('aria-expanded', 'false')
      $('#drawer').attr('area-hidden','true')
    }
  })
  //hamburger menu bun background
  $('.js-hamburger-bg').click(function () {
    $('body').removeClass('is-drawer-active')
    $('#hamburger-btn').attr('aria-expanded', 'false')
    $('#drawer').attr('area-hidden','true')
  })
  $('.header__list a[href]').on('click', function() {
    $('#hamburger-btn').trigger('click');
  });
});


//back to page top
$(function() {
  var pagetop = $('#page-top');   
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) { 
      pagetop.addClass('is-fadein');
    } else {
      pagetop.removeClass('is-fadein');
    }
  });
  pagetop.on('click',function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500); 
  });
});


 //fixed header after scroll
$(function() {
  var headerNav = $('.header');
  var headerLogo = $('.header__logo img');
  var headerItem = $('.header__item');
  var headerBtn = $('.header__item--btn');
  var hamburger = $('.js-hamburger');
  var hamburgerLine = $('.js-hamburger__line');

  $(window).on('load scroll', function () {
    if($(this).scrollTop() > 500 && headerNav.hasClass('fixed') == false) {
      headerNav.css({'top': '-80px'});
      headerNav.addClass('fixed');
      headerNav.animate({'top': 0},600);
      headerLogo.attr('src', 'img/logo-block.png');
      headerItem.addClass('fixed');
      headerBtn.addClass('fixed');
      hamburger.addClass('fixed');
      hamburgerLine.addClass('fixed');
    }
    else if($(this).scrollTop() < 300 && headerNav.hasClass('fixed') == true){
      headerNav.removeClass('fixed');
      headerLogo.attr('src', 'img/logo-white.png');
      headerItem.removeClass('fixed');
      headerBtn.removeClass('fixed');
      hamburger.removeClass('fixed');
      hamburgerLine.removeClass('fixed');
    }
  });
});


//show error message when form is invalid
$(function() {
  $('.form__btn').on("click", function() {
    $('.form').find('.invalid').removeClass('invalid');
    $('input[required]:invalid,textarea[required]:invalid').each(function(){
      $(this).addClass('invalid');
      $(this).next().addClass('invalid');
    });

    //checkbox
    var check_count = $('.check__field :checked').length;
    if (check_count == 0 ){
      alert('お問い合わせ内容を１つ以上選択して下さい。')
      return false;
    }  

    if($('.invalid').length == 0){
      $('form').submit();
      console.log('送信しました');
    } else {
      console.log('未入力があります');
    }
    return false;
  });
});


// go to thanks.html after sent the form 
$(document).ready(function () {
  $('.form').submit(function (event) {
    var formData = $('.form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScqx29ae1oFoqnMdQcUXw9y5moMsznwi4EBusLzgl0OSt5RFg/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });
});


//smooth scroll
$(function () {
  $('a[href^="#"]').click(function () {
    var adjust = 40;
    var href = $(this).attr('href');
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
　  var speed = 500;
  $('html, body').animate({
    scrollTop: position
  }, speed, 'swing');
  return false;
  });
});

