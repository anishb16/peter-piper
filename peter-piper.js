/**
 * peter-piper.js
 * ==============
 * 
 * Count the number of times a capital `P` or lowercase `p` shows up in the
 * Peter Piper tongue twister.
 * 
 * Hint
 * ----
 * Read the 'References' section in the README, which contains links to some
 * JavaScript methods and language features that might be helpful.
 */

var peterpiper = '';
peterpiper += "Peter Piper picked a peck of pickled peppers.";
peterpiper += "A peck of pickled peppers Peter Piper picked.";
peterpiper += "If Peter Piper picked a peck of pickled peppers,";
peterpiper += "Where's the peck of pickled peppers Peter Piper picked?";

var counter = 0;

// TODO: Count the number of times an uppercase P or lowercase p character
//       occurs in the `peterpiper` string.

// Using for loop to count the number of times uppercase P or lowercase P 
//for (var i = 0; i < peterpiper.length; i++) {
 //   if (peterpiper.charAt(i) == 'P' || peterpiper.charAt(i) == 'p') {
 //       counter++;
//    }
//}

// For extra credit using the function countOccurances

function countOccurances(string, char) { 
   string = peterpiper.toUpperCase();
   var occurance = string.split(char);
     return occurance.length -1
}

counter = countOccurances(peterpiper, 'P');

console.log("There are " + counter + " P's in Peter Piper.");