﻿
//true if leapyear
//using for calculating orbits???
Date.prototype.isLeapYear = function () {
    var year = this.getFullYear();
    if ((year & 3) != 0) return false;
    return ((year % 100) != 0 || (year % 400) == 0);
};

// Get Day of Year
Date.prototype.getDayOfYear = function () {
    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var mn = this.getMonth();
    var dn = this.getDate();
    var dayOfYear = dayCount[mn] + dn;
    if (mn > 1 && this.isLeapYear()) dayOfYear++;
    return dayOfYear;
};

const PLANETS = [
    'MERCURY',
    'VENUS',
    'EARTH'
]; 

const sun = new Image();
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

var animationID; var play = true; 


function init() {

    //set canvas to full width and height
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    
    sun.src = 'images/sun.png';
    
    //initialize the animation
    window.requestAnimationFrame(animate);


    
}




var time;
function animate() {
    var xs = (window.innerWidth / 2) - (20 / 2);
    var ys = (window.innerHeight / 2) - (20 / 2);

    //draw behind existing content
    //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
    //ctx.globalCompositeOperation = 'destination-over';

     //starts with a clear canvas
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); 

    //overlay to darken stars
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.fillRect(0,0,innerWidth, innerHeight);

    //draw sun
    ctx.drawImage(sun, xs, ys, 20, 20);

    +getParam("scale") &&
    ctx.scale(.999,.999);

    //singleton
    // var earth = new Planet('EARTH');
    // earth.draw(ctx);

    for(let p of PLANETS){
        let planet = new Planet(p);
        planet.draw(ctx);
        if(planet.name.match(/earth/i)){
            //draw date
            ctx.fillStyle = 'white';
            ctx.font = `small large serif`;
            ctx.fillText(planet.newDateTime.toDateString().substr(4,11), xs - 20, ys - 10);
        }
    }
    


    //recursive call to draw to continue animation
    //animationID variable allows us to start stop
    //the current animation with cancelAnimationFrame
    animationID = window.requestAnimationFrame(animate);


    

}


init();

window.addEventListener('click', () => {
    if (play) {
        window.cancelAnimationFrame(animationID);
        play = false;
    } else {
        init();
        play = true;
    }
});

console.info("Earth's orbit is set for 60 seconds with speed param set to 1.\nSpeed == minutes per orbit");
