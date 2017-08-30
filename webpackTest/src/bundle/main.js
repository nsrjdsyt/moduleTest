/**
 * Created by 17020979 on 2017/3/21.
 */
var aLoad = require("bundle-loader!./js/a.js")

aLoad(function (a) {
    console.log(a.a)
})


var bLoad = require("bundle-loader?lazy!./js/b.js")

setTimeout(
    function () {
        bLoad(function (b) {
            console.log(b.b)
        })
    },
    3000
)
