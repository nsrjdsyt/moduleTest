/**
 * Created by 17020979 on 2017/3/21.
 */
var art = require('tmodjs-loader/runtime');
var tpl = require('./a.tpl');

art.helper('upCase', function(oldValue) {
    console.log(arguments)

    return oldValue.toUpperCase();
});

document.getElementById("wrap").innerHTML = tpl({name:"tom"});



//测试不支持内敛模板
//var inline = {
//    title: '测试模板内联'
//};
//var inlineHtml = art(inline,'inlineTpl');
//document.getElementById("inlineTplWrap").innerHTML = inlineHtml;

console.log("art", art)
console.log("tpl", tpl)