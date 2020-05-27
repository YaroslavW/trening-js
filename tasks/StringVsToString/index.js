// String() vs .toString() in JS

// String()

// The String() method converts anything into a string

String(68); // "68"
String(null); // "null"
String(undefined); // "undefined"
String(true); // "true"

// toString()

// The toString() method convertsnumbers and booleans to string

(68).toString(); //"68"
true.toString(); //  "true

// But unlike the String() method< the .toString()
// method will throw a TypeError, when usedwith
// null or undefined

null.toString(); // TypeError
undefined.toString(); // TypeError
