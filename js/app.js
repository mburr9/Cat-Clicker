let clicks = 0;
$('#minerva').click(function() {
  $('.clicks').html(clicks += 1);
});
$('#gus').click(function() {
  $('.clicks').html(clicks += 1);
});

let catNames = ['Minerva', 'Gus'];
$(function() {
  $('.cat').each(function(i) {
    $(this).append(`<p>${catNames[i]}<p>`);
  });
});
