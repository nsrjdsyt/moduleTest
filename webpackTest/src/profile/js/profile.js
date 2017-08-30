/**
 * Created by Administrator on 2017/3/17.
 */
//require("../css/profile.css");
//require("../css/sass.scss");

var template = require('art-template/dist/template');

var profileTpl = require("../tpl/profile.tpl");
var html1 = profileTpl({name:'profile'});

var profileTpl2 = require("../tpl/profile2.tpl");
var html2 = profileTpl2({name:'profile2'});

document.getElementById("profile-wrap").innerHTML = html1;
document.getElementById("profile-wrap2").innerHTML = html2;

// 页面内的模板测试
var inline = {
    title: '测试模板内联',
    list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
};
var inlineHtml = template('inlineTpl',inline);
document.getElementById("inlineTplWrap").innerHTML = inlineHtml;



