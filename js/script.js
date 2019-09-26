var $ = jQuery.noConflict();

$(document).ready(function() {


    if (!($('body').hasClass('home'))) {
        console.log('????');
        
        $('.nav-header').animate({opacity: 1}, 600);
    }
    else {
        console.log('why here?');
        
    }
    
    

    let vh = window.innerHeight * .01;
    let vw = window.innerWidth * .01;
    // console.log(vw);
    

    // document.documentElement.style.setProperty('--vh', `${vh}px`);

    $(window).on('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });





    var pos = 0;

    $(window).bind('mousewheel DOMMouse Scroll', function(event) {
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            pos += 20;
        } else {
            // if (pos >= 0) {
                pos -= 20;
            // }
            // else {
            //     console.log('NO MORE');
                
            // }
        }
        console.log(pos);
        
        if (pos <= (-vw * 100)) {
            console.log('DONE!!!');
            $('.nav-header').animate({opacity: 1}, 1000);
            $('.homepage-main').css('visibility', 'hidden');
        }
        else {
            $('.homepage').scrollLeft(-pos);
        }
    });






    /* Nav menu */
    var fullScreen = false;
    var offSet = (vw * 100)- 100;
    $('.hamburger-menu-container').on('click', function(evt) {

        // animate header to fill page
        let rightPx = offSet + 'px';
        if (fullScreen) {
            $(this).parent().animate({ 
                right: rightPx
            }, 600);
        }
        else {
            $(this).parent().animate({
                right: '0vw'
            }, 600);
        }

        fullScreen = !fullScreen;
        // toggle hamburger menu
        $(this).toggleClass('menu-clicked');
    });
});


