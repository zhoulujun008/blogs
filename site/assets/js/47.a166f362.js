(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{368:function(t,s,a){"use strict";a.r(s);var e=a(9),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue2-0源码分析-框架结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2-0源码分析-框架结构","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue2.0源码分析 - 框架结构")]),t._v(" "),a("blockquote",[a("p",[t._v("看过Vue源码有一段时间了，对里面的研究也有一些心得。对于Vue源码分析文章，笔者以前不是很想写，因为网上有太多优质的Vue源码分析文章，笔者读源码时也受益于此。但思维的转变，发生在一次团队Code Review。笔者所在的团队主要使用Vue技术栈(团队小伙伴都是多面手，一专多能)，但有些小伙伴受限于业务开发，Vue停留在API使用层。所以笔者组织大家对Vue进行源码分析，各自分工并且每周Code Review分享给所有人，借此提升团队的工作效率，也形成一个良好的团队氛围。故以文字记录下来，一方面沉淀自己，另一方面也为团队code review做备忘录。")])]),t._v(" "),a("p",[t._v("笔者认为，读源码需要从全局到局部，先了解整个源码的目录结构，懂得项目里有哪些内容，然后列举出来，再通过个人兴趣研究点，逐个攻破。比如通读Vue目录结构，里面有core/compile/weex/ssr等，再提取出研究的web核心：双向数据绑定/组件系统/事件/生命周期/ast编译/vnode等。读源码切忌一行一行分析，这样容易陷入局部思考，也容易有挫折感。源码也不是只读一遍就能理解，所以需要反复回溯，细细思考。")]),t._v(" "),a("p",[t._v("源码分析顺序：")]),t._v(" "),a("ul",[a("li",[t._v("目录结构")]),t._v(" "),a("li",[t._v("核心内容")]),t._v(" "),a("li",[t._v("重点突破")]),t._v(" "),a("li",[t._v("回归溯源")])]),t._v(" "),a("h2",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),a("p",[t._v("思维导图可以清晰的了解到全局内容。看目录结构，除去build打包，类型定义以及ssr/weex，能了解到我们研究的核心就"),a("code",[t._v("compiler、core、platforms.web")]),t._v("三个文件夹。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/6310131/45196761-6daeb100-b290-11e8-89fd-31e965e1fcee.png",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"核心内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 核心内容")]),t._v(" "),a("p",[t._v("通过分析，按照工作常用API权重配比，优先研究"),a("code",[t._v("vue core")]),t._v("，接下来插件"),a("code",[t._v("plugin")]),t._v("，最后再其他细枝末节"),a("code",[t._v("detail")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/6310131/45197180-85873480-b292-11e8-909d-37cc2dbdc5b2.png",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"整体流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整体流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 整体流程")]),t._v(" "),a("p",[t._v("下图整理了vue初始化流程以及代码流转，建议配合"),a("a",{attrs:{href:"https://ustbhuangyi.github.io/vue-analysis/prepare/entrance.html#vue-%E7%9A%84%E5%85%A5%E5%8F%A3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js技术揭秘"),a("OutboundLink")],1),t._v("文章去了解。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/6310131/45197312-1231f280-b293-11e8-83e0-93c4844924c9.png",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"debug-vue源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debug-vue源码","aria-hidden":"true"}},[t._v("#")]),t._v(" Debug Vue源码")]),t._v(" "),a("p",[t._v("单纯看代码，特别是一些复杂逻辑时，容易绕进去，使得源码阅读效率降低。而debug源码能很好的知道关键地方的输入和输出，加快理解源码的速度。这里笔者也建议clone Vue源码后，设置以下debug设置，从而更好的调试源码。")]),t._v(" "),a("h3",{attrs:{id:"chrome调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chrome调试","aria-hidden":"true"}},[t._v("#")]),t._v(" Chrome调试")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在配置文件scripts/config.js中，增加"),a("code",[t._v("sourceMap: true")]),t._v("。这样最终生成的dist/vue.js打包文件会带上源码的路径。")])]),t._v(" "),a("li",[a("p",[t._v("修改源码examples文件夹中案例，把引用的Vue包路径"),a("code",[t._v("改为“dist/vue.js”")])])])]),t._v(" "),a("h3",{attrs:{id:"vscode调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode调试","aria-hidden":"true"}},[t._v("#")]),t._v(" VSCode调试")]),t._v(" "),a("p",[t._v("在VSCode编辑器内，调试源码更方便。VSCode基本设置以及参数说明在笔者另外一篇博文"),a("router-link",{attrs:{to:"/node/node-vscode-debug.html"}},[t._v("Debug fro VSCode")]),t._v("有详细说明。如下给出最终vscode调试设置：")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"version"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0.2.0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"configurations"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"type"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"chrome"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"request"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"launch"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"name"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Launch Chrome"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"url"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"file:///project-path/vue/examples/commits/index.html"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 这里的project-path是你电脑上的根路径")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"webRoot"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"${workspaceFolder}/examples/commits/index.html"')]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])},[],!1,null,null,null);n.options.__file="vue-code-frame.md";s.default=n.exports}}]);