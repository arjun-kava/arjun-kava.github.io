webpackJsonp([30160884404932],{391:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Blog by Arjun Kava",subtitle:"I am a tireless seeker of knowledge, occassional purveyor of wisdom and also, coincidentally, a deep learning engineer.",copyright:"© All rights reserved.",author:{name:"Arjun Kava",twitter:"arjun_kava"},disqusShortname:"arjun-kava",url:"https://arjun-kava.github.io/"}},markdownRemark:{id:"/Volumes/multimedia/Personal-Repositories/arjunkava-blog/src/pages/articles/2018-06-28---How-To-Create-Successfull-Blog-In-Hour/index.md absPath of file >>> MarkdownRemark",html:'<p>Want to start blog?\nNeed simple process that can be completed in 60 minutes?</p>\n<p>Starting a blog seems to hard but not really much harder, if you have right choice on tools. Today we are going to create a starter blog with comments and subscription, isn’t it amazing? yeah, let’s get start it.</p>\n<h3>Assumptions</h3>\n<p>I assume, You knew some basics about How <code class="language-text">reactjs</code> works but if you don’t knew the basics start from <a href="https://reactjs.org/tutorial/tutorial.html">here</a>. Please dont’t get too hard on it, just need to know basics of reactjs and structure of the app.</p>\n<h3>Getting Started with Gatsby.js</h3>\n<p>Install <code class="language-text">gatsby-cli</code> by executing following command</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code class="language-sh">npm install --global gatsby-cli</code></pre>\n      </div>\n<p>above command will install <code class="language-text">gatsby-cli</code> globally which is going to helpul for createing our first blog. (Note: Node.js is required to install <code class="language-text">gatsby-cli</code>)</p>\n<h3>Select Starter</h3>\n<p>Gatsby Community provides multiple starters for creating new blog, find out from <a href="https://www.gatsbyjs.org/docs/gatsby-starters/">here</a>. I prefer to use <a href="https://lumen.netlify.com/">lumen starter</a> by <a href="https://github.com/alxshelepenok">@Alexander Shelepenok</a>. ❤️ Thank you man!</p>\n<h3>install Starter</h3>\n<p>Install lumen starter into your personal computer by executing following command from Command Prompt / Terminal whatever you prefer.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code class="language-sh">gatsby new lumen https://github.com/alxshelepenok/gatsby-starter-lumen</code></pre>\n      </div>\n<p>It will create directory named <code class="language-text">lumen</code> and installs all dependencies in a single shot (impressed!). The project will have following directory structure</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">└── src\n    ├── assets\n    │   ├── fonts\n    │   │   └── fontello-771c82e0\n    │   │       ├── css\n    │   │       └── font\n    │   └── scss\n    │       ├── base\n    │       ├── mixins\n    │       └── pages\n    ├── components\n    │   ├── CategoryTemplateDetails\n    │   ├── Disqus\n    │   ├── Links\n    │   ├── Menu\n    │   ├── PageTemplateDetails\n    │   ├── Post\n    │   ├── PostTemplateDetails\n    │   ├── Sidebar\n    │   └── TagTemplateDetails\n    ├── layouts\n    ├── pages\n    │   ├── articles\n    │   │   ├── 2016-01-09---Perfecting-the-Art-of-Perfection\n    │   │   ├── 2016-01-12---The-Origins-of-Social-Stationery-Lettering\n    │   │   ├── 2016-02-02---A-Brief-History-of-Typography\n    │   │   ├── 2017-18-08---The-Birth-of-Movable-Type\n    │   │   └── 2017-19-08---Humane-Typography-in-the-Digital-Age\n    │   └── pages\n    │       ├── 2015-05-01---about\n    │       └── 2015-05-01---contact\n    └── templates\n└── gatsby-config.js</code></pre>\n      </div>\n<h4>Run Project</h4>\n<p>Open command prompt / Terminal and hit <code class="language-text">gatsby develop</code> from <code class="language-text">lumen</code> directory. It will run our first blog via local server on <a href="http://localhost:8000/">localhost:8000</a> url. 🎉 🎉 🎉\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/blog_layout-8d5fe41a41f804c10767357ba3cf5c75-3444d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 678px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 70.79646017699115%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsSAAALEgHS3X78AAABt0lEQVQoz2VSi47bIBD0//9ZpUpVGyl2znd5GYMT8AMMNn7hjqHJ5XojjBbvDjsDRNXp/eP0k5W806Ysy6qqjDFd12HaxhZsUEoJLuq6bpoGZZTSy+USKZQ3XLZtq1olUaN0qxFgbbQ0rez8Xlpr9YKwRbSsa5mdzr9/rOs6eszzzFhxPp+aOxH0XAqOOmzhnFs85geieXG3/JrufrXaDIMFGen7/XY4HI7H49tbmiRJmqaEEGguPSBkmiZURpgbqdjtzhiVUvZ2WJwz3dB1Njj2mg1kI1t5WGuDxggf/CI3jlPf91720khjZLP2rYOwZVmdWz2C5vGBCAvOBef8+RcVhGTx7s97vPtI0x5ulxlbOA9kP8lQr2QteBFsjOMwTXNV1dmVkG1cWZ6znNKcMkoLhlWOo356nitRgD49OiMhBCcZ2Tgkx8gJKbmAZ9D+99z3nbUD8NQjtR2sXcfBBTMDAjjfbEP5p+zAeSFunTNCyeVYFRkuBn1wXssSLnmdXz2/NnySc5Lt9/s4SeI4ZoxBani5mL7c83cyUEuNM1PeZHgbwiME4Ub/ef6Orp82AQ/MX/Es+wvpWx5JxEwi6wAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="blog_layout.png"\n        title=""\n        src="/static/blog_layout-8d5fe41a41f804c10767357ba3cf5c75-3444d.png"\n        srcset="/static/blog_layout-8d5fe41a41f804c10767357ba3cf5c75-9476e.png 240w,\n/static/blog_layout-8d5fe41a41f804c10767357ba3cf5c75-a94e0.png 480w,\n/static/blog_layout-8d5fe41a41f804c10767357ba3cf5c75-3444d.png 678w"\n        sizes="(max-width: 678px) 100vw, 678px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<em>Example of running lumen blog starter.</em>\nNavigate through <code class="language-text">src/pages/articles</code> where you can find blogs and their related images. Also you can just add new blogs and delete old ones.</p>\n<h3>Edit Configuration</h3>\n<p>find <code class="language-text">gatsby-config.js</code> from root directory and edit <code class="language-text">title</code>, <code class="language-text">subtitle</code> and <code class="language-text">author</code> information, Here you go our blog is ready to deploy. You can change avatar by navigating through file <code class="language-text">src/pages/photo.jpg</code> and just replace with your avtar.</p>\n<h3>Deploy On Github Pages</h3>\n<p>Now it might seems like what about deploying this blog? So we are going to deploy it on <a href="https://github.com/">Gihub</a> using <a href="https://pages.github.com/">Github Pages</a>.</p>\n<p>First of all create public repository with <your user name>.github.io. If you don’t have github account just open one first, then install gatsby community plugin called <code class="language-text">gh-pages</code>. run following command to install it.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code class="language-sh">npm install gh-pages --save-dev</code></pre>\n      </div>\n<p>then add following <code class="language-text">deploy</code> script to <code class="language-text">package.json</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"> <span class="token punctuation">{</span>\n        <span class="token string">"scripts"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            <span class="token string">"deploy"</span><span class="token punctuation">:</span> <span class="token string">"gatsby build --prefix-paths &amp;&amp; gh-pages -d public --branch master"</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><em>file: package.json</em></p>\n<p>why I had set branch as <code class="language-text">master</code>? becuase github pages requires <code class="language-text">master</code> branch for deploying pages. You need to add <code class="language-text">pathPrefix</code> into <code class="language-text">gatsby-config.js</code> to let <code class="language-text">gatbyjs</code> know which repository to select.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    pathPrefix<span class="token punctuation">:</span> <span class="token string">"/github username"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><em>file: gatsby-config.js</em></p>\n<p>Next step is checkout your github repository to exisiting directory and deploy blog. Execute following commands to <code class="language-text">init</code> git repository and add <code class="language-text">origin</code> to your project.</p>\n<div class="gatsby-highlight">\n      <pre class="language-git"><code class="language-git">cd lumen\ngit init\ngit remote add origin https://github.com/your-user-name/your-user-name.github.io.git\ngit fetch\ngit branch master origin/master\ngit checkout my-blog\ngit add .\ngit commit -m <span class="token string">\'first commit\'</span>\ngit push</code></pre>\n      </div>\n<p>Here, I had choose <code class="language-text">my-blog</code> branch for source because <code class="language-text">master</code> will be used for deploying compiiled blog source.\nBingo you are now ready to launch. 🚀 just hit following command.</p>\n<div class="gatsby-highlight">\n      <pre class="language-git"><code class="language-git">npm run deploy</code></pre>\n      </div>\n<p>Then open <a href="http://your-user-name.github.io/">your-user-name.github.io</a> and here we are, after hard work of one hour.\nNow you are thinking What about anyone want to comment on post? What about anyone want to subscribe to blog? I will write about both of them in my next blog keep in touch.</p>\n<p>P.S. If you liked post and want subscribe for next post just enter your email into input at end of post and any suggestions and comments are welcomed. just put your thoughts into comment box and I will try my best to improve on it. Thank you. for more information navigate through official site of <a href="https://www.gatsbyjs.org/">gatsby</a> Happy Exploring.</p>',fields:{tagSlugs:["/tags/reactjs/","/tags/gatsbyjs/","/tags/javascript/"]},frontmatter:{title:"How To Create Successfull Blog In Hour",tags:["reactjs","gatsbyjs","javascript"],date:"2018-06-28T13:22:34.096Z",description:"Want to start blog? Need simple process that can be completed in 60 minutes?"}}},pathContext:{slug:"/posts/how-to-create-successfull-blog-in-hour/"}}}});
//# sourceMappingURL=path---posts-how-to-create-successfull-blog-in-hour-a4de888b62104bffb0fa.js.map