function fizzbuzz(num) {
    isFizz = num % 3 === 0;
    isBuzz =  num % 5 === 0;
    
    if(isFizz && isBuzz) return "fizzbuzz";
    else if (isFizz) return "fizz";
    else if (isBuzz) return "buzz";
    else return num;
    
  }
  
  for(var i=1; i<=25; i++){
    console.log(fizzbuzz(i));
  }