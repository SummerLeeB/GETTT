//제이쿼리로 nav>sub 배경과 함께 나오게 설정
	$(function(){
        //주메뉴에 마우스 올리면 서브메뉴 내려옴
        //자동으로 애니메이션 동작되는걸 막기 위해 stop();먼저 명령
        $('nav>ul>li').hover(function(){
           $('.sub').stop().slideDown();
           $('.sub_img').stop().slideDown();
           $('.sub_bg').stop().slideDown();
        },function(){
           $('.sub').stop().slideUp();
           $('.sub_img').stop().slideUp();
           $('.sub_bg').stop().slideUp();
        });
    });

//Main slide BX Slider (main) JS
 $(function(){
	//BX Slider 플러그인 사용
	$('.slider').bxSlider({
		auto:'true',
		mode:'fade'
	});
	//Rent Swiper
	 var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
 });

