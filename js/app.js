$(function() {
  setTimeout(function() {
    $('#splash').fadeOut();
    $('#city').removeClass('hide');
  }, 4000);
});

$('.button-collapse').sideNav();

/* __________________Page 1________________*/
$('a.btn.white').click(function() {
  $('#dropdown1').toggleClass('hide');
});

$('#dropdown1').attr({'style': 'width: 90px; position: absolute; top: 158px; left: 108px; display: block; opacity: 1'});
// Habilitando boton deacuerdo al contenido
$('#input_text').keyup(function() {
  if ($('#input_text').val().length < 10) {
    $('#next').addClass('disabled');
    $('#next').removeClass('btn-next');
  } else if ($('#input_text').val().length == 10) {
    $('#next').removeClass('grey lighten-2 disabled');
    $('#next').addClass('btn-next');
  }
});
// Codigo aleatorio LAB-000
function rand_code(chars, lon) {
  code = '';
  for (x = 0; x < lon; x++) {
    rand = Math.floor(Math.random() * chars.length);
    code += chars.substr(rand, 1);
  }
  return code;
}
caracteres = '0123456789';
longitud = 3;
// Mostrando codigo aleatorio
$('#next').click(function() {
  alert('Tu codigo LAB-' + rand_code(caracteres, longitud));
});
