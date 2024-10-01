$('.carousel').slick({  
    autoplay: false, // 自動再生
    autoplaySpeed: 5000, // 自動再生の速さ、単位はミリ秒
    dots: true, // ドットを表示
    fade: true, // フェードで切り替え
  });


  $('.quistion-box').on('click', function(e) {
    var content = $(this).next();
    content.slideToggle();
  $(this).toggleClass("open");
  });