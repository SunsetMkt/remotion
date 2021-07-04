(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8612],{3905:function(e,a,t){"use strict";t.r(a),t.d(a,{MDXContext:function(){return l},MDXProvider:function(){return c},mdx:function(){return N},useMDXComponents:function(){return d},withMDXComponents:function(){return i}});var n=t(2784);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(){return(m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),i=function(e){return function(a){var t=d(a.components);return n.createElement(e,m({},a,{components:t}))}},d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},x=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,m=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),i=d(t),c=r,x=i["".concat(o,".").concat(c)]||i[c]||u[c]||m;return t?n.createElement(x,s(s({ref:a},l),{},{components:t})):n.createElement(x,s({ref:a},l))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var m=t.length,o=new Array(m);o[0]=x;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<m;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}x.displayName="MDXCreateElement"},90870:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=t(22122),r=t(19756),m=(t(2784),t(3905)),o=["components"],s={title:"<Img />",id:"img"},p={unversionedId:"img",id:"img",isDocsHomePage:!1,title:"<Img />",description:"The ` can be used like a regular ` HTML tag.",source:"@site/docs/img.md",sourceDirName:".",slug:"/img",permalink:"/docs/img",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/img.md",version:"current",frontMatter:{title:"<Img />",id:"img"},sidebar:"someSidebar",previous:{title:"<AbsoluteFill />",permalink:"/docs/absolute-fill"},next:{title:"<IFrame />",permalink:"/docs/iframe"}},l=[{value:"Example",id:"example",children:[]},{value:"See also",id:"see-also",children:[]}],i={toc:l};function d(e){var a=e.components,t=(0,r.default)(e,o);return(0,m.mdx)("wrapper",(0,n.default)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"<Img />")," can be used like a regular ",(0,m.mdx)("inlineCode",{parentName:"p"},"<img>")," HTML tag.\nThe difference is that if you use the component from Remotion, that Remotion will ensure that the image is loaded before rendering the frame. That way you can avoid flickers if it happens that the image is still loading during rendering."),(0,m.mdx)("h2",{id:"example"},"Example"),(0,m.mdx)("div",{className:"shiki-twoslash-fragment"},(0,m.mdx)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,m.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,m.mdx)("div",{parentName:"pre",className:"code-container"},(0,m.mdx)("code",{parentName:"div"},(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,m.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Img: React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "style" | "defaultChecked" | ... 263 more ... | "useMap"> & React.RefAttributes<...>>\nimport Img'},"Img"),"} "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'remotion'")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,m.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.png"\nimport hi'},"hi")," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'./hi.png'")),"\n",(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"export"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const MyComp: React.FC<{}>"},"MyComp")),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(alias) namespace React\nimport React"},"React")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"."),(0,m.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"type React.FC<P = {}> = React.FunctionComponent<P>"},"FC")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," <"),(0,m.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Img: React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "style" | "defaultChecked" | ... 263 more ... | "useMap"> & React.RefAttributes<...>>\nimport Img'},"Img")),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) src?: string | undefined"},"src")),(0,m.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,m.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.png"\nimport hi'},"hi"),"} />")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,m.mdx)("pre",{parentName:"div",className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,m.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,m.mdx)("div",{parentName:"pre",className:"code-container"},(0,m.mdx)("code",{parentName:"div"},(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,m.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Img: React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "style" | "defaultChecked" | ... 263 more ... | "useMap"> & React.RefAttributes<...>>\nimport Img'},"Img"),"} "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'remotion'")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,m.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.png"\nimport hi'},"hi")," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'./hi.png'")),"\n",(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"export"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,m.mdx)("data-lsp",{parentName:"span",lsp:"const MyComp: React.FC<{}>"},"MyComp")),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(alias) namespace React\nimport React"},"React"),".",(0,m.mdx)("data-lsp",{parentName:"span",lsp:"type React.FC<P = {}> = React.FunctionComponent<P>"},"FC")," "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," () "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," <"),(0,m.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,m.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Img: React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "style" | "defaultChecked" | ... 263 more ... | "useMap"> & React.RefAttributes<...>>\nimport Img'},"Img")),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,m.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) src?: string | undefined"},"src")),(0,m.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{",(0,m.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.png"\nimport hi'},"hi"),"} />")),(0,m.mdx)("div",{parentName:"code",className:"line"},(0,m.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")))))),(0,m.mdx)("h2",{id:"see-also"},"See also"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"/docs/use-img-and-iframe"},"Use ",(0,m.mdx)("inlineCode",{parentName:"a"},"<Img>")," and ",(0,m.mdx)("inlineCode",{parentName:"a"},"<IFrame>")," tags"))))}d.isMDXComponent=!0}}]);