$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$('.header').sticky();

$('.header').on('sticky-start', function () {
  $('.description').html('We build <strong>great</strong> apps');
});

$('.header').on('sticky-end', function () {
  $('.description').html('We build apps');
});

$('h5').sticky({
  topSpacing: 60
});
$('h5').on('sticky-start', function () {
  $('h5').html('Want us to work on your project? <a href="#">email us</a>');
});

$('h5').on('sticky-end', function () {
  $('h5').html('Want us to work on your project?');
});
