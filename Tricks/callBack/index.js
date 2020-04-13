let function_1 = function() {
  console.log("I'm funtion_1");
};

let function_2 = function(callBack) {
  console.log("I'm function_2");
  callBack();
};

function_2(function_1)
// I'm function_2
// I'm funtion_1