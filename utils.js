//创建ajax请求对象
function createRequest(){
  try{
    request = new XMLHttpRequest();
  }catch(tryMS){
    try{
      request = new ActiveXObject("Msxml2.XMLHTTP");
    }catch(otherMS){
      try{
        request = new ActiveXObject("Microsoft.XMLHTTP");
      }catch(failed){
        request = null;
      }
    }
  }
  return request;
}

//判断是否为数组
function isArray(arg){
  if(arg.constructor.toString().match(/array/i) != null){
    return true;
  }else{
    return false;
  }
}

//注册事件处理程序
function addEventHandler(obj, eventname, handler){
  if(document.addEventListener){
    obj.addEventListener(eventname, handler, false);
  }else if(document.attachEvent){
    obj.attachEvent("on"+eventname, handler);
  }
}

//获得触发事件的目标对象
function getTargetObject(e){
  try{
    return e.target;
  }catch(ie){
    try{
      //IE 7 or later
      return e.srcElement;
    }catch(otherie){
      //early version of IE
      return window.event.srcElement;
    }
  }
}
