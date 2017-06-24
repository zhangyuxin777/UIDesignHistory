/**
 * Created by bruce zhang on 2015/12/26.
 */

var config = (function() {
	var parameter = {
		formal : {
			// 正式环境
			openIdName : "openIdWLJW201501061131", // openId在localStorage中的名称
			shareRootUrl : "http://weixin.wanlianjin.com", // 域名 现在用于分享
			rootUrl : "http://weixin.wanlianjin.com",
			appIdValue : "wx5c1c1dec5a02e456", // appId值
			collectRootValue : "e05263f239612bdce3bcc6b676025811", // 百度统计参数
			goldStoreUrl : 'http://mmall.wanlianjin.com/mall/goldStore', // 积分商城地址
			goldDetailUrl : 'http://mmall.wanlianjin.com/mygift/mygift', // 兑换明细地址
			zengxianUrl : 'http://114.251.1.134/oldwap/portal.do',
			payMsgCode: 1,	//支付是否需要验证码
			activity : {
				carsUrl : "http://114.251.1.134/wap/portal.do?url=w-1kenrhR6Mipg5b7P/3dg==", // 多车之家
				vaccineUrl : "http://114.251.1.134/wap/portal.do?url=M5XVJPZeinPPPjcV7rasGA==", // 疫苗险
				goodCarUrl : "http://114.251.1.134/wap/portal.do?url=bEB6seMvFCsE05AKeigj8A==", // 中华好车
				goodCar2Url : "http://e.cic.cn/wap/portal.do?url=bEB6seMvSDFSuNM05AKeigj8A==", // 中华好车2
				refuelingUrl : "http://114.251.1.134/wap/portal.do?url=ADUNmiqbZ8hyrNuepBP/HQ==", // 为爱加油
				internalPurchaseUrl : "http://114.251.1.134/wap/portal.do?url=/6QsSxym9ALtSSDfThhywQ==", // 东方资产团购
				autoInsurUrl: "http://220.171.28.152:9080/wap/portal.do?url=U-S-OjrLM-P1jyYQ7iXgTg==", //抽奖页面车险商业险链接
				fathersDay : {
					url0 : 'http://114.251.1.134/wap/portal.do?url=xAlgkFEg6u8LXEgPvY-/hw==', // 翱翔无忧
					url1 : 'http://114.251.1.134/wap/portal.do?url=gvsRKoMV6CTA3r5MHHNIaA==', // 乐居保
					url2 : 'http://114.251.1.134/wap/portal.do?url=WsuiYOO8VJkCGYbkB/SYGw==', // 出入安心
					url3 : 'http://114.251.1.134/wap/portal.do?url=IE0glYu1a1uGx9DpMMLa3Q==' // 步步安心
				}
			},

			activityEndTime : {
				firstActivity : 2,
				goHome : new Date(2016, 1, 23, 0, 0, 0),
				mothersDay : new Date(2016, 4, 13, 0, 0, 0),
				refueling : new Date(2016, 5, 31, 0, 0, 0),
				fathersDay : new Date(2016, 5, 31, 0, 0, 0),
				goodCar : new Date(2016, 6, 15, 0, 0, 0),
				internalPurchase : new Date(2016, 11, 31, 0, 0, 0)
			},

			productList : { // 产品页
				url01 : "http://114.251.1.134/wap/portal.do?url=sy-LPEMNbGMnGOB89aIeKQ==&linkId=",
				url02 : "http://114.251.1.134/wap/portal.do?url=BkWwUio/CaaToFmCOeR8Fw==&linkId=", // 乐居保
				url03 : "http://114.251.1.134/wap/portal.do?url=eDAr/T53XsID8UY-OJ6u6g==&riskCode=1920000109&linkId=",// 四海逍遥
				url04 : "http://114.251.1.134/wap/portal.do?url=juewy1jgey4SvzfTcIFQJg==&linkId=", // 步步安心
				url05 : "http://114.251.1.134/wap/portal.do?url=xD2jQg6fxaRyiTP5X7qVBg==&linkId=", // 翱翔无忧
				url06 : "http://114.251.1.134/wap/portal.do?url=nUupFzIvpZ1x7614hy8Htg==&linkId=" // 出入安心
			}
		},
		test : {
			// 测试环境
			openIdName : "openIdWLJW2016", // openId在localStorage中的名称
			shareRootUrl : "http://wxtest.wanlianjin.com", // 域名 现在用于分享
			rootUrl : "http://wxtest.wanlianjin.com",
			appIdValue : "wx6d1e2bace6d54cca", // appId值
			collectRootValue : "9bd4e3e755b9f0879098281c19921cb3", // 百度统计参数
			goldStoreUrl : 'http://10.196.20.194:8980/mall-wap/mall/goldStore', // 积分商城地址
			goldDetailUrl : 'http://10.196.20.194:8980/mall-wap/mygift/mygift', // 兑换明细地址
			zengxianUrl : 'http://10.196.112.6:9080/oldwap/portal.do',
			payMsgCode: 0,	//支付是否需要验证码
			activity : {
				carsUrl : "http://220.171.28.152:9080/wap/portal.do?url=w-1kenrhR6Mipg5b7P/3dg==", // 多车之家
				vaccineUrl : "http://220.171.28.152:9080/wap/portal.do?url=M5XVJPZeinPPPjcV7rasGA==", // 疫苗险
				goodCarUrl : "http://220.171.28.152:9080/wap/portal.do?url=bEB6seMvFCsE05AKeigj8A==", // 中华好车
				goodCar2Url : "http://10.196.112.6:9080/wap/portal.do?url=bEB6seMvSDFSuNM05AKeigj8A==", // 中华好车2
				refuelingUrl : "http://220.171.28.152:9080/wap/portal.do?url=ADUNmiqbZ8hyrNuepBP/HQ==", // 为爱加油
				internalPurchaseUrl : "http://220.171.28.152:9080/wap/portal.do?url=/6QsSxym9ALtSSDfThhywQ==", // 东方资产团购
				autoInsurUrl: "http://e.cic.cn/wap/portal.do?url=U-S-OjrLM-P1jyYQ7iXgTg==", //抽奖页面车险商业险链接
				fathersDay : {
					url0 : 'http://220.171.28.152:9080/wap/portal.do?url=cNkv9ph-PmrrrWTeJmC1eQ==', // 翱翔无忧
					url1 : 'http://220.171.28.152:9080/wap/portal.do?url=eSRqvnnq75mICfxWrrBfyw==', // 乐居保
					url2 : 'http://220.171.28.152:9080/wap/portal.do?url=g9hDUvsHKPY/mmlHMtIbJA==', // 出入安心
					url3 : 'http://220.171.28.152:9080/wap/portal.do?url=aYe4aqVKb5XFWnruFFTj2Q==' // 步步安心
				}
			},
			activityEndTime : {
				firstActivity : 2,
				goHome : new Date(2016, 1, 23, 0, 0, 0),
				mothersDay : new Date(2016, 4, 13, 0, 0, 0),
				refueling : new Date(2016, 5, 31, 0, 0, 0),
				fathersDay : new Date(2016, 5, 31, 0, 0, 0),
				goodCar : new Date(2016, 6, 15, 0, 0, 0),
				internalPurchase : new Date(2016, 11, 31, 0, 0, 0)
			},

			productList : { // 产品页
				url01 : "http://220.171.28.152:9080/wap/portal.do?",
				url02 : "http://220.171.28.152:9080/wap/portal.do?url=jD8Kwkfb00Xyn1P5jDdd5Q==&linkId=", // 乐居保
				url03 : "http://220.171.28.152:9080/wap/portal.do?url=eDAr/T53XsID8UY-OJ6u6g==&riskCode=1920000109&linkId=",// 四海逍遥
				url04 : "http://220.171.28.152:9080/wap/portal.do?url=KdFgzhBUEPCWc02wO9IMiQ==&linkId=", // 步步安心
				url05 : "http://220.171.28.152:9080/wap/portal.do?url=jjzltEFUqGxMvpEqyIKezA==&linkId=", // 翱翔无忧
				url06 : "http://220.171.28.152:9080/wap/portal.do?url=aFgb8Up8GBPS8D2Ru-hNJQ==&linkId=" // 出入安心
			}
		}
	};
	var current;
	var rootPath = window.document.location.href;
	if (rootPath.indexOf('weixin.wanlianjin.com') != -1) {
		current = parameter.formal;
	} else if (rootPath.indexOf('wxtest.wanlianjin.com') != -1) {
		current = parameter.test;
	} else {
		current = parameter.test;
		current.rootUrl = 'http://' + window.location.host;
	}
	return {
		openIdName : current.openIdName, // openId在localStorage中的名称
		shareRootUrl : current.shareRootUrl, // 域名 现在用于分享
		rootUrl : current.rootUrl, // 网址
		appIdValue : current.appIdValue, // appId值
		collectRootValue : current.collectRootValue, // 百度统计参数
		goldStoreUrl : current.goldStoreUrl, // 积分商城地址
		goldDetailUrl : current.goldDetailUrl, // 兑换明细地址
		zengxianUrl : current.zengxianUrl, //
		payMsgCode: current.payMsgCode,	//支付验证码
		
		activity : current.activity, // 活动的跳转地址
		activityEndTime : current.activityEndTime, // 活动结束时间
		productList : current.productList
	// 产品的跳转地址
	};
})();


// 获取页面url后面参数的值
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}


// 去掉字符串头尾空格
function trim(str) {
	return str.replace(/(^\s*)|(\s*$)/g, "");
}


/**
 * 屏幕宽度自适应
 */
function autoWidth() {
	var docEle = document.documentElement;
	var initWidth = 320, initSize = 100;
	var resizeEvent = 'orientationchange' in window ? 'orientationchange'
			: 'resize';

	function init() {
		// alert(winH);
		// alert(window.innerHeight);
		var minWidth = window.screen.width < window.screen.height ? window.screen.width
				: window.screen.height;
		var devicePixelRatio = window.devicePixelRatio;
		if (window.screen.width / window.innerWidth >= 2) {
			var actualWidth = window.screen.width / devicePixelRatio;
			var actualHeight = window.screen.height / devicePixelRatio;
			minWidth = actualWidth < actualHeight ? actualWidth : actualHeight;
		}
		var w = minWidth > 640 ? 640 : minWidth;
		docEle.style.fontSize = w / initWidth * initSize + 'px';
	}

	window.addEventListener('orientationchange', function(e) {
		e.preventDefault();
		// if (Math.abs(window.orientation) === 90) {
		// alert('为了您更好的体验，请不要使用横屏浏览');
		// }
	}, false);

	window.addEventListener(resizeEvent, function(e) {
		// if (Math.abs(window.orientation) === 90) {
		// } else {
		// init(window.innerWidth);
		// }
		init();
	}, false);
	init();

	// 移除隐藏body 的hide class
	var reg = new RegExp('(\\s|^)' + 'hide' + '(\\s|$)');
	document.body.className = document.body.className.replace(reg, ' ');

}


/**
 * @method 屏幕宽度自适应
 * @param {int} scale  比例  默认100
 */
function autoSize(scale, callback) {

  var docEle = document.documentElement;//html元素
  var initWidth = 640; //设计图的宽度
  var initSize = 100;  //缩小比例
  //设备宽度 取最小值
  var minWidth = window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
  var dpr = window.devicePixelRatio;
  //部分安卓手机 window.screen.width的实际数值是   window.innerWidth*window.devicePixelRatio
  if (window.screen.width / window.innerWidth >= 2) {
    var actualWidth = window.screen.width / dpr;
    var actualHeight = window.screen.height / dpr;
    minWidth = actualWidth < actualHeight ? actualWidth : actualHeight;
  }
  //在pc端没必要也宽度充满,1024是 iPadPro的宽度
  minWidth = minWidth > 1024 ? 1024 : minWidth;
  docEle.style.fontSize = minWidth / initWidth * initSize + 'px';

  //移除隐藏body 的hide class
  var reg = new RegExp('(\\s|^)' + 'hide' + '(\\s|$)');
  document.body.className = document.body.className.replace(reg, ' ');

}


/**
 * 显示二维码弹框
 */
function showCodeDialog(codeSrc) {
	if (!document.getElementById("qrCode")) {
		var src = '';
		if (codeSrc == undefined || codeSrc == null || codeSrc.length == 0) {
			src = window.document.location.href.split('basepage')[0]
					+ 'basepage/images/qr_code.jpg';
		} else {
			src = codeSrc;
		}
		var screenWidth = window.innerWidth;
		var screenHeight = window.innerHeight;
		screenWidth = screenWidth > 640 ? 640 : screenWidth;
		var codeWidth = 216 * screenWidth / 320;
		var codeHeight = 237 * screenWidth / 320;
		var codeLeft = codeWidth / 2;
		var codeTop = screenHeight * 0.25;
		var closeSize = 35 * screenWidth / 320;

		var qrCode = document.createElement('div');
		var closeDiv = document.createElement('div');
		var codeImg = document.createElement('img');
		qrCode.id = 'qrCode';
		qrCode.style.zIndex = '997';
		qrCode.style.position = 'fixed';
		qrCode.style.height = codeHeight + 'px';
		qrCode.style.width = codeWidth + 'px';
		qrCode.style.paddingTop = codeTop + 'px';
		qrCode.style.marginLeft = "-" + codeLeft + 'px';
		qrCode.style.left = '50%';

		closeDiv.style.position = 'absolute';
		closeDiv.style.width = closeSize + 'px';
		closeDiv.style.height = closeSize + 'px';
		closeDiv.style.right = '0';
		closeDiv.style.zIndex = '999';
		closeDiv.onclick = function() {
			document.getElementsByTagName("body")[0].removeChild(document
					.getElementsByTagName("body")[0].childNodes[0]);
		};
		codeImg.style.position = 'relative';
		codeImg.style.width = '100%';
		codeImg.style.height = '100%';
		codeImg.style.zIndex = '998';
		codeImg.style.height = '2.25rem';
		codeImg.style.width = '2.07rem';
		codeImg.src = src;
		qrCode.appendChild(closeDiv);
		qrCode.appendChild(codeImg);
		document.body.insertBefore(qrCode, document.body.firstChild);
	}
}

/**
 * 微信自定义分享 朋友和朋友圈
 */
function weixinShare(data, callback) {
	if (data.onlyWeixin == undefined) {
		data.onlyWeixin = true;
	}
	if (data.onlyWeixin) {
		var urlLeft = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='
				+ config.appIdValue + '&redirect_uri=';
		var urlRight = '&response_type=code&scope=snsapi_base&state=123&connect_redirect=1#wechat_redirect';
	} else {
		urlLeft = '';
		urlRight = '';
	}
	var shareList = [ 'menuItem:share:qq', 'menuItem:share:QZone',
			'menuItem:share:weiboApp',

			'menuItem:share:appMessage', 'menuItem:share:timeline' ];
	if (typeof callback != 'function') {
		callback = function() {
		};
	}
	// var test =
	// {
	// shareUrl: '',
	// shareIcon: '',
	// shareText: '',
	// shareTimelineText:''
	// onlyWeixin:''
	// isNeedRecord: '',

	// openId: '',
	// activityId: '',
	// typeAppMessage: '',
	// typeTimeline: '',
	// isGiveCoin:'' Y/N
	// }
	// 图标默认
	if (data.shareIcon == undefined || data.shareIcon == null
			|| data.shareIcon.length == 0) {
		data.shareIcon = config.shareRootUrl
				+ '/weixinouter/basepage/images/logo_wanlian_small.jpg';
	}
	// 分享到朋友 标题默认
	if (data.shareTitle == undefined || data.shareTitle == null
			|| data.shareTitle.length == 0) {
		data.shareTitle = '万联金网';
	}
	// 分享到朋友圈的文本 不存在会取 shareText
	if (data.shareTimelineText == undefined || data.shareTimelineText == null
			|| data.shareTimelineText.length == 0) {
		data.shareTimelineText = data.shareText;
	}

	$.ajax({
		async : true,
		url : config.rootUrl + '/weixinouter/rest/weixinbase/1043',
		type : 'POST',
		data : JSON.stringify({
			"url" : window.location.href.split('#')[0]
		}),
		contentType : "application/json",
		dataType : 'json',
		success : function(backData) {
			// alert("(c)"+data.code+"(t)"+data.timestamp+"(n)"+data.nonceStr+"(s)"+data.signature)
			var jsApiList = [ 'checkJsApi', 'onMenuShareTimeline',
					'onMenuShareAppMessage', 'hideMenuItems', 'showMenuItems',
					'hideAllNonBaseMenuItem' ];
			wx.config({
				debug : false,
				appId : config.appIdValue,
				timestamp : backData.timestamp,
				nonceStr : backData.nonceStr,
				signature : backData.signature,
				jsApiList : jsApiList
			});
		},
		error : function(x, y, z) {
			// alert('error');
		}
	});

	wx.ready(function() {
		/*
		 * wx.checkJsApi({ jsApiList:[ 'onMenuShareTimeline' ] })
		 */
		wx.hideMenuItems({
			menuList : [ 'menuItem:share:qq', 'menuItem:share:QZone',
					'menuItem:share:weiboApp' ]
		});
		wx
				.showMenuItems({
					menuList : [ 'menuItem:share:appMessage',
							'menuItem:share:timeline' ]
				});
		wx.onMenuShareAppMessage({
			title : data.shareTitle,
			desc : data.shareText, // 分享描述
			link : urlLeft + data.shareUrl + urlRight,
			imgUrl : data.shareIcon,
			type : '', // 分享类型,music、video或link，不填默认为link
			dataUrl : '', // 如果type是music或video，则要提供数据链接，默认为空
			success : function() {
				callback('appMessage');
				// 用户确认分享后执行的回调函数
				if (data.isNeedRecord) {
					$.ajax({
						async : false,
						url : config.rootUrl + '/weixinouter/rest/Reward/1008',
						type : 'POST',
						data : JSON.stringify({
							"openId" : data.openId,
							"type" : data.typeAppMessage,
							"activityId" : data.activityId,
							"isReward" : data.isGiveCoin
						}),
						contentType : "application/json",
						dataType : 'json',
						success : function(backData) {
							// alert('1008 success');
						},
						error : function(x, y, z) {
							// alert('1008 error');
						}
					});
				}
			},
			cancel : function() {
			}
		});

		wx.onMenuShareTimeline({
			title : data.shareTimelineText,
			link : urlLeft + data.shareUrl + urlRight,
			imgUrl : data.shareIcon,
			success : function() {
				callback('timeline');
				// 用户确认分享后执行的回调函数
				if (data.isNeedRecord) {
					$.ajax({
						async : false,
						url : config.rootUrl + '/weixinouter/rest/Reward/1008',
						type : 'POST',
						data : JSON.stringify({
							"openId" : data.openId,
							"type" : data.typeTimeline,
							"activityId" : data.activityId,
							"isReward" : data.isGiveCoin
						}),
						contentType : "application/json",
						dataType : 'json',
						success : function(backData) {
							// alert('1008 success');
						},
						error : function(x, y, z) {
							// alert('1008 error');
						}
					});
				}
			},
			cancel : function() {
			}
		});

		wx.error(function(res) {
			// alert('wx.error: ' + JSON.stringify(res));
		});
	});
}

function weixinCloseShare() {
	$.ajax({
		async : true,
		url : config.rootUrl + '/weixinouter/rest/weixinbase/1043',
		type : 'POST',
		data : JSON.stringify({
			"url" : window.location.href.split('#')[0]
		}),
		contentType : "application/json",
		dataType : 'json',
		success : function(backData) {
			// alert("(c)"+data.code+"(t)"+data.timestamp+"(n)"+data.nonceStr+"(s)"+data.signature)
			var jsApiList = [ 'checkJsApi', 'hideMenuItems', 'showMenuItems',
					'hideAllNonBaseMenuItem' ];
			wx.config({
				debug : false,
				appId : config.appIdValue,
				timestamp : backData.timestamp,
				nonceStr : backData.nonceStr,
				signature : backData.signature,
				jsApiList : jsApiList
			});
		},
		error : function(x, y, z) {
			// alert('error');
		}
	});
	wx.ready(function() {
		wx.hideMenuItems({
			menuList : [ 'menuItem:share:qq', 'menuItem:share:appMessage',
					'menuItem:share:timeline', 'menuItem:share:QZone',
					'menuItem:share:weiboApp' ]
		});
		wx.showMenuItems({
			menuList : []
		});
		wx.error(function(res) {
			// alert('wx.error: ' + JSON.stringify(res));
		});
	});
}

function weixinCloseMenu() {
	GetAsyncData("weixinbase/1043", function(backdata) {
		var data = backdata;
		// alert("(c)"+data.code+"(t)"+data.timestamp+"(n)"+data.nonceStr+"(s)"+data.signature)
		wx.config({
			debug : false,
			appId : config.appIdValue, // wx0017a3384b9df4f0
			timestamp : data.timestamp,
			nonceStr : data.nonceStr,
			signature : data.signature,
			jsApiList : [ 'checkJsApi', 'hideMenuItems',
					'hideAllNonBaseMenuItem' ]
		});
	}, {
		"url" : window.location.href.split('#')[0]
	});
	wx.ready(function() {
		wx.hideMenuItems({
			menuList : [ 'menuItem:share:qq', 'menuItem:share:appMessage',
					'menuItem:share:timeline', 'menuItem:share:QZone',
					'menuItem:share:weiboApp', 'menuItem:share:email',
					'menuItem:openWithSafari', 'menuItem:openWithQQBrowser',
					'menuItem:readMode', 'menuItem:originPage',
					'menuItem:copyUrl', 'menuItem:favorite' ]
		});
		wx.error(function(res) {
			// alert('wx.error: ' + JSON.stringify(res));
		});
	});
}

function weixinAuthorizeUrl(url) {
	var urlLeft = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='
			+ config.appIdValue + '&redirect_uri=';
	var urlRight = '&response_type=code&scope=snsapi_base&state=123&connect_redirect=1#wechat_redirect';
	return urlLeft + url + urlRight;
}

/**
 * 关注判断
 */
function isFollow(openId, callback) {
	if (openId != null && openId.length != 0) {
		$.ajax({
			async : false,
			url : config.rootUrl + '/weixinouter/rest/User/1006',
			type : 'POST',
			data : JSON.stringify({
				"openId" : openId
			}),
			contentType : "application/json",
			dataType : 'json',
			success : function(backData) {
				callback(backData.data.flag);
			},
			error : function(x, y, z) {
				return false;
			}
		});
	} else {
		return false;
	}
}

/**
 * 滚动条相关函数
 */
var scroll = {
	// 获取滚动条当前的位置
	getScrollTop : function() {
		var st = 0;
		if (document.documentElement && document.documentElement.scrollTop) {
			st = document.documentElement.scrollTop;
		} else if (document.body) {
			st = document.body.scrollTop;
		}
		return st;
	},
	// 获取当前可视范围的高度
	getClientHeight : function() {
		var clientHeight = 0;
		if (document.body.clientHeight && document.documentElement.clientHeight) {
			clientHeight = Math.min(document.body.clientHeight,
					document.documentElement.clientHeight);
		} else {
			clientHeight = Math.max(document.body.clientHeight,
					document.documentElement.clientHeight);
		}
		return clientHeight;
	},
	// 获取文档完整的高度
	getScrollHeight : function() {
		return Math.max(document.body.scrollHeight,
				document.documentElement.scrollHeight);
	}

};

/**
 * 判断PC 或者是手机平板
 */
function isPC() {
	var userAgentInfo = navigator.userAgent;
	var Agents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad",
			"iPod" ];
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}

/**
 * 判断是否为微信打开
 */
function isWeixin() {
	var ua = navigator.userAgent.toLowerCase();
	var isWeixin = ua.indexOf('micromessenger') != -1;
	var isAndroid = ua.indexOf('android') != -1;
	var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
	if (!isWeixin) {
		document.head.innerHTML = '<title>抱歉，出错了</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"><link rel="stylesheet" type="text/css" href="https://res.wx.qq.com/connect/zh_CN/htmledition/style/wap_err1a9853.css">';
		document.body.innerHTML = '<div class="page_msg"><div class="inner"><span class="msg_icon_wrp"><i class="icon80_smile"></i></span><div class="msg_content"><h4>请在微信客户端打开链接</h4></div></div></div>';
	}
}

/*******************************************************************************
 * 一屏
 ******************************************************************************/
function getBgHeight() {
	var html = document.getElementsByTagName('html')[0];
	var fs = html.style.fontSize.substr(0, html.style.fontSize.length - 2);
	var minHeight = window.innerWidth < window.innerHeight ? window.innerHeight
			: window.innerWidth;
	if (!isPC()) {
		return minHeight;
	} else {
		if ((window.innerHeight / 3.2 / fs) > 1.8
				|| (window.innerHeight / 3.2 / fs) < 1.4) {
			return 5.48 * fs;
		} else {
			return window.innerHeight;
		}
	}
}

/*******************************************************************************
 * 输入控制
 ******************************************************************************/
var onlyNumber = {
	decimal : function(input) {
		var number = $(input).val();
		var lastChar = number.substr(number.length - 1, number.length);
		if (!lastChar.match(/^[0-9.]+$/)) {
			$(input).val(number.substr(0, number.length - 1));
		}
	},
	integer : function(input) {
		var number = $(input).val();
		var lastChar = number.substr(number.length - 1, number.length);
		if (!lastChar.match(/^[0-9]+$/)) {
			$(input).val(number.substr(0, number.length - 1));
		}
	},
	andX : function(input) {
		var number = $(input).val();
		var lastChar = number.substr(number.length - 1, number.length);
		if (!lastChar.match(/^[0-9Xx]+$/)) {
			$(input).val(number.substr(0, number.length - 1));
		}
	}
};

/*******************************************************************************
 * 资源预加载
 ******************************************************************************/
function preLoading(imgList, resList, delay) {
	if (isNaN(delay)) {
		delay = 1000;
	}
	var preClock = setInterval(function() {
		clearInterval(preClock);
		for ( var index in imgList) {
			new Image().src = imgList[index];
		}
		for ( var j in resList) {
			var obj = document.createElement('object');
			obj.setAttribute('data', resList[j]); // img、css、js
			obj.style.cssText = 'position:absolute;top:-1px;width:0;height:0;';
			document.body.appendChild(obj); // 插入object 标签需要插入到非head部分，以触发加载*/
		}
	}, delay);
}
