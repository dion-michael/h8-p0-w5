function totalDigitRekursif(angka) {
    // you can only write your code here!
    if(angka < 10){
        return angka
    }
    var str = angka.toString()
    return parseInt(str[0]) + totalDigitRekursif(parseInt(str.substr(1)))

  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5