/**
 * Created by scorpion1750 on 2016/1/14.
 */
//Js获取日期、月初时的前天、昨天、今天、明天
function getDay(day) {
    var today = new Date();

    var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;

    today.setTime(targetday_milliseconds); //注意，这行是关键代码

    var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDate = today.getDate();
    tMonth = doHandleMonth(tMonth + 1);
    tDate = doHandleMonth(tDate);
    return tYear + "-" + tMonth + "-" + tDate;
}
function doHandleMonth(month) {
    var m = month;
    if (month.toString().length == 1) {
        m = "0" + month;
    }
    return m;
}
//日期格式化format()
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};
/* 得到日期年月日等加数字后的日期 */
Date.prototype.dateAdd = function (interval, number) {
    var d = this;
    var k = {
        'y': 'FullYear',
        'q': 'Month',
        'm': 'Month',
        'w': 'Date',
        'd': 'Date',
        'h': 'Hours',
        'n': 'Minutes',
        's': 'Seconds',
        'ms': 'MilliSeconds'
    };
    var n = {'q': 3, 'w': 7};
    eval('d.set' + k[interval] + '(d.get' + k[interval] + '()+' + ((n[interval] || 1) * number) + ')');
    return d;
};
//身份证验证
var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];// 加权因子
var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];// 身份证验证位值.10代表X
function IdCardValidate(idCard) {
    idCard = trim(idCard.replace(/ /g, ""));
    //if (idCard.length == 15) {
    //    return isValidityBrithBy15IdCard(idCard);
    //} else
    if (idCard.length == 18) {
        var a_idCard = idCard.split("");// 得到身份证数组
        if (isValidityBrithBy18IdCard(idCard) && isTrueValidateCodeBy18IdCard(a_idCard)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

/**
 * 判断身份证号码为18位时最后的验证位是否正确
 * @param a_idCard 身份证号码数组
 * @return
 */
function isTrueValidateCodeBy18IdCard(a_idCard) {
    var sum = 0; // 声明加权求和变量
    if (a_idCard[17].toLowerCase() == 'x') {
        a_idCard[17] = 10;// 将最后位为x的验证码替换为10方便后续操作
    }
    for (var i = 0; i < 17; i++) {
        sum += Wi[i] * a_idCard[i];// 加权求和
    }
    valCodePosition = sum % 11;// 得到验证码所位置
    if (a_idCard[17] == ValideCode[valCodePosition]) {
        return true;
    } else {
        return false;
    }
}

/**
 * 通过身份证判断是男是女
 * @param idCard 15/18位身份证号码
 */
function genderByIDCard(val) {
    if (15 == val.length) { //15位身份证号码
        if (parseInt(val.charAt(14) / 2) * 2 != val.charAt(14))
            return 0;
        else
            return 1;
    }
    if (18 == val.length) { //18位身份证号码
        if (parseInt(val.charAt(16) / 2) * 2 != val.charAt(16))
            return 0;     //男
        else
            return 1;     //女
    }
}

/**
 * 通过身份证判断周岁年龄
 */
function ageByIDCard(val) {
    var birthdayValue;
    //if (15 == val.length) { //15位身份证号码
    //    birthdayValue = val.charAt(6) + val.charAt(7);
    //    if (parseInt(birthdayValue) < 10) {
    //        birthdayValue = '20' + birthdayValue;
    //    }
    //    else {
    //        birthdayValue = '19' + birthdayValue;
    //    }
    //    birthdayValue = birthdayValue + val.charAt(8) + val.charAt(9) + "." + val.charAt(10) + val.charAt(11) + "." + val.charAt(12) + val.charAt(13);
    //
    //}
    if (18 == val.length) { //18位身份证号码
        birthdayValue = val.charAt(6) + val.charAt(7) + val.charAt(8) + val.charAt(9) + "." + val.charAt(10) + val.charAt(11) + "." + val.charAt(12) + val.charAt(13);
    }

    var age = jsGetAge(birthdayValue);
    return age;
}

/**
 * 获取周岁
 */
function jsGetAge(strBirthday) {
    var returnAge;
    var strBirthdayArr = strBirthday.split(".");
    var birthYear = strBirthdayArr[0];
    var birthMonth = strBirthdayArr[1];
    var birthDay = strBirthdayArr[2];

    var d = new Date();
    var nowYear = d.getFullYear();
    var nowMonth = d.getMonth() + 1;
    var nowDay = d.getDate();

    if (nowYear == birthYear) {
        returnAge = 0;//同年 则为0岁
    } else {
        var ageDiff = nowYear - birthYear; //年之差
        if (ageDiff > 0) {
            if (nowMonth == birthMonth) {
                var dayDiff = nowDay - birthDay;//日之差
                if (dayDiff < 0) {
                    returnAge = ageDiff - 1;
                } else {
                    returnAge = ageDiff;
                }
            } else {
                var monthDiff = nowMonth - birthMonth;//月之差
                if (monthDiff < 0) {
                    returnAge = ageDiff - 1;
                } else {
                    returnAge = ageDiff;
                }
            }
        } else {
            returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天
        }
    }
    return returnAge;//返回周岁年龄

}

/**
 * 通过身份证获取出生年月日
 */
function birthdayByIDCard(val) {
    var birthdayValue;
    //if (15 == val.length) { //15位身份证号码
    //    birthdayValue = val.charAt(6) + val.charAt(7);
    //    if (parseInt(birthdayValue) < 10) {
    //        birthdayValue = '20' + birthdayValue;
    //    }
    //    else {
    //        birthdayValue = '19' + birthdayValue;
    //    }
    //    birthdayValue = birthdayValue + val.charAt(8) + val.charAt(9) + "-" + val.charAt(10) + val.charAt(11) + "-" + val.charAt(12) + val.charAt(13);
    //
    //}
    if (18 == val.length) { //18位身份证号码
        birthdayValue = val.charAt(6) + val.charAt(7) + val.charAt(8) + val.charAt(9) + "-" + val.charAt(10) + val.charAt(11) + "-" + val.charAt(12) + val.charAt(13);
    }
    return birthdayValue;
}

/**
 * 验证18位数身份证号码中的生日是否是有效生日
 * @param idCard 18位书身份证字符串
 * @return
 */
function isValidityBrithBy18IdCard(idCard18) {
    var year = idCard18.substring(6, 10);
    var month = idCard18.substring(10, 12);
    var day = idCard18.substring(12, 14);
    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 这里用getFullYear()获取年份，避免千年虫问题
    if (temp_date.getFullYear() != parseFloat(year)
        || temp_date.getMonth() != parseFloat(month) - 1
        || temp_date.getDate() != parseFloat(day)) {
        return false;
    } else {
        return true;
    }
}

/**
 * 验证15位数身份证号码中的生日是否是有效生日
 * @param idCard15 15位书身份证字符串
 * @return
 */
function isValidityBrithBy15IdCard(idCard15) {
    var year = idCard15.substring(6, 8);
    var month = idCard15.substring(8, 10);
    var day = idCard15.substring(10, 12);
    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
    if (temp_date.getYear() != parseFloat(year)
        || temp_date.getMonth() != parseFloat(month) - 1
        || temp_date.getDate() != parseFloat(day)) {
        return false;
    } else {
        return true;
    }
}





