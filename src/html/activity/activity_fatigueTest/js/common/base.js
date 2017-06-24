/*
* @Author: nana
* @Date:   2016-06-14 20:59:50
* @Last Modified by:   nana
* @Last Modified time: 2016-06-14 20:59:57
*/

'use strict';
function GetQueryString(name)
    {
      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if(r!=null)return  unescape(r[2]); return null;
    }
