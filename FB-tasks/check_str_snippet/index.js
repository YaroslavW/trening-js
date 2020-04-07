function isJson(str) {
  try {
    JSON.parse(str);
  } catch (error) {
    return false;
  }
  return true;
}

// isJson("Hello");
console.log(isJson(1 < 0));
// true
console.log(isJson(NaN));
// false
