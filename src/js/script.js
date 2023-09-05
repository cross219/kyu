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
    effect: "fade",
    clickable: true,
    autoplay: {
      delay: 4000,
    },
  });

  var swiper = new Swiper(".js-campaign-swiper", {
    loop: true, // ループ
    spaceBetween: 24, // スライド間の距離
    slidesPerView: "auto", // 一度に表示する枚数
    // loopAdditionalSlides: 2,
    paginationClickable: true,
    // width: 280,
    speed: 1000, // ループの時間
    grabCursor: true,
    allowTouchMove: true, // スワイプ無効
    centeredSlides: false, // アクティブなスライドを中央にする
    autoplay: {
      //自動再生
      delay: 3000, // 途切れなくループ
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    navigation: {
      nextEl: ".campaign-swiper__button-next",
      prevEl: ".campaign-swiper__button-prev",
    },

    breakpoints: {
      768: {
        // slidesPerView: 3.5,
        spaceBetween: 40, // スライド間の距離
        // width: 1265.5,
      },
      // 1920: {
      //   slidesPerView: 5,
      //   spaceBetween: 40, // スライド間の距離
      //   width: 1825,
      // },
    },
  });

  //  ヘッダークラス名付与
  // let header = $(".header");
  // let headerHeight = $(".header").height();
  let height = $(".fv ,.sub-mv").height();

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
});

jQueryTab();
function jQueryTab() {
  const tabs = ".js-tab";
  const contents = ".js-content";
  const lists = ".js-list";
  const activeClass = "is-active";

  //タブ切り替え
  $(tabs).on("click", function () {
    const i = $(this).index();
    $(tabs).removeClass(activeClass);
    $(contents).removeClass(activeClass);
    $(this).addClass(activeClass);
    $(contents).eq(i).addClass(activeClass);
  });
}

//モーダル
$(function () {
  // モーダルを表示する関数
  function showModal(imageUrl) {
    $(".gallery__modal-image").attr("src", imageUrl);
    $(".gallery__modal").addClass("active");
  }

  // モーダルを非表示にする関数
  function hideModal() {
    $(".gallery__modal").removeClass("active");
  }

  // 画像をクリックしたらモーダルを表示
  $(".gallery__item.js-modal").on("click", function () {
    var imageUrl = $(this).find("img").attr("src");
    showModal(imageUrl);
  });

  // モーダルをクリックして閉じる
  $(".gallery__modal").on("click", function () {
    hideModal();
  });

  // モーダル外の領域をクリックしたらモーダルを非表示にする
  $(".gallery__modal-overlay").on("click", function () {
    hideModal();
  });
});



//アコーディオンをクリックした時の動作
$('.js-faq').on('click', function() {//タイトル要素をクリックしたら
  $('.faq__icon').toggleClass("is-open");
  var findElm = $(this).next(".faq__content");//直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle();//アコーディオンの上下動作
    
  if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
    $(this).removeClass('close');//クラス名を除去し
  }else{//それ以外は
    $(this).addClass('close');//クラス名closeを付与
  }
});