import{g as x}from"./@ckeditor_ckeditor5-vue@5.1.0-BRsWHAsX.js";import{c as w}from"./color-name@1.1.4-Dc5RlJww.js";function k(n,c){for(var s=0;s<c.length;s++){const t=c[s];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in n)){const o=Object.getOwnPropertyDescriptor(t,e);o&&Object.defineProperty(n,e,o.get?o:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}const g=w,m={};for(const n of Object.keys(g))m[g[n]]=n;const i={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var v=i;for(const n of Object.keys(i)){if(!("channels"in i[n]))throw new Error("missing channels property: "+n);if(!("labels"in i[n]))throw new Error("missing channel labels property: "+n);if(i[n].labels.length!==i[n].channels)throw new Error("channel and label counts mismatch: "+n);const{channels:c,labels:s}=i[n];delete i[n].channels,delete i[n].labels,Object.defineProperty(i[n],"channels",{value:c}),Object.defineProperty(i[n],"labels",{value:s})}i.rgb.hsl=function(n){const c=n[0]/255,s=n[1]/255,t=n[2]/255,e=Math.min(c,s,t),o=Math.max(c,s,t),r=o-e;let l,a;o===e?l=0:c===o?l=(s-t)/r:s===o?l=2+(t-c)/r:t===o&&(l=4+(c-s)/r),l=Math.min(l*60,360),l<0&&(l+=360);const u=(e+o)/2;return o===e?a=0:u<=.5?a=r/(o+e):a=r/(2-o-e),[l,a*100,u*100]};i.rgb.hsv=function(n){let c,s,t,e,o;const r=n[0]/255,l=n[1]/255,a=n[2]/255,u=Math.max(r,l,a),f=u-Math.min(r,l,a),h=function(M){return(u-M)/6/f+1/2};return f===0?(e=0,o=0):(o=f/u,c=h(r),s=h(l),t=h(a),r===u?e=t-s:l===u?e=1/3+c-t:a===u&&(e=2/3+s-c),e<0?e+=1:e>1&&(e-=1)),[e*360,o*100,u*100]};i.rgb.hwb=function(n){const c=n[0],s=n[1];let t=n[2];const e=i.rgb.hsl(n)[0],o=1/255*Math.min(c,Math.min(s,t));return t=1-1/255*Math.max(c,Math.max(s,t)),[e,o*100,t*100]};i.rgb.cmyk=function(n){const c=n[0]/255,s=n[1]/255,t=n[2]/255,e=Math.min(1-c,1-s,1-t),o=(1-c-e)/(1-e)||0,r=(1-s-e)/(1-e)||0,l=(1-t-e)/(1-e)||0;return[o*100,r*100,l*100,e*100]};function j(n,c){return(n[0]-c[0])**2+(n[1]-c[1])**2+(n[2]-c[2])**2}i.rgb.keyword=function(n){const c=m[n];if(c)return c;let s=1/0,t;for(const e of Object.keys(g)){const o=g[e],r=j(n,o);r<s&&(s=r,t=e)}return t};i.keyword.rgb=function(n){return g[n]};i.rgb.xyz=function(n){let c=n[0]/255,s=n[1]/255,t=n[2]/255;c=c>.04045?((c+.055)/1.055)**2.4:c/12.92,s=s>.04045?((s+.055)/1.055)**2.4:s/12.92,t=t>.04045?((t+.055)/1.055)**2.4:t/12.92;const e=c*.4124+s*.3576+t*.1805,o=c*.2126+s*.7152+t*.0722,r=c*.0193+s*.1192+t*.9505;return[e*100,o*100,r*100]};i.rgb.lab=function(n){const c=i.rgb.xyz(n);let s=c[0],t=c[1],e=c[2];s/=95.047,t/=100,e/=108.883,s=s>.008856?s**(1/3):7.787*s+16/116,t=t>.008856?t**(1/3):7.787*t+16/116,e=e>.008856?e**(1/3):7.787*e+16/116;const o=116*t-16,r=500*(s-t),l=200*(t-e);return[o,r,l]};i.hsl.rgb=function(n){const c=n[0]/360,s=n[1]/100,t=n[2]/100;let e,o,r;if(s===0)return r=t*255,[r,r,r];t<.5?e=t*(1+s):e=t+s-t*s;const l=2*t-e,a=[0,0,0];for(let u=0;u<3;u++)o=c+1/3*-(u-1),o<0&&o++,o>1&&o--,6*o<1?r=l+(e-l)*6*o:2*o<1?r=e:3*o<2?r=l+(e-l)*(2/3-o)*6:r=l,a[u]=r*255;return a};i.hsl.hsv=function(n){const c=n[0];let s=n[1]/100,t=n[2]/100,e=s;const o=Math.max(t,.01);t*=2,s*=t<=1?t:2-t,e*=o<=1?o:2-o;const r=(t+s)/2,l=t===0?2*e/(o+e):2*s/(t+s);return[c,l*100,r*100]};i.hsv.rgb=function(n){const c=n[0]/60,s=n[1]/100;let t=n[2]/100;const e=Math.floor(c)%6,o=c-Math.floor(c),r=255*t*(1-s),l=255*t*(1-s*o),a=255*t*(1-s*(1-o));switch(t*=255,e){case 0:return[t,a,r];case 1:return[l,t,r];case 2:return[r,t,a];case 3:return[r,l,t];case 4:return[a,r,t];case 5:return[t,r,l]}};i.hsv.hsl=function(n){const c=n[0],s=n[1]/100,t=n[2]/100,e=Math.max(t,.01);let o,r;r=(2-s)*t;const l=(2-s)*e;return o=s*e,o/=l<=1?l:2-l,o=o||0,r/=2,[c,o*100,r*100]};i.hwb.rgb=function(n){const c=n[0]/360;let s=n[1]/100,t=n[2]/100;const e=s+t;let o;e>1&&(s/=e,t/=e);const r=Math.floor(6*c),l=1-t;o=6*c-r,r&1&&(o=1-o);const a=s+o*(l-s);let u,f,h;switch(r){default:case 6:case 0:u=l,f=a,h=s;break;case 1:u=a,f=l,h=s;break;case 2:u=s,f=l,h=a;break;case 3:u=s,f=a,h=l;break;case 4:u=a,f=s,h=l;break;case 5:u=l,f=s,h=a;break}return[u*255,f*255,h*255]};i.cmyk.rgb=function(n){const c=n[0]/100,s=n[1]/100,t=n[2]/100,e=n[3]/100,o=1-Math.min(1,c*(1-e)+e),r=1-Math.min(1,s*(1-e)+e),l=1-Math.min(1,t*(1-e)+e);return[o*255,r*255,l*255]};i.xyz.rgb=function(n){const c=n[0]/100,s=n[1]/100,t=n[2]/100;let e,o,r;return e=c*3.2406+s*-1.5372+t*-.4986,o=c*-.9689+s*1.8758+t*.0415,r=c*.0557+s*-.204+t*1.057,e=e>.0031308?1.055*e**(1/2.4)-.055:e*12.92,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,r=r>.0031308?1.055*r**(1/2.4)-.055:r*12.92,e=Math.min(Math.max(0,e),1),o=Math.min(Math.max(0,o),1),r=Math.min(Math.max(0,r),1),[e*255,o*255,r*255]};i.xyz.lab=function(n){let c=n[0],s=n[1],t=n[2];c/=95.047,s/=100,t/=108.883,c=c>.008856?c**(1/3):7.787*c+16/116,s=s>.008856?s**(1/3):7.787*s+16/116,t=t>.008856?t**(1/3):7.787*t+16/116;const e=116*s-16,o=500*(c-s),r=200*(s-t);return[e,o,r]};i.lab.xyz=function(n){const c=n[0],s=n[1],t=n[2];let e,o,r;o=(c+16)/116,e=s/500+o,r=o-t/200;const l=o**3,a=e**3,u=r**3;return o=l>.008856?l:(o-16/116)/7.787,e=a>.008856?a:(e-16/116)/7.787,r=u>.008856?u:(r-16/116)/7.787,e*=95.047,o*=100,r*=108.883,[e,o,r]};i.lab.lch=function(n){const c=n[0],s=n[1],t=n[2];let e;e=Math.atan2(t,s)*360/2/Math.PI,e<0&&(e+=360);const r=Math.sqrt(s*s+t*t);return[c,r,e]};i.lch.lab=function(n){const c=n[0],s=n[1],e=n[2]/360*2*Math.PI,o=s*Math.cos(e),r=s*Math.sin(e);return[c,o,r]};i.rgb.ansi16=function(n,c=null){const[s,t,e]=n;let o=c===null?i.rgb.hsv(n)[2]:c;if(o=Math.round(o/50),o===0)return 30;let r=30+(Math.round(e/255)<<2|Math.round(t/255)<<1|Math.round(s/255));return o===2&&(r+=60),r};i.hsv.ansi16=function(n){return i.rgb.ansi16(i.hsv.rgb(n),n[2])};i.rgb.ansi256=function(n){const c=n[0],s=n[1],t=n[2];return c===s&&s===t?c<8?16:c>248?231:Math.round((c-8)/247*24)+232:16+36*Math.round(c/255*5)+6*Math.round(s/255*5)+Math.round(t/255*5)};i.ansi16.rgb=function(n){let c=n%10;if(c===0||c===7)return n>50&&(c+=3.5),c=c/10.5*255,[c,c,c];const s=(~~(n>50)+1)*.5,t=(c&1)*s*255,e=(c>>1&1)*s*255,o=(c>>2&1)*s*255;return[t,e,o]};i.ansi256.rgb=function(n){if(n>=232){const o=(n-232)*10+8;return[o,o,o]}n-=16;let c;const s=Math.floor(n/36)/5*255,t=Math.floor((c=n%36)/6)/5*255,e=c%6/5*255;return[s,t,e]};i.rgb.hex=function(n){const s=(((Math.round(n[0])&255)<<16)+((Math.round(n[1])&255)<<8)+(Math.round(n[2])&255)).toString(16).toUpperCase();return"000000".substring(s.length)+s};i.hex.rgb=function(n){const c=n.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!c)return[0,0,0];let s=c[0];c[0].length===3&&(s=s.split("").map(l=>l+l).join(""));const t=parseInt(s,16),e=t>>16&255,o=t>>8&255,r=t&255;return[e,o,r]};i.rgb.hcg=function(n){const c=n[0]/255,s=n[1]/255,t=n[2]/255,e=Math.max(Math.max(c,s),t),o=Math.min(Math.min(c,s),t),r=e-o;let l,a;return r<1?l=o/(1-r):l=0,r<=0?a=0:e===c?a=(s-t)/r%6:e===s?a=2+(t-c)/r:a=4+(c-s)/r,a/=6,a%=1,[a*360,r*100,l*100]};i.hsl.hcg=function(n){const c=n[1]/100,s=n[2]/100,t=s<.5?2*c*s:2*c*(1-s);let e=0;return t<1&&(e=(s-.5*t)/(1-t)),[n[0],t*100,e*100]};i.hsv.hcg=function(n){const c=n[1]/100,s=n[2]/100,t=c*s;let e=0;return t<1&&(e=(s-t)/(1-t)),[n[0],t*100,e*100]};i.hcg.rgb=function(n){const c=n[0]/360,s=n[1]/100,t=n[2]/100;if(s===0)return[t*255,t*255,t*255];const e=[0,0,0],o=c%1*6,r=o%1,l=1-r;let a=0;switch(Math.floor(o)){case 0:e[0]=1,e[1]=r,e[2]=0;break;case 1:e[0]=l,e[1]=1,e[2]=0;break;case 2:e[0]=0,e[1]=1,e[2]=r;break;case 3:e[0]=0,e[1]=l,e[2]=1;break;case 4:e[0]=r,e[1]=0,e[2]=1;break;default:e[0]=1,e[1]=0,e[2]=l}return a=(1-s)*t,[(s*e[0]+a)*255,(s*e[1]+a)*255,(s*e[2]+a)*255]};i.hcg.hsv=function(n){const c=n[1]/100,s=n[2]/100,t=c+s*(1-c);let e=0;return t>0&&(e=c/t),[n[0],e*100,t*100]};i.hcg.hsl=function(n){const c=n[1]/100,t=n[2]/100*(1-c)+.5*c;let e=0;return t>0&&t<.5?e=c/(2*t):t>=.5&&t<1&&(e=c/(2*(1-t))),[n[0],e*100,t*100]};i.hcg.hwb=function(n){const c=n[1]/100,s=n[2]/100,t=c+s*(1-c);return[n[0],(t-c)*100,(1-t)*100]};i.hwb.hcg=function(n){const c=n[1]/100,t=1-n[2]/100,e=t-c;let o=0;return e<1&&(o=(t-e)/(1-e)),[n[0],e*100,o*100]};i.apple.rgb=function(n){return[n[0]/65535*255,n[1]/65535*255,n[2]/65535*255]};i.rgb.apple=function(n){return[n[0]/255*65535,n[1]/255*65535,n[2]/255*65535]};i.gray.rgb=function(n){return[n[0]/100*255,n[0]/100*255,n[0]/100*255]};i.gray.hsl=function(n){return[0,0,n[0]]};i.gray.hsv=i.gray.hsl;i.gray.hwb=function(n){return[0,100,n[0]]};i.gray.cmyk=function(n){return[0,0,0,n[0]]};i.gray.lab=function(n){return[n[0],0,0]};i.gray.hex=function(n){const c=Math.round(n[0]/100*255)&255,t=((c<<16)+(c<<8)+c).toString(16).toUpperCase();return"000000".substring(t.length)+t};i.rgb.gray=function(n){return[(n[0]+n[1]+n[2])/3/255*100]};const d=v;function F(){const n={},c=Object.keys(d);for(let s=c.length,t=0;t<s;t++)n[c[t]]={distance:-1,parent:null};return n}function O(n){const c=F(),s=[n];for(c[n].distance=0;s.length;){const t=s.pop(),e=Object.keys(d[t]);for(let o=e.length,r=0;r<o;r++){const l=e[r],a=c[l];a.distance===-1&&(a.distance=c[t].distance+1,a.parent=t,s.unshift(l))}}return c}function z(n,c){return function(s){return c(n(s))}}function P(n,c){const s=[c[n].parent,n];let t=d[c[n].parent][n],e=c[n].parent;for(;c[e].parent;)s.unshift(c[e].parent),t=z(d[c[e].parent][e],t),e=c[e].parent;return t.conversion=s,t}var C=function(n){const c=O(n),s={},t=Object.keys(c);for(let e=t.length,o=0;o<e;o++){const r=t[o];c[r].parent!==null&&(s[r]=P(r,c))}return s};const y=v,S=C,b={},E=Object.keys(y);function _(n){const c=function(...s){const t=s[0];return t==null?t:(t.length>1&&(s=t),n(s))};return"conversion"in n&&(c.conversion=n.conversion),c}function $(n){const c=function(...s){const t=s[0];if(t==null)return t;t.length>1&&(s=t);const e=n(s);if(typeof e=="object")for(let o=e.length,r=0;r<o;r++)e[r]=Math.round(e[r]);return e};return"conversion"in n&&(c.conversion=n.conversion),c}E.forEach(n=>{b[n]={},Object.defineProperty(b[n],"channels",{value:y[n].channels}),Object.defineProperty(b[n],"labels",{value:y[n].labels});const c=S(n);Object.keys(c).forEach(t=>{const e=c[t];b[n][t]=$(e),b[n][t].raw=_(e)})});var p=b;const D=x(p),K=k({__proto__:null,default:D},[p]);export{K as c};
