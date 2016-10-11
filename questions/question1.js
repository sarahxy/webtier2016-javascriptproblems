/**
 *  Simply objects
 */

/** ================================================================================
 *  object1 is just a normal Javascript object. Fill out the function question1
 *  to concatenate the values with a ", " (that is common and space) in between
 *
 *  There are many ways to do this, do it as simply as possible
 *  (use the object like a dictionary)
 *
 *  Example:
 *  question1(); // returns: "betta, greyhound, scottish fold"
*  ================================================================================ */
var question1 = function() {
	return object1["fish"] + ", " + object1["dog"] + ", " + object1["cat"];
};


/** ================================================================================
 *  Don't touch anything below here!
 *  ================================================================================ */

// Normally you would put the object before the function you call it in, but no
// touchy.
var object1 = {
  fish: 'betta',
  dog: 'greyhound',
  cat: 'scottish fold'
};

module.exports = question1;

