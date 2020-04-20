// Напишите скрипт, который используя оператор while 
// выведет все числа от 45 до 670, кратные 10.

function getSomeNum(){
  var n = 45;
  while(n <= 670){
    n % 10 === 0 ? console.log(n) : true;
    n++;
  }
}
getSomeNum();