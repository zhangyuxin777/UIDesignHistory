/**
 * Created by bruce zhang on 2016/6/30.
 */
/**
 *  列表弹框
 */
var listDialog = {
    listHeight: function () {
        //alert(document.body.clientHeight > window.innerHeight ? document.body.clientHeight : window.innerHeight);
        return document.body.clientHeight > window.innerHeight ? document.body.clientHeight : window.innerHeight;
    }(),
    show: function (list, name, value, type, callback, closeCallBack, title, cancelButtonTitle, cancelCallBack, enterButtonTitle, enterCallBack) {

        var html = document.getElementsByTagName('html')[0];
        var bgHeight = document.body.clientHeight > window.innerHeight ? document.body.clientHeight : window.innerHeight;
        var fontSize = html.style.fontSize.substr(0, html.style.fontSize.length - 2);
        var maxHeight = this.listHeight * 0.5;
        var listBG = document.createElement('div');
        var listDialog = document.createElement('div');
        var dialogTitle = document.createElement('div');
        var dialogList = document.createElement('div');
        if (!document.getElementById('listDialog')) {
            listBG.id = 'listDialogBg';
            listBG.style.opacity = '0.5';
            listBG.style.position = 'absolute';
            listBG.style.top = '0';
            listBG.style.left = '0';
            listBG.style.width = '100%';
            listBG.style.height = bgHeight + 'px';
            listBG.style.backgroundColor = '#555';
            listBG.onclick = function () {
                document.getElementById('listDialogBg').style.display = 'none';
                document.getElementById('listDialog').style.display = 'none';
                if (typeof closeCallBack == 'function') {
                    closeCallBack();
                }
            };

            listDialog.id = 'listDialog';
            listDialog.style.position = 'fixed';
            listDialog.style.top = '50%';
            listDialog.style.left = '50%';
            listDialog.style.width = '2rem';
            listDialog.style.marginLeft = '-1rem';
            listDialog.style.borderRadius = '0.03rem';
            listDialog.style.fontSize = '0.12rem';
            listDialog.style.color = '#606060';
            listDialog.style.backgroundColor = '#fff';


            dialogTitle.id = 'dialogTitle';
            dialogTitle.style.textAlign = 'center';
            dialogTitle.style.position = 'relative';
            dialogTitle.style.height = '0.25rem';
            dialogTitle.style.lineHeight = '0.25rem';
            dialogTitle.style.borderRadius = '0.03rem 0.03rem 0 0';
            dialogTitle.style.borderBottom = '1px solid #f6f4f4';
            dialogTitle.style.fontSize = '0.1rem';
            dialogTitle.style.color = '#F39A0F';
            dialogTitle.style.background = 'white';
            dialogTitle.innerText = title;

            dialogList.id = 'listDialogList';
            dialogList.style.overflow = 'auto';
            dialogList.style.position = 'relative';
            dialogList.style.top = '50%';
            dialogList.style.left = '50%';
            dialogList.style.width = '2rem';
            dialogList.style.marginLeft = '-1rem';
            dialogList.style.borderRadius = '0.03rem';

        } else {
            listBG = document.getElementById('listDialogBg');
            listDialog = document.getElementById('listDialog');
            dialogTitle = document.getElementById('dialogTitle');
            dialogList = document.getElementById('listDialogList');
            listBG.style.display = 'block';
            listDialog.style.display = 'block';
            dialogList.innerHTML = '';
            dialogTitle.innerText = title;
            if (typeof cancelButtonTitle == 'undefined' || cancelButtonTitle.length == 0) {
                if (document.getElementById('dialogButtonRight')) {
                    listDialog.removeChild(document.getElementById('dialogButtonRight'));
                }
                if (document.getElementById('dialogButtonLeft')) {
                    listDialog.removeChild(document.getElementById('dialogButtonLeft'));
                }
            }
        }

        for (var i = 0; i < list.length; i++) {
            var item = document.createElement('div');
            //item.style.width = '1.6rem';
            item.style.padding = '0.08rem 0.2rem';
            item.style.textAlign = 'center';
            item.style.lineHeight = '0.2rem';
            item.style.borderBottom = '1px solid #f6f4f4';
            item.style.overflow = 'hidden';
            item.id = "item" + i;
            item.setAttribute("val", list[i][value]);
            item.setAttribute("rel", list[i][type]);
            item.innerText = list[i][name];
            item.onclick = function () {
                //alert(this.attributes["val"].nodeValue);
                document.getElementById('listDialogBg').style.display = 'none';
                document.getElementById('listDialog').style.display = 'none';
                callback(this.textContent, this.attributes["val"].nodeValue, this.attributes["rel"].nodeValue);
            };
            dialogList.appendChild(item);
        }

        if (!document.getElementById('listDialog')) {
            listDialog.appendChild(dialogTitle);
            document.body.appendChild(listBG);
            document.body.appendChild(listDialog);
        }
        listDialog.appendChild(dialogList);

        var buttonHeight = 0;
        if (typeof cancelButtonTitle != 'undefined' && cancelButtonTitle.length != 0) {
            buttonHeight = fontSize * 0.35;
            var dialogButtonRight = document.createElement('div');
            dialogButtonRight.id = 'dialogButtonRight';
            dialogButtonRight.style.textAlign = 'center';
            dialogButtonRight.style.position = 'absolute';
            dialogButtonRight.style.height = '0.35rem';
            dialogButtonRight.style.lineHeight = '0.35rem';
            dialogButtonRight.style.borderRadius = '0 0 0.03rem 0.03rem';
            dialogButtonRight.style.borderTop = '1px solid #f6f4f4';
            dialogButtonRight.style.fontSize = '0.13rem';
            dialogButtonRight.style.color = '#F39A0F';
            dialogButtonRight.style.background = 'white';
            dialogButtonRight.style.width = '100%';
            dialogButtonRight.style.bottom = '0';
            dialogButtonRight.innerText = cancelButtonTitle;
            if (typeof cancelCallBack == 'function') {
                dialogButtonRight.onclick = function () {
                    cancelCallBack();
                };
            }


            if (typeof enterButtonTitle != 'undefined' && enterButtonTitle.length != 0) {
                dialogButtonRight.style.width = '50%';
                var dialogButtonLeft = dialogButtonRight.cloneNode(true);
                dialogButtonLeft.id = 'dialogButtonLeft';
                dialogButtonLeft.style.right = 0;
                dialogButtonLeft.innerText = enterButtonTitle;
                listDialog.appendChild(dialogButtonRight);
                listDialog.appendChild(dialogButtonLeft);
                if (typeof enterCallBack == 'function') {
                    dialogButtonLeft.onclick = function () {
                        enterCallBack();
                    };
                }
            }
            else {
                listDialog.appendChild(dialogButtonRight);
            }
        }

        var dialogHeight = listDialog.clientHeight;
        var marginTop = maxHeight / 2 + fontSize * 0.25;
        if (dialogHeight > maxHeight) {
            listDialog.style.height = maxHeight + fontSize * 0.35 + 'px';
            listDialog.style.marginTop = '-' + marginTop + 'px';
            dialogList.style.height = (maxHeight + fontSize * 0.09 - buttonHeight) + 'px';
            dialogList.style.marginTop = '-' + (maxHeight / 2 + fontSize * 0.18) + 'px';

        } else {
            marginTop = dialogHeight / 2 + fontSize * 0.25;
            listDialog.style.marginTop = '-' + marginTop + 'px';
        }
    },
    hide: function () {
        document.getElementById('listDialogBg').style.display = 'none';
        document.getElementById('listDialog').style.display = 'none';
    }
};

/**
 *  加载动画
 */
var loading = {
    show: function (closeTime, callback) {
        if (typeof callback != 'function') {
            callback = function () {
            };
        }
        var src = window.document.location.href.split('src')[0] + 'src/images/wl_loading_logo.jpg';
        $('body').append("<div class='wlload'>" +
            "<div class='wlload-box'>" +
            "<img src='" + src + "' class='wlload-img'>" +
            "<div class='wlload-bar'><span></span></div></div></div>");
        if (!isNaN(closeTime)) {
            clock = setInterval(function () {
                $('.wlload').remove();
                clearInterval(clock);
                callback();
            }, closeTime);
        }
    },
    hide: function () {
        $('.wlload').remove();
    }

};