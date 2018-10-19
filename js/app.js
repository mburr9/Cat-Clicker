let clicks = 0;
$('.first-cat').click(function() {
  $('.clicks').html(clicks += 1);
});
$('.second-cat').click(function() {
  $('.clicks').html(clicks += 1);
});
