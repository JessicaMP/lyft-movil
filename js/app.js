$(function() {
  setTimeout(function() {
    $('#splash').fadeOut();
    $('#city').removeClass('hide');
  }, 4000);
});
$('.button-collapse').sideNav();
// Page 1
$('a.btn.white').click(function() {
  $('#dropdown1').toggleClass('hide');
});
$('#dropdown1').attr({'style': 'width: 80px; position: absolute; top: 158px; left: 68px; display: block; opacity: 1'});
// $('ul#dropdow1.dropdow-content.active').attr({'style': 'width:80px'});
