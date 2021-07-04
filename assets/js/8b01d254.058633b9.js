(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[839],{3905:function(e,a,n){"use strict";n.r(a),n.d(a,{MDXContext:function(){return l},MDXProvider:function(){return c},mdx:function(){return x},useMDXComponents:function(){return p},withMDXComponents:function(){return i}});var t=n(2784);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function m(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?m(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),i=function(e){return function(a){var n=p(a.components);return t.createElement(e,o({},a,{components:n}))}},p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):d(d({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},N=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),i=p(n),c=r,N=i["".concat(m,".").concat(c)]||i[c]||u[c]||o;return n?t.createElement(N,d(d({ref:a},l),{},{components:n})):t.createElement(N,d({ref:a},l))}));function x(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,m=new Array(o);m[0]=N;var d={};for(var s in a)hasOwnProperty.call(a,s)&&(d[s]=a[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,m[1]=d;for(var l=2;l<o;l++)m[l]=n[l];return t.createElement.apply(null,m)}return t.createElement.apply(null,n)}N.displayName="MDXCreateElement"},89208:function(e,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return d},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var t=n(22122),r=n(19756),o=(n(2784),n(3905)),m=["components"],d={title:"getWaveformPortion()",id:"get-waveform-portion"},s={unversionedId:"get-waveform-portion",id:"get-waveform-portion",isDocsHomePage:!1,title:"getWaveformPortion()",description:"Part of the @remotion/media-utils package of helper functions.",source:"@site/docs/get-waveform-portion.md",sourceDirName:".",slug:"/get-waveform-portion",permalink:"/docs/get-waveform-portion",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/get-waveform-portion.md",version:"current",frontMatter:{title:"getWaveformPortion()",id:"get-waveform-portion"},sidebar:"someSidebar",previous:{title:"getVideoMetadata()",permalink:"/docs/get-video-metadata"},next:{title:"useAudioData()",permalink:"/docs/use-audio-data"}},l=[{value:"Arguments",id:"arguments",children:[{value:"<code>options</code>",id:"options",children:[]}]},{value:"Return value",id:"return-value",children:[]},{value:"Example",id:"example",children:[]},{value:"Alternatives",id:"alternatives",children:[]}],i={toc:l};function p(e){var a=e.components,n=(0,r.default)(e,m);return(0,o.mdx)("wrapper",(0,t.default)({},i,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Part of the ",(0,o.mdx)("inlineCode",{parentName:"em"},"@remotion/media-utils"))," package of helper functions."),(0,o.mdx)("p",null,"Takes bulky waveform data (for example fetched by ",(0,o.mdx)("a",{parentName:"p",href:"get-audio-data"},(0,o.mdx)("inlineCode",{parentName:"a"},"getAudioData()")),") and returns a trimmed and simplified version of it, for simpler visualization. This function is suitable if you only need volume data, if you need more detailed data about each frequency range, use ",(0,o.mdx)("a",{parentName:"p",href:"visualize-audio"},(0,o.mdx)("inlineCode",{parentName:"a"},"visualizeAudio()")),"."),(0,o.mdx)("h2",{id:"arguments"},"Arguments"),(0,o.mdx)("h3",{id:"options"},(0,o.mdx)("inlineCode",{parentName:"h3"},"options")),(0,o.mdx)("p",null,"An object with the following arguments:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"audioData"),": ",(0,o.mdx)("inlineCode",{parentName:"li"},"AudioData")," - information about the audio. Use ",(0,o.mdx)("a",{parentName:"li",href:"get-audio-data"},(0,o.mdx)("inlineCode",{parentName:"a"},"getAudioData()"))," to fetch it."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"startTimeInSeconds"),": ",(0,o.mdx)("inlineCode",{parentName:"li"},"number")," - trim the waveform to exclude all data before ",(0,o.mdx)("inlineCode",{parentName:"li"},"startTimeInSeconds"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"durationInSeconds"),": ",(0,o.mdx)("inlineCode",{parentName:"li"},"number")," - trim the waveform to exclude all data after ",(0,o.mdx)("inlineCode",{parentName:"li"},"startTimeInSeconds + durationInSeconds"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"numberOfSamples"),": ",(0,o.mdx)("inlineCode",{parentName:"li"},"number")," - how big you want the result array to be. The function will compress the waveform to fit in ",(0,o.mdx)("inlineCode",{parentName:"li"},"numberOfSamples")," data points.")),(0,o.mdx)("h2",{id:"return-value"},"Return value"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Bar[]")," - An array of objects with the following properties:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"index"),": ",(0,o.mdx)("inlineCode",{parentName:"li"},"number")," - the index of the datapoint, starting at 0. Useful for specifying as React ",(0,o.mdx)("inlineCode",{parentName:"li"},"key")," attribute without getting a warning."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"amplitude"),": ",(0,o.mdx)("inlineCode",{parentName:"li"},"number")," - a value describing the amplitude / volume / loudness of the audio.")),(0,o.mdx)("h2",{id:"example"},"Example"),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const getAudioData: (src: string) => Promise<AudioData>\nimport getAudioData"},"getAudioData"),", ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const getWaveformPortion: ({ audioData, startTimeInSeconds, durationInSeconds, numberOfSamples, }: {\n    audioData: AudioData;\n    startTimeInSeconds: number;\n    durationInSeconds: number;\n    numberOfSamples: number;\n}) => Bar[]\nimport getWaveformPortion"},"getWaveformPortion"),"} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'@remotion/media-utils'")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp3"\nimport music'},"music")," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'./music.mp3'")),"\n",(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const audioData: AudioData"},"audioData")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"await"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) getAudioData(src: string): Promise<AudioData>\nimport getAudioData"},"getAudioData")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"(",(0,o.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp3"\nimport music'},"music"),") "),(0,o.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"/* {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  channelWaveforms: [Float32Array(4410000), Float32Array(4410000)],")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  sampleRate: 44100,")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  durationInSeconds: 100.0000,")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  numberOfChannels: 2,")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},'  resultId: "0.432878981",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  isRemote: false")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"} */")),"\n",(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const waveformPortion: Bar[]"},"waveformPortion")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"await"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) getWaveformPortion({ audioData, startTimeInSeconds, durationInSeconds, numberOfSamples, }: {\n    audioData: AudioData;\n    startTimeInSeconds: number;\n    durationInSeconds: number;\n    numberOfSamples: number;\n}): Bar[]\nimport getWaveformPortion"},"getWaveformPortion")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"({")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) audioData: AudioData"},"audioData"),",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// Will select time range of 20-40 seconds")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) startTimeInSeconds: number"},"startTimeInSeconds")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"20"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) durationInSeconds: number"},"durationInSeconds")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"20"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) numberOfSamples: number"},"numberOfSamples")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"10")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}) "),(0,o.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// [{index: 0, amplitude: 1.2203}, ... {index: 9, amplitude: 3.2211}]")),"\n",(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"namespace console\nvar console: Console"},"console")),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},".",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(method) Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)"},"log")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const waveformPortion: Bar[]"},"waveformPortion")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"."),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) Array<Bar>.length: number"},"length")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},") "),(0,o.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// 10"))))),(0,o.mdx)("pre",{parentName:"div",className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const getAudioData: (src: string) => Promise<AudioData>\nimport getAudioData"},"getAudioData"),", ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const getWaveformPortion: ({ audioData, startTimeInSeconds, durationInSeconds, numberOfSamples, }: {\n    audioData: AudioData;\n    startTimeInSeconds: number;\n    durationInSeconds: number;\n    numberOfSamples: number;\n}) => Bar[]\nimport getWaveformPortion"},"getWaveformPortion"),"} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'@remotion/media-utils'")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp3"\nimport music'},"music")," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'./music.mp3'")),"\n",(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const audioData: AudioData"},"audioData")),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"await"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) getAudioData(src: string): Promise<AudioData>\nimport getAudioData"},"getAudioData"),"(",(0,o.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp3"\nimport music'},"music"),") "),(0,o.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"/* {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  channelWaveforms: [Float32Array(4410000), Float32Array(4410000)],")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  sampleRate: 44100,")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  durationInSeconds: 100.0000,")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  numberOfChannels: 2,")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},'  resultId: "0.432878981",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"  isRemote: false")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"} */")),"\n",(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const waveformPortion: Bar[]"},"waveformPortion")),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"await"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) getWaveformPortion({ audioData, startTimeInSeconds, durationInSeconds, numberOfSamples, }: {\n    audioData: AudioData;\n    startTimeInSeconds: number;\n    durationInSeconds: number;\n    numberOfSamples: number;\n}): Bar[]\nimport getWaveformPortion"},"getWaveformPortion"),"({")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) audioData: AudioData"},"audioData"),",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"// Will select time range of 20-40 seconds")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) startTimeInSeconds: number"},"startTimeInSeconds")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"20"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) durationInSeconds: number"},"durationInSeconds")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"20"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) numberOfSamples: number"},"numberOfSamples")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"10")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}) "),(0,o.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"// [{index: 0, amplitude: 1.2203}, ... {index: 9, amplitude: 3.2211}]")),"\n",(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"namespace console\nvar console: Console"},"console")),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},".",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(method) Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)"},"log"),"("),(0,o.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const waveformPortion: Bar[]"},"waveformPortion")),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"."),(0,o.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) Array<Bar>.length: number"},"length")),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},") "),(0,o.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"// 10")))))),(0,o.mdx)("h2",{id:"alternatives"},"Alternatives"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"visualize-audio"},(0,o.mdx)("inlineCode",{parentName:"a"},"visualizeAudio()"))," function is more suitable for visualizing audio based on frequency properties of the audio (bass, mids, highs, etc)."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/using-audio"},"Using audio")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/audio"},(0,o.mdx)("inlineCode",{parentName:"a"},"<Audio/>")))))}p.isMDXComponent=!0}}]);