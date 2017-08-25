function stringManipulation(n) {
  var vocal = ('a, i, u, e, o');
  var add = ('nyo');
  var result = " ";

   if (!vocal.includes(n[0])) {
     result = n.slice(1, n.length)+n[0]+add;
     return result;
   }
   return n;
}
stringManipulation('saya');
