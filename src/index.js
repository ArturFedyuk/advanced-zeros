module.exports = function getZerosCount(number, base) {
  
 let count = number;
 let date = base;
 let a, b, c = 0;

  for (let i = 2; i <= base; i++) 
  {
      a = 0;
      c = number;

      if (date % i == 0) 
      {
      b = 0;

      while (date % i == 0) 
      {
        b++;
        date = Math.floor(date / i);
      }

      while (c / i > 0) {
        a += Math.floor(c / i);
        c = Math.floor(c / i);
      }
      count = Math.floor(Math.min(count, a / b));
    }
  }
return count;
}
