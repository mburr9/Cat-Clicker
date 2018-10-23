$(function(){

  const model = {
    currentCat: null,
    cats: [
      {
        name: 'Minerva',
        imageUrl: 'minerva',
        desc: 'cat sitting on a pumpkin',
        clicks: 0
      },
      {
        name: 'Gus',
        imageUrl: 'gus',
        desc: 'cat laying outside',
        clicks: 0
      },
      {
        name: 'Ralph',
        imageUrl: 'ralph',
        desc: 'cat laying inside',
        clicks: 0
      },
      {
        name: 'Reggie',
        imageUrl: 'reggie',
        desc: 'cat laying with crazy eyes',
        clicks: 0
      },
      {
        name: 'Sam',
        imageUrl: 'sam',
        desc: 'cat sitting like a human',
        clicks: 0
      }
    ]
  };

  const octopus = {
    init: function() {
            model.currentCat = model.cats[0];
            catListView.init();
            catView.init();
    },

    getCats: function() {
        return model.cats;
    },

    getCurrentCat: function() {
      return model.currentCat;
    },

    setCurrentCat: function(cat) {
      model.currentCat = cat;
    },

    changeClicks: function() {
      model.currentCat.clicks += 1;
      catView.render();
    }



  }

  const catListView = {
    init: function() {
      this.render();
    },

    render: function() {
              let allCats = octopus.getCats();
              for (let i = 0; i < allCats.length; i++) {
                let elem = document.createElement('li');
                elem.textContent = allCats[i].name;
                $('.cat-list').append(elem);
                $(elem).click( (function(index) {
                  return function() {
                    octopus.setCurrentCat(allCats[index]);
                    catView.render();
                  };
                })(i));
              };

    }
  };

  const catView = {
    init: function() {
      $('.cat-pic').click(function() {
        octopus.changeClicks();
      });
      this.render();
    },

    render: function() {
              let currentCat = octopus.getCurrentCat();
              $('.name').html(currentCat.name);
              $('.cat-pic').attr({
                src: `images/${currentCat.imageUrl}.jpg`,
                alt: currentCat.desc
              });
              $('.clicks').html(currentCat.clicks);
    }

  };
  octopus.init();

});
