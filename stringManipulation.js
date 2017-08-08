function stringManipulation(word) {
  var prefik = "asyik";
  var tempWord = "";
  var vocal = "aiueo";

    if(!vocal.includes(word[0].toLowerCase())){
        tempWord = word.slice(1,word.length)+word[0]+prefik;
        return tempWord;
    }
    return word;
  
}

console.log(stringManipulation('ayam')); //"ayam"
console.log(stringManipulation('bebek')); //"ebekbasyik"
