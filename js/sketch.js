var $ = jQuery.noConflict();

var myCanvas;

let ninaFont;
let artwork;
let xPos, yPos;
let xOffset, yOffset;
let start;

let done;

function preload() {
    // ninaFont = loadFont('NINAFONT');
    artwork = loadImage('./wp-content/uploads/2019/10/ZFace.png');
}


function setup() { 
    myCanvas = createCanvas(windowWidth,windowHeight);
    myCanvas.parent('main');
    
    background(255);
    fill(255);
    noStroke();

    done = false;
    start = false;


    imageMode(CENTER);

    // randomize perlin noise landscape
    noiseDetail(47);

    xPos = 250;
    yPos = 250;
    xOffset = random(1000);
    yOffset = random(2000, 3000);
  


    window.onpopstate = function(event) {
        window.history.back();
        // TODO: go back to homepage
      };
} 



function draw() {
    background(255);
   
    if (start) {
        xPos += map(noise(xOffset), 0, 1, 1, 10);
        yPos += map(noise(yOffset), 0, 1, -4, 5);
        xOffset += 0.01;
        yOffset += 0.01;

        if (xPos > windowWidth) {
            done=true;
        }

        image(artwork, xPos,yPos,300,300);
    }
    else {
        image(artwork, xPos,yPos,300,300);

    }

    if (done) {
        $('#see-work-button').animate({opacity: 0}, 400);
        // TODO: animate image


        $('canvas').animate({opacity: 0}, 2500, function() {
        noLoop();

            // history.pushState({page: "work"}, 'Work', './work');
            $(this).parent().css('display', 'none');

            $('#works > *').animate({'opacity': 1}, 2000);
            
            // $('.nav-header').animate({right: windowWidth - 100}, 600);

            $('.nav-header').animate({opacity: 1}, 2500);
            
        });
    }
}

function mouseClicked() {
    start = true;
    $('#see-work-button').animate({opacity: 0}, 400);
}

function keyPressed() {
    console.log('IS THIS STILL WORKING');
    
    if (key === 'd' || key === 'D') {
        
        done = true;
    }
}

