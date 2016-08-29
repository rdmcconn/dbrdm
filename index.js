// -------------------------------------------------------------------
/* JavaScript Tooltip v2014.2.20. Copyright www.menucool.com */
// -------------------------------------------------------------------
var tooltipOptions=
{
    showDelay: 0,
    hideDelay: 100,
	effect: "fade",
    duration: 150,
    relativeTo: "element",
    position: 1,
    smartPosition: true,
    offsetX: -18,
    offsetY: -10,
    maxWidth: 1000,
    calloutSize: 9,
    calloutPosition: 0.4,
    sticky: false,
    overlay: false,
    license: "64628"
};

var tooltip=function(v){var h="length",Gb="addEventListener",T,ic,j=window,cc=function(){},sb=function(a,c,b){if(a[Gb])a[Gb](c,b,false);else a.attachEvent&&a.attachEvent("on"+c,b)},c={},L=function(a){if(a&&a.stopPropagation)a.stopPropagation();else j.event.cancelBubble=true},hc=function(a){var b=a?a:j.event;if(b.preventDefault)b.preventDefault();else a.returnValue=false},Yb=function(d){var a=d.childNodes,c=[];if(a)for(var b=0,e=a[h];b<e;b++)a[b].nodeType==1&&c.push(a[b]);return c},ab={a:0,b:0},g=null,dc=function(a){if(!a)a=j.event;ab.a=a.clientX;ab.b=a.clientY},ac=function(b){if(j.getComputedStyle)var c=j.getComputedStyle(b,null);else if(b.currentStyle)c=b.currentStyle;else c=b[a];return c},J="offsetLeft",M="offsetTop",rb="clientWidth",pb="clientHeight",C="appendChild",Y="display",q="border",E="opacity",K="createElement",nb="getElementsByTagName",y="parentNode",W="calloutSize",O="position",Hb="calloutPosition",l=Math.round,jb="overlay",z="sticky",V="hideDelay",eb="onmouseout",ib="onclick",Kb=function(){this.a=[];this.b=null},D="firstChild",xb=0,r=document,U="getElementById",R=navigator,N="innerHTML",n=function(a,b){return b?r[a](b):r[a]},Ib=function(){var c=50,b=R.userAgent,a;if((a=b.indexOf("MSIE "))!=-1)c=parseInt(b.substring(a+5,b.indexOf(".",a)));return c},wb=Ib()<9,Ab=R.msMaxTouchPoints||R.maxTouchPoints,cb="ontouchstart"in j||j.DocumentTouch&&document instanceof DocumentTouch,Lb=(R.msPointerEnabled||R.pointerEnabled)&&Ab;if(Lb)var Vb=R.msPointerEnabled?"onmspointerout":"onpointerOut";var Qb=function(a){return a.pointerType==a.MSPOINTER_TYPE_MOUSE||a.pointerType=="mouse"},x="marginTop",gb="marginLeft",o="offsetWidth",s="offsetHeight",vb="documentElement",X="borderColor",tb="nextSibling",a="style",B="visibility",F="width",t="left",p="top",Q="height",fc=["$1$2$3","$1$2$3","$1$24","$1$23","$1$22"],kb,ob,w=function(c,a,b){return setTimeout(c,a?a.showDelay:b)},db=function(a){clearTimeout(a);return null};Kb.prototype={d:{b:function(){},c:function(a){return-Math.cos(a*Math.PI)/2+.5}},e:function(g,e,i,f){for(var b=[],h=i-e,d=Math.ceil((k.duration||9)/15),a,c=1;c<=d;c++){a=e+f.c(c/d)*h;if(g!=E)a=l(a);b.push(a)}b.d=0;return b},f:function(){this.b==null&&this.g()},g:function(){this.h();var a=this;this.b=j.setInterval(function(){a.h()},15)},h:function(){var a=this.a[h];if(a){for(var c=0;c<a;c++)this.i(this.a[c]);while(a--){var b=this.a[a];if(b.c.d==b.c[h]){b.d();this.a.splice(a,1)}}}else{j.clearInterval(this.b);this.b=null}},i:function(b){if(b.c.d<b.c[h]){var d=b.b,c=b.c[b.c.d];if(b.b==E){b.a.op=c;if(wb){d="filter";c="alpha(opacity="+l(c*100)+")"}}else c+="px";b.a[a][d]=c;b.c.d++}},j:function(e,b,d,f,a){a=this.k(this.d,a);var c=this.e(b,d,f,a);this.a.push({a:e,b:b,c:c,d:a.b});this.f()},k:function(c,b){b=b||{};var a,d={};for(a in c)d[a]=b[a]!==undefined?b[a]:c[a];return d}};var hb=new Kb,i=function(d,b,c,e,a){hb.j(d,b,c,e,a)},gc=function(b){var a=[],c=b[h];while(c--)a.push(String.fromCharCode(b[c]));return a.join("")},ec=[/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/,/.*([\w\-])\.(\w)(\w)\.[^.]+$/,/^(?:.*\.)?(\w)(\w)\.[^.]+$/,/.*([\w\-])([\w\-])\.com\.[^.]+$/,/^(\w)[^.]*(\w)$/],lb=function(d,a){var c=[];if(xb)return xb;for(var b=0;b<d[h];b++)c[c[h]]=String.fromCharCode(d.charCodeAt(b)-(a&&a>7?a:3));return c.join("")},Ob=function(a){return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/,"$1$3$2")},Sb=function(e,c){var d=function(a){for(var c=a.substr(0,a[h]-1),e=a.substr(a[h]-1,1),d="",b=0;b<c[h];b++)d+=c.charCodeAt(b)-e;return unescape(d)},a=Ob(r.domain)+Math.random(),b=d(a);ob="%66%75%6E%63%74%69%6F%6E%20%71%51%28%73%2C%6B%29%7B%76%61%72%20%72%3D%27%27%3B%66%6F%72%28%76%61%72%20%69%";if(b[h]==39)try{a=(new Function("$","_",lb(ob))).apply(this,[b,c]);ob=a}catch(f){}},bc=function(c,a){var b=function(b){var a=b.charCodeAt(0).toString();return a.substring(a[h]-1)};return c+b(a[parseInt(lb("4"))])+a[2]+b(a[0])},d,b,e,Z,f,Nb,k,P=null,A=null,S=0,qb=function(){if(P!=null)P=db(P)},u=function(){if(A!=null)A=db(A)},fb=function(b,c){if(b){b.op=c;if(wb)b[a].filter="alpha(opacity="+c*100+")";else b[a][E]=c}},Pb=function(a,c,b,d,g,e,h,f){xf=b>=a;yf=d>=c;var k=xf?b-a<g:a-b<h,l=yf?d-c<e:c-d<f,i=k?b-a:xf?g:-h,j=l?d-c:yf?e:-f;if(k&&l)if(Math.abs(i)>Math.abs(j))i=xf?g:-h;else j=yf?e:-f;return[i,j]},Zb=function(l,g,k){bb(b,1);var c=n(K,"div");c[a][F]=l+"px";e=n(K,"div");fb(e,0);e.className="mcTooltipInner";if(k==1){e[N]=g;var f=1}else{var d=n(U,g);if(d[y].sw)e=d[y];else{e.sw=d[y];e[C](d);f=1}}if(wb){var i=e[nb]("select"),j=i[h];while(j--)i[j][eb]=L}c[C](e);b[C](c);e[a][F]=e[o]+(f?1:0)+"px";e[a][Q]=e[s]+(f?1:0)+"px";e[a][t]=e[a][p]="auto";e=b.insertBefore(e,b[D]);e[a][O]="absolute";c=b.removeChild(c);c=null;delete c;return e},Rb=function(a){if(a.sw){a.sw[C](a);fb(a,1)}else{a=a[y].removeChild(a);a=null;delete a}},bb=function(b,c){for(var a=c;a<b.childNodes[h];a++)Rb(b.childNodes[a])},Ub=function(){d.cO=0;d[a][B]=f[a][B]=Z[a][B]="hidden";d[a][Y]="none";if(g.Q)g.Q[a][Y]="none";bb(b,0)},Fb=function(a){qb();u();if(a&&d.cO==a)if(S)return 0;S=0;return 1},m=null,Xb={a:function(d,b,a){var e=null,f=null,i=null,c="html";if(a){f=a.success||null;c=a.responseType||"html";e=a.context&&f?a.context:null;i=a.fail||null}m=this.b();m.onreadystatechange=function(){if(m&&m.readyState===4){u();if(m.status===200){if(k==d&&P){u();var j=c.toLowerCase()=="xml"?m.responseXML:m.responseText,l=j;if(c.toLowerCase()=="json")l=eval("("+j+")");if(c=="html"){var p=b.match(/.+#([^?]+)/);if(p){var s=function(e,b){var d=null;if(b.id==e)return b;for(var c=b[nb]("*"),a=0,f=c[h];a<f;a++)if(c[a].id==e){d=c[a];break}return d},o=r[K]("div");o[N]=j;var n=s(p[1],o);if(n)j=l=n[N];o=null}if(!n){var q=j.split(/<\/?body[^>]*>/i);if(q[h]>1)j=l=q[1]}}if(f)j=a.success(l,e);g.f(d,j,1)}}else if(i)g.f(d,i(e),1);else g.f(d,"Failed to get data.",1);m=null}};if(b.indexOf("#")!=-1&&Ib()<19)b=b.replace("#","?#");m.open("GET",b,true);m.send(null)},b:function(){var a;try{if(j.XMLHttpRequest)a=new XMLHttpRequest;else a=new ActiveXObject("Microsoft.XMLHTTP")}catch(b){throw new Error("AJAX not supported.");}return a}},Mb=function(){d=n(K,"div");d.id="mcTooltipWrapper";d[N]='<div id="mcTooltip"><div>&nbsp;</div></div><div id="mcttCo"><em></em><b></b></div><div id="mcttCloseButton"></div>';kb=r.body;var a=r[nb]("FORM");Nb=a[h]&&a[0][o]?a[0]:kb;Nb[C](d);b=d[D];d.cW=d.cH=d.cO=0;this.a(v);Sb(d,c.a);Z=d.lastChild;f=b[tb];this.c(v[O],v[W]);var e=this.k();T=function(a){u();e.i();L(a)};Z[ib]=T;this.l();this.Q[ib]=function(a){if(k[jb]!==1)T(a);else L(a)};b[eb]=function(){P!=1&&qb();!k[z]&&e.h(k[V])};b[ib]=L;if(cb)b[ib]=function(a){k[z]!==1&&T(a)};sb(r,"click",function(a){if(k&&k[z]!==1)A=w(function(){T(a)},0,k[V]+100)});fb(d,0)},jc=function(a){return a[y]?a[y].nodeName.toLowerCase()!="form"?this.o(a[y]):a[y]:null},G=function(c,b){var a=c.getBoundingClientRect();return b?a[p]:a[t]},H=function(b){return b?r[vb][pb]:r[vb][rb]},Wb=function(){var a=r[vb];return[j.pageXOffset||a.scrollLeft,j.pageYOffset||a.scrollTop]},Tb=function(f,e,a,b){var d=H(0),c=H(1);if(a+f>d)a=d-f;if(a<0)a=0;if(b+e>c)b=c-e;if(b<0)b=0;return{l:a,t:b}};Mb.prototype={j:function(n,i){var l=i*2+"px",m=c.b+i+"px",h=c.b+"px",j,k,e;j=k=e="";var g=f[D],d=f.lastChild;b[a][X]=g[a][X]=c.d;b[a].backgroundColor=d[a][X]=c.c;switch(n){case 0:case 2:j="Left";k="Right";f[a][F]=l;f[a][Q]=m;d[a][gb]=d[a].marginRight="auto";break;case 3:default:j="Top";k="Bottom";f[a][F]=m;f[a][Q]=l}switch(n){case 0:e="Top";f[a][x]="-"+h;g[a][x]=h;d[a][x]="-"+m;break;case 2:e="Bottom";f[a][x]=h;g[a][x]="-"+h;d[a][x]=-(i-c.b)+"px";break;case 3:e="Left";f[a][gb]="-"+h;g[a][gb]=h;d[a][x]="-"+l;break;default:e="Right";f[a].marginRight="-"+h;d[a][x]="-"+l;d[a][gb]=h}g[a][q+j]=g[a][q+k]=d[a][q+j]=d[a][q+k]="dashed "+i+"px transparent";g[a][q+e+"Style"]=d[a][q+e+"Style"]="solid";g[a][q+e+"Width"]=d[a][q+e+"Width"]=i+"px"},c:function(e,b){c.e=e;c.f=b;d[a].padding=c.f+"px";this.j(c.e,c.f)},d:function(a,c,b){if(Fb(a))A=w(function(){g.f(a,c,b)},a)},e:function(a,c,b){if(Fb(a))A=w(function(){g.g(a,c,b)},a)},a:function(g){var d=1,f="#FBF5E6",e="#CFB57C",a=ac(b);d=parseInt(a.borderLeftWidth);f=a.backgroundColor;e=a.borderLeftColor;c={a:g.license||"4321",b:d,c:f,d:e,l:b[rb]-b[D][o],m:b[pb]-b[D][s]}},f:function(h,x,w){u();hb.a=[];if(this.Q)this.Q[a][Y]=h[jb]?"block":"none";Z[a][B]=h[z]?"visible":"hidden";if(cb)Z[a][B]="visible";var g=this.n(h,x,w);if(d.cO){i(d,t,d[J],g.l);i(d,p,d[M],g.t);i(b,F,b.cW,b.tw);i(b,Q,b.cH,b.th);i(f,t,f[J],g.x);i(f,p,f[M],g.y)}else if(c.e==4){var y=G(h,0),A=G(h,1);i(d,t,y,g.l);i(d,p,A,g.t);i(b,F,h[o],b.tw);i(b,Q,h[s],b.th)}else{if(c.e>4)i(d,p,g.t+6,g.t);else d[a][p]=g.t+"px";d[a][t]=g.l+"px";b[a][F]=b.tw+"px";b[a][Q]=b.th+"px";f[a][t]=g.x+"px";f[a][p]=g.y+"px"}if(h.effect=="slide"){var j,k;if(!d.cO&&c.e<4){switch(c.e){case 0:j=0;k=1;break;case 1:j=-1;k=0;break;case 2:j=0;k=-1;break;case 3:j=1;k=0}var m=[j*e[o],k*e[s]]}else{if(!d.cO&&c.e>3){j=h[J];k=h[M]}else{j=d[J];k=d[M];if(c.e>3){j+=d.cO[J]-h[J];k+=d.cO[M]-h[M]}}var r=c.l+c.b+c.b,v=c.m+c.b+c.b;m=Pb(j,k,g.l,g.t,b.cW+r,b.cH+v,b.tw+r,b.th+v)}var n=c.l/2,q=c.m/2;i(e,t,m[0]+n,n);i(e,p,m[1]+q,q);var l=e[tb];if(l){i(l,t,n,-m[0]+n,{b:function(){bb(b,1)}});i(l,p,q,-m[1]+q)}fb(e,1)}else{i(e,E,0,1,{b:function(){bb(b,1)}});var l=e[tb];l&&i(l,E,l.op,0)}i(d,E,d.op,1);d.cO=h},g:function(a,c,b){m=null;A=w(function(){g.f(a,'<div id="tooltipAjaxSpin">&nbsp;</div>',1)},a);P=1;Xb.a(a,c,b)},h:function(a){u();A=w(function(){g.i()},0,a)},i:function(){qb();hb.a=[];hb.j(d,E,d.op,0,{b:Ub})},l:function(){if(n(U,"mcOverlay")==null){this.Q=n(K,"div");this.Q.id="mcOverlay";kb[C](this.Q);this.Q[a][O]="fixed"}},m:function(g,e){if(g!=c.e||e!=c.f){var b=f[D],d=f.lastChild;b[a].margin=d[a].margin=f[a].margin=b[a][q]=d[a][q]="0";b[a][X]=c.d;d[a][X]=c.c;this.c(g,e)}},k:function(){return(new Function("a","b","c","d","e","f","g","h","i",function(d){var c=[];b.onmouseover=function(a){!k[z]&&u();L(a)};for(var a=0,e=d[h];a<e;a++)c[c[h]]=String.fromCharCode(d.charCodeAt(a)-4);return c.join("")}("zev$pAi,k,g,+kvthpu+0405--\u0080\u0080+6+-?zev$qAe2e\u0080\u0080+55+0rAtevwiMrx,q2glevEx,4--0sA,,k,g,+kvthpu+0405--\u0080\u0080+px+-2vitpegi,h_r16a0l_r16a--2wtpmx,++-?mj,e2e%Aj,r/+8+0s--qAQexl_g,+yhukvt+-a,-?mj,q@259-wixXmqisyx,jyrgxmsr,-m,40g,+Ch'oylmD.o{{wA66~~~5tlu|jvvs5jvt6.E[vvs{pw'W|yjohzl'YltpuklyC6hE+-0tswmxmsr>:\u0081-?\u008106444-?\u0081\u0081vixyvr$xlmw?"))).apply(this,[c,D,lb,ec,Ob,bc,n,fc,mb])},n:function(g,p,n){d[a][Y]="block";b.cW=b[rb]-c.l;b.cH=b[pb]-c.m;e=Zb(g.maxWidth,p,n);b.tw=e[o];b.th=e[s];var l=b.tw+c.l+c.b+c.b,k=b.th+c.m+c.b+c.b,i=this.p(g,l,k);if(g.smartPosition)var f=Tb(l+c.f,k+c.f,i.x,i.y);else f={l:i.x,t:i.y};var h=g[O],j=this.u(h,g[Hb],l,k);if(g.smartPosition){if(h==0||h==2)j[0]-=f.l-i.x;if(h==1||h==3)j[1]-=f.t-i.y}this.m(h,g[W]);var m=Wb();f.l=f.l+m[0];f.t=f.t+m[1];f.x=j[0];f.y=j[1];d[a][B]="visible";return f},p:function(a,r,q){var b,d,g,f,p=a[O],m=a[Hb];if(p<4)if(a.nodeType!=1)b=d=g=f=0;else if(a.relativeTo=="mouse"){b=ab.a;d=ab.b;if(ab.a==null){b=G(a,0)+l(a[o]/2);d=G(a,1)+l(a[s]/2)}g=0;f=0}else{var i=a,e=Yb(a);if(e[h]){e=e[0];if(e[o]>=a[o]||e[s]>=a[s])i=e}b=G(i,0);d=G(i,1);g=i[o];f=i[s]}var n=20,k=r+2*a[W],j=q+2*a[W];switch(p){case 0:b+=l(g/2-k*m);d-=j+n;break;case 2:b+=l(g/2-k*m);d+=f+n;break;case 3:b-=k+n;d+=l(f/2-j*m);break;case 4:b=l((H(0)-k)/2);d=l((H(1)-j)/2);break;case 5:b=d=0;break;case 6:b=H(0)-k-Math.ceil(c.l/2);d=H(1)-j-Math.ceil(c.m/2);break;case 1:default:b+=g+n;d+=l(f/2-j*m)}return{x:b+a.offsetX,y:d+a.offsetY}},u:function(h,d,g,e){if(h<4)f[a][B]="visible";var b;switch(h){case 0:b=[g*d,l(e+c.f)];break;case 1:b=[0,e*d];break;case 2:b=[g*d,0];break;case 3:b=[l(g+c.f),e*d];break;default:b=[0,0];f[a][B]="hidden"}return b}};var Db=function(){if(g==null){if(typeof console!=="undefined"&&typeof console.log==="function"){var a=console.log;console.log=function(){a.call(this,++xb,arguments)}}g=new Mb;if(a)console.log=a}if(k&&k.id=="mcttDummy"&&d[N].indexOf(lb("kdvh#Uh"))!=-1)g.i=cc;return g},yb=function(d,c,b){b=b||{};var a;for(a in c)d[a]=b[a]!==undefined?b[a]:c[a]},ub=0,I,Jb=function(b){if(!b){b=n(U,"mcttDummy");if(!b){b=n(K,"");b.id="mcttDummy";b[a][Y]="";kb[C](b)}}if(typeof b==="string")b=n(U,b);k=b;return b},zb=function(b,a){return cb&&b.target==a?0:1},Bb=function(a,b){yb(a,v,b);if(Ab||cb){a.showDelay=1;a[V]=30}if(a[jb])if(!a[z])a[z]=a[jb];sb(a,"click",L);if(a[z])a[eb]=function(a){if(zb(a,this)){S=1;u()}};else if(Lb)a[Vb]=function(a){if(Qb(a)){S=1;g.h(this[V])}};else a[eb]=function(a){if(zb(a,this)){S=1;g.h(this[V])}};if(a.relativeTo=="mouse")a.onmousemove=dc;a.set=1},mb=function(a,c,f){a=Jb(a);var b=0;if(c.charAt(0)=="#"){if(c[h]>2&&c.charAt(1)=="#")b=2;else b=1;var d=c.substring(b),e=n(U,d);if(e){if(b==2)c=e[N]}else b=-1}if(!a||!g||b==-1){if(++ub<40)I=w(function(){mb(a,c,f)},0,90)}else{I=db(I);!a.set&&Bb(a,f);if(b==1)g.d(a,d,2);else g.d(a,c,1)}},Cb=function(a,d,b,c){a=Jb(a);if(!a||!g){if(++ub<40)I=w(function(){Cb(a,d,b,c)},0,90)}else{I=db(I);!a.set&&Bb(a,c);g.e(a,d,b)}};sb(j,"load",Db);var Eb=function(a){if(++ub<20)if(!g)w(function(){Eb(a)},0,90);else{yb(v,v,a);g.m(v[O],v[W])}};return{changeOptions:function(options){Eb(options)},pop:function(elm,text,options){mb(elm,text,options)},ajax:function(elm,url,ajaxSettings,options){Cb(elm,url,ajaxSettings,options)},hide:function(){var a=Db();a.i()}}}(tooltipOptions)
	




// -------------------------------------------------------------------
// DHTML Window Widget- By Dynamic Drive, available at: http://www.dynamicdrive.com
// v1.0: Script created Feb 15th, 07'
// v1.01: Feb 21th, 07' (see changelog.txt)
// v1.02: March 26th, 07' (see changelog.txt)
// v1.03: May 5th, 07' (see changelog.txt)
// v1.1:  Oct 29th, 07' (see changelog.txt)
// -------------------------------------------------------------------

var dhtmlwindow={
imagefiles:['images/trans.png', 'images/rhw_close.png', 'images/trans.png', 'images/trans.png'], //Path to 4 images used by script, in that order
ajaxbustcache: true, //Bust caching when fetching a file via Ajax?
ajaxloadinghtml: '<b>Loading Page. Please wait...</b>', //HTML to show while window fetches Ajax Content?

minimizeorder: 0,
zIndexvalue:100,
tobjects: [], //object to contain references to dhtml window divs, for cleanup purposes
lastactivet: {}, //reference to last active DHTML window

init:function(t){
	var domwindow=document.createElement("div") //create dhtml window div
	domwindow.id=t
	domwindow.className="dhtmlwindow"
	var domwindowdata=''
	domwindowdata='<div class="drag-handle">'
	domwindowdata+='DHTML Window <div class="drag-controls"><img src="'+this.imagefiles[0]+'" title="Minimize" /><img src="'+this.imagefiles[1]+'" title=" " /></div>'
	domwindowdata+='</div>'
	domwindowdata+='<div class="drag-contentarea"></div>'
	domwindowdata+='<div class="drag-statusarea"><div class="drag-resizearea" style="background: transparent url('+this.imagefiles[3]+') top right no-repeat;">&nbsp;</div></div>'
	domwindowdata+='</div>'
	domwindow.innerHTML=domwindowdata
	document.getElementById("dhtmlwindowholder").appendChild(domwindow)
	//this.zIndexvalue=(this.zIndexvalue)? this.zIndexvalue+1 : 100 //z-index value for DHTML window: starts at 0, increments whenever a window has focus
	var t=document.getElementById(t)
	var divs=t.getElementsByTagName("div")
	for (var i=0; i<divs.length; i++){ //go through divs inside dhtml window and extract all those with class="drag-" prefix
		if (/drag-/.test(divs[i].className))
			t[divs[i].className.replace(/drag-/, "")]=divs[i] //take out the "drag-" prefix for shorter access by name
	}
	//t.style.zIndex=this.zIndexvalue //set z-index of this dhtml window
	t.handle._parent=t //store back reference to dhtml window
	t.resizearea._parent=t //same
	t.controls._parent=t //same
	t.onclose=function(){return true} //custom event handler "onclose"
	t.onmousedown=function(){dhtmlwindow.setfocus(this)} //Increase z-index of window when focus is on it
	t.handle.onmousedown=dhtmlwindow.setupdrag //set up drag behavior when mouse down on handle div
	t.resizearea.onmousedown=dhtmlwindow.setupdrag //set up drag behavior when mouse down on resize div
	t.controls.onclick=dhtmlwindow.enablecontrols
	t.show=function(){dhtmlwindow.show(this)} //public function for showing dhtml window
	t.hide=function(){dhtmlwindow.hide(this)} //public function for hiding dhtml window
	t.close=function(){dhtmlwindow.close(this)} //public function for closing dhtml window (also empties DHTML window content)
	t.setSize=function(w, h){dhtmlwindow.setSize(this, w, h)} //public function for setting window dimensions
	t.moveTo=function(x, y){dhtmlwindow.moveTo(this, x, y)} //public function for moving dhtml window (relative to viewpoint)
	t.isResize=function(bol){dhtmlwindow.isResize(this, bol)} //public function for specifying if window is resizable
	t.isScrolling=function(bol){dhtmlwindow.isScrolling(this, bol)} //public function for specifying if window content contains scrollbars
	t.load=function(contenttype, contentsource, title){dhtmlwindow.load(this, contenttype, contentsource, title)} //public function for loading content into window
	this.tobjects[this.tobjects.length]=t
	return t //return reference to dhtml window div
},

open:function(t, contenttype, contentsource, title, attr, recalonload){
	var d=dhtmlwindow //reference dhtml window object
	function getValue(Name){
		var config=new RegExp(Name+"=([^,]+)", "i") //get name/value config pair (ie: width=400px,)
		return (config.test(attr))? parseInt(RegExp.$1) : 0 //return value portion (int), or 0 (false) if none found
	}
	if (document.getElementById(t)==null) //if window doesn't exist yet, create it
		t=this.init(t) //return reference to dhtml window div
	else
		t=document.getElementById(t)
	this.setfocus(t)
	t.setSize(getValue(("width")), (getValue("height"))) //Set dimensions of window
	var xpos=getValue("center")? "middle" : getValue("left") //Get x coord of window
	var ypos=getValue("center")? "middle" : getValue("top") //Get y coord of window
	//t.moveTo(xpos, ypos) //Position window
	if (typeof recalonload!="undefined" && recalonload=="recal" && this.scroll_top==0){ //reposition window when page fully loads with updated window viewpoints?
		if (window.attachEvent && !window.opera) //In IE, add another 400 milisecs on page load (viewpoint properties may return 0 b4 then)
			this.addEvent(window, function(){setTimeout(function(){t.moveTo(xpos, ypos)}, 400)}, "load")
		else
			this.addEvent(window, function(){t.moveTo(xpos, ypos)}, "load")
	}
	t.isResize(getValue("resize")) //Set whether window is resizable
	t.isScrolling(getValue("scrolling")) //Set whether window should contain scrollbars
	t.style.visibility="visible"
	t.style.display="block"
	t.contentarea.style.display="block"
	t.moveTo(xpos, ypos) //Position window
	t.load(contenttype, contentsource, title)
	if (t.state=="minimized" && t.controls.firstChild.title=="Restore"){ //If window exists and is currently minimized?
		t.controls.firstChild.setAttribute("src", dhtmlwindow.imagefiles[0]) //Change "restore" icon within window interface to "minimize" icon
		t.controls.firstChild.setAttribute("title", "Minimize")
		t.state="fullview" //indicate the state of the window as being "fullview"
	}
	return t
},

setSize:function(t, w, h){ //set window size (min is 150px wide by 100px tall)
	t.style.width=Math.max(parseInt(w), 150)+"px"
	t.contentarea.style.height=Math.max(parseInt(h), 100)+"px"
},

moveTo:function(t, x, y){ //move window. Position includes current viewpoint of document
	this.getviewpoint() //Get current viewpoint numbers
	t.style.left=(x=="middle")? this.scroll_left+(this.docwidth-t.offsetWidth)/2+"px" : this.scroll_left+parseInt(x)+"px"
	t.style.top=(y=="middle")? this.scroll_top+(this.docheight-t.offsetHeight)/2+"px" : this.scroll_top+parseInt(y)+"px"
},

isResize:function(t, bol){ //show or hide resize inteface (part of the status bar)
	t.statusarea.style.display=(bol)? "block" : "none"
	t.resizeBool=(bol)? 1 : 0
},

isScrolling:function(t, bol){ //set whether loaded content contains scrollbars
	t.contentarea.style.overflow=(bol)? "auto" : "hidden"
},

load:function(t, contenttype, contentsource, title){ //loads content into window plus set its title (3 content types: "inline", "iframe", or "ajax")
	if (t.isClosed){
		alert("DHTML Window has been closed, so no window to load contents into. Open/Create the window again.")
		return
	}
	var contenttype=contenttype.toLowerCase() //convert string to lower case
	if (typeof title!="undefined")
		t.handle.firstChild.nodeValue=title
	if (contenttype=="inline")
		t.contentarea.innerHTML=contentsource
	else if (contenttype=="div"){
		var inlinedivref=document.getElementById(contentsource)
		t.contentarea.innerHTML=(inlinedivref.defaultHTML || inlinedivref.innerHTML) //Populate window with contents of inline div on page
		if (!inlinedivref.defaultHTML)
			inlinedivref.defaultHTML=inlinedivref.innerHTML //save HTML within inline DIV
		inlinedivref.innerHTML="" //then, remove HTML within inline DIV (to prevent duplicate IDs, NAME attributes etc in contents of DHTML window
		inlinedivref.style.display="none" //hide that div
	}
	else if (contenttype=="iframe"){
		t.contentarea.style.overflow="hidden" //disable window scrollbars, as iframe already contains scrollbars
		if (!t.contentarea.firstChild || t.contentarea.firstChild.tagName!="IFRAME") //If iframe tag doesn't exist already, create it first
			t.contentarea.innerHTML='<iframe src="" style="margin:0; padding:0; width:100%; height: 100%" name="_iframe-'+t.id+'"></iframe>'
		window.frames["_iframe-"+t.id].location.replace(contentsource) //set location of iframe window to specified URL
		}
	else if (contenttype=="ajax"){
		this.ajax_connect(contentsource, t) //populate window with external contents fetched via Ajax
	}
	t.contentarea.datatype=contenttype //store contenttype of current window for future reference
},

setupdrag:function(e){
	var d=dhtmlwindow //reference dhtml window object
	var t=this._parent //reference dhtml window div
	d.etarget=this //remember div mouse is currently held down on ("handle" or "resize" div)
	var e=window.event || e
	d.initmousex=e.clientX //store x position of mouse onmousedown
	d.initmousey=e.clientY
	d.initx=parseInt(t.offsetLeft) //store offset x of window div onmousedown
	d.inity=parseInt(t.offsetTop)
	d.width=parseInt(t.offsetWidth) //store width of window div
	d.contentheight=parseInt(t.contentarea.offsetHeight) //store height of window div's content div
	if (t.contentarea.datatype=="iframe"){ //if content of this window div is "iframe"
		t.style.backgroundColor="#F8F8F8" //colorize and hide content div (while window is being dragged)
		t.contentarea.style.visibility="hidden"
	}
	document.onmousemove=d.getdistance //get distance travelled by mouse as it moves
	document.onmouseup=function(){
		if (t.contentarea.datatype=="iframe"){ //restore color and visibility of content div onmouseup
			t.contentarea.style.backgroundColor="white"
			t.contentarea.style.visibility="visible"
		}
		d.stop()
	}
	return false
},

getdistance:function(e){
	var d=dhtmlwindow
	var etarget=d.etarget
	var e=window.event || e
	d.distancex=e.clientX-d.initmousex //horizontal distance travelled relative to starting point
	d.distancey=e.clientY-d.initmousey
	if (etarget.className=="drag-handle") //if target element is "handle" div
		d.move(etarget._parent, e)
	else if (etarget.className=="drag-resizearea") //if target element is "resize" div
		d.resize(etarget._parent, e)
	return false //cancel default dragging behavior
},

getviewpoint:function(){ //get window viewpoint numbers
	var ie=document.all && !window.opera
	var domclientWidth=document.documentElement && parseInt(document.documentElement.clientWidth) || 100000 //Preliminary doc width in non IE browsers
	this.standardbody=(document.compatMode=="CSS1Compat")? document.documentElement : document.body //create reference to common "body" across doctypes
	this.scroll_top=(ie)? this.standardbody.scrollTop : window.pageYOffset
	this.scroll_left=(ie)? this.standardbody.scrollLeft : window.pageXOffset
	this.docwidth=(ie)? this.standardbody.clientWidth : (/Safari/i.test(navigator.userAgent))? window.innerWidth : Math.min(domclientWidth, window.innerWidth-16)
	this.docheight=(ie)? this.standardbody.clientHeight: window.innerHeight
},

rememberattrs:function(t){ //remember certain attributes of the window when it's minimized or closed, such as dimensions, position on page
	this.getviewpoint() //Get current window viewpoint numbers
	t.lastx=parseInt((t.style.left || t.offsetLeft))-dhtmlwindow.scroll_left //store last known x coord of window just before minimizing
	t.lasty=parseInt((t.style.top || t.offsetTop))-dhtmlwindow.scroll_top
	t.lastwidth=parseInt(t.style.width) //store last known width of window just before minimizing/ closing
},

move:function(t, e){
	t.style.left=dhtmlwindow.distancex+dhtmlwindow.initx+"px"
	t.style.top=dhtmlwindow.distancey+dhtmlwindow.inity+"px"
},

resize:function(t, e){
	t.style.width=Math.max(dhtmlwindow.width+dhtmlwindow.distancex, 150)+"px"
	t.contentarea.style.height=Math.max(dhtmlwindow.contentheight+dhtmlwindow.distancey, 100)+"px"
},

enablecontrols:function(e){
	var d=dhtmlwindow
	var sourceobj=window.event? window.event.srcElement : e.target //Get element within "handle" div mouse is currently on (the controls)
	if (/Minimize/i.test(sourceobj.getAttribute("title"))) //if this is the "minimize" control
		d.minimize(sourceobj, this._parent)
	else if (/Restore/i.test(sourceobj.getAttribute("title"))) //if this is the "restore" control
		d.restore(sourceobj, this._parent)
	else if (/ /i.test(sourceobj.getAttribute("title"))) //if this is the "close" control
		d.close(this._parent)
	return false
},

minimize:function(button, t){
	dhtmlwindow.rememberattrs(t)
	button.setAttribute("src", dhtmlwindow.imagefiles[2])
	button.setAttribute("title", "Restore")
	t.state="minimized" //indicate the state of the window as being "minimized"
	t.contentarea.style.display="none"
	t.statusarea.style.display="none"
	if (typeof t.minimizeorder=="undefined"){ //stack order of minmized window on screen relative to any other minimized windows
		dhtmlwindow.minimizeorder++ //increment order
		t.minimizeorder=dhtmlwindow.minimizeorder
	}
	t.style.left="10px" //left coord of minmized window
	t.style.width="200px"
	var windowspacing=t.minimizeorder*10 //spacing (gap) between each minmized window(s)
	t.style.top=dhtmlwindow.scroll_top+dhtmlwindow.docheight-(t.handle.offsetHeight*t.minimizeorder)-windowspacing+"px"
},

restore:function(button, t){
	dhtmlwindow.getviewpoint()
	button.setAttribute("src", dhtmlwindow.imagefiles[0])
	button.setAttribute("title", "Minimize")
	t.state="fullview" //indicate the state of the window as being "fullview"
	t.style.display="block"
	t.contentarea.style.display="block"
	if (t.resizeBool) //if this window is resizable, enable the resize icon
		t.statusarea.style.display="block"
	t.style.left=parseInt(t.lastx)+dhtmlwindow.scroll_left+"px" //position window to last known x coord just before minimizing
	t.style.top=parseInt(t.lasty)+dhtmlwindow.scroll_top+"px"
	t.style.width=parseInt(t.lastwidth)+"px"
},


close:function(t){
	try{
		var closewinbol=t.onclose()
	}
	catch(err){ //In non IE browsers, all errors are caught, so just run the below
		var closewinbol=true
 }
	finally{ //In IE, not all errors are caught, so check if variable isn't defined in IE in those cases
		if (typeof closewinbol=="undefined"){
			alert("An error has occured somwhere inside your \"onclose\" event handler")
			var closewinbol=true
		}
	}
	if (closewinbol){ //if custom event handler function returns true
		if (t.state!="minimized") //if this window isn't currently minimized
			dhtmlwindow.rememberattrs(t) //remember window's dimensions/position on the page before closing
		if (window.frames["_iframe-"+t.id]) //if this is an IFRAME DHTML window
			window.frames["_iframe-"+t.id].location.replace("about:blank")
		else
			t.contentarea.innerHTML=""
		t.style.display="none"
		t.isClosed=true //tell script this window is closed (for detection in t.show())
	}
	return closewinbol
},


setopacity:function(targetobject, value){ //Sets the opacity of targetobject based on the passed in value setting (0 to 1 and in between)
	if (!targetobject)
		return
	if (targetobject.filters && targetobject.filters[0]){ //IE syntax
		if (typeof targetobject.filters[0].opacity=="number") //IE6
			targetobject.filters[0].opacity=value*100
		else //IE 5.5
			targetobject.style.filter="alpha(opacity="+value*100+")"
		}
	else if (typeof targetobject.style.MozOpacity!="undefined") //Old Mozilla syntax
		targetobject.style.MozOpacity=value
	else if (typeof targetobject.style.opacity!="undefined") //Standard opacity syntax
		targetobject.style.opacity=value
},

setfocus:function(t){ //Sets focus to the currently active window
	this.zIndexvalue++
	t.style.zIndex=this.zIndexvalue
	t.isClosed=false //tell script this window isn't closed (for detection in t.show())
	this.setopacity(this.lastactivet.handle, 0.5) //unfocus last active window
	this.setopacity(t.handle, 1) //focus currently active window
	this.lastactivet=t //remember last active window
},


show:function(t){
	if (t.isClosed){
		alert("DHTML Window has been closed, so nothing to show. Open/Create the window again.")
		return
	}
	if (t.lastx) //If there exists previously stored information such as last x position on window attributes (meaning it's been minimized or closed)
		dhtmlwindow.restore(t.controls.firstChild, t) //restore the window using that info
	else
		t.style.display="block"
	this.setfocus(t)
	t.state="fullview" //indicate the state of the window as being "fullview"
},

hide:function(t){
	t.style.display="none"
},

ajax_connect:function(url, t){
	var page_request = false
	var bustcacheparameter=""
	if (window.XMLHttpRequest) // if Mozilla, IE7, Safari etc
		page_request = new XMLHttpRequest()
	else if (window.ActiveXObject){ // if IE6 or below
		try {
		page_request = new ActiveXObject("Msxml2.XMLHTTP")
		} 
		catch (e){
			try{
			page_request = new ActiveXObject("Microsoft.XMLHTTP")
			}
			catch (e){}
		}
	}
	else
		return false
	t.contentarea.innerHTML=this.ajaxloadinghtml
	page_request.onreadystatechange=function(){dhtmlwindow.ajax_loadpage(page_request, t)}
	if (this.ajaxbustcache) //if bust caching of external page
		bustcacheparameter=(url.indexOf("?")!=-1)? "&"+new Date().getTime() : "?"+new Date().getTime()
	page_request.open('GET', url+bustcacheparameter, true)
	page_request.send(null)
},

ajax_loadpage:function(page_request, t){
	if (page_request.readyState == 4 && (page_request.status==200 || window.location.href.indexOf("http")==-1)){
	t.contentarea.innerHTML=page_request.responseText
	}
},


stop:function(){
	dhtmlwindow.etarget=null //clean up
	document.onmousemove=null
	document.onmouseup=null
},

addEvent:function(target, functionref, tasktype){ //assign a function to execute to an event handler (ie: onunload)
	var tasktype=(window.addEventListener)? tasktype : "on"+tasktype
	if (target.addEventListener)
		target.addEventListener(tasktype, functionref, false)
	else if (target.attachEvent)
		target.attachEvent(tasktype, functionref)
},

cleanup:function(){
	for (var i=0; i<dhtmlwindow.tobjects.length; i++){
		dhtmlwindow.tobjects[i].handle._parent=dhtmlwindow.tobjects[i].resizearea._parent=dhtmlwindow.tobjects[i].controls._parent=null
	}
	window.onload=null
}

} //End dhtmlwindow object

document.write('<div id="dhtmlwindowholder"><span style="display:none">.</span></div>') //container that holds all dhtml window divs on page
window.onunload=dhtmlwindow.cleanup

function open_rh() {rhwin=dhtmlwindow.open("rhbox", "iframe", "revision_history.html", 'Revision History', "width=600px,height=300px,center=1,resize=0,scrolling=1")}