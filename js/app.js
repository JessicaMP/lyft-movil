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
  alert('Tu codigo LAB -' + rand_code(caracteres, longitud));
  $('#next').attr('href', 'page2.html');
});

/* __________________Page 2________________*/
$('#code').keyup(function() {
  if ($('#code').val().length < 3) {
    $('#next2').addClass('disabled');
    $('#next2').removeClass('btn-next');
  } else if ($('#code').val().length == 3) {
    $('#next2').removeClass('grey lighten-2 disabled');
    $('#next2').addClass('btn-next');
  }
});

/* __________________Page 3________________*/
$('#First-name').keyup(function() {
  if ($('#First-name').val().length < 3) {
    $('#next3').addClass('disabled');
    $('#next3').removeClass('btn-next');
  } else if ($('#First-name').val().length == 3) {
    $('#next3').removeClass('grey lighten-2 disabled');
    $('#next3').addClass('btn-next');
  }
});
$('#test5').click(function() {
  if ($('input[type="checkbox"]:checked+label:before')) {
    $('#next3').removeClass('grey lighten-2 disabled');
    $('#next3').addClass('btn-next');
    $('#next3').attr('href', 'page4.html');
  }
});
