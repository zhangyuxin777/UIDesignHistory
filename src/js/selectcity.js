$.initProv = function (prov, city, defaultProv, defaultCity) {
    //alert(JSON.stringify($._cityInfo));
    var provEl = $(prov);
    var cityEl = $(city);
    var hasDefaultProv = (typeof(defaultCity) != 'undefined');

    var provHtml = '';

    provHtml += '<option value="-1">请选择</option>';
    for (var i = 0; i < $._cityInfo.length; i++) {
        provHtml += '<option value="' + i + '"' + ((hasDefaultProv && $._cityInfo[i].p == defaultProv) ? ' selected="selected"' : '') + '>' + $._cityInfo[i].p + '</option>';
    }
    provEl.html(provHtml);
    $.initCities(provEl, cityEl, defaultCity);
    provEl.change(function () {
        $.initCities(provEl, cityEl);

    });
};

$.initCities = function (provEl, cityEl, defaultCity) {
    var hasDefaultCity = (typeof(defaultCity) != 'undefined');
    if (provEl.val() != '' && parseInt(provEl.val()) >= 0) {
        var cities = $._cityInfo[parseInt(provEl.val())].c;
        var cityHtml = '';
        //alert(JSON.stringify($._cityInfo));
        cityHtml += '<option value="-1" >请选择</option>';
        for (var i = 0; i < cities.length; i++) {
            cityHtml += '<option value="' + cities[i].v + '"' + ((hasDefaultCity && cities[i] == defaultCity) ? ' selected="selected"' : '') + '>' + cities[i].n + '</option>';
        }
        cityEl.html(cityHtml);
        cityEl.val('-1');
        $("#jjjjj").html('<div class="item-after" id="city11">请选择</div>');
        //
    } else {
        cityEl.html('<option value="-1">请先选择</option>');
    }

};

$.initProvi = function (prov, city, area, defaultProv, defaultCity, defaultArea) {
    //alert(JSON.stringify($._cityInfo));
    var provEl = $(prov);
    var cityEl = $(city);
    var areaEl = $(area);
    var hasDefaultProv = (typeof(defaultCity) != 'undefined');

    var provHtml = '';

    provHtml += '<option value="-1">请选择</option>';
    for (var i = 0; i < $._cityInfol.length; i++) {
        provHtml += '<option rel="' + $._cityInfol[i].p + '" value="' + i + '"' + ((hasDefaultProv && $._cityInfol[i].pn == defaultProv) ? ' selected="selected"' : '') + '>' + $._cityInfol[i].pn + '</option>';
    }
    provEl.html(provHtml);
    $.initCity(provEl, cityEl, areaEl, defaultCity, defaultArea);
    provEl.change(function () {
        $.initCity(provEl, cityEl, areaEl);
    });

};

$.initCity = function (provEl, cityEl, areaEl, defaultCity, defaultArea) {

    var hasDefaultCity = (typeof(defaultCity) != 'undefined');

    if (provEl.val() != '' && parseInt(provEl.val()) >= 0) {
        var cities = $._cityInfol[parseInt(provEl.val())].cs;
        var cityHtml = '';
        //alert(JSON.stringify($._cityInfo));
        cityHtml += '<option value="-1" >请选择</option>';

        for (var i = 0; i < cities.length; i++) {
            cityHtml += '<option rel="' + cities[i].c + '" value="' + cities[i].v + '"' + ((hasDefaultCity && cities[i] == defaultCity) ? ' selected="selected"' : '') + '>' + cities[i].cn + '</option>';
        }
        cityEl.html(cityHtml);

        $("#jjjjj").html('<div class="item-after">请选择</div>');

    } else {
        cityEl.html('<option value="-1">请先选择</option>');
    }

    $.initArea(provEl, cityEl, areaEl, defaultCity, defaultArea);
    cityEl.change(function () {
        $.initArea(provEl, cityEl, areaEl);
    });
};

$.initArea = function (provEl, cityEl, areaEl, defaultCity, defaultArea) {
    var hasDefaultCity = (typeof(defaultCity) != 'undefined');
    var hasDefaultArea = (typeof(defaultArea) != 'undefined');

    if (provEl.val() != '' && parseInt(provEl.val()) >= 0 && cityEl.val() != '') {
        var area = $._cityInfol[parseInt(provEl.val())].cs;
        var cityValue2 = $("#city option:selected").val();
        //alert(cityValue2);
        var cityValue = defaultCity;
        var areaList = [];
        if (!hasDefaultCity) {
            for (var i = 0; i < area.length; i++) {
                if (cityValue2 == area[i].v) {
                    areaList = area[i].rs
                }
            }
        } else {
            for (var i = 0; i < area.length; i++) {
                if (cityValue == area[i].cn) {
                    areaList = area[i].rs
                }
            }
        }

        var areaHtml = '';

        areaHtml += '<option value="-1" >请选择</option>';
        for (var i = 0; i < areaList.length; i++) {
            areaHtml += '<option rel="' + areaList[i].r + '" value="' + areaList[i].r + '"' + ((hasDefaultArea && area[i] == defaultArea) ? ' selected="selected"' : '') + '>' + areaList[i].rn + '</option>';
        }
        areaEl.html(areaHtml);

        $("#area11").html('<div class="item-after">请选择</div>');
        //
    } else {
        areaEl.html('<option value="-1">请先选择</option>');
    }

};