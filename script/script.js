$(function(){
  //검색버튼 이벤트
  $('.search_bt').click(function(){
    $('.search_wrap').stop().slideToggle();
  });

  //메뉴버튼 이벤트
  $('.gnb_menu').click(function(){
    $('#gnb').stop().animate({right:0},200);
  });
  $('#gnb ul .home').click(function(){
    $('#gnb').stop().animate({right:-256},200);
  });

});