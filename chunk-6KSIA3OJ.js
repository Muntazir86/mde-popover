import{$ as k,$b as ct,Aa as y,B as F,Ba as v,Bb as ye,Ca as ot,Cb as K,D as m,Da as N,Db as Yt,Ea as ne,Eb as Se,F as h,Fa as s,Fb as qt,G as u,Ga as P,Gb as Z,H as he,Ha as G,I as Oe,Ia as Be,Ib as ze,J as Pt,Ja as M,K as R,Ka as E,Kb as We,L as Ot,La as I,Ma as j,Mb as Ge,N as ue,O as Dt,Oa as Ve,P as Me,Pa as fe,Q as De,Qa as Bt,R as z,S as At,Sa as H,Sb as He,T as Ft,Tb as Qt,Ua as g,Ub as je,V as p,Va as ae,Vb as Kt,Wb as Xt,X as at,Xb as we,Y as S,Yb as Ce,Z as w,Zb as Ye,_b as Ut,a as Pe,aa as ge,ac as Zt,b as Mt,ba as Ae,bb as Vt,bc as qe,c as Et,ca as Rt,cb as U,cc as st,db as _e,dc as Qe,ec as Jt,f as L,fa as C,fb as Lt,fc as Ee,ga as O,gb as Y,gc as dt,ha as D,hc as Ke,ia as se,ic as $t,j as it,ja as $,jc as Xe,k as It,ka as ee,kb as oe,kc as ke,la as f,lb as zt,lc as ei,ma as a,mc as ti,n as ce,na as r,nb as Wt,nc as ii,o as nt,oa as x,ob as rt,oc as xe,pa as Fe,pb as lt,pc as ni,qa as Re,qb as ve,r as Tt,ra as Q,sa as te,sb as Le,ta as _,tc as pt,ua as T,v as J,va as B,vb as Gt,w as Ne,wa as A,wb as Ht,x as V,xa as ie,xb as jt,ya as W,yb as be,z as me,za as b,zb as re}from"./chunk-2BHSSDHP.js";var mt=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=k({type:n,selectors:[["app-page-examples"]],decls:1,vars:0,template:function(i,t){i&1&&x(0,"router-outlet")},dependencies:[ni],encapsulation:2})}}return n})();var ri=(()=>{class n{constructor(){this.popoverOpen=!1,this.closeTimeout=null}ngOnDestroy(){this.clearCloseTimer()}openPopover(e,i){if(this.clearCloseTimer(),this.popoverText=i,this.previousRef!==e){let t=this.previousRef;e.popoverOpen||e.openPopover(),t?.popoverOpen&&t.closePopover()}else e.popoverOpen||e.openPopover();this.previousRef=e,this.popoverOpen=!0}closePopover(e){this.clearCloseTimer(),this.closeTimeout=setTimeout(()=>{this.closeTimeout=null,this.previousRef===e&&(e.closePopover(),this.popoverOpen=!1,this.previousRef=null)},400)}clearCloseTimer(){this.closeTimeout!==null&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=k({type:n,selectors:[["app-form"]],decls:38,vars:9,consts:[["companyTarget","mdePopoverTrigger"],["nameTarget","mdePopoverTrigger"],["inputPopover","mdePopover"],["addressTarget","mdePopoverTrigger"],["postalCode",""],[1,"example-form"],["mdePopoverTriggerOn","none",1,"example-full-width",3,"mdePopoverTriggerFor"],["matInput","","data-testid","form-company","aria-label","Company","placeholder","Company (disabled)","disabled","","value","Google",3,"focus","blur"],["cellspacing","0","mdePopoverTriggerOn","none",1,"example-full-width",3,"mdePopoverTriggerFor"],[1,"example-full-width"],["matInput","","data-testid","form-first-name","aria-label","First name","placeholder","First name",3,"focus","blur"],["matInput","","data-testid","form-last-name","aria-label","Last name","placeholder","Long Last Name That Will Be Truncated",3,"focus","blur"],["mdePopoverPositionY","below","mdePopoverPositionX","before",1,"form-help-popover",3,"mdeFocusTrapEnabled","mdePopoverDisableAnimation","mdePopoverOffsetY","mdePopoverOffsetX"],["data-testid","form-help",1,"input-popover","mat-elevation-z1"],["mdePopoverTriggerOn","none",3,"mdePopoverTriggerFor"],["matInput","","data-testid","form-address","aria-label","Address","placeholder","Address",3,"focus","blur"],["matInput","","data-testid","form-address-2","aria-label","Address 2","placeholder","Address 2",3,"focus","blur"],["cellspacing","0",1,"example-full-width"],["matInput","","data-testid","form-city","aria-label","City","placeholder","City",3,"focus","blur"],["matInput","","data-testid","form-state","aria-label","State","placeholder","State",3,"focus","blur"],["matInput","","data-testid","form-postal-code","aria-label","Postal Code","maxlength","5","placeholder","Postal Code","value","94043",3,"focus","blur"],["align","end"]],template:function(i,t){if(i&1){let o=Q();a(0,"form",5)(1,"mat-form-field",6,0)(3,"input",7),_("focus",function(){h(o);let l=v(2);return u(t.openPopover(l,"Your company name."))})("blur",function(){h(o);let l=v(2);return u(t.closePopover(l))}),r()(),a(4,"table",8,1)(6,"tr")(7,"td")(8,"mat-form-field",9)(9,"input",10),_("focus",function(){h(o);let l=v(5);return u(t.openPopover(l,"Your legal First Name."))})("blur",function(){h(o);let l=v(5);return u(t.closePopover(l))}),r()()(),a(10,"td")(11,"mat-form-field",9)(12,"input",11),_("focus",function(){h(o);let l=v(5);return u(t.openPopover(l,"Your legal Last Name."))})("blur",function(){h(o);let l=v(5);return u(t.closePopover(l))}),r()()()()(),a(13,"mde-popover",12,2)(15,"div",13),s(16),r()(),a(17,"p",14,3)(19,"mat-form-field",9)(20,"textarea",15),_("focus",function(){h(o);let l=v(18);return u(t.openPopover(l,"Your home address line 1."))})("blur",function(){h(o);let l=v(18);return u(t.closePopover(l))}),s(21,"1600 Amphitheatre Pkwy"),r()(),a(22,"mat-form-field",9)(23,"textarea",16),_("focus",function(){h(o);let l=v(18);return u(t.openPopover(l,"Your home address line 2."))})("blur",function(){h(o);let l=v(18);return u(t.closePopover(l))}),r()()(),a(24,"table",17)(25,"tr")(26,"td")(27,"mat-form-field",9)(28,"input",18),_("focus",function(){h(o);let l=v(18);return u(t.openPopover(l,"What's your home City?"))})("blur",function(){h(o);let l=v(18);return u(t.closePopover(l))}),r()()(),a(29,"td")(30,"mat-form-field",9)(31,"input",19),_("focus",function(){h(o);let l=v(18);return u(t.openPopover(l,"What's your home State?"))})("blur",function(){h(o);let l=v(18);return u(t.closePopover(l))}),r()()(),a(32,"td")(33,"mat-form-field",9)(34,"input",20,4),_("focus",function(){h(o);let l=v(18);return u(t.openPopover(l,"What's your home Postal Code?"))})("blur",function(){h(o);let l=v(18);return u(t.closePopover(l))}),r(),a(36,"mat-hint",21),s(37),r()()()()()()}if(i&2){let o=v(14),c=v(35);p(),f("mdePopoverTriggerFor",o),p(3),f("mdePopoverTriggerFor",o),p(9),f("mdeFocusTrapEnabled",!1)("mdePopoverDisableAnimation",!0)("mdePopoverOffsetY",0)("mdePopoverOffsetX",250),p(3),G(" ",t.popoverText," "),p(),f("mdePopoverTriggerFor",o),p(20),G("",c.value.length," / 5")}},dependencies:[ke,$t,Jt,Ee,we,ye,be,re,xe,Qt],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;height:calc(100vh - 64px)}.example-form[_ngcontent-%COMP%]{width:500px}.example-full-width[_ngcontent-%COMP%]{width:100%}.input-popover[_ngcontent-%COMP%]{background:#fff;padding:20px;width:200px;box-sizing:border-box}"],changeDetection:1})}}return n})();var de=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new L;bulk={select:d=>this._select(d),deselect:d=>this._deselect(d),setSelection:d=>this._setSelection(d)};constructor(d=!1,e,i=!0,t){this._multiple=d,this._emitChanges=i,this.compareWith=t,e&&e.length&&(d?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...d){return this._select(d)}deselect(...d){return this._deselect(d)}setSelection(...d){return this._setSelection(d)}toggle(d){return this.isSelected(d)?this.deselect(d):this.select(d)}clear(d=!0){this._unmarkAll();let e=this._hasQueuedChanges();return d&&this._emitChangeEvent(),e}isSelected(d){return this._selection.has(this._getConcreteValue(d))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(d){this._multiple&&this.selected&&this._selected.sort(d)}isMultipleSelection(){return this._multiple}_select(d){this._verifyValueAssignment(d),d.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(d){this._verifyValueAssignment(d),d.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(d){this._verifyValueAssignment(d);let e=this.selected,i=new Set(d.map(o=>this._getConcreteValue(o)));d.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(d){d=this._getConcreteValue(d),this.isSelected(d)||(this._multiple||this._unmarkAll(),this.isSelected(d)||this._selection.add(d),this._emitChanges&&this._selectedToEmit.push(d))}_unmarkSelected(d){d=this._getConcreteValue(d),this.isSelected(d)&&(this._selection.delete(d),this._emitChanges&&this._deselectedToEmit.push(d))}_unmarkAll(){this.isEmpty()||this._selection.forEach(d=>this._unmarkSelected(d))}_verifyValueAssignment(d){d.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(d,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(d,i))return i;return d}else return d}};var Ue=(()=>{class n{_animationsDisabled=K();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(i){return new(i||n)};static \u0275cmp=k({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,t){i&2&&N("mat-pseudo-checkbox-indeterminate",t.state==="indeterminate")("mat-pseudo-checkbox-checked",t.state==="checked")("mat-pseudo-checkbox-disabled",t.disabled)("mat-pseudo-checkbox-minimal",t.appearance==="minimal")("mat-pseudo-checkbox-full",t.appearance==="full")("_mat-animation-noopable",t._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,t){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2})}return n})();var Oi=["text"],Di=[[["mat-icon"]],"*"],Ai=["mat-icon","*"];function Fi(n,d){if(n&1&&x(0,"mat-pseudo-checkbox",1),n&2){let e=T();f("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Ri(n,d){if(n&1&&x(0,"mat-pseudo-checkbox",3),n&2){let e=T();f("disabled",e.disabled)}}function Bi(n,d){if(n&1&&(a(0,"span",4),s(1),r()),n&2){let e=T();p(),G("(",e.group.label,")")}}var ut=new F("MAT_OPTION_PARENT_COMPONENT"),gt=new F("MatOptgroup");var ht=class{source;isUserInput;constructor(d,e=!1){this.source=d,this.isUserInput=e}},Ze=(()=>{class n{_element=m(z);_changeDetectorRef=m(H);_parent=m(ut,{optional:!0});group=m(gt,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=m(Y).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=ue(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new R;_text;_stateChanges=new L;constructor(){let e=m(U);e.load(Z),e.load(Le),this._signalDisableRipple=!!this._parent&&Dt(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let t=this._getHostElement();typeof t.focus=="function"&&t.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!oe(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new ht(this,e))}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=k({type:n,selectors:[["mat-option"]],viewQuery:function(i,t){if(i&1&&W(Oi,7),i&2){let o;b(o=y())&&(t._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,t){i&1&&_("click",function(){return t._selectViaInteraction()})("keydown",function(c){return t._handleKeydown(c)}),i&2&&(te("id",t.id),C("aria-selected",t.selected)("aria-disabled",t.disabled.toString()),N("mdc-list-item--selected",t.selected)("mat-mdc-option-multiple",t.multiple)("mat-mdc-option-active",t.active)("mdc-list-item--disabled",t.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",g]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Ai,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,t){i&1&&(B(Di),O(0,Fi,1,2,"mat-pseudo-checkbox",1),A(1),a(2,"span",2,0),A(4,1),r(),O(5,Ri,1,1,"mat-pseudo-checkbox",3),O(6,Bi,2,1,"span",4),x(7,"div",5)),i&2&&(D(t.multiple?0:-1),p(5),D(!t.multiple&&t.selected&&!t.hideSingleSelectionIndicator?5:-1),p(),D(t.group&&t.group._inert?6:-1),p(),f("matRippleTrigger",t._getHostElement())("matRippleDisabled",t.disabled||t.disableRipple))},dependencies:[Ue,Se],styles:[`.mat-mdc-option {
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
`],encapsulation:2})}return n})();function li(n,d,e){if(e.length){let i=d.toArray(),t=e.toArray(),o=0;for(let c=0;c<n+1;c++)i[c].group&&i[c].group===t[o]&&o++;return o}return 0}function ci(n,d,e,i){return n<e?n:n+d>e+i?Math.max(0,n-i+d):e}var zi=["trigger"],Wi=["panel"],Gi=[[["mat-select-trigger"]],"*"],Hi=["mat-select-trigger","*"];function ji(n,d){if(n&1&&(a(0,"span",4),s(1),r()),n&2){let e=T();p(),P(e.placeholder)}}function Yi(n,d){n&1&&A(0)}function qi(n,d){if(n&1&&(a(0,"span",11),s(1),r()),n&2){let e=T(2);p(),P(e.triggerValue)}}function Qi(n,d){if(n&1&&(a(0,"span",5),O(1,Yi,1,0)(2,qi,2,1,"span",11),r()),n&2){let e=T();p(),D(e.customTrigger?1:2)}}function Ki(n,d){if(n&1){let e=Q();a(0,"div",12,1),_("keydown",function(t){h(e);let o=T();return u(o._handleKeydown(t))}),A(2,1),r()}if(n&2){let e=T();ne(e.panelClass),N("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),C("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Xi=new F("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=m(Oe);return()=>zt(n)}}),Ui=new F("MAT_SELECT_CONFIG"),Zi=new F("MatSelectTrigger"),ft=class{source;value;constructor(d,e){this.source=d,this.value=e}},di=(()=>{class n{_viewportRuler=m(Lt);_changeDetectorRef=m(H);_elementRef=m(z);_dir=m(_e,{optional:!0});_idGenerator=m(Y);_renderer=m(at);_parentFormField=m(Xt,{optional:!0});ngControl=m(st,{self:!0,optional:!0});_liveAnnouncer=m(Gt);_defaultOptions=m(Ui,{optional:!0});_animationsDisabled=K();_popoverLocation;_initialized=new L;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let i=this.options.toArray()[e];if(i){let t=this.panel.nativeElement,o=li(e,this.options,this.optionGroups),c=i._getHostElement();e===0&&o===1?t.scrollTop=0:t.scrollTop=ci(c.offsetTop,c.offsetHeight,t.scrollTop,t.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ft(this,e)}_scrollStrategyFactory=m(Xi);_panelOpen=!1;_compareWith=(e,i)=>e===i;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new L;_errorStateTracker;stateChanges=new L;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=ue(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ct.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=It(()=>{let e=this.options;return e?e.changes.pipe(J(e),Ne(()=>ce(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(Ne(()=>this.optionSelectionChanges))});openedChange=new R;_openedStream=this.openedChange.pipe(nt(e=>e),it(()=>{}));_closedStream=this.openedChange.pipe(nt(e=>!e),it(()=>{}));selectionChange=new R;valueChange=new R;constructor(){let e=m(ti),i=m(Ee,{optional:!0}),t=m(dt,{optional:!0}),o=m(new fe("tabindex"),{optional:!0}),c=m(Wt,{optional:!0}),l=m(ei,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new ii(e,l||this.ngControl,t,i,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=c?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new de(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(V(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(V(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe(J(null),V(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){let t=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?t.setAttribute("aria-labelledby",e):t.removeAttribute("aria-labelledby")}i&&(this._previousControl!==i.control&&(this._previousControl!==void 0&&i.disabled!==null&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Tt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{i(),clearTimeout(t),this._cleanupDetach=void 0};let e=this.panel.nativeElement,i=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),t=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let i=e.keyCode,t=i===40||i===38||i===37||i===39,o=i===13||i===32,c=this._keyManager;if(!c.isTyping()&&o&&!oe(e)||(this.multiple||e.altKey)&&t)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;c.onKeydown(e);let q=this.selected;q&&l!==q&&this._liveAnnouncer.announce(q.viewValue,1e4)}}_handleOpenKeydown(e){let i=this._keyManager,t=e.keyCode,o=t===40||t===38,c=i.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!c&&(t===13||t===32)&&i.activeItem&&!oe(e))e.preventDefault(),i.activeItem._selectViaInteraction();else if(!c&&this._multiple&&t===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(q=>!q.disabled&&!q.selected);this.options.forEach(q=>{q.disabled||(l?q.select():q.deselect())})}else{let l=i.activeItemIndex;i.onKeydown(e),this._multiple&&o&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==l&&i.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!oe(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{let i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let i=this.options.find(t=>{if(this._selectionModel.isSelected(t))return!1;try{return(t.value!=null||this.canSelectNullableOptions)&&this._compareWith(t.value,e)}catch(o){return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof rt?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Ht(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=ce(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(V(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),ce(...this.options.map(i=>i._stateChanges)).pipe(V(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){let t=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(t!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())),t!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((i,t)=>this.sortComparator?this.sortComparator(i,t,e):e.indexOf(i)-e.indexOf(t)),this.stateChanges.next()}}_propagateChanges(e){let i;this.multiple?i=this.selected.map(t=>t.value):i=this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){e=i;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(e){let i=Vt(e);i&&(i.tagName==="MAT-OPTION"||i.classList.contains("cdk-overlay-backdrop")||i.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=k({type:n,selectors:[["mat-select"]],contentQueries:function(i,t,o){if(i&1&&ie(o,Zi,5)(o,Ze,5)(o,gt,5),i&2){let c;b(c=y())&&(t.customTrigger=c.first),b(c=y())&&(t.options=c),b(c=y())&&(t.optionGroups=c)}},viewQuery:function(i,t){if(i&1&&W(zi,5)(Wi,5)(lt,5),i&2){let o;b(o=y())&&(t.trigger=o.first),b(o=y())&&(t.panel=o.first),b(o=y())&&(t._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(i,t){i&1&&_("keydown",function(c){return t._handleKeydown(c)})("focus",function(){return t._onFocus()})("blur",function(){return t._onBlur()}),i&2&&(C("id",t.id)("tabindex",t.disabled?-1:t.tabIndex)("aria-controls",t.panelOpen?t.id+"-panel":null)("aria-expanded",t.panelOpen)("aria-label",t.ariaLabel||null)("aria-required",t.required.toString())("aria-disabled",t.disabled.toString())("aria-invalid",t.errorState)("aria-activedescendant",t._getAriaActiveDescendant()),N("mat-mdc-select-disabled",t.disabled)("mat-mdc-select-invalid",t.errorState)("mat-mdc-select-required",t.required)("mat-mdc-select-empty",t.empty)("mat-mdc-select-multiple",t.multiple)("mat-select-open",t.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",g],disableRipple:[2,"disableRipple","disableRipple",g],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ae(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",g],placeholder:"placeholder",required:[2,"required","required",g],multiple:[2,"multiple","multiple",g],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",g],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",ae],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",g]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[j([{provide:Kt,useExisting:n},{provide:ut,useExisting:n}]),Me],ngContentSelectors:Hi,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(i,t){if(i&1&&(B(Gi),a(0,"div",2,0),_("click",function(){return t.open()}),a(3,"div",3),O(4,ji,2,1,"span",4)(5,Qi,3,1,"span",5),r(),a(6,"div",6)(7,"div",7),he(),a(8,"svg",8),x(9,"path",9),r()()()(),Rt(10,Ki,3,16,"ng-template",10),_("detach",function(){return t.close()})("backdropClick",function(){return t.close()})("overlayKeydown",function(c){return t._handleOverlayKeydown(c)})),i&2){let o=v(1);p(3),C("id",t._valueId),p(),D(t.empty?4:5),p(6),f("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",t._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",t._scrollStrategy)("cdkConnectedOverlayOrigin",t._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",t._positions)("cdkConnectedOverlayWidth",t._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",t._popoverLocation)}},dependencies:[rt,lt],styles:[`@keyframes _mat-select-enter {
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
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
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
`],encapsulation:2})}return n})();var Ji=["*"],pi=(()=>{class n{labelPosition="after";static \u0275fac=function(i){return new(i||n)};static \u0275cmp=k({type:n,selectors:[["","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,t){i&2&&N("mdc-form-field--align-end",t.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:Ji,decls:1,vars:0,template:function(i,t){i&1&&(B(),A(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})}return n})();var $i=["switch"],en=["*"];function tn(n,d){n&1&&(a(0,"span",11),he(),a(1,"svg",13),x(2,"path",14),r(),a(3,"svg",15),x(4,"path",16),r()())}var nn=new F("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),et=class{source;checked;constructor(d,e){this.source=d,this.checked=e}},mi=(()=>{class n{_elementRef=m(z);_focusMonitor=m(ve);_changeDetectorRef=m(H);defaults=m(nn);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new et(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=K();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new R;toggleChange=new R;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){m(U).load(Z);let e=m(new fe("tabindex"),{optional:!0}),i=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=i.color||"accent",this.id=this._uniqueId=m(Y).getId("mat-mdc-slide-toggle-"),this.hideIcon=i.hideIcon??!1,this.disabledInteractive=i.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new et(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=k({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(i,t){if(i&1&&W($i,5),i&2){let o;b(o=y())&&(t._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:15,hostBindings:function(i,t){i&2&&(te("id",t.id),C("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),ne(t.color?"mat-"+t.color:""),N("mat-mdc-slide-toggle-focused",t._focused)("mat-mdc-slide-toggle-checked",t.checked)("mat-slide-toggle-full-width",t.fullWidth)("_mat-animation-noopable",t._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",g],color:"color",disabled:[2,"disabled","disabled",g],fullWidth:[2,"fullWidth","fullWidth",g],disableRipple:[2,"disableRipple","disableRipple",g],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ae(e)],checked:[2,"checked","checked",g],hideIcon:[2,"hideIcon","hideIcon",g],disabledInteractive:[2,"disabledInteractive","disabledInteractive",g]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[j([{provide:Ce,useExisting:me(()=>n),multi:!0},{provide:Ut,useExisting:n,multi:!0}]),Me],ngContentSelectors:en,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(i,t){if(i&1&&(B(),a(0,"div",1)(1,"button",2,0),_("click",function(){return t._handleClick()}),x(3,"div",3)(4,"span",4),a(5,"span",5)(6,"span",6)(7,"span",7),x(8,"span",8),r(),a(9,"span",9),x(10,"span",10),r(),O(11,tn,5,0,"span",11),r()()(),a(12,"label",12),_("click",function(c){return c.stopPropagation()}),A(13),r()()),i&2){let o=v(2);f("labelPosition",t.labelPosition),p(),N("mdc-switch--selected",t.checked)("mdc-switch--unselected",!t.checked)("mdc-switch--checked",t.checked)("mdc-switch--disabled",t.disabled)("mat-mdc-slide-toggle-disabled-interactive",t.disabledInteractive),f("tabIndex",t.disabled&&!t.disabledInteractive?-1:t.tabIndex)("disabled",t.disabled&&!t.disabledInteractive),C("id",t.buttonId)("name",t.name)("aria-label",t.ariaLabel)("aria-labelledby",t._getAriaLabelledBy())("aria-describedby",t.ariaDescribedby)("aria-required",t.required||null)("aria-checked",t.checked)("aria-disabled",t.disabled&&t.disabledInteractive?"true":null),p(9),f("matRippleTrigger",o)("matRippleDisabled",t.disableRipple||t.disabled)("matRippleCentered",!0),p(),D(t.hideIcon?-1:11),p(),f("for",t.buttonId),C("id",t._labelId)}},dependencies:[Se,pi],styles:[`.mdc-switch {
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
`],encapsulation:2})}return n})();var an=["button"],on=["*"];function rn(n,d){if(n&1&&(a(0,"div",2),x(1,"mat-pseudo-checkbox",6),r()),n&2){let e=T();p(),f("disabled",e.disabled)}}var hi=new F("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),ui=new F("MatButtonToggleGroup"),ln={provide:Ce,useExisting:me(()=>Ie),multi:!0},tt=class{source;value;constructor(d,e){this.source=d,this.value=e}},Ie=(()=>{class n{_changeDetector=m(H);_dir=m(_e,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=m(Y).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(i=>i.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new R;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new R;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=m(hi,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new de(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||oe(e))return;let t=e.target.id,o=this._buttonToggles.toArray().findIndex(l=>l.buttonId===t),c=null;switch(e.keyCode){case 32:case 13:c=this._buttonToggles.get(o)||null;break;case 38:c=this._getNextButton(o,-1);break;case 37:c=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:c=this._getNextButton(o,1);break;case 39:c=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}c&&(e.preventDefault(),c._onButtonClick(),c.focus())}_emitChangeEvent(e){let i=new tt(e,this.value);this._rawValue=i.value,this._controlValueAccessorChangeFn(i.value),this.change.emit(i)}_syncButtonToggle(e,i,t=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?i?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,t)):this._updateModelValue(e,t)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(i=>e.value!=null&&i===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let i=this._buttonToggles.get(e);if(!i.disabled){i.tabIndex=0;break}}}_getNextButton(e,i){let t=this._buttonToggles;for(let o=1;o<=t.length;o++){let c=(e+i*o+t.length)%t.length,l=t.get(c);if(l&&!l.disabled)return l}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let i=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(t=>this._selectValue(t,i))):(this._clearSelection(),this._selectValue(e,i)),!this.multiple&&i.every(t=>t.tabIndex===-1)){for(let t of i)if(!t.disabled){t.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,i){for(let t of i)if(t.value===e){t.checked=!0,this._selectionModel.select(t),this.multiple||(t.tabIndex=0);break}}_updateModelValue(e,i){i&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(i){return new(i||n)};static \u0275dir=ge({type:n,selectors:[["mat-button-toggle-group"]],contentQueries:function(i,t,o){if(i&1&&ie(o,Te,5),i&2){let c;b(c=y())&&(t._buttonToggles=c)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(i,t){i&1&&_("keydown",function(c){return t._keydown(c)}),i&2&&(C("role",t.multiple?"group":"radiogroup")("aria-disabled",t.disabled),N("mat-button-toggle-vertical",t.vertical)("mat-button-toggle-group-appearance-standard",t.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",g],value:"value",multiple:[2,"multiple","multiple",g],disabled:[2,"disabled","disabled",g],disabledInteractive:[2,"disabledInteractive","disabledInteractive",g],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",g],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",g]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[j([ln,{provide:ui,useExisting:n}])]})}return n})(),Te=(()=>{class n{_changeDetectorRef=m(H);_elementRef=m(z);_focusMonitor=m(ve);_idGenerator=m(Y);_animationDisabled=K();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new R;constructor(){m(U).load(Z);let e=m(ui,{optional:!0}),i=m(new fe("tabindex"),{optional:!0})||"",t=m(hi,{optional:!0});this._tabIndex=ue(parseInt(i)||0),this.buttonToggleGroup=e,this._appearance=t&&t.appearance?t.appearance:"standard",this._disabledInteractive=t?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let i=this.buttonToggleGroup._buttonToggles.find(t=>t.tabIndex===0);i&&(i.tabIndex=-1),this.tabIndex=0}this.change.emit(new tt(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=k({type:n,selectors:[["mat-button-toggle"]],viewQuery:function(i,t){if(i&1&&W(an,5),i&2){let o;b(o=y())&&(t._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(i,t){i&1&&_("focus",function(){return t.focus()}),i&2&&(C("aria-label",null)("aria-labelledby",null)("id",t.id)("name",null),N("mat-button-toggle-standalone",!t.buttonToggleGroup)("mat-button-toggle-checked",t.checked)("mat-button-toggle-disabled",t.disabled)("mat-button-toggle-disabled-interactive",t.disabledInteractive)("mat-button-toggle-appearance-standard",t.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",g],appearance:"appearance",checked:[2,"checked","checked",g],disabled:[2,"disabled","disabled",g],disabledInteractive:[2,"disabledInteractive","disabledInteractive",g]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:on,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(i,t){if(i&1&&(B(),a(0,"button",1,0),_("click",function(){return t._onButtonClick()}),O(2,rn,2,1,"div",2),a(3,"span",3),A(4),r()(),x(5,"span",4)(6,"span",5)),i&2){let o=v(1);f("id",t.buttonId)("disabled",t.disabled&&!t.disabledInteractive||null),C("role",t.isSingleSelector()?"radio":"button")("tabindex",t.disabled&&!t.disabledInteractive?-1:t.tabIndex)("aria-pressed",t.isSingleSelector()?null:t.checked)("aria-checked",t.isSingleSelector()?t.checked:null)("name",t._getButtonName())("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby)("aria-disabled",t.disabled&&t.disabledInteractive?"true":null),p(2),D(t.buttonToggleGroup&&(!t.buttonToggleGroup.multiple&&!t.buttonToggleGroup.hideSingleSelectionIndicator||t.buttonToggleGroup.multiple&&!t.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),p(4),f("matRippleTrigger",o)("matRippleDisabled",t.disableRipple||t.disabled)}},dependencies:[Se,Ue],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2})}return n})();var cn=n=>[n];function sn(n,d){if(n&1&&(a(0,"mat-option",13),s(1),r()),n&2){let e=d.$implicit;f("value",e),p(),P(e)}}function dn(n,d){if(n&1&&(a(0,"mat-option",13),s(1),r()),n&2){let e=d.$implicit;f("value",e),p(),P(e)}}function pn(n,d){if(n&1&&(a(0,"button",46),s(1),r()),n&2){let e=T(),i=v(184);f("mdePopoverTriggerFor",i)("mdePopoverCloseOnClickTrigger",e.config.closeOnClickTrigger)("mdePopoverBackdropCloseOnClick",e.config.backdropCloseOnClick)("mdeDisablePopoverTrigger",e.config.disableTrigger),p(),G(" ",e.triggerLabel," ")}}function mn(n,d){if(n&1){let e=Q();a(0,"div",47)(1,"button",55),_("click",function(){h(e);let t=T();return u(t.openPreview())}),s(2,"openPopover()"),r(),a(3,"button",56),_("click",function(){h(e);let t=T();return u(t.closePreview())}),s(4,"closePopover()"),r()()}}function hn(n,d){n&1&&s(0," In click mode a transparent backdrop covers the page while the popover is open. ")}var St={triggerOn:"hover",positionX:"after",positionY:"below",overlapTrigger:!0,scrollStrategy:"reposition",closeOnClick:!0,closeOnClickTrigger:!0,backdropCloseOnClick:!0,disableTrigger:!1,disableAnimation:!1,enterDelay:200,leaveDelay:200,offsetX:0,offsetY:0,arrowOffsetX:0,arrowOffsetY:0,arrowWidth:8,arrowColor:"rgba(0, 0, 0, 0.12)",focusTrapEnabled:!0,focusTrapAutoCaptureEnabled:!0},gi=Mt(Pe({},St),{triggerOn:"click",positionX:"center",overlapTrigger:!1}),un=["before","start","center","end","after"],gn=["above","start","center","end","below"],fi=[{key:"triggerOn",attr:"mdePopoverTriggerOn"},{key:"positionX",attr:"mdePopoverPositionX"},{key:"positionY",attr:"mdePopoverPositionY"},{key:"overlapTrigger",attr:"mdePopoverOverlapTrigger"},{key:"scrollStrategy",attr:"mdePopoverScrollStrategy"},{key:"closeOnClick",attr:"mdePopoverCloseOnClick"},{key:"disableAnimation",attr:"mdePopoverDisableAnimation"},{key:"enterDelay",attr:"mdePopoverEnterDelay"},{key:"leaveDelay",attr:"mdePopoverLeaveDelay"},{key:"offsetX",attr:"mdePopoverOffsetX"},{key:"offsetY",attr:"mdePopoverOffsetY"},{key:"arrowOffsetX",attr:"mdePopoverArrowOffsetX"},{key:"arrowOffsetY",attr:"mdePopoverArrowOffsetY"},{key:"arrowWidth",attr:"mdePopoverArrowWidth"},{key:"arrowColor",attr:"mdePopoverArrowColor"},{key:"focusTrapEnabled",attr:"mdeFocusTrapEnabled"},{key:"focusTrapAutoCaptureEnabled",attr:"mdeFocusTrapAutoCaptureEnabled"}],_i=[{key:"closeOnClickTrigger",attr:"mdePopoverCloseOnClickTrigger"},{key:"backdropCloseOnClick",attr:"mdePopoverBackdropCloseOnClick"},{key:"disableTrigger",attr:"mdeDisablePopoverTrigger"}];function fn(n,d){return typeof d=="string"?`${n}="${d}"`:`[${n}]="${d}"`}var vi=(()=>{class n{constructor(){this.positionXOptions=un,this.positionYOptions=gn,this.config=Pe({},gi),this.align="center",this.copied=!1}get triggerLabel(){if(this.config.disableTrigger)return"Disabled";switch(this.config.triggerOn){case"click":return"Click me";case"hover":return"Hover me";default:return"Manual (none)"}}get arrowVisible(){let{positionX:e,positionY:i,overlapTrigger:t}=this.config;return!t&&(e==="center"||i==="center")}get arrowHiddenReason(){let{positionX:e,positionY:i}=this.config;return e!=="center"&&i!=="center"?'Arrow hidden: it only renders when positionX or positionY is "center".':"Arrow hidden: it only renders when overlap is off."}get closeOnClickTriggerApplies(){return this.config.triggerOn==="click"&&this.config.backdropCloseOnClick&&!this.config.disableTrigger}get closeOnClickTriggerHint(){return this.config.triggerOn!=="click"?"Only used with click mode.":this.config.backdropCloseOnClick?this.config.closeOnClickTrigger?"Clicking the trigger again closes the popover.":"The trigger stays above the backdrop, so clicking it keeps the popover open.":"No effect while outside-click close is off: the click backdrop covers the trigger."}get triggerKey(){return JSON.stringify(this.config)}get contentHint(){return this.config.closeOnClick?"Click inside this popover to close it.":"Clicks inside keep this popover open."}get changedInputs(){return[...fi,..._i].filter(({key:e})=>this.config[e]!==St[e]).map(({attr:e})=>e)}get snippet(){let e=o=>o.filter(({key:c})=>this.config[c]!==St[c]).map(({key:c,attr:l})=>`
    `+fn(l,this.config[c])),i=e(fi).join("");return`<button mat-button [mdePopoverTriggerFor]="appPopover"${e(_i).join("")}>
  Open
</button>

<mde-popover #appPopover="mdePopover"${i}>
  <mat-card>
    <mat-card-content>Popover content</mat-card-content>
  </mat-card>
</mde-popover>`}onEscape(){this.closePreview()}closePreview(){this.trigger?.closePopover()}openPreview(){this.trigger?.openPopover()}reset(){this.closePreview(),this.config=Pe({},gi),this.align="center",this.copied=!1}copySnippet(){return Et(this,null,function*(){try{yield navigator.clipboard.writeText(this.snippet),this.copied=!0,setTimeout(()=>this.copied=!1,1500)}catch(e){this.copied=!1}})}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=k({type:n,selectors:[["app-builder"]],viewQuery:function(i,t){if(i&1&&W(re,5),i&2){let o;b(o=y())&&(t.trigger=o.first)}},hostBindings:function(i,t){i&1&&_("keydown.escape",function(){return t.onEscape()},Ft)},decls:193,vars:61,consts:[["playgroundPopover","mdePopover"],[1,"playground"],[1,"playground-header"],["data-testid","builder-heading"],["appearance","outlined",1,"controls"],["subscriptSizing","dynamic"],["data-testid","builder-trigger-on",3,"ngModelChange","ngModel"],["value","click"],["value","hover"],["value","none"],["data-testid","builder-disable-trigger",3,"ngModelChange","ngModel"],[1,"row"],["data-testid","builder-position-x",3,"ngModelChange","ngModel"],[3,"value"],["data-testid","builder-position-y",3,"ngModelChange","ngModel"],["matInput","","type","number","data-testid","builder-offset-x",3,"ngModelChange","ngModel"],["matTextSuffix",""],["matInput","","type","number","data-testid","builder-offset-y",3,"ngModelChange","ngModel"],["data-testid","builder-overlap",3,"ngModelChange","ngModel"],[1,"note"],[3,"ngModelChange","ngModel"],["value","reposition"],["value","close"],["value","block"],["value","noop"],["data-testid","builder-close-on-click",3,"ngModelChange","ngModel"],["data-testid","builder-close-on-click-trigger",3,"ngModelChange","ngModel","disabled"],["data-testid","builder-close-on-click-trigger-hint",1,"note"],["data-testid","builder-backdrop-close",3,"ngModelChange","ngModel"],["matInput","","type","number","min","0","step","50","data-testid","builder-enter-delay",3,"ngModelChange","ngModel","disabled"],["matInput","","type","number","min","0","step","50",3,"ngModelChange","ngModel","disabled"],["data-testid","builder-arrow-hint",1,"note"],["matInput","","type","number","min","0","data-testid","builder-arrow-width",3,"ngModelChange","ngModel","disabled"],["matInput","","data-testid","builder-arrow-color",3,"ngModelChange","ngModel","disabled"],["matTextSuffix","","type","color","aria-label","Pick arrow color",1,"swatch",3,"input","disabled"],["matInput","","type","number",3,"ngModelChange","ngModel","disabled"],[3,"ngModelChange","ngModel","disabled"],[1,"output"],["appearance","outlined",1,"preview"],[1,"preview-toolbar"],["aria-label","Trigger alignment","hideSingleSelectionIndicator","",3,"ngModelChange","ngModel"],["value","start","data-testid","builder-align-start"],["value","center"],["value","end","data-testid","builder-align-end"],["mat-stroked-button","","data-testid","builder-reset",3,"click"],[1,"stage"],["mat-flat-button","","data-testid","builder-trigger",3,"mdePopoverTriggerFor","mdePopoverCloseOnClickTrigger","mdePopoverBackdropCloseOnClick","mdeDisablePopoverTrigger"],[1,"manual"],["data-testid","builder-close-note",1,"note"],["appearance","outlined",1,"snippet"],["mat-button","","data-testid","builder-copy",3,"click"],["data-testid","builder-snippet"],[3,"mdePopoverTriggerOn","mdePopoverPositionX","mdePopoverPositionY","mdePopoverOverlapTrigger","mdePopoverScrollStrategy","mdePopoverCloseOnClick","mdePopoverDisableAnimation","mdePopoverEnterDelay","mdePopoverLeaveDelay","mdePopoverOffsetX","mdePopoverOffsetY","mdePopoverArrowOffsetX","mdePopoverArrowOffsetY","mdePopoverArrowWidth","mdePopoverArrowColor","mdeFocusTrapEnabled","mdeFocusTrapAutoCaptureEnabled"],["appearance","outlined","data-testid","builder-popover-content",1,"popover-card"],["mat-stroked-button","","data-testid","builder-popover-close",3,"click"],["mat-button","","data-testid","builder-open",3,"click"],["mat-button","","data-testid","builder-close",3,"click"]],template:function(i,t){if(i&1){let o=Q();a(0,"div",1)(1,"header",2)(2,"h2",3),s(3,"Popover playground"),r(),a(4,"p"),s(5," Configure every "),a(6,"code"),s(7,"mde-popover"),r(),s(8," input, try it in the preview, and copy the matching template. "),r()(),a(9,"mat-card",4)(10,"mat-card-content")(11,"h3"),s(12,"Trigger"),r(),a(13,"mat-form-field",5)(14,"mat-label"),s(15,"mdePopoverTriggerOn"),r(),a(16,"mat-select",6),S(),I("ngModelChange",function(l){return h(o),E(t.config.triggerOn,l)||(t.config.triggerOn=l),u(l)}),a(17,"mat-option",7),s(18,"click"),r(),a(19,"mat-option",8),s(20,"hover"),r(),a(21,"mat-option",9),s(22,"none (open from code)"),r()()(),a(23,"mat-slide-toggle",10),S(),I("ngModelChange",function(l){return h(o),E(t.config.disableTrigger,l)||(t.config.disableTrigger=l),u(l)}),s(24," Disable trigger "),a(25,"code"),s(26,"mdeDisablePopoverTrigger"),r()(),a(27,"h3"),s(28,"Position"),r(),a(29,"div",11)(30,"mat-form-field",5)(31,"mat-label"),s(32,"mdePopoverPositionX"),r(),a(33,"mat-select",12),S(),I("ngModelChange",function(l){return h(o),E(t.config.positionX,l)||(t.config.positionX=l),u(l)}),$(34,sn,2,2,"mat-option",13,se),r()(),a(36,"mat-form-field",5)(37,"mat-label"),s(38,"mdePopoverPositionY"),r(),a(39,"mat-select",14),S(),I("ngModelChange",function(l){return h(o),E(t.config.positionY,l)||(t.config.positionY=l),u(l)}),$(40,dn,2,2,"mat-option",13,se),r()()(),a(42,"div",11)(43,"mat-form-field",5)(44,"mat-label"),s(45,"mdePopoverOffsetX"),r(),a(46,"input",15),S(),I("ngModelChange",function(l){return h(o),E(t.config.offsetX,l)||(t.config.offsetX=l),u(l)}),r(),a(47,"span",16),s(48,"px"),r()(),a(49,"mat-form-field",5)(50,"mat-label"),s(51,"mdePopoverOffsetY"),r(),a(52,"input",17),S(),I("ngModelChange",function(l){return h(o),E(t.config.offsetY,l)||(t.config.offsetY=l),u(l)}),r(),a(53,"span",16),s(54,"px"),r()()(),a(55,"mat-slide-toggle",18),S(),I("ngModelChange",function(l){return h(o),E(t.config.overlapTrigger,l)||(t.config.overlapTrigger=l),u(l)}),s(56," Overlap trigger "),a(57,"code"),s(58,"mdePopoverOverlapTrigger"),r()(),a(59,"p",19),s(60,"Overlap moves the panel onto the trigger's edge; it is most visible with start/center/end positions."),r(),a(61,"mat-form-field",5)(62,"mat-label"),s(63,"mdePopoverScrollStrategy"),r(),a(64,"mat-select",20),S(),I("ngModelChange",function(l){return h(o),E(t.config.scrollStrategy,l)||(t.config.scrollStrategy=l),u(l)}),a(65,"mat-option",21),s(66,"reposition"),r(),a(67,"mat-option",22),s(68,"close"),r(),a(69,"mat-option",23),s(70,"block"),r(),a(71,"mat-option",24),s(72,"noop"),r()()(),a(73,"h3"),s(74,"Behavior"),r(),a(75,"mat-slide-toggle",25),S(),I("ngModelChange",function(l){return h(o),E(t.config.closeOnClick,l)||(t.config.closeOnClick=l),u(l)}),s(76," Close on content click "),a(77,"code"),s(78,"mdePopoverCloseOnClick"),r()(),a(79,"mat-slide-toggle",26),S(),I("ngModelChange",function(l){return h(o),E(t.config.closeOnClickTrigger,l)||(t.config.closeOnClickTrigger=l),u(l)}),s(80," Close on trigger click "),a(81,"code"),s(82,"mdePopoverCloseOnClickTrigger"),r()(),a(83,"p",27),s(84),r(),a(85,"mat-slide-toggle",28),S(),I("ngModelChange",function(l){return h(o),E(t.config.backdropCloseOnClick,l)||(t.config.backdropCloseOnClick=l),u(l)}),s(86," Close on outside click "),a(87,"code"),s(88,"mdePopoverBackdropCloseOnClick"),r()(),a(89,"mat-slide-toggle",20),S(),I("ngModelChange",function(l){return h(o),E(t.config.disableAnimation,l)||(t.config.disableAnimation=l),u(l)}),s(90," Disable animation "),a(91,"code"),s(92,"mdePopoverDisableAnimation"),r()(),a(93,"h3"),s(94,"Timing "),a(95,"small"),s(96,"(hover only)"),r()(),a(97,"div",11)(98,"mat-form-field",5)(99,"mat-label"),s(100,"mdePopoverEnterDelay"),r(),a(101,"input",29),S(),I("ngModelChange",function(l){return h(o),E(t.config.enterDelay,l)||(t.config.enterDelay=l),u(l)}),r(),a(102,"span",16),s(103,"ms"),r()(),a(104,"mat-form-field",5)(105,"mat-label"),s(106,"mdePopoverLeaveDelay"),r(),a(107,"input",30),S(),I("ngModelChange",function(l){return h(o),E(t.config.leaveDelay,l)||(t.config.leaveDelay=l),u(l)}),r(),a(108,"span",16),s(109,"ms"),r()()(),a(110,"h3"),s(111,"Arrow"),r(),a(112,"p",31),s(113),r(),a(114,"div",11)(115,"mat-form-field",5)(116,"mat-label"),s(117,"mdePopoverArrowWidth"),r(),a(118,"input",32),S(),I("ngModelChange",function(l){return h(o),E(t.config.arrowWidth,l)||(t.config.arrowWidth=l),u(l)}),r(),a(119,"span",16),s(120,"px"),r()(),a(121,"mat-form-field",5)(122,"mat-label"),s(123,"mdePopoverArrowColor"),r(),a(124,"input",33),S(),I("ngModelChange",function(l){return h(o),E(t.config.arrowColor,l)||(t.config.arrowColor=l),u(l)}),r(),a(125,"input",34),_("input",function(l){return t.config.arrowColor=l.target.value}),r()()(),a(126,"div",11)(127,"mat-form-field",5)(128,"mat-label"),s(129,"mdePopoverArrowOffsetX"),r(),a(130,"input",35),S(),I("ngModelChange",function(l){return h(o),E(t.config.arrowOffsetX,l)||(t.config.arrowOffsetX=l),u(l)}),r(),a(131,"span",16),s(132,"px"),r()(),a(133,"mat-form-field",5)(134,"mat-label"),s(135,"mdePopoverArrowOffsetY"),r(),a(136,"input",35),S(),I("ngModelChange",function(l){return h(o),E(t.config.arrowOffsetY,l)||(t.config.arrowOffsetY=l),u(l)}),r(),a(137,"span",16),s(138,"px"),r()()(),a(139,"h3"),s(140,"Accessibility"),r(),a(141,"mat-slide-toggle",20),S(),I("ngModelChange",function(l){return h(o),E(t.config.focusTrapEnabled,l)||(t.config.focusTrapEnabled=l),u(l)}),s(142," Focus trap "),a(143,"code"),s(144,"mdeFocusTrapEnabled"),r()(),a(145,"mat-slide-toggle",36),S(),I("ngModelChange",function(l){return h(o),E(t.config.focusTrapAutoCaptureEnabled,l)||(t.config.focusTrapAutoCaptureEnabled=l),u(l)}),s(146," Auto-capture focus "),a(147,"code"),s(148,"mdeFocusTrapAutoCaptureEnabled"),r()()()(),a(149,"div",37)(150,"mat-card",38)(151,"mat-card-content")(152,"div",39)(153,"h3"),s(154,"Preview"),r(),a(155,"mat-button-toggle-group",40),S(),I("ngModelChange",function(l){return h(o),E(t.align,l)||(t.align=l),u(l)}),a(156,"mat-button-toggle",41),s(157,"Left"),r(),a(158,"mat-button-toggle",42),s(159,"Center"),r(),a(160,"mat-button-toggle",43),s(161,"Right"),r()(),a(162,"button",44),_("click",function(){return t.reset()}),s(163,"Reset"),r()(),a(164,"div",45),$(165,pn,2,5,"button",46,se),r(),O(167,mn,5,0,"div",47),a(168,"p",48),s(169," The library closes on Escape only while focus is inside the panel. In this playground Escape works anywhere, and the popover's own Close button always closes it. "),O(170,hn,1,0),r()()(),a(171,"mat-card",49)(172,"mat-card-content")(173,"div",39)(174,"h3"),s(175,"Template"),r(),a(176,"span",19),s(177),r(),a(178,"button",50),_("click",function(){return t.copySnippet()}),s(179),r()(),a(180,"pre",51)(181,"code"),s(182),r()()()()()(),a(183,"mde-popover",52,0)(185,"mat-card",53)(186,"mat-card-content")(187,"strong"),s(188,"Hello from mde-popover"),r(),a(189,"p"),s(190),r(),a(191,"button",54),_("click",function(l){return h(o),t.closePreview(),u(l.stopPropagation())}),s(192,"Close"),r()()()()}i&2&&(p(16),M("ngModel",t.config.triggerOn),w(),p(7),M("ngModel",t.config.disableTrigger),w(),p(10),M("ngModel",t.config.positionX),w(),p(),ee(t.positionXOptions),p(5),M("ngModel",t.config.positionY),w(),p(),ee(t.positionYOptions),p(6),M("ngModel",t.config.offsetX),w(),p(6),M("ngModel",t.config.offsetY),w(),p(3),M("ngModel",t.config.overlapTrigger),w(),p(9),M("ngModel",t.config.scrollStrategy),w(),p(11),M("ngModel",t.config.closeOnClick),w(),p(4),M("ngModel",t.config.closeOnClickTrigger),f("disabled",!t.closeOnClickTriggerApplies),w(),p(5),P(t.closeOnClickTriggerHint),p(),M("ngModel",t.config.backdropCloseOnClick),w(),p(4),M("ngModel",t.config.disableAnimation),w(),p(12),M("ngModel",t.config.enterDelay),f("disabled",t.config.triggerOn!=="hover"),w(),p(6),M("ngModel",t.config.leaveDelay),f("disabled",t.config.triggerOn!=="hover"),w(),p(5),N("warn",!t.arrowVisible),p(),G(" ",t.arrowVisible?"The arrow is visible for the current position.":t.arrowHiddenReason," "),p(5),M("ngModel",t.config.arrowWidth),f("disabled",!t.arrowVisible),w(),p(6),M("ngModel",t.config.arrowColor),f("disabled",!t.arrowVisible),w(),p(),f("disabled",!t.arrowVisible),p(5),M("ngModel",t.config.arrowOffsetX),f("disabled",!t.arrowVisible),w(),p(6),M("ngModel",t.config.arrowOffsetY),f("disabled",!t.arrowVisible),w(),p(5),M("ngModel",t.config.focusTrapEnabled),w(),p(4),M("ngModel",t.config.focusTrapAutoCaptureEnabled),f("disabled",!t.config.focusTrapEnabled),w(),p(10),M("ngModel",t.align),w(),p(9),ne("stage align-"+t.align),p(),ee(Ve(59,cn,t.triggerKey)),p(2),D(t.config.triggerOn==="none"?167:-1),p(3),D(t.config.triggerOn==="click"?170:-1),p(7),G("",t.changedInputs.length," input(s) differ from the library defaults"),p(2),P(t.copied?"Copied":"Copy"),p(3),P(t.snippet),p(),f("mdePopoverTriggerOn",t.config.triggerOn)("mdePopoverPositionX",t.config.positionX)("mdePopoverPositionY",t.config.positionY)("mdePopoverOverlapTrigger",t.config.overlapTrigger)("mdePopoverScrollStrategy",t.config.scrollStrategy)("mdePopoverCloseOnClick",t.config.closeOnClick)("mdePopoverDisableAnimation",t.config.disableAnimation)("mdePopoverEnterDelay",t.config.enterDelay)("mdePopoverLeaveDelay",t.config.leaveDelay)("mdePopoverOffsetX",t.config.offsetX)("mdePopoverOffsetY",t.config.offsetY)("mdePopoverArrowOffsetX",t.config.arrowOffsetX)("mdePopoverArrowOffsetY",t.config.arrowOffsetY)("mdePopoverArrowWidth",t.config.arrowWidth)("mdePopoverArrowColor",t.config.arrowColor)("mdeFocusTrapEnabled",t.config.focusTrapEnabled)("mdeFocusTrapAutoCaptureEnabled",t.config.focusTrapAutoCaptureEnabled),p(7),P(t.contentHint))},dependencies:[ke,Ye,Xe,Qe,qe,Ke,We,Ge,we,He,je,di,Ze,xe,mi,Ie,Te,ze,ye,be,re],styles:['[_nghost-%COMP%]{display:block;padding:24px}.playground[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(300px,380px) 1fr;grid-template-areas:"header header" "controls output";gap:16px;align-items:start;max-width:1280px;margin:0 auto}.playground-header[_ngcontent-%COMP%]{grid-area:header}.playground-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 4px}.playground-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;opacity:.75}.controls[_ngcontent-%COMP%]{grid-area:controls}.controls[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.output[_ngcontent-%COMP%]{grid-area:output;display:flex;flex-direction:column;gap:16px}h3[_ngcontent-%COMP%]{margin:12px 0 0;font-size:14px;font-weight:500;text-transform:uppercase;letter-spacing:.04em;opacity:.7}h3[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{text-transform:none}.row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:8px}mat-form-field[_ngcontent-%COMP%]{width:100%}code[_ngcontent-%COMP%]{font-family:Roboto Mono,ui-monospace,monospace;font-size:12px}mat-slide-toggle[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{opacity:.6;margin-left:4px}.note[_ngcontent-%COMP%]{font-size:12px;opacity:.65;margin:0}.note.warn[_ngcontent-%COMP%]{opacity:1;color:#b26a00}.swatch[_ngcontent-%COMP%]{width:28px;height:22px;padding:0;border:none;background:none;cursor:pointer}.preview-toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.preview-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;flex:1}.stage[_ngcontent-%COMP%]{display:flex;align-items:center;min-height:320px;margin:16px 0 8px;padding:0 24px;border:1px dashed rgba(127,127,127,.4);border-radius:8px;background-image:radial-gradient(rgba(127,127,127,.25) 1px,transparent 1px);background-size:16px 16px}.stage.align-start[_ngcontent-%COMP%]{justify-content:flex-start}.stage.align-center[_ngcontent-%COMP%]{justify-content:center}.stage.align-end[_ngcontent-%COMP%]{justify-content:flex-end}.manual[_ngcontent-%COMP%]{display:flex;gap:8px}pre[_ngcontent-%COMP%]{margin:12px 0 0;padding:12px;overflow:auto;border-radius:6px;background:#7f7f7f1f;font-size:12px;line-height:1.5}.popover-card[_ngcontent-%COMP%]{max-width:260px}.popover-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:8px 0}@media(max-width:900px){.playground[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-areas:"header" "output" "controls"}.output[_ngcontent-%COMP%]{position:static}}'],changeDetection:1})}}return n})();var Ci=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],ki=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function _n(n,d){n&1&&(a(0,"span",3),A(1,1),r())}function vn(n,d){n&1&&(a(0,"span",6),A(1,2),r())}function bn(n,d){n&1&&(a(0,"span",3),A(1,1),a(2,"span",7),he(),a(3,"svg",8),x(4,"path",9),r()()())}function yn(n,d){n&1&&(a(0,"span",6),A(1,2),r())}var Sn=`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
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
`;var xi=["*"],wn=`.mat-mdc-chip-set {
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
  margin: 4px 0 4px 8px;
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
`,Ni=new F("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),bi=new F("MatChipAvatar"),yi=new F("MatChipTrailingIcon"),Si=new F("MatChipEdit"),wi=new F("MatChipRemove"),kt=new F("MatChip"),Mi=(()=>{class n{_elementRef=m(z);_parentChip=m(kt);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){m(U).load(Z),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=ge({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(i,t){i&2&&(C("disabled",t._getDisabledAttribute())("aria-disabled",t.disabled),N("mdc-evolution-chip__action--primary",t._isPrimary)("mdc-evolution-chip__action--secondary",!t._isPrimary)("mdc-evolution-chip__action--trailing",!t._isPrimary&&!t._isLeading))},inputs:{disabled:[2,"disabled","disabled",g],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:ae(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),Ei=(()=>{class n extends Mi{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(t){return(e||(e=De(n)))(t||n)}})();static \u0275dir=ge({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(i,t){i&1&&_("click",function(c){return t._handleClick(c)})("keydown",function(c){return t._handleKeydown(c)}),i&2&&(C("tabindex",t._getTabindex()),N("mdc-evolution-chip__action--presentational",!1))},features:[Ae]})}return n})();var wt=(()=>{class n{_changeDetectorRef=m(H);_elementRef=m(z);_tagName=m(Bt);_ngZone=m(Ot);_focusMonitor=m(ve);_globalRippleOptions=m(Yt,{optional:!0});_document=m(Pt);_onFocus=new L;_onBlur=new L;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=K();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=m(Y).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new R;destroyed=new R;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=m(qt);_injector=m(Oe);constructor(){let e=m(U);e.load(Z),e.load(Le),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=ce(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(i=>{let t=i._elementRef.nativeElement;return t===e||t.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let i=e!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=k({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(i,t,o){if(i&1&&ie(o,bi,5)(o,Si,5)(o,yi,5)(o,wi,5)(o,bi,5)(o,yi,5)(o,Si,5)(o,wi,5),i&2){let c;b(c=y())&&(t.leadingIcon=c.first),b(c=y())&&(t.editIcon=c.first),b(c=y())&&(t.trailingIcon=c.first),b(c=y())&&(t.removeIcon=c.first),b(c=y())&&(t._allLeadingIcons=c),b(c=y())&&(t._allTrailingIcons=c),b(c=y())&&(t._allEditIcons=c),b(c=y())&&(t._allRemoveIcons=c)}},viewQuery:function(i,t){if(i&1&&W(Ei,5),i&2){let o;b(o=y())&&(t.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(i,t){i&1&&_("keydown",function(c){return t._handleKeydown(c)}),i&2&&(te("id",t.id),C("role",t.role)("aria-label",t.ariaLabel),ne("mat-"+(t.color||"primary")),N("mdc-evolution-chip",!t._isBasicChip)("mdc-evolution-chip--disabled",t.disabled)("mdc-evolution-chip--with-trailing-action",t._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",t.leadingIcon)("mdc-evolution-chip--with-primary-icon",t.leadingIcon)("mdc-evolution-chip--with-avatar",t.leadingIcon)("mat-mdc-chip-with-avatar",t.leadingIcon)("mat-mdc-chip-highlighted",t.highlighted)("mat-mdc-chip-disabled",t.disabled)("mat-mdc-basic-chip",t._isBasicChip)("mat-mdc-standard-chip",!t._isBasicChip)("mat-mdc-chip-with-trailing-icon",t._hasTrailingIcon())("_mat-animation-noopable",t._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",g],highlighted:[2,"highlighted","highlighted",g],disableRipple:[2,"disableRipple","disableRipple",g],disabled:[2,"disabled","disabled",g]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[j([{provide:kt,useExisting:n}])],ngContentSelectors:ki,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(i,t){i&1&&(B(Ci),x(0,"span",0),a(1,"span",1)(2,"span",2),O(3,_n,2,0,"span",3),a(4,"span",4),A(5),x(6,"span",5),r()()(),O(7,vn,2,0,"span",6)),i&2&&(p(3),D(t.leadingIcon?3:-1),p(4),D(t._hasTrailingIcon()?7:-1))},dependencies:[Mi],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
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
`],encapsulation:2})}return n})();var xt=(()=>{class n extends wt{_defaultOptions=m(Ni,{optional:!0});chipListSelectable=!0;_chipListMultiple=!1;_chipListHideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get selectable(){return this._selectable&&this.chipListSelectable}set selectable(e){this._selectable=e,this._changeDetectorRef.markForCheck()}_selectable=!0;get selected(){return this._selected}set selected(e){this._setSelectedState(e,!1,!0)}_selected=!1;get ariaSelected(){return this.selectable?this.selected.toString():null}basicChipAttrName="mat-basic-chip-option";selectionChange=new R;ngOnInit(){super.ngOnInit(),this.role="presentation"}select(){this._setSelectedState(!0,!1,!0)}deselect(){this._setSelectedState(!1,!1,!0)}selectViaInteraction(){this._setSelectedState(!0,!0,!0)}toggleSelected(e=!1){return this._setSelectedState(!this.selected,e,!0),this.selected}_handlePrimaryActionInteraction(){this.disabled||(this.focus(),this.selectable&&this.toggleSelected(!0))}_hasLeadingGraphic(){return this.leadingIcon?!0:!this._chipListHideSingleSelectionIndicator||this._chipListMultiple}_setSelectedState(e,i,t){e!==this.selected&&(this._selected=e,t&&this.selectionChange.emit({source:this,isUserInput:i,selected:this.selected}),this._changeDetectorRef.markForCheck())}static \u0275fac=(()=>{let e;return function(t){return(e||(e=De(n)))(t||n)}})();static \u0275cmp=k({type:n,selectors:[["mat-basic-chip-option"],["","mat-basic-chip-option",""],["mat-chip-option"],["","mat-chip-option",""]],hostAttrs:[1,"mat-mdc-chip","mat-mdc-chip-option"],hostVars:37,hostBindings:function(i,t){i&2&&(te("id",t.id),C("tabindex",null)("aria-label",null)("aria-description",null)("role",t.role),N("mdc-evolution-chip",!t._isBasicChip)("mdc-evolution-chip--filter",!t._isBasicChip)("mdc-evolution-chip--selectable",!t._isBasicChip)("mat-mdc-chip-selected",t.selected)("mat-mdc-chip-multiple",t._chipListMultiple)("mat-mdc-chip-disabled",t.disabled)("mat-mdc-chip-with-avatar",t.leadingIcon)("mdc-evolution-chip--disabled",t.disabled)("mdc-evolution-chip--selected",t.selected)("mdc-evolution-chip--selecting",!t._animationsDisabled)("mdc-evolution-chip--with-trailing-action",t._hasTrailingIcon())("mdc-evolution-chip--with-primary-icon",t.leadingIcon)("mdc-evolution-chip--with-primary-graphic",t._hasLeadingGraphic())("mdc-evolution-chip--with-avatar",t.leadingIcon)("mat-mdc-chip-highlighted",t.highlighted)("mat-mdc-chip-with-trailing-icon",t._hasTrailingIcon()))},inputs:{selectable:[2,"selectable","selectable",g],selected:[2,"selected","selected",g]},outputs:{selectionChange:"selectionChange"},features:[j([{provide:wt,useExisting:n},{provide:kt,useExisting:n}]),Ae],ngContentSelectors:ki,decls:8,vars:6,consts:[[1,"mat-mdc-chip-focus-overlay"],["role","presentation",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipAction","","role","option",3,"_allowFocusWhenDisabled"],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],["role","presentation",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"],[1,"mdc-evolution-chip__checkmark"],["viewBox","-2 -3 30 30","focusable","false","aria-hidden","true",1,"mdc-evolution-chip__checkmark-svg"],["fill","none","stroke","currentColor","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-evolution-chip__checkmark-path"]],template:function(i,t){i&1&&(B(Ci),x(0,"span",0),a(1,"span",1)(2,"button",2),O(3,bn,5,0,"span",3),a(4,"span",4),A(5),x(6,"span",5),r()()(),O(7,yn,2,0,"span",6)),i&2&&(p(2),f("_allowFocusWhenDisabled",!0),C("aria-description",t.ariaDescription)("aria-label",t.ariaLabel)("aria-selected",t.ariaSelected),p(),D(t._hasLeadingGraphic()?3:-1),p(4),D(t._hasTrailingIcon()?7:-1))},dependencies:[Ei],styles:[Sn],encapsulation:2})}return n})();var Cn=(()=>{class n{_elementRef=m(z);_changeDetectorRef=m(H);_dir=m(_e,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new L;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new At;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(J(null),Ne(()=>ce(...this._chips.map(e))))}_originatesFromChip(e){let i=e.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains("mat-mdc-chip"))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(J(this._chips)).subscribe(e=>{let i=[];e.forEach(t=>t._getActions().forEach(o=>i.push(o))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new jt(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(V(this._destroyed)).subscribe(({chip:e})=>{let i=e._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(V(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(J(null),V(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(V(this._destroyed)).subscribe(e=>{let t=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),c=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),l=o||c;this._isValidIndex(t)&&l&&(this._lastDestroyedFocusedChipIndex=t)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[e];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=k({type:n,selectors:[["mat-chip-set"]],contentQueries:function(i,t,o){if(i&1&&ie(o,wt,5),i&2){let c;b(c=y())&&(t._chips=c)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(i,t){i&1&&_("keydown",function(c){return t._handleKeydown(c)}),i&2&&C("role",t.role)},inputs:{disabled:[2,"disabled","disabled",g],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ae(e)]},ngContentSelectors:xi,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,t){i&1&&(B(),Fe(0,"div",0),A(1),Re())},styles:[`.mat-mdc-chip-set {
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
  margin: 4px 0 4px 8px;
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
`],encapsulation:2})}return n})(),Ct=class{source;value;constructor(d,e){this.source=d,this.value=e}},kn={provide:Ce,useExisting:me(()=>Nt),multi:!0},Nt=(()=>{class n extends Cn{_onTouched=()=>{};_onChange=()=>{};_defaultRole="listbox";_defaultOptions=m(Ni,{optional:!0});get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._syncListboxProperties()}_multiple=!1;get selected(){let e=this._chips.toArray().filter(i=>i.selected);return this.multiple?e:e[0]}ariaOrientation="horizontal";get selectable(){return this._selectable}set selectable(e){this._selectable=e,this._syncListboxProperties()}_selectable=!0;compareWith=(e,i)=>e===i;required=!1;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncListboxProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get chipSelectionChanges(){return this._getChipStream(e=>e.selectionChange)}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}get value(){return this._value}set value(e){this._chips&&this._chips.length&&this._setSelectionByValue(e,!1),this._value=e}_value;change=new R;_chips=void 0;ngAfterContentInit(){this._chips.changes.pipe(J(null),V(this._destroyed)).subscribe(()=>{this.value!==void 0&&Promise.resolve().then(()=>{this._setSelectionByValue(this.value,!1)}),this._syncListboxProperties()}),this.chipBlurChanges.pipe(V(this._destroyed)).subscribe(()=>this._blur()),this.chipSelectionChanges.pipe(V(this._destroyed)).subscribe(e=>{this.multiple||this._chips.forEach(i=>{i!==e.source&&i._setSelectedState(!1,!1,!1)}),e.isUserInput&&this._propagateChanges()})}focus(){if(this.disabled)return;let e=this._getFirstSelectedChip();e&&!e.disabled?e.focus():this._chips.length>0?this._keyManager.setFirstItemActive():this._elementRef.nativeElement.focus()}writeValue(e){e!=null?this.value=e:this.value=void 0}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_setSelectionByValue(e,i=!0){this._clearSelection(),Array.isArray(e)?e.forEach(t=>this._selectValue(t,i)):this._selectValue(e,i)}_blur(){this.disabled||setTimeout(()=>{this.focused||this._markAsTouched()})}_keydown(e){e.keyCode===9&&super._allowFocusEscape()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck()}_propagateChanges(){let e=null;Array.isArray(this.selected)?e=this.selected.map(i=>i.value):e=this.selected?this.selected.value:void 0,this._value=e,this.change.emit(new Ct(this,e)),this._onChange(e),this._changeDetectorRef.markForCheck()}_clearSelection(e){this._chips.forEach(i=>{i!==e&&i.deselect()})}_selectValue(e,i){let t=this._chips.find(o=>o.value!=null&&this.compareWith(o.value,e));return t&&(i?t.selectViaInteraction():t.select()),t}_syncListboxProperties(){this._chips&&Promise.resolve().then(()=>{this._chips.forEach(e=>{e._chipListMultiple=this.multiple,e.chipListSelectable=this._selectable,e._chipListHideSingleSelectionIndicator=this.hideSingleSelectionIndicator,e._changeDetectorRef.markForCheck()})})}_getFirstSelectedChip(){return Array.isArray(this.selected)?this.selected.length?this.selected[0]:void 0:this.selected}_skipPredicate(e){return!1}static \u0275fac=(()=>{let e;return function(t){return(e||(e=De(n)))(t||n)}})();static \u0275cmp=k({type:n,selectors:[["mat-chip-listbox"]],contentQueries:function(i,t,o){if(i&1&&ie(o,xt,5),i&2){let c;b(c=y())&&(t._chips=c)}},hostAttrs:[1,"mdc-evolution-chip-set","mat-mdc-chip-listbox"],hostVars:10,hostBindings:function(i,t){i&1&&_("focus",function(){return t.focus()})("blur",function(){return t._blur()})("keydown",function(c){return t._keydown(c)}),i&2&&(te("tabIndex",t.disabled||t.empty?-1:t.tabIndex),C("role",t.role)("aria-required",t.role?t.required:null)("aria-disabled",t.disabled.toString())("aria-multiselectable",t.multiple)("aria-orientation",t.ariaOrientation),N("mat-mdc-chip-list-disabled",t.disabled)("mat-mdc-chip-list-required",t.required))},inputs:{multiple:[2,"multiple","multiple",g],ariaOrientation:[0,"aria-orientation","ariaOrientation"],selectable:[2,"selectable","selectable",g],compareWith:"compareWith",required:[2,"required","required",g],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",g],value:"value"},outputs:{change:"change"},features:[j([kn]),Ae],ngContentSelectors:xi,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,t){i&1&&(B(),Fe(0,"div",0),A(1),Re())},styles:[wn],encapsulation:2})}return n})();var xn=n=>[n],Nn=(n,d)=>d.id;function Mn(n,d){if(n&1&&(a(0,"mat-chip-option",7),s(1),r()),n&2){let e=d.$implicit;f("value",e),C("data-testid","list-filter-"+e),p(),P(e)}}function En(n,d){if(n&1){let e=Q();a(0,"li",25),_("mouseenter",function(){let t=h(e).$implicit,o=T(2);return u(o.active=t)})("focus",function(){let t=h(e).$implicit,o=T(2);return u(o.active=t)}),a(1,"span",26),s(2),r(),a(3,"span",27)(4,"strong"),s(5),r(),a(6,"small"),s(7),r()(),a(8,"span",28),s(9),r(),a(10,"span",29),s(11),r(),a(12,"span",30),s(13),r()()}if(n&2){let e=d.$implicit,i=T(2),t=v(40);f("mdePopoverTriggerFor",t),C("data-testid","list-item-"+e.id),p(),ot("background",e.color),p(),P(e.name.charAt(0)),p(3),P(e.name),p(2),P(e.category),p(),C("aria-label",e.rating+" out of 5"),p(),P(i.stars(e.rating)),p(2),P("$"+e.price.toFixed(2)),p(),N("out",e.stock===0),p(),G(" ",e.stock===0?"Out of stock":e.stock+" in stock"," ")}}function In(n,d){n&1&&(a(0,"li",24),s(1,"No products in this category."),r())}function Tn(n,d){if(n&1&&(a(0,"ul",20),$(1,En,14,13,"li",23,Nn,!1,In,2,0,"li",24),r()),n&2){let e=T();p(),ee(e.visible)}}function Pn(n,d){if(n&1&&(a(0,"mat-card",22)(1,"mat-card-content")(2,"div",31)(3,"span",26),s(4),r(),a(5,"div")(6,"strong",32),s(7),r(),a(8,"small"),s(9),r()()(),a(10,"p"),s(11),r(),a(12,"dl")(13,"dt"),s(14,"Price"),r(),a(15,"dd",33),s(16),r(),a(17,"dt"),s(18,"Rating"),r(),a(19,"dd"),s(20),r(),a(21,"dt"),s(22,"Stock"),r(),a(23,"dd"),s(24),r()()()()),n&2){let e=T();p(3),ot("background",e.active.color),p(),P(e.active.name.charAt(0)),p(3),P(e.active.name),p(2),Be("",e.active.category," \xB7 ",e.active.sku),p(2),P(e.active.blurb),p(5),P("$"+e.active.price.toFixed(2)),p(4),G("",e.active.rating.toFixed(1)," / 5"),p(4),P(e.active.stock===0?"Out of stock":e.active.stock)}}var On=["Audio","Wearables","Home","Office"],Dn=[["Aurora Headphones","Audio","Over-ear, 40 h battery, active noise cancelling."],["Pulse Earbuds","Audio","Sweat-proof buds with a pocket-sized charging case."],["Echo Bookshelf Speaker","Audio","Warm wooden cabinet with Bluetooth and line-in."],["Nova Soundbar","Audio","Slim 3.1 soundbar with a wireless subwoofer."],["Drift Turntable","Audio","Belt-drive turntable with a built-in preamp."],["Orbit Smartwatch","Wearables","Always-on display, GPS and a 7-day battery."],["Stride Fitness Band","Wearables","Heart rate, sleep and step tracking."],["Halo Smart Ring","Wearables","Titanium ring that tracks recovery and sleep."],["Trail Sports Watch","Wearables","Barometer, compass and offline maps."],["Lumen Desk Lamp","Home","Dimmable LED lamp with a warm-to-cool range."],["Breeze Air Purifier","Home","HEPA filter for rooms up to 40 m\xB2."],["Kettle Pro","Home","Variable temperature kettle with keep-warm."],["Nest Thermostat Mini","Home","Learns your schedule and saves energy."],["Brew Coffee Grinder","Home","Conical burr grinder with 40 settings."],["Glow Night Light","Home","Motion-activated light for hallways."],["Atlas Standing Desk","Office","Dual-motor desk with four memory presets."],["Flow Ergonomic Chair","Office","Mesh back, adjustable lumbar support."],["Key Mechanical Keyboard","Office","Hot-swappable switches, aluminium case."],["Glide Wireless Mouse","Office","Silent clicks and a 70-day battery."],["Dock USB-C Hub","Office","Nine ports with 100 W pass-through charging."]],Ii=["#5c6bc0","#26a69a","#ef6c00","#8e24aa","#00897b","#c2185b","#3949ab","#6d4c41"],Ti=Dn.map(([n,d,e],i)=>({id:i+1,name:n,category:d,blurb:e,price:Math.round((19+i*37%280)*100-1)/100,rating:3+i*7%20/10,stock:i*13%4===0?0:3+i*11%40,sku:`MDE-${String(1e3+i*17)}`,color:Ii[i%Ii.length]})),Pi=(()=>{class n{constructor(){this.categories=On,this.enterDelay=150,this.leaveDelay=100,this.products=[...Ti],this.category="All",this.positionY="below",this.gap=8,this.active=null}get visible(){return this.category==="All"?this.products:this.products.filter(e=>e.category===this.category)}get offsetY(){let e=Number(this.gap)||0;return this.positionY==="above"?-e:e}get layoutKey(){return`${this.positionY}:${this.offsetY}`}setCategory(e){this.category=e??"All"}shuffle(){let e=[...this.products];e.push(...e.splice(0,7));for(let i=0;i+1<e.length;i+=3)[e[i],e[i+1]]=[e[i+1],e[i]];this.products=e}reset(){this.products=[...Ti],this.category="All",this.positionY="below",this.gap=8}stars(e){let i=Math.round(e);return"\u2605".repeat(i)+"\u2606".repeat(5-i)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=k({type:n,selectors:[["app-page-examples-list"]],decls:42,vars:16,consts:[["details","mdePopover"],[1,"list-page"],[1,"list-header"],["data-testid","list-heading"],["appearance","outlined",1,"toolbar"],["aria-label","Category","data-testid","list-filter",3,"ngModelChange","ngModel"],["value","All","data-testid","list-filter-All"],[3,"value"],[1,"toolbar-row"],["aria-label","Popover side","hideSingleSelectionIndicator","","data-testid","list-position",3,"ngModelChange","ngModel"],["value","below","data-testid","list-position-below"],["value","above","data-testid","list-position-above"],["subscriptSizing","dynamic",1,"gap-field"],["matInput","","type","number","min","0","max","48","data-testid","list-gap",3,"ngModelChange","ngModel"],["matTextSuffix",""],["data-testid","list-binding",1,"binding"],[1,"spacer"],["mat-stroked-button","","data-testid","list-shuffle",3,"click"],["mat-button","","data-testid","list-reset",3,"click"],["data-testid","list-count",1,"count"],["role","list",1,"rows"],["mdePopoverTriggerOn","hover","mdePopoverPositionX","center","mdePopoverArrowColor","rgba(0, 0, 0, 0.12)",3,"mdePopoverPositionY","mdePopoverOffsetY","mdePopoverOverlapTrigger","mdePopoverEnterDelay","mdePopoverLeaveDelay","mdeFocusTrapEnabled"],["appearance","outlined","data-testid","list-popover-content",1,"details"],["role","listitem","tabindex","0",1,"row",3,"mdePopoverTriggerFor"],[1,"empty"],["role","listitem","tabindex","0",1,"row",3,"mouseenter","focus","mdePopoverTriggerFor"],["aria-hidden","true",1,"avatar"],[1,"name"],[1,"rating"],[1,"price"],[1,"stock"],[1,"details-head"],["data-testid","list-popover-name"],["data-testid","list-popover-price"]],template:function(i,t){if(i&1){let o=Q();a(0,"div",1)(1,"header",2)(2,"h2",3),s(3,"Product list"),r(),a(4,"p"),s(5," Hover a row to see its details. Every row uses the same "),a(6,"code"),s(7,"mde-popover"),r(),s(8,"; filtering, shuffling, or changing the position re-creates the row triggers. "),r()(),a(9,"mat-card",4)(10,"mat-card-content")(11,"mat-chip-listbox",5),S(),_("ngModelChange",function(l){return t.setCategory(l)}),a(12,"mat-chip-option",6),s(13,"All"),r(),$(14,Mn,2,3,"mat-chip-option",7,se),r(),a(16,"div",8)(17,"mat-button-toggle-group",9),S(),I("ngModelChange",function(l){return h(o),E(t.positionY,l)||(t.positionY=l),u(l)}),a(18,"mat-button-toggle",10),s(19,"Below"),r(),a(20,"mat-button-toggle",11),s(21,"Above"),r()(),a(22,"mat-form-field",12)(23,"mat-label"),s(24,"Gap"),r(),a(25,"input",13),S(),I("ngModelChange",function(l){return h(o),E(t.gap,l)||(t.gap=l),u(l)}),r(),a(26,"span",14),s(27,"px"),r()(),a(28,"code",15),s(29),r(),x(30,"span",16),a(31,"button",17),_("click",function(){return t.shuffle()}),s(32,"Shuffle"),r(),a(33,"button",18),_("click",function(){return t.reset()}),s(34,"Reset"),r()()()(),a(35,"p",19),s(36),r(),$(37,Tn,4,1,"ul",20,se),r(),a(39,"mde-popover",21,0),O(41,Pn,25,10,"mat-card",22),r()}i&2&&(p(11),f("ngModel",t.category),w(),p(3),ee(t.categories),p(3),M("ngModel",t.positionY),w(),p(8),M("ngModel",t.gap),w(),p(4),Be(' mdePopoverPositionY="',t.positionY,'" [mdePopoverOffsetY]="',t.offsetY,'" '),p(7),Be("",t.visible.length," of ",t.products.length," products"),p(),ee(Ve(14,xn,t.layoutKey)),p(2),f("mdePopoverPositionY",t.positionY)("mdePopoverOffsetY",t.offsetY)("mdePopoverOverlapTrigger",!1)("mdePopoverEnterDelay",t.enterDelay)("mdePopoverLeaveDelay",t.leaveDelay)("mdeFocusTrapEnabled",!1),p(2),D(t.active?41:-1))},dependencies:[ke,Ye,Xe,Qe,qe,Zt,Ke,ye,be,re,ze,Ie,Te,We,Ge,Nt,xt,we,He,je,xe],styles:["[_nghost-%COMP%]{display:block;padding:24px}.list-page[_ngcontent-%COMP%]{max-width:880px;margin:0 auto}.list-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 4px}.list-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 16px;opacity:.75}code[_ngcontent-%COMP%]{font-family:Roboto Mono,ui-monospace,monospace;font-size:12px}.toolbar[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.toolbar-row[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:12px}.gap-field[_ngcontent-%COMP%]{width:110px}.binding[_ngcontent-%COMP%]{opacity:.65}.spacer[_ngcontent-%COMP%]{flex:1}.count[_ngcontent-%COMP%]{margin:16px 0 8px;font-size:13px;opacity:.65}.rows[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}.row[_ngcontent-%COMP%]{display:grid;grid-template-columns:40px minmax(0,1fr) 96px 80px 110px;align-items:center;gap:12px;padding:10px 14px;border:1px solid rgba(127,127,127,.25);border-radius:10px;background:#7f7f7f0a;cursor:default;transition:background-color .15s,border-color .15s,box-shadow .15s}.row[_ngcontent-%COMP%]:hover, .row[_ngcontent-%COMP%]:focus-visible, .row[aria-expanded=true][_ngcontent-%COMP%]{background:#7f7f7f1a;border-color:#7f7f7f73;box-shadow:0 1px 4px #00000014;outline:none}.avatar[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;color:#fff;font-weight:500}.name[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:0}.name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{opacity:.6}.rating[_ngcontent-%COMP%]{color:#f9a825;letter-spacing:1px}.price[_ngcontent-%COMP%]{font-variant-numeric:tabular-nums;text-align:right;font-weight:500}.stock[_ngcontent-%COMP%]{font-size:12px;text-align:right;color:#2e7d32}.stock.out[_ngcontent-%COMP%]{color:#c62828}.empty[_ngcontent-%COMP%]{padding:24px;text-align:center;opacity:.6}.details[_ngcontent-%COMP%]{width:280px;max-width:calc(100vw - 32px)}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:8px 0;font-size:13px}.details[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr;gap:2px 12px;margin:0;font-size:13px}.details[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{opacity:.6}.details[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:0}.details-head[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.details-head[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column}.details-head[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{opacity:.6;font-size:12px}@media(max-width:640px){[_nghost-%COMP%]{padding:12px}.row[_ngcontent-%COMP%]{grid-template-columns:36px minmax(0,1fr) 72px}.rating[_ngcontent-%COMP%], .stock[_ngcontent-%COMP%], .binding[_ngcontent-%COMP%]{display:none}}"],changeDetection:1})}}return n})();var fr=[{path:"",component:mt,data:{meta:{title:"Examples",description:"",themeColor:"#FFFFFF"}},children:[{path:"",component:mt},{path:"form",component:ri},{path:"builder",component:vi},{path:"list",component:Pi},{path:"**",component:pt}]},{path:"**",component:pt}];export{fr as ExamplesRoutes};
