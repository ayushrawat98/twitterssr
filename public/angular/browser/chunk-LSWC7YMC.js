import{a as D}from"./chunk-G5KA7DMQ.js";import{a as k,b as m,c as S,d as b,e as y,f as l,h as _,i as F,k as N}from"./chunk-67WAUC34.js";import{B as i,C as r,Ea as h,I as n,Ia as C,Ja as w,N as a,O as c,P as d,R as f,X as s,Z as g,ca as v,o as u}from"./chunk-PP3VRMAE.js";var j=class p{constructor(e,o){this._authservice=e;this.route=o}message;loginform=new y({username:new l("",[m.required]),password:new l("",[m.required])});production=C.production;login(){this._authservice.login(this.loginform.value).subscribe({next:e=>{this.message="",this._authservice.userdata.set(D(e.token)),localStorage.setItem("token",e.token),this.production?document.cookie=`jwt=${e.token}; path=/;Secure;`:document.cookie=`jwt=${e.token}; path=/;`,this.route.navigateByUrl("/main")},error:e=>{this.message=e.error.message}})}static \u0275fac=function(o){return new(o||p)(r(w),r(h))};static \u0275cmp=u({type:p,selectors:[["app-login"]],standalone:!0,features:[v],decls:6,vars:3,consts:[[1,"login",3,"formGroup"],["type","text","placeholder","@username","formControlName","username",1,"input-with-at"],["type","password","placeholder","password","formControlName","password"],[3,"click","disabled"]],template:function(o,t){o&1&&(a(0,"div",0),d(1,"input",1)(2,"input",2),a(3,"button",3),f("click",function(){return t.login()}),s(4,"Login"),c()(),s(5)),o&2&&(n("formGroup",t.loginform),i(3),n("disabled",t.loginform.invalid),i(2),g(" ",t.message,""))},dependencies:[N,k,S,b,_,F]})};export{j as LoginComponent};
