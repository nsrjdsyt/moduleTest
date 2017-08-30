
# 非官方[art-template-loader](https://github.com/byends/art-template-loader) 使用测试

- 官方[art-template-loader](https://www.npmjs.com/package/art-template-loader)

- 用法配置：

      var testTpl  = require("./test.tpl");

      var template = require('art-template/dist/template')
      template.helper('dateFormat', function (timestamp, format) {

          return format
      })

      var inline = {
          title: '测试模板内联',
          list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
      }

      document.getElementById("wrap").innerHTML = testTpl({name:"hello world2",time:1489820158970})
      document.getElementById("inlineTplWrap").innerHTML = template('inlineTpl', inline)

- feed 普通用法测试：

      var feedTpl = require("../tpl/feed.tpl");
      var html = feedTpl({name:'feed'})

      document.getElementById("feed-wrap").innerHTML = html;

- profile 引用多模板及页面内模板测试

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
