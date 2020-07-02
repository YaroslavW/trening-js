// get data const  deadline = 'Dec, 16, 2019';
// with + 29 days
let deadline = dni();
function dni() {
  var D = new Date();
  D.setDate(D.getDate() + 50);
  // console.log(D);
  var month = D.getMonth();
  console.log(month);
  function LitMonth(month) {
    switch (month) {
      case 0:
        month = "Jan";
        break;
      case 1:
        month = "Feb";
        break;
      case 2:
        month = "Mar";
        break;
      case 3:
        month = "Apr";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "Jun";
        break;
      case 6:
        month = "Jul";
        break;
      case 7:
        month = "Aug";
        break;
      case 8:
        month = "Sep";
        break;
      case 9:
        month = "Oct";
        break;
      case 10:
        month = "Nov";
        break;
      case 11:
        month = "Dec";
        break;

      default:
        month = month;
    }
    return month;
  }
  month = LitMonth(month);
  var day = D.getDate();
  var year = D.getFullYear();
  D = month + " " + day + " " + year;
  return console.log(D);
}
dni();
// Aug 21 2020
