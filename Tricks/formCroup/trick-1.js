
// pure js
// for country test - js/file with social buttons
var count=0;
var block = "block";
var id = '#press';
var allright = 'allright';
var win =0;
var ind = ".press";
var results;
function checking(val){

  if(val == 3 || val == 6 || val == 12 || val == 16 || val ==17 || val == 23 || val == 27 || val == 30 || val == 36 || val == 38) {
    $('input[name='+block+']:checked', id).parent().addClass('right');
    $(ind).addClass('right');
    win += 1;
  } else {
    $('input[name='+block+']:checked', id).parent().addClass('wrong');
    $(id).find('.allright').addClass('right');
    $(ind).addClass('wrong');
  }
}
function getChecked(){
  count++;
  block +=count;
  id +=count;
  allright += count;
  ind += count;

var val = ($('input[name='+block+']:checked', id).val());
 checking(val);
 
}


function getWinAnswer(){
 results = ["0- балов это тоже результат",
"1 - очень плохо",
"2- плохо",
"3 - удовлетворительно",
"4 -хорошо, но можно лучше",
"5- вы старались и это ХОРОО!",
"6 - чуть подправить и будет все ОК!",
"7 - почти здорово",
"8- вы почти справились",
"9-до вершины один шаг",
"10 БАЛЛОВ - ВЫ ЛУЧШИЙ!"];
  document.getElementById('winanswer').innerHTML = results[win];
}





$(document.body).on('load', function () {
   $(document).ready(function(){
    setTimeout(function(){
        window.scrollTo(0, 0);
    }, 1);
})
});


// SotialBUTTONS*******************************************
var Shares = {
  title: 'Поделиться',
  width: 600,
  height: 400,

  init: function() {
    var share = document.querySelectorAll('.social');
    for(var i = 0, l = share.length; i < l; i++) {
      var url = share[i].getAttribute('data-url') || location.href, title = share[i].getAttribute('data-title') || '', 
        desc = share[i].getAttribute('data-desc') || '', el = share[i].querySelectorAll('a');
      for(var a = 0, al = el.length; a < al; a++) {
        var id = el[a].getAttribute('data-id');
        if(id)
          this.addEventListener(el[a], 'click', {id: id, url: url, title: title, desc: desc});
      }
    }
  },

  addEventListener: function(el, eventName, opt) {
    var _this = this, handler = function() {
      _this.share(opt.id, opt.url, opt.title, opt.desc);
    };
    if(el.addEventListener) {
      el.addEventListener(eventName, handler);
    } else {
      el.attachEvent('on' + eventName, function() {
        handler.call(el);
      });
    }
  },

  share: function(id, url, title, desc) {
    url = encodeURIComponent(url);
    desc = encodeURIComponent(desc);
    title = encodeURIComponent(title);
    switch(id) {
      case 'fb':
        this.popupCenter('https://www.facebook.com/sharer/sharer.php?url=' + url, this.title, this.width, this.height);
        break;
      case 'vk':
        this.popupCenter('https://vk.com/share.php?url=' + url + '&description=' + title + '. ' + desc, this.title, this.width, this.height);
        break;
      case 'tw':
        var text = title || desc || '';
        if(title.length > 0 && desc.length > 0)
          text = title + ' - ' + desc;
        if(text.length > 0)
          text = '&text=' + text;
        this.popupCenter('https://twitter.com/intent/tweet?url=' + url + text, this.title, this.width, this.height);
        break;
      case 'gp':
        this.popupCenter('https://plus.google.com/share?url=' + url, this.title, this.width, this.height);
        break;
            case 'ok':
        this.popupCenter('https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=' + url, this.title, this.width, this.height);
        break;
    };
  },

  newTab: function(url) {
    var win = window.open(url, '_blank');
    win.focus();    
  },

  popupCenter: function(url, title, w, h) {
    var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 3) - (h / 3)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    if (window.focus) {
        newWindow.focus();
    }
  }
};

$('.social a').on('click', function() {
  var id = $(this).data('id');
  if(id) {
    var data = $(this).parent('.social');
    var url = data.data('url') || location.href, title = data.data('title') || '', desc = data.data('desc') || '';
    Shares.share(id, url, title, desc);
  }
});


// The End Social BUTTONS***********************************
