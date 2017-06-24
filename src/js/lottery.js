/**
 * Created by bruce zhang on 2016/7/12.
 */
function Lottery(id, cover, coverType, width, height, drawPercentCallback) {
    this.conId = id;
    this.conNode = document.getElementById(this.conId);
    this.cover = cover;
    this.coverType = coverType;
    this.background = null;
    this.backCtx = null;
    this.mask = null;
    this.maskCtx = null;
    this.lottery = null;
    this.lotteryType = 'image';
    this.width = width || 300;
    this.height = height || 100;
    this.clientRect = null;
    this.drawPercentCallback = drawPercentCallback;
}

Lottery.prototype = {
    createElement: function (tagName, attributes) {
        var ele = document.createElement(tagName);
        for (var key in attributes) {
            ele.setAttribute(key, attributes[key]);
        }
        return ele;
    },
    getTransparentPercent: function (ctx, width, height) {
        var imgData = ctx.getImageData(0, 0, width, height),
            pixles = imgData.data,
            transPixs = [];
        for (var i = 0, j = pixles.length; i < j; i += 4) {
            var a = pixles[i + 3];
            if (a < 128) {
                transPixs.push(i);
            }
        }
        return (transPixs.length / (pixles.length / 4) * 100).toFixed(2);
    },
    resizeCanvas: function (canvas, width, height) {
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').clearRect(0, 0, width, height);
    },
    drawPoint: function (x, y) {
        this.maskCtx.beginPath();
        //擦除的范围
        var radgrad = this.maskCtx.createRadialGradient(x, y, 0, x, y, 300);
        radgrad.addColorStop(0, 'rgba(0,0,0,1)');
        radgrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        this.maskCtx.fillStyle = radgrad;
        this.maskCtx.arc(x, y, 20, 0, Math.PI * 2, true);
        this.maskCtx.fill();
        if (this.drawPercentCallback) {
            this.drawPercentCallback.call(null, this.getTransparentPercent(this.maskCtx, this.width, this.height));
        }
    },
    bindEvent: function () {
        var _this = this;
        var device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
        var clickEvtName = device ? 'touchstart' : 'mousedown';
        var moveEvtName = device ? 'touchmove' : 'mousemove';
        if (!device) {
            var isMouseDown = false;
            document.addEventListener('mouseup', function (e) {
                isMouseDown = false;
            }, false);
        } else {
            document.addEventListener("touchmove", function (e) {
                if (isMouseDown) {
                    e.preventDefault();
                }
            }, false);
            document.addEventListener('touchend', function (e) {
                isMouseDown = false;
            }, false);
        }
        this.mask.addEventListener(clickEvtName, function (e) {
            isMouseDown = true;
            var docEle = document.documentElement;
            if (!_this.clientRect) {
                _this.clientRect = {
                    left: 0,
                    top: 0
                };
            }
            var x = (device ? e.touches[0].clientX : e.clientX) - _this.clientRect.left + docEle.scrollLeft - docEle.clientLeft;
            var y = (device ? e.touches[0].clientY : e.clientY) - _this.clientRect.top + docEle.scrollTop - docEle.clientTop;
            _this.drawPoint(x, y);
        }, false);

        this.mask.addEventListener(moveEvtName, function (e) {
            if (!device && !isMouseDown) {
                return false;
            }
            var docEle = document.documentElement;
            if (!_this.clientRect) {
                _this.clientRect = {
                    left: 0,
                    top: 0
                };
            }
            var x = (device ? e.touches[0].clientX : e.clientX) - _this.clientRect.left + docEle.scrollLeft - docEle.clientLeft;
            var y = (device ? e.touches[0].clientY : e.clientY) - _this.clientRect.top + docEle.scrollTop - docEle.clientTop;
            _this.drawPoint(x, y);
        }, false);
    },
    drawLottery: function () {
        this.background = this.background || this.createElement('canvas', {
                style: 'position:absolute;left:0;top:0;'
            });
        this.mask = this.mask || this.createElement('canvas', {
                style: 'position:absolute;left:0;top:0;'
            });

        if (!this.conNode.innerHTML.replace(/[\w\W]| /g, '')) {
            if (this.needBackground) {
                this.conNode.appendChild(this.background);
            }
            this.conNode.appendChild(this.mask);
            this.clientRect = this.conNode ? this.conNode.getBoundingClientRect() : null;
            this.bindEvent();
        }

        this.backCtx = this.backCtx || this.background.getContext('2d');
        this.maskCtx = this.maskCtx || this.mask.getContext('2d');

        if (this.lotteryType == 'image') {
            var image = new Image(),
                _this = this;
            image.onload = function () {
                _this.width = this.width;
                _this.height = this.height;
                _this.resizeCanvas(_this.background, this.width, this.height);
                _this.backCtx.drawImage(this, 0, 0);
                _this.drawMask();
            };
            image.src = this.lottery;
        } else if (this.lotteryType == 'text') {
            this.width = this.width;
            this.height = this.height;
            this.resizeCanvas(this.background, this.width, this.height);
            this.backCtx.save();
            this.backCtx.fillStyle = 'transparent';
            this.backCtx.fillRect(0, 0, this.width, this.height);
            this.backCtx.restore();
            this.backCtx.save();
            //this.backCtx.shadowColor = "RGBA(58,35,10,1)";
            //this.backCtx.shadowOffsetX = 3;
            //this.backCtx.shadowOffsetY = 3;
            //this.backCtx.shadowBlur = 3;
            var htmFontSize = $('html').css('font-size').substr(0, $('html').css('font-size').length - 2);
            var fontSize = htmFontSize / 100 * 20;
            this.backCtx.font = 'Bold ' + fontSize + 'px Microsoft YaHei';
            this.backCtx.fillStyle = '#fff';
            this.backCtx.textAlign = 'center';
            this.backCtx.fillText(this.lottery.split('/')[0], this.width / 2, this.height / 2);
            this.backCtx.font = '400 ' + fontSize / 1.6 + 'px Microsoft YaHei';
            this.backCtx.fillText(this.lottery.split('/')[1], this.width / 2, this.height / 2 + fontSize);
            this.backCtx.restore();
            this.drawMask();
        }
    },
    drawMask: function () {
        this.resizeCanvas(this.mask, this.width, this.height);
        if (this.coverType == 'color') {
            this.maskCtx.fillStyle = this.cover;
            this.maskCtx.fillRect(0, 0, this.width, this.height);
            this.maskCtx.restore();
            //this.maskCtx.shadowOffsetX = 3;
            //this.maskCtx.shadowOffsetY = 3;
            //this.maskCtx.shadowBlur = 3;
            var htmFontSize = $('html').css('font-size').substr(0, $('html').css('font-size').length - 2);
            var fontSize = htmFontSize / 100 * 20;
            this.maskCtx.font = '500 ' + fontSize + 'px Microsoft YaHei';
            //this.maskCtx.shadowColor = "RGBA(58,35,10,1)";
            this.maskCtx.textAlign = 'center';
            this.maskCtx.fillStyle = '#fff';
            this.maskCtx.fillText(this.foregroundText, this.width / 2, this.height / 2 + fontSize / 3);
            this.maskCtx.restore();
            this.maskCtx.globalCompositeOperation = 'destination-out';
        } else if (this.coverType == 'image') {
            var image = new Image(),
                _this = this;
            image.onload = function () {
                _this.maskCtx.drawImage(this, 0, 0);
                _this.maskCtx.globalCompositeOperation = 'destination-out';
            };
            image.src = this.cover;
        }
    },
    init: function (lottery, lotteryType, needBackground, foregroundText) {
        this.lottery = lottery;
        this.lotteryType = lotteryType || 'image';
        this.needBackground = needBackground;
        this.foregroundText = foregroundText;
        this.drawLottery();
    }
};


