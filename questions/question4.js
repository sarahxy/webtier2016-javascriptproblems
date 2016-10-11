const $ = require('jquery'); // Don't touch this!

/** ================================================================================
 *  Use jquery so that when you click the button with id="question4", the
 *  background of the box below the button get's filled with purple. On every 4th
 *  click, the box should then turn red instead of turning purple.
 *
 *  You'll probably find the class active very useful. Look at `scss/index.scss`
 *  ================================================================================ */
var counter = 0;

$('#question4').click(function() {
	counter++;
	if (counter % 4 === 0) {
		$(".box").css("background", "red");
	} else {
		$(".box").css("background", "purple");
	}
	
	console.log("Click count: " + counter);
});

/** ================================================================================
 *  Don't touch anything below here!
 *  ================================================================================ */
module.exports = question4;

