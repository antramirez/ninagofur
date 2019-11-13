var $ = jQuery.noConflict();

$(document).ready(function() {

    if (!($('body').hasClass('home'))) { 
        console.log('hello there');
        
        $('.nav-header').animate({opacity: 1}, 600);
    }
    else {
        console.log('wait what');
        $('.nav-header').animate({opacity: 1}, 600);

        $('#works > *').animate({'opacity': 1}, 2000);
        
    }
    
    let vh = window.innerHeight * .01;
    let vw = window.innerWidth * .01;


    // $(window).on('resize', () => {
    //     $('.nav-header').css('right', $(window).width() - 100);
    //     // $('#works').animate({right:0}, 600);

    //     // if works-single is displayed, move it to the left upon resizing
        
    //     let cineLeft = $('.works-single').css('left').split('').reverse().join('').substring(2).split('').reverse().join('');

    //     if (cineLeft < 0) {
    //         $('.works-single').css('left', -$(window).width() + 200);
    //         console.log('heyo');
            
    //     }
    // });


    

    
    // console.log(vw);
    // document.documentElement.style.setProperty('--vh', `${vh}px`);


    /* Nav menu */
    var fullScreen = false;
    var offSet = (vw * 100)- 100;

    var height = $(window).height();
    $('.hamburger-menu-container').on('click', function(evt) {

        // animate header to fill page
        // let rightPx = offSet + 'px';
        // if (fullScreen) {
        //     $(this).parent().animate({ 
        //         right: rightPx
        //     }, 600);
        // }
        // else {
        //     $(this).parent().animate({
        //         right: '0vw'
        //     }, 600);
        // }

        // if (fullScreen) {
            // $('.menu-nav-menu-container').toggleClass('menu-nav-menu-container-mobile', fullScreen);
            
            if (!fullScreen) {
                $('.menu-nav-menu-container').addClass('menu-nav-menu-container-mobile');
                $('.menu-nav-menu-container-mobile').animate({'top': 70}, 600);
                console.log('full screen now');
                
            }
            else {
                
                $('.menu-nav-menu-container-mobile').animate({'top': -height - 70}, 600, function() {
                    $('.menu-nav-menu-container').removeClass('menu-nav-menu-container-mobile');
                });
                console.log('not full screen');
                
            }
            fullScreen != fullScreen;
        // }

        // $('.menu-nav-menu-container').css('width', 'calc(100vw');
        // $('.menu-nav-menu-container').css('height', 'calc(100vh - 70px');


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
            }
            else if (worksTitle === 'Directorial Work Stills') {
                typeOfProjs = $('.directorial-gallery');
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
                var ref = $(proj.firstElementChild.firstElementChild.children[1].firstElementChild).attr('href');
                $(proj).wrap(`<a href="${ref}"></a>`)
            });
            

            $('.close-img-container-button').on('click', function() {
                $('.full-image-overlay-container').css('display', 'none');
            });
        }
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
    })

});


