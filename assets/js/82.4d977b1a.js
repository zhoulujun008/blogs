(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{397:function(t,r,e){"use strict";e.r(r);var s=e(9),a=Object(s.a)({},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"http-server与pm2搭建应用级服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-server与pm2搭建应用级服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" http-server与pm2搭建应用级服务器")]),t._v(" "),e("h2",{attrs:{id:"http-server概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-server概念","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/indexzero/http-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("http-server"),e("OutboundLink")],1),t._v("概念")]),t._v(" "),e("p",[t._v("http-server ./dist -p 3000\n-p 指定开启服务的地址\n-P 没有匹配到路径时，代理到设置到target地址")]),t._v(" "),e("h2",{attrs:{id:"pm2概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pm2概念","aria-hidden":"true"}},[t._v("#")]),t._v(" pm2概念")]),t._v(" "),e("p",[t._v("pm2 start app.js")]),t._v(" "),e("h3",{attrs:{id:"pm2-runtime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pm2-runtime","aria-hidden":"true"}},[t._v("#")]),t._v(" pm2-runtime")]),t._v(" "),e("p",[t._v("pm2 list")]),t._v(" "),e("h2",{attrs:{id:"http-server与pm2搭配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-server与pm2搭配","aria-hidden":"true"}},[t._v("#")]),t._v(" http-server与pm2搭配")]),t._v(" "),e("p",[t._v("对于是node命令的应用程序，使用"),e("code",[t._v("pm2-runtime")]),t._v("命令代替pm2。pm2-runtime的目标是将您的应用包装到合适的Node.js生产环境中。"),e("strong",[t._v("这里有个注意点，对于node命令的参数，一定要在参数前加入"),e("code",[t._v("--")])]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("server"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"pm2-runtime http-server -- ./dist -p 3000"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n"),e("span",{attrs:{class:"token string"}},[t._v('"server:start"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"http-server ./dist -p 3000"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{attrs:{class:"token string"}},[t._v('"sever"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"pm2-runtime npm -- run server:start"')]),t._v("\n")])])]),e("h2",{attrs:{id:"参考文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://stackoverflow.com/questions/31804966/running-nodejs-http-server-forever-with-pm2",target:"_blank",rel:"noopener noreferrer"}},[t._v("running-nodejs-http-server-forever-with-pm2"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"http://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker-pm2-nodejs"),e("OutboundLink")],1)])])])])},[],!1,null,null,null);a.options.__file="Node-http-server与pm2搭建应用级服务器 .md";r.default=a.exports}}]);