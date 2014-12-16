var makeImageDancer = function(top, left, timeBetweenSteps, color){
  makeDancer.call(this, top, left, timeBetweenSteps, color);

  var urls = {
    toonlink : "http://media.giphy.com/media/WgmMsEZChSHqE/giphy.gif",
    taco : "http://media.giphy.com/media/XsJe7wtSNoMCY/giphy.gif",
    napoleon : "http://media.giphy.com/media/2xYVcpM2mgHxS/giphy.gif",
    charlieBrown : "http://media.giphy.com/media/erDzjPcUlkfHG/giphy.gif",
    thumbMan : "http://media.giphy.com/media/m2aXmCgxKkyGI/giphy.gif",
    spongeBob : "http://media.giphy.com/media/Zfh2Na5b6qopy/giphy.gif",
    homer : "http://media.giphy.com/media/8OUdE03f3Nauc/giphy.gif",
    exoticDancer : "http://media.giphy.com/media/Q1fBo1zYD1By8/giphy.gif"
  }

  this.randUrl = urls[Object.keys(urls)[Math.floor(Math.random() * Object.keys(urls).length)]];

  this.$node.addClass('imageDancer');
  this.$node.css({'background': 'url(' + this.randUrl + ')'});

};


var robot = "http://giphy.com/gifs/dancing-dance-beach-Vm6YGB3Ng8lnW";
var lady = "http://media.giphy.com/media/bJGQavEgK77jy/giphy.gif";



makeImageDancer.prototype = Object.create(makeDancer.prototype);
makeImageDancer.prototype.constructor = makeImageDancer;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
makeImageDancer.prototype.oldStep = makeDancer.prototype.step;

makeImageDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeImageDancer.prototype.oldStep.call(this);

};
