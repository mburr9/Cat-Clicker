let clicks = 0;
$('.cat').click(function() {
  $('.clicks').html(clicks += 1);
});
