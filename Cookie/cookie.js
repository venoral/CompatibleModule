var CookieUtil = {
  /**
   * [get description]
   * @param  {[string]} name [cookie名称]
   * @return {[string]}      [cookie值]
   */
  get: function (name){
    var cookieName = encodeURIComponent(name) + '=',
        cookieStart = document.cookie.indexOf(cookieName),
        cookieValue = null;
    if(cookieStart > -1){
       var cookieEnd = document.cookie.indexOf(';', cookieStart);
       if(cookieEnd == -1){
          cookieEnd = document.cookie.length;
       }
       cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    }
    return cookieValue;
  },
  /**
   * [set description]
   * @param {[string]} name  [cookie名称]
   * @param {[string]} value [cookie值]
   * @param {[date]} expires [失效期]
   * @param {[string]} path  [指定域中路径]
   * @param {[string]} domain [指定域]
   * @param {[boolean]} secure [安全标志]
   */
  set: function (name, value, expires, path, domain, secure){
    var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if(expires instanceof Date){
      cookieText += '; expires=' + expires.toGMTString();
    }
    if(path){
      cookieText += '; path=' + path;
    }
    if(domain){
      cookieText += '; domain=' + domain;
    }
    if(secure){
      cookieText += '; secure';
    }
    document.cookie = cookieText;
  },
  /**
   * [unset description]
   * @param  {[string]} name   [cookie名称]
   * @param  {[string]} path   [指定域下路径]
   * @param  {[string]} domain [指定域]
   * @param  {[boolean]} secure [安全标志]
   */
  unset: function (name, path, domain, secure){
    this.set(name, '', new Date(0), path, domain, secure)
  }
}
