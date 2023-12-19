import{a as R}from"./chunk-T3MBQJ4F.js";import{b as B,f as j}from"./chunk-PZW6CMPM.js";import{b as A}from"./chunk-TKZEV6Y5.js";import{a as H,c as q}from"./chunk-OXEZHYRO.js";import{a as k,b as c,c as L,d as D,e as P,f as M,g as O,h as $,i as G}from"./chunk-72AFM3JC.js";import{Aa as t,Ba as o,Ca as f,Ga as b,Ia as g,Ma as s,Mb as T,Qa as S,Ra as v,Sa as _,Ta as E,U as h,gb as y,hb as I,ib as C,kb as w,la as n,ma as u,u as F,ua as l,wb as N,ya as p,yb as x}from"./chunk-RVRWXEWA.js";function U(i,r){i&1&&(t(0,"div"),s(1,"Please enter an email."),o())}function J(i,r){i&1&&(t(0,"div"),s(1,"The email is invalid."),o())}function K(i,r){if(i&1&&(t(0,"div",11),p(1,U,2,0,"div",12)(2,J,2,0,"div",12),o()),i&2){let a=g();n(1),l("ngIf",a.isFieldHasError(a.loginForm,"email","required")),n(1),l("ngIf",a.isFieldHasError(a.loginForm,"email","email"))}}function Q(i,r){i&1&&(t(0,"div"),s(1,"Please enter a password."),o())}function W(i,r){i&1&&(t(0,"div"),s(1,"Enter another email or password."),o())}function X(i,r){if(i&1&&(t(0,"div",11),p(1,Q,2,0,"div",12)(2,W,2,0,"div",12),o()),i&2){let a=g();n(1),l("ngIf",a.isFieldHasError(a.loginForm,"password","required")),n(1),l("ngIf",a.loginForm.hasError("notFound"))}}var V=i=>({"border-color":i}),ui=(()=>{let r=class r{constructor(m,d,e){this.fb=m,this.checkFieldSrv=d,this.store=e,this.isFieldInvalid=this.checkFieldSrv.isFieldInvalid,this.isFieldHasError=this.checkFieldSrv.isFieldHasError}ngOnInit(){this.initializeForm(),this.isSubmitInProgress$=this.store.select(H),this.subscribeErrors()}initializeForm(){this.loginForm=this.fb.group({email:["",[c.required,c.email]],password:["",[c.required]]}),this.loginFormSubscription$=this.loginForm.valueChanges.subscribe(()=>{this.loginForm.hasError("notFound")&&this.loginForm.setErrors(null)})}subscribeErrors(){this.errorSubscription$=this.store.select(q).pipe(F(m=>m.errorType===R.LOGIN_NOT_FOUND)).subscribe(()=>{this.loginForm.setErrors({notFound:!0})})}onSubmit(m){m.preventDefault(),this.loginForm.invalid||(this.store.dispatch(j(this.loginForm.value)),this.store.dispatch(B()))}ngOnDestroy(){this.errorSubscription$.unsubscribe(),this.loginFormSubscription$.unsubscribe()}};r.\u0275fac=function(d){return new(d||r)(u($),u(A),u(T))},r.\u0275cmp=h({type:r,selectors:[["app-login"]],standalone:!0,features:[S],decls:18,vars:12,consts:[[1,"wrapper"],[1,"login-form-container","form-container"],[1,"registartin-form","form",3,"formGroup","submit"],[1,"regitration-form-legend","form-legend"],["for","email",1,"login-form-email-label","form-label"],["formControlName","email","id","email","name","email","type","text",1,"login-form-email","form-input",3,"ngStyle"],["class","invalid-feedback",4,"ngIf"],["for","password",1,"login-form-password-label","form-label"],["formControlName","password","id","password","name","password","type","password",1,"login-form-password","form-input",3,"ngStyle"],["routerLink","/signout",1,"form-link"],["type","submit",1,"green-button","shadow-button","form-btn",3,"disabled"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(d,e){d&1&&(t(0,"div",0)(1,"div",1)(2,"form",2),b("submit",function(z){return e.onSubmit(z)}),t(3,"legend",3),s(4,"Sign In"),o(),t(5,"label",4),s(6,"Email"),o(),f(7,"input",5),p(8,K,3,2,"div",6),t(9,"label",7),s(10,"Password"),o(),f(11,"input",8),p(12,X,3,2,"div",6),t(13,"a",9),s(14,"Sign out"),o(),t(15,"button",10),_(16,"async"),s(17,"Sign In"),o()()()()),d&2&&(n(2),l("formGroup",e.loginForm),n(5),l("ngStyle",v(8,V,e.isFieldInvalid(e.loginForm,"email")||e.loginForm.hasError("notFound")?"red":"")),n(1),l("ngIf",e.isFieldInvalid(e.loginForm,"email")),n(3),l("ngStyle",v(10,V,e.isFieldInvalid(e.loginForm,"password")||e.loginForm.hasError("notFound")?"red":"")),n(1),l("ngIf",e.isFieldInvalid(e.loginForm,"password")||e.loginForm.hasError("notFound")),n(3),l("disabled",e.loginForm.invalid||E(16,6,e.isSubmitInProgress$)))},dependencies:[w,y,I,C,x,N,G,P,k,L,D,M,O],styles:[".login-form-container[_ngcontent-%COMP%]{width:344px;min-height:248px;position:relative}"]});let i=r;return i})();export{ui as LoginComponent};