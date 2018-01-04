$(function() {
  setTimeout(function() {
    $('#splash').fadeOut();
    $('#city').removeClass('hide');
  }, 4000);
});

$('.button-collapse').sideNav();

/* __________________Page 1________________*/
$('i.material-icons').on('click', function() {
  $('#dropdown1').toggleClass('hide');
});

$('#dropdown1').attr({'style': 'width: 90px; position: absolute; top: 158px; left: 58px; display: block; opacity: 1'});

var banderas = [
  {
    // mexico
    'name': 'mexico',
    'image': '../assets/images/mexico.png',
    'codigo': '007',
  },
  {
    // colombia
    'name': 'colombia',
    'image': '../assets/images/colombia.png',
    'codigo': '009',
  },
  {
    // peru
    'name': 'peru',
    'image': '../assets/images/peru.png',
    'codigo': '+51',
  },
  {
    // usa
    'name': 'usa',
    'image': '../assets/images/usa.png',
    'codigo': '008',
  }
];

// Banderas
$('img.responsive-img').click(function() {
  /* for (i = 0; i < banderas.length; i++) {
    if ($(this).data('name') === banderas[i].name) {
      $(this).attr('src', banderas[i].image);
      console.log($(this));

      if ($('ul :first-child')) {
        $('#mexico').attr('src', '../assets/images/colombia.png');
        $('#colombia').attr('src', '../assets/images/mexico.png');
      } else if ($('ul :last-child')) {
        $('#mexico').attr('src', '../assets/images/usa.png');
        $('#usa').attr('src', '../assets/images/mexico.png');
      }
      }*/
  for (i = 0; i < banderas.length; i++) {
    if ($(this).data('name') === banderas[i].name) {
      $('#mexico').attr('src', banderas[i].image);
      $('#input_text').val(banderas[i].codigo);
    }
  }
});


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
    $('#next2').attr('href', 'page3.html');
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
