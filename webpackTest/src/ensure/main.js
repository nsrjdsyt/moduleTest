/**
 * Created by 17020979 on 2017/3/21.
 */
var ensureB = require("./js/ensure-b.js");

console.log(ensureB.b);

require.ensure(['./js/ensure-a.js'], function (require) {

    var ensureA = require('./js/ensure-a.js');

    console.log(ensureA.a)
});

require(['./js/require-c.js'], function (c) {
    console.log(c.c)
})



require('../index/main.js')



//require.ensure(['./b.js'], function(require) {
//    require('./c.js');
//});

//上面代码中，b.js 和 c.js 都被打包到一起，而且从主 bundle 中拆分出来。但只有 c.js 的内容被执行。b.js 的内容仅仅是可被使用，但并没有被执行。想要执行 b.js，我们必须以同步的方式引用它，如 require('./b.js')，来让它的代码被执行。