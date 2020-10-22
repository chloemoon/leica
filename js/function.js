$(function(){
    //변수선언
    const $gnb = $('header > .con-nav > .con-nav-inner .gnb > ul > li');
    const $snb = $('header > .bg_lnb');
    const $lnb = $('header > .con-nav > .con-nav-inner .gnb > ul > li > .lnb');
    const $slides = $('.sec-slides-wrapper > .sec-slides > .sec-slides-container');
    const $indicators = $('.sec-slides-wrapper > .sec-slides > .sec-slides-indicators > li > a');
    let nowIdx = 0;
    let intervalID = null;
    //메뉴 이벤트 등록

    $gnb.on('mouseover', function(){
        //인덱스 추출
        nowIdx = $gnb.index(this);
        
        //메뉴 나오기
        $snb.stop().slideDown(200);
        $lnb.eq(nowIdx).stop().slideDown(500);
       
    });
    $gnb.on('mouseout', function(){
        //인덱스 추출
        nowIdx = $gnb.index(this);
        //메뉴 나오기
        $lnb.eq(nowIdx).stop().slideUp(100);
        $snb.stop().slideUp(150);
    });

    $gnb.eq(3).on("mouseover", function(){
        $lnb.eq(3).hide();
        $snb.hide();
    });

    //슬라이드 이벤트 등록 
    $indicators.on('click', function(evt){
        //인덱스 추출
        nowIdx = $indicators.index(this);
        //인디케이터 활성화
        $indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
        //슬라이드 이동
        $slides.stop().animate({
			left: nowIdx * -100 + '%'
		});
        evt.preventDefault();
    });

    //자동슬라이드함수

    const autoPlay = function() {
		intervalID = setInterval(function() {
            if(nowIdx<4){
                nowIdx++;
            } else {
                nowIdx = 0
            }
			//트리거 trigger - 방아쇠 => 이벤트 강제발생 API
            $slides.stop().animate({
                left: nowIdx * -100 + '%'
            });
            $indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		}, 3000);

    };
    autoPlay();

    //섹션 - 슬릭 슬라이드

    $('.art-slick-slides').slick({
      centerMode: true,
      centerPadding: '-60px',
        autoplay:true,
        autoplayspeed:500,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1, 
        responsive: [
          {
            breakpoint: 1700,
            settings: {
              centerMode: true,
              centerPadding: '-300px',
              slidesToShow: 3,
              slidesToScroll: 1,

            }
          },
          {
            breakpoint: 600,
            settings: {
              centerMode: true,
              centerPadding: '-300px',
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 500,
            settings: {
              centerMode: true,
              centerPadding: '-300px',
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
              

   
});