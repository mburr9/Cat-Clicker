$(function(){

  const model = {
    currentCat: null,
    adminVisible: false,
    cats: [
      {
        name: 'Minerva',
        imageUrl: 'images/minerva.jpg',
        desc: 'cat sitting on a pumpkin',
        clicks: 0
      },
      {
        name: 'Gus',
        imageUrl: 'images/gus.jpg',
        desc: 'cat laying outside',
        clicks: 0
      },
      {
        name: 'Ralph',
        imageUrl: 'images/ralph.jpg',
        desc: 'cat laying inside',
        clicks: 0
      },
      {
        name: 'Reggie',
        imageUrl: 'images/reggie.jpg',
        desc: 'cat laying with crazy eyes',
        clicks: 0
      },
      {
        name: 'Sam',
        imageUrl: 'images/sam.jpg',
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
            adminView.init();

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
    },

    showAdmin: function() {
      model.adminVisible = true;
      catView.render();
    },

    hideAdmin: function() {
      model.adminVisible = false;
      catView.render();
    },

    changeInfo: function() {
      model.currentCat.name = $('.admin-name').children('input').val();
      model.currentCat.imageUrl = $('.admin-url').children('input').val();
      model.currentCat.clicks = parseInt($('.admin-clicks').children('input').val());
      catListView.render();
      this.hideAdmin();
      catView.render();
    },

    getAdminStatus: function() {
      return model.adminVisible;
    }
  };

  const catListView = {
    init: function() {
      this.catList = $('.cat-list');
      this.render();
    },

    render: function() {
              let allCats = octopus.getCats();
              this.catList.html('');
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
  const adminView = {
    init: function() {
      $('.cancel').click(function() {
        octopus.hideAdmin();
      });
      $('.save').click(function() {
        octopus.changeInfo();
      });

      this.render();
    },

    render: function() {
      let currentCat = octopus.getCurrentCat();
      $('.admin-name').children('input').attr('value', currentCat.name);
      $('.admin-url').children('input').attr('value', currentCat.imageUrl);
      $('.admin-clicks').children('input').attr('value', currentCat.clicks);
    }
  };

  const catView = {
    init: function() {
      $('.cat-pic').click(function() {
        octopus.changeClicks();
      });
      $('#admin').click(function() {
        octopus.showAdmin();
      });

      this.render();
    },

    render: function() {
              let currentCat = octopus.getCurrentCat();
              $('.name').html(currentCat.name);
              $('.cat-pic').attr({
                src: currentCat.imageUrl,
                alt: currentCat.desc
              });
              $('.clicks').html(currentCat.clicks);
              let adminVisible = octopus.getAdminStatus();
              if (adminVisible === true) {
                $('.cat-info').removeClass('invisible');
              } else {
                $('.cat-info').addClass('invisible');
              }


    }

  };
  octopus.init();

});
