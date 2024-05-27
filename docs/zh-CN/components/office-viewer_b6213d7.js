amis.define('docs/zh-CN/components/office-viewer.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Office Viewer",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "OfficeViewer 文档渲染",
    "icon": null,
    "order": 23,
    "html": "<div class=\"markdown-body\"><blockquote>\n<p>2.9.0 及以上版本</p>\n</blockquote>\n<p>用于渲染 office 文档，目前只支持 docx 和 xlsx 格式，本文档只介绍 docx 的配置，xlsx 的配置请参考 <a href=\"office-viewer-excel\">office-viewer-excel</a></p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"office-viewer\",\n  \"src\": \"/examples/static/simple.docx\",\n  \"wordOptions\": {\n    \"padding\": \"8px\",\n    \"ignoreWidth\": false\n  }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%B8%B2%E6%9F%93%E9%85%8D%E7%BD%AE%E9%A1%B9\" href=\"#%E6%B8%B2%E6%9F%93%E9%85%8D%E7%BD%AE%E9%A1%B9\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>渲染配置项</h2><p>目前只支持 Word 文档，所以只有 word 的配置项，放在 <code>wordOptions</code> 下</p>\n<p>Word 渲染支持以下功能：</p>\n<ul>\n<li>基础文本样式</li>\n<li>表格及表格样式</li>\n<li>内嵌图片</li>\n<li>列表</li>\n<li>注音</li>\n<li>链接</li>\n<li>文本框</li>\n<li>形状</li>\n<li>数学公式（依赖 MathML，需要比较新的浏览器，或者试试 <a href=\"https://github.com/w3c/mathml-polyfills\">polyfill</a>）</li>\n<li>分页渲染</li>\n</ul>\n<p>不支持的功能：艺术字、域、对象、目录</p>\n<h3><a class=\"anchor\" name=\"word-%E6%B8%B2%E6%9F%93%E9%85%8D%E7%BD%AE%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#word-%E6%B8%B2%E6%9F%93%E9%85%8D%E7%BD%AE%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>word 渲染配置属性表</h3><pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"office-viewer\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"wordOptions\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"padding\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"8px\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"ignoreWidth\"</span><span class=\"token operator\">:</span> <span class=\"token boolean\">false</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>classPrefix</td>\n<td><code>string</code></td>\n<td>&#39;docx-viewer&#39;</td>\n<td>渲染的 class 类前缀</td>\n</tr>\n<tr>\n<td>ignoreWidth</td>\n<td><code>boolean</code></td>\n<td>false</td>\n<td>忽略文档里的宽度设置，用于更好嵌入到页面里，但会减低还原度</td>\n</tr>\n<tr>\n<td>padding</td>\n<td><code>string</code></td>\n<td></td>\n<td>设置页面间距，忽略文档中的设置</td>\n</tr>\n<tr>\n<td>bulletUseFont</td>\n<td><code>boolean</code></td>\n<td>true</td>\n<td>列表使用字体渲染，请参考下面的乱码说明</td>\n</tr>\n<tr>\n<td>fontMapping</td>\n<td><code>object</code></td>\n<td></td>\n<td>字体映射，是个键值对，用于替换文档中的字体</td>\n</tr>\n<tr>\n<td>forceLineHeight</td>\n<td><code>string</code></td>\n<td></td>\n<td>设置段落行高，忽略文档中的设置</td>\n</tr>\n<tr>\n<td>enableVar</td>\n<td><code>boolean</code></td>\n<td>true</td>\n<td>是否开启变量替换功能</td>\n</tr>\n<tr>\n<td>printOptions</td>\n<td><code>object</code></td>\n<td></td>\n<td>针对打印的特殊设置，可以覆盖其它所有设置项</td>\n</tr>\n</tbody></table>\n<h4><a class=\"anchor\" name=\"%E5%88%86%E9%A1%B5%E6%B8%B2%E6%9F%93\" href=\"#%E5%88%86%E9%A1%B5%E6%B8%B2%E6%9F%93\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>分页渲染</h4><blockquote>\n<p>2.10.0 及以上版本</p>\n</blockquote>\n<p>默认情况下 word 文档渲染使用流式布局，这样能更好融入到已有页面中，但展现上会和原先的文档有较大差异，且不支持页眉页脚，如果希望能看起来更像桌面端的效果，可以通过 <code>page</code> 配置开启分页渲染</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"office-viewer\",\n  \"id\": \"office-viewer-page\",\n  \"wordOptions\": {\n    \"page\": true\n  },\n  \"src\": \"/examples/static/page.docx\",\n}\n</script></div><div class=\"markdown-body\">\n<p>分页渲染的其它设置项</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>page</td>\n<td><code>boolean</code></td>\n<td>false</td>\n<td>是否开启分页渲染</td>\n</tr>\n<tr>\n<td>pageMarginBottom</td>\n<td><code>number</code></td>\n<td>20</td>\n<td>页面上下间距</td>\n</tr>\n<tr>\n<td>pageBackground</td>\n<td><code>string</code></td>\n<td>&#39;#FFF&#39;</td>\n<td>页面内背景色</td>\n</tr>\n<tr>\n<td>pageShadow</td>\n<td><code>boolean</code></td>\n<td>true</td>\n<td>是否显示阴影</td>\n</tr>\n<tr>\n<td>pageWrap</td>\n<td><code>boolean</code></td>\n<td>true</td>\n<td>是否显示页面包裹</td>\n</tr>\n<tr>\n<td>pageWrapBackground</td>\n<td><code>string</code></td>\n<td>&#39;#ECECEC&#39;</td>\n<td>页面包裹的背景色</td>\n</tr>\n<tr>\n<td>zoom</td>\n<td><code>number</code></td>\n<td></td>\n<td>缩放比例，取值 0-1 之间</td>\n</tr>\n<tr>\n<td>zoomFitWidth</td>\n<td><code>boolean</code></td>\n<td>false</td>\n<td>自适应宽度缩放，如果设置了 zoom 将不会生效</td>\n</tr>\n</tbody></table>\n<h3><a class=\"anchor\" name=\"%E5%85%B3%E4%BA%8E%E6%B8%B2%E6%9F%93%E6%95%88%E6%9E%9C%E5%B7%AE%E5%BC%82\" href=\"#%E5%85%B3%E4%BA%8E%E6%B8%B2%E6%9F%93%E6%95%88%E6%9E%9C%E5%B7%AE%E5%BC%82\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>关于渲染效果差异</h3><p>目前的实现难以保证和本地 Word 渲染完全一致，会遇到以下问题：</p>\n<ol>\n<li>字体大小不一致</li>\n<li>单元格宽度不一致，表格完全依赖浏览器渲染</li>\n</ol>\n<p>如果追求完整效果打印，目前只能使用下载文件的方式用本地 Word 进行打印。</p>\n<h2><a class=\"anchor\" name=\"%E5%88%97%E8%A1%A8%E7%AC%A6%E5%8F%B7%E5%87%BA%E7%8E%B0%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98\" href=\"#%E5%88%97%E8%A1%A8%E7%AC%A6%E5%8F%B7%E5%87%BA%E7%8E%B0%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>列表符号出现乱码问题</h2><p>默认情况下列表左侧的符号使用字体渲染，这样能做到最接近 Word 渲染效果，但如果用户的系统中没有这些字体就会显示乱码，为了解决这个问题需要手动在 amis 渲染的页面里导入对应的字体，比如</p>\n<pre><code class=\"language-css\">&lt;style>\n  <span class=\"token atrule\"><span class=\"token rule\">@font-face</span></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">font-family</span><span class=\"token punctuation\">:</span> Wingdings<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">src</span><span class=\"token punctuation\">:</span> <span class=\"token url\"><span class=\"token function\">url</span><span class=\"token punctuation\">(</span>./static/font/wingding.ttf<span class=\"token punctuation\">)</span></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token atrule\"><span class=\"token rule\">@font-face</span></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">font-family</span><span class=\"token punctuation\">:</span> Symbol<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">src</span><span class=\"token punctuation\">:</span> <span class=\"token url\"><span class=\"token function\">url</span><span class=\"token punctuation\">(</span>./static/font/symbol.ttf<span class=\"token punctuation\">)</span></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n&lt;/style>\n</code></pre>\n<p>目前已知会有 <code>Wingdings</code> 和 <code>Symbol</code> 两个字体，可能还有别的</p>\n<p>如果不想嵌入这两个字体，就只能在前面的 <code>wordOptions</code> 里设置 <code>bulletUseFont: false</code>。</p>\n<h2><a class=\"anchor\" name=\"%E5%8F%98%E9%87%8F%E6%9B%BF%E6%8D%A2\" href=\"#%E5%8F%98%E9%87%8F%E6%9B%BF%E6%8D%A2\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>变量替换</h2><p>文档可以预先定义变量，通过配置 <code>enableVar</code> 来开启这个功能，在实际渲染时根据上下文数据来渲染变量，比如</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"title\": \"\",\n  \"mode\": \"inline\",\n  \"wrapWithPanel\": false,\n  \"body\": [\n    {\n      \"type\": \"input-text\",\n      \"name\": \"name\",\n      \"value\": \"amis\",\n      \"label\": \"姓名\"\n    },\n    {\n      \"type\": \"input-email\",\n      \"name\": \"email\",\n      \"label\": \"邮箱\"\n    },\n    {\n      \"type\": \"input-text\",\n      \"name\": \"phone\",\n      \"label\": \"手机号\"\n    },\n    {\n      \"type\": \"office-viewer\",\n      \"id\": \"office-viewer\",\n      \"src\": \"/examples/static/info.docx\",\n      \"wordOptions\": {\n        \"enableVar\": true,\n        \"padding\": \"8px\"\n      }\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>如果关闭将显示原始文档</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"office-viewer\",\n  \"id\": \"office-viewer\",\n  \"src\": \"/examples/static/info.docx\",\n  \"wordOptions\": {\n    \"padding\": \"8px\"\n  }\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E5%8F%98%E9%87%8F%E8%AF%B4%E6%98%8E\" href=\"#%E5%8F%98%E9%87%8F%E8%AF%B4%E6%98%8E\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>变量说明</h3><p>目前变量使用的写法是 <code>{{name}}</code>，其中 <code>name</code> 代表变量名，另外这里可以是 amis 表达式，比如前面示例的 <code>{{DATETOSTR(TODAY(), &#39;YYYY-MM-DD&#39;)}}</code></p>\n<p><strong>Word 经常会自作主张进行语法检查，生成无关的标签导致变量替换出错，解决办法是参考这个<a href=\"https://support.microsoft.com/zh-cn/office/%E5%9C%A8-word-%E4%B8%AD%E6%A3%80%E6%9F%A5%E8%AF%AD%E6%B3%95-%E6%8B%BC%E5%86%99%E7%AD%89-0f43bf32-ccde-40c5-b16a-c6a282c0d251?ui=zh-cn&rs=zh-cn&ad=cn\">文档</a>，将所有语法检查都忽略掉，也就是文档里不再有飘红的文字</strong></p>\n<h3><a class=\"anchor\" name=\"%E8%A1%A8%E6%A0%BC%E8%A1%8C%E5%BE%AA%E7%8E%AF\" href=\"#%E8%A1%A8%E6%A0%BC%E8%A1%8C%E5%BE%AA%E7%8E%AF\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>表格行循环</h3><p>目前针对表格支持循环语法，下面例子中第一个是模板里的变量写法，循环以 <code>{{#xxx}}</code> 开头，<code>{{/}}</code> 结束（不过目前还不支持嵌套语法，所以这个结束符合可以省略）</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"body\": [\n    {\n      \"type\": \"office-viewer\",\n      \"id\": \"office-viewer-table-list\",\n      \"src\": \"/examples/static/table-list.docx\",\n      \"wordOptions\": {\n        \"padding\": \"8px\"\n      }\n    },\n    {\n      \"type\": \"service\",\n      \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/sample/mirror?json=%7B%22users%22%3A%5B%7B%22name%22%3A%22u1%22%2C%22age%22%3A10%2C%22img%22%3A%22https%3A%2F%2Fsuda.cdn.bcebos.com%2Fimages%2Famis%2Fai-fake-face.jpg%22%7D%2C%7B%22name%22%3A%22u2%22%2C%22age%22%3A11%7D%5D%7D\",\n      \"body\": [{\n        \"type\": \"office-viewer\",\n        \"src\": \"/examples/static/table-list.docx\",\n        \"wordOptions\": {\n          \"padding\": \"8px\",\n          \"enableVar\": true,\n          \"ignoreWidth\": true\n        },\n        \"trackExpression\": \"${users}\"\n      }]\n    },\n    {\n      \"type\": \"action\",\n      \"label\": \"下载文档\",\n      \"onEvent\": {\n          \"click\": {\n            \"actions\": [\n              {\n                \"actionType\": \"saveAs\",\n                \"componentId\": \"office-viewer-table-list\"\n              }\n            ]\n          }\n        }\n    },\n\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>循环的语法是以 <code>{{#name}}</code> 开始，<code>{{/}}</code> 结束，在这期间的变量会取循环内的值。</p>\n<p>注意上面的例子用到了 <code>trackExpression</code>，默认情况下如果设置了 <code>enableVar</code>，每次上层数据变化都会重新渲染文档，如果文档较大可能会有性能问题，这时可以通过配置 <code>trackExpression</code> 来限制只有某个数据变化时才重新渲染。</p>\n<h3><a class=\"anchor\" name=\"%E5%9B%BE%E7%89%87%E4%B8%AD%E7%9A%84%E5%8F%98%E9%87%8F\" href=\"#%E5%9B%BE%E7%89%87%E4%B8%AD%E7%9A%84%E5%8F%98%E9%87%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>图片中的变量</h3><blockquote>\n<p>2.10 及以上版本</p>\n</blockquote>\n<p>如果要将文档中的图片设置为变量，需要右键对应的图片，选择「查看可选文字」，然后填入类似 <code>{{img}}</code> 变量标识，在渲染时图片将替换为这个 <code>img</code> 变量的 url 地址</p>\n<p><img src=\"/mirror/amis/static/word-alt_ad5cbef.png\" alt=\"word\"></p>\n<p>下面是示例</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"title\": \"\",\n  \"wrapWithPanel\": false,\n  \"body\": [\n    {\n      \"type\": \"input-text\",\n      \"name\": \"img\",\n      \"value\": \"https://suda.cdn.bcebos.com/amis/images/alice-macaw.jpg\",\n      \"label\": \"图片地址\"\n    },\n    {\n      \"type\": \"office-viewer\",\n      \"id\": \"office-viewer\",\n      \"src\": \"/examples/static/image-alt-var.docx\",\n      \"wordOptions\": {\n        \"enableVar\": true,\n        \"padding\": \"8px\"\n      }\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E4%B8%8D%E6%B8%B2%E6%9F%93%E6%A8%A1%E5%BC%8F\" href=\"#%E4%B8%8D%E6%B8%B2%E6%9F%93%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>不渲染模式</h2><p>通过配置 <code>display: false</code> 可以让文档不渲染，虽然不渲染，但还是可以使用后面的下载及打印功能</p>\n<h2><a class=\"anchor\" name=\"%E4%B8%8B%E8%BD%BD%E6%96%87%E6%A1%A3\" href=\"#%E4%B8%8B%E8%BD%BD%E6%96%87%E6%A1%A3\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>下载文档</h2><p>基于事件动作实现</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n  {\n    \"type\": \"action\",\n    \"label\": \"下载文档\",\n    \"onEvent\": {\n        \"click\": {\n          \"actions\": [\n            {\n              \"actionType\": \"saveAs\",\n              \"componentId\": \"office-viewer-download\"\n            }\n          ]\n        }\n      }\n  },\n  {\n    \"type\": \"office-viewer\",\n    \"id\": \"office-viewer-download\",\n    \"display\": false,\n    \"src\": \"/examples/static/simple.docx\"\n  }\n]\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%89%93%E5%8D%B0%E6%96%87%E6%A1%A3\" href=\"#%E6%89%93%E5%8D%B0%E6%96%87%E6%A1%A3\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>打印文档</h2><p>基于事件动作实现</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n  {\n    \"type\": \"action\",\n    \"label\": \"打印\",\n    \"onEvent\": {\n        \"click\": {\n          \"actions\": [\n            {\n              \"actionType\": \"print\",\n              \"componentId\": \"office-viewer-print\"\n            }\n          ]\n        }\n      }\n  },\n  {\n    \"type\": \"office-viewer\",\n    \"id\": \"office-viewer-print\",\n    \"display\": false,\n    \"src\": \"/examples/static/simple.docx\"\n  }\n]\n</script></div><div class=\"markdown-body\">\n<p>有个 <code>printOptions</code> 配置项可以用来自定义在打印时的配置，默认设置是：</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"page\"</span><span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"pageWrap\"</span><span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"pageShadow\"</span><span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"pageMarginBottom\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"pageWrapPadding\"</span><span class=\"token operator\">:</span> undefined\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<h2><a class=\"anchor\" name=\"%E9%85%8D%E5%90%88%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E5%AE%9E%E7%8E%B0%E9%A2%84%E8%A7%88%E5%8A%9F%E8%83%BD\" href=\"#%E9%85%8D%E5%90%88%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E5%AE%9E%E7%8E%B0%E9%A2%84%E8%A7%88%E5%8A%9F%E8%83%BD\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>配合文件上传实现预览功能</h2><p>配置和 <code>input-file</code> 相同的 <code>name</code> 即可</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"title\": \"\",\n  \"wrapWithPanel\": false,\n  \"body\": [\n    {\n      \"type\": \"input-file\",\n      \"name\": \"file\",\n      \"label\": \"File\",\n      \"asBlob\": true,\n      \"accept\": \".docx\"\n    },\n    {\n      \"type\": \"office-viewer\",\n      \"id\": \"office-viewer\",\n      \"name\": \"file\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%98%AF%E5%90%A6%E6%98%BE%E7%A4%BA-loading\" href=\"#%E6%98%AF%E5%90%A6%E6%98%BE%E7%A4%BA-loading\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>是否显示 loading</h2><p>通过 <code>&quot;loading&quot;: true</code> 配置显示 loading，主要用于网络较慢的场景。</p>\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>src</td>\n<td>Api</td>\n<td></td>\n<td>文档地址</td>\n</tr>\n<tr>\n<td>loading</td>\n<td><code>boolean</code></td>\n<td>false</td>\n<td>是否显示 loading 图标</td>\n</tr>\n<tr>\n<td>enableVar</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>是否开启变量替换功能</td>\n</tr>\n<tr>\n<td>wordOptions</td>\n<td><code>object</code></td>\n<td></td>\n<td>Word 渲染配置</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E4%BD%9C%E8%A1%A8\" href=\"#%E5%8A%A8%E4%BD%9C%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动作表</h2><p>当前组件对外暴露以下特性动作，其他组件可以通过指定<code>actionType: 动作名称</code>、<code>componentId: 该组件id</code>来触发这些动作，动作配置可以通过<code>args: {动作配置项名称: xxx}</code>来配置具体的参数，详细请查看<a href=\"../../docs/concepts/event-action#触发其他组件的动作\">事件动作</a>。</p>\n<table>\n<thead>\n<tr>\n<th>动作名称</th>\n<th>动作配置</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>saveAs</td>\n<td><code>name?: string</code> 文件名</td>\n<td>下载文档</td>\n</tr>\n<tr>\n<td>print</td>\n<td>-</td>\n<td>打印文档</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "渲染配置项",
          "fragment": "%E6%B8%B2%E6%9F%93%E9%85%8D%E7%BD%AE%E9%A1%B9",
          "fullPath": "#%E6%B8%B2%E6%9F%93%E9%85%8D%E7%BD%AE%E9%A1%B9",
          "level": 2,
          "children": [
            {
              "label": "word 渲染配置属性表",
              "fragment": "word-%E6%B8%B2%E6%9F%93%E9%85%8D%E7%BD%AE%E5%B1%9E%E6%80%A7%E8%A1%A8",
              "fullPath": "#word-%E6%B8%B2%E6%9F%93%E9%85%8D%E7%BD%AE%E5%B1%9E%E6%80%A7%E8%A1%A8",
              "level": 3,
              "children": [
                {
                  "label": "分页渲染",
                  "fragment": "%E5%88%86%E9%A1%B5%E6%B8%B2%E6%9F%93",
                  "fullPath": "#%E5%88%86%E9%A1%B5%E6%B8%B2%E6%9F%93",
                  "level": 4
                }
              ]
            },
            {
              "label": "关于渲染效果差异",
              "fragment": "%E5%85%B3%E4%BA%8E%E6%B8%B2%E6%9F%93%E6%95%88%E6%9E%9C%E5%B7%AE%E5%BC%82",
              "fullPath": "#%E5%85%B3%E4%BA%8E%E6%B8%B2%E6%9F%93%E6%95%88%E6%9E%9C%E5%B7%AE%E5%BC%82",
              "level": 3
            }
          ]
        },
        {
          "label": "列表符号出现乱码问题",
          "fragment": "%E5%88%97%E8%A1%A8%E7%AC%A6%E5%8F%B7%E5%87%BA%E7%8E%B0%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98",
          "fullPath": "#%E5%88%97%E8%A1%A8%E7%AC%A6%E5%8F%B7%E5%87%BA%E7%8E%B0%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98",
          "level": 2
        },
        {
          "label": "变量替换",
          "fragment": "%E5%8F%98%E9%87%8F%E6%9B%BF%E6%8D%A2",
          "fullPath": "#%E5%8F%98%E9%87%8F%E6%9B%BF%E6%8D%A2",
          "level": 2,
          "children": [
            {
              "label": "变量说明",
              "fragment": "%E5%8F%98%E9%87%8F%E8%AF%B4%E6%98%8E",
              "fullPath": "#%E5%8F%98%E9%87%8F%E8%AF%B4%E6%98%8E",
              "level": 3
            },
            {
              "label": "表格行循环",
              "fragment": "%E8%A1%A8%E6%A0%BC%E8%A1%8C%E5%BE%AA%E7%8E%AF",
              "fullPath": "#%E8%A1%A8%E6%A0%BC%E8%A1%8C%E5%BE%AA%E7%8E%AF",
              "level": 3
            },
            {
              "label": "图片中的变量",
              "fragment": "%E5%9B%BE%E7%89%87%E4%B8%AD%E7%9A%84%E5%8F%98%E9%87%8F",
              "fullPath": "#%E5%9B%BE%E7%89%87%E4%B8%AD%E7%9A%84%E5%8F%98%E9%87%8F",
              "level": 3
            }
          ]
        },
        {
          "label": "不渲染模式",
          "fragment": "%E4%B8%8D%E6%B8%B2%E6%9F%93%E6%A8%A1%E5%BC%8F",
          "fullPath": "#%E4%B8%8D%E6%B8%B2%E6%9F%93%E6%A8%A1%E5%BC%8F",
          "level": 2
        },
        {
          "label": "下载文档",
          "fragment": "%E4%B8%8B%E8%BD%BD%E6%96%87%E6%A1%A3",
          "fullPath": "#%E4%B8%8B%E8%BD%BD%E6%96%87%E6%A1%A3",
          "level": 2
        },
        {
          "label": "打印文档",
          "fragment": "%E6%89%93%E5%8D%B0%E6%96%87%E6%A1%A3",
          "fullPath": "#%E6%89%93%E5%8D%B0%E6%96%87%E6%A1%A3",
          "level": 2
        },
        {
          "label": "配合文件上传实现预览功能",
          "fragment": "%E9%85%8D%E5%90%88%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E5%AE%9E%E7%8E%B0%E9%A2%84%E8%A7%88%E5%8A%9F%E8%83%BD",
          "fullPath": "#%E9%85%8D%E5%90%88%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E5%AE%9E%E7%8E%B0%E9%A2%84%E8%A7%88%E5%8A%9F%E8%83%BD",
          "level": 2
        },
        {
          "label": "是否显示 loading",
          "fragment": "%E6%98%AF%E5%90%A6%E6%98%BE%E7%A4%BA-loading",
          "fullPath": "#%E6%98%AF%E5%90%A6%E6%98%BE%E7%A4%BA-loading",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        },
        {
          "label": "动作表",
          "fragment": "%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "fullPath": "#%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
