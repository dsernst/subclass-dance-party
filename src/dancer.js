// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, color){
  if (top > $('body').height() - 30) {
    top -= 30;
  }
  if (left > $('body').width() - 30) {
    left -= 30;
  }

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.color = color;

  makeDancer.prototype.step.call(this);

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  makeDancer.prototype.setPosition.call(this, top, left);

};

makeDancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left,
    'border-color': '#' + this.color
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.alignDancers = function(){
  this.$node.css({'left': 0});
};

makeDancer.prototype.pairUp = function() {
  if (window.unPaired===undefined) {
    window.unPaired = window.dancers.slice();
  };
  var closest = {};
  for (var i = 0; i < window.unPaired.length; i++) {
    // debugger;
    if (window.unPaired[i]===this){
      continue;
    }
    var distance = Math.pow((this.top-window.unPaired[i].top),2) + Math.pow((this.left-window.unPaired[i].left),2);
    if (distance > closest.distance || closest.distance === undefined){
      closest.distance = distance;
      closest.dancer = window.unPaired[i];
      closest.i = i;
    }
  }
  var adjustTop = (closest.dancer.top - this.top)*.90;
  var adjustLeft = (closest.dancer.left - this.left)*.90;
  this.$node.css({'top':this.top + adjustTop, 'left': this.left + adjustLeft});
  window.unPaired.splice(closest.i, 1);
};

makeDancer.prototype.spin = function() {
  this.$node.addClass('spin');
};






















