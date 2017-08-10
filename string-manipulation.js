function stringManipulation(word) {
  var vokal = ["a","e","i","o","u"];
  var konsonan = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
  var result =''

  vokal.forEach(function(element) {
    if (element == word.toLowerCase().charAt(0)) {
      result = word;
    }
  })
  konsonan.forEach(function(element){
    if (element == word.toLowerCase().charAt(0)) {
      result = word.slice(1) + word.toLowerCase().charAt(0)+"nyo";
    }
  })
  console.log (result)
}

stringManipulation('ayam');
stringManipulation('bebek');
