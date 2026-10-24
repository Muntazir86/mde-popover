import{$ as T,$b as Ft,Aa as S,B as G,Ba as w,Bb as Mt,Ca as he,Cb as et,D as h,Da as O,Db as $e,Ea as st,Eb as It,F as v,Fa as d,Fb as ti,G as f,Ga as F,Gb as at,H as yt,Ha as U,I as Lt,Ia as qt,Ib as Qt,J as Ve,Ja as P,K as H,Ka as A,Kb as Xt,L as Le,La as D,Ma as J,Mb as Ut,N as wt,O as Ge,Oa as Yt,P as Rt,Pa as kt,Q as Gt,Qa as qe,R as Q,S as We,Sa as Z,Sb as Et,T as He,Tb as Zt,Ua as b,Ub as ei,V as s,Va as mt,Vb as ve,Wb as ii,X as pe,Xb as Jt,Y as C,Yb as fe,Z as N,Zb as $t,_b as ni,a as Vt,aa as xt,ac as be,b as Re,ba as Wt,bb as Ye,bc as te,c as Fe,ca as je,cb as nt,cc as ai,db as St,dc as ee,ec as Tt,f as K,fa as M,fb as Ke,fc as oi,ga as z,gb as $,gc as ie,ha as B,hc as ci,ia as vt,ic as ne,j as se,ja as ct,jc as ri,k as ze,ka as rt,kb as pt,kc as li,la as _,lb as Qe,lc as Ot,ma as a,mc as di,n as gt,na as c,nb as Xe,nc as si,o as me,oa as I,ob as ue,oc as Pt,pa as Ht,pb as ge,pc as mi,qa as jt,qb as Ct,r as Be,ra as tt,sa as lt,sb as Kt,ta as y,tc as _e,ua as R,v as ot,va as j,vb as Ue,w as Dt,wa as V,wb as Ze,x as q,xa as dt,xb as Je,ya as X,yb as Nt,z as _t,za as k,zb as ht}from"./chunk-VCVEXFN4.js";var ye=(()=>{class r{static{this.\u0275fac=function(i){return new(i||r)}}static{this.\u0275cmp=T({type:r,selectors:[["app-page-examples"]],decls:1,vars:0,template:function(i,e){i&1&&I(0,"router-outlet")},dependencies:[mi],encapsulation:2})}}return r})();var ui=(()=>{class r{constructor(){this.popoverOpen=!1,this.closeTimeout=null}ngOnDestroy(){this.clearCloseTimer()}openPopover(t,i){if(this.clearCloseTimer(),this.popoverText=i,this.previousRef!==t){let e=this.previousRef;t.popoverOpen||t.openPopover(),e?.popoverOpen&&e.closePopover()}else t.popoverOpen||t.openPopover();this.previousRef=t,this.popoverOpen=!0}closePopover(t){this.clearCloseTimer(),this.closeTimeout=setTimeout(()=>{this.closeTimeout=null,this.previousRef===t&&(t.closePopover(),this.popoverOpen=!1,this.previousRef=null)},400)}clearCloseTimer(){this.closeTimeout!==null&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}static{this.\u0275fac=function(i){return new(i||r)}}static{this.\u0275cmp=T({type:r,selectors:[["app-form"]],decls:38,vars:9,consts:[["companyTarget","mdePopoverTrigger"],["nameTarget","mdePopoverTrigger"],["inputPopover","mdePopover"],["addressTarget","mdePopoverTrigger"],["postalCode",""],[1,"example-form"],["mdePopoverTriggerOn","none",1,"example-full-width",3,"mdePopoverTriggerFor"],["matInput","","data-testid","form-company","aria-label","Company","placeholder","Company (disabled)","disabled","","value","Google",3,"focus","blur"],["cellspacing","0","mdePopoverTriggerOn","none",1,"example-full-width",3,"mdePopoverTriggerFor"],[1,"example-full-width"],["matInput","","data-testid","form-first-name","aria-label","First name","placeholder","First name",3,"focus","blur"],["matInput","","data-testid","form-last-name","aria-label","Last name","placeholder","Long Last Name That Will Be Truncated",3,"focus","blur"],["mdePopoverPositionY","below","mdePopoverPositionX","before",1,"form-help-popover",3,"mdeFocusTrapEnabled","mdePopoverDisableAnimation","mdePopoverOffsetY","mdePopoverOffsetX"],["data-testid","form-help",1,"input-popover","mat-elevation-z1"],["mdePopoverTriggerOn","none",3,"mdePopoverTriggerFor"],["matInput","","data-testid","form-address","aria-label","Address","placeholder","Address",3,"focus","blur"],["matInput","","data-testid","form-address-2","aria-label","Address 2","placeholder","Address 2",3,"focus","blur"],["cellspacing","0",1,"example-full-width"],["matInput","","data-testid","form-city","aria-label","City","placeholder","City",3,"focus","blur"],["matInput","","data-testid","form-state","aria-label","State","placeholder","State",3,"focus","blur"],["matInput","","data-testid","form-postal-code","aria-label","Postal Code","maxlength","5","placeholder","Postal Code","value","94043",3,"focus","blur"],["align","end"]],template:function(i,e){if(i&1){let o=tt();a(0,"form",5)(1,"mat-form-field",6,0)(3,"input",7),y("focus",function(){v(o);let n=w(2);return f(e.openPopover(n,"Your company name."))})("blur",function(){v(o);let n=w(2);return f(e.closePopover(n))}),c()(),a(4,"table",8,1)(6,"tr")(7,"td")(8,"mat-form-field",9)(9,"input",10),y("focus",function(){v(o);let n=w(5);return f(e.openPopover(n,"Your legal First Name."))})("blur",function(){v(o);let n=w(5);return f(e.closePopover(n))}),c()()(),a(10,"td")(11,"mat-form-field",9)(12,"input",11),y("focus",function(){v(o);let n=w(5);return f(e.openPopover(n,"Your legal Last Name."))})("blur",function(){v(o);let n=w(5);return f(e.closePopover(n))}),c()()()()(),a(13,"mde-popover",12,2)(15,"div",13),d(16),c()(),a(17,"p",14,3)(19,"mat-form-field",9)(20,"textarea",15),y("focus",function(){v(o);let n=w(18);return f(e.openPopover(n,"Your home address line 1."))})("blur",function(){v(o);let n=w(18);return f(e.closePopover(n))}),d(21,"1600 Amphitheatre Pkwy"),c()(),a(22,"mat-form-field",9)(23,"textarea",16),y("focus",function(){v(o);let n=w(18);return f(e.openPopover(n,"Your home address line 2."))})("blur",function(){v(o);let n=w(18);return f(e.closePopover(n))}),c()()(),a(24,"table",17)(25,"tr")(26,"td")(27,"mat-form-field",9)(28,"input",18),y("focus",function(){v(o);let n=w(18);return f(e.openPopover(n,"What's your home City?"))})("blur",function(){v(o);let n=w(18);return f(e.closePopover(n))}),c()()(),a(29,"td")(30,"mat-form-field",9)(31,"input",19),y("focus",function(){v(o);let n=w(18);return f(e.openPopover(n,"What's your home State?"))})("blur",function(){v(o);let n=w(18);return f(e.closePopover(n))}),c()()(),a(32,"td")(33,"mat-form-field",9)(34,"input",20,4),y("focus",function(){v(o);let n=w(18);return f(e.openPopover(n,"What's your home Postal Code?"))})("blur",function(){v(o);let n=w(18);return f(e.closePopover(n))}),c(),a(36,"mat-hint",21),d(37),c()()()()()()}if(i&2){let o=w(14),l=w(35);s(),_("mdePopoverTriggerFor",o),s(3),_("mdePopoverTriggerFor",o),s(9),_("mdeFocusTrapEnabled",!1)("mdePopoverDisableAnimation",!0)("mdePopoverOffsetY",0)("mdePopoverOffsetX",250),s(3),U(" ",e.popoverText," "),s(),_("mdePopoverTriggerFor",o),s(20),U("",l.value.length," / 5")}},dependencies:[Tt,ai,ni,Ft,Ot,Mt,Nt,ht,Pt,ci],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;height:calc(100vh - 64px)}.example-form[_ngcontent-%COMP%]{width:500px}.example-full-width[_ngcontent-%COMP%]{width:100%}.input-popover[_ngcontent-%COMP%]{background:#fff;padding:20px;width:200px;box-sizing:border-box}"],changeDetection:1})}}return r})();var ft=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new K;bulk={select:p=>this._select(p),deselect:p=>this._deselect(p),setSelection:p=>this._setSelection(p)};constructor(p=!1,t,i=!0,e){this._multiple=p,this._emitChanges=i,this.compareWith=e,t&&t.length&&(p?t.forEach(o=>this._markSelected(o)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...p){return this._select(p)}deselect(...p){return this._deselect(p)}setSelection(...p){return this._setSelection(p)}toggle(p){return this.isSelected(p)?this.deselect(p):this.select(p)}clear(p=!0){this._unmarkAll();let t=this._hasQueuedChanges();return p&&this._emitChangeEvent(),t}isSelected(p){return this._selection.has(this._getConcreteValue(p))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(p){this._multiple&&this.selected&&this._selected.sort(p)}isMultipleSelection(){return this._multiple}_select(p){this._verifyValueAssignment(p),p.forEach(i=>this._markSelected(i));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_deselect(p){this._verifyValueAssignment(p),p.forEach(i=>this._unmarkSelected(i));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_setSelection(p){this._verifyValueAssignment(p);let t=this.selected,i=new Set(p.map(o=>this._getConcreteValue(o)));p.forEach(o=>this._markSelected(o)),t.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(p){p=this._getConcreteValue(p),this.isSelected(p)||(this._multiple||this._unmarkAll(),this.isSelected(p)||this._selection.add(p),this._emitChanges&&this._selectedToEmit.push(p))}_unmarkSelected(p){p=this._getConcreteValue(p),this.isSelected(p)&&(this._selection.delete(p),this._emitChanges&&this._deselectedToEmit.push(p))}_unmarkAll(){this.isEmpty()||this._selection.forEach(p=>this._unmarkSelected(p))}_verifyValueAssignment(p){p.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(p,t){if(this.compareWith){t=t??this._selection;for(let i of t)if(this.compareWith(p,i))return i;return p}else return p}};var ae=(()=>{class r{_animationsDisabled=et();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(i){return new(i||r)};static \u0275cmp=T({type:r,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,e){i&2&&O("mat-pseudo-checkbox-indeterminate",e.state==="indeterminate")("mat-pseudo-checkbox-checked",e.state==="checked")("mat-pseudo-checkbox-disabled",e.disabled)("mat-pseudo-checkbox-minimal",e.appearance==="minimal")("mat-pseudo-checkbox-full",e.appearance==="full")("_mat-animation-noopable",e._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,e){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return r})();var xe=new G("MAT_OPTION_PARENT_COMPONENT"),ke=new G("MatOptgroup");var we=class{source;isUserInput;constructor(p,t=!1){this.source=p,this.isUserInput=t}},oe=(()=>{class r{_element=h(Q);_changeDetectorRef=h(Z);_parent=h(xe,{optional:!0});group=h(ke,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=h($).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=wt(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new H;_text;_stateChanges=new K;constructor(){let t=h(nt);t.load(at),t.load(Kt),this._signalDisableRipple=!!this._parent&&Ge(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(t=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}deselect(t=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}focus(t,i){let e=this._getHostElement();typeof e.focus=="function"&&e.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!pt(t)&&(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let t=this.viewValue;t!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=t)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new we(this,t))}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=(function(){let t=["text"],i=[[["mat-icon"]],"*"],e=["mat-icon","*"];function o(m,x){if(m&1&&I(0,"mat-pseudo-checkbox",1),m&2){let g=R();_("disabled",g.disabled)("state",g.selected?"checked":"unchecked")}}function l(m,x){if(m&1&&I(0,"mat-pseudo-checkbox",3),m&2){let g=R();_("disabled",g.disabled)}}function n(m,x){if(m&1&&(a(0,"span",4),d(1),c()),m&2){let g=R();s(),U("(",g.group.label,")")}}return T({type:r,selectors:[["mat-option"]],viewQuery:function(x,g){if(x&1&&X(t,7),x&2){let E;k(E=S())&&(g._text=E.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(x,g){x&1&&y("click",function(){return g._selectViaInteraction()})("keydown",function(W){return g._handleKeydown(W)}),x&2&&(lt("id",g.id),M("aria-selected",g.selected)("aria-disabled",g.disabled.toString()),O("mdc-list-item--selected",g.selected)("mat-mdc-option-multiple",g.multiple)("mat-mdc-option-active",g.active)("mdc-list-item--disabled",g.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",b]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:e,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(x,g){x&1&&(j(i),z(0,o,1,2,"mat-pseudo-checkbox",1),V(1),a(2,"span",2,0),V(4,1),c(),z(5,l,1,1,"mat-pseudo-checkbox",3),z(6,n,2,1,"span",4),I(7,"div",5)),x&2&&(B(g.multiple?0:-1),s(5),B(!g.multiple&&g.selected&&!g.hideSingleSelectionIndicator?5:-1),s(),B(g.group&&g.group._inert?6:-1),s(),_("matRippleTrigger",g._getHostElement())("matRippleDisabled",g.disabled||g.disableRipple))},dependencies:[ae,It],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return r})();function gi(r,p,t){if(t.length){let i=p.toArray(),e=t.toArray(),o=0;for(let l=0;l<r+1;l++)i[l].group&&i[l].group===e[o]&&o++;return o}return 0}function vi(r,p,t,i){return r<t?r:r+p>t+i?Math.max(0,r-i+p):t}var Li=new G("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let r=h(Lt);return()=>Qe(r)}}),Gi=new G("MAT_SELECT_CONFIG"),Wi=new G("MatSelectTrigger"),Se=class{source;value;constructor(p,t){this.source=p,this.value=t}},bi=(()=>{class r{_viewportRuler=h(Ke);_changeDetectorRef=h(Z);_elementRef=h(Q);_dir=h(St,{optional:!0});_idGenerator=h($);_renderer=h(pe);_parentFormField=h(li,{optional:!0});ngControl=h(fe,{self:!0,optional:!0});_liveAnnouncer=h(Ue);_defaultOptions=h(Gi,{optional:!0});_animationsDisabled=et();_popoverLocation;_initialized=new K;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(t){let i=this.options.toArray()[t];if(i){let e=this.panel.nativeElement,o=gi(t,this.options,this.optionGroups),l=i._getHostElement();t===0&&o===1?e.scrollTop=0:e.scrollTop=vi(l.offsetTop,l.offsetHeight,e.scrollTop,e.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(t){return new Se(this,t)}_scrollStrategyFactory=h(Li);_panelOpen=!1;_compareWith=(t,i)=>t===i;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new K;_errorStateTracker;stateChanges=new K;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=wt(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(t){this._placeholder=t,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ve.required)??!1}set required(t){this._required=t,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(t){this._selectionModel,this._multiple=t}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(t){this._compareWith=t,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(t){this._assignValue(t)&&this._onChange(t)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(t){this._id=t||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=ze(()=>{let t=this.options;return t?t.changes.pipe(ot(t),Dt(()=>gt(...t.map(i=>i.onSelectionChange)))):this._initialized.pipe(Dt(()=>this.optionSelectionChanges))});openedChange=new H;_openedStream=this.openedChange.pipe(me(t=>t),se(()=>{}));_closedStream=this.openedChange.pipe(me(t=>!t),se(()=>{}));selectionChange=new H;valueChange=new H;constructor(){let t=h(di),i=h(Ft,{optional:!0}),e=h(be,{optional:!0}),o=h(new kt("tabindex"),{optional:!0}),l=h(Xe,{optional:!0}),n=h(oi,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new si(t,n||this.ngControl,e,i,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=l?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new ft(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(q(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(q(this._destroy)).subscribe(t=>{t.added.forEach(i=>i.select()),t.removed.forEach(i=>i.deselect())}),this.options.changes.pipe(ot(null),q(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let t=this._getTriggerAriaLabelledby(),i=this.ngControl;if(t!==this._triggerAriaLabelledBy){let e=this._elementRef.nativeElement;this._triggerAriaLabelledBy=t,t?e.setAttribute("aria-labelledby",t):e.removeAttribute("aria-labelledby")}i&&(this._previousControl!==i.control&&(this._previousControl!==void 0&&i.disabled!==null&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(t){(t.disabled||t.userAriaDescribedBy)&&this.stateChanges.next(),t.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),t.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Be(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{i(),clearTimeout(e),this._cleanupDetach=void 0};let t=this.panel.nativeElement,i=this._renderer.listen(t,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),e=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);t.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(t){this._assignValue(t)}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let t=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&t.reverse(),t.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(t){this.disabled||(this.panelOpen?this._handleOpenKeydown(t):this._handleClosedKeydown(t))}_handleClosedKeydown(t){let i=t.keyCode,e=i===40||i===38||i===37||i===39,o=i===13||i===32,l=this._keyManager;if(!l.isTyping()&&o&&!pt(t)||(this.multiple||t.altKey)&&e)t.preventDefault(),this.open();else if(!this.multiple){let n=this.selected;l.onKeydown(t);let m=this.selected;m&&n!==m&&this._liveAnnouncer.announce(m.viewValue,1e4)}}_handleOpenKeydown(t){let i=this._keyManager,e=t.keyCode,o=e===40||e===38,l=i.isTyping();if(o&&t.altKey)t.preventDefault(),this.close();else if(!l&&(e===13||e===32)&&i.activeItem&&!pt(t))t.preventDefault(),i.activeItem._selectViaInteraction();else if(!l&&this._multiple&&e===65&&t.ctrlKey){t.preventDefault();let n=this.options.some(m=>!m.disabled&&!m.selected);this.options.forEach(m=>{m.disabled||(n?m.select():m.deselect())})}else{let n=i.activeItemIndex;i.onKeydown(t),this._multiple&&o&&t.shiftKey&&i.activeItem&&i.activeItemIndex!==n&&i.activeItem._selectViaInteraction()}}_handleOverlayKeydown(t){t.keyCode===27&&!pt(t)&&(t.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(t){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&t)Array.isArray(t),t.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{let i=this._selectOptionByValue(t);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(t){let i=this.options.find(e=>{if(this._selectionModel.isSelected(e))return!1;try{return(e.value!=null||this.canSelectNullableOptions)&&this._compareWith(e.value,t)}catch(o){return!1}});return i&&this._selectionModel.select(i),i}_assignValue(t){return t!==this._value||this._multiple&&Array.isArray(t)?(this.options&&this._setSelectionByValue(t),this._value=t,!0):!1}_skipPredicate=t=>this.panelOpen?!1:t.disabled;_getOverlayWidth(t){return this.panelWidth==="auto"?(t instanceof ue?t.elementRef:t||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let t of this.options)t._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Ze(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let t=gt(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(q(t)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),gt(...this.options.map(i=>i._stateChanges)).pipe(q(t)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(t,i){let e=this._selectionModel.isSelected(t);!this.canSelectNullableOptions&&t.value==null&&!this._multiple?(t.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(t.value)):(e!==t.selected&&(t.selected?this._selectionModel.select(t):this._selectionModel.deselect(t)),i&&this._keyManager.setActiveItem(t),this.multiple&&(this._sortValues(),i&&this.focus())),e!==this._selectionModel.isSelected(t)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let t=this.options.toArray();this._selectionModel.sort((i,e)=>this.sortComparator?this.sortComparator(i,e,t):t.indexOf(i)-t.indexOf(e)),this.stateChanges.next()}}_propagateChanges(t){let i;this.multiple?i=this.selected.map(e=>e.value):i=this.selected?this.selected.value:t,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let t=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){t=i;break}this._keyManager.setActiveItem(t)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(t){this._elementRef.nativeElement.focus(t)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||null,i=t?t+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:t}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(t+=" "+this.ariaLabelledby),t||(t=this._valueId),t}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let i=this._elementRef.nativeElement;t.length?i.setAttribute("aria-describedby",t.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(t){let i=Ye(t);i&&(i.tagName==="MAT-OPTION"||i.classList.contains("cdk-overlay-backdrop")||i.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=(function(){let t=["trigger"],i=["panel"],e=[[["mat-select-trigger"]],"*"],o=["mat-select-trigger","*"];function l(E,W){if(E&1&&(a(0,"span",4),d(1),c()),E&2){let u=R();s(),F(u.placeholder)}}function n(E,W){E&1&&V(0)}function m(E,W){if(E&1&&(a(0,"span",11),d(1),c()),E&2){let u=R(2);s(),F(u.triggerValue)}}function x(E,W){if(E&1&&(a(0,"span",5),z(1,n,1,0)(2,m,2,1,"span",11),c()),E&2){let u=R();s(),B(u.customTrigger?1:2)}}function g(E,W){if(E&1){let u=tt();a(0,"div",12,1),y("keydown",function(Y){v(u);let zi=R();return f(zi._handleKeydown(Y))}),V(2,1),c()}if(E&2){let u=R();st(u.panelClass),O("mat-select-panel-animations-enabled",!u._animationsDisabled)("mat-primary",u._parentFormField?.color==="primary")("mat-accent",u._parentFormField?.color==="accent")("mat-warn",u._parentFormField?.color==="warn")("mat-undefined",!u._parentFormField?.color),M("id",u.id+"-panel")("aria-multiselectable",u.multiple)("aria-label",u.ariaLabel||null)("aria-labelledby",u._getPanelAriaLabelledby())}}return T({type:r,selectors:[["mat-select"]],contentQueries:function(W,u,L){if(W&1&&dt(L,Wi,5)(L,oe,5)(L,ke,5),W&2){let Y;k(Y=S())&&(u.customTrigger=Y.first),k(Y=S())&&(u.options=Y),k(Y=S())&&(u.optionGroups=Y)}},viewQuery:function(W,u){if(W&1&&X(t,5)(i,5)(ge,5),W&2){let L;k(L=S())&&(u.trigger=L.first),k(L=S())&&(u.panel=L.first),k(L=S())&&(u._overlayDir=L.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(W,u){W&1&&y("keydown",function(Y){return u._handleKeydown(Y)})("focus",function(){return u._onFocus()})("blur",function(){return u._onBlur()}),W&2&&(M("id",u.id)("tabindex",u.disabled?-1:u.tabIndex)("aria-controls",u.panelOpen?u.id+"-panel":null)("aria-expanded",u.panelOpen)("aria-label",u.ariaLabel||null)("aria-required",u.required.toString())("aria-disabled",u.disabled.toString())("aria-invalid",u.errorState)("aria-activedescendant",u._getAriaActiveDescendant()),O("mat-mdc-select-disabled",u.disabled)("mat-mdc-select-invalid",u.errorState)("mat-mdc-select-required",u.required)("mat-mdc-select-empty",u.empty)("mat-mdc-select-multiple",u.multiple)("mat-select-open",u.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",b],disableRipple:[2,"disableRipple","disableRipple",b],tabIndex:[2,"tabIndex","tabIndex",E=>E==null?0:mt(E)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",b],placeholder:"placeholder",required:[2,"required","required",b],multiple:[2,"multiple","multiple",b],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",b],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",mt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",b]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[J([{provide:ri,useExisting:r},{provide:xe,useExisting:r}]),Rt],ngContentSelectors:o,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(W,u){if(W&1&&(j(e),a(0,"div",2,0),y("click",function(){return u.open()}),a(3,"div",3),z(4,l,2,1,"span",4)(5,x,3,1,"span",5),c(),a(6,"div",6)(7,"div",7),yt(),a(8,"svg",8),I(9,"path",9),c()()()(),je(10,g,3,16,"ng-template",10),y("detach",function(){return u.close()})("backdropClick",function(){return u.close()})("overlayKeydown",function(Y){return u._handleOverlayKeydown(Y)})),W&2){let L=w(1);s(3),M("id",u._valueId),s(),B(u.empty?4:5),s(6),_("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",u._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",u._scrollStrategy)("cdkConnectedOverlayOrigin",u._preferredOverlayOrigin||L)("cdkConnectedOverlayPositions",u._positions)("cdkConnectedOverlayWidth",u._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",u._popoverLocation)}},dependencies:[ue,ge],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear forwards;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return r})();var _i=(()=>{class r{labelPosition="after";static \u0275fac=function(i){return new(i||r)};static \u0275cmp=(function(){return T({type:r,selectors:[["","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(e,o){e&2&&O("mdc-form-field--align-end",o.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:["*"],decls:1,vars:0,template:function(e,o){e&1&&(j(),V(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})})()}return r})();var Hi=new G("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),le=class{source;checked;constructor(p,t){this.source=p,this.checked=t}},yi=(()=>{class r{_elementRef=h(Q);_focusMonitor=h(Ct);_changeDetectorRef=h(Z);defaults=h(Hi);_onChange=t=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(t){return new le(this,t)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=et();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(t){this._checked=t,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new H;toggleChange=new H;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){h(nt).load(at);let t=h(new kt("tabindex"),{optional:!0}),i=this.defaults;this.tabIndex=t==null?0:parseInt(t)||0,this.color=i.color||"accent",this.id=this._uniqueId=h($).getId("mat-mdc-slide-toggle-"),this.hideIcon=i.hideIcon??!1,this.disabledInteractive=i.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{t==="keyboard"||t==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):t||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(t){t.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(t){this.checked=!!t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}validate(t){return this.required&&t.value!==!0?{required:!0}:null}registerOnValidatorChange(t){this._validatorOnChange=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new le(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=(function(){let t=["switch"],i=["*"];function e(o,l){o&1&&(a(0,"span",11),yt(),a(1,"svg",13),I(2,"path",14),c(),a(3,"svg",15),I(4,"path",16),c()())}return T({type:r,selectors:[["mat-slide-toggle"]],viewQuery:function(l,n){if(l&1&&X(t,5),l&2){let m;k(m=S())&&(n._switchElement=m.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:15,hostBindings:function(l,n){l&2&&(lt("id",n.id),M("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),st(n.color?"mat-"+n.color:""),O("mat-mdc-slide-toggle-focused",n._focused)("mat-mdc-slide-toggle-checked",n.checked)("mat-slide-toggle-full-width",n.fullWidth)("_mat-animation-noopable",n._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",b],color:"color",disabled:[2,"disabled","disabled",b],fullWidth:[2,"fullWidth","fullWidth",b],disableRipple:[2,"disableRipple","disableRipple",b],tabIndex:[2,"tabIndex","tabIndex",o=>o==null?0:mt(o)],checked:[2,"checked","checked",b],hideIcon:[2,"hideIcon","hideIcon",b],disabledInteractive:[2,"disabledInteractive","disabledInteractive",b]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[J([{provide:Et,useExisting:_t(()=>r),multi:!0},{provide:ei,useExisting:r,multi:!0}]),Rt],ngContentSelectors:i,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(l,n){if(l&1&&(j(),a(0,"div",1)(1,"button",2,0),y("click",function(){return n._handleClick()}),I(3,"div",3)(4,"span",4),a(5,"span",5)(6,"span",6)(7,"span",7),I(8,"span",8),c(),a(9,"span",9),I(10,"span",10),c(),z(11,e,5,0,"span",11),c()()(),a(12,"label",12),y("click",function(x){return x.stopPropagation()}),V(13),c()()),l&2){let m=w(2);_("labelPosition",n.labelPosition),s(),O("mdc-switch--selected",n.checked)("mdc-switch--unselected",!n.checked)("mdc-switch--checked",n.checked)("mdc-switch--disabled",n.disabled)("mat-mdc-slide-toggle-disabled-interactive",n.disabledInteractive),_("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("disabled",n.disabled&&!n.disabledInteractive),M("id",n.buttonId)("name",n.name)("aria-label",n.ariaLabel)("aria-labelledby",n._getAriaLabelledBy())("aria-describedby",n.ariaDescribedby)("aria-required",n.required||null)("aria-checked",n.checked)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),s(9),_("matRippleTrigger",m)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),s(),B(n.hideIcon?-1:11),s(),_("for",n.buttonId),M("id",n._labelId)}},dependencies:[It,_i],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--%NS%mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--%NS%mat-slide-toggle-track-height, 32px);
  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--%NS%mat-slide-toggle-handle-width);
  height: var(--%NS%mat-slide-toggle-handle-height);
  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));
}
.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--%NS%mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-slide-toggle-full-width {
  width: 100%;
}
.mat-slide-toggle-full-width .mat-internal-form-field {
  width: 100%;
  justify-content: space-between;
}
.mat-slide-toggle-full-width .mat-internal-form-field label {
  margin: 0;
  flex-grow: 1;
  text-align: end;
}
.mat-slide-toggle-full-width .mdc-form-field--align-end label {
  text-align: start;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})})()}return r})();var wi=new G("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),xi=new G("MatButtonToggleGroup"),ji={provide:Et,useExisting:_t(()=>zt),multi:!0},de=class{source;value;constructor(p,t){this.source=p,this.value=t}},zt=(()=>{class r{_changeDetector=h(Z);_dir=h(St,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck()}_name=h($).getId("mat-button-toggle-group-");vertical=!1;get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(i=>i.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}valueChange=new H;get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new H;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let t=h(wi,{optional:!0});this.appearance=t&&t.appearance?t.appearance:"standard",this._hideSingleSelectionIndicator=t?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=t?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new ft(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex()}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_keydown(t){if(this.multiple||this.disabled||pt(t))return;let e=t.target.id,o=this._buttonToggles.toArray().findIndex(n=>n.buttonId===e),l=null;switch(t.keyCode){case 32:case 13:l=this._buttonToggles.get(o)||null;break;case 38:l=this._getNextButton(o,-1);break;case 37:l=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:l=this._getNextButton(o,1);break;case 39:l=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}l&&(t.preventDefault(),l._onButtonClick(),l.focus())}_emitChangeEvent(t){let i=new de(t,this.value);this._rawValue=i.value,this._controlValueAccessorChangeFn(i.value),this.change.emit(i)}_syncButtonToggle(t,i,e=!1,o=!1){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=!1),this._selectionModel?i?this._selectionModel.select(t):this._selectionModel.deselect(t):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(t,e)):this._updateModelValue(t,e)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(i=>t.value!=null&&i===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let i=this._buttonToggles.get(t);if(!i.disabled){i.tabIndex=0;break}}}_getNextButton(t,i){let e=this._buttonToggles;for(let o=1;o<=e.length;o++){let l=(t+i*o+e.length)%e.length,n=e.get(l);if(n&&!n.disabled)return n}return null}_setSelectionByValue(t){if(this._rawValue=t,!this._buttonToggles)return;let i=this._buttonToggles.toArray();if(this.multiple&&t?(Array.isArray(t),this._clearSelection(),t.forEach(e=>this._selectValue(e,i))):(this._clearSelection(),this._selectValue(t,i)),!this.multiple&&i.every(e=>e.tabIndex===-1)){for(let e of i)if(!e.disabled){e.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=!1,this.multiple||(t.tabIndex=-1)})}_selectValue(t,i){for(let e of i)if(e.value===t){e.checked=!0,this._selectionModel.select(e),this.multiple||(e.tabIndex=0);break}}_updateModelValue(t,i){i&&this._emitChangeEvent(t),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck())}static \u0275fac=function(i){return new(i||r)};static \u0275dir=xt({type:r,selectors:[["mat-button-toggle-group"]],contentQueries:function(i,e,o){if(i&1&&dt(o,Bt,5),i&2){let l;k(l=S())&&(e._buttonToggles=l)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(i,e){i&1&&y("keydown",function(l){return e._keydown(l)}),i&2&&(M("role",e.multiple?"group":"radiogroup")("aria-disabled",e.disabled),O("mat-button-toggle-vertical",e.vertical)("mat-button-toggle-group-appearance-standard",e.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",b],value:"value",multiple:[2,"multiple","multiple",b],disabled:[2,"disabled","disabled",b],disabledInteractive:[2,"disabledInteractive","disabledInteractive",b],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",b],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",b]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[J([ji,{provide:xi,useExisting:r}])]})}return r})(),Bt=(()=>{class r{_changeDetectorRef=h(Z);_elementRef=h(Q);_focusMonitor=h(Ct);_idGenerator=h($);_animationDisabled=et();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(t){this._tabIndex.set(t)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new H;constructor(){h(nt).load(at);let t=h(xi,{optional:!0}),i=h(new kt("tabindex"),{optional:!0})||"",e=h(wi,{optional:!0});this._tabIndex=wt(parseInt(i)||0),this.buttonToggleGroup=t,this._appearance=e&&e.appearance?e.appearance:"standard",this._disabledInteractive=e?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let i=this.buttonToggleGroup._buttonToggles.find(e=>e.tabIndex===0);i&&(i.tabIndex=-1),this.tabIndex=0}this.change.emit(new de(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=(function(){let t=["button"],i=["*"];function e(o,l){if(o&1&&(a(0,"div",2),I(1,"mat-pseudo-checkbox",6),c()),o&2){let n=R();s(),_("disabled",n.disabled)}}return T({type:r,selectors:[["mat-button-toggle"]],viewQuery:function(l,n){if(l&1&&X(t,5),l&2){let m;k(m=S())&&(n._buttonElement=m.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(l,n){l&1&&y("focus",function(){return n.focus()}),l&2&&(M("aria-label",null)("aria-labelledby",null)("id",n.id)("name",null),O("mat-button-toggle-standalone",!n.buttonToggleGroup)("mat-button-toggle-checked",n.checked)("mat-button-toggle-disabled",n.disabled)("mat-button-toggle-disabled-interactive",n.disabledInteractive)("mat-button-toggle-appearance-standard",n.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",b],appearance:"appearance",checked:[2,"checked","checked",b],disabled:[2,"disabled","disabled",b],disabledInteractive:[2,"disabledInteractive","disabledInteractive",b]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:i,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(l,n){if(l&1&&(j(),a(0,"button",1,0),y("click",function(){return n._onButtonClick()}),z(2,e,2,1,"div",2),a(3,"span",3),V(4),c()(),I(5,"span",4)(6,"span",5)),l&2){let m=w(1);_("id",n.buttonId)("disabled",n.disabled&&!n.disabledInteractive||null),M("role",n.isSingleSelector()?"radio":"button")("tabindex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("aria-pressed",n.isSingleSelector()?null:n.checked)("aria-checked",n.isSingleSelector()?n.checked:null)("name",n._getButtonName())("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),s(2),B(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),s(4),_("matRippleTrigger",m)("matRippleDisabled",n.disableRipple||n.disabled)}},dependencies:[It,ae],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--%NS%mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--%NS%mat-button-toggle-legacy-text-color);
  font-family: var(--%NS%mat-button-toggle-legacy-label-text-font);
  font-size: var(--%NS%mat-button-toggle-legacy-label-text-size);
  line-height: var(--%NS%mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--%NS%mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--%NS%mat-button-toggle-legacy-label-text-tracking);
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-state-background-color);
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--%NS%mat-button-toggle-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-button-toggle-background-color, transparent);
  font-family: var(--%NS%mat-button-toggle-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-toggle-label-text-size, var(--%NS%mat-sys-label-large-size));
  line-height: var(--%NS%mat-button-toggle-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-weight: var(--%NS%mat-button-toggle-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-button-toggle-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-toggle-selected-state-background-color, var(--%NS%mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--%NS%mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--%NS%mat-button-toggle-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--%NS%mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--%NS%mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--%NS%mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
`],encapsulation:2})})()}return r})();var qi=r=>[r];function Yi(r,p){if(r&1&&(a(0,"mat-option",13),d(1),c()),r&2){let t=p.$implicit;_("value",t),s(),F(t)}}function Ki(r,p){if(r&1&&(a(0,"mat-option",13),d(1),c()),r&2){let t=p.$implicit;_("value",t),s(),F(t)}}function Qi(r,p){if(r&1&&(a(0,"button",46),d(1),c()),r&2){let t=R(),i=w(184);_("mdePopoverTriggerFor",i)("mdePopoverCloseOnClickTrigger",t.config.closeOnClickTrigger)("mdePopoverBackdropCloseOnClick",t.config.backdropCloseOnClick)("mdeDisablePopoverTrigger",t.config.disableTrigger),s(),U(" ",t.triggerLabel," ")}}function Xi(r,p){if(r&1){let t=tt();a(0,"div",47)(1,"button",55),y("click",function(){v(t);let e=R();return f(e.openPreview())}),d(2,"openPopover()"),c(),a(3,"button",56),y("click",function(){v(t);let e=R();return f(e.closePreview())}),d(4,"closePopover()"),c()()}}function Ui(r,p){r&1&&d(0," In click mode a transparent backdrop covers the page while the popover is open. ")}var Ee={triggerOn:"hover",positionX:"after",positionY:"below",overlapTrigger:!0,scrollStrategy:"reposition",closeOnClick:!0,closeOnClickTrigger:!0,backdropCloseOnClick:!0,disableTrigger:!1,disableAnimation:!1,enterDelay:200,leaveDelay:200,offsetX:0,offsetY:0,arrowOffsetX:0,arrowOffsetY:0,arrowWidth:8,arrowColor:"rgba(0, 0, 0, 0.12)",focusTrapEnabled:!0,focusTrapAutoCaptureEnabled:!0},ki=Re(Vt({},Ee),{triggerOn:"click",positionX:"center",overlapTrigger:!1}),Zi=["before","start","center","end","after"],Ji=["above","start","center","end","below"],Si=[{key:"triggerOn",attr:"mdePopoverTriggerOn"},{key:"positionX",attr:"mdePopoverPositionX"},{key:"positionY",attr:"mdePopoverPositionY"},{key:"overlapTrigger",attr:"mdePopoverOverlapTrigger"},{key:"scrollStrategy",attr:"mdePopoverScrollStrategy"},{key:"closeOnClick",attr:"mdePopoverCloseOnClick"},{key:"disableAnimation",attr:"mdePopoverDisableAnimation"},{key:"enterDelay",attr:"mdePopoverEnterDelay"},{key:"leaveDelay",attr:"mdePopoverLeaveDelay"},{key:"offsetX",attr:"mdePopoverOffsetX"},{key:"offsetY",attr:"mdePopoverOffsetY"},{key:"arrowOffsetX",attr:"mdePopoverArrowOffsetX"},{key:"arrowOffsetY",attr:"mdePopoverArrowOffsetY"},{key:"arrowWidth",attr:"mdePopoverArrowWidth"},{key:"arrowColor",attr:"mdePopoverArrowColor"},{key:"focusTrapEnabled",attr:"mdeFocusTrapEnabled"},{key:"focusTrapAutoCaptureEnabled",attr:"mdeFocusTrapAutoCaptureEnabled"}],Ci=[{key:"closeOnClickTrigger",attr:"mdePopoverCloseOnClickTrigger"},{key:"backdropCloseOnClick",attr:"mdePopoverBackdropCloseOnClick"},{key:"disableTrigger",attr:"mdeDisablePopoverTrigger"}];function $i(r,p){return typeof p=="string"?`${r}="${p}"`:`[${r}]="${p}"`}var Ni=(()=>{class r{constructor(){this.positionXOptions=Zi,this.positionYOptions=Ji,this.config=Vt({},ki),this.align="center",this.copied=!1}get triggerLabel(){if(this.config.disableTrigger)return"Disabled";switch(this.config.triggerOn){case"click":return"Click me";case"hover":return"Hover me";default:return"Manual (none)"}}get arrowVisible(){let{positionX:t,positionY:i,overlapTrigger:e}=this.config;return!e&&(t==="center"||i==="center")}get arrowHiddenReason(){let{positionX:t,positionY:i}=this.config;return t!=="center"&&i!=="center"?'Arrow hidden: it only renders when positionX or positionY is "center".':"Arrow hidden: it only renders when overlap is off."}get closeOnClickTriggerApplies(){return this.config.triggerOn==="click"&&this.config.backdropCloseOnClick&&!this.config.disableTrigger}get closeOnClickTriggerHint(){return this.config.triggerOn!=="click"?"Only used with click mode.":this.config.backdropCloseOnClick?this.config.closeOnClickTrigger?"Clicking the trigger again closes the popover.":"The trigger stays above the backdrop, so clicking it keeps the popover open.":"No effect while outside-click close is off: the click backdrop covers the trigger."}get triggerKey(){return JSON.stringify(this.config)}get contentHint(){return this.config.closeOnClick?"Click inside this popover to close it.":"Clicks inside keep this popover open."}get changedInputs(){return[...Si,...Ci].filter(({key:t})=>this.config[t]!==Ee[t]).map(({attr:t})=>t)}get snippet(){let t=o=>o.filter(({key:l})=>this.config[l]!==Ee[l]).map(({key:l,attr:n})=>`
    `+$i(n,this.config[l])),i=t(Si).join("");return`<button mat-button [mdePopoverTriggerFor]="appPopover"${t(Ci).join("")}>
  Open
</button>

<mde-popover #appPopover="mdePopover"${i}>
  <mat-card>
    <mat-card-content>Popover content</mat-card-content>
  </mat-card>
</mde-popover>`}onEscape(){this.closePreview()}closePreview(){this.trigger?.closePopover()}openPreview(){this.trigger?.openPopover()}reset(){this.closePreview(),this.config=Vt({},ki),this.align="center",this.copied=!1}copySnippet(){return Fe(this,null,function*(){try{yield navigator.clipboard.writeText(this.snippet),this.copied=!0,setTimeout(()=>this.copied=!1,1500)}catch(t){this.copied=!1}})}static{this.\u0275fac=function(i){return new(i||r)}}static{this.\u0275cmp=T({type:r,selectors:[["app-builder"]],viewQuery:function(i,e){if(i&1&&X(ht,5),i&2){let o;k(o=S())&&(e.trigger=o.first)}},hostBindings:function(i,e){i&1&&y("keydown.escape",function(){return e.onEscape()},He)},decls:193,vars:61,consts:[["playgroundPopover","mdePopover"],[1,"playground"],[1,"playground-header"],["data-testid","builder-heading"],["appearance","outlined",1,"controls"],["subscriptSizing","dynamic"],["data-testid","builder-trigger-on",3,"ngModelChange","ngModel"],["value","click"],["value","hover"],["value","none"],["data-testid","builder-disable-trigger",3,"ngModelChange","ngModel"],[1,"row"],["data-testid","builder-position-x",3,"ngModelChange","ngModel"],[3,"value"],["data-testid","builder-position-y",3,"ngModelChange","ngModel"],["matInput","","type","number","data-testid","builder-offset-x",3,"ngModelChange","ngModel"],["matTextSuffix",""],["matInput","","type","number","data-testid","builder-offset-y",3,"ngModelChange","ngModel"],["data-testid","builder-overlap",3,"ngModelChange","ngModel"],[1,"note"],[3,"ngModelChange","ngModel"],["value","reposition"],["value","close"],["value","block"],["value","noop"],["data-testid","builder-close-on-click",3,"ngModelChange","ngModel"],["data-testid","builder-close-on-click-trigger",3,"ngModelChange","ngModel","disabled"],["data-testid","builder-close-on-click-trigger-hint",1,"note"],["data-testid","builder-backdrop-close",3,"ngModelChange","ngModel"],["matInput","","type","number","min","0","step","50","data-testid","builder-enter-delay",3,"ngModelChange","ngModel","disabled"],["matInput","","type","number","min","0","step","50",3,"ngModelChange","ngModel","disabled"],["data-testid","builder-arrow-hint",1,"note"],["matInput","","type","number","min","0","data-testid","builder-arrow-width",3,"ngModelChange","ngModel","disabled"],["matInput","","data-testid","builder-arrow-color",3,"ngModelChange","ngModel","disabled"],["matTextSuffix","","type","color","aria-label","Pick arrow color",1,"swatch",3,"input","disabled"],["matInput","","type","number",3,"ngModelChange","ngModel","disabled"],[3,"ngModelChange","ngModel","disabled"],[1,"output"],["appearance","outlined",1,"preview"],[1,"preview-toolbar"],["aria-label","Trigger alignment","hideSingleSelectionIndicator","",3,"ngModelChange","ngModel"],["value","start","data-testid","builder-align-start"],["value","center"],["value","end","data-testid","builder-align-end"],["mat-stroked-button","","data-testid","builder-reset",3,"click"],[1,"stage"],["mat-flat-button","","data-testid","builder-trigger",3,"mdePopoverTriggerFor","mdePopoverCloseOnClickTrigger","mdePopoverBackdropCloseOnClick","mdeDisablePopoverTrigger"],[1,"manual"],["data-testid","builder-close-note",1,"note"],["appearance","outlined",1,"snippet"],["mat-button","","data-testid","builder-copy",3,"click"],["data-testid","builder-snippet"],[3,"mdePopoverTriggerOn","mdePopoverPositionX","mdePopoverPositionY","mdePopoverOverlapTrigger","mdePopoverScrollStrategy","mdePopoverCloseOnClick","mdePopoverDisableAnimation","mdePopoverEnterDelay","mdePopoverLeaveDelay","mdePopoverOffsetX","mdePopoverOffsetY","mdePopoverArrowOffsetX","mdePopoverArrowOffsetY","mdePopoverArrowWidth","mdePopoverArrowColor","mdeFocusTrapEnabled","mdeFocusTrapAutoCaptureEnabled"],["appearance","outlined","data-testid","builder-popover-content",1,"popover-card"],["mat-stroked-button","","data-testid","builder-popover-close",3,"click"],["mat-button","","data-testid","builder-open",3,"click"],["mat-button","","data-testid","builder-close",3,"click"]],template:function(i,e){if(i&1){let o=tt();a(0,"div",1)(1,"header",2)(2,"h2",3),d(3,"Popover playground"),c(),a(4,"p"),d(5," Configure every "),a(6,"code"),d(7,"mde-popover"),c(),d(8," input, try it in the preview, and copy the matching template. "),c()(),a(9,"mat-card",4)(10,"mat-card-content")(11,"h3"),d(12,"Trigger"),c(),a(13,"mat-form-field",5)(14,"mat-label"),d(15,"mdePopoverTriggerOn"),c(),a(16,"mat-select",6),C(),D("ngModelChange",function(n){return v(o),A(e.config.triggerOn,n)||(e.config.triggerOn=n),f(n)}),a(17,"mat-option",7),d(18,"click"),c(),a(19,"mat-option",8),d(20,"hover"),c(),a(21,"mat-option",9),d(22,"none (open from code)"),c()()(),a(23,"mat-slide-toggle",10),C(),D("ngModelChange",function(n){return v(o),A(e.config.disableTrigger,n)||(e.config.disableTrigger=n),f(n)}),d(24," Disable trigger "),a(25,"code"),d(26,"mdeDisablePopoverTrigger"),c()(),a(27,"h3"),d(28,"Position"),c(),a(29,"div",11)(30,"mat-form-field",5)(31,"mat-label"),d(32,"mdePopoverPositionX"),c(),a(33,"mat-select",12),C(),D("ngModelChange",function(n){return v(o),A(e.config.positionX,n)||(e.config.positionX=n),f(n)}),ct(34,Yi,2,2,"mat-option",13,vt),c()(),a(36,"mat-form-field",5)(37,"mat-label"),d(38,"mdePopoverPositionY"),c(),a(39,"mat-select",14),C(),D("ngModelChange",function(n){return v(o),A(e.config.positionY,n)||(e.config.positionY=n),f(n)}),ct(40,Ki,2,2,"mat-option",13,vt),c()()(),a(42,"div",11)(43,"mat-form-field",5)(44,"mat-label"),d(45,"mdePopoverOffsetX"),c(),a(46,"input",15),C(),D("ngModelChange",function(n){return v(o),A(e.config.offsetX,n)||(e.config.offsetX=n),f(n)}),c(),a(47,"span",16),d(48,"px"),c()(),a(49,"mat-form-field",5)(50,"mat-label"),d(51,"mdePopoverOffsetY"),c(),a(52,"input",17),C(),D("ngModelChange",function(n){return v(o),A(e.config.offsetY,n)||(e.config.offsetY=n),f(n)}),c(),a(53,"span",16),d(54,"px"),c()()(),a(55,"mat-slide-toggle",18),C(),D("ngModelChange",function(n){return v(o),A(e.config.overlapTrigger,n)||(e.config.overlapTrigger=n),f(n)}),d(56," Overlap trigger "),a(57,"code"),d(58,"mdePopoverOverlapTrigger"),c()(),a(59,"p",19),d(60,"Overlap moves the panel onto the trigger's edge; it is most visible with start/center/end positions."),c(),a(61,"mat-form-field",5)(62,"mat-label"),d(63,"mdePopoverScrollStrategy"),c(),a(64,"mat-select",20),C(),D("ngModelChange",function(n){return v(o),A(e.config.scrollStrategy,n)||(e.config.scrollStrategy=n),f(n)}),a(65,"mat-option",21),d(66,"reposition"),c(),a(67,"mat-option",22),d(68,"close"),c(),a(69,"mat-option",23),d(70,"block"),c(),a(71,"mat-option",24),d(72,"noop"),c()()(),a(73,"h3"),d(74,"Behavior"),c(),a(75,"mat-slide-toggle",25),C(),D("ngModelChange",function(n){return v(o),A(e.config.closeOnClick,n)||(e.config.closeOnClick=n),f(n)}),d(76," Close on content click "),a(77,"code"),d(78,"mdePopoverCloseOnClick"),c()(),a(79,"mat-slide-toggle",26),C(),D("ngModelChange",function(n){return v(o),A(e.config.closeOnClickTrigger,n)||(e.config.closeOnClickTrigger=n),f(n)}),d(80," Close on trigger click "),a(81,"code"),d(82,"mdePopoverCloseOnClickTrigger"),c()(),a(83,"p",27),d(84),c(),a(85,"mat-slide-toggle",28),C(),D("ngModelChange",function(n){return v(o),A(e.config.backdropCloseOnClick,n)||(e.config.backdropCloseOnClick=n),f(n)}),d(86," Close on outside click "),a(87,"code"),d(88,"mdePopoverBackdropCloseOnClick"),c()(),a(89,"mat-slide-toggle",20),C(),D("ngModelChange",function(n){return v(o),A(e.config.disableAnimation,n)||(e.config.disableAnimation=n),f(n)}),d(90," Disable animation "),a(91,"code"),d(92,"mdePopoverDisableAnimation"),c()(),a(93,"h3"),d(94,"Timing "),a(95,"small"),d(96,"(hover only)"),c()(),a(97,"div",11)(98,"mat-form-field",5)(99,"mat-label"),d(100,"mdePopoverEnterDelay"),c(),a(101,"input",29),C(),D("ngModelChange",function(n){return v(o),A(e.config.enterDelay,n)||(e.config.enterDelay=n),f(n)}),c(),a(102,"span",16),d(103,"ms"),c()(),a(104,"mat-form-field",5)(105,"mat-label"),d(106,"mdePopoverLeaveDelay"),c(),a(107,"input",30),C(),D("ngModelChange",function(n){return v(o),A(e.config.leaveDelay,n)||(e.config.leaveDelay=n),f(n)}),c(),a(108,"span",16),d(109,"ms"),c()()(),a(110,"h3"),d(111,"Arrow"),c(),a(112,"p",31),d(113),c(),a(114,"div",11)(115,"mat-form-field",5)(116,"mat-label"),d(117,"mdePopoverArrowWidth"),c(),a(118,"input",32),C(),D("ngModelChange",function(n){return v(o),A(e.config.arrowWidth,n)||(e.config.arrowWidth=n),f(n)}),c(),a(119,"span",16),d(120,"px"),c()(),a(121,"mat-form-field",5)(122,"mat-label"),d(123,"mdePopoverArrowColor"),c(),a(124,"input",33),C(),D("ngModelChange",function(n){return v(o),A(e.config.arrowColor,n)||(e.config.arrowColor=n),f(n)}),c(),a(125,"input",34),y("input",function(n){return e.config.arrowColor=n.target.value}),c()()(),a(126,"div",11)(127,"mat-form-field",5)(128,"mat-label"),d(129,"mdePopoverArrowOffsetX"),c(),a(130,"input",35),C(),D("ngModelChange",function(n){return v(o),A(e.config.arrowOffsetX,n)||(e.config.arrowOffsetX=n),f(n)}),c(),a(131,"span",16),d(132,"px"),c()(),a(133,"mat-form-field",5)(134,"mat-label"),d(135,"mdePopoverArrowOffsetY"),c(),a(136,"input",35),C(),D("ngModelChange",function(n){return v(o),A(e.config.arrowOffsetY,n)||(e.config.arrowOffsetY=n),f(n)}),c(),a(137,"span",16),d(138,"px"),c()()(),a(139,"h3"),d(140,"Accessibility"),c(),a(141,"mat-slide-toggle",20),C(),D("ngModelChange",function(n){return v(o),A(e.config.focusTrapEnabled,n)||(e.config.focusTrapEnabled=n),f(n)}),d(142," Focus trap "),a(143,"code"),d(144,"mdeFocusTrapEnabled"),c()(),a(145,"mat-slide-toggle",36),C(),D("ngModelChange",function(n){return v(o),A(e.config.focusTrapAutoCaptureEnabled,n)||(e.config.focusTrapAutoCaptureEnabled=n),f(n)}),d(146," Auto-capture focus "),a(147,"code"),d(148,"mdeFocusTrapAutoCaptureEnabled"),c()()()(),a(149,"div",37)(150,"mat-card",38)(151,"mat-card-content")(152,"div",39)(153,"h3"),d(154,"Preview"),c(),a(155,"mat-button-toggle-group",40),C(),D("ngModelChange",function(n){return v(o),A(e.align,n)||(e.align=n),f(n)}),a(156,"mat-button-toggle",41),d(157,"Left"),c(),a(158,"mat-button-toggle",42),d(159,"Center"),c(),a(160,"mat-button-toggle",43),d(161,"Right"),c()(),a(162,"button",44),y("click",function(){return e.reset()}),d(163,"Reset"),c()(),a(164,"div",45),ct(165,Qi,2,5,"button",46,vt),c(),z(167,Xi,5,0,"div",47),a(168,"p",48),d(169," The library closes on Escape only while focus is inside the panel. In this playground Escape works anywhere, and the popover's own Close button always closes it. "),z(170,Ui,1,0),c()()(),a(171,"mat-card",49)(172,"mat-card-content")(173,"div",39)(174,"h3"),d(175,"Template"),c(),a(176,"span",19),d(177),c(),a(178,"button",50),y("click",function(){return e.copySnippet()}),d(179),c()(),a(180,"pre",51)(181,"code"),d(182),c()()()()()(),a(183,"mde-popover",52,0)(185,"mat-card",53)(186,"mat-card-content")(187,"strong"),d(188,"Hello from mde-popover"),c(),a(189,"p"),d(190),c(),a(191,"button",54),y("click",function(n){return v(o),e.closePreview(),f(n.stopPropagation())}),d(192,"Close"),c()()()()}i&2&&(s(16),P("ngModel",e.config.triggerOn),N(),s(7),P("ngModel",e.config.disableTrigger),N(),s(10),P("ngModel",e.config.positionX),N(),s(),rt(e.positionXOptions),s(5),P("ngModel",e.config.positionY),N(),s(),rt(e.positionYOptions),s(6),P("ngModel",e.config.offsetX),N(),s(6),P("ngModel",e.config.offsetY),N(),s(3),P("ngModel",e.config.overlapTrigger),N(),s(9),P("ngModel",e.config.scrollStrategy),N(),s(11),P("ngModel",e.config.closeOnClick),N(),s(4),P("ngModel",e.config.closeOnClickTrigger),_("disabled",!e.closeOnClickTriggerApplies),N(),s(5),F(e.closeOnClickTriggerHint),s(),P("ngModel",e.config.backdropCloseOnClick),N(),s(4),P("ngModel",e.config.disableAnimation),N(),s(12),P("ngModel",e.config.enterDelay),_("disabled",e.config.triggerOn!=="hover"),N(),s(6),P("ngModel",e.config.leaveDelay),_("disabled",e.config.triggerOn!=="hover"),N(),s(5),O("warn",!e.arrowVisible),s(),U(" ",e.arrowVisible?"The arrow is visible for the current position.":e.arrowHiddenReason," "),s(5),P("ngModel",e.config.arrowWidth),_("disabled",!e.arrowVisible),N(),s(6),P("ngModel",e.config.arrowColor),_("disabled",!e.arrowVisible),N(),s(),_("disabled",!e.arrowVisible),s(5),P("ngModel",e.config.arrowOffsetX),_("disabled",!e.arrowVisible),N(),s(6),P("ngModel",e.config.arrowOffsetY),_("disabled",!e.arrowVisible),N(),s(5),P("ngModel",e.config.focusTrapEnabled),N(),s(4),P("ngModel",e.config.focusTrapAutoCaptureEnabled),_("disabled",!e.config.focusTrapEnabled),N(),s(10),P("ngModel",e.align),N(),s(9),st("stage align-"+e.align),s(),rt(Yt(59,qi,e.triggerKey)),s(2),B(e.config.triggerOn==="none"?167:-1),s(3),B(e.config.triggerOn==="click"?170:-1),s(7),U("",e.changedInputs.length," input(s) differ from the library defaults"),s(2),F(e.copied?"Copied":"Copy"),s(3),F(e.snippet),s(),_("mdePopoverTriggerOn",e.config.triggerOn)("mdePopoverPositionX",e.config.positionX)("mdePopoverPositionY",e.config.positionY)("mdePopoverOverlapTrigger",e.config.overlapTrigger)("mdePopoverScrollStrategy",e.config.scrollStrategy)("mdePopoverCloseOnClick",e.config.closeOnClick)("mdePopoverDisableAnimation",e.config.disableAnimation)("mdePopoverEnterDelay",e.config.enterDelay)("mdePopoverLeaveDelay",e.config.leaveDelay)("mdePopoverOffsetX",e.config.offsetX)("mdePopoverOffsetY",e.config.offsetY)("mdePopoverArrowOffsetX",e.config.arrowOffsetX)("mdePopoverArrowOffsetY",e.config.arrowOffsetY)("mdePopoverArrowWidth",e.config.arrowWidth)("mdePopoverArrowColor",e.config.arrowColor)("mdeFocusTrapEnabled",e.config.focusTrapEnabled)("mdeFocusTrapAutoCaptureEnabled",e.config.focusTrapAutoCaptureEnabled),s(7),F(e.contentHint))},dependencies:[Tt,Zt,ee,$t,Jt,te,Xt,Ut,Ot,ie,ne,bi,oe,Pt,yi,zt,Bt,Qt,Mt,Nt,ht],styles:['[_nghost-%COMP%]{display:block;padding:24px}.playground[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(300px,380px) 1fr;grid-template-areas:"header header" "controls output";gap:16px;align-items:start;max-width:1280px;margin:0 auto}.playground-header[_ngcontent-%COMP%]{grid-area:header}.playground-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 4px}.playground-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;opacity:.75}.controls[_ngcontent-%COMP%]{grid-area:controls}.controls[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.output[_ngcontent-%COMP%]{grid-area:output;display:flex;flex-direction:column;gap:16px}h3[_ngcontent-%COMP%]{margin:12px 0 0;font-size:14px;font-weight:500;text-transform:uppercase;letter-spacing:.04em;opacity:.7}h3[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{text-transform:none}.row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:8px}mat-form-field[_ngcontent-%COMP%]{width:100%}code[_ngcontent-%COMP%]{font-family:Roboto Mono,ui-monospace,monospace;font-size:12px}mat-slide-toggle[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{opacity:.6;margin-left:4px}.note[_ngcontent-%COMP%]{font-size:12px;opacity:.65;margin:0}.note.warn[_ngcontent-%COMP%]{opacity:1;color:#b26a00}.swatch[_ngcontent-%COMP%]{width:28px;height:22px;padding:0;border:none;background:none;cursor:pointer}.preview-toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.preview-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;flex:1}.stage[_ngcontent-%COMP%]{display:flex;align-items:center;min-height:320px;margin:16px 0 8px;padding:0 24px;border:1px dashed rgba(127,127,127,.4);border-radius:8px;background-image:radial-gradient(rgba(127,127,127,.25) 1px,transparent 1px);background-size:16px 16px}.stage.align-start[_ngcontent-%COMP%]{justify-content:flex-start}.stage.align-center[_ngcontent-%COMP%]{justify-content:center}.stage.align-end[_ngcontent-%COMP%]{justify-content:flex-end}.manual[_ngcontent-%COMP%]{display:flex;gap:8px}pre[_ngcontent-%COMP%]{margin:12px 0 0;padding:12px;overflow:auto;border-radius:6px;background:#7f7f7f1f;font-size:12px;line-height:1.5}.popover-card[_ngcontent-%COMP%]{max-width:260px}.popover-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:8px 0}@media(max-width:900px){.playground[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-areas:"header" "output" "controls"}.output[_ngcontent-%COMP%]{position:static}}'],changeDetection:1})}}return r})();var Oi=new G("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Mi=new G("MatChipAvatar"),Ii=new G("MatChipTrailingIcon"),Ei=new G("MatChipEdit"),Ti=new G("MatChipRemove"),Pe=new G("MatChip"),Pi=(()=>{class r{_elementRef=h(Q);_parentChip=h(Pe);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(t){this._disabled=t}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){h(nt).load(at),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(i){return new(i||r)};static \u0275dir=xt({type:r,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(i,e){i&2&&(M("disabled",e._getDisabledAttribute())("aria-disabled",e.disabled),O("mdc-evolution-chip__action--primary",e._isPrimary)("mdc-evolution-chip__action--secondary",!e._isPrimary)("mdc-evolution-chip__action--trailing",!e._isPrimary&&!e._isLeading))},inputs:{disabled:[2,"disabled","disabled",b],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?-1:mt(t)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return r})(),Ai=(()=>{class r extends Pi{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(t){!this.disabled&&this._isPrimary&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let t;return function(e){return(t||(t=Gt(r)))(e||r)}})();static \u0275dir=xt({type:r,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(i,e){i&1&&y("click",function(l){return e._handleClick(l)})("keydown",function(l){return e._handleKeydown(l)}),i&2&&(M("tabindex",e._getTabindex()),O("mdc-evolution-chip__action--presentational",!1))},features:[Wt]})}return r})();var Te=(()=>{class r{_changeDetectorRef=h(Z);_elementRef=h(Q);_tagName=h(qe);_ngZone=h(Le);_focusMonitor=h(Ct);_globalRippleOptions=h($e,{optional:!0});_document=h(Ve);_onFocus=new K;_onBlur=new K;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=et();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=h($).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(t){this._value=t}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(t){this._disabled=t}_disabled=!1;removed=new H;destroyed=new H;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=h(ti);_injector=h(Lt);constructor(){let t=h(nt);t.load(at),t.load(Kt),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=gt(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(t){(t.keyCode===8&&!t.repeat||t.keyCode===46)&&(t.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(t){return this._getActions().find(i=>{let e=i._elementRef.nativeElement;return e===t||e.contains(t)})}_getActions(){let t=[];return this.editIcon&&t.push(this.editIcon),this.primaryAction&&t.push(this.primaryAction),this.removeIcon&&t.push(this.removeIcon),t}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(t){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{let i=t!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=(function(){let t=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],i=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function e(l,n){l&1&&(a(0,"span",3),V(1,1),c())}function o(l,n){l&1&&(a(0,"span",7),V(1,2),c())}return T({type:r,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(n,m,x){if(n&1&&dt(x,Mi,5)(x,Ei,5)(x,Ii,5)(x,Ti,5)(x,Mi,5)(x,Ii,5)(x,Ei,5)(x,Ti,5),n&2){let g;k(g=S())&&(m.leadingIcon=g.first),k(g=S())&&(m.editIcon=g.first),k(g=S())&&(m.trailingIcon=g.first),k(g=S())&&(m.removeIcon=g.first),k(g=S())&&(m._allLeadingIcons=g),k(g=S())&&(m._allTrailingIcons=g),k(g=S())&&(m._allEditIcons=g),k(g=S())&&(m._allRemoveIcons=g)}},viewQuery:function(n,m){if(n&1&&X(Ai,5),n&2){let x;k(x=S())&&(m.primaryAction=x.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(n,m){n&1&&y("keydown",function(g){return m._handleKeydown(g)}),n&2&&(lt("id",m.id),M("role",m.role)("aria-label",m.ariaLabel),st("mat-"+(m.color||"primary")),O("mdc-evolution-chip",!m._isBasicChip)("mdc-evolution-chip--disabled",m.disabled)("mdc-evolution-chip--with-trailing-action",m._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",m.leadingIcon)("mdc-evolution-chip--with-primary-icon",m.leadingIcon)("mdc-evolution-chip--with-avatar",m.leadingIcon)("mat-mdc-chip-with-avatar",m.leadingIcon)("mat-mdc-chip-highlighted",m.highlighted)("mat-mdc-chip-disabled",m.disabled)("mat-mdc-basic-chip",m._isBasicChip)("mat-mdc-standard-chip",!m._isBasicChip)("mat-mdc-chip-with-trailing-icon",m._hasTrailingIcon())("_mat-animation-noopable",m._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",b],highlighted:[2,"highlighted","highlighted",b],disableRipple:[2,"disableRipple","disableRipple",b],disabled:[2,"disabled","disabled",b]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[J([{provide:Pe,useExisting:r}])],ngContentSelectors:i,decls:9,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mat-mdc-chip-touch-target"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(n,m){n&1&&(j(t),I(0,"span",0),a(1,"span",1)(2,"span",2),z(3,e,2,0,"span",3),a(4,"span",4),V(5),I(6,"span",5),c(),I(7,"span",6),c()(),z(8,o,2,0,"span",7)),n&2&&(s(3),B(m.leadingIcon?3:-1),s(5),B(m._hasTrailingIcon()?8:-1))},dependencies:[Pi],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mat-mdc-chip-touch-target {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 48px;
  transform: translateY(-50%);
  display: var(--%NS%mat-chip-touch-target-display, block);
  pointer-events: auto;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})})()}return r})();var Ae=(()=>{class r extends Te{_defaultOptions=h(Oi,{optional:!0});chipListSelectable=!0;_chipListMultiple=!1;_chipListHideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get selectable(){return this._selectable&&this.chipListSelectable}set selectable(t){this._selectable=t,this._changeDetectorRef.markForCheck()}_selectable=!0;get selected(){return this._selected}set selected(t){this._setSelectedState(t,!1,!0)}_selected=!1;get ariaSelected(){return this.selectable?this.selected.toString():null}basicChipAttrName="mat-basic-chip-option";selectionChange=new H;ngOnInit(){super.ngOnInit(),this.role="presentation"}select(){this._setSelectedState(!0,!1,!0)}deselect(){this._setSelectedState(!1,!1,!0)}selectViaInteraction(){this._setSelectedState(!0,!0,!0)}toggleSelected(t=!1){return this._setSelectedState(!this.selected,t,!0),this.selected}_handlePrimaryActionInteraction(){this.disabled||(this.focus(),this.selectable&&this.toggleSelected(!0))}_hasLeadingGraphic(){return this.leadingIcon?!0:!this._chipListHideSingleSelectionIndicator||this._chipListMultiple}_setSelectedState(t,i,e){t!==this.selected&&(this._selected=t,e&&this.selectionChange.emit({source:this,isUserInput:i,selected:this.selected}),this._changeDetectorRef.markForCheck())}static \u0275fac=(()=>{let t;return function(e){return(t||(t=Gt(r)))(e||r)}})();static \u0275cmp=(function(){let t=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],i=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function e(l,n){l&1&&(a(0,"span",3),V(1,1),a(2,"span",8),yt(),a(3,"svg",9),I(4,"path",10),c()()())}function o(l,n){l&1&&(a(0,"span",7),V(1,2),c())}return T({type:r,selectors:[["mat-basic-chip-option"],["","mat-basic-chip-option",""],["mat-chip-option"],["","mat-chip-option",""]],hostAttrs:[1,"mat-mdc-chip","mat-mdc-chip-option"],hostVars:37,hostBindings:function(n,m){n&2&&(lt("id",m.id),M("tabindex",null)("aria-label",null)("aria-description",null)("role",m.role),O("mdc-evolution-chip",!m._isBasicChip)("mdc-evolution-chip--filter",!m._isBasicChip)("mdc-evolution-chip--selectable",!m._isBasicChip)("mat-mdc-chip-selected",m.selected)("mat-mdc-chip-multiple",m._chipListMultiple)("mat-mdc-chip-disabled",m.disabled)("mat-mdc-chip-with-avatar",m.leadingIcon)("mdc-evolution-chip--disabled",m.disabled)("mdc-evolution-chip--selected",m.selected)("mdc-evolution-chip--selecting",!m._animationsDisabled)("mdc-evolution-chip--with-trailing-action",m._hasTrailingIcon())("mdc-evolution-chip--with-primary-icon",m.leadingIcon)("mdc-evolution-chip--with-primary-graphic",m._hasLeadingGraphic())("mdc-evolution-chip--with-avatar",m.leadingIcon)("mat-mdc-chip-highlighted",m.highlighted)("mat-mdc-chip-with-trailing-icon",m._hasTrailingIcon()))},inputs:{selectable:[2,"selectable","selectable",b],selected:[2,"selected","selected",b]},outputs:{selectionChange:"selectionChange"},features:[J([{provide:Te,useExisting:r},{provide:Pe,useExisting:r}]),Wt],ngContentSelectors:i,decls:9,vars:6,consts:[[1,"mat-mdc-chip-focus-overlay"],["role","presentation",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipAction","","role","option",3,"_allowFocusWhenDisabled"],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mat-mdc-chip-touch-target"],["role","presentation",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"],[1,"mdc-evolution-chip__checkmark"],["viewBox","-2 -3 30 30","focusable","false","aria-hidden","true",1,"mdc-evolution-chip__checkmark-svg"],["fill","none","stroke","currentColor","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-evolution-chip__checkmark-path"]],template:function(n,m){n&1&&(j(t),I(0,"span",0),a(1,"span",1)(2,"button",2),z(3,e,5,0,"span",3),a(4,"span",4),V(5),I(6,"span",5)(7,"span",6),c()()(),z(8,o,2,0,"span",7)),n&2&&(s(2),_("_allowFocusWhenDisabled",!0),M("aria-description",m.ariaDescription)("aria-label",m.ariaLabel)("aria-selected",m.ariaSelected),s(),B(m._hasLeadingGraphic()?3:-1),s(5),B(m._hasTrailingIcon()?8:-1))},dependencies:[Ai],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mat-mdc-chip-touch-target {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 48px;
  transform: translateY(-50%);
  display: var(--%NS%mat-chip-touch-target-display, block);
  pointer-events: auto;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})})()}return r})();var tn=(()=>{class r{_elementRef=h(Q);_changeDetectorRef=h(Z);_dir=h(St,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new K;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(t=>t._onFocus)}get chipDestroyedChanges(){return this._getChipStream(t=>t.destroyed)}get chipRemovedChanges(){return this._getChipStream(t=>t.removed)}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(t){this._explicitRole=t}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new We;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(t=>t._hasFocus())}_syncChipsState(){this._chips?.forEach(t=>{t._chipListDisabled=this._disabled,t._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(t){this._originatesFromChip(t)&&this._keyManager.onKeydown(t)}_isValidIndex(t){return t>=0&&t<this._chips.length}_allowFocusEscape(){let t=this._elementRef.nativeElement.tabIndex;t!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=t))}_getChipStream(t){return this._chips.changes.pipe(ot(null),Dt(()=>gt(...this._chips.map(t))))}_originatesFromChip(t){let i=t.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains("mat-mdc-chip"))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(ot(this._chips)).subscribe(t=>{let i=[];t.forEach(e=>e._getActions().forEach(o=>i.push(o))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new Je(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(t=>this._skipPredicate(t)),this.chipFocusChanges.pipe(q(this._destroyed)).subscribe(({chip:t})=>{let i=t._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(q(this._destroyed)).subscribe(t=>this._keyManager.withHorizontalOrientation(t))}_skipPredicate(t){return t.disabled}_trackChipSetChanges(){this._chips.changes.pipe(ot(null),q(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(q(this._destroyed)).subscribe(t=>{let e=this._chips.toArray().indexOf(t.chip),o=t.chip._hasFocus(),l=t.chip._hadFocusOnRemove&&this._keyManager.activeItem&&t.chip._getActions().includes(this._keyManager.activeItem),n=o||l;this._isValidIndex(e)&&n&&(this._lastDestroyedFocusedChipIndex=e)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let t=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[t];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=(function(){return T({type:r,selectors:[["mat-chip-set"]],contentQueries:function(e,o,l){if(e&1&&dt(l,Te,5),e&2){let n;k(n=S())&&(o._chips=n)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(e,o){e&1&&y("keydown",function(n){return o._handleKeydown(n)}),e&2&&M("role",o.role)},inputs:{disabled:[2,"disabled","disabled",b],role:"role",tabIndex:[2,"tabIndex","tabIndex",i=>i==null?0:mt(i)]},ngContentSelectors:["*"],decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(e,o){e&1&&(j(),Ht(0,"div",0),V(1),jt())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 8px 0 8px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})})()}return r})(),Oe=class{source;value;constructor(p,t){this.source=p,this.value=t}},en={provide:Et,useExisting:_t(()=>De),multi:!0},De=(()=>{class r extends tn{_onTouched=()=>{};_onChange=()=>{};_defaultRole="listbox";_defaultOptions=h(Oi,{optional:!0});get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._syncListboxProperties()}_multiple=!1;get selected(){let t=this._chips.toArray().filter(i=>i.selected);return this.multiple?t:t[0]}ariaOrientation="horizontal";get selectable(){return this._selectable}set selectable(t){this._selectable=t,this._syncListboxProperties()}_selectable=!0;compareWith=(t,i)=>t===i;required=!1;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._syncListboxProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get chipSelectionChanges(){return this._getChipStream(t=>t.selectionChange)}get chipBlurChanges(){return this._getChipStream(t=>t._onBlur)}get value(){return this._value}set value(t){this._chips&&this._chips.length&&this._setSelectionByValue(t,!1),this._value=t}_value;change=new H;_chips=void 0;ngAfterContentInit(){this._chips.changes.pipe(ot(null),q(this._destroyed)).subscribe(()=>{this.value!==void 0&&Promise.resolve().then(()=>{this._setSelectionByValue(this.value,!1)}),this._syncListboxProperties()}),this.chipBlurChanges.pipe(q(this._destroyed)).subscribe(()=>this._blur()),this.chipSelectionChanges.pipe(q(this._destroyed)).subscribe(t=>{this.multiple||this._chips.forEach(i=>{i!==t.source&&i._setSelectedState(!1,!1,!1)}),t.isUserInput&&this._propagateChanges()})}focus(){if(this.disabled)return;let t=this._getFirstSelectedChip();t&&!t.disabled?t.focus():this._chips.length>0?this._keyManager.setFirstItemActive():this._elementRef.nativeElement.focus()}writeValue(t){t!=null?this.value=t:this.value=void 0}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_setSelectionByValue(t,i=!0){this._clearSelection(),Array.isArray(t)?t.forEach(e=>this._selectValue(e,i)):this._selectValue(t,i)}_blur(){this.disabled||setTimeout(()=>{this.focused||this._markAsTouched()})}_keydown(t){t.keyCode===9&&super._allowFocusEscape()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck()}_propagateChanges(){let t=null;Array.isArray(this.selected)?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:void 0,this._value=t,this.change.emit(new Oe(this,t)),this._onChange(t),this._changeDetectorRef.markForCheck()}_clearSelection(t){this._chips.forEach(i=>{i!==t&&i.deselect()})}_selectValue(t,i){let e=this._chips.find(o=>o.value!=null&&this.compareWith(o.value,t));return e&&(i?e.selectViaInteraction():e.select()),e}_syncListboxProperties(){this._chips&&Promise.resolve().then(()=>{this._chips.forEach(t=>{t._chipListMultiple=this.multiple,t.chipListSelectable=this._selectable,t._chipListHideSingleSelectionIndicator=this.hideSingleSelectionIndicator,t._changeDetectorRef.markForCheck()})})}_getFirstSelectedChip(){return Array.isArray(this.selected)?this.selected.length?this.selected[0]:void 0:this.selected}_skipPredicate(t){return!1}static \u0275fac=(()=>{let t;return function(e){return(t||(t=Gt(r)))(e||r)}})();static \u0275cmp=(function(){let t=["*"];return T({type:r,selectors:[["mat-chip-listbox"]],contentQueries:function(e,o,l){if(e&1&&dt(l,Ae,5),e&2){let n;k(n=S())&&(o._chips=n)}},hostAttrs:[1,"mdc-evolution-chip-set","mat-mdc-chip-listbox"],hostVars:10,hostBindings:function(e,o){e&1&&y("focus",function(){return o.focus()})("blur",function(){return o._blur()})("keydown",function(n){return o._keydown(n)}),e&2&&(lt("tabIndex",o.disabled||o.empty?-1:o.tabIndex),M("role",o.role)("aria-required",o.role?o.required:null)("aria-disabled",o.disabled.toString())("aria-multiselectable",o.multiple)("aria-orientation",o.ariaOrientation),O("mat-mdc-chip-list-disabled",o.disabled)("mat-mdc-chip-list-required",o.required))},inputs:{multiple:[2,"multiple","multiple",b],ariaOrientation:[0,"aria-orientation","ariaOrientation"],selectable:[2,"selectable","selectable",b],compareWith:"compareWith",required:[2,"required","required",b],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",b],value:"value"},outputs:{change:"change"},features:[J([en]),Wt],ngContentSelectors:t,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(e,o){e&1&&(j(),Ht(0,"div",0),V(1),jt())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 8px 0 8px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})})()}return r})();var nn=r=>[r],an=(r,p)=>p.id;function on(r,p){if(r&1&&(a(0,"mat-chip-option",7),d(1),c()),r&2){let t=p.$implicit;_("value",t),M("data-testid","list-filter-"+t),s(),F(t)}}function cn(r,p){if(r&1){let t=tt();a(0,"li",25),y("mouseenter",function(){let e=v(t).$implicit,o=R(2);return f(o.active=e)})("focus",function(){let e=v(t).$implicit,o=R(2);return f(o.active=e)}),a(1,"span",26),d(2),c(),a(3,"span",27)(4,"strong"),d(5),c(),a(6,"small"),d(7),c()(),a(8,"span",28),d(9),c(),a(10,"span",29),d(11),c(),a(12,"span",30),d(13),c()()}if(r&2){let t=p.$implicit,i=R(2),e=w(40);_("mdePopoverTriggerFor",e),M("data-testid","list-item-"+t.id),s(),he("background",t.color),s(),F(t.name.charAt(0)),s(3),F(t.name),s(2),F(t.category),s(),M("aria-label",t.rating+" out of 5"),s(),F(i.stars(t.rating)),s(2),F("$"+t.price.toFixed(2)),s(),O("out",t.stock===0),s(),U(" ",t.stock===0?"Out of stock":t.stock+" in stock"," ")}}function rn(r,p){r&1&&(a(0,"li",24),d(1,"No products in this category."),c())}function ln(r,p){if(r&1&&(a(0,"ul",20),ct(1,cn,14,13,"li",23,an,!1,rn,2,0,"li",24),c()),r&2){let t=R();s(),rt(t.visible)}}function dn(r,p){if(r&1&&(a(0,"mat-card",22)(1,"mat-card-content")(2,"div",31)(3,"span",26),d(4),c(),a(5,"div")(6,"strong",32),d(7),c(),a(8,"small"),d(9),c()()(),a(10,"p"),d(11),c(),a(12,"dl")(13,"dt"),d(14,"Price"),c(),a(15,"dd",33),d(16),c(),a(17,"dt"),d(18,"Rating"),c(),a(19,"dd"),d(20),c(),a(21,"dt"),d(22,"Stock"),c(),a(23,"dd"),d(24),c()()()()),r&2){let t=R();s(3),he("background",t.active.color),s(),F(t.active.name.charAt(0)),s(3),F(t.active.name),s(2),qt("",t.active.category," \xB7 ",t.active.sku),s(2),F(t.active.blurb),s(5),F("$"+t.active.price.toFixed(2)),s(4),U("",t.active.rating.toFixed(1)," / 5"),s(4),F(t.active.stock===0?"Out of stock":t.active.stock)}}var sn=["Audio","Wearables","Home","Office"],mn=[["Aurora Headphones","Audio","Over-ear, 40 h battery, active noise cancelling."],["Pulse Earbuds","Audio","Sweat-proof buds with a pocket-sized charging case."],["Echo Bookshelf Speaker","Audio","Warm wooden cabinet with Bluetooth and line-in."],["Nova Soundbar","Audio","Slim 3.1 soundbar with a wireless subwoofer."],["Drift Turntable","Audio","Belt-drive turntable with a built-in preamp."],["Orbit Smartwatch","Wearables","Always-on display, GPS and a 7-day battery."],["Stride Fitness Band","Wearables","Heart rate, sleep and step tracking."],["Halo Smart Ring","Wearables","Titanium ring that tracks recovery and sleep."],["Trail Sports Watch","Wearables","Barometer, compass and offline maps."],["Lumen Desk Lamp","Home","Dimmable LED lamp with a warm-to-cool range."],["Breeze Air Purifier","Home","HEPA filter for rooms up to 40 m\xB2."],["Kettle Pro","Home","Variable temperature kettle with keep-warm."],["Nest Thermostat Mini","Home","Learns your schedule and saves energy."],["Brew Coffee Grinder","Home","Conical burr grinder with 40 settings."],["Glow Night Light","Home","Motion-activated light for hallways."],["Atlas Standing Desk","Office","Dual-motor desk with four memory presets."],["Flow Ergonomic Chair","Office","Mesh back, adjustable lumbar support."],["Key Mechanical Keyboard","Office","Hot-swappable switches, aluminium case."],["Glide Wireless Mouse","Office","Silent clicks and a 70-day battery."],["Dock USB-C Hub","Office","Nine ports with 100 W pass-through charging."]],Di=["#5c6bc0","#26a69a","#ef6c00","#8e24aa","#00897b","#c2185b","#3949ab","#6d4c41"],Ri=mn.map(([r,p,t],i)=>({id:i+1,name:r,category:p,blurb:t,price:Math.round((19+i*37%280)*100-1)/100,rating:3+i*7%20/10,stock:i*13%4===0?0:3+i*11%40,sku:`MDE-${String(1e3+i*17)}`,color:Di[i%Di.length]})),Fi=(()=>{class r{constructor(){this.categories=sn,this.enterDelay=150,this.leaveDelay=100,this.products=[...Ri],this.category="All",this.positionY="below",this.gap=8,this.active=null}get visible(){return this.category==="All"?this.products:this.products.filter(t=>t.category===this.category)}get offsetY(){let t=Number(this.gap)||0;return this.positionY==="above"?-t:t}get layoutKey(){return`${this.positionY}:${this.offsetY}`}setCategory(t){this.category=t??"All"}shuffle(){let t=[...this.products];t.push(...t.splice(0,7));for(let i=0;i+1<t.length;i+=3)[t[i],t[i+1]]=[t[i+1],t[i]];this.products=t}reset(){this.products=[...Ri],this.category="All",this.positionY="below",this.gap=8}stars(t){let i=Math.round(t);return"\u2605".repeat(i)+"\u2606".repeat(5-i)}static{this.\u0275fac=function(i){return new(i||r)}}static{this.\u0275cmp=T({type:r,selectors:[["app-page-examples-list"]],decls:42,vars:16,consts:[["details","mdePopover"],[1,"list-page"],[1,"list-header"],["data-testid","list-heading"],["appearance","outlined",1,"toolbar"],["aria-label","Category","data-testid","list-filter",3,"ngModelChange","ngModel"],["value","All","data-testid","list-filter-All"],[3,"value"],[1,"toolbar-row"],["aria-label","Popover side","hideSingleSelectionIndicator","","data-testid","list-position",3,"ngModelChange","ngModel"],["value","below","data-testid","list-position-below"],["value","above","data-testid","list-position-above"],["subscriptSizing","dynamic",1,"gap-field"],["matInput","","type","number","min","0","max","48","data-testid","list-gap",3,"ngModelChange","ngModel"],["matTextSuffix",""],["data-testid","list-binding",1,"binding"],[1,"spacer"],["mat-stroked-button","","data-testid","list-shuffle",3,"click"],["mat-button","","data-testid","list-reset",3,"click"],["data-testid","list-count",1,"count"],["role","list",1,"rows"],["mdePopoverTriggerOn","hover","mdePopoverPositionX","center","mdePopoverArrowColor","rgba(0, 0, 0, 0.12)",3,"mdePopoverPositionY","mdePopoverOffsetY","mdePopoverOverlapTrigger","mdePopoverEnterDelay","mdePopoverLeaveDelay","mdeFocusTrapEnabled"],["appearance","outlined","data-testid","list-popover-content",1,"details"],["role","listitem","tabindex","0",1,"row",3,"mdePopoverTriggerFor"],[1,"empty"],["role","listitem","tabindex","0",1,"row",3,"mouseenter","focus","mdePopoverTriggerFor"],["aria-hidden","true",1,"avatar"],[1,"name"],[1,"rating"],[1,"price"],[1,"stock"],[1,"details-head"],["data-testid","list-popover-name"],["data-testid","list-popover-price"]],template:function(i,e){if(i&1){let o=tt();a(0,"div",1)(1,"header",2)(2,"h2",3),d(3,"Product list"),c(),a(4,"p"),d(5," Hover a row to see its details. Every row uses the same "),a(6,"code"),d(7,"mde-popover"),c(),d(8,"; filtering, shuffling, or changing the position re-creates the row triggers. "),c()(),a(9,"mat-card",4)(10,"mat-card-content")(11,"mat-chip-listbox",5),C(),y("ngModelChange",function(n){return e.setCategory(n)}),a(12,"mat-chip-option",6),d(13,"All"),c(),ct(14,on,2,3,"mat-chip-option",7,vt),c(),a(16,"div",8)(17,"mat-button-toggle-group",9),C(),D("ngModelChange",function(n){return v(o),A(e.positionY,n)||(e.positionY=n),f(n)}),a(18,"mat-button-toggle",10),d(19,"Below"),c(),a(20,"mat-button-toggle",11),d(21,"Above"),c()(),a(22,"mat-form-field",12)(23,"mat-label"),d(24,"Gap"),c(),a(25,"input",13),C(),D("ngModelChange",function(n){return v(o),A(e.gap,n)||(e.gap=n),f(n)}),c(),a(26,"span",14),d(27,"px"),c()(),a(28,"code",15),d(29),c(),I(30,"span",16),a(31,"button",17),y("click",function(){return e.shuffle()}),d(32,"Shuffle"),c(),a(33,"button",18),y("click",function(){return e.reset()}),d(34,"Reset"),c()()()(),a(35,"p",19),d(36),c(),ct(37,ln,4,1,"ul",20,vt),c(),a(39,"mde-popover",21,0),z(41,dn,25,10,"mat-card",22),c()}i&2&&(s(11),_("ngModel",e.category),N(),s(3),rt(e.categories),s(3),P("ngModel",e.positionY),N(),s(8),P("ngModel",e.gap),N(),s(4),qt(' mdePopoverPositionY="',e.positionY,'" [mdePopoverOffsetY]="',e.offsetY,'" '),s(7),qt("",e.visible.length," of ",e.products.length," products"),s(),rt(Yt(14,nn,e.layoutKey)),s(2),_("mdePopoverPositionY",e.positionY)("mdePopoverOffsetY",e.offsetY)("mdePopoverOverlapTrigger",!1)("mdePopoverEnterDelay",e.enterDelay)("mdePopoverLeaveDelay",e.leaveDelay)("mdeFocusTrapEnabled",!1),s(2),B(e.active?41:-1))},dependencies:[Tt,Zt,ee,$t,Jt,ii,te,Mt,Nt,ht,Qt,zt,Bt,Xt,Ut,De,Ae,Ot,ie,ne,Pt],styles:["[_nghost-%COMP%]{display:block;padding:24px}.list-page[_ngcontent-%COMP%]{max-width:880px;margin:0 auto}.list-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 4px}.list-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 16px;opacity:.75}code[_ngcontent-%COMP%]{font-family:Roboto Mono,ui-monospace,monospace;font-size:12px}.toolbar[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.toolbar-row[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:12px}.gap-field[_ngcontent-%COMP%]{width:110px}.binding[_ngcontent-%COMP%]{opacity:.65}.spacer[_ngcontent-%COMP%]{flex:1}.count[_ngcontent-%COMP%]{margin:16px 0 8px;font-size:13px;opacity:.65}.rows[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}.row[_ngcontent-%COMP%]{display:grid;grid-template-columns:40px minmax(0,1fr) 96px 80px 110px;align-items:center;gap:12px;padding:10px 14px;border:1px solid rgba(127,127,127,.25);border-radius:10px;background:#7f7f7f0a;cursor:default;transition:background-color .15s,border-color .15s,box-shadow .15s}.row[_ngcontent-%COMP%]:hover, .row[_ngcontent-%COMP%]:focus-visible, .row[aria-expanded=true][_ngcontent-%COMP%]{background:#7f7f7f1a;border-color:#7f7f7f73;box-shadow:0 1px 4px #00000014;outline:none}.avatar[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;color:#fff;font-weight:500}.name[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:0}.name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{opacity:.6}.rating[_ngcontent-%COMP%]{color:#f9a825;letter-spacing:1px}.price[_ngcontent-%COMP%]{font-variant-numeric:tabular-nums;text-align:right;font-weight:500}.stock[_ngcontent-%COMP%]{font-size:12px;text-align:right;color:#2e7d32}.stock.out[_ngcontent-%COMP%]{color:#c62828}.empty[_ngcontent-%COMP%]{padding:24px;text-align:center;opacity:.6}.details[_ngcontent-%COMP%]{width:280px;max-width:calc(100vw - 32px)}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:8px 0;font-size:13px}.details[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr;gap:2px 12px;margin:0;font-size:13px}.details[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{opacity:.6}.details[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:0}.details-head[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.details-head[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column}.details-head[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{opacity:.6;font-size:12px}@media(max-width:640px){[_nghost-%COMP%]{padding:12px}.row[_ngcontent-%COMP%]{grid-template-columns:36px minmax(0,1fr) 72px}.rating[_ngcontent-%COMP%], .stock[_ngcontent-%COMP%], .binding[_ngcontent-%COMP%]{display:none}}"],changeDetection:1})}}return r})();var Qo=[{path:"",component:ye,data:{meta:{title:"Examples",description:"",themeColor:"#FFFFFF"}},children:[{path:"",component:ye},{path:"form",component:ui},{path:"builder",component:Ni},{path:"list",component:Fi},{path:"**",component:_e}]},{path:"**",component:_e}];export{Qo as ExamplesRoutes};
