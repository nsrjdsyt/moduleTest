/**
 * Created by Administrator on 2017/3/17.
 */
//var path=require('path');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpack = require('webpack');

module.exports = {
    entry:{
        'index/main': './src/index/main.js',
        'profile/profile': './src/profile/js/profile.js',
        'feed/feed': './src/feed/js/feed.js',
        'ensure/main': './src/ensure/main.js',
        'bundle/main': './src/bundle/main.js',
        'tmodjs/main': './src/tmodjs/main.js',

        //'vendor/main': './src/vendor/main.js',
        // vendor: ["jquery",'./src/common/vendor_globalVar.js']
    },
    output:{
        path:'./build',               // webpack的build路径 ,输出文件的保存路径
        filename:'[name].js',        // 输出文件的名称,
        publicPath:'../../build/'             // 你require的路径
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
                //loader: "tmodjs-loader"   //不支持同时使用babel

            },
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' }, // use ! to chain loaders
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    },
    plugins:[
        //new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: '/common/vendor.bundle.js' }),


        new webpack.optimize.UglifyJsPlugin({	//压缩代码
            //sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0),
            sourceMap: true,
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require']	//排除关键字
        }),
        //new webpack.optimize.CommonsChunkPlugin('common')
    ],
    externals:{   //Webpack 可以配置 externals 来将依赖的库指向全局变量，从而不再打包这个库
        globalVar: 'window.globalVar'
    }
};

