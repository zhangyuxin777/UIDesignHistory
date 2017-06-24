		function commonAjax(url, data,fn){
        $.ajax({
            cache : false,
            data : data,
            url : url,
            timeout:10000,
            dataType : "json",
            async : true,
            type : "post",
            success : function(data) {
				
          
                data = dataConversion(data);//数据过滤

                fn(data);//执行自定义的回调方法 fn
            },
            error:function(){
                /*数据请求失败*/
                fnBase.myalert("亲！您的手机网络不太顺畅喔~");
            }
        });
    }
    function dataConversion(data){//ajax数据过滤
        var dataStr =JSON.stringify(data,function(key,value){
            switch (value){
                case null:
                    return '';
                    break;
                default :
                    return value;
                    break;
            };
        })
        return JSON.parse(dataStr);
    }