var makeGrowingDancer = function(top, left, timeBetweenSteps, color){
  makeDancer.call(this, top, left, timeBetweenSteps, color);
  this.size = 5;
  this.up = true;
};

makeGrowingDancer.prototype = Object.create(makeDancer.prototype);
makeGrowingDancer.prototype.constructor = makeGrowingDancer;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
makeGrowingDancer.prototype.oldStep = makeDancer.prototype.step;

makeGrowingDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeGrowingDancer.prototype.oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.css({'border-width': this.size + 'px'});
    if (this.up){
      if (this.size <= 50){
        this.size+=10;
      } else {
        this.up = false;
      }
    } else {
      if (this.size > 0){
        this.size-=10;
      } else {
        this.up = true;
      }
    }
};
