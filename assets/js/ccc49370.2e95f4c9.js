(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6103],{27350:function(e,t,a){"use strict";var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(2784)),r=l(a(98532)),i=l(a(45125)),o=l(a(82581)),d=l(a(61238)),u=l(a(5176)),s=l(a(14992)),c=a(86700);var f=function(e){var t=e.content,a=e.sidebar,l=t.frontMatter,f=t.metadata,m=f.title,v=f.description,p=f.nextItem,g=f.prevItem,E=f.editUrl,_=l.hide_table_of_contents;return n.default.createElement(r.default,{title:m,description:v,wrapperClassName:c.ThemeClassNames.wrapper.blogPages,pageClassName:c.ThemeClassNames.page.blogPostPage},t&&n.default.createElement("div",{className:"container margin-vert--lg"},n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col col--3"},n.default.createElement(d.default,{sidebar:a})),n.default.createElement("main",{className:"col col--7"},n.default.createElement(i.default,{frontMatter:l,metadata:f,isBlogPostPage:!0},n.default.createElement(t,null)),n.default.createElement("div",null,E&&n.default.createElement(s.default,{editUrl:E})),(p||g)&&n.default.createElement("div",{className:"margin-vert--xl"},n.default.createElement(o.default,{nextItem:p,prevItem:g}))),!_&&t.toc&&n.default.createElement("div",{className:"col col--2"},n.default.createElement(u.default,{toc:t.toc})))))};t.default=f},82581:function(e,t,a){"use strict";var l=a(20862).default,n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(2784)),i=l(a(29052)),o=n(a(33692));var d=function(e){var t=e.nextItem,a=e.prevItem;return r.default.createElement("nav",{className:"pagination-nav","aria-label":(0,i.translate)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},r.default.createElement("div",{className:"pagination-nav__item"},a&&r.default.createElement(o.default,{className:"pagination-nav__link",to:a.permalink},r.default.createElement("div",{className:"pagination-nav__sublabel"},r.default.createElement(i.default,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),r.default.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),r.default.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&r.default.createElement(o.default,{className:"pagination-nav__link",to:t.permalink},r.default.createElement("div",{className:"pagination-nav__sublabel"},r.default.createElement(i.default,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),r.default.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};t.default=d},14992:function(e,t,a){"use strict";var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.editUrl;return n.default.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.default.createElement(i.default,null),n.default.createElement(r.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))};var n=l(a(2784)),r=l(a(29052)),i=l(a(18558))},18558:function(e,t,a){"use strict";var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(22122)),r=l(a(19756)),i=l(a(2784)),o=l(a(86010)),d=l(a(21321)),u=["className"],s=function(e){var t=e.className,a=(0,r.default)(e,u);return i.default.createElement("svg",(0,n.default)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:(0,o.default)(d.default.iconEdit,t),"aria-label":"Edit page"},a),i.default.createElement("g",null,i.default.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};t.default=s},5176:function(e,t,a){"use strict";var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(2784)),r=l(a(86010)),i=l(a(45035)),o=l(a(38018)),d="table-of-contents__link";function u(e){var t=e.toc,a=e.isChild;return t.length?n.default.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.default.createElement("li",{key:e.id},n.default.createElement("a",{href:"#"+e.id,className:d,dangerouslySetInnerHTML:{__html:e.value}}),n.default.createElement(u,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return(0,i.default)(d,"table-of-contents__link--active",100),n.default.createElement("div",{className:(0,r.default)(o.default.tableOfContents,"thin-scrollbar")},n.default.createElement(u,{toc:t}))};t.default=s},45035:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(2784);var n=function(e,t,a){var n=(0,l.useState)(void 0),r=n[0],i=n[1];(0,l.useEffect)((function(){function l(){var l=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var l=e[e.indexOf(t)-1];return null!=l?l:t}return t}return e[e.length-1]}();if(l)for(var n=0,o=!1,d=document.getElementsByClassName(e);n<d.length&&!o;){var u=d[n],s=u.href,c=decodeURIComponent(s.substring(s.indexOf("#")+1));l.id===c&&(r&&r.classList.remove(t),u.classList.add(t),i(u),o=!0),n+=1}}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}))};t.default=n},21321:function(e,t,a){"use strict";a.r(t),t.default={iconEdit:"iconEdit_2_ui"}},38018:function(e,t,a){"use strict";a.r(t),t.default={tableOfContents:"tableOfContents_35-E",docItemContainer:"docItemContainer_gpai"}}}]);