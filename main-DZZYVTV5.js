import{$ as x,$a as ke,A as oe,Aa as P,Ab as Oe,B,Ba as I,Bb as at,C as ot,Ca as me,Cb as It,D as m,Da as w,E as Z,Ea as G,Eb as Bt,F as N,Fa as l,G as D,Ga as be,Gb as Re,Hb as Fe,I as Dt,Ib as U,J as $,Ja as pe,Jb as Be,K as O,Ka as he,Kb as X,L as rt,La as ue,Lb as He,M as Ct,Ma as ut,Mb as St,Na as wt,Nb as ze,Ob as Mt,P as re,Pa as Ot,Pb as We,Q as st,Qb as Ve,R,Ra as ge,Rb as je,S as se,Sa as Tt,Ta as fe,U as xt,Ua as E,V as b,Va as Pt,W as kt,Wa as _e,X as lt,Xa as ve,Ya as ye,Za as Ce,_ as le,_a as xe,aa as H,ab as gt,ba as ct,ca as At,cb as we,d as F,da as ce,db as Rt,e as Gt,ea as de,eb as Te,f as ft,fa as L,fb as Pe,g as Ut,ga as dt,gb as Ie,h as j,ha as mt,hb as Se,i as Xt,ia as Lt,ib as Me,j as K,ja as bt,jb as Ft,ka as pt,kb as Ee,l as qt,la as p,lc as $e,m as Yt,ma as o,mb as Ne,n as _t,na as r,o as Kt,oa as k,oc as Qe,p as Zt,pc as Ge,q as Jt,qc as Ue,r as te,ra as Y,rb as De,rc as Xe,s as ee,sc as qe,t as ne,ta as A,tb as tt,tc as Ye,u as ae,ua as M,ub as Ae,v as vt,va as Q,w as ie,wa as z,x as it,xa as J,xb as Le,y as yt,ya as ht,yb as et,za as T,zb as nt}from"./chunk-VCVEXFN4.js";var wn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=H({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),Je=(()=>{class i{_elementRef=m(R);_platform=m(gt);_document=m($);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=(function(){let t=["*",[["mat-toolbar-row"]]];return x({type:i,selectors:[["mat-toolbar"]],contentQueries:function(a,s,c){if(a&1&&J(c,wn,5),a&2){let g;T(g=P())&&(s._toolbarRows=g)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(a,s){a&2&&(G(s.color?"mat-"+s.color:""),w("mat-toolbar-multiple-rows",s._toolbarRows.length>0)("mat-toolbar-single-row",s._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:["*","mat-toolbar-row"],decls:2,vars:0,template:function(a,s){a&1&&(Q(t),z(0),z(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2})})()}return i})();function tn(i){return Error(`Unable to find icon with the name "${i}"`)}function Tn(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function en(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function nn(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var V=class{url;svgText;options;svgElement=null;constructor(_,t,e){this.url=_,this.svgText=t,this.options=e}},on=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass;constructor(t,e,n,a){this._httpClient=t,this._sanitizer=e,this._errorHandler=a,this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,a){return this._addSvgIconConfig(t,e,new V(n,null,a))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,a){let s=this._sanitizer.sanitize(Z.HTML,n);if(!s)throw nn(n);let c=tt(s);return this._addSvgIconConfig(t,e,new V("",c,a))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new V(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let a=this._sanitizer.sanitize(Z.HTML,e);if(!a)throw nn(e);let s=tt(a);return this._addSvgIconSetConfig(t,new V("",s,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=In(this._document),this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(Z.RESOURCE_URL,t);if(!e)throw en(t);let n=this._cachedIconsByUrl.get(e);return n?j(Et(n)):this._loadSvgIconFromConfig(new V(t,null)).pipe(yt(a=>this._cachedIconsByUrl.set(e,a)),K(a=>Et(a)))}getNamedSvgIcon(t,e=""){let n=an(e,t),a=this._svgIconConfigs.get(n);if(a)return this._getSvgFromConfig(a);if(a=this._getIconConfigFromResolvers(e,t),a)return this._svgIconConfigs.set(n,a),this._getSvgFromConfig(a);let s=this._iconSetConfigs.get(e);return s?this._getSvgFromIconSetConfigs(t,s):Xt(tn(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?j(Et(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(K(e=>Et(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return j(n);let a=e.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(Zt(c=>{let y=`Loading icon set URL: ${this._sanitizer.sanitize(Z.RESOURCE_URL,s.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(y)),j(null)})));return qt(a).pipe(K(()=>{let s=this._extractIconWithNameFromAnySet(t,e);if(!s)throw tn(t);return s}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let a=e[n];if(a.svgText&&a.svgText.toString().indexOf(t)>-1){let s=this._svgElementFromConfig(a),c=this._extractSvgIconFromSet(s,t,a.options);if(c)return c}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(yt(e=>t.svgText=e),K(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?j(null):this._fetchIcon(t).pipe(yt(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let a=t.querySelector(`[id="${e}"]`);if(!a)return null;let s=a.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,n);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),n);let c=this._svgElementFromString(tt("<svg></svg>"));return c.appendChild(s),this._setSvgAttributes(c,n)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){let e=this._svgElementFromString(tt("<svg></svg>")),n=t.attributes;for(let a=0;a<n.length;a++){let{name:s,value:c}=n[a],g=s.toLowerCase();g!=="id"&&!g.startsWith("on")&&e.setAttribute(s,c)}for(let a=0;a<t.childNodes.length;a++)t.childNodes[a].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[a].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,a=n?.withCredentials??!1;if(!this._httpClient)throw Tn();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let s=this._sanitizer.sanitize(Z.RESOURCE_URL,e);if(!s)throw en(e);let c=this._inProgressUrlFetches.get(s);if(c)return c;let g=this._httpClient.get(s,{responseType:"text",withCredentials:a}).pipe(K(y=>tt(y)),ee(()=>this._inProgressUrlFetches.delete(s)),ne());return this._inProgressUrlFetches.set(s,g),g}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(an(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let a=this._resolvers[n](e,t);if(a)return Pn(a)?new V(a.url,null,a.options):new V(a,null)}}static \u0275fac=function(e){return new(e||i)(ot(_e,8),ot(ke),ot($,8),ot(Ct))};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Et(i){return i.cloneNode(!0)}function an(i,_){return i+":"+_}function Pn(i){return!!(i.url&&i.options)}function In(i){let _=null,t=!1;return i.fonts&&typeof i.fonts.forEach=="function"&&i.fonts.forEach(e=>{let n=e.family.replace(/['"]/g,"").trim().toLowerCase();(n==="material icons"||n.startsWith("material icons "))&&(t=!0),n.startsWith("material symbols rounded")?_="rounded":n.startsWith("material symbols sharp")?_="sharp":n.startsWith("material symbols")&&(_="outlined")}),[_&&!t?`material-symbols-${_}`:"material-icons","mat-ligature-font"]}var Sn=new B("MAT_ICON_DEFAULT_OPTIONS"),Mn=new B("mat-icon-location",{providedIn:"root",factory:()=>{let i=m($),_=i?i.location:null;return{getPathname:()=>_?_.pathname+_.search:""}}}),rn=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],En=rn.map(i=>`[${i}]`).join(", "),Nn=/^url\(['"]?#(.*?)['"]?\)$/,q=(()=>{class i{_elementRef=m(R);_iconRegistry=m(on);_location=m(Mn);_errorHandler=m(Ct);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=F.EMPTY;constructor(){let t=m(new Ot("aria-hidden"),{optional:!0}),e=m(Sn,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences,n=t.startsWith("//")?`/.${t}`:t;e&&e.forEach((a,s)=>{a.forEach(c=>{s.setAttribute(c.name,`url('${n}#${c.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(En),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let a=0;a<e.length;a++)rn.forEach(s=>{let c=e[a],g=c.getAttribute(s),y=g?g.match(Nn):null;if(y){let h=n.get(c);h||(h=[],n.set(c,h)),h.push({name:s,value:y[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(te(1)).subscribe(a=>this._setSvgElement(a),a=>{let s=`Error retrieving icon ${e}:${n}! ${a.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=(function(){return x({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,a){n&2&&(L("data-mat-icon-type",a._usingFontIcon()?"font":"svg")("data-mat-icon-name",a._svgName||a.fontIcon)("data-mat-icon-namespace",a._svgNamespace||a.fontSet)("fontIcon",a._usingFontIcon()?a.fontIcon:null),G(a.color?"mat-"+a.color:""),w("mat-icon-inline",a.inline)("mat-icon-no-color",a.color!=="primary"&&a.color!=="accent"&&a.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",E],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:["*"],decls:1,vars:0,template:function(n,a){n&1&&(Q(),z(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2})})()}return i})();var Dn=(i,_)=>_.className;function An(i,_){i&1&&(o(0,"mat-icon"),l(1,"check_circle"),r())}function Ln(i,_){if(i&1){let t=Y();o(0,"button",2),A("click",function(){let n=N(t).$implicit,a=M();return D(a.theme.set(n.className))})("focus",function(){let n=N(t).$implicit,a=M();return D(a.hovering=n.className)})("mouseenter",function(){let n=N(t).$implicit,a=M();return D(a.hovering=n.className)})("mouseleave",function(){N(t);let n=M();return D(n.hovering=null)}),dt(1,An,2,0,"mat-icon"),r()}if(i&2){let t=_.$implicit,e=M();w("current",e.theme()===t.className)("hover",e.hovering!==null),p("ngStyle",t.styles),L("data-testid","theme-"+t.className)("aria-label",t.label)("cdkFocusInitial",e.theme()===t.className||null),b(),mt(e.theme()===t.className?1:-1)}}var sn=(()=>{class i{constructor(){this.hovering=null,this.elevation=!0,this.items=[{className:"indigo-pink-theme",label:"Indigo and pink",styles:{"background-color":"#6750A4",background:"-webkit-linear-gradient(-45deg, #6750A4 0%, #6750A4 50%, #F06292 51%, #F06292 100%)"}},{className:"pink-bluegrey-theme",label:"Pink and blue grey",styles:{"background-color":"#AB2E5C",background:"-webkit-linear-gradient(-45deg, #AB2E5C 0%, #AB2E5C 50%, #5E92F3 51%, #5E92F3 100%)"}},{className:"indigo-grey-theme",label:"Indigo and grey",styles:{"background-color":"#6750A4",background:"-webkit-linear-gradient(-45deg, #6750A4 0%, #6750A4 50%, #90CAF9 51%, #90CAF9 100%)"}},{className:"purple-green-theme",label:"Purple and green",styles:{"background-color":"#8559A5",background:"-webkit-linear-gradient(-45deg, #8559A5 0%, #8559A5 50%, #4CAF50 51%, #4CAF50 100%)"}},{className:"cyan-orange-theme",label:"Cyan and orange",styles:{"background-color":"#00ACC1",background:"-webkit-linear-gradient(-45deg, #00ACC1 0%, #00ACC1 50%, #FF9800 51%, #FF9800 100%)"}},{className:"custom-dark-theme",label:"Custom dark",styles:{"background-color":"#CA9577",background:"-webkit-linear-gradient(-45deg, #CA9577 0%, #CA9577 50%, #387A71 51%, #387A71 100%)"}}],this.theme=ge("")}onItemKeydown(t){t.key==="Tab"&&(this.hovering=null)}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=x({type:i,selectors:[["app-theme-picker"]],hostVars:2,hostBindings:function(e,n){e&2&&w("mat-elevation-z4",n.elevation)},inputs:{theme:[1,"theme"]},outputs:{theme:"themeChange"},decls:3,vars:0,consts:[["tabindex","-1",1,"container",3,"keydown"],["mat-button","",1,"item",3,"ngStyle","current","hover"],["mat-button","",1,"item",3,"click","focus","mouseenter","mouseleave","ngStyle"]],template:function(e,n){e&1&&(o(0,"div",0),A("keydown",function(s){return n.onItemKeydown(s)}),bt(1,Ln,2,9,"button",1,Dn),r()),e&2&&(b(),pt(n.items))},dependencies:[U,Ce,q],styles:["[_nghost-%COMP%]{display:flex;background:#e5e5e5;flex-wrap:wrap;max-width:240px;width:240px;border:4px solid #ffffff}.container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;width:100%}.item[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex:1 1 auto;width:80px;min-width:80px;min-height:80px;max-width:80px;max-height:80px;height:80px;border:4px solid #ffffff;box-sizing:border-box;cursor:pointer;color:#fff}.item.hover[_ngcontent-%COMP%]:not(:hover){opacity:.5}.item[_ngcontent-%COMP%]:focus{opacity:1!important}.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16pt}"],changeDetection:1})}}return i})();var Fn=new B("MatTabContent"),Bn=(()=>{class i{template=m(kt);static \u0275fac=function(e){return new(e||i)};static \u0275dir=H({type:i,selectors:[["","matTabContent",""]],features:[ut([{provide:Fn,useExisting:i}])]})}return i})(),Hn=new B("MatTabLabel"),mn=new B("MAT_TAB"),zn=(()=>{class i extends Me{_closestTab=m(mn,{optional:!0});static \u0275fac=(()=>{let t;return function(n){return(t||(t=st(i)))(n||i)}})();static \u0275dir=H({type:i,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[ut([{provide:Hn,useExisting:i}]),ct]})}return i})(),bn=new B("MAT_TAB_GROUP"),Qt=(()=>{class i{_viewContainerRef=m(le);_closestTabGroup=m(bn,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new ft;position=null;origin=null;isActive=!1;constructor(){m(we).load(Re)}ngOnChanges(t){(Object.hasOwn(t,"textLabel")||Object.hasOwn(t,"disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Se(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=(function(){let t=["*"];function e(n,a){n&1&&z(0)}return x({type:i,selectors:[["mat-tab"]],contentQueries:function(a,s,c){if(a&1&&J(c,zn,5)(c,Bn,7,kt),a&2){let g;T(g=P())&&(s.templateLabel=g.first),T(g=P())&&(s._explicitContent=g.first)}},viewQuery:function(a,s){if(a&1&&ht(kt,7),a&2){let c;T(c=P())&&(s._implicitContent=c.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(a,s){a&2&&L("id",null)},inputs:{disabled:[2,"disabled","disabled",E],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[ut([{provide:mn,useExisting:i}]),re],ngContentSelectors:t,decls:1,vars:0,template:function(a,s){a&1&&(Q(),ce(0,e,1,0,"ng-template"))},encapsulation:2,changeDetection:1})})()}return i})(),zt="mdc-tab-indicator--active",ln="mdc-tab-indicator--no-transition",Vt=class{_items;_currentItem;constructor(_){this._items=_}hide(){this._items.forEach(_=>_.deactivateInkBar()),this._currentItem=void 0}alignToElement(_){let t=this._items.find(n=>n.elementRef.nativeElement===_),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}},Wn=(()=>{class i{_elementRef=m(R);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(zt);return}let n=e.getBoundingClientRect(),a=t.width/n.width,s=t.left-n.left;e.classList.add(ln),this._inkBarContentElement.style.setProperty("transform",`translateX(${s}px) scaleX(${a})`),e.getBoundingClientRect(),e.classList.remove(ln),e.classList.add(zt),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(zt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),n=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||i)};static \u0275dir=H({type:i,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",E]}})}return i})();var pn=(()=>{class i extends Wn{elementRef=m(R);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(n){return(t||(t=st(i)))(n||i)}})();static \u0275dir=H({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,n){e&2&&(L("aria-disabled",!!n.disabled),w("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",E]},features:[ct]})}return i})(),cn={passive:!0},Vn=650,jn=100;function Wt(i){let _=i+"";return/^[0-9]+(?:\.[0-9]+)?$/.test(_)?`${i}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(_)?_:""}var $n=(()=>{class i{_elementRef=m(R);_changeDetectorRef=m(Tt);_viewportRuler=m(Pe);_dir=m(Rt,{optional:!0});_ngZone=m(rt);_platform=m(gt);_sharedResizeObserver=m(je);_injector=m(Dt);_renderer=m(lt);_animationsDisabled=It();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new ft;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new ft;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new O;indexFocused=new O;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),cn),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),cn))}ngAfterContentInit(){let t=this._dir?this._dir.change:j("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Jt(32),it(this._destroyed)),n=this._viewportRuler.change(150).pipe(it(this._destroyed)),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Le(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),xt(a,{injector:this._injector}),_t(t,n,e,this._items.changes,this._itemsResized()).pipe(it(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(s=>{this.indexFocused.emit(s),this._setTabFocus(s)})}_itemsResized(){return typeof ResizeObserver!="function"?Ut:this._items.changes.pipe(vt(this._items),ie(t=>new Gt(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(a=>e.next(a));return t.forEach(a=>n.observe(a.elementRef.nativeElement)),()=>{n.disconnect()}}))),ae(1),Kt(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Ee(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:s}=e.elementRef.nativeElement,c,g;this._getLayoutDirection()=="ltr"?(c=a,g=c+s):(g=this._tabListInner.nativeElement.offsetWidth-a,c=g-s);let y=this.scrollDistance,h=this.scrollDistance+n;c<y?this.scrollDistance-=y-c:g>h&&(this.scrollDistance+=Math.min(g-h,c-y))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,n=t-e>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Yt(Vn,jn).pipe(it(_t(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:a}=this._scrollHeader(t);(a===0||a>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||i)};static \u0275dir=H({type:i,inputs:{disablePagination:[2,"disablePagination","disablePagination",E],selectedIndex:[2,"selectedIndex","selectedIndex",Pt]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return i})(),Qn=(()=>{class i extends $n{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Vt(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=st(i)))(n||i)}})();static \u0275cmp=(function(){let t=["tabListContainer"],e=["tabList"],n=["tabListInner"],a=["nextPaginator"],s=["previousPaginator"];return x({type:i,selectors:[["mat-tab-header"]],contentQueries:function(y,h,u){if(y&1&&J(u,pn,4),y&2){let f;T(f=P())&&(h._items=f)}},viewQuery:function(y,h){if(y&1&&ht(t,7)(e,7)(n,7)(a,5)(s,5),y&2){let u;T(u=P())&&(h._tabListContainer=u.first),T(u=P())&&(h._tabList=u.first),T(u=P())&&(h._tabListInner=u.first),T(u=P())&&(h._nextPaginator=u.first),T(u=P())&&(h._previousPaginator=u.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(y,h){y&2&&w("mat-mdc-tab-header-pagination-controls-enabled",h._showPaginationControls)("mat-mdc-tab-header-rtl",h._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",E]},features:[ct],ngContentSelectors:["*"],decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(y,h){y&1&&(Q(),o(0,"div",5,0),A("click",function(){return h._handlePaginatorClick("before")})("mousedown",function(f){return h._handlePaginatorPress("before",f)})("touchend",function(){return h._stopInterval()}),k(2,"div",6),r(),o(3,"div",7,1),A("keydown",function(f){return h._handleKeydown(f)}),o(5,"div",8,2),A("cdkObserveContent",function(){return h._onContentChanges()}),o(7,"div",9,3),z(9),r()()(),o(10,"div",10,4),A("mousedown",function(f){return h._handlePaginatorPress("after",f)})("click",function(){return h._handlePaginatorClick("after")})("touchend",function(){return h._stopInterval()}),k(12,"div",6),r()),y&2&&(w("mat-mdc-tab-header-pagination-disabled",h._disableScrollBefore),p("matRippleDisabled",h._disableScrollBefore||h.disableRipple),b(3),w("_mat-animation-noopable",h._animationsDisabled),b(2),L("aria-label",h.ariaLabel||null)("aria-labelledby",h.ariaLabelledby||null),b(5),w("mat-mdc-tab-header-pagination-disabled",h._disableScrollAfter),p("matRippleDisabled",h._disableScrollAfter||h.disableRipple))},dependencies:[Bt,Ae],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2,changeDetection:1})})()}return i})(),Gn=new B("MAT_TABS_CONFIG"),dn=(()=>{class i extends Ft{_host=m(jt);_ngZone=m(rt);_centeringSub=F.EMPTY;_leavingSub=F.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(vt(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=st(i)))(n||i)}})();static \u0275dir=H({type:i,selectors:[["","matTabBodyHost",""]],features:[ct]})}return i})(),jt=(()=>{class i{_elementRef=m(R);_dir=m(Rt,{optional:!0});_ngZone=m(rt);_injector=m(Dt);_renderer=m(lt);_diAnimationsDisabled=It();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=F.EMPTY;_position;_previousPosition;_onCentering=new O;_beforeCentering=new O;_afterLeavingCenter=new O;_onCentered=new O(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=m(Tt);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),xt(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),xt(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=(function(){let t=["content"];function e(n,a){}return x({type:i,selectors:[["mat-tab-body"]],viewQuery:function(a,s){if(a&1&&ht(dn,5)(t,5),a&2){let c;T(c=P())&&(s._portalHost=c.first),T(c=P())&&(s._contentElement=c.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(a,s){a&2&&L("inert",s._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(a,s){a&1&&(o(0,"div",1,0),At(2,e,0,0,"ng-template",2),r()),a&2&&w("mat-tab-body-content-left",s._position==="left")("mat-tab-body-content-right",s._position==="right")("mat-tab-body-content-can-animate",s._position==="center"||s._previousPosition==="center")},dependencies:[dn,Te],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2,changeDetection:1})})()}return i})(),hn=(()=>{class i{_elementRef=m(R);_changeDetectorRef=m(Tt);_ngZone=m(rt);_tabsSubscription=F.EMPTY;_tabLabelSubscription=F.EMPTY;_tabBodySubscription=F.EMPTY;_diAnimationsDisabled=It();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new se;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t=="object"?(this._bodyAnimationDuration=Wt(t.body),this._headerAnimationDuration=Wt(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=Wt(t)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new O;focusChange=new O;animationDone=new O;selectedTabChange=new O(!0);_groupId;_isServer=!m(gt).isBrowser;constructor(){let t=m(Gn,{optional:!0});this._groupId=m(Ie).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,a)=>n.isActive=a===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let a=0;a<e.length;a++)if(e[a].isActive){this._indexToSelect=this._selectedIndex=a,this._lastFocusedTabIndex=null,n=e[a];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(vt(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new $t;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=_t(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration==="0"||this._bodyAnimationDuration==="0ms"}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=(function(){let t=["tabBodyWrapper"],e=["tabHeader"],n=["*"];function a(u,f){}function s(u,f){if(u&1&&At(0,a,0,0,"ng-template",12),u&2){let d=M().$implicit;p("cdkPortalOutlet",d.templateLabel)}}function c(u,f){if(u&1&&l(0),u&2){let d=M().$implicit;be(d.textLabel)}}function g(u,f){if(u&1){let d=Y();o(0,"div",7,2),A("click",function(){let v=N(d),S=v.$implicit,Nt=v.$index,xn=M(),kn=I(1);return D(xn._handleClick(S,kn,Nt))})("cdkFocusChange",function(v){let S=N(d).$index,Nt=M();return D(Nt._tabFocusChanged(v,S))}),k(2,"span",8)(3,"div",9),o(4,"span",10)(5,"span",11),dt(6,s,1,1,null,12)(7,c,1,1),r()()()}if(u&2){let d=f.$implicit,C=f.$index,v=I(1),S=M();G(d.labelClass),w("mdc-tab--active",S.selectedIndex===C),p("id",S._getTabLabelId(d,C))("disabled",d.disabled)("fitInkBarToContent",S.fitInkBarToContent),L("tabIndex",S._getTabIndex(C))("aria-posinset",C+1)("aria-setsize",S._tabs.length)("aria-controls",S._getTabContentId(C))("aria-selected",S.selectedIndex===C)("aria-label",d.ariaLabel||null)("aria-labelledby",!d.ariaLabel&&d.ariaLabelledby?d.ariaLabelledby:null),b(3),p("matRippleTrigger",v)("matRippleDisabled",d.disabled||S.disableRipple),b(3),mt(d.templateLabel?6:7)}}function y(u,f){u&1&&z(0)}function h(u,f){if(u&1){let d=Y();o(0,"mat-tab-body",13),A("_onCentered",function(){N(d);let v=M();return D(v._removeTabBodyWrapperHeight())})("_onCentering",function(v){N(d);let S=M();return D(S._setTabBodyWrapperHeight(v))})("_beforeCentering",function(v){N(d);let S=M();return D(S._bodyCentered(v))}),r()}if(u&2){let d=f.$implicit,C=f.$index,v=M();G(d.bodyClass),p("id",v._getTabContentId(C))("content",d.content)("position",d.position)("animationDuration",v._bodyAnimationDuration)("preserveContent",v.preserveContent),L("tabindex",v.contentTabIndex!=null&&v.selectedIndex===C?v.contentTabIndex:null)("aria-labelledby",v._getTabLabelId(d,C))("aria-hidden",v.selectedIndex!==C)}}return x({type:i,selectors:[["mat-tab-group"]],contentQueries:function(f,d,C){if(f&1&&J(C,Qt,5),f&2){let v;T(v=P())&&(d._allTabs=v)}},viewQuery:function(f,d){if(f&1&&ht(t,5)(e,5)(jt,5),f&2){let C;T(C=P())&&(d._tabBodyWrapper=C.first),T(C=P())&&(d._tabHeader=C.first),T(C=P())&&(d._tabBodies=C)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:13,hostBindings:function(f,d){f&2&&(L("mat-align-tabs",d.alignTabs),G("mat-"+(d.color||"primary")),me("--%NS%mat-tab-body-animation-duration",d._bodyAnimationDuration)("--%NS%mat-tab-header-animation-duration",d._headerAnimationDuration),w("mat-mdc-tab-group-dynamic-height",d.dynamicHeight)("mat-mdc-tab-group-inverted-header",d.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",d.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",E],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",E],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",E],selectedIndex:[2,"selectedIndex","selectedIndex",Pt],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Pt],disablePagination:[2,"disablePagination","disablePagination",E],disableRipple:[2,"disableRipple","disableRipple",E],preserveContent:[2,"preserveContent","preserveContent",E],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[ut([{provide:bn,useExisting:i}])],ngContentSelectors:n,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(f,d){f&1&&(Q(),o(0,"mat-tab-header",3,0),A("indexFocused",function(v){return d._focusChanged(v)})("selectFocusedIndex",function(v){return d.selectedIndex=v}),bt(2,g,8,17,"div",4,Lt),r(),dt(4,y,1,0),o(5,"div",5,1),bt(7,h,1,10,"mat-tab-body",6,Lt),r()),f&2&&(p("selectedIndex",d.selectedIndex||0)("disableRipple",d.disableRipple)("disablePagination",d.disablePagination),de("aria-label",d.ariaLabel)("aria-labelledby",d.ariaLabelledby),b(2),pt(d._tabs),b(2),mt(d._isServer?4:-1),b(),w("_mat-animation-noopable",d._bodyAnimationsDisabled()),b(2),pt(d._tabs))},dependencies:[Qn,pn,De,Bt,Ft,jt],styles:[`.mdc-tab {
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
`],encapsulation:2,changeDetection:1})})()}return i})(),$t=class{index;tab};var un=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=x({type:i,selectors:[["app-notifications"]],decls:28,vars:0,consts:[["data-testid","notifications-card",1,"example-card"],[1,"mat-elevation-z4"],["label","Alerts"],[1,"notification-content"],["label","Updates"]],template:function(e,n){e&1&&(o(0,"mat-card",0)(1,"mat-tab-group",1)(2,"mat-tab",2)(3,"div",3)(4,"h3"),l(5,"System Alerts"),r(),o(6,"p"),l(7,"There are 3 critical alerts that need your attention."),r(),o(8,"ul")(9,"li"),l(10,"Server CPU usage is at 95%."),r(),o(11,"li"),l(12,"Database backup failed last night."),r(),o(13,"li"),l(14,"New software update available."),r()()()(),o(15,"mat-tab",4)(16,"div",3)(17,"h3"),l(18,"Recent Updates"),r(),o(19,"p"),l(20,"Here are the latest updates from your projects:"),r(),o(21,"ul")(22,"li"),l(23,' Project Alpha: New feature "User Analytics" has been deployed. '),r(),o(24,"li"),l(25,"Project Beta: Bug fix for login issue has been applied."),r(),o(26,"li"),l(27,"Project Gamma: Documentation has been updated."),r()()()()()())},dependencies:[X,hn,Qt],styles:["[_nghost-%COMP%]{background-color:#e5e5e5;width:400px}.example-card[_ngcontent-%COMP%]{max-width:400px;width:300px;padding:16px}  .mat-mdc-tab-group{box-shadow:none}"]})}}return i})();var gn=(()=>{class i{constructor(){this.elevation=!0}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=x({type:i,selectors:[["app-github"]],hostVars:2,hostBindings:function(e,n){e&2&&w("mat-elevation-z4",n.elevation)},decls:9,vars:0,consts:[[1,"github-container"],["href","https://github.com/Muntazir86/mde-popover","target","_blank","rel","noopener noreferrer","data-testid","github-repo-link","mat-button","",1,"btn","repo-link"],["href","https://github.com/Muntazir86/mde-popover/issues","target","_blank","rel","noopener noreferrer","data-testid","github-issues-link","mat-button","",1,"btn","issues-link"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"a",1)(2,"mat-icon"),l(3,"link"),r(),l(4," Repo "),r(),o(5,"a",2)(6,"mat-icon"),l(7,"bug_report"),r(),l(8," Issues "),r()())},dependencies:[U,q],styles:["[_nghost-%COMP%]{display:block;max-width:250px;background-color:#fff;padding:10px}.github-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.btn[_ngcontent-%COMP%]{padding:10px 20px;color:#fff;border-radius:4px;text-decoration:none;display:inline-flex;align-items:center;margin-right:10px;margin-bottom:5px}.repo-link[_ngcontent-%COMP%]{background-color:#1976d2}.issues-link[_ngcontent-%COMP%]{background-color:#d32f2f}.icon[_ngcontent-%COMP%]{vertical-align:middle;margin-right:5px}"]})}}return i})();var _n=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=x({type:i,selectors:[["app-support"]],decls:77,vars:30,consts:[["userPopover","mdePopover"],["data-testid","support-chat",1,"google-chat"],[1,"toolbar"],[1,"settings"],["button-plain","","type","button","aria-label","Settings","mdTooltip","Settings","mdTooltipPosition","below"],[1,"title"],[1,"clear"],["button-plain","","type","button","aria-label","Close chat","mdTooltip","Close","mdTooltipPosition","below"],[1,"discussion"],[1,"other"],[1,"avatar"],["data-testid","support-avatar","alt","Timothy","src","assets/images/avatar-indigo.svg","mdePopoverPositionX","after","mdePopoverPositionY","below","mdePopoverArrowColor","#ffffff","mdePopoverTriggerOn","hover",3,"mdePopoverTriggerFor","mdePopoverArrowOffsetX","mdePopoverArrowWidth","mdePopoverOverlapTrigger","mdePopoverEnterDelay"],[1,"messages"],["datetime","2009-11-13T20:00"],[1,"self"],["data-testid","support-avatar","alt","You","src","assets/images/avatar-red.svg","mdePopoverPositionX","before","mdePopoverPositionY","below","mdePopoverArrowColor","#ffffff","mdePopoverTriggerOn","hover",3,"mdePopoverTriggerFor","mdePopoverArrowOffsetX","mdePopoverArrowWidth","mdePopoverOverlapTrigger","mdePopoverEnterDelay"],["datetime","2009-11-13T20:14"],["data-testid","support-avatar","alt","You","src","assets/images/avatar-red.svg","mdePopoverPositionX","before","mdePopoverPositionY","below","mdePopoverArrowColor","#000000","mdePopoverTriggerOn","click",3,"mdePopoverTriggerFor","mdePopoverArrowOffsetX","mdePopoverArrowWidth","mdePopoverOverlapTrigger","mdePopoverEnterDelay"],[1,"form"],[2,"width","100%","margin-bottom","-10px"],["matInput","","data-testid","support-message","aria-label","Message","placeholder","Message","cdkFocusInitial",""],["data-testid","support-user-card",2,"width","200px"],["mat-card-avatar","","data-testid","support-user-avatar","alt","Joe Blogs","src","assets/images/avatar-indigo.svg"]],template:function(e,n){if(e&1&&(o(0,"div",1)(1,"div",2)(2,"div",3)(3,"button",4)(4,"mat-icon"),l(5,"settings"),r()()(),o(6,"div",5),l(7,"Lounge"),r(),o(8,"div",6)(9,"button",7)(10,"mat-icon"),l(11,"close"),r()()()(),o(12,"ol",8)(13,"li",9)(14,"div",10),k(15,"img",11),r(),o(16,"div",12)(17,"p"),l(18,"I need you to complete this by today if possible."),r(),o(19,"time",13),l(20,"Timothy \u2022 51 min"),r()()(),o(21,"li",14)(22,"div",10),k(23,"img",15),r(),o(24,"div",12)(25,"p"),l(26,"That should be fine."),r(),o(27,"p"),l(28,"It's a pretty small task."),r(),o(29,"time",16),l(30,"50 mins"),r()()(),o(31,"li",9)(32,"div",10),k(33,"img",11),r(),o(34,"div",12)(35,"p"),l(36,"That's great."),r(),o(37,"p"),l(38,"Ping me once you've completed it."),r(),o(39,"time",16),l(40,"49 mins"),r()()(),o(41,"li",14)(42,"div",10),k(43,"img",17),r(),o(44,"div",12)(45,"p"),l(46,"I will do!"),r(),o(47,"time",16),l(48,"45 mins"),r()()(),o(49,"li",14)(50,"div",10),k(51,"img",15),r(),o(52,"div",12)(53,"p"),l(54,"Quick question"),r(),o(55,"p"),l(56,"What colour should it use?"),r(),o(57,"time",16),l(58,"37 mins"),r()()(),o(59,"li",9)(60,"div",10),k(61,"img",11),r(),o(62,"div",12)(63,"p"),l(64,"Material colours obviously :)"),r()()()(),o(65,"div",18)(66,"mat-form-field",19),k(67,"input",20),r()()(),o(68,"mde-popover",null,0)(70,"mat-card",21)(71,"mat-card-header"),k(72,"img",22),o(73,"mat-card-title"),l(74,"Joe Blogs"),r(),o(75,"mat-card-subtitle"),l(76,"Angular"),r()()()()),e&2){let a=I(69);b(15),p("mdePopoverTriggerFor",a)("mdePopoverArrowOffsetX",20)("mdePopoverArrowWidth",8)("mdePopoverOverlapTrigger",!1)("mdePopoverEnterDelay",200),b(8),p("mdePopoverTriggerFor",a)("mdePopoverArrowOffsetX",20)("mdePopoverArrowWidth",8)("mdePopoverOverlapTrigger",!1)("mdePopoverEnterDelay",200),b(10),p("mdePopoverTriggerFor",a)("mdePopoverArrowOffsetX",20)("mdePopoverArrowWidth",8)("mdePopoverOverlapTrigger",!1)("mdePopoverEnterDelay",200),b(10),p("mdePopoverTriggerFor",a)("mdePopoverArrowOffsetX",20)("mdePopoverArrowWidth",8)("mdePopoverOverlapTrigger",!1)("mdePopoverEnterDelay",200),b(8),p("mdePopoverTriggerFor",a)("mdePopoverArrowOffsetX",20)("mdePopoverArrowWidth",8)("mdePopoverOverlapTrigger",!1)("mdePopoverEnterDelay",200),b(10),p("mdePopoverTriggerFor",a)("mdePopoverArrowOffsetX",20)("mdePopoverArrowWidth",8)("mdePopoverOverlapTrigger",!1)("mdePopoverEnterDelay",200)}},dependencies:[q,at,et,nt,$e,Qe,X,We,Ve,He,ze],styles:['.google-chat[_ngcontent-%COMP%]{background-color:#e5e5e5;width:320px;box-sizing:border-box}.google-chat[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]{color:#666;font:16px Roboto,arial,sans-serif;height:40px;overflow:visible;position:relative;padding:4px 20px;box-sizing:border-box;width:320px}.google-chat[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   md-icon[_ngcontent-%COMP%]{color:#a9a9a9}.google-chat[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   [button-plain][_ngcontent-%COMP%]{border:none;background:transparent;cursor:pointer;padding:0}.google-chat[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]{padding:8px 0;position:absolute;top:4px;left:20px}.google-chat[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#666;font:16px Roboto,arial,sans-serif;line-height:40px;overflow:hidden;padding:0 35px;text-align:center;text-overflow:ellipsis;vertical-align:top;white-space:nowrap}.google-chat[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .clear[_ngcontent-%COMP%]{padding:8px 0;position:absolute;top:4px;right:20px}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]{list-style:none;background:#e5e5e5;margin:0;padding:0 0 50px;max-height:300px;overflow:hidden}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem;overflow:hidden;display:flex}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:40px;min-width:40px;position:relative}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   .other[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;right:0;width:0;height:0;border:5px solid white;border-left-color:transparent;border-bottom-color:transparent}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   .self[_ngcontent-%COMP%]{justify-content:flex-end;align-items:flex-end}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   .self[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]{order:1;border-bottom-right-radius:0}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   .self[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{order:2}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   .self[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;width:0;height:0;border:5px solid white;border-right-color:transparent;border-top-color:transparent;box-shadow:1px 1px 2px #0003}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]{background:#fff;padding:10px;border-radius:2px;box-shadow:0 1px 2px #0003}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8rem;margin:0 0 .2rem}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{font-size:.7rem;color:#ccc}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]:hover{overflow:auto}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]:hover::-webkit-scrollbar{width:3px;height:3px}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]:hover::-webkit-scrollbar-button{width:0px;height:0px}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]:hover::-webkit-scrollbar-thumb{background:#7d7d7d;border:0px none #ffffff;border-radius:50px}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]:hover::-webkit-scrollbar-thumb:hover{background:#626262}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]:hover::-webkit-scrollbar-thumb:active{background:#555}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]:hover::-webkit-scrollbar-track{background:#acacac;border:0px none #ffffff;border-radius:50px}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]:hover::-webkit-scrollbar-track:hover{background:#acacac}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]:hover::-webkit-scrollbar-track:active{background:#c3c3c3}.google-chat[_ngcontent-%COMP%]   .discussion[_ngcontent-%COMP%]:hover::-webkit-scrollbar-corner{background:transparent}']})}}return i})();var Un="indigo-pink-theme",vn=(()=>{class i{get themeClass(){return this._themeClass}set themeClass(t){t&&(this.renderer.removeClass(this.document.body,this._themeClass),this.overlayContainer.getContainerElement().classList.remove(this._themeClass),this.renderer.addClass(this.document.body,t),this.overlayContainer.getContainerElement().classList.add(t),this._themeClass=t)}constructor(){this._themeClass=Un,this.overlayContainer=m(Ne),this.renderer=m(lt),this.document=m($),this.renderer.addClass(this.document.body,this.themeClass),this.overlayContainer.getContainerElement().classList.add(this.themeClass)}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=x({type:i,selectors:[["app-root"]],decls:40,vars:30,consts:[["mainToolbar","mdePopoverTarget"],["themePopover","mdePopover"],["notificationsPopover","mdePopover"],["githubPopover","mdePopover"],["popover","mdePopover"],["supportPopover","mdePopover"],["color","primary","mdePopoverTarget",""],["mat-button","","data-testid","nav-menu-trigger","mdePopoverTriggerOn","click",3,"mdePopoverTriggerFor"],[1,"fill"],["mat-icon-button","","data-testid","nav-theme-trigger","aria-label","Choose theme","mdePopoverTriggerOn","click",3,"mdePopoverTriggerFor","mdePopoverTargetAt"],["mat-icon-button","","data-testid","nav-notifications-trigger","aria-label","Notifications","mdePopoverTriggerOn","click",3,"mdePopoverTriggerFor","mdePopoverTargetAt"],["mat-icon-button","","data-testid","nav-github-trigger","aria-label","GitHub","mdePopoverTriggerOn","hover",3,"mdePopoverTriggerFor","mdePopoverTargetAt"],["src","assets/images/github-circle-white-transparent.svg","alt",""],["mdePopoverArrowColor","#FFFFFF","mdePopoverScrollStrategy","close",3,"mdePopoverOverlapTrigger","mdePopoverCloseOnClick","mdePopoverOffsetX","mdePopoverOffsetY","mdePopoverArrowOffsetX"],["data-testid","nav-theme-content",3,"themeChange","theme"],["mdePopoverArrowColor","#1b1c1b",3,"mdePopoverOverlapTrigger","mdePopoverOffsetX","mdePopoverOffsetY","mdePopoverArrowOffsetX","mdePopoverCloseOnClick"],["data-testid","nav-notifications-content"],["mdePopoverArrowColor","#FFFFFF","mdePopoverScrollStrategy","close",3,"mdePopoverOverlapTrigger","mdePopoverOffsetX","mdePopoverOffsetY","mdePopoverArrowOffsetX","mdePopoverCloseOnClick"],["data-testid","nav-github-content"],[1,"example-card"],["data-testid","nav-menu-content"],["mat-button",""],["mat-fab","","data-testid","nav-support-trigger","aria-label","Open support chat","mdePopoverArrowColor","#e5e5e5","mdePopoverTriggerOn","click",1,"support-button",3,"mdePopoverTriggerFor","mdePopoverCloseOnClick"],["mdePopoverPositionX","before","mdePopoverPositionY","above","mdePopoverTriggerOn","click","mdePopoverPlacement","bottom","mdePopoverScrollStrategy","block",3,"mdePopoverArrowOffsetX","mdePopoverArrowWidth","mdePopoverOverlapTrigger","mdeFocusTrapEnabled","mdePopoverEnterDelay"],["data-testid","nav-support-content"]],template:function(e,n){if(e&1){let a=Y();o(0,"mat-toolbar",6,0)(2,"button",7),l(3," Click Me "),r(),k(4,"div",8),o(5,"button",9)(6,"mat-icon"),l(7,"format_color_fill"),r()(),o(8,"button",10)(9,"mat-icon"),l(10,"notifications"),r()(),o(11,"button",11),k(12,"img",12),r()(),o(13,"mde-popover",13,1)(15,"app-theme-picker",14),ue("themeChange",function(c){return N(a),he(n.themeClass,c)||(n.themeClass=c),D(c)}),r()(),o(16,"mde-popover",15,2),k(18,"app-notifications",16),r(),o(19,"mde-popover",17,3),k(21,"app-github",18),r(),o(22,"mde-popover",null,4)(24,"mat-card",19)(25,"mat-card-content")(26,"p",20),l(27," The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. "),r()(),o(28,"mat-card-actions")(29,"button",21),l(30,"LIKE"),r(),o(31,"button",21),l(32,"SHARE"),r()()()(),o(33,"button",22)(34,"mat-icon"),l(35,"chat"),r()(),o(36,"mde-popover",23,5),k(38,"app-support",24),r(),k(39,"router-outlet")}if(e&2){let a=I(1),s=I(14),c=I(17),g=I(20),y=I(23),h=I(37);b(2),p("mdePopoverTriggerFor",y),b(3),p("mdePopoverTriggerFor",s)("mdePopoverTargetAt",a),b(3),p("mdePopoverTriggerFor",c)("mdePopoverTargetAt",a),b(3),p("mdePopoverTriggerFor",g)("mdePopoverTargetAt",a),b(2),p("mdePopoverOverlapTrigger",!1)("mdePopoverCloseOnClick",!1)("mdePopoverOffsetX",-16)("mdePopoverOffsetY",-10)("mdePopoverArrowOffsetX",58),b(2),pe("theme",n.themeClass),b(),p("mdePopoverOverlapTrigger",!1)("mdePopoverOffsetX",-16)("mdePopoverOffsetY",-10)("mdePopoverArrowOffsetX",58)("mdePopoverCloseOnClick",!1),b(3),p("mdePopoverOverlapTrigger",!1)("mdePopoverOffsetX",-16)("mdePopoverOffsetY",-10)("mdePopoverArrowOffsetX",18)("mdePopoverCloseOnClick",!1),b(14),p("mdePopoverTriggerFor",h)("mdePopoverCloseOnClick",!1),b(3),p("mdePopoverArrowOffsetX",28)("mdePopoverArrowWidth",16)("mdePopoverOverlapTrigger",!1)("mdeFocusTrapEnabled",!0)("mdePopoverEnterDelay",100)}},dependencies:[Je,at,et,nt,Oe,U,Fe,q,sn,un,gn,X,St,Mt,Be,_n,Ge],styles:[".fill[_ngcontent-%COMP%]{flex:1 1 auto}.example-card[_ngcontent-%COMP%]{max-width:300px}.support-button[_ngcontent-%COMP%]{position:fixed;right:40px;bottom:40px;z-index:10}.container[_ngcontent-%COMP%]{padding:40px}"],changeDetection:1})}}return i})();var Xn=()=>["examples","form"],qn=()=>["examples","builder"],Yn=()=>["examples","list"],yn=(()=>{class i{constructor(){this.triggerdisable=!1}toggleDisableBit(){this.triggerdisable=!this.triggerdisable}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=x({type:i,selectors:[["app-page-home"]],decls:79,vars:29,consts:[["popover1","mdePopover"],["popover2","mdePopover"],["popover3","mdePopover"],["popover4","mdePopover"],["popover5","mdePopover"],["mat-raised-button","","color","primary","data-testid","home-hover-close",3,"mdePopoverTriggerFor"],["mat-raised-button","","color","accent","data-testid","home-click-center","mdePopoverTriggerOn","click",3,"mdePopoverTriggerFor","mdePopoverBackdropCloseOnClick"],["mat-button","","color","primary","data-testid","home-click-persist","mdePopoverTriggerOn","click",3,"mdePopoverTriggerFor","mdePopoverCloseOnClick"],["mat-button","","color","accent","data-testid","home-hover-persist",3,"mdePopoverTriggerFor","mdePopoverCloseOnClick"],["mat-raised-button","","color","primary","data-testid","home-hover-disable","title","click button to toggle trigger disable bit",3,"click","mdePopoverTriggerFor","mdeDisablePopoverTrigger"],["data-testid","home-form-link","href","",3,"routerLink"],["data-testid","home-builder-link","href","",3,"routerLink"],["data-testid","home-list-link","href","",3,"routerLink"],[3,"mdePopoverLeaveDelay"],[1,"example-card"],["data-testid","home-hover-close-content"],["mat-button",""],[3,"mdePopoverOverlapTrigger","mdePopoverPositionX","mdePopoverPositionY"],["data-testid","home-click-center-content"],["data-testid","home-click-persist-content"],[3,"mdePopoverDisableAnimation","mdePopoverLeaveDelay","mdePopoverPositionX","mdePopoverPositionY"],["data-testid","home-hover-persist-content"],["data-testid","home-hover-disable-content"]],template:function(e,n){if(e&1&&(o(0,"p"),l(1,` This demo is still a work in progress, try clicking and hovering buttons for examples.
`),r(),o(2,"button",5),l(3,` Hover Me
`),r(),o(4,"button",6),l(5,` Click Me
`),r(),o(6,"button",7),l(7,` Click Me
`),r(),o(8,"button",8),l(9,` Hover Me
`),r(),o(10,"button",9),A("click",function(){return n.toggleDisableBit()}),l(11,` Hover Me
`),r(),o(12,"p"),l(13,` Try keyboard interaction on the chat example, to focus the previous element press SHIFT + TAB, to focus the next element press TAB. You should see the Focus being trapped inside the chat window.
`),r(),o(14,"ul")(15,"li")(16,"a",10),l(17," Form "),r()(),o(18,"li")(19,"a",11),l(20," Builder "),r()(),o(21,"li")(22,"a",12),l(23," List "),r()()(),o(24,"mde-popover",13,0)(26,"mat-card",14)(27,"mat-card-content")(28,"p",15),l(29,"Click popover, I will close."),r()(),o(30,"mat-card-actions")(31,"button",16),l(32,"LIKE"),r(),o(33,"button",16),l(34,"SHARE"),r()()()(),o(35,"mde-popover",17,1)(37,"mat-card",14)(38,"mat-card-content")(39,"p",18),l(40,"Click popover, I will close."),r()(),o(41,"mat-card-actions")(42,"button",16),l(43,"LIKE"),r(),o(44,"button",16),l(45,"SHARE"),r()()()(),o(46,"mde-popover",17,2)(48,"mat-card",14)(49,"mat-card-content")(50,"p",19),l(51,"Click popover, I will stay open."),r()(),o(52,"mat-card-actions")(53,"button",16),l(54,"LIKE"),r(),o(55,"button",16),l(56,"SHARE"),r()()()(),o(57,"mde-popover",20,3)(59,"mat-card",14)(60,"mat-card-content")(61,"p",21),l(62,"Click popover, I will stay open."),r()(),o(63,"mat-card-actions")(64,"button",16),l(65,"LIKE"),r(),o(66,"button",16),l(67,"SHARE"),r()()()(),o(68,"mde-popover",17,4)(70,"mat-card",14)(71,"mat-card-content")(72,"p",22),l(73,"Click popover, I will close."),r()(),o(74,"mat-card-actions")(75,"button",16),l(76,"LIKE"),r(),o(77,"button",16),l(78,"SHARE"),r()()()()),e&2){let a=I(25),s=I(36),c=I(47),g=I(58),y=I(69);b(2),p("mdePopoverTriggerFor",a),b(2),p("mdePopoverTriggerFor",s)("mdePopoverBackdropCloseOnClick",!0),b(2),p("mdePopoverTriggerFor",c)("mdePopoverCloseOnClick",!1),b(2),p("mdePopoverTriggerFor",g)("mdePopoverCloseOnClick",!1),b(2),p("mdePopoverTriggerFor",y)("mdeDisablePopoverTrigger",n.triggerdisable),b(6),p("routerLink",wt(26,Xn)),b(3),p("routerLink",wt(27,qn)),b(3),p("routerLink",wt(28,Yn)),b(2),p("mdePopoverLeaveDelay",1e3),b(11),p("mdePopoverOverlapTrigger",!1)("mdePopoverPositionX","center")("mdePopoverPositionY","above"),b(11),p("mdePopoverOverlapTrigger",!1)("mdePopoverPositionX","center")("mdePopoverPositionY","below"),b(11),p("mdePopoverDisableAnimation",!0)("mdePopoverLeaveDelay",1e3)("mdePopoverPositionX","before")("mdePopoverPositionY","center"),b(11),p("mdePopoverOverlapTrigger",!1)("mdePopoverPositionX","after")("mdePopoverPositionY","center")}},dependencies:[U,at,et,nt,Ue,X,St,Mt],styles:["[_nghost-%COMP%]{display:block;padding:40px}.example-card[_ngcontent-%COMP%]{max-width:300px}button[_ngcontent-%COMP%]{margin-right:20px}"]})}}return i})();var Cn=[{path:"",component:yn,data:{meta:{title:"Home - Angular Popover Library",description:"Angular Popover Library using the CDK.",themeColor:"#FFFFFF"}}},{path:"examples",loadChildren:()=>import("./chunk-HKCW66LI.js").then(i=>i.ExamplesRoutes)},{path:"**",component:Ye}];xe(vn,{providers:[fe(),Xe(Cn,qe()),ve(ye())]}).catch(i=>console.error(i));
