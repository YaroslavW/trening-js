$(function() {
    setInterval(function(){
      var dt = new Date();
      //$('.time').text(dt);
    
      var sec_deg = dt.getSeconds() * (360/60);
      var min_deg = dt.getMinutes() * (360/60);
      var hr_deg = dt.getHours() * (360/12) + dt.getMinutes() * (360/60/12); //Edit thanks to Chris Neale: https://codepen.io/onion2k/
  
      $('.clock .second-hand').css({'-webkit-transform':'rotate(' + sec_deg + 'deg)',	'-moz-transform':'rotate(' + sec_deg + 'deg)', '-o-transform':'rotate(' + sec_deg + 'deg)', '-ms-transform':'rotate(' + sec_deg + 'deg)', 'transform':'rotate(' + sec_deg  + 'deg)'});
  
      $('.clock .minute-hand').css({'-webkit-transform':'rotate(' + min_deg + 'deg)', '-moz-transform':'rotate(' + min_deg + 'deg)', '-o-transform':'rotate(' + min_deg + 'deg)', '-ms-transform':'rotate(' + min_deg + 'deg)', 'transform':'rotate(' + min_deg + 'deg)'});
  
      $('.clock .hour-hand').css({'-webkit-transform':'rotate(' + hr_deg + 'deg)', '-moz-transform':'rotate(' + hr_deg + 'deg)', '-o-transform':'rotate(' + hr_deg + 'deg)', '-ms-transform':'rotate(' + hr_deg + 'deg)', 'transform':'rotate(' + hr_deg + 'deg)'});
    
    }, 1000);
  });