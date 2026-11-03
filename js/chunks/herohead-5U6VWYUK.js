import{a as k}from"./chunk-Z42KT7OU.js";import"./chunk-IHRIUEAN.js";var ee="assets/hero/",Q=Array.from({length:9},(i,p)=>`${ee}head-${String(p).padStart(2,"0")}.webp`),X={desk:Q,phone:Q.slice(1,8),front:`${ee}head-04.webp`,aspect:.8},me="attribute vec2 p; varying vec2 v; void main(){ v = p*0.5+0.5; gl_Position = vec4(p,0.0,1.0); }",fe=`precision mediump float;
varying vec2 v;
uniform sampler2D uA, uB; uniform float uMix;
uniform vec2 uRes; uniform vec4 uRect; // head rect in px: centre.xy, size.wh
uniform vec2 uL;      // light direction (screen space, unit-ish), moves opposite the cursor
uniform vec2 uTilt;   // -1..1 pointer for a hint of perspective
uniform float uT, uZoom, uFade, uLite;
const vec3 GOLD = vec3(0.89,0.714,0.353);
const vec3 BG = vec3(0.0235,0.0235,0.0314);
vec4 tex(vec2 uv){
  if(uv.x<0.0||uv.y<0.0||uv.x>1.0||uv.y>1.0) return vec4(0.0);
  vec4 a = texture2D(uA, uv), b = texture2D(uB, uv);
  float e = smoothstep(0.0, 0.06, uv.x) * smoothstep(1.0, 0.94, uv.x) * smoothstep(1.0, 0.985, uv.y);
  vec4 m = mix(a, b, uMix) * e;   // rgb is shot on black; alpha is the silhouette matte
  m.rgb = max(m.rgb - 0.018, 0.0) * smoothstep(0.02, 0.55, m.a);
  return m;
}
float EDGE(vec2 uv){ return smoothstep(0.0, 0.06, uv.x) * smoothstep(1.0, 0.94, uv.x) * step(uv.y, 0.995) * step(0.0, uv.y); }
float A(vec2 uv){ vec2 c = clamp(uv, 0.0, 1.0); return mix(texture2D(uA,c).a, texture2D(uB,c).a, uMix) * EDGE(uv); }
void main(){
  vec2 px = v*uRes;
  vec2 q = (px - uRect.xy)/uRect.zw;            // -0.5..0.5 inside the head rect
  // a hint of 3D: the near side of the frame grows a touch (fake rotateY / rotateX)
  q.x *= 1.0 + uTilt.x*q.x*0.10; q.y *= 1.0 - uTilt.y*q.y*0.06;
  vec2 uv = vec2(q.x+0.5, 0.5-q.y);
  vec4 c = tex(uv);
  // ---- lighting -------------------------------------------------------------
  vec2 L = normalize(uL + vec2(0.0001));
  vec2 lu = vec2(L.x, -L.y);                    // light dir in uv space
  float px1 = 1.0/uRect.w;                      // one screen px in uv
  // rim: lit where the silhouette edge faces the light
  float o1 = A(uv - lu*px1*5.0), o2 = A(uv - lu*px1*11.0), o3 = A(uv - lu*px1*20.0);
  float rim = c.a * clamp(1.0 - (o1*0.5 + o2*0.3 + o3*0.2), 0.0, 1.0);
  rim *= smoothstep(0.06, 0.16, uv.x) * smoothstep(0.94, 0.84, uv.x);  // no rim on the frame's cut edges
  // broad key: a soft gold light washing across from the light side
  float side = dot(normalize(q*vec2(1.0,1.25) + vec2(0.0001)), L);
  float key = smoothstep(-0.35, 0.95, side);
  float lum = dot(c.rgb, vec3(0.299,0.587,0.114));
  vec3 lit = c.rgb * (0.30 + 0.95*key) + GOLD*lum*key*0.30*uLite;
  lit += GOLD*0.85*rim*rim*uLite + vec3(1.0,0.93,0.78)*pow(rim,3.0)*0.18*uLite;
  // bloom: a soft gold halo just outside the lit edge
  float g1 = A(uv + lu*px1*8.0), g2 = A(uv + lu*px1*22.0), g3 = A(uv + lu*px1*44.0);
  float halo = (1.0 - c.a) * (g1*0.5 + g2*0.3 + g3*0.2);
  // ---- background: studio haze behind the head + vignette ---------------------
  vec2 hz = (px - (uRect.xy + uL*uRect.zw*0.16)) / uRect.w;
  float haze = exp(-dot(hz,hz)*4.0) * 0.10;
  vec3 col = BG + GOLD*haze*uLite;
  // floor fade so the chest melts into the page (head only, never the background)
  float floorF = smoothstep(-0.52, -0.30, q.y);
  col = col*(1.0 - c.a*floorF) + lit*floorF;
  col += GOLD*halo*0.16*uLite*floorF;
  // vignette on the whole canvas
  vec2 vv = v - 0.5; col *= 1.0 - dot(vv,vv)*0.55;
  // fine film grain keeps the black from banding
  float n = fract(sin(dot(px + uT*61.0, vec2(12.9898,78.233)))*43758.5453);
  col += (n-0.5)*0.012;
  col = mix(BG, col, uFade);
  gl_FragColor = vec4(col, 1.0);
}`,d=(i,p,L)=>Math.max(p,Math.min(L,i)),B=i=>i*i*(3-2*i);function pe(i,p={}){let L=p.reduced??matchMedia("(prefers-reduced-motion: reduce)").matches,g=p.mobile??(matchMedia("(pointer: coarse)").matches||innerWidth<761);if(!i||L)return!1;let e=i.getContext("webgl",{antialias:!1,alpha:!1,premultipliedAlpha:!1,powerPreference:g?"low-power":"high-performance"});if(!e)return!1;let y=i.closest(".hero")||i.parentElement,I=(r,o)=>{let t=e.createShader(r);if(e.shaderSource(t,o),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS))throw new Error(e.getShaderInfoLog(t));return t},h;try{if(h=e.createProgram(),e.attachShader(h,I(e.VERTEX_SHADER,me)),e.attachShader(h,I(e.FRAGMENT_SHADER,fe)),e.linkProgram(h),!e.getProgramParameter(h,e.LINK_STATUS))throw new Error(e.getProgramInfoLog(h))}catch(r){return console.warn("hero head shader",r),!1}e.useProgram(h);let te=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,te),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW);let z=e.getAttribLocation(h,"p");e.enableVertexAttribArray(z),e.vertexAttribPointer(z,2,e.FLOAT,!1,0,0);let s={};["uA","uB","uMix","uRes","uRect","uL","uTilt","uT","uZoom","uFade","uLite"].forEach(r=>s[r]=e.getUniformLocation(h,r)),e.uniform1i(s.uA,0),e.uniform1i(s.uB,1);let q=g?X.phone:X.desk,f=q.length,A=(f-1)/2,R=new Array(f).fill(null),w=new Array(f).fill(null),O=r=>new Promise(o=>{let t=new Image;t.decoding="async",t.onload=()=>{R[r]=t,o(!0)},t.onerror=()=>o(!1),t.src=q[r]}),N=r=>{let o=r;for(let t=0;t<f&&!R[o];t++)o=r+(t%2?-(t+1>>1):t+1>>1),o=d(o,0,f-1);if(!R[o])return null;if(!w[o]){let t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,R[o]),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),w[o]=t}return w[o]},c=0,n=0,v=1,a={x:0,y:0,w:0,h:0},C=()=>{let r=i.getBoundingClientRect();c=r.width||innerWidth,n=r.height||innerHeight,v=Math.min(devicePixelRatio||1,g?1.5:1.75),i.width=Math.round(c*v),i.height=Math.round(n*v),e.viewport(0,0,i.width,i.height);let o,t,u;c<761?(o=Math.min(n*.64,c*1.3),t=c*.5,u=n-(n*.035+o*.5)-n*.3):c<1100?(o=n*.92,t=c*.66,u=n-o*.5+n*.02):(o=Math.min(n*.96,c*.62),t=c*.7,u=n-o*.5+n*.02),a.w=o*X.aspect,a.h=o,a.x=t,a.y=u};C(),addEventListener("resize",C);let x={a:0,y:0},l={a:0,y:0},b=-1e9,Y=!1,H=(r,o)=>{x.a=d((r-a.x)/(c*.42),-1,1),x.y=d((o-a.y+a.h*.18)/(n*.6),-1,1),b=performance.now()},M=g?!1:null;if(!g)addEventListener("pointermove",r=>{M=!0,H(r.clientX,r.clientY)},{passive:!0}),document.documentElement.addEventListener("pointerleave",()=>{M=!1});else{let r=t=>{t.gamma!=null&&(Y=!0,x.a=d(t.gamma/35,-1,1),x.y=d(((t.beta??45)-45)/40,-1,1),b=performance.now())},o=window.DeviceOrientationEvent;if(o&&typeof o.requestPermission=="function"){let t=()=>{o.requestPermission().then(u=>{u==="granted"&&addEventListener("deviceorientation",r,{passive:!0})}).catch(()=>{})};y.addEventListener("touchend",t,{once:!0,passive:!0})}else o&&addEventListener("deviceorientation",r,{passive:!0});y.addEventListener("touchmove",t=>{let u=t.touches[0];u&&!Y&&H(u.clientX,u.clientY)},{passive:!0})}let _=!0,D=!1,W=0,P=performance.now(),m=0,F=0,V=!1;new IntersectionObserver(([r])=>{_=r.isIntersecting,S()},{threshold:0}).observe(y),document.addEventListener("visibilitychange",S);function S(){!D&&_&&!document.hidden&&V&&(D=!0,P=performance.now(),W=requestAnimationFrame(Z))}function Z(r){if(!_||document.hidden){D=!1;return}let o=Math.min(.05,(r-P)/1e3);P=r,m+=o;let t=g?r-b>2600:!M,u=Math.sin(m*.9)*.025,oe=t?Math.sin(m*.33)*.32+Math.sin(m*.71)*.06:x.a+u,re=t?Math.sin(m*.5)*.15:x.y,j=1-Math.exp(-o*(t?1.6:5.5));l.a+=(oe-l.a)*j,l.y+=(re-l.y)*j,F=Math.min(1,F+o*1.4);let K=d(A+l.a*A,0,f-1),U=Math.floor(K),ie=Math.min(f-1,U+1),ne=B(d((K-U-.22)/.56,0,1)),G=N(U),ae=N(ie)||G;G&&(e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,G),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,ae));let E=k.active?k.zoom:0,T=E<.5?2*E*E:1-Math.pow(-2*E+2,2)/2,se=1+Math.sin(m*1.1)*.006,J=(1+T*.32)*se,ce=a.x+(c*.5-a.x)*T*.45-l.a*c*.012,ue=a.y+a.h*.06*T+l.y*n*.01+Math.sin(m*1.1)*1.5,le=-l.a*.95+(t?Math.sin(m*.21)*.15:0),he=.55-l.y*.35;e.uniform2f(s.uRes,i.width,i.height),e.uniform4f(s.uRect,ce*v,(n-ue)*v,a.w*J*v,a.h*J*v),e.uniform1f(s.uMix,ne),e.uniform2f(s.uL,le,he),e.uniform2f(s.uTilt,l.a*.6,l.y*.5),e.uniform1f(s.uT,m),e.uniform1f(s.uZoom,T),e.uniform1f(s.uFade,B(F)*(1-B(d((E-.45)/.4,0,1)))),e.uniform1f(s.uLite,1+T*.6),e.drawArrays(e.TRIANGLE_STRIP,0,4),W=requestAnimationFrame(Z)}let $=[...Array(f).keys()].sort((r,o)=>Math.abs(r-A)-Math.abs(o-A));return O($[0]).then(r=>{if(!r){i.classList.remove("is-on");return}V=!0,y.classList.add("has-head"),S(),$.slice(1).reduce((o,t)=>o.then(()=>O(t)),Promise.resolve())}),i.parentElement.classList.add("has-webgl"),!0}export{X as HEAD,pe as initHeroHead};
