var userInfo = {
  name: "User Name",
  age: 48,
  designation: "developer"
};

var cloneData = { ...userInfo };
// cloneData.name = "Yaroslav Kolesnikov";

function compareObj(obj_1, obj_2) {
  if (obj_1 == obj_2) {
    console.log("TRUE");
  } else {
    console.log("FALSE");
  }
}

compareObj(cloneData, userInfo);
// FALSE
