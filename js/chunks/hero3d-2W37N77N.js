import{A as O,D as j,F as ne,J as re,K as oe,L as Z,M as se,N as ie,O as ae,P as ce,b as Y,d as W,g as N,i as $,j as q,l as J,m as L,n as H,q as K,w as Q,x as ee,z as te}from"./chunk-FAY4KSST.js";import{a as D}from"./chunk-Z42KT7OU.js";import"./chunk-IHRIUEAN.js";function le(c,M=1e-4){M=Math.max(M,Number.EPSILON);let v={},f=c.getIndex(),z=c.getAttribute("position"),R=f?f.count:z.count,t=0,l=Object.keys(c.attributes),n={},u={},S=[],y=["getX","getY","getZ","getW"],G=["setX","setY","setZ","setW"];for(let r=0,a=l.length;r<a;r++){let o=l[r],e=c.attributes[o];n[o]=new e.constructor(new e.array.constructor(e.count*e.itemSize),e.itemSize,e.normalized);let g=c.morphAttributes[o];g&&(u[o]||(u[o]=[]),g.forEach((s,m)=>{let x=new s.array.constructor(s.count*s.itemSize);u[o][m]=new s.constructor(x,s.itemSize,s.normalized)}))}let _=M*.5,X=Math.log10(1/M),B=Math.pow(10,X),C=_*B;for(let r=0;r<R;r++){let a=f?f.getX(r):r,o="";for(let e=0,g=l.length;e<g;e++){let s=l[e],m=c.getAttribute(s),x=m.itemSize;for(let w=0;w<x;w++)o+=`${Math.trunc(m[y[w]](a)*B+C)},`}if(o in v)S.push(v[o]);else{for(let e=0,g=l.length;e<g;e++){let s=l[e],m=c.getAttribute(s),x=c.morphAttributes[s],w=m.itemSize,F=n[s],I=u[s];for(let i=0;i<w;i++){let E=y[i],U=G[i];if(F[U](t,m[E](a)),x)for(let T=0,k=x.length;T<k;T++)I[T][U](t,x[T][E](a))}}v[o]=t,S.push(t),t++}}let b=c.clone();for(let r in c.attributes){let a=n[r];if(b.setAttribute(r,new a.constructor(a.array.slice(0,t*a.itemSize),a.itemSize,a.normalized)),r in u)for(let o=0;o<u[r].length;o++){let e=u[r][o];b.morphAttributes[r][o]=new e.constructor(e.array.slice(0,t*e.itemSize),e.itemSize,e.normalized)}}return b.setIndex(S),b}var fe=`
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy; i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857; vec3 ns=n_*D.wyz-D.xzx; vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_); vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw); vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3))); p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
uniform float uTime; uniform float uAmp; uniform vec3 uPointer;
vec3 displace(vec3 p){
  vec3 n = normalize(p);
  float t = uTime*0.22;
  float d = snoise(n*0.85 + vec3(t, t*0.7, -t*0.5))*0.62 + snoise(n*1.9 - vec3(t*0.8))*0.08;
  float pull = smoothstep(1.3, 0.0, distance(n, normalize(uPointer + vec3(0.0001))))*0.22;
  return n * (1.0 + (d + pull) * uAmp);
}`;function xe(c,M={}){let v=!!M.embed,f=re||oe(),z=se(c,{mobile:f});if(!z)return!1;v&&f&&z.setPixelRatio(Math.min(devicePixelRatio||1,1.25)),c.parentElement.classList.add("has-webgl");let R=new J,t=new ne(32,1,.1,100);t.position.set(0,0,9),R.environment=ie(z);let l=new q;R.add(l);let n=new q;l.add(n);let u={uTime:{value:0},uAmp:{value:f?.22:.26},uPointer:{value:new N(.3,.4,1)}},S=new j({color:15659510,metalness:1,roughness:.2,clearcoat:1,clearcoatRoughness:.12,iridescence:.2,iridescenceIOR:1.5,envMapIntensity:1.6});S.onBeforeCompile=p=>{Object.assign(p.uniforms,u),p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
`+fe).replace("#include <beginnormal_vertex>",`
        vec3 p0 = displace(position);
        vec3 tg = normalize(cross(normal, abs(normal.y) < 0.99 ? vec3(0.0,1.0,0.0) : vec3(1.0,0.0,0.0)));
        vec3 bt = normalize(cross(normal, tg));
        float e = 0.012;
        vec3 p1 = displace(position + tg*e); vec3 p2 = displace(position + bt*e);
        vec3 objectNormal = normalize(cross(p1 - p0, p2 - p0));
        if (dot(objectNormal, normal) < 0.0) objectNormal = -objectNormal;
        #ifdef USE_TANGENT
          vec3 objectTangent = vec3( tangent.xyz );
        #endif`).replace("#include <begin_vertex>","vec3 transformed = p0;")};let y=new Q(1.2,f?36:80);y.deleteAttribute("uv"),y.deleteAttribute("normal"),y=le(y),y.computeVertexNormals();let G=new H(y,S);n.add(G);let _=new j({color:16777215,metalness:1,roughness:.18,clearcoat:1,envMapIntensity:1.3}),X=new H(new O(1.95,.022,16,f?120:220),_);X.rotation.set(1.15,.25,0),n.add(X);let B=new H(new O(2.35,.006,8,200),new L({color:14923354,transparent:!0,opacity:.55,blending:Y}));B.rotation.set(1.45,-.5,.3),n.add(B);let C=new H(new te(.11,32,16),_);n.add(C);let b=document.createElement("canvas");b.width=b.height=128;let r=b.getContext("2d"),a=r.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(157,130,255,.55)"),a.addColorStop(.45,"rgba(121,238,255,.14)"),a.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=a,r.fillRect(0,0,128,128);let o=new K(b);o.colorSpace=W;let e=new H(new ee(9,9),new L({map:o,transparent:!0,depthWrite:!1,blending:Y}));e.position.z=-2.5,n.add(e);let g=ae(f?260:800,[18,11,10],0);R.add(g);let s=0,m=0,x=()=>{let p=c.getBoundingClientRect();if(s=p.width,m=p.height,z.setSize(s,m,!1),t.aspect=s/m,t.updateProjectionMatrix(),v){let h=2*t.position.z*Math.tan(t.fov*Math.PI/360),A=h*t.aspect;n.position.set(0,.1,0),n.scale.setScalar(Math.min(1.15,.94*A/4.7,.94*h/3.6))}else s<761?(n.position.set(.15,1.15,0),n.scale.setScalar(.74)):s<1100?(n.position.set(1.25,.25,0),n.scale.setScalar(.82)):(n.position.set(2.2,-.4,0),n.scale.setScalar(.96));w.copy(n.position)},w=new N,F=new N;x(),addEventListener("resize",x);let I={x:0,y:0},i={x:0,y:0},E=0,U=0,T=0;addEventListener("pointermove",p=>{let h=p.clientX/innerWidth*2-1,A=p.clientY/innerHeight*2-1;E=Math.min(1,E+Math.hypot(h-U,A-T)*2.2),U=h,T=A,I.x=h,I.y=A},{passive:!0});let k=0;addEventListener("scroll",()=>{k=Math.min(1,scrollY/(m||innerHeight))},{passive:!0});let d=0,ue=Z?.2:1,V=p=>{d+=p*ue,i.x+=(I.x-i.x)*.045,i.y+=(I.y-i.y)*.045,E*=.96,u.uTime.value=d*(1+E*1.5),u.uAmp.value=(f?.22:.26)+E*.1,u.uPointer.value.set(i.x*1.4,-i.y*1.4,1),G.rotation.y=d*.12+i.x*.45,G.rotation.x=Math.sin(d*.1)*.2+i.y*.3,X.rotation.z=d*.18,B.rotation.z=-d*.1,C.position.set(Math.cos(d*.5)*1.95,Math.sin(d*.5)*1.95*Math.cos(1.15),Math.sin(d*.5)*1.95*Math.sin(1.15)),C.position.applyEuler(new $(0,.25,0)),l.rotation.y+=(i.x*.22-l.rotation.y)*.06,l.rotation.x+=(i.y*.14-l.rotation.x)*.06;let h=0;if(D.active&&!v){let P=D.zoom;h=P<.5?2*P*P:1-Math.pow(-2*P+2,2)/2,n.position.lerpVectors(w,F,Math.min(1,h*1.6)),u.uAmp.value+=h*.14}let A=D.active||v?0:k;l.position.y=Math.sin(d*.6)*.06+A*1.4,l.position.z=-A*1.5,g.material.uniforms.uTime.value=d,g.rotation.y=i.x*.05,t.position.x+=(i.x*.25-t.position.x)*.04,t.position.y+=(-i.y*.18-t.position.y)*.04,t.position.z=9-h*7.3,t.lookAt(0,0,0),z.render(R,t)};return V(.016),v&&Z?(addEventListener("resize",()=>V(0)),!0):(ce(c,V),!0)}export{xe as initHero};
