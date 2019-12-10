var $ = jQuery.noConflict();

$(document).ready(function() {

    if (!($('body').hasClass('home'))) {

        // $('.nav-header').animate({opacity: 1}, 600);

    }
    else {
        // console.log('wait what');
        // $('.nav-header').animate({opacity: 1}, 600);

        // $('#works > *').animate({'opacity': 1}, 2000);

        $('video').on('hover', function() {
          this.play();
        })
    }

    var pathArray = window.location.pathname.split('/');
    var slug = pathArray[pathArray.length - 2];
    if (slug === 'about') {
        $('.page-title h1').css('color', '#ffcf49');
        $('.page-title h1').css('padding-left', '6px');
    }
    else if (slug === 'contact') {
        $('.page-title h1').css('color', '#4b49ff');
    }
    else {
        $('.page-title h1').css('color', '#ff4949');
    }


    let vh = window.innerHeight * .01;
    let vw = window.innerWidth * .01;


    $('photography-container .wp-block-gallery').on('scroll', function(e) {
        // console.log(window.scrollY);
    });






    // console.log(vw);
    // document.documentElement.style.setProperty('--vh', `${vh}px`);


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




    /* Works page */
    $(function() {

        if (document.querySelector('.page-title')) {
            // determine which project clicked
            let typeOfProjs;

            let worksTitle = document.querySelector('.page-title').firstElementChild.innerText;
            if (worksTitle === 'Cinematography') {
                typeOfProjs = $('.cinematography-gallery');
                console.log('cine');

            }
            else if (worksTitle === 'Directing') {
                typeOfProjs = $('.directorial-gallery');
                console.log('dir');

            }
            else {
                return;
            }

            // TODO: photography
            // else {
                // pictures
            // }


            // set hyperlinks for each project
            $(typeOfProjs).animate({'opacity': 1}, 2500);
            [...typeOfProjs].forEach((proj) => {
              var ref = $(proj.firstElementChild.firstElementChild.firstElementChild.children[1].firstElementChild).attr('href');
                // var ref = $(proj.firstElementChild.firstElementChild.children[1].firstElementChild).attr('href');
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
        console.log(liDest.firstElementChild);
      }

    });

    /* set links to photo series */
    $(function() {

      var photoSeries = $('.photography-container figure .blocks-gallery-grid').children();
      [...photoSeries].forEach((series) => {
        console.log(series);
        var ref = $(series.firstElementChild.lastElementChild.firstElementChild).attr('href');
        $(series).wrap(`<a href="${ref}"></a>`)
      });
    });


    $(function() {
        console.log('hi');

        $('.image-description').append($('.full-image-container p'));
    });



    /* FORM */
    $('input').focus(function() {
        $(this).animate({'top': 6}, 300);
        $(this).prev().animate({'top': 4, 'font-size': 16, 'color': 'black'}, 300);
    })
    $('textarea').focus(function() {
        $(this).animate({'top': 6}, 300);
        $('.wpforms-submit-container').animate({'top': 6}, 300);
        $(this).prev().animate({'top': 4, 'font-size': 16, 'color': 'black'}, 300);
    });

});
