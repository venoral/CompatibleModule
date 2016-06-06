var EventUtil = {
  /**
   * @param {[$.type(DOMelementArray)|window]} $ele [元素]
   * @param {[string]} type [事件名称]
   * @param {[function]} handler [事件处理程序函数]
   */
  addHandler : function (ele, type, handler){
    if(ele.addEventListener){
      ele.addEventListener(type, handler, false);
    }else if(ele.attachEvent){
      ele.attachEvent('on' + type, handler);
    }else{
      ele['on' + type] = handler;
    }
  },
  removeHandler : function (ele, type, handler){
    if(ele.removeEventListener){
      ele.removeEventListener(type, handler);
    }else if(ele.detachEvent){
      ele.detachEvent('on' + type, handler);
    }else{
      ele['on' + type] = null;
    }
  },

  /**
   * @param  {[obj]} event [事件对象]
   * @return {[obj]} event [事件对象]
   */
  getEvent : function (event){
     return event ? event : window.event;
  },
  /**
   * @param  {[obj]} event [事件对象]
   * @return {[obj]} target [目标对象]
   */
  getTarget : function (event) {
     return event.target || event.srcElement;
  },
  /**
   * @param  {[obj]} 事件对象
   */
  preventDefault : function (event) {
     if( event.preventDefault ){
        event.preventDefault();
     }else{
        event.returnValue = false;
     }
  },
  stopPropagation : function (event) {
     if( event.stopPropagation ){
        event.stopPropagation();
     }else{
        event.cancelBubble = true;
     }
  }
  
};
