// С помощью какой конструкции можно управлять потоком выполнения скрипта  и отслеживать ошибки ?

//   Это возможно с помощью try { }...catch{ }

try {
  var number = 9;
  alert(number.toString(2));
  //...
  alert('Without exception!');
} catch (e) {
  alert('Exception!');
}