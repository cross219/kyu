jQuery(function ($) {
  // // この中であればWordpressでも「$」が使用可能になる

  /* 画像アニメーション */
  //要素の取得とスピードの設定
  var box = $(".js-colorbox"),
    speed = 700;

  //.colorboxの付いた全ての要素に対して下記の処理を行う
  box.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($(".color")),
      image = $(this).find("img");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
    color.on("inview", function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });

  //ドロワーメニュー
  $(".js-hamburger").on("click", function () {
    if ($(".js-hamburger").hasClass("is-open")) {
      $(".js-drawer-menu").fadeOut();
      $(".js-hamburger,.header").removeClass("is-open");
      $("body").css("overflow", "visible");
    } else {
      $(".js-drawer-menu").fadeIn();
      $(".js-hamburger,header").addClass("is-open");
      $("body").css("overflow", "hidden");
    }
  });

  // //swiper(fv)
  let swiper_works = new Swiper(".js-fv-swiper", {
    loop: true,
    clickable: true,
    autoplay: {
      delay: 3000,
    },
  });

  var swiper = new Swiper(".campaign-swiper", {
    loop: true, // ループ
    // loopAdditionalSlides: 5,
    // slidesPerView: 4, // 一度に表示する枚数
    spaceBetween: 24, // スライド間の距離
    speed: 800, // ループの時間
    grabCursor: true,
    allowTouchMove: true, // スワイプ無効
    centeredSlides: false, // アクティブなスライドを中央にする
    autoplay: {
      //自動再生
      delay: 4000, // 途切れなくループ
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    navigation: {
      nextEl: ".campaign-swiper__button-next",
      prevEl: ".campaign-swiper__button-prev",
    },


    breakpoints: {
      0: {
        slidesPerView: 1.25,
        spaceBetween: 24, // スライド間の距離
      },
      768: {
        
        slidesPerView: 2.5,
        spaceBetween: 40, // スライド間の距離
      },
      1300: {
        slidesPerView: 3.45,
        spaceBetween: 40, // スライド間の距離
      },
    },
  });

  //  ヘッダークラス名付与
  // let header = $(".header");
  // let headerHeight = $(".header").height();
  let height = $(".fv").height();

  var topBtn = $(".to-top");

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > height) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });
  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });


  //ボタンの矢印 色変化
  $(function () {
    $(".js-button").hover(
      function () {
        $(".button__arrow").addClass("is-active");
      },
      function () {
        $(".button__arrow").removeClass("is-active");
      }
    );
  });
});
