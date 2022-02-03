!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):(n||self).MarkdownToJSX=t(n.React)}(this,function(n){function t(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var r=t(n);function e(){return(e=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n}).apply(this,arguments)}var o=/[\'\"]/,u=["children","options"],a=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(function(n,t){return n[t.toLowerCase()]=t,n},{for:"htmlFor"}),c={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},i=["style","script"],f=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,l=/mailto:/i,s=/\n{2,}$/,_=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,d=/^ *> ?/gm,p=/^ {2,}\n/,m=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,g=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,y=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,v=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,h=/^(?:\n *)*\n/,k=/\r\n?/g,x=/^\[\^([^\]]+)](:.*)\n/,b=/^\[\^([^\]]+)]/,S=/\f/g,$=/^\s*?\[(x|\s)\]/,w=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,z=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,E=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,T=/&([a-z]+);/g,A=/^<!--[\s\S]*?(?:-->)/,j=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,O=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,R=/^\{.*\}$/,C=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,I=/^<([^ >]+@[^ >]+)>/,M=/^<([^ >]+:\/[^ >]+)>/,B=/ *\n+$/,L=/(?:^|\n)( *)$/,F=/-([a-z])?/gi,D=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,H=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,N=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,Z=/^\[([^\]]*)\] ?\[([^\]]*)\]/,P=/(\[|\])/g,q=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,G=/\t/g,J=/^ *\| */,U=/(^ *\||\| *$)/g,V=/ *$/,W=/^ *:-+: *$/,Q=/^ *:-+ *$/,X=/^ *-+: *$/,K=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,Y=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,nn=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,tn=/^\\([^0-9A-Za-z\s])/,rn=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,en=/^\n+/,on=/^([ \t]*)/,un=/\\([^0-9A-Z\s])/gi,an="( *)((?:[*+-]|\\d+\\.)) +",cn=new RegExp("^"+an),fn=new RegExp("^"+an+"[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),ln=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),sn="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",_n="\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*",dn=new RegExp("^\\[("+sn+")\\]\\("+_n+"\\)"),pn=new RegExp("^!\\[("+sn+")\\]\\("+_n+"\\)"),mn=[_,y,g,w,z,A,fn,ln,D],gn=[].concat(mn,[/^[^\n]+(?:  \n|\n{2,})/,E,O]);function yn(n){return n.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function vn(n){return X.test(n)?"right":W.test(n)?"center":Q.test(n)?"left":null}function hn(n,t,r){var e=r.t;r.t=!0;var o=t(n.trim(),r);r.t=e;var u=[[]];return o.forEach(function(n,t){"tableSeparator"===n.type?0!==t&&t!==o.length-1&&u.push([]):("text"!==n.type||null!=o[t+1]&&"tableSeparator"!==o[t+1].type||(n.content=n.content.replace(V,"")),u[u.length-1].push(n))}),u}function kn(n,t,r){r.o=!0;var e=hn(n[1],t,r),o=n[2].replace(U,"").split("|").map(vn),u=function(n,t,r){return n.trim().split("\n").map(function(n){return hn(n,t,r)})}(n[3],t,r);return r.o=!1,{align:o,cells:u,header:e,type:"table"}}function xn(n,t){return null==n.align[t]?{}:{textAlign:n.align[t]}}function bn(n){return function(t,r){return r.o?n.exec(t):null}}function Sn(n){return function(t,r){return r.o||r.u?n.exec(t):null}}function $n(n){return function(t,r){return r.o||r.u?null:n.exec(t)}}function wn(n){return function(t){return n.exec(t)}}function zn(n,t,r){if(t.o||t.u)return null;if(r&&!r.endsWith("\n"))return null;var e="";n.split("\n").every(function(n){return!mn.some(function(t){return t.test(n)})&&(e+=n+"\n",n.trim())});var o=e.trimEnd();return""==o?null:[e,o]}function En(n){try{if(decodeURIComponent(n).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(n){return null}return n}function Tn(n){return n.replace(un,"$1")}function An(n,t,r){var e=r.o||!1,o=r.u||!1;r.o=!0,r.u=!0;var u=n(t,r);return r.o=e,r.u=o,u}function jn(n,t,r){var e=r.o||!1,o=r.u||!1;r.o=!1,r.u=!0;var u=n(t,r);return r.o=e,r.u=o,u}function On(n,t,r){return r.o=!1,n(t+"\n\n",r)}var Rn,Cn=function(n,t,r){return{content:An(t,n[1],r)}};function In(){return{}}function Mn(){return null}function Bn(){return[].slice.call(arguments).filter(Boolean).join(" ")}function Ln(n,t,r){for(var e=n,o=t.split(".");o.length&&void 0!==(e=e[o[0]]);)o.shift();return e||r}function Fn(n,t){var r=Ln(t,n);return r?"function"==typeof r||"object"==typeof r&&"render"in r?r:Ln(t,n+".component",n):n}function Dn(n,t){void 0===t&&(t={}),t.overrides=t.overrides||{},t.slugify=t.slugify||yn,t.namedCodesToUnicode=t.namedCodesToUnicode?e({},c,t.namedCodesToUnicode):c;var u=t.createElement||r.default.createElement;function U(n,r){var o=Ln(t.overrides,n+".props",{});return u.apply(void 0,[Fn(n,t.overrides),e({},r,o,{className:Bn(null==r?void 0:r.className,o.className)||void 0})].concat([].slice.call(arguments,2)))}function V(n){var e=!1;t.forceInline?e=!0:t.forceBlock||(e=!1===q.test(n));for(var o=_n(sn(e?n:n.trimEnd().replace(en,"")+"\n\n",{o:e}));"string"==typeof o[o.length-1]&&!o[o.length-1].trim();)o.pop();if(null===t.wrapper)return o;var u,a=t.wrapper||(e?"span":"div");if(o.length>1||t.forceWrapper)u=o;else{if(1===o.length)return"string"==typeof(u=o[0])?U("span",{key:"outer"},u):u;u=null}return r.default.createElement(a,{key:"outer"},u)}function W(n){var t=n.match(f);return t?t.reduce(function(n,t,e){var u=t.indexOf("=");if(-1!==u){var c=function(n){return-1!==n.indexOf("-")&&null===n.match(j)&&(n=n.replace(F,function(n,t){return t.toUpperCase()})),n}(t.slice(0,u)).trim(),i=function(n){return n?(o.test(n.charAt(0))&&(n=n.substr(1)),o.test(n.charAt(n.length-1))&&(n=n.substr(0,n.length-1)),n):""}(t.slice(u+1).trim()),f=a[c]||c,l=n[f]=function(n,t){return"style"===n?t.split(/;\s?/).reduce(function(n,t){var r=t.slice(0,t.indexOf(":"));return n[r.replace(/(-[a-z])/g,function(n){return n[1].toUpperCase()})]=t.slice(r.length+1).trim(),n},{}):"href"===n?En(t):(t.match(R)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(c,i);"string"==typeof l&&(E.test(l)||O.test(l))&&(n[f]=r.default.cloneElement(V(l.trim()),{key:e}))}else"style"!==t&&(n[a[t]||t]=!0);return n},{}):void 0}var Q=[],X={},un={blockQuote:{i:$n(_),l:Rn.HIGH,_:function(n,t,r){return{content:t(n[0].replace(d,""),r)}},p:function(n,t,r){return U("blockquote",{key:r.m},t(n.content,r))}},breakLine:{i:wn(p),l:Rn.HIGH,_:In,p:function(n,t,r){return U("br",{key:r.m})}},breakThematic:{i:$n(m),l:Rn.HIGH,_:In,p:function(n,t,r){return U("hr",{key:r.m})}},codeBlock:{i:$n(y),l:Rn.MAX,_:function(n){return{content:n[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},p:function(n,t,r){return U("pre",{key:r.m},U("code",{className:n.lang?"lang-"+n.lang:""},n.content))}},codeFenced:{i:$n(g),l:Rn.MAX,_:function(n){return{content:n[3],lang:n[2]||void 0,type:"codeBlock"}}},codeInline:{i:Sn(v),l:Rn.LOW,_:function(n){return{content:n[2]}},p:function(n,t,r){return U("code",{key:r.m},n.content)}},footnote:{i:$n(x),l:Rn.MAX,_:function(n){return Q.push({footnote:n[2],identifier:n[1]}),{}},p:Mn},footnoteReference:{i:bn(b),l:Rn.HIGH,_:function(n){return{content:n[1],target:"#"+t.slugify(n[1])}},p:function(n,t,r){return U("a",{key:r.m,href:En(n.target)},U("sup",{key:r.m},n.content))}},gfmTask:{i:bn($),l:Rn.HIGH,_:function(n){return{completed:"x"===n[1].toLowerCase()}},p:function(n,t,r){return U("input",{checked:n.completed,key:r.m,readOnly:!0,type:"checkbox"})}},heading:{i:$n(w),l:Rn.HIGH,_:function(n,r,e){return{content:An(r,n[2],e),id:t.slugify(n[2]),level:n[1].length}},p:function(n,t,r){return n.tag="h"+n.level,U(n.tag,{id:n.id,key:r.m},t(n.content,r))}},headingSetext:{i:$n(z),l:Rn.MAX,_:function(n,t,r){return{content:An(t,n[1],r),level:"="===n[2]?1:2,type:"heading"}}},htmlComment:{i:wn(A),l:Rn.HIGH,_:function(){return{}},p:Mn},image:{i:Sn(pn),l:Rn.HIGH,_:function(n){return{alt:n[1],target:Tn(n[2]),title:n[3]}},p:function(n,t,r){return U("img",{key:r.m,alt:n.alt||void 0,title:n.title||void 0,src:En(n.target)})}},link:{i:bn(dn),l:Rn.LOW,_:function(n,t,r){return{content:jn(t,n[1],r),target:Tn(n[2]),title:n[3]}},p:function(n,t,r){return U("a",{key:r.m,href:En(n.target),title:n.title},t(n.content,r))}},linkAngleBraceStyleDetector:{i:bn(M),l:Rn.MAX,_:function(n){return{content:[{content:n[1],type:"text"}],target:n[1],type:"link"}}},linkBareUrlDetector:{i:function(n,t){return t.g?null:bn(C)(n,t)},l:Rn.MAX,_:function(n){return{content:[{content:n[1],type:"text"}],target:n[1],title:void 0,type:"link"}}},linkMailtoDetector:{i:bn(I),l:Rn.MAX,_:function(n){var t=n[1],r=n[1];return l.test(r)||(r="mailto:"+r),{content:[{content:t.replace("mailto:",""),type:"text"}],target:r,type:"link"}}},list:{i:function(n,t,r){var e=L.exec(r);return!e||!t.v&&t.o?null:ln.exec(n=e[1]+n)},l:Rn.HIGH,_:function(n,t,r){var e=n[2],o=e.length>1,u=o?+e:void 0,a=n[0].replace(s,"\n").match(fn),c=!1;return{items:a.map(function(n,e){var o=cn.exec(n)[0].length,u=new RegExp("^ {1,"+o+"}","gm"),i=n.replace(u,"").replace(cn,""),f=e===a.length-1,l=-1!==i.indexOf("\n\n")||f&&c;c=l;var s,_=r.o,d=r.v;r.v=!0,l?(r.o=!1,s=i.replace(B,"\n\n")):(r.o=!0,s=i.replace(B,""));var p=t(s,r);return r.o=_,r.v=d,p}),ordered:o,start:u}},p:function(n,t,r){return U(n.ordered?"ol":"ul",{key:r.m,start:n.start},n.items.map(function(n,e){return U("li",{key:e},t(n,r))}))}},newlineCoalescer:{i:$n(h),l:Rn.LOW,_:In,p:function(){return"\n"}},paragraph:{i:zn,l:Rn.LOW,_:Cn,p:function(n,t,r){return U("p",{key:r.m},t(n.content,r))}},ref:{i:bn(H),l:Rn.MAX,_:function(n){return X[n[1]]={target:n[2],title:n[4]},{}},p:Mn},refImage:{i:Sn(N),l:Rn.MAX,_:function(n){return{alt:n[1]||void 0,ref:n[2]}},p:function(n,t,r){return U("img",{key:r.m,alt:n.alt,src:En(X[n.ref].target),title:X[n.ref].title})}},refLink:{i:bn(Z),l:Rn.MAX,_:function(n,t,r){return{content:t(n[1],r),fallbackContent:t(n[0].replace(P,"\\$1"),r),ref:n[2]}},p:function(n,t,r){return X[n.ref]?U("a",{key:r.m,href:En(X[n.ref].target),title:X[n.ref].title},t(n.content,r)):U("span",{key:r.m},t(n.fallbackContent,r))}},table:{i:$n(D),l:Rn.HIGH,_:kn,p:function(n,t,r){return U("table",{key:r.m},U("thead",null,U("tr",null,n.header.map(function(e,o){return U("th",{key:o,style:xn(n,o)},t(e,r))}))),U("tbody",null,n.cells.map(function(e,o){return U("tr",{key:o},e.map(function(e,o){return U("td",{key:o,style:xn(n,o)},t(e,r))}))})))}},tableSeparator:{i:function(n,t){return t.t?J.exec(n):null},l:Rn.HIGH,_:function(){return{type:"tableSeparator"}},p:function(){return" | "}},text:{i:wn(rn),l:Rn.MIN,_:function(n){return{content:n[0].replace(T,function(n,r){return t.namedCodesToUnicode[r]?t.namedCodesToUnicode[r]:n})}},p:function(n){return n.content}},textBolded:{i:Sn(K),l:Rn.MED,_:function(n,t,r){return{content:t(n[2],r)}},p:function(n,t,r){return U("strong",{key:r.m},t(n.content,r))}},textEmphasized:{i:Sn(Y),l:Rn.LOW,_:function(n,t,r){return{content:t(n[2],r)}},p:function(n,t,r){return U("em",{key:r.m},t(n.content,r))}},textEscaped:{i:Sn(tn),l:Rn.HIGH,_:function(n){return{content:n[1],type:"text"}}},textStrikethroughed:{i:Sn(nn),l:Rn.LOW,_:Cn,p:function(n,t,r){return U("del",{key:r.m},t(n.content,r))}}};!0!==t.disableParsingRawHTML&&(un.htmlBlock={i:wn(E),l:Rn.HIGH,_:function(n,t,r){var e,o=n[3].match(on),u=new RegExp("^"+o[1],"gm"),a=n[3].replace(u,""),c=(e=a,gn.some(function(n){return n.test(e)})?On:An),f=n[1].toLowerCase(),l=-1!==i.indexOf(f);r.g=r.g||"a"===f;var s=l?n[3]:c(t,a,r);return r.g=!1,{attrs:W(n[2]),content:s,noInnerParse:l,tag:l?f:n[1]}},p:function(n,t,r){return U(n.tag,e({key:r.m},n.attrs,{$markdownToJsxContext:{isFromHtml:!0}}),n.noInnerParse?n.content:t(n.content,r))}},un.htmlSelfClosing={i:wn(O),l:Rn.HIGH,_:function(n){return{attrs:W(n[2]||""),tag:n[1]}},p:function(n,t,r){return U(n.tag,e({},n.attrs,{key:r.m,$markdownToJsxContext:{isFromHtml:!0}}))}});var an,sn=function(n){var t=Object.keys(n);function r(e,o){for(var u=[],a="";e;)for(var c=0;c<t.length;){var i=t[c],f=n[i],l=f.i(e,o,a);if(l){var s=l[0];e=e.substring(s.length);var _=f._(l,r,o);null==_.type&&(_.type=i),u.push(_),a=s;break}c++}return u}return t.sort(function(t,r){var e=n[t].l,o=n[r].l;return e!==o?e-o:t<r?-1:1}),function(n,t){return r(function(n){return n.replace(k,"\n").replace(S,"").replace(G,"    ")}(n),t)}}(un),_n=(an=function(n){return function(t,r,e){return n[t.type].p(t,r,e)}}(un),function n(t,r){if(void 0===r&&(r={}),Array.isArray(t)){for(var e=r.m,o=[],u=!1,a=0;a<t.length;a++){r.m=a;var c=n(t[a],r),i="string"==typeof c;i&&u?o[o.length-1]+=c:null!==c&&o.push(c),u=i}return r.m=e,o}return an(t,n,r)}),mn=V(n);return Q.length?U("div",null,mn,U("footer",{key:"footer"},Q.map(function(n){return U("div",{id:t.slugify(n.identifier),key:n.identifier},n.identifier,_n(sn(n.footnote,{o:!0})))}))):mn}!function(n){n[n.MAX=0]="MAX",n[n.HIGH=1]="HIGH",n[n.MED=2]="MED",n[n.LOW=3]="LOW",n[n.MIN=4]="MIN"}(Rn||(Rn={}));var Hn=function(n){var t=n.children,e=n.options,o=function(n,t){if(null==n)return{};var r,e,o={},u=Object.keys(n);for(e=0;e<u.length;e++)t.indexOf(r=u[e])>=0||(o[r]=n[r]);return o}(n,u);return r.default.cloneElement(Dn(t,e),o)};return Object.assign(Hn,{compiler:Dn}),Hn});
//# sourceMappingURL=index.umd.js.map
