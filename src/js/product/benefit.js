/**
 * Created by scorpion1750 on 2016/8/8.
 */
//添加受益人
function addInherit(){
    var num1 = 1;   //第一受益人
    //var cont =  0;
    $(".inherit").each(function(){
        //if($(this).find(".ihr").attr("rel") == 1){
            num1 ++;
        //}else if($(this).find(".ihr").attr("rel") == 2){
        //    cont ++;
        //}

    });
    if(num1> 3){
        mui.alert("受益人最多三位!");
    }else{
        $(".inheri").append('<div class="inherit" id="inherit'+ num1 +'"></div>');

        $("#inherit"+num1).load("../templete.html",function(){
            //var sy = ["第一受益人","第二受益人","第三受益人"];
            //var i = 0;
            //$(".ihr").each(function(){
            //    $(this).text(sy[i]);
            //    i++;
            //});
            //if(num>=4){
            //    $(this).find(".ihr").attr("rel","2");
            //    $(this).find(".ihr").text("第二受益人");
            //}
            //if(cont>=3){
            //    $(this).find(".ihr").attr("rel","1");
            //    $(this).find(".ihr").text("第一受益人");
            //}
            if(num1 == 2){
                $(".del").removeClass("hide");
            }
        });

    }

}

//删除受益人
function delInherit(del){
    var num2 = 0;
    $(del).parents(".inherit").remove();
    $(".inherit").each(function(){
        num2 ++;
    });
   // var sy = ["第一受益人","第二受益人","第三受益人"];
    var i = 0;
    $(".ihr").each(function(){
        $(".inherit").attr("id","inherit"+(i+1));
       // $(this).text(sy[i]);
        i++;
    });

    if(num2 == 1){
        $(".del").addClass("hide");
    }

}

//身份证得到性别及生日
function addInfoByIDCard1(input) {
    var node = $(input).parents(".inherit");
    var type = node.find(".cardType").attr("rel");
    var number = $(input).val();
    if(type==0){
        if(number.length>18){
            $(input).val(number.substr(0, 18));
        }
        var lastChar = number.substr(number.length - 1, number.length);
        if (!lastChar.match(/^[0-9Xx]+$/)) {
            $(input).val(number.substr(0, number.length - 1));
        }
        var gender = genderByIDCard(number);
        var birth = birthdayByIDCard(number);
        node.find(".birth-inherit").text(birth).attr("rel",birth);
        node.find(".gender-inherit").text(gender == "1" ? '女' : '男').attr("rel", gender);
        node.find(".birth-inherit").css("pointer-events","none");
        node.find(".gender-inherit").css("pointer-events","none");
    }else{
        node.find(".birth-inherit").css("pointer-events","auto");
        node.find(".gender-inherit").css("pointer-events","auto");
    }

    $('.enter-btn').css("background-color", "#F39A0F").attr('disable', 'false');

}
//非空判断
function checkInputActualTime1(val){
    var value = $(val).val();
    var node = $(val).parents(".inherit");
    var a = 0;
    if($(val).hasClass("identify-inherit")){
        var idC = $("#identify").val();
        var type = $(val).parents(".inherit").find(".cardType").attr("rel");
        if(value == ""){
            mui.alert("证件号不能为空");
        }else{
            if(type == 0){  //身份证
                //if (value.length != 18 && value.length != 0) {
                //    mui.alert('身份证号码位数不为18位');
                //    return;
                //}else
                if (!IdCardValidate(value)) {
                    mui.alert('请正确填写证件号码');
                    a = 1;
                    return false;
                }else if(idC == value && $("#relation_replace").text() == "本人"){
                    mui.alert('受益人身份证号不能与投保人相同(当投保人与被保人为同一人时)');
                    a = 1;
                    return false;
                } else{

                }
            }else{
                if (value.length <3 || value.length > 20) {
                    mui.alert('请正确填写证件号码');
                    a = 1;
                    return false;
                }
            }
        }
        if(a != 0){
            return false;
        }

    }else if($(val).hasClass("name-inheritor")){
        if(value != ""){
            var val_replace = value.replace(/(^\s*)|(\s*$)/g, ""); //去掉首尾空格
            if (!value.match(/^[0-9A-Z_a-z\u4e00-\u9faf\s•·.]+$/) || val_replace.length != value.length) {
                mui.alert('姓名中包含特殊字符');
                return false;
            }
            var lastChar = value.substr(value.length - 1, value.length);
            var firstChar = value.substr(0, 1);
            if (lastChar.match(/^[•·.]+$/) || firstChar.match(/^[•·.]+$/)) {
                mui.alert('姓名中包含特殊字符');
                return false;
            }
            var nameLength = 0;
            for (var nl = 0; nl < value.length; nl++) {
                if (value.substring(nl, nl + 1).match(/.*[\u4e00-\u9fa5]+.*$/)) {
                    nameLength += 2;
                } else {
                    nameLength++;
                }
            }
            if (nameLength < 2) {
                mui.alert('姓名最小不能小于2个字符');
                return false;
            } else if (nameLength > 36) {
                mui.alert('姓名最长不能超过36个字符');
                return false;
            }
        }else{
            mui.alert('请填写受益人姓名');
            return false;
        }

    }else if($(val).hasClass("irate")){
        if(value == ""){
            mui.alert("请填写受益人受益比例");
            return false;
        }else if(value < 1 || value > 100){
            mui.alert("受益比例范围为1-100");
            return false;
        }
    }

}
var insureInfo;
//赋值
function formInheri(){
    insureInfo = JSON.parse(sessionStorage.getItem('insureInfo'));
    var orderDetail = JSON.parse(sessionStorage.getItem('orderDetail'));
    if (orderDetail != null && orderDetail.insured != null && orderDetail.policyholder != null && orderDetail.beneficiaryDto.length != 0) {
        insureInfo.beneficiaryDto = orderDetail.beneficiaryDto;
    }
    if(insureInfo != null && insureInfo.insured != null && insureInfo.policyholder != null && orderDetail.beneficiaryDto.length != 0){
        //   beneficiaryDto: data.beneficiaryDto,  //受益人信息
        if(insureInfo.beneficiaryType == 1) {
            var benifList = insureInfo.beneficiaryDto;
            $("#inheritor").attr("rel", "1");
            $("#inheritor").text("指定受益人");
            $(".inheri").removeClass("hide");
            $(".btn-div1").removeClass("hide");
            var k = 0;
            var val = $("#inherit1");
            var beneficiarySex = benifList[k].beneficiarySex;
            if(beneficiarySex == 0){
                beneficiarySex = "男";
            }else if(beneficiarySex == 1) {
                beneficiarySex = "女";
            }
            var beneficiaryIDType = benifList[k].beneficiaryIDType;
            if(beneficiaryIDType == 0){
                beneficiaryIDType = "身份证";
            }else if(beneficiaryIDType == 3) {
                beneficiaryIDType = "护照";
            }
            var brelationToInsured = benifList[k].brelationToInsured;
            if(brelationToInsured == "01"){
                brelationToInsured = "配偶";
            }else if(brelationToInsured == "03"){
                brelationToInsured = "父亲";
            }else if(brelationToInsured == "04"){
                brelationToInsured = "母亲";
            }else if(brelationToInsured == "05"){
                brelationToInsured = "子女";
            }
            val.find(".name-inheritor").val(benifList[k].beneficiaryName);
            val.find(".birth-inherit").attr("rel",benifList[k].beneficiaryBirthday);
            val.find(".birth-inherit").text(benifList[k].beneficiaryBirthday);
            val.find(".identify-inherit").val(benifList[k].beneficiaryIDNo);
            val.find(".gender-inherit").attr("rel",benifList[k].beneficiarySex);
            val.find(".gender-inherit").text(beneficiarySex);
            val.find(".cardType").attr("rel",benifList[k].beneficiaryIDType);
            val.find(".cardType").text(beneficiaryIDType);
            val.find(".relationship").attr("rel",benifList[k].brelationToInsured);
            val.find(".relationship").text(brelationToInsured);
            val.find(".irate").val(benifList[k].binterestPercent);
            if(insureInfo.bnfNum>1){
                for (var i = 1; i < insureInfo.bnfNum; i++) {

                    var num3 = i+1;
                    $(".inheri").append('<div class="inherit" id="inherit'+ num3 +'"></div>');
                    console.log(num3);
                    inhr(num3);
                }
            }


        }
    }

}
function inhr(num4){
    $("#inherit"+num4).load("../templete.html",function(){
        console.log("num4");
        //if(num == 2){
        $(".del").removeClass("hide");
        //}
        var k = num4 - 1;
        var val = $("#inherit"+num4);
        var benifList = insureInfo.beneficiaryDto;
        var beneficiarySex = benifList[k].beneficiarySex;
        if(beneficiarySex == 0){
            beneficiarySex = "男";
        }else if(beneficiarySex == 1) {
            beneficiarySex = "女";
        }
        var beneficiaryIDType = benifList[k].beneficiaryIDType;
        if(beneficiaryIDType == 0){
            beneficiaryIDType = "身份证";
        }else if(beneficiaryIDType == 3) {
            beneficiaryIDType = "护照";
        }
        var brelationToInsured = benifList[k].brelationToInsured;
        if(brelationToInsured == "01"){
            brelationToInsured = "配偶";
        }else if(brelationToInsured == "03"){
            brelationToInsured = "父亲";
        }else if(brelationToInsured == "04"){
            brelationToInsured = "母亲";
        }else if(brelationToInsured == "05"){
            brelationToInsured = "子女";
        }
        val.find(".name-inheritor").val(benifList[k].beneficiaryName);
        val.find(".birth-inherit").attr("rel",benifList[k].beneficiaryBirthday);
        val.find(".birth-inherit").text(benifList[k].beneficiaryBirthday);
        val.find(".identify-inherit").val(benifList[k].beneficiaryIDNo);
        val.find(".gender-inherit").attr("rel",benifList[k].beneficiarySex);
        val.find(".gender-inherit").text(beneficiarySex);
        val.find(".cardType").attr("rel",benifList[k].beneficiaryIDType);
        val.find(".cardType").text(beneficiaryIDType);
        val.find(".relationship").attr("rel",benifList[k].brelationToInsured);
        val.find(".relationship").text(brelationToInsured);
        val.find(".irate").val(benifList[k].binterestPercent);
    });
}

//根据编码设置地址
function setAddress(proId,cityId,areaId,province,city, area) {
    var tpro,tcity,tarea;
    for(var i in cityData3){
        if(cityData3[i].value == province){    //省
            tpro = cityData3[i].text;
        }
        for(var j in cityData3[i].children){
            if(cityData3[i].children[j].value == city){    //市
                tcity = cityData3[i].children[j].text;
            }
            for(var k in cityData3[i].children[j].children){
                if(cityData3[i].children[j].children[k].value == area){    //区
                    tarea = cityData3[i].children[j].children[k].text;
                }
            }
        }
    }
    $(proId).text(tpro).attr('rel', province);
    $(cityId).text(tcity).attr('rel', city);
    $(areaId).text(tarea).attr('rel', area);

}
