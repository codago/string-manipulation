"use strict"

function stringManipulation(word) {
  //write your code here
  let vokal = ["a", "i", "u", "e", "o" ];
  let konsonan = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m",
                  "n", "p", "q", "r", "s", "t", "v", "w", "x" ,"y", "z"];

  let string =''

  vokal.forEach(replace =>{ if (replace === word.toLowerCase().charAt(0)){
                string = word; }});

  konsonan.forEach(replace =>{ if (replace === word.toLowerCase().charAt(0)) {
              string = word.slice(1) + word.toLowerCase().charAt(0) + "nyo";}})

  console.log(string);
  }

stringManipulation('ayam'); //"ayam"

stringManipulation('bebek'); //"ebekbnyo"
