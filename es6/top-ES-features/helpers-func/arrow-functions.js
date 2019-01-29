// ====this will have the same value as in the context of the function
// ES5
var _this = this
$('.btn').click(function(event){
  _this.sendData()
})
// ES6
$('.btn').click((event) =>{
    this.sendData()
  })

// ES5
var logUpperCase = function() {
    var _this = this
  
    this.string = this.string.toUpperCase()
    return function () {
      return console.log(_this.string)
    }
  }
  
  logUpperCase.call({ string: 'es6 rocks' })()

//   ES6
var logUpperCase = function() {
    this.string = this.string.toUpperCase()
    return () => console.log(this.string)
  }
  
  logUpperCase.call({ string: 'es6 rocks' })()


  var ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9']
var messages = ids.map(function (value) {
  return "ID is " + value // explicit return
})


var ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9']
var messages = ids.map((value, index, list) => `ID of ${index} element is ${value} `) // implicit return