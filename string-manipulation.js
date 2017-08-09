# String Manipulation

## challenge #5

buatlah sebuah fungsi untuk memanipulasi string dengan mengikuti aturan sebagai berikut:

1. apabila kata diawali huruf vokal, fungsi langsung mengembalikan kata tersebut.

2. apabila kata diawali huruf konsonan, huruf konsonan tersebut dipindahkan ke akhir kata dan menambahkan akhiran 'nyo' di katanya.




function stringManipulation(word) {

var includer = 'nyo';
var vocal =  'aiueo';
var placeWord = " ";

if(!vocal.includes(word[0].toLowerCase())){
  placeWord = word.slice(1,word.length)+word[0]+includer;
return placeWord;


}
return word;
}

console.log(stringManipulation('ayam'));
console.log(stringManipulation('bebek'));
