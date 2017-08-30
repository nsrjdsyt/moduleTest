/**
 * Created by Administrator on 2017/3/17.
 */
//
var testTpl  = require("./test.tpl");
// import testTpl from "./test.tpl";
var template = require('art-template/dist/template')


template.helper('dateFormat', function (timestamp, format) {
    var date = new Date(timestamp * 1000);
    var map = {
        'M': date.getMonth() + 1, //月份
        'd': date.getDate(), //日
        'h': date.getHours(), //小时
        'm': date.getMinutes(), //分
        's': date.getSeconds(), //秒
        'q': Math.floor((date.getMonth() + 3) / 3), //季度
        'S': date.getMilliseconds() //毫秒
    };

    format = format.replace(/([yMdhmsqS])+/g, function(all, t){
        var v = map[t];
        if (v !== undefined) {
            if (all.length > 1) {
                v = '0' + v;
                v = v.substr(v.length-2)
            }
            return v
        } else if (t === 'y') {
            return (date.getFullYear() + '').substr(4 - all.length)
        }
        return all
    });
    return format
})

var inline = {
    title: '测试模板内联',
    list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
}

document.getElementById("wrap").innerHTML = testTpl({name:"hello world2",time:1489820158970})
document.getElementById("inlineTplWrap").innerHTML = template('inlineTpl', inline);



var globalVar = require("globalVar");  //Webpack 可以配置 externals 来将依赖的库指向全局变量，从而不再打包这个库

// console.log(globalVar)

import axios from 'axios';

axios.get("./mock.json").then((response)=>{
    console.log(response.data)
}).catch((xhr)=>{
    console.log(xhr)
})
