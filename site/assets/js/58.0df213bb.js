(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{183:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("TypeScript带来的类型系统以及强大的IDE支持，让前端开发也变得严谨而流畅。但TypeScript不是原生的Javascript代码，需要进行编译才能转换为Javascript代码。")]),t._v(" "),a("p",[t._v("tsconfig.json是编译TypeScript的配置文件，对书写TypeScript代码十分重要。因为有些选项如果你没配置，则需要严格按照TypeScript的规则来书写，对初期使用TypeScript的同学而言，稍不留神就会书写出不符合规则的代码，从而导致编译报错，打击自信心。其实早期可以通过关闭一些规则设置，从而更愉快的从js转为ts开发。笔者根据项目实战经历来解释一些常用的编译选项，文末也会附上笔者整理的所有tsconfig.json选项的中文解释。")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("是否启用实验性的ES装饰器，boolean类型，默认值：false。"),a("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/decorators.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方解释"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("TypeScript和ES6中引入了Class的概念，同时在"),a("a",{attrs:{href:"https://github.com/tc39/proposal-decorators",target:"_blank",rel:"noopener noreferrer"}},[t._v("stage 2 proposal"),a("OutboundLink")],1),t._v("提出了Java等服务器端语言早就有的装饰器模式。通过引入装饰器模式，能极大简化书写代码，把一些通用逻辑封装到装饰器中。很多库都有用到该特性，比如vue-class-component 及 vuex-class等库。当你使用这些库时，必须开启experimentalDecorators。")]),t._v(" "),t._m(2),t._m(3),t._v(" "),a("p",[t._v("决定如何处理模块。string类型，“node”或者“classic”，默认值：“classic”。"),a("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方解释"),a("OutboundLink")],1)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("确保类的非undefined属性已经在构造函数里初始化。 boolean类型，默认值：false")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),a("p",[t._v("严格的 null检查模式。boolean值，默认值：false")]),t._v(" "),a("p",[t._v("未处理的null和undefined经常会导致BUG的产生，所以TypeScript包含了strictNullChecks选项来帮助我们减少对这种情况的担忧。当启用了strictNullChecks，null和undefined获得了它们自己各自的类型null和undefined。开启该模式有助于发现并处理可能为undefined的赋值。如果是正式项目，笔者建议开启该选项；如果只是练手TypeScirpt，可以关闭该选项，不然所有可能为null/undefined的赋值，都需要写联合类型。")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript compiler-options"),a("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"typescript-tsconfig-json全解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript-tsconfig-json全解析","aria-hidden":"true"}},[this._v("#")]),this._v(" Typescript tsconfig.json全解析")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"experimentaldecorators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#experimentaldecorators","aria-hidden":"true"}},[this._v("#")]),this._v(" experimentalDecorators")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("f")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token builtin"}},[t._v("console")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"f(): evaluated"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" propertyKey"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" descriptor"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PropertyDescriptor"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token builtin"}},[t._v("console")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"f(): called"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("C")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    @"),a("span",{attrs:{class:"token function"}},[t._v("f")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("method")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"moduleresolution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#moduleresolution","aria-hidden":"true"}},[this._v("#")]),this._v(" moduleResolution")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("说直白点，也就是遇到import { AAA } from './aaa'该如何去找对应文件模块解析。对于工程项目，笔者"),s("strong",[this._v("建议大家使用node")]),this._v("（vue-cli3 ts模板默认设置为node策略），因为这个更符合平时我们的书写习惯以及认知（平时都是webpack打包，webpack又基于node之上）。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('// 在源文件/root/src/A.ts中import { b } from "./moduleB"\n// 两种解析方式查找文件方式不同\n\n// classic模块解析方式\n1. /root/src/moduleB.ts\n2. /root/src/moduleB.d.ts\n\n// node模块解析方式\n1. /root/src/moduleB.ts\n2. /root/src/moduleB.tsx\n3. /root/src/moduleB.d.ts\n4. /root/src/moduleB/package.json (if it specifies a "types" property)\n5. /root/src/moduleB/index.ts\n6. /root/src/moduleB/index.tsx\n7. /root/src/moduleB/index.d.ts\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"strictpropertyinitialization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#strictpropertyinitialization","aria-hidden":"true"}},[this._v("#")]),this._v(" strictPropertyInitialization")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("直白点，就是所有的属性值，都需要赋有初始值。"),s("strong",[this._v("建议把strictPropertyInitialization设置为false")]),this._v("，这样就不需要定义一个变量就必须赋有初始值。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("如果设置该选项为true，需要同时启用--strictNullChecks")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Home")]),t._v(" extend Vue"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    jobId"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 如果开启strictPropertyInitialization，则这里会报错，因为没有赋值默认值")]),t._v("\n\n    "),a("span",{attrs:{class:"token function"}},[t._v("method1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token builtin"}},[t._v("console")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jobId"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"strictnullchecks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#strictnullchecks","aria-hidden":"true"}},[this._v("#")]),this._v(" strictNullChecks")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("注意：启用 --strict相当于启用 --noImplicitAny, --noImplicitThis, --alwaysStrict, --strictNullChecks, --strictFunctionTypes和--strictPropertyInitialization")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 未开启strictNullChecks，number类型包含了null和undefined类型")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfoo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Okay")]),t._v("\nfoo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" undefined"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Okay")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 开启strictNullChecks")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Array.prototype.find() return string[] or undefined")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" undefined "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("find")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" key "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'test'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// foo.push('1') // error - 'foo' is possibly 'undefined'")]),t._v("\nfoo "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// okay")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("装饰器")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("experimentalDecorators")]),t._v(": 启用装饰器.启用 vue-class-component 及 vuex-class 需要开启此选项，设置值为true")]),t._v(" "),a("li",[a("code",[t._v("strictFunctionTypes")]),t._v(":启用 vuex-class 需要开启此选项，设置值为false")])])]),t._v(" "),a("li",[a("p",[t._v("重要")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("strictPropertyInitialization")]),t._v(": 是否变量必须要有初始值。vuex-class最好设置为false，不然所有的@State等装饰器都需要设置初始值。")]),t._v(" "),a("li",[a("code",[t._v("noImplicitAny")]),t._v(": 在表达式和声明上有隐含的any类型时报错。如果想省略写any，可以把该值设置为false。默认值为true")]),t._v(" "),a("li",[a("code",[t._v("noUnusedLocals")]),t._v(": true,有未使用的变量时，抛出错误")]),t._v(" "),a("li",[a("code",[t._v("noUnusedParameters")]),t._v(": true,有未使用的参数时，抛出错误")])])]),t._v(" "),a("li",[a("p",[t._v("编译文件")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("allowJs")]),t._v(" 编译时是否允许js文件（.js后缀）")]),t._v(" "),a("li",[a("code",[t._v("files、include和exclude")]),t._v(": 编译文件包含哪些文件以及排除哪些文件。未设置include时，编译器默认包含当前目录和子目录下所有的TypeScript文件（.ts, .d.ts 和 .tsx）。如果allowJs被设置成true，JS文件（.js和.jsx）也被包含进来。")])]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"compilerOptions"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"include"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"src/**/*"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"exclude"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"node_modules"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"**/*.spec.ts"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v("typeRoots和types")]),t._v(' 默认所有可见的"@types"包会在编译过程中被包含进来。如果指定了typeRoots，只有typeRoots下面的包才会被包含进来。如果指定了types，只有被列出来的npm包才会被包含进来（所以可以指定"types": []来禁用自动引入@types包。）。')])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"compilerOptions"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    /* 基本选项 */\n    "),a("span",{attrs:{class:"token property"}},[t._v('"target"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"es5"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       // 指定 ECMAScript 目标版本"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'ES3' (default"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'ES5'"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'ES2015'"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'ES2016'"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'ES2017'"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" or 'ESNEXT'（"),a("span",{attrs:{class:"token string"}},[t._v('"ESNext"')]),t._v("表示最新的ES语法，包括还处在stage X阶段）\n    "),a("span",{attrs:{class:"token property"}},[t._v('"module"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"commonjs"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                  // 指定使用模块"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'commonjs'"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'amd'"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'system'"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'umd' or 'es2015'\n    "),a("span",{attrs:{class:"token property"}},[t._v('"lib"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                             // 指定要包含在编译中的库文件\n    "),a("span",{attrs:{class:"token property"}},[t._v('"allowJs"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       // 允许编译 javascript 文件\n    "),a("span",{attrs:{class:"token property"}},[t._v('"checkJs"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       // 报告 javascript 文件中的错误\n    "),a("span",{attrs:{class:"token property"}},[t._v('"jsx"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"preserve"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                     // 指定 jsx 代码的生成"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'preserve'"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'react-native'"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" or 'react'\n    "),a("span",{attrs:{class:"token property"}},[t._v('"declaration"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                   // 生成相应的 '.d.ts' 文件\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sourceMap"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                     // 生成相应的 '.map' 文件\n    "),a("span",{attrs:{class:"token property"}},[t._v('"outFile"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"./"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       // 将输出文件合并为一个文件\n    "),a("span",{attrs:{class:"token property"}},[t._v('"outDir"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"./"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                        // 指定输出目录\n    "),a("span",{attrs:{class:"token property"}},[t._v('"rootDir"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"./"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       // 用来控制输出目录结构 --outDir.\n    "),a("span",{attrs:{class:"token property"}},[t._v('"removeComments"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                // 删除编译后的所有的注释\n    "),a("span",{attrs:{class:"token property"}},[t._v('"noEmit"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                        // 不生成输出文件\n    "),a("span",{attrs:{class:"token property"}},[t._v('"importHelpers"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                 // 从 tslib 导入辅助工具函数\n    "),a("span",{attrs:{class:"token property"}},[t._v('"isolatedModules"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("               // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.\n\n    /* 严格的类型检查选项 */\n    "),a("span",{attrs:{class:"token property"}},[t._v('"strict"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                        // 启用所有严格类型检查选项\n    "),a("span",{attrs:{class:"token property"}},[t._v('"noImplicitAny"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                 // 在表达式和声明上有隐含的 any类型时报错\n    "),a("span",{attrs:{class:"token property"}},[t._v('"strictNullChecks"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("              // 启用严格的 "),a("span",{attrs:{class:"token null"}},[t._v("null")]),t._v(" 检查\n    "),a("span",{attrs:{class:"token property"}},[t._v('"noImplicitThis"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                // 当 this 表达式值为 any 类型的时候，生成一个错误\n    "),a("span",{attrs:{class:"token property"}},[t._v('"alwaysStrict"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'\n\n    /* 额外的检查 */\n    "),a("span",{attrs:{class:"token property"}},[t._v('"noUnusedLocals"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                // 有未使用的变量时，抛出错误\n    "),a("span",{attrs:{class:"token property"}},[t._v('"noUnusedParameters"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("            // 有未使用的参数时，抛出错误\n    "),a("span",{attrs:{class:"token property"}},[t._v('"noImplicitReturns"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("             // 并不是所有函数里的代码都有返回值时，抛出错误\n    "),a("span",{attrs:{class:"token property"}},[t._v('"noFallthroughCasesInSwitch"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）\n\n    /* 模块解析选项 */\n    "),a("span",{attrs:{class:"token property"}},[t._v('"moduleResolution"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"node"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("            // 选择模块解析策略： 'node' (Node.js"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" or 'classic' (TypeScript pre-"),a("span",{attrs:{class:"token number"}},[t._v("1.6")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("。默认是classic\n    "),a("span",{attrs:{class:"token property"}},[t._v('"baseUrl"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"./"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       // 用于解析非相对模块名称的基目录\n    "),a("span",{attrs:{class:"token property"}},[t._v('"paths"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                           // 模块名到基于 baseUrl 的路径映射的列表\n    "),a("span",{attrs:{class:"token property"}},[t._v('"rootDirs"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                        // 根文件夹列表，其组合内容表示项目运行时的结构内容\n    "),a("span",{attrs:{class:"token property"}},[t._v('"typeRoots"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       // 包含类型声明的文件列表\n    "),a("span",{attrs:{class:"token property"}},[t._v('"types"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                           // 需要包含的类型声明文件名列表\n    "),a("span",{attrs:{class:"token property"}},[t._v('"allowSyntheticDefaultImports"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  // 允许从没有设置默认导出的模块中默认导入。\n\n    /* Source Map Options */\n    "),a("span",{attrs:{class:"token property"}},[t._v('"sourceRoot"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"./"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置\n    "),a("span",{attrs:{class:"token property"}},[t._v('"mapRoot"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"./"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       // 指定调试器应该找到映射文件而不是生成文件的位置\n    "),a("span",{attrs:{class:"token property"}},[t._v('"inlineSourceMap"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件\n    "),a("span",{attrs:{class:"token property"}},[t._v('"inlineSources"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性\n\n    /* 其他选项 */\n    "),a("span",{attrs:{class:"token property"}},[t._v('"experimentalDecorators"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        // 启用装饰器\n    "),a("span",{attrs:{class:"token property"}},[t._v('"emitDecoratorMetadata"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("          // 为装饰器提供元数据的支持\n    "),a("span",{attrs:{class:"token property"}},[t._v('"strictFunctionTypes"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v(" // 禁用函数参数双向协变检查。\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  /* 指定编译文件或排除指定编译文件 */\n  "),a("span",{attrs:{class:"token property"}},[t._v('"include"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"src/**/*"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"exclude"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"node_modules"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"**/*.spec.ts"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"files"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"core.ts"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"sys.ts"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  // 从另一个配置文件里继承配置\n  "),a("span",{attrs:{class:"token property"}},[t._v('"extends"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" './config/base'"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  // 让IDE在保存文件的时候根据tsconfig.json重新生成文件\n  "),a("span",{attrs:{class:"token property"}},[t._v('"compileOnSave"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" // 支持这个特性需要Visual Studio "),a("span",{attrs:{class:"token number"}},[t._v("2015")]),t._v("， TypeScript1."),a("span",{attrs:{class:"token number"}},[t._v("8.4")]),t._v("以上并且安装atom-typescript插件\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v('"allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。\n如果定义了 .d.ts 文件，请重新启动服务让你的服务能够识别你定义的模块，并重启 vscode 让编辑器也能够识别（真的恶心）\n设置好你的 tsconfig ，比如记得把 strictPropertyInitialization 设为 false，不然你定义一个变量就必须给它一个初始值。')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考文章")])}],!1,null,null,null);o.options.__file="tsconfig.md";s.default=o.exports}}]);