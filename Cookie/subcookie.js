var SubCookieUtil = {
  /**
   * [get description]
   * @param  {[string]} name  [父cookie名称]
   * @param  {[string]} subName [子cookie名称]
   * @return {[type]}         [子cookie值]
   */
  get : function (name, subName){
    var subCookies = this.getAll(name);
    if(subCookies){
      return subCookies[subName];
    }
    return null;
  },
  /**
   * [getAll description]
   * @param  {[string]} name [父cookie名称]
   * @return {[object]}      [子cookie键值对对象]
   */
  getAll : function (name) {
    var cookie = document.cookie;
    var cookieName;
        cookieName = cookie.indexOf(name) != 0 ? ' '+ encodeURIComponent(name) + '=' : encodeURIComponent(name) + '=' ;
    var cookieStart = cookie.indexOf(cookieName),
        cookieValue = null,
        cookieEnd, subCookies, i ,len, parts, result = {};
    if(cookieStart > -1){
      cookieEnd = cookie.indexOf(';', cookieStart);
      if(cookieEnd == -1){
        cookieEnd = cookie.length;
      }
      cookieValue = cookie.substring(cookieStart + cookieName.length, cookieEnd);
      if(cookieValue.length > 0){
        subCookies = cookieValue.split('&');
        for(i=0, len =subCookies.length; i<len; i++){
          parts = subCookies[i].split('=');
          result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
        }
        return result;
      }
    }
    return null;
  }
}
