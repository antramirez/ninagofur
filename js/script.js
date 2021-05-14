var $ = jQuery.noConflict();

$(document).ready(function() {

    if (!($('body').hasClass('home'))) {
      $('.nav-header').animate({opacity: 1}, 600);
    }

    var pathArray = window.location.pathname.split('/');
    var slug = pathArray[pathArray.length - 2];

    let vh = window.innerHeight * .01;
    let vw = window.innerWidth * .01;


    /* Nav menu */
    var fullScreen = false;
    var offSet = (vw * 100)- 100;

    var height = $(window).height();
    $('.hamburger-menu-container').on('click', function(evt) {
            if (!fullScreen) {
                $('.menu-nav-menu-container').addClass('menu-nav-menu-container-mobile');
                $('.menu-nav-menu-container-mobile').animate({'top': 70}, 600);

            }
            else {

                $('.menu-nav-menu-container-mobile').animate({'top': -height - 70}, 600, function() {
                    $('.menu-nav-menu-container').removeClass('menu-nav-menu-container-mobile');
                });

            }
            fullScreen != fullScreen;


        fullScreen = !fullScreen;

        // toggle hamburger menu
        $(this).toggleClass('menu-clicked');
    });


    /* hover effect over project name */
    [...$('.cinematography-gallery')].forEach((e) => {
      let gal = e;
      let titleDiv = document.createElement('h2');
      titleDiv.classList.add('title');
      let title = e.firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.innerText;
      titleDiv.innerText = title;
      console.log(this);
      gal.appendChild(titleDiv);
    });
    [...$('.directorial-gallery')].forEach((e) => {
      let gal = e;
      let titleDiv = document.createElement('h2');
      titleDiv.classList.add('title');
      let title = e.firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.innerText;
      titleDiv.innerText = title;
      console.log(this);
      gal.appendChild(titleDiv);
    });

    /* Works page */
    $(function() {

        if (document.querySelector('.page-title')) {
            // determine which project clicked
            var typeOfProjs = '';

            var worksTitle = document.querySelector('.page-title').firstElementChild.innerText;
            // console.log(worksTitle);
            if (worksTitle === 'CINEMATOGRAPHY') {
                typeOfProjs = $('.cinematography-gallery');
                // console.log('cine');
            }
            else if (worksTitle === 'DIRECTING') {
                typeOfProjs = $('.directorial-gallery');
                // console.log('dir');
            }
            else {
              // console.log('none');
              $('.works-gallery').animate({'opacity': 1}, 2500);
                return;
            }

            // set hyperlinks for each project
            $(typeOfProjs).animate({'opacity': 1}, 2500);
            [...typeOfProjs].forEach((proj) => {
              var ref = $(proj.firstElementChild.firstElementChild.firstElementChild.children[1].firstElementChild).attr('href');
              $(proj).wrap(`<a href="${ref}"></a>`)
            });

            $('.close-img-container-button').on('click', function() {
                $('.full-image-overlay-container').css('display', 'none');
            });
        }
    });


    $(function() {
      var coverInner = $('.full-images-container .wp-block-cover .wp-block-cover__inner-container');

      var liDest = $('.full-images-container .wp-block-gallery .blocks-gallery-grid .blocks-gallery-item')[0];
      if (liDest) {
        $(liDest.firstElementChild).append(coverInner);
      }

    });

    /* set links to photo series */
    $(function() {
      var photoSeries = $('.photography-container figure .blocks-gallery-grid').children();
      [...photoSeries].forEach((series) => {
        // console.log(series);
        var ref = $(series.firstElementChild.lastElementChild.firstElementChild).attr('href');
        $(series).wrap(`<a href="${ref}"></a>`)
      });
    });


    $(function() {
        $('.image-description').append($('.full-image-container p'));
    });


    /* FORM */
    $('input').focus(function() {
        $(this).animate({'top': 10}, 300);
        $(this).prev().animate({'top': 16, 'font-size': 18, 'color': 'black'}, 300);
    });
    $('textarea').focus(function() {
        $(this).animate({'top': 10}, 300);
        $('.wpforms-submit-container').animate({'top': 6}, 300);
        $(this).prev().animate({'top': 12, 'font-size': 18, 'color': 'black'}, 300);
        $('wpforms-submit-container').animate({'top': 36}, 300);
    });
});
