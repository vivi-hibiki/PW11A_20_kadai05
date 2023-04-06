const swiper = new Swiper(".swiper", {
    loop: true, //ループ表示

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        autoHeight: true
    },

    autoplay: { // スライドの自動再生
      delay: 3000, // スライド間の遷移の遅延を設定 (ミリ秒設定） 1000ミリ秒=1秒
    },
  
});


$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.global_nav').addClass('active');
      } else {
          $('.global_nav').removeClass('active');
      } 
      $("active").css({
          'opacity':'1',
          'transition' :'0.5s'
          });
      
  });
});
//メニュー内を閉じておく
$(function() {
  $('.global_nav a[href]').click(function() {
      $('.global_nav').removeClass('active');
     $('.hamburger').removeClass('active');
     $("active").css({
      'opacity':'0',
      'transition' :'0.5s'
      });
     
  });
});