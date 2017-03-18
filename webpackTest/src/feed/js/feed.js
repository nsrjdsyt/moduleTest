/**
 * Created by Administrator on 2017/3/17.
 */
var feedTpl = require("../tpl/feed.tpl");
var html = feedTpl({name:'feed'})

document.getElementById("feed-wrap").innerHTML = html;

