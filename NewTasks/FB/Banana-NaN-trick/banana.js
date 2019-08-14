console.log(("b" + "a" + +"a" + "a").toLowerCase());
// banana;
//
console.log("b" + "a" + +"a" + "a");
// baNaNa
// Второе + 'a' рассматривается, как приведение к числу - дает NaN и далее добавляется последнее 'a'
// Просто приведение к нижнему регистру немного путает

// sonans
console.log(("s" + "o" + +"x" + "s").toLowerCase());
// sonans
