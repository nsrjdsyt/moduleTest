/**
 * Created by Administrator on 2017/3/17.
 */
var srcPath = "./src";

module.exports = {
    entry:{
        main: './main.js',
        profile: srcPath + '/profile/js/profile.js',
        feed: srcPath + '/feed/js/feed.js'
    },

    output:{
        path:'./build',               // webpack的build路径 ,输出文件的保存路径
        filename:'[name].js',         // 输出文件的名称,
        publicPath:'./src'             // 你require的路径
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.tpl$/,
                loader: "art-template-loader"
            },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    }
};
