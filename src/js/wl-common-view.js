/**
 * Created by bruce zhang on 2016/6/30.
 */
/**
 *  二维码弹框
 */
var getQrDialog = function (id, title, src, callback) {
    var dialog = {};
    dialog.title = hasVal(id) ? title : '长按关注公众号后参与活动';
    dialog.id = hasVal(id) ? id : 'qrCode';
    dialog.codeImg = hasVal(src) ? src : 'http://static.wanlianjin.com/data/gxb/resources/image/csb/' + "qrCode_" + wlConfig.enSign + '.jpg';
    dialog.callback = callback;
    dialog.show = function () {
        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;
        screenWidth = screenWidth > 640 ? 640 : screenWidth;
        var codeWidth = 210 * screenWidth / 640;
        var closeTop = (screenHeight - codeWidth) * 0.14;
        var closeSrc = 'http://static.wanlianjin.com/data/gxb/resources/image/close.png';
        var qrLine = 'http://static.wanlianjin.com/data/gxb/resources/image/qr_line.png';

        var htmlStr = "<div id='" + dialog.id + "' style='position: fixed;top: 0;width: 6.4rem;height: 100%;background: rgba(0, 0, 0, 0.65);'>" +
            "<div style='position: absolute;width: 3.6rem;left: 50%;top: 50%; transform: translate(-50%,-45%);-webkit-transform: translate(-50%,-45%);'>" +
            "<div style=' position: relative;width: 3.6rem;height: 4.3rem;background: white;border-radius: 0.14rem;z-index: 99;'>" +
            " <div style='height: 0.74rem;line-height: 0.74rem;width: 100%;text-align: center;color: #0c90ec;font-size: 0.22rem;'>" + dialog.title + "</div>" +
            "<img src='" + qrLine + "' style='width: 3.6rem;height:1px;margin: 0;padding: 0;line-height: 0;position: absolute'>" +
            " <img style=' width: 3.6rem;height: 3.6rem;border-radius: 0.14rem;padding: 0.3rem' src='" + dialog.codeImg + "'/> " +
            " </div>" +
            "<img id='" + dialog.id + "Close' style='width: 0.62rem;height: 0.62rem;position: relative;z-index: 98;margin-top:0.5rem;left:50%;transform: translateX(-50%);-webkit-transform: translateX(-50%);' src='" + closeSrc + "'/>" +
            "</div>" +
            " </div>";
        $('body').append(htmlStr);
        $("#" + dialog.id + "Close").click(function () {
            $("#" + dialog.id).remove();
            if (typeof dialog.callback == 'function') {
                dialog.callback();
            }
        });
    };
    return dialog;
};