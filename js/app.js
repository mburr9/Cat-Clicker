currentCat = null;


$(function() {
  for (let i = 0; i < allCats.length; i++) {
    let elem = `<li class="cat-name">${allCats[i].name}</li>`;
    $('.cat-list').append(elem);
  };
});

$(function() {
  let i = 0;
  let cats = $('.cat-name');
  cats.each(function() {
    $(this).click( (function(index) {
      return function() {
        currentCat = allCats[index];
        currentCat.placeImage();
        currentCat.setClicks();
      };
    })(i));
    i += 1;
  });
});

$('.cat-pic').click(function() {
  currentCat.clicks += 1;
  $('.clicks').html(currentCat.clicks);
});


class Cat {
  constructor(name,url,desc) {
    this.name = name;
    this.clicks = 0;
    this.imageUrl = url;
    this.desc = desc;
  }

  placeImage() {
    $('.cat-pic').attr({
      src: `images/${this.imageUrl}.jpg`,
      alt: this.desc
    });
  };

  setClicks() {
    $('.clicks').html(this.clicks);
  };
}

let allCats = [ new Cat('Minerva','minerva', 'cat sitting on a pumpkin'),
                new Cat('Gus', 'gus', 'cat laying outside'),
                new Cat('Ralph', 'ralph', 'cat laying inside'),
                new Cat('Reggie', 'reggie', 'cat laying with crazy eyes'),
                new Cat('Sam', 'sam', 'cat sitting like a human')];
