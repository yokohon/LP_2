$('.carousel').slick({
  autoplay: false, // 自動再生
  autoplaySpeed: 5000, // 自動再生の速さ、単位はミリ秒
  dots: true, // ドットを表示
  fade: true, // フェードで切り替え
  mobileFirst: true, //初期設定がモバイル
  slidesToShow: 1,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 768, // 768px以上の画面サイズ
      settings: {
        slidesToShow: 3, // このサイズでの表示スライド数
        slidesToScroll: 3,
      }
    }
  ]
});


$('.question-strt').on('click', function (e) {
  var content = $(this).next();
  content.slideToggle();
  $(this).toggleClass("open"); 
});
