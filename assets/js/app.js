const form = document.getElementById('contact-form');

$(document).ready(function() {
  $('.go-up').click(function() {
    $('body, html').animate({
      scrollTop: '0px'
    }, 300);
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.go-up').slideDown(300);
    } else {
      $('.go-up').slideUp(300);
    };
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/emailsend/',
    data: {
      "name": name,
      "email": email,
      "message": message
    },
    dataType: 'json'
  });


  window.location.href = 'file:///C:/Octavio/Perfil%20Profesional/Portafolio/NUEVAVERSION/index.html';
  alert('Email enviado correctamente');
  form.reset();
});
