import{A as D,Aa as Y,B as r,C as g,Fa as Z,G as f,I as c,Ia as I,Ja as q,K as _,L as F,M as L,N as l,O as s,P as d,Q as x,R as b,S as a,X as p,Y as v,Z as k,a as P,c as O,ca as U,fa as M,ha as j,j as E,ja as A,m as z,o as w,oa as N,qa as $,s as m,sa as R,t as u,ua as B,w as y,wa as H,x as h,z as S}from"./chunk-PP3VRMAE.js";var T=class i{constructor(e){this.http=e}postSuccessSubject=new O;baseUrl=I.baseUrl;getAllPosts(e,t){return this.http.get(this.baseUrl+"/api/post?page="+t,{withCredentials:!0})}getAllUserPosts(e,t){return this.http.get(`${this.baseUrl}/api/post/${e}/posts`,{withCredentials:!0})}getPostById(e,t,n){return this.http.get(`${this.baseUrl}/api/post/${t}`,{withCredentials:!0})}addNewPost(e){let t=new FormData;return t.append("content",e.content),t.append("parentpostid",e.parentpostid?.toString()??""),e.file&&t.append("file",e.file),this.http.post(this.baseUrl+"/api/post",t,{withCredentials:!0})}likePost(e,t,n){return this.http.post(this.baseUrl+"/api/post/like",{userid:e,postid:t,receiverid:n},{withCredentials:!0})}Repost(e,t,n){return this.http.post(this.baseUrl+"/api/post/repost",{userid:e,postid:t,receiverid:n},{withCredentials:!0})}Bookmark(e,t,n){return this.http.post(this.baseUrl+"/api/post/bookmark",{userid:e,postid:t,receiverid:n},{withCredentials:!0})}static \u0275fac=function(t){return new(t||i)(z(H))};static \u0275prov=E({token:i,factory:i.\u0275fac,providedIn:"root"})};var W=(i,e)=>({"bi-heart-fill red":i,"bi-heart":e}),X=(i,e)=>({green:i,"":e}),tt=(i,e)=>({"bi-bookmark-fill blue":i,"bi-bookmark":e});function et(i,e){if(i&1){let t=x();l(0,"button",7),b("click",function(o){m(t);let C=a(3);return C.showIframe=!0,u(o.stopPropagation())}),p(1,"Embed Video"),s()}}function it(i,e){if(i&1&&d(0,"iframe",11),i&2){let t=a(3);c("src",t.youtubeUrl(),D)}}function nt(i,e){if(i&1&&f(0,et,2,0,"button")(1,it,1,1,"iframe",11),i&2){let t=a(2);_(t.showIframe?1:0)}}function ot(i,e){if(i&1&&d(0,"video",12),i&2){let t=a(3);c("src",t.baseUrl+"/"+t.post().media,S)}}function rt(i,e){if(i&1&&d(0,"img",13),i&2){let t=a(3);c("src",t.baseUrl+"/"+t.post().media,S)}}function st(i,e){if(i&1&&f(0,ot,1,1,"video",12)(1,rt,1,1,"img",13),i&2){let t=a(2);_(t.post().mediatype=="video/mp4"||t.post().mediatype=="video/webm"?0:1)}}function at(i,e){if(i&1){let t=x();l(0,"article")(1,"aside"),d(2,"img",0),s(),l(3,"div",1)(4,"header")(5,"span",2),p(6),s(),p(7," \xA0 "),l(8,"span",3),p(9),s(),p(10," \xA0 "),l(11,"span",4),p(12),j(13,"date"),s()(),l(14,"section",2)(15,"p"),p(16),s(),f(17,nt,2,1)(18,st,2,1),s(),l(19,"footer",5)(20,"div",2),d(21,"i",6),p(22),s(),l(23,"div",7),b("click",function(){m(t);let o=a();return u(o.likeClicked.emit(o.post().id))}),d(24,"i",8),p(25),s(),l(26,"div",7),b("click",function(){m(t);let o=a();return u(o.repostClicked.emit(o.post().id))}),d(27,"i",9),p(28),s(),l(29,"div"),d(30,"i",10),p(31),s(),l(32,"div",7),b("click",function(){m(t);let o=a();return u(o.bookmarkClicked.emit(o.post().id))}),d(33,"i",8),p(34),s()()()()}if(i&2){let t=a();r(2),c("src",t.post().User.profilepicture?t.baseUrl+"/"+t.post().User.profilepicture:"default.png",S)("routerLink","/"+t.post().User.username),r(3),c("routerLink","/"+t.post().User.username),r(),v(t.post().User.displayname),r(2),c("routerLink","/"+t.post().User.username),r(),v("@"+t.post().User.username),r(3),v(A(13,20,t.post().createdAt,"d/M/YY, h:mm a")),r(2),c("routerLink","/"+t.post().User.username+"/post/"+t.post().id),r(2),v(t.post().content),r(),_(t.youtubeUrl()?17:-1),r(),_(t.post().media?18:-1),r(2),c("routerLink","/"+t.post().User.username+"/post/"+t.post().id),r(2),k(" ",t.post().commentcount," "),r(2),c("ngClass",M(23,W,t.post().liked,!t.post().liked)),r(),k(" ",t.post().likecount," "),r(2),c("ngClass",M(26,X,t.post().reposted,!t.post().reposted)),r(),k(" ",t.post().repostcount," "),r(3),k(" ",t.post().views," "),r(2),c("ngClass",M(29,tt,t.post().bookmarked,!t.post().bookmarked)),r(),k(" ",t.post().bookmarkcount," ")}}var V=class i{constructor(e){this.sanitizer=e}post=h.required();youtubeUrl=N(()=>{if(this.post()){let e=/(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:watch|embed)(?:(?:(?=\/[-a-zA-Z0-9_]{11,}(?!\S))\/)|(?:\S*v=|v\/)))([-a-zA-Z0-9_]{11,})/,t=this.post().content.match(e);return t&&t[1]?this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${t[1]}`):""}return""});baseUrl=I.baseUrl;showIframe=!1;likeClicked=y();repostClicked=y();bookmarkClicked=y();static \u0275fac=function(t){return new(t||i)(g(Y))};static \u0275cmp=w({type:i,selectors:[["app-post"]],inputs:{post:[1,"post"]},outputs:{likeClicked:"likeClicked",repostClicked:"repostClicked",bookmarkClicked:"bookmarkClicked"},standalone:!0,features:[U],decls:1,vars:1,consts:[["alt","profile pic thumbnail",1,"profile-thumbnail",3,"src","routerLink"],[1,"post"],[3,"routerLink"],[1,"username",3,"routerLink"],[1,"date"],[1,"action"],[1,"bi","bi-chat","pointer"],[3,"click"],[1,"bi","pointer",3,"ngClass"],[1,"bi","bi-repeat","pointer",3,"ngClass"],[1,"bi","bi-bar-chart"],["frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","loading","lazy","allowfullscreen","",2,"width","98%","height","280px",3,"src"],["preload","none","controls","",3,"src"],["loading","lazy",3,"src"]],template:function(t,n){t&1&&f(0,at,35,32,"article"),t&2&&_(n.post()?0:-1)},dependencies:[Z,B,R],styles:["article[_ngcontent-%COMP%]{border:1px solid rgb(46,64,82);border-radius:2px;padding:8px;margin:8px 0;display:flex;gap:8px}.post[_ngcontent-%COMP%]{flex:1;min-width:0}span[_ngcontent-%COMP%]{font-weight:800}span.date[_ngcontent-%COMP%]{font-weight:100;font-size:12px}span.username[_ngcontent-%COMP%]{font-weight:100}p[_ngcontent-%COMP%]{color:#fff;word-wrap:break-word;white-space:pre-wrap}.action[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:24px 0 0;font-style:normal}.action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-style:normal;font-weight:100!important;margin-right:4px}section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{display:block;max-width:100%;margin:auto}.greenn[_ngcontent-%COMP%]{fill:green}.profile-thumbnail[_ngcontent-%COMP%]{height:40px;width:40px;border-radius:50%;object-fit:cover}"],changeDetection:0})};var lt=(i,e)=>e.id;function pt(i,e){i&1&&(l(0,"div",1)(1,"div"),p(2,"|"),s()())}function ct(i,e){if(i&1){let t=x();l(0,"app-post",0),b("likeClicked",function(o){m(t);let C=a();return u(C.likeClicked(o))})("repostClicked",function(o){m(t);let C=a();return u(C.repostClicked(o))})("bookmarkClicked",function(o){m(t);let C=a();return u(C.bookmarkClicked(o))}),s(),f(1,pt,3,0,"div",1)}if(i&2){let t=e.$implicit,n=a();c("post",t),r(),_(n.showSeperator()?1:-1)}}var J=class i{constructor(e,t){this._authService=e;this._postService=t;$(()=>{this.listMutable=this.list()})}list=h([]);listMutable;showSeperator=h();likeClicked(e){if(!this._authService.userdata()){alert("Login to continue");return}let t=this.listMutable.filter(n=>n.id==e)[0];this._postService.likePost(this._authService.userdata()?.id,t.id,t.UserId).subscribe({next:n=>{t.liked=!t.liked,t.liked?t.likecount++:t.likecount--,this.listMutable=this.listMutable.map(o=>o.id==t.id?P({},t):o)}})}repostClicked(e){if(!this._authService.userdata()){alert("Login to continue");return}let t=this.listMutable.filter(n=>n.id==e)[0];this._postService.Repost(this._authService.userdata()?.id,t.id,t.UserId).subscribe({next:n=>{t.reposted=!t.reposted,t.reposted?t.repostcount++:t.repostcount--,this.listMutable=this.listMutable.map(o=>o.id==t.id?P({},t):o)}})}bookmarkClicked(e){if(!this._authService.userdata()){alert("Login to continue");return}let t=this.listMutable.filter(n=>n.id==e)[0];this._postService.Bookmark(this._authService.userdata()?.id,t.id,t.UserId).subscribe({next:n=>{t.bookmarked=!t.bookmarked,t.bookmarked?t.bookmarkcount++:t.bookmarkcount--,this.listMutable=this.listMutable.map(o=>o.id==t.id?P({},t):o)}})}static \u0275fac=function(t){return new(t||i)(g(q),g(T))};static \u0275cmp=w({type:i,selectors:[["app-postlist"]],inputs:{list:[1,"list"],showSeperator:[1,"showSeperator"]},standalone:!0,features:[U],decls:2,vars:0,consts:[[3,"likeClicked","repostClicked","bookmarkClicked","post"],[1,"seperator"]],template:function(t,n){t&1&&F(0,ct,2,2,null,null,lt),t&2&&L(n.listMutable)},dependencies:[V],styles:[".seperator[_ngcontent-%COMP%]{display:flex;justify-content:center}"]})};export{T as a,J as b};
