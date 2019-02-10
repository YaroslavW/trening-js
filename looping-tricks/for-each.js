var names = ["jerry", "tom", "pluto", "micky", "mini"];
names.forEach(Function1);
function Function1(currentValue, index) {
    console.log("Array Current Index is: " + index + " :: Value is: " + currentValue);
}
// Array Current Index is: 0 :: Value is: jerry
// Array Current Index is: 1 :: Value is: tom
// Array Current Index is: 2 :: Value is: pluto
// Array Current Index is: 3 :: Value is: micky
// Array Current Index is: 4 :: Value is: mini

