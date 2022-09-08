$.fn.animateRotate = function(angle, duration, easing, complete, start) {
  var args = $.speed(duration, easing, complete);
  var step = args.step;
  return this.each(function(i, e) {
    args.complete = $.proxy(args.complete, e);
    args.step = function(now) {
      $.style(e, 'transform', 'rotate(' + now + 'deg)');
      if (step) return step.apply(e, arguments);
    };

    $({deg: start}).animate({deg: angle}, args);
  });
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


var prev_location = 0;
$("#spin-btn").click(function(){
    var spin_rotation = getRandomInt(75, 360);
    var spin_duration = spin_rotation * 5;
    console.log("spin " + spin_rotation);
    $("#wheel-img").animateRotate(spin_rotation, spin_duration, 'swing', function () {}, prev_location);
    prev_location = spin_rotation;
});
