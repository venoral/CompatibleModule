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

//判断某元素是否有某类,构造函数的正则用到双重转义
function haveClass(ele,cls){
  var reclass=new RegExp("\\b"+cls+"\\b");
  return reclass.test(ele.className);
}

//以数组形式实现自定义事件，触发和删除，功能同addEventListener
var Event={
  _listener:{},
  addEvent:function(type,fn){
    if(this._listener[type]==undefined){
      this._listener[type]=[];
    }
    if(typeof fn=='function'){
      this._listener[type].push(fn);
    }
    return this;
  },
  fireEvent:function(type){
    var arr=this._listener[type];
  if(Object.prototype.toString.call(arr)=="[object Array]"){
    for(var i=0;i<this._listener[type].length;i++){
        arr[i]();
    }
    return this;
   }
  },
  removeEvent:function(type,fn){
    // if(this._listener[type].indexOf(fn)!=-1){
    //     var index=this._listener[type].indexOf(fn);
    //     this._listener[type].splice(index,1);
    //   }
    var arr=this._listener[type];
    if(typeof type=='string'&&arr instanceof Array){
        if(typeof fn=='function'){
          //不能用index获取，这样只是字符串匹配，而删除函数要同一个指向的
          // var index=this._listener[type].indexOf(fn);
          for(var i=0,length=arr.length;i<length;i++){
            if(arr[i]===fn){
              this._listener[type].splice(index,1);
              break;
            }
          }
        }else{
          //只提供type参数，删除整个数组，用户自定义的属性可以被删除
          delete this._listener[type];
        }
        return this;
     }
    }
}

//得到介于min和max之间的随机整数
function randomNum(min,max){
  var num=max-min+1;
  return Math.floor(Math.random()*num+min);
}
