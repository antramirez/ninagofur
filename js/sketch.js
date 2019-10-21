var $ = jQuery.noConflict();

var myCanvas;

let ninaFont;
let artwork;

let theWanderers = [];
let xPos, yPos;
let xOffset, yOffset;
let start;

let done;

let gather; // bool to gather wanderers

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


    statusWidth = 0;
    statusY = windowHeight;
    fillScreen = true;
    done = false;
    tintVal = 255;
    gather = false;

    imageMode(CENTER);

    // randomize perlin noise landscape
    noiseDetail(24);
    blockWidth = 30;
    blockHeight = 30;
  
    // slice up our image into a series of smaller strips
    // we will send those strips into a bunch of 'Wanderer' objects
    // and have them move around the world randomly
    for (var x = 0; x < artwork.width; x += blockWidth) {
        for (var y = 0; y < artwork.height; y += blockHeight) {
            // cut out a strip
            var strip = new p5.Image(blockWidth, blockHeight);
            strip.copy(artwork, x, y, blockWidth, blockHeight, 0, 0, blockWidth, blockHeight);
    
            // construct a new wanderer
            var tempWanderer = new Wanderer(x, y, strip);
    
            // add the wanderer to our array
            theWanderers.push(tempWanderer);
        }
    }


    /* COMMENT START
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
      */
} 



function draw() {
    if (done) {


        // background(255);


        $('#see-work-button').animate({opacity: 0}, 400);

        $('canvas').animate({opacity: 0}, 2500, function() {
            noLoop();
    
                // history.pushState({page: "work"}, 'Work', './work');
                $(this).parent().css('display', 'none');
    
                $('#works > *').animate({'opacity': 1}, 2000);
                
                // $('.nav-header').animate({right: windowWidth - 100}, 600);
    
                $('.nav-header').animate({opacity: 1}, 2500);
                
            });

            // // stop sketch
            // noLoop();
            // // $('canvas').css('display', 'none');
            // $('canvas').animate({opacity: 0}, 2500, function() {
            // // noLoop();

            //     // history.pushState({page: "work"}, 'Work', './work');
            //     $(this).parent().css('display', 'none');
            //     $('#works > *').animate({'opacity': 1}, 2000);
                
            //     $('.nav-header').animate({right: windowWidth - 100}, 600);

            //     $('.nav-header > *').animate({opacity: 1}, 2500);
                
            // });



    }
    else {
        background(255, 10);
        // fill(255);
        // text("click & hold to enter site", windowWidth - 60, windowHeight - 60);    
    
        // move the origin point of the screen so we can center everything
        push();
        translate(150, 100);
    
        // display all wanderers
        for (var i = 0; i < theWanderers.length; i++) {
            // if (dist(theWanderers[i].x, theWanderers[i].y, theWanderers[i].desiredX, theWanderers[i].desiredY)) {
            //   console.log('gotem');
            // }
            theWanderers[i].displayAndMove();
        }
    
        // restore origin point
        pop();
    
    
        // status bar
        if (gather) {
            if (statusWidth < windowWidth) {
                statusWidth+=10;
            }
            else {
                done = true;
                // noLoop();
                // background(0);
                // history.pushState({page: "work"}, 'Work', './work');
                // TODO: go to work page (slide page)
                
            }
        }
        else {
            if (statusWidth > 0) {
                statusWidth-=5;
            }
            else {
                statusWidth = 0;
            }
        }
    
        // noStroke();
        // rectMode(LEFT);
        // fill(150);
        // rect(0, windowHeight - 10, windowWidth, windowHeight);
        // fill(255);
        // rectMode(LEFT);
        // rect(0, windowHeight - 10, statusWidth, 10);
    }

    /* COMMENT START
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
    COMMENT END */
}

function mouseClicked() {
    start = true;
    gather = true;
    $('#see-work-button').animate({opacity: 0}, 400);
}

function keyPressed() {
    console.log('IS THIS STILL WORKING');
    
    if (key === 'd' || key === 'D') {
        
        done = true;
    }
}






function Wanderer(x, y, myImage) {
    // store our initial position
    this.x = x;
    this.y = y;
  
    this.desiredX = x;
    this.desiredY = y;
  
    this.myImage = myImage;
  
    this.xOffset = random(1000);
    this.yOffset = random(2000, 3000);
  
    // display and move function
    this.displayAndMove = function() {
      if (!gather) {
        this.x += map(noise(this.xOffset), 0, 1, -1, 1);
        this.y += map(noise(this.yOffset), 0, 1, -1, 1);
        this.xOffset += 0.01;
        this.yOffset += 0.01;
      }

      else {
        var xDist = this.desiredX - this.x;
        var yDist = this.desiredY - this.y;
  
        this.x += xDist * 0.05;
        this.y += yDist * 0.05;
      }
  
  
      // display ourselves
      image(this.myImage, this.x, this.y);
    }
  }