/**
 *  Let's get you started! A simple one to kick things off.
 **/

/** ================================================================================
 *  Fill in question0 to take in params below and return "Hello {first} {last}!"
 *  where first and last are capitalized.
 *
 *  The first character of both first and last are capitalized but all other
 *  characters are lowercase.
 *
 *  {param} first - string
 *  {param} last - string
 *  {return} string
 *
 *  Example:
 *  question0('julia', 'sun'); // returns: "Hello Julia Sun!"
 *  ================================================================================ */
var question0 = function(first, last) {
	firstName = first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
	lastName = last.charAt(0).toUpperCase() + last.slice(1).toLowerCase();
	return "Hello " + firstName + " " + lastName + "!";
};


/** ================================================================================
 *  Don't touch anything below here!
 *  ================================================================================ */
module.exports = question0;

