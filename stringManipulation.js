function stringManipulation(word) {
  //write your code here
  var vokal = ["a", "i", "u", "e", "o" ];
  var konsonan = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m",
                  "n", "p", "q", "r", "s", "t", "v", "w", "x" ,"y", "z"];

  var string =''

  vokal.forEach(function(replace){
	if (replace === word.toLowerCase().charAt(0)){
                string = word;
	}
   });

  konsonan.forEach(function(replace){
	 if (replace === word.toLowerCase().charAt(0)) {
              string = word.slice(1) + word.toLowerCase().charAt(0) + "nyo";}})

  console.log(string);
  }

stringManipulation('ayam'); //"ayam"

stringManipulation('bebek'); //"ebekbnyo"
