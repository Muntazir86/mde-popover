import{$ as h,$a as gt,A as Ze,Aa as v,Ab as It,B as D,Ba as y,Bb as K,C as J,Ca as it,Cb as Ce,D as c,Da as g,E as U,Ea as z,Eb as Ne,F as k,Fa as l,G as T,Ga as ot,Gb as Mt,Hb as Et,I as Te,Ib as W,J as B,Ja as rt,Jb as Nt,K as I,Ka as st,Kb as j,L as ee,La as lt,Lb as Dt,M as ue,Ma as ce,Mb as xe,Na as _e,Nb as At,Ob as Pe,P as Je,Pa as Ie,Pb as Ot,Q as te,Qb as Ft,R as M,Ra as ct,Rb as Rt,S as et,Sa as ve,Ta as dt,U as ge,Ua as P,V as d,Va as ye,W as fe,Wa as mt,X as ne,Xa as pt,Xb as Lt,Ya as bt,Za as ht,_ as tt,_a as ut,aa as A,ab as de,ba as ae,ca as Se,cb as ft,d as N,da as nt,db as Me,e as He,ea as at,eb as _t,f as me,fa as w,fb as vt,g as ze,ga as ie,gb as yt,h as L,ha as oe,hb as Ct,i as We,ia as we,ib as xt,j as $,ja as re,jb as Ee,ka as se,kb as Pt,l as je,la as m,m as Ve,ma as o,mb as kt,n as pe,na as r,o as Qe,oa as u,oc as Bt,p as $e,pc as Ht,q as Ue,qc as zt,r as Xe,ra as Q,rb as Tt,rc as Wt,s as Ge,sc as jt,t as qe,ta as S,tb as G,tc as Vt,u as Ye,ua as C,ub as St,v as be,va as H,w as Ke,wa as O,x as Z,xa as X,xb as wt,y as he,ya as le,yb as q,za as _,zb as Y}from"./chunk-2BHSSDHP.js";var un=["*",[["mat-toolbar-row"]]],gn=["*","mat-toolbar-row"],fn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=A({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),Ut=(()=>{class i{_elementRef=c(M);_platform=c(de);_document=c(B);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["mat-toolbar"]],contentQueries:function(t,n,a){if(t&1&&X(a,fn,5),t&2){let s;_(s=v())&&(n._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,n){t&2&&(z(n.color?"mat-"+n.color:""),g("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:gn,decls:2,vars:0,template:function(t,n){t&1&&(H(un),O(0),O(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return i})();function Xt(i){return Error(`Unable to find icon with the name "${i}"`)}function _n(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Gt(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function qt(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var R=class{url;svgText;options;svgElement=null;constructor(b,e,t){this.url=b,this.svgText=e,this.options=t}},Kt=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,n,a){this._httpClient=e,this._sanitizer=t,this._errorHandler=a,this._document=n}addSvgIcon(e,t,n){return this.addSvgIconInNamespace("",e,t,n)}addSvgIconLiteral(e,t,n){return this.addSvgIconLiteralInNamespace("",e,t,n)}addSvgIconInNamespace(e,t,n,a){return this._addSvgIconConfig(e,t,new R(n,null,a))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,n,a){let s=this._sanitizer.sanitize(U.HTML,n);if(!s)throw qt(n);let p=G(s);return this._addSvgIconConfig(e,t,new R("",p,a))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,n){return this._addSvgIconSetConfig(e,new R(t,null,n))}addSvgIconSetLiteralInNamespace(e,t,n){let a=this._sanitizer.sanitize(U.HTML,t);if(!a)throw qt(t);let s=G(a);return this._addSvgIconSetConfig(e,new R("",s,n))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(U.RESOURCE_URL,e);if(!t)throw Gt(e);let n=this._cachedIconsByUrl.get(t);return n?L(ke(n)):this._loadSvgIconFromConfig(new R(e,null)).pipe(he(a=>this._cachedIconsByUrl.set(t,a)),$(a=>ke(a)))}getNamedSvgIcon(e,t=""){let n=Yt(t,e),a=this._svgIconConfigs.get(n);if(a)return this._getSvgFromConfig(a);if(a=this._getIconConfigFromResolvers(t,e),a)return this._svgIconConfigs.set(n,a),this._getSvgFromConfig(a);let s=this._iconSetConfigs.get(t);return s?this._getSvgFromIconSetConfigs(e,s):We(Xt(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?L(ke(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe($(t=>ke(t)))}_getSvgFromIconSetConfigs(e,t){let n=this._extractIconWithNameFromAnySet(e,t);if(n)return L(n);let a=t.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe($e(p=>{let x=`Loading icon set URL: ${this._sanitizer.sanitize(U.RESOURCE_URL,s.url)} failed: ${p.message}`;return this._errorHandler.handleError(new Error(x)),L(null)})));return je(a).pipe($(()=>{let s=this._extractIconWithNameFromAnySet(e,t);if(!s)throw Xt(e);return s}))}_extractIconWithNameFromAnySet(e,t){for(let n=t.length-1;n>=0;n--){let a=t[n];if(a.svgText&&a.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(a),p=this._extractSvgIconFromSet(s,e,a.options);if(p)return p}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(he(t=>e.svgText=t),$(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?L(null):this._fetchIcon(e).pipe(he(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,n){let a=e.querySelector(`[id="${t}"]`);if(!a)return null;let s=a.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,n);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),n);let p=this._svgElementFromString(G("<svg></svg>"));return p.appendChild(s),this._setSvgAttributes(p,n)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let n=t.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(e){let t=this._svgElementFromString(G("<svg></svg>")),n=e.attributes;for(let a=0;a<n.length;a++){let{name:s,value:p}=n[a];s!=="id"&&t.setAttribute(s,p)}for(let a=0;a<e.childNodes.length;a++)e.childNodes[a].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[a].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:n}=e,a=n?.withCredentials??!1;if(!this._httpClient)throw _n();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let s=this._sanitizer.sanitize(U.RESOURCE_URL,t);if(!s)throw Gt(t);let p=this._inProgressUrlFetches.get(s);if(p)return p;let f=this._httpClient.get(s,{responseType:"text",withCredentials:a}).pipe($(x=>G(x)),Ge(()=>this._inProgressUrlFetches.delete(s)),qe());return this._inProgressUrlFetches.set(s,f),f}_addSvgIconConfig(e,t,n){return this._svgIconConfigs.set(Yt(e,t),n),this}_addSvgIconSetConfig(e,t){let n=this._iconSetConfigs.get(e);return n?n.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let n=0;n<this._resolvers.length;n++){let a=this._resolvers[n](t,e);if(a)return vn(a)?new R(a.url,null,a.options):new R(a,null)}}static \u0275fac=function(t){return new(t||i)(J(mt,8),J(gt),J(B,8),J(ue))};static \u0275prov=Ze({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ke(i){return i.cloneNode(!0)}function Yt(i,b){return i+":"+b}function vn(i){return!!(i.url&&i.options)}var yn=["*"],Cn=new D("MAT_ICON_DEFAULT_OPTIONS"),xn=new D("mat-icon-location",{providedIn:"root",factory:()=>{let i=c(B),b=i?i.location:null;return{getPathname:()=>b?b.pathname+b.search:""}}}),Zt=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Pn=Zt.map(i=>`[${i}]`).join(", "),kn=/^url\(['"]?#(.*?)['"]?\)$/,V=(()=>{class i{_elementRef=c(M);_iconRegistry=c(Kt);_location=c(xn);_errorHandler=c(ue);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=N.EMPTY;constructor(){let e=c(new Ie("aria-hidden"),{optional:!0}),t=c(Cn,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let n=e.childNodes[t];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>e.classList.remove(n)),t.forEach(n=>e.classList.add(n)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((n,a)=>{n.forEach(s=>{a.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Pn),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let a=0;a<t.length;a++)Zt.forEach(s=>{let p=t[a],f=p.getAttribute(s),x=f?f.match(kn):null;if(x){let E=n.get(p);E||(E=[],n.set(p,E)),E.push({name:s,value:x[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,n]=this._splitIconName(e);t&&(this._svgNamespace=t),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,t).pipe(Xe(1)).subscribe(a=>this._setSvgElement(a),a=>{let s=`Error retrieving icon ${t}:${n}! ${a.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,n){t&2&&(w("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),z(n.color?"mat-"+n.color:""),g("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",P],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:yn,decls:1,vars:0,template:function(t,n){t&1&&(H(),O(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return i})();var Tn=(i,b)=>b.className;function Sn(i,b){i&1&&(o(0,"mat-icon"),l(1,"check_circle"),r())}function wn(i,b){if(i&1){let e=Q();o(0,"button",2),S("click",function(){let n=k(e).$implicit,a=C();return T(a.theme.set(n.className))})("focus",function(){let n=k(e).$implicit,a=C();return T(a.hovering=n.className)})("mouseenter",function(){let n=k(e).$implicit,a=C();return T(a.hovering=n.className)})("mouseleave",function(){k(e);let n=C();return T(n.hovering=null)}),ie(1,Sn,2,0,"mat-icon"),r()}if(i&2){let e=b.$implicit,t=C();g("current",t.theme()===e.className)("hover",t.hovering!==null),m("ngStyle",e.styles),w("data-testid","theme-"+e.className)("aria-label",e.label)("cdkFocusInitial",t.theme()===e.className||null),d(),oe(t.theme()===e.className?1:-1)}}var Jt=(()=>{class i{constructor(){this.hovering=null,this.elevation=!0,this.items=[{className:"indigo-pink-theme",label:"Indigo and pink",styles:{"background-color":"#6750A4",background:"-webkit-linear-gradient(-45deg, #6750A4 0%, #6750A4 50%, #F06292 51%, #F06292 100%)"}},{className:"pink-bluegrey-theme",label:"Pink and blue grey",styles:{"background-color":"#AB2E5C",background:"-webkit-linear-gradient(-45deg, #AB2E5C 0%, #AB2E5C 50%, #5E92F3 51%, #5E92F3 100%)"}},{className:"indigo-grey-theme",label:"Indigo and grey",styles:{"background-color":"#6750A4",background:"-webkit-linear-gradient(-45deg, #6750A4 0%, #6750A4 50%, #90CAF9 51%, #90CAF9 100%)"}},{className:"purple-green-theme",label:"Purple and green",styles:{"background-color":"#8559A5",background:"-webkit-linear-gradient(-45deg, #8559A5 0%, #8559A5 50%, #4CAF50 51%, #4CAF50 100%)"}},{className:"cyan-orange-theme",label:"Cyan and orange",styles:{"background-color":"#00ACC1",background:"-webkit-linear-gradient(-45deg, #00ACC1 0%, #00ACC1 50%, #FF9800 51%, #FF9800 100%)"}},{className:"custom-dark-theme",label:"Custom dark",styles:{"background-color":"#CA9577",background:"-webkit-linear-gradient(-45deg, #CA9577 0%, #CA9577 50%, #387A71 51%, #387A71 100%)"}}],this.theme=ct("")}onItemKeydown(e){e.key==="Tab"&&(this.hovering=null)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=h({type:i,selectors:[["app-theme-picker"]],hostVars:2,hostBindings:function(t,n){t&2&&g("mat-elevation-z4",n.elevation)},inputs:{theme:[1,"theme"]},outputs:{theme:"themeChange"},decls:3,vars:0,consts:[["tabindex","-1",1,"container",3,"keydown"],["mat-button","",1,"item",3,"ngStyle","current","hover"],["mat-button","",1,"item",3,"click","focus","mouseenter","mouseleave","ngStyle"]],template:function(t,n){t&1&&(o(0,"div",0),S("keydown",function(s){return n.onItemKeydown(s)}),re(1,wn,2,9,"button",1,Tn),r()),t&2&&(d(),se(n.items))},dependencies:[W,ht,V],styles:["[_nghost-%COMP%]{display:flex;background:#e5e5e5;flex-wrap:wrap;max-width:240px;width:240px;border:4px solid #ffffff}.container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;width:100%}.item[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex:1 1 auto;width:80px;min-width:80px;min-height:80px;max-width:80px;max-height:80px;height:80px;border:4px solid #ffffff;box-sizing:border-box;cursor:pointer;color:#fff}.item.hover[_ngcontent-%COMP%]:not(:hover){opacity:.5}.item[_ngcontent-%COMP%]:focus{opacity:1!important}.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16pt}"],changeDetection:1})}}return i})();var Le=["*"];function En(i,b){i&1&&O(0)}var Nn=["tabListContainer"],Dn=["tabList"],An=["tabListInner"],On=["nextPaginator"],Fn=["previousPaginator"],Rn=["content"];function Ln(i,b){}var Bn=["tabBodyWrapper"],Hn=["tabHeader"];function zn(i,b){}function Wn(i,b){if(i&1&&Se(0,zn,0,0,"ng-template",12),i&2){let e=C().$implicit;m("cdkPortalOutlet",e.templateLabel)}}function jn(i,b){if(i&1&&l(0),i&2){let e=C().$implicit;ot(e.textLabel)}}function Vn(i,b){if(i&1){let e=Q();o(0,"div",7,2),S("click",function(){let n=k(e),a=n.$implicit,s=n.$index,p=C(),f=y(1);return T(p._handleClick(a,f,s))})("cdkFocusChange",function(n){let a=k(e).$index,s=C();return T(s._tabFocusChanged(n,a))}),u(2,"span",8)(3,"div",9),o(4,"span",10)(5,"span",11),ie(6,Wn,1,1,null,12)(7,jn,1,1),r()()()}if(i&2){let e=b.$implicit,t=b.$index,n=y(1),a=C();z(e.labelClass),g("mdc-tab--active",a.selectedIndex===t),m("id",a._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",a.fitInkBarToContent),w("tabIndex",a._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",a._tabs.length)("aria-controls",a._getTabContentId(t))("aria-selected",a.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),d(3),m("matRippleTrigger",n)("matRippleDisabled",e.disabled||a.disableRipple),d(3),oe(e.templateLabel?6:7)}}function Qn(i,b){i&1&&O(0)}function $n(i,b){if(i&1){let e=Q();o(0,"mat-tab-body",13),S("_onCentered",function(){k(e);let n=C();return T(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){k(e);let a=C();return T(a._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){k(e);let a=C();return T(a._bodyCentered(n))}),r()}if(i&2){let e=b.$implicit,t=b.$index,n=C();z(e.bodyClass),m("id",n._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",n._bodyAnimationDuration)("preserveContent",n.preserveContent),w("tabindex",n.contentTabIndex!=null&&n.selectedIndex===t?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(e,t))("aria-hidden",n.selectedIndex!==t)}}var Un=new D("MatTabContent"),Xn=(()=>{class i{template=c(fe);static \u0275fac=function(t){return new(t||i)};static \u0275dir=A({type:i,selectors:[["","matTabContent",""]],features:[ce([{provide:Un,useExisting:i}])]})}return i})(),Gn=new D("MatTabLabel"),an=new D("MAT_TAB"),qn=(()=>{class i extends xt{_closestTab=c(an,{optional:!0});static \u0275fac=(()=>{let e;return function(n){return(e||(e=te(i)))(n||i)}})();static \u0275dir=A({type:i,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[ce([{provide:Gn,useExisting:i}]),ae]})}return i})(),on=new D("MAT_TAB_GROUP"),Be=(()=>{class i{_viewContainerRef=c(tt);_closestTabGroup=c(on,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new me;position=null;origin=null;isActive=!1;constructor(){c(ft).load(Mt)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Ct(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["mat-tab"]],contentQueries:function(t,n,a){if(t&1&&X(a,qn,5)(a,Xn,7,fe),t&2){let s;_(s=v())&&(n.templateLabel=s.first),_(s=v())&&(n._explicitContent=s.first)}},viewQuery:function(t,n){if(t&1&&le(fe,7),t&2){let a;_(a=v())&&(n._implicitContent=a.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,n){t&2&&w("id",null)},inputs:{disabled:[2,"disabled","disabled",P],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[ce([{provide:an,useExisting:i}]),Je],ngContentSelectors:Le,decls:1,vars:0,template:function(t,n){t&1&&(H(),nt(0,En,1,0,"ng-template"))},encapsulation:2,changeDetection:1})}return i})(),De="mdc-tab-indicator--active",en="mdc-tab-indicator--no-transition",Oe=class{_items;_currentItem;constructor(b){this._items=b}hide(){this._items.forEach(b=>b.deactivateInkBar()),this._currentItem=void 0}alignToElement(b){let e=this._items.find(n=>n.elementRef.nativeElement===b),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let n=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(n),this._currentItem=e}}},Yn=(()=>{class i{_elementRef=c(M);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(De);return}let n=t.getBoundingClientRect(),a=e.width/n.width,s=e.left-n.left;t.classList.add(en),this._inkBarContentElement.style.setProperty("transform",`translateX(${s}px) scaleX(${a})`),t.getBoundingClientRect(),t.classList.remove(en),t.classList.add(De),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(De)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),n=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=A({type:i,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",P]}})}return i})();var rn=(()=>{class i extends Yn{elementRef=c(M);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(n){return(e||(e=te(i)))(n||i)}})();static \u0275dir=A({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,n){t&2&&(w("aria-disabled",!!n.disabled),g("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",P]},features:[ae]})}return i})(),tn={passive:!0},Kn=650,Zn=100;function Ae(i){let b=i+"";return/^[0-9]+(?:\.[0-9]+)?$/.test(b)?`${i}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(b)?b:""}var Jn=(()=>{class i{_elementRef=c(M);_changeDetectorRef=c(ve);_viewportRuler=c(vt);_dir=c(Me,{optional:!0});_ngZone=c(ee);_platform=c(de);_sharedResizeObserver=c(Rt);_injector=c(Te);_renderer=c(ne);_animationsDisabled=Ce();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new me;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new me;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new I;indexFocused=new I;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),tn),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),tn))}ngAfterContentInit(){let e=this._dir?this._dir.change:L("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Ue(32),Z(this._destroyed)),n=this._viewportRuler.change(150).pipe(Z(this._destroyed)),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new wt(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),ge(a,{injector:this._injector}),pe(e,n,t,this._items.changes,this._itemsResized()).pipe(Z(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(s=>{this.indexFocused.emit(s),this._setTabFocus(s)})}_itemsResized(){return typeof ResizeObserver!="function"?ze:this._items.changes.pipe(be(this._items),Ke(e=>new He(t=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(a=>t.next(a));return e.forEach(a=>n.observe(a.elementRef.nativeElement)),()=>{n.disconnect()}}))),Ye(1),Qe(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Pt(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,n=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:s}=t.elementRef.nativeElement,p,f;this._getLayoutDirection()=="ltr"?(p=a,f=p+s):(f=this._tabListInner.nativeElement.offsetWidth-a,p=f-s);let x=this.scrollDistance,E=this.scrollDistance+n;p<x?this.scrollDistance-=x-p:f>E&&(this.scrollDistance+=Math.min(f-E,p-x))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,n=e-t>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),Ve(Kn,Zn).pipe(Z(pe(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:a}=this._scrollHeader(e);(a===0||a>=n)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=A({type:i,inputs:{disablePagination:[2,"disablePagination","disablePagination",P],selectedIndex:[2,"selectedIndex","selectedIndex",ye]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return i})(),ea=(()=>{class i extends Jn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Oe(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=te(i)))(n||i)}})();static \u0275cmp=h({type:i,selectors:[["mat-tab-header"]],contentQueries:function(t,n,a){if(t&1&&X(a,rn,4),t&2){let s;_(s=v())&&(n._items=s)}},viewQuery:function(t,n){if(t&1&&le(Nn,7)(Dn,7)(An,7)(On,5)(Fn,5),t&2){let a;_(a=v())&&(n._tabListContainer=a.first),_(a=v())&&(n._tabList=a.first),_(a=v())&&(n._tabListInner=a.first),_(a=v())&&(n._nextPaginator=a.first),_(a=v())&&(n._previousPaginator=a.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,n){t&2&&g("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",P]},features:[ae],ngContentSelectors:Le,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,n){t&1&&(H(),o(0,"div",5,0),S("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(s){return n._handlePaginatorPress("before",s)})("touchend",function(){return n._stopInterval()}),u(2,"div",6),r(),o(3,"div",7,1),S("keydown",function(s){return n._handleKeydown(s)}),o(5,"div",8,2),S("cdkObserveContent",function(){return n._onContentChanges()}),o(7,"div",9,3),O(9),r()()(),o(10,"div",10,4),S("mousedown",function(s){return n._handlePaginatorPress("after",s)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),u(12,"div",6),r()),t&2&&(g("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),m("matRippleDisabled",n._disableScrollBefore||n.disableRipple),d(3),g("_mat-animation-noopable",n._animationsDisabled),d(2),w("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),d(5),g("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),m("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[Ne,St],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})}return i})(),ta=new D("MAT_TABS_CONFIG"),nn=(()=>{class i extends Ee{_host=c(Fe);_ngZone=c(ee);_centeringSub=N.EMPTY;_leavingSub=N.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(be(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=te(i)))(n||i)}})();static \u0275dir=A({type:i,selectors:[["","matTabBodyHost",""]],features:[ae]})}return i})(),Fe=(()=>{class i{_elementRef=c(M);_dir=c(Me,{optional:!0});_ngZone=c(ee);_injector=c(Te);_renderer=c(ne);_diAnimationsDisabled=Ce();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=N.EMPTY;_position;_previousPosition;_onCentering=new I;_beforeCentering=new I;_afterLeavingCenter=new I;_onCentered=new I(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=c(ve);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),ge(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),ge(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["mat-tab-body"]],viewQuery:function(t,n){if(t&1&&le(nn,5)(Rn,5),t&2){let a;_(a=v())&&(n._portalHost=a.first),_(a=v())&&(n._contentElement=a.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,n){t&2&&w("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,n){t&1&&(o(0,"div",1,0),Se(2,Ln,0,0,"ng-template",2),r()),t&2&&g("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[nn,_t],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})}return i})(),sn=(()=>{class i{_elementRef=c(M);_changeDetectorRef=c(ve);_ngZone=c(ee);_tabsSubscription=N.EMPTY;_tabLabelSubscription=N.EMPTY;_tabBodySubscription=N.EMPTY;_diAnimationsDisabled=Ce();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new et;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=e,e&&typeof e=="object"?(this._bodyAnimationDuration=Ae(e.body),this._headerAnimationDuration=Ae(e.header)):this._headerAnimationDuration=this._bodyAnimationDuration=Ae(e)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new I;focusChange=new I;animationDone=new I;selectedTabChange=new I(!0);_groupId;_isServer=!c(de).isBrowser;constructor(){let e=c(ta,{optional:!0});this._groupId=c(yt).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,a)=>n.isActive=a===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,n)=>{t.position=n-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),n;for(let a=0;a<t.length;a++)if(t[a].isActive){this._indexToSelect=this._selectedIndex=a,this._lastFocusedTabIndex=null,n=t[a];break}!n&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(be(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new Re;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=pe(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,n){t.focusIndex=n,e.disabled||(this.selectedIndex=n)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,n)=>t._setActiveClass(n===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration==="0"||this._bodyAnimationDuration==="0ms"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["mat-tab-group"]],contentQueries:function(t,n,a){if(t&1&&X(a,Be,5),t&2){let s;_(s=v())&&(n._allTabs=s)}},viewQuery:function(t,n){if(t&1&&le(Bn,5)(Hn,5)(Fe,5),t&2){let a;_(a=v())&&(n._tabBodyWrapper=a.first),_(a=v())&&(n._tabHeader=a.first),_(a=v())&&(n._tabBodies=a)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:13,hostBindings:function(t,n){t&2&&(w("mat-align-tabs",n.alignTabs),z("mat-"+(n.color||"primary")),it("--%NS%mat-tab-body-animation-duration",n._bodyAnimationDuration)("--%NS%mat-tab-header-animation-duration",n._headerAnimationDuration),g("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",P],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",P],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",P],selectedIndex:[2,"selectedIndex","selectedIndex",ye],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",ye],disablePagination:[2,"disablePagination","disablePagination",P],disableRipple:[2,"disableRipple","disableRipple",P],preserveContent:[2,"preserveContent","preserveContent",P],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[ce([{provide:on,useExisting:i}])],ngContentSelectors:Le,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,n){t&1&&(H(),o(0,"mat-tab-header",3,0),S("indexFocused",function(s){return n._focusChanged(s)})("selectFocusedIndex",function(s){return n.selectedIndex=s}),re(2,Vn,8,17,"div",4,we),r(),ie(4,Qn,1,0),o(5,"div",5,1),re(7,$n,1,10,"mat-tab-body",6,we),r()),t&2&&(m("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),at("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),d(2),se(n._tabs),d(2),oe(n._isServer?4:-1),d(),g("_mat-animation-noopable",n._bodyAnimationsDisabled()),d(2),se(n._tabs))},dependencies:[ea,rn,Tt,Ne,Ee,Fe],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})}return i})(),Re=class{index;tab};var ln=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=h({type:i,selectors:[["app-notifications"]],decls:28,vars:0,consts:[["data-testid","notifications-card",1,"example-card"],[1,"mat-elevation-z4"],["label","Alerts"],[1,"notification-content"],["label","Updates"]],template:function(t,n){t&1&&(o(0,"mat-card",0)(1,"mat-tab-group",1)(2,"mat-tab",2)(3,"div",3)(4,"h3"),l(5,"System Alerts"),r(),o(6,"p"),l(7,"There are 3 critical alerts that need your attention."),r(),o(8,"ul")(9,"li"),l(10,"Server CPU usage is at 95%."),r(),o(11,"li"),l(12,"Database backup failed last night."),r(),o(13,"li"),l(14,"New software update available."),r()()()(),o(15,"mat-tab",4)(16,"div",3)(17,"h3"),l(18,"Recent Updates"),r(),o(19,"p"),l(20,"Here are the latest updates from your projects:"),r(),o(21,"ul")(22,"li"),l(23,' Project Alpha: New feature "User Analytics" has been deployed. '),r(),o(24,"li"),l(25,"Project Beta: Bug fix for login issue has been applied."),r(),o(26,"li"),l(27,"Project Gamma: Documentation has been updated."),r()()()()()())},dependencies:[j,sn,Be],styles:["[_nghost-%COMP%]{background-color:#e5e5e5;width:400px}.example-card[_ngcontent-%COMP%]{max-width:400px;width:300px;padding:16px}  .mat-mdc-tab-group{box-shadow:none}"]})}}return i})();var cn=(()=>{class i{constructor(){this.elevation=!0}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=h({type:i,selectors:[["app-github"]],hostVars:2,hostBindings:function(t,n){t&2&&g("mat-elevation-z4",n.elevation)},decls:9,vars:0,consts:[[1,"github-container"],["href","https://github.com/Muntazir86/mde-popover","target","_blank","rel","noopener noreferrer","data-testid","github-repo-link","mat-button","",1,"btn","repo-link"],["href","https://github.com/Muntazir86/mde-popover/issues","target","_blank","rel","noopener noreferrer","data-testid","github-issues-link","mat-button","",1,"btn","issues-link"]],template:function(t,n){t&1&&(o(0,"div",0)(1,"a",1)(2,"mat-icon"),l(3,"link"),r(),l(4," Repo "),r(),o(5,"a",2)(6,"mat-icon"),l(7,"bug_report"),r(),l(8," Issues "),r()())},dependencies:[W,V],styles:["[_nghost-%COMP%]{display:block;max-width:250px;background-color:#fff;padding:10px}.github-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.btn[_ngcontent-%COMP%]{padding:10px 20px;color:#fff;border-radius:4px;text-decoration:none;display:inline-flex;align-items:center;margin-right:10px;margin-bottom:5px}.repo-link[_ngcontent-%COMP%]{background-color:#1976d2}.issues-link[_ngcontent-%COMP%]{background-color:#d32f2f}.icon[_ngcontent-%COMP%]{vertical-align:middle;margin-right:5px}"]})}}return i})();var mn=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=h({type:i,selectors:[["app-support"]],decls:77,vars:30,consts:[["userPopover","mdePopover"],["data-testid","support-chat",1,"google-chat"],[1,"toolbar"],[1,"settings"],["button-plain","","type","button","aria-label","Settings","mdTooltip","Settings","mdTooltipPosition","below"],[1,"title"],[1,"clear"],["button-plain","","type","button","aria-label","Close chat","mdTooltip","Close","mdTooltipPosition","below"],[1,"discussion"],[1,"other"],[1,"avatar"],["data-testid","support-avatar","alt","Timothy","src","assets/images/avatar-indigo.svg","mdePopoverPositionX","after","mdePopoverPositionY","below","mdePopoverArrowColor","#ffffff","mdePopoverTriggerOn","hover",3,"mdePopoverTriggerFor","mdePopoverArrowOffsetX","mdePopoverArrowWidth","mdePopoverOverlapTrigger","mdePopoverEnterDelay"],[1,"messages"],["datetime","2009-11-13T20:00"],[1,"self"],["data-testid","support-avatar","alt","You","src","assets/images/avatar-red.svg","mdePopoverPositionX","before","mdePopoverPositionY","below","mdePopoverArrowColor","#ffffff","mdePopoverTriggerOn","hover",3,"mdePopoverTriggerFor","mdePopoverArrowOffsetX","mdePopoverArrowWidth","mdePopoverOverlapTrigger","mdePopoverEnterDelay"],["datetime","2009-11-13T20:14"],["data-testid","support-avatar","alt","You","src","assets/images/avatar-red.svg","mdePopoverPositionX","before","mdePopoverPositionY","below","mdePopoverArrowColor","#000000","mdePopoverTriggerOn","click",3,"mdePopoverTriggerFor","mdePopoverArrowOffsetX","mdePopoverArrowWidth","mdePopoverOverlapTrigger","mdePopoverEnterDelay"],[1,"form"],[2,"width","100%","margin-bottom","-10px"],["matInput","","data-testid","support-message","aria-label","Message","placeholder","Message","cdkFocusInitial",""],["data-testid","support-user-card",2,"width","200px"],["mat-card-avatar","","data-testid","support-user-avatar","alt","Joe Blogs","src","assets/images/avatar-indigo.svg"]],template:function(t,n){if(t&1&&(o(0,"div",1)(1,"div",2)(2,"div",3)(3,"button",4)(4,"mat-icon"),l(5,"settings"),r()()(),o(6,"div",5),l(7,"Lounge"),r(),o(8,"div",6)(9,"button",7)(10,"mat-icon"),l(11,"close"),r()()()(),o(12,"ol",8)(13,"li",9)(14,"div",10),u(15,"img",11),r(),o(16,"div",12)(17,"p"),l(18,"I need you to complete this by today if possible."),r(),o(19,"time",13),l(20,"Timothy \u2022 51 min"),r()()(),o(21,"li",14)(22,"div",10),u(23,"img",15),r(),o(24,"div",12)(25,"p"),l(26,"That should be fine."),r(),o(27,"p"),l(28,"It's a pretty small task."),r(),o(29,"time",16),l(30,"50 mins"),r()()(),o(31,"li",9)(32,"div",10),u(33,"img",11),r(),o(34,"div",12)(35,"p"),l(36,"That's great."),r(),o(37,"p"),l(38,"Ping me once you've completed it."),r(),o(39,"time",16),l(40,"49 mins"),r()()(),o(41,"li",14)(42,"div",10),u(43,"img",17),r(),o(44,"div",12)(45,"p"),l(46,"I will do!"),r(),o(47,"time",16),l(48,"45 mins"),r()()(),o(49,"li",14)(50,"div",10),u(51,"img",15),r(),o(52,"div",12)(53,"p"),l(54,"Quick question"),r(),o(55,"p"),l(56,"What colour should it use?"),r(),o(57,"time",16),l(58,"37 mins"),r()()(),o(59,"li",9)(60,"div",10),u(61,"img",11),r(),o(62,"div",12)(63,"p"),l(64,"Material colours obviously :)"),r()()()(),o(65,"div",18)(66,"mat-form-field",19),u(67,"input",20),r()()(),o(68,"mde-popover",null,0)(70,"mat-card",21)(71,"mat-card-header"),u(72,"img",22),o(73,"mat-card-title"),l(74,"Joe Blogs"),r(),o(75,"mat-card-subtitle"),l(76,"Angular"),r()()()()),t&2){let a=y(69);d(15),m("mdePopoverTriggerFor",a)("mdePopoverArrowOffsetX",20)("mdePopoverArrowWidth",8)("mdePopoverOverlapTrigger",!1)("mdePopoverEnterDelay",200),d(8),m("mdePopoverTriggerFor",a)("mdePopoverArrowOffsetX",20)("mdePopoverArrowWidth",8)("mdePopoverOverlapTrigger",!1)("mdePopoverEnterDelay",200),d(10),m("mdePopoverTriggerFor",a)("mdePopoverArrowOffsetX",20)("mdePopoverArrowWidth",8)("mdePopoverOverlapTrigger",!1)("mdePopoverEnterDelay",200),d(10),m("mdePopoverTriggerFor",a)("mdePopoverArrowOffsetX",20)("mdePopoverArrowWidth",8)("mdePopoverOverlapTrigger",!1)("mdePopoverEnterDelay",200),d(8),m("mdePopoverTriggerFor",a)("mdePopoverArrowOffsetX",20)("mdePopoverArrowWidth",8)("mdePopoverOverlapTrigger",!1)("mdePopoverEnterDelay",200),d(10),m("mdePopoverTriggerFor",a)("mdePopoverArrowOffsetX",20)("mdePopoverArrowWidth",8)("mdePopoverOverlapTrigger",!1)("mdePopoverEnterDelay",200)}},dependencies:[V,K,q,Y,Lt,Bt,j,Ot,Ft,Dt,At],styles:['.google-chat[_ngcontent-%COMP%]{background-color:#e5e5e5;width:320px;box-sizing:border-box}.google-chat[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]{color:#666;font:16px Roboto,arial,sans-serif;height:40px;overflow:visible;position:relative;padding:4px 20px;box-sizing:border-box;width:320px}.google-chat[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   md-icon[_ngcontent-%COMP%]{color:#a9a9a9}.google-chat[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   [button-plain][_ngcontent-%COMP%]{border:none;background:transparent;cursor:pointer;padding:0}.google-chat[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]{padding:8px 0;position:absolute;top:4px;left:20px}.google-chat[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#666;font:16px Roboto,arial,sans-serif;line-height:40px;overflow:hidden;padding:0 35px;text-align:center;text-overflow:ellipsis;vertical-align:top;white-space:nowrap}.google-chat[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .clear[_ngcontent-%COMP%]{padding:8px 0;position:absolute;top:4px;right:20px}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]{list-style:none;background:#e5e5e5;margin:0;padding:0 0 50px;max-height:300px;overflow:hidden}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem;overflow:hidden;display:flex}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:40px;min-width:40px;position:relative}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   .other[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;right:0;width:0;height:0;border:5px solid white;border-left-color:transparent;border-bottom-color:transparent}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   .self[_ngcontent-%COMP%]{justify-content:flex-end;align-items:flex-end}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   .self[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]{order:1;border-bottom-right-radius:0}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   .self[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{order:2}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   .self[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;width:0;height:0;border:5px solid white;border-right-color:transparent;border-top-color:transparent;box-shadow:1px 1px 2px #0003}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]{background:#fff;padding:10px;border-radius:2px;box-shadow:0 1px 2px #0003}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8rem;margin:0 0 .2rem}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{font-size:.7rem;color:#ccc}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]:hover{overflow:auto}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]:hover::-webkit-scrollbar{width:3px;height:3px}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]:hover::-webkit-scrollbar-button{width:0px;height:0px}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]:hover::-webkit-scrollbar-thumb{background:#7d7d7d;border:0px none #ffffff;border-radius:50px}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]:hover::-webkit-scrollbar-thumb:hover{background:#626262}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]:hover::-webkit-scrollbar-thumb:active{background:#555}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]:hover::-webkit-scrollbar-track{background:#acacac;border:0px none #ffffff;border-radius:50px}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]:hover::-webkit-scrollbar-track:hover{background:#acacac}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]:hover::-webkit-scrollbar-track:active{background:#c3c3c3}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]:hover::-webkit-scrollbar-corner{background:transparent}']})}}return i})();var na="indigo-pink-theme",pn=(()=>{class i{get themeClass(){return this._themeClass}set themeClass(e){e&&(this.renderer.removeClass(this.document.body,this._themeClass),this.overlayContainer.getContainerElement().classList.remove(this._themeClass),this.renderer.addClass(this.document.body,e),this.overlayContainer.getContainerElement().classList.add(e),this._themeClass=e)}constructor(){this._themeClass=na,this.overlayContainer=c(kt),this.renderer=c(ne),this.document=c(B),this.renderer.addClass(this.document.body,this.themeClass),this.overlayContainer.getContainerElement().classList.add(this.themeClass)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=h({type:i,selectors:[["app-root"]],decls:40,vars:30,consts:[["mainToolbar","mdePopoverTarget"],["themePopover","mdePopover"],["notificationsPopover","mdePopover"],["githubPopover","mdePopover"],["popover","mdePopover"],["supportPopover","mdePopover"],["color","primary","mdePopoverTarget",""],["mat-button","","data-testid","nav-menu-trigger","mdePopoverTriggerOn","click",3,"mdePopoverTriggerFor"],[1,"fill"],["mat-icon-button","","data-testid","nav-theme-trigger","aria-label","Choose theme","mdePopoverTriggerOn","click",3,"mdePopoverTriggerFor","mdePopoverTargetAt"],["mat-icon-button","","data-testid","nav-notifications-trigger","aria-label","Notifications","mdePopoverTriggerOn","click",3,"mdePopoverTriggerFor","mdePopoverTargetAt"],["mat-icon-button","","data-testid","nav-github-trigger","aria-label","GitHub","mdePopoverTriggerOn","hover",3,"mdePopoverTriggerFor","mdePopoverTargetAt"],["src","assets/images/github-circle-white-transparent.svg","alt",""],["mdePopoverArrowColor","#FFFFFF","mdePopoverScrollStrategy","close",3,"mdePopoverOverlapTrigger","mdePopoverCloseOnClick","mdePopoverOffsetX","mdePopoverOffsetY","mdePopoverArrowOffsetX"],["data-testid","nav-theme-content",3,"themeChange","theme"],["mdePopoverArrowColor","#1b1c1b",3,"mdePopoverOverlapTrigger","mdePopoverOffsetX","mdePopoverOffsetY","mdePopoverArrowOffsetX","mdePopoverCloseOnClick"],["data-testid","nav-notifications-content"],["mdePopoverArrowColor","#FFFFFF","mdePopoverScrollStrategy","close",3,"mdePopoverOverlapTrigger","mdePopoverOffsetX","mdePopoverOffsetY","mdePopoverArrowOffsetX","mdePopoverCloseOnClick"],["data-testid","nav-github-content"],[1,"example-card"],["data-testid","nav-menu-content"],["mat-button",""],["mat-fab","","data-testid","nav-support-trigger","aria-label","Open support chat","mdePopoverArrowColor","#e5e5e5","mdePopoverTriggerOn","click",1,"support-button",3,"mdePopoverTriggerFor","mdePopoverCloseOnClick"],["mdePopoverPositionX","before","mdePopoverPositionY","above","mdePopoverTriggerOn","click","mdePopoverPlacement","bottom","mdePopoverScrollStrategy","block",3,"mdePopoverArrowOffsetX","mdePopoverArrowWidth","mdePopoverOverlapTrigger","mdeFocusTrapEnabled","mdePopoverEnterDelay"],["data-testid","nav-support-content"]],template:function(t,n){if(t&1){let a=Q();o(0,"mat-toolbar",6,0)(2,"button",7),l(3," Click Me "),r(),u(4,"div",8),o(5,"button",9)(6,"mat-icon"),l(7,"format_color_fill"),r()(),o(8,"button",10)(9,"mat-icon"),l(10,"notifications"),r()(),o(11,"button",11),u(12,"img",12),r()(),o(13,"mde-popover",13,1)(15,"app-theme-picker",14),lt("themeChange",function(p){return k(a),st(n.themeClass,p)||(n.themeClass=p),T(p)}),r()(),o(16,"mde-popover",15,2),u(18,"app-notifications",16),r(),o(19,"mde-popover",17,3),u(21,"app-github",18),r(),o(22,"mde-popover",null,4)(24,"mat-card",19)(25,"mat-card-content")(26,"p",20),l(27," The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. "),r()(),o(28,"mat-card-actions")(29,"button",21),l(30,"LIKE"),r(),o(31,"button",21),l(32,"SHARE"),r()()()(),o(33,"button",22)(34,"mat-icon"),l(35,"chat"),r()(),o(36,"mde-popover",23,5),u(38,"app-support",24),r(),u(39,"router-outlet")}if(t&2){let a=y(1),s=y(14),p=y(17),f=y(20),x=y(23),E=y(37);d(2),m("mdePopoverTriggerFor",x),d(3),m("mdePopoverTriggerFor",s)("mdePopoverTargetAt",a),d(3),m("mdePopoverTriggerFor",p)("mdePopoverTargetAt",a),d(3),m("mdePopoverTriggerFor",f)("mdePopoverTargetAt",a),d(2),m("mdePopoverOverlapTrigger",!1)("mdePopoverCloseOnClick",!1)("mdePopoverOffsetX",-16)("mdePopoverOffsetY",-10)("mdePopoverArrowOffsetX",58),d(2),rt("theme",n.themeClass),d(),m("mdePopoverOverlapTrigger",!1)("mdePopoverOffsetX",-16)("mdePopoverOffsetY",-10)("mdePopoverArrowOffsetX",58)("mdePopoverCloseOnClick",!1),d(3),m("mdePopoverOverlapTrigger",!1)("mdePopoverOffsetX",-16)("mdePopoverOffsetY",-10)("mdePopoverArrowOffsetX",18)("mdePopoverCloseOnClick",!1),d(14),m("mdePopoverTriggerFor",E)("mdePopoverCloseOnClick",!1),d(3),m("mdePopoverArrowOffsetX",28)("mdePopoverArrowWidth",16)("mdePopoverOverlapTrigger",!1)("mdeFocusTrapEnabled",!0)("mdePopoverEnterDelay",100)}},dependencies:[Ut,K,q,Y,It,W,Et,V,Jt,ln,cn,j,xe,Pe,Nt,mn,Ht],styles:[".fill[_ngcontent-%COMP%]{flex:1 1 auto}.example-card[_ngcontent-%COMP%]{max-width:300px}.support-button[_ngcontent-%COMP%]{position:fixed;right:40px;bottom:40px;z-index:10}.container[_ngcontent-%COMP%]{padding:40px}"],changeDetection:1})}}return i})();var aa=()=>["examples","form"],ia=()=>["examples","builder"],oa=()=>["examples","list"],bn=(()=>{class i{constructor(){this.triggerdisable=!1}toggleDisableBit(){this.triggerdisable=!this.triggerdisable}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=h({type:i,selectors:[["app-page-home"]],decls:79,vars:29,consts:[["popover1","mdePopover"],["popover2","mdePopover"],["popover3","mdePopover"],["popover4","mdePopover"],["popover5","mdePopover"],["mat-raised-button","","color","primary","data-testid","home-hover-close",3,"mdePopoverTriggerFor"],["mat-raised-button","","color","accent","data-testid","home-click-center","mdePopoverTriggerOn","click",3,"mdePopoverTriggerFor","mdePopoverBackdropCloseOnClick"],["mat-button","","color","primary","data-testid","home-click-persist","mdePopoverTriggerOn","click",3,"mdePopoverTriggerFor","mdePopoverCloseOnClick"],["mat-button","","color","accent","data-testid","home-hover-persist",3,"mdePopoverTriggerFor","mdePopoverCloseOnClick"],["mat-raised-button","","color","primary","data-testid","home-hover-disable","title","click button to toggle trigger disable bit",3,"click","mdePopoverTriggerFor","mdeDisablePopoverTrigger"],["data-testid","home-form-link","href","",3,"routerLink"],["data-testid","home-builder-link","href","",3,"routerLink"],["data-testid","home-list-link","href","",3,"routerLink"],[3,"mdePopoverLeaveDelay"],[1,"example-card"],["data-testid","home-hover-close-content"],["mat-button",""],[3,"mdePopoverOverlapTrigger","mdePopoverPositionX","mdePopoverPositionY"],["data-testid","home-click-center-content"],["data-testid","home-click-persist-content"],[3,"mdePopoverDisableAnimation","mdePopoverLeaveDelay","mdePopoverPositionX","mdePopoverPositionY"],["data-testid","home-hover-persist-content"],["data-testid","home-hover-disable-content"]],template:function(t,n){if(t&1&&(o(0,"p"),l(1,` This demo is still a work in progress, try clicking and hovering buttons for examples.
`),r(),o(2,"button",5),l(3,` Hover Me
`),r(),o(4,"button",6),l(5,` Click Me
`),r(),o(6,"button",7),l(7,` Click Me
`),r(),o(8,"button",8),l(9,` Hover Me
`),r(),o(10,"button",9),S("click",function(){return n.toggleDisableBit()}),l(11,` Hover Me
`),r(),o(12,"p"),l(13,` Try keyboard interaction on the chat example, to focus the previous element press SHIFT + TAB, to focus the next element press TAB. You should see the Focus being trapped inside the chat window.
`),r(),o(14,"ul")(15,"li")(16,"a",10),l(17," Form "),r()(),o(18,"li")(19,"a",11),l(20," Builder "),r()(),o(21,"li")(22,"a",12),l(23," List "),r()()(),o(24,"mde-popover",13,0)(26,"mat-card",14)(27,"mat-card-content")(28,"p",15),l(29,"Click popover, I will close."),r()(),o(30,"mat-card-actions")(31,"button",16),l(32,"LIKE"),r(),o(33,"button",16),l(34,"SHARE"),r()()()(),o(35,"mde-popover",17,1)(37,"mat-card",14)(38,"mat-card-content")(39,"p",18),l(40,"Click popover, I will close."),r()(),o(41,"mat-card-actions")(42,"button",16),l(43,"LIKE"),r(),o(44,"button",16),l(45,"SHARE"),r()()()(),o(46,"mde-popover",17,2)(48,"mat-card",14)(49,"mat-card-content")(50,"p",19),l(51,"Click popover, I will stay open."),r()(),o(52,"mat-card-actions")(53,"button",16),l(54,"LIKE"),r(),o(55,"button",16),l(56,"SHARE"),r()()()(),o(57,"mde-popover",20,3)(59,"mat-card",14)(60,"mat-card-content")(61,"p",21),l(62,"Click popover, I will stay open."),r()(),o(63,"mat-card-actions")(64,"button",16),l(65,"LIKE"),r(),o(66,"button",16),l(67,"SHARE"),r()()()(),o(68,"mde-popover",17,4)(70,"mat-card",14)(71,"mat-card-content")(72,"p",22),l(73,"Click popover, I will close."),r()(),o(74,"mat-card-actions")(75,"button",16),l(76,"LIKE"),r(),o(77,"button",16),l(78,"SHARE"),r()()()()),t&2){let a=y(25),s=y(36),p=y(47),f=y(58),x=y(69);d(2),m("mdePopoverTriggerFor",a),d(2),m("mdePopoverTriggerFor",s)("mdePopoverBackdropCloseOnClick",!0),d(2),m("mdePopoverTriggerFor",p)("mdePopoverCloseOnClick",!1),d(2),m("mdePopoverTriggerFor",f)("mdePopoverCloseOnClick",!1),d(2),m("mdePopoverTriggerFor",x)("mdeDisablePopoverTrigger",n.triggerdisable),d(6),m("routerLink",_e(26,aa)),d(3),m("routerLink",_e(27,ia)),d(3),m("routerLink",_e(28,oa)),d(2),m("mdePopoverLeaveDelay",1e3),d(11),m("mdePopoverOverlapTrigger",!1)("mdePopoverPositionX","center")("mdePopoverPositionY","above"),d(11),m("mdePopoverOverlapTrigger",!1)("mdePopoverPositionX","center")("mdePopoverPositionY","below"),d(11),m("mdePopoverDisableAnimation",!0)("mdePopoverLeaveDelay",1e3)("mdePopoverPositionX","before")("mdePopoverPositionY","center"),d(11),m("mdePopoverOverlapTrigger",!1)("mdePopoverPositionX","after")("mdePopoverPositionY","center")}},dependencies:[W,K,q,Y,zt,j,xe,Pe],styles:["[_nghost-%COMP%]{display:block;padding:40px}.example-card[_ngcontent-%COMP%]{max-width:300px}button[_ngcontent-%COMP%]{margin-right:20px}"]})}}return i})();var hn=[{path:"",component:bn,data:{meta:{title:"Home - Angular Popover Library",description:"Angular Popover Library using the CDK.",themeColor:"#FFFFFF"}}},{path:"examples",loadChildren:()=>import("./chunk-6KSIA3OJ.js").then(i=>i.ExamplesRoutes)},{path:"**",component:Vt}];ut(pn,{providers:[dt(),Wt(hn,jt()),pt(bt())]}).catch(i=>console.error(i));
