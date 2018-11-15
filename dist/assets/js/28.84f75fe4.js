(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{185:function(e,t,s){"use strict";s.r(t);var n=s(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("笔者近期做代码优化，其中就重要的一块就是代码规范。之前的文章写过"),s("a",{attrs:{href:"http://doc.hz.netease.com/pages/viewpage.action?pageId=105038244",target:"_blank",rel:"noopener noreferrer"}},[e._v("ESLint"),s("OutboundLink")],1),e._v("，用来规范js写法，现在使用StyleLint来规范css写法。")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._m(14),e._v(" "),s("p",[e._v("在stylelint使用过程中，有时候会对某条css添加例外，不要适用规则或部分规则")]),e._v(" "),e._m(15),e._v(" "),e._m(16),e._m(17),e._v(" "),e._m(18),e._m(19),e._v(" "),s("p",[e._v("有些项目是开发到一半时，添加了StyleLint进行css约束，这时候需要自动化对不满足条件的Rule进行修复，如下是使用到的几种：")]),e._v(" "),e._m(20),e._v(" "),s("p",[e._v("该命令能fix大部分格式问题，具体哪些规则可以自动fix可以看"),s("a",{attrs:{href:"http://stylelint.cn/user-guide/rules/",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),s("OutboundLink")],1)]),e._v(" "),e._m(21),e._v(" "),s("p",[e._v("优点是可以统一格式化文件，缺点是只能单个文件操作")]),e._v(" "),e._m(22),e._v(" "),s("p",[e._v("类似Vetur插件，但该插件可定制化更多，详情请移至"),s("a",{attrs:{href:"https://github.com/mrmlnc/vscode-stylefmt",target:"_blank",rel:"noopener noreferrer"}},[e._v("github"),s("OutboundLink")],1)]),e._v(" "),e._m(23),e._v(" "),s("p",[e._v("该工具也是官方推荐，可以批量修改，使用如下命令修改，详情见 "),s("a",{attrs:{href:"https://github.com/morishitter/stylefmt",target:"_blank",rel:"noopener noreferrer"}},[e._v("github"),s("OutboundLink")],1)]),e._v(" "),e._m(24)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"stylelint样式规范工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stylelint样式规范工具","aria-hidden":"true"}},[this._v("#")]),this._v(" stylelint样式规范工具")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("安装和使用")]),this._v(" "),t("li",[this._v("添加例外")]),this._v(" "),t("li",[this._v("自动修复")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"安装和使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装和使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装和使用")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm install --save-dev stylelint\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[t("p",[this._v("新增"),t("code",[this._v(".stylelintrc")]),this._v("文件")])]),this._v(" "),t("li",[t("p",[this._v("在文件中设置规则，以下是笔者部门使用的css规范")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{\n    "rules": {\n        # 缩进 4 个空格\n        "indentation": 4,\n\n        # 去掉小数点前面的 0\n        "number-leading-zero": "never",\n\n        # 使用双引号\n        "string-quotes": "double",\n\n        # 每个属性声明末尾都要加分号\n        "declaration-block-trailing-semicolon": "always",\n\n        # 属性值 0 后面不加单位\n        "length-zero-no-unit": true,\n\n        # 对空行的处理\n        # 第一条属性声明前不允许有空行\n        "declaration-empty-line-before": [\n            "never",\n            { ignore: [ "after-declaration" ] }\n        ],\n        # 每个样式规则前后都有空行，除了第一条规则与规则前有注释\n        "rule-empty-line-before": [\n            "always",\n            { except: [ "after-single-line-comment", "first-nested" ] }\n        ],\n        # 在结尾 "}" 之前不允许有空行\n        "block-closing-brace-empty-line-before": [ "never" ],\n        # "@" 语句之前都有空行，但是忽略 "@" 语句在代码块中间与同个非代码块 "@" 语句之间的空行这两种情况\n        "at-rule-empty-line-before": [\n            "always",\n            { ignore: [ "inside-block", "blockless-after-same-name-blockless" ] }\n        ],\n        # 不允许超过一行的空行\n        "max-empty-lines": 1,\n        # 每行句末不允许有多余空格\n        "no-eol-whitespace": true,\n        # 文件末尾需要有一个空行\n        "no-missing-end-of-source-newline": true,\n\n        # 大小写处理\n        "unit-case": "lower",\n        "color-hex-case": "upper",\n        "value-keyword-case": "lower",\n        "function-name-case": "lower",\n        "property-case": "lower",\n        "at-rule-name-case": "lower",\n        "selector-pseudo-class-case": "lower",\n        "selector-pseudo-element-case": "lower",\n        "selector-type-case": "lower",\n        "media-feature-name-case": "lower",\n\n        # 对空格的处理\n        # "{" 前必须有空格\n        "block-opening-brace-space-before": "always",\n        # 注释 "/*" 后和 "*/" 前必须有空格\n        "comment-whitespace-inside": "always",\n        # 属性名 ":" 后必须有空格\n        "declaration-colon-space-after": "always",\n        # 属性名 ":" 前不能有空格\n        "declaration-colon-space-before": "never",\n        # 声明属性末尾 ";" 前不能有空格\n        "declaration-block-semicolon-space-before": "never",\n        # 属性值中的 "," 后必须有空格\n        "function-comma-space-after": "always",\n        # 选择器例如 ">、+、~" 前后必须要有空格\n        "selector-combinator-space-before": "always",\n        "selector-combinator-space-after": "always",\n        # 分隔多个选择器之间的 "," 后必须有空格\n        "selector-list-comma-space-after": "always",\n        # 分隔多个选择器之间的 "," 前不能有空格\n        "selector-list-comma-space-before": "never",\n        # 子代选择器之间没有额外空格\n        "selector-descendant-combinator-no-non-space": true,\n        # 多个属性值之间的 "," 后必须有空格\n        "value-list-comma-space-after": "always",\n        # 多个属性值之间的 "," 前不能有空格\n        "value-list-comma-space-before": "never",\n        # 媒体查询中设置断点宽度里的 ":" 后必须有空格\n        "media-feature-colon-space-after": "always",\n        # 媒体查询中设置断点宽度里的 ":" 前不能有空格\n        "media-feature-colon-space-before": "never"\n    }\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"规则检查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#规则检查","aria-hidden":"true"}},[this._v("#")]),this._v(" 规则检查")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[this._v("stylelint "),t("span",{attrs:{class:"token string"}},[this._v("'src/**/*.vue'")]),this._v(" --fix\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("stylelint命令有时候无法解析到，因为使用了全局的sylelint，这时可以指定相对路径"),t("code",[this._v("./node_modules/.bin/stylelint")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"提交git时检查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交git时检查","aria-hidden":"true"}},[this._v("#")]),this._v(" 提交git时检查")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("需要用到插件"),t("code",[this._v("husky")]),this._v(",该插件会在git提交时，执行"),t("code",[this._v("npm run precommit")]),this._v("命令，所以需要在"),t("code",[this._v("package.json")]),this._v("中添加如下代码检查：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('"lint": "eslint --quiet --ext .js,.vue src",\n"style": "stylelint \'src/**/*.vue\' --fix",\n"precommit": "npm run lint && npm run style",\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"添加例外"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加例外","aria-hidden":"true"}},[this._v("#")]),this._v(" 添加例外")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"关闭全部规则："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭全部规则：","aria-hidden":"true"}},[this._v("#")]),this._v(" 关闭全部规则：")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token comment"}},[e._v("/* stylelint-disable */")]),e._v("\n"),s("span",{attrs:{class:"token selector"}},[e._v("a")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{attrs:{class:"token comment"}},[e._v("/* stylelint-enable */")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"关闭部分规则："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭部分规则：","aria-hidden":"true"}},[this._v("#")]),this._v(" 关闭部分规则：")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token comment"}},[e._v("/* stylelint-disable selector-no-id, declaration-no-important   */")]),e._v("\n"),s("span",{attrs:{class:"token selector"}},[e._v("#id")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{attrs:{class:"token property"}},[e._v("color")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" pink "),s("span",{attrs:{class:"token important"}},[e._v("!important")]),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{attrs:{class:"token comment"}},[e._v("/* stylelint-enable */")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"自动修复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动修复","aria-hidden":"true"}},[this._v("#")]),this._v(" 自动修复")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("1."),t("code",[this._v("--fix")]),this._v("命令")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("2."),t("code",[this._v("Vetur")]),this._v("插件--格式化文件")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("3."),t("code",[this._v("vscode-stylefmt")]),this._v("插件")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("4."),t("code",[this._v("stylefmt")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("stylefmt --stdin-filename input.css\n")])])])}],!1,null,null,null);a.options.__file="stylelint样式规范工具.md";t.default=a.exports}}]);