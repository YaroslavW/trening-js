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

