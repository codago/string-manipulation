function stringManipulation(kata)
{
  if (kata.charAt(0)=='a' || kata.charAt(0)=='i' || kata.charAt(0)=='u' || kata.charAt(0)=='e' || kata.charAt(0)=='o' )
  {
    console.log(kata);
  }
  else
  {
    var awal = kata.charAt(0);
    var tambah = 'nyo';
    var hapus = kata.substr(1);
    console.log(hapus.concat(awal,tambah));

  }
}
stringManipulation('ayam');// ayam
stringManipulation('bebek');// ebekbnyo
