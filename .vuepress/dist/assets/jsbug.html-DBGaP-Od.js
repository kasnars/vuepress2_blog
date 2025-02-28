import{_ as n,c as a,a as t,o as e}from"./app-ChX8Cwnj.js";const p={};function l(c,s){return e(),a("div",null,s[0]||(s[0]=[t(`<h3 id="控制台打开的情况下卡死" tabindex="-1"><a class="header-anchor" href="#控制台打开的情况下卡死"><span>控制台打开的情况下卡死</span></a></h3><ul><li>安卓12以下以及ios需要用&#39;/staic/xxx/xxx.png&#39;的方式寻找</li><li>而安卓12需要通过&#39;../../xxxx.png&#39;相对路径的方式寻找</li></ul><h4 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> res <span class="token operator">=</span> uni<span class="token punctuation">.</span><span class="token function">getSystemInfoSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>systemVer <span class="token operator">=</span> res<span class="token punctuation">.</span>system</span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>systemPlat <span class="token operator">=</span> res<span class="token punctuation">.</span>platform</span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// error</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// methods</span></span>
<span class="line"><span class="token function">iconPathCompatible</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>systemVer <span class="token operator">&gt;=</span> <span class="token number">12</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>systemPlat <span class="token operator">===</span> <span class="token string">&#39;android&#39;</span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">../..</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token operator">:</span>path</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 在设置path的时候把&#39;/staic/xxxxxx&#39;用这个函数包裹返回</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const o=n(p,[["render",l],["__file","jsbug.html.vue"]]),r=JSON.parse('{"path":"/blogs/bugs/jsbug.html","title":"JavaScript常见bug处理","lang":"en-US","frontmatter":{"title":"JavaScript常见bug处理","date":"2023-09-04T00:00:00.000Z","tags":["JavaScript"],"categories":["BUG记录"]},"headers":[{"level":3,"title":"控制台打开的情况下卡死","slug":"控制台打开的情况下卡死","link":"#控制台打开的情况下卡死","children":[]}],"git":{"createdTime":1740710037000,"updatedTime":1740710037000,"contributors":[{"name":"Kasnars","email":"kasnars@163.com","commits":1}]},"filePathRelative":"blogs/bugs/jsbug.md"}');export{o as comp,r as data};
