System.register(["./vendor-legacy.91884753.js"],(function(s){"use strict";var a,n,t;return{setters:[function(s){a=s.e,n=s.o,t=s.G}],execute:function(){const p={class:"markdown-body"},l=[t('<h1>快速上手</h1><h2>预览</h2><blockquote><p>扫描下方二维码体验，体验 Vue3 组件库示例</p></blockquote><img src="https://img12.360buyimg.com/imagetools/jfs/t1/162421/39/13392/9425/6052ea60E592310a9/264bdff23ef5fe95.png" width="200" alt="NutUI"><h4>NPM 安装</h4><pre><code class="language-bash"><span class="hljs-comment"># Vue2 项目</span>\nnpm i @nutui/nutui\n\n<span class="hljs-comment"># Vue3 项目</span>\nnpm i @nutui/nutui@next\n\n<span class="hljs-comment"># taro 小程序项目</span>\nnpm i @nutui/nutui-taro\n</code></pre><h4>CDN 安装使用示例</h4><blockquote><p>可以通过 CDN 的方式引入， 可以在 <strong>jsdelivr</strong> 和 <strong>unpkg</strong> 等公共 CDN 上获取到 NutUI。</p></blockquote><pre><code class="language-html"><span class="hljs-meta">&lt;!DOCTYPE <span class="hljs-meta-keyword">html</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">&quot;UTF-8&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;viewport&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;width=device-width, initial-scale=1.0&quot;</span> /&gt;</span>\n    <span class="hljs-comment">&lt;!-- 引入样式 --&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;stylesheet&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/npm/@nutui/nutui@next/dist/style.css&quot;</span> /&gt;</span>\n    <span class="hljs-comment">&lt;!-- 引入Vue --&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/npm/vue@next&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n    <span class="hljs-comment">&lt;!-- 引入NutUI组件库 --&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/npm/@nutui/nutui@next/dist/nutui.umd.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;app&quot;</span>&gt;</span>\n        \n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="handlebars"><span class="xml">\n      // 在 #app 标签下渲染一个按钮组件\n      const app = Vue.createApp({\n        template: `\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;default&quot;</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n        `,\n      });\n      app.use(nutui);\n      app.mount(&quot;#app&quot;);\n    </span></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>\n</code></pre><blockquote><p>在页面中直接引入，将无法使用 <strong>主题定制</strong> 等功能。我们推荐使用 <em>NPM</em> 或 <em>YARN</em> 方式安装，不推荐在页面中直接引入的用法</p></blockquote><h4>NPM 使用示例</h4><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;\n<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./App.vue&quot;</span>;\n<span class="hljs-keyword">import</span> NutUI <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@nutui/nutui&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@nutui/nutui/dist/style.css&quot;</span>;\ncreateApp(App).use(NutUI).mount(<span class="hljs-string">&quot;#app&quot;</span>);\n</code></pre><blockquote><p>注意：这种方式将会导入所有组件</p></blockquote><h2>推荐使用按需加载</h2><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;\n<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./App.vue&quot;</span>;\n<span class="hljs-keyword">import</span> { Button, Cell, Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@nutui/nutui&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@nutui/nutui/dist/style.css&quot;</span>;\ncreateApp(App).use(Button).use(Cell).use(Icon).mount(<span class="hljs-string">&quot;#app&quot;</span>);\n</code></pre><h2>注意事项</h2><ul><li>使用:prop传递数据格式为 数字、布尔值或函数时，必须带:(兼容字符串类型除外)，比如：</li></ul><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-switch</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;base&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-switch</span>&gt;</span>\n</code></pre><ul><li>组件 css 单位使用的是 <strong>px</strong>，如果你的项目中需要 <strong>rem</strong> 单位，可借助一些工具进行转换，比如 <a href="https://www.webpackjs.com/">webpack</a> 的 <a href="https://www.npmjs.com/package/px2rem-loader">px2rem-loader</a>、<a href="https://github.com/postcss/postcss">postcss</a> 的 <a href="https://www.npmjs.com/package/postcss-plugin-px2rem">postcss-plugin-px2rem</a> 插件等</li></ul>',19)];s("default",{setup:(s,{expose:t})=>(t({frontmatter:{}}),(s,t)=>(n(),a("div",p,l)))})}}}));