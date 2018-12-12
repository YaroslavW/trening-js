// Функция fixEvent предназначена для запуска в начале обработчика, вот так:


elem.onclick = function(event) {
    // если IE8-, то получить объект события window.event и исправить его
    event = event || fixEvent.call(this, window.event);
    ...
  }
//   Она добавит объекту события в IE8- следующие стандартные свойства:

//   target
//   currentTarget – если обработчик назначен не через attachEvent.
//   relatedTarget – для mouseover/mouseout и mouseenter/mouseleave.
//   pageX/pageY
//   which

  function fixEvent(e) {

    e.currentTarget = this;
    e.target = e.srcElement;
  
    if (e.type == 'mouseover' || e.type == 'mouseenter') e.relatedTarget = e.fromElement;
    if (e.type == 'mouseout' || e.type == 'mouseleave') e.relatedTarget = e.toElement;
  
    if (e.pageX == null && e.clientX != null) {
      var html = document.documentElement;
      var body = document.body;
  
      e.pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
      e.pageX -= html.clientLeft || 0;
  
      e.pageY = e.clientY + (html.scrollTop || body && body.scrollTop || 0);
      e.pageY -= html.clientTop || 0;
    }
  
    if (!e.which && e.button) {
      e.which = e.button & 1 ? 1 : (e.button & 2 ? 3 : (e.button & 4 ? 2 : 0));
    }
  
    return e;
  }