var makeMovingDancer = function(top, left, timeBetweenSteps, color){
  makeDancer.call(this, top, left, timeBetweenSteps, color);
  this.top = top;
  this.left = left;
  this.movingUp = true;
  this.movingRight = true;
};

makeMovingDancer.prototype = Object.create(makeDancer.prototype);
makeMovingDancer.prototype.constructor = makeMovingDancer;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
makeMovingDancer.prototype.oldStep = makeDancer.prototype.step;

makeMovingDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeMovingDancer.prototype.oldStep.call(this);

  if (this.top <= 0) {
    this.movingUp = false;
  }
  if (this.top >= 800) {
    this.movingUp = true;
  }
  if (this.left <= 0) {
    this.movingRight = true;
  }
  if (this.left >= 800) {
    this.movingRight = false;
  }

  if (this.movingRight) {
    this.left += 5;
  } else {
    this.left -= 5;
  }

  if (this.movingUp) {
    this.top -= 5;
  } else {
    this.top += 5;
  }


  this.$node.css({'top': this.top, 'left': this.left});

};
