(this["webpackJsonp01-project"]=this["webpackJsonp01-project"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return d}));var r=n(3),c=n(56),a=(n(1),n(36)),s=n.n(a),o=(n(29),n(91)),i=n(0),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,c=e.children,a=n&&r;return Object(i.jsx)("div",{className:s.a.formControl+" "+(a?s.a.error:""),children:Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:c}),a&&Object(i.jsx)("span",{children:r})]})})},l=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,["input","meta"]));return Object(i.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,["input","meta"]));return Object(i.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e,t,n,c){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(i.jsxs)("div",{children:[Object(i.jsx)(o.a,Object(r.a)({component:e,placeholder:t,name:n,validate:c},a))," ",s]})}},12:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i}));var r=n(132),c=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"b4dd1893-249e-4612-8ef6-622b06abf27f"}}),a={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return c.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return c.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return c.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Old method. Please use profileAPI object."),s.getProfile(e)}},s={getProfile:function(e){return c.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return c.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return c.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return c.put("profile",e).then((function(e){return e.data}))}},o={me:function(){return c.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logout:function(){return c.delete("auth/login").then((function(e){return e.data}))}},i={getCaptchaUrl:function(){return c.get("security/get-captcha-url").then((function(e){return e.data}))}}},127:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(26),c=n(3),a="SEND-MESSAGE",s={dialogs:[{id:1,name:"\u0418\u0432\u0430\u043d"},{id:2,name:"\u041c\u0430\u0440\u0438\u044f"},{id:3,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440"},{id:4,name:"\u0424\u0451\u0434\u043e\u0440"},{id:5,name:"\u041a\u0438\u0440\u0438\u043b\u043b"}],messages:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442!"},{id:2,message:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430?"},{id:3,message:"React + Redux"},{id:4,message:"Learn JS"},{id:5,message:"\u041f\u043e\u043a\u0430"}]},o=function(e){return{type:a,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:var n=t.newMessageBody;return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},134:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__3vVIP",selectedPage:"Users_selectedPage__11NTH"}},137:function(e,t,n){e.exports={content:"Post_content__1rU6d",item:"Post_item__Ckbuf"}},140:function(e,t,n){"use strict";var r=n(1),c=n.n(r),a=(n(299),n(3)),s=n(69),o=n(26),i=n(97),u=n.n(i),l=n(137),j=n.n(l),d=n(0),b=function(e){return Object(d.jsxs)("div",{className:j.a.item,children:[Object(d.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/149/149071.png",alt:""}),e.message,Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Like"})," ",e.likesCount]})]})},f=n(91),p=n(128),h=n(29),O=n(10),g=Object(h.a)(10),m=function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(f.a,{name:"newPostText",component:O.b,placeholder:"Post message",validate:[h.b,g]})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Add post"})})]})};m=Object(p.a)({form:"ProfileAddNewPostForm"})(m);var v=c.a.memo((function(e){var t=Object(o.a)(e.posts).reverse().map((function(e){return Object(d.jsx)(b,{message:e.message,likesCount:e.likesCount},e.id)}));return Object(d.jsxs)("div",{className:u.a.postsBlock,children:[e.isOwner?Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"My posts"}),Object(d.jsx)(m,{onSubmit:function(t){e.addPost(t.newPostText)}})]}):Object(d.jsx)("h3",{children:"Posts"}),Object(d.jsx)("div",{className:u.a.posts,children:t})]})})),x=n(15),P=Object(x.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(s.a)(t))}}}))((function(e){return Object(d.jsx)(v,Object(a.a)({},e))})),w=n(37),_=n(24),C=n.n(_),S=n(31),y=function(e){var t=Object(r.useState)(!1),n=Object(w.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(e.status),o=Object(w.a)(s,2),i=o[0],u=o[1];Object(r.useEffect)((function(){u(e.status)}),[e.status]);return Object(d.jsxs)("div",{children:[!c&&Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Status: "}),Object(d.jsx)("span",{onDoubleClick:function(){a(!0)},children:e.status||"No status"})]}),c&&Object(d.jsx)("div",{children:Object(d.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),e.updateUserStatus(i)},value:i})})]})},k=n(71),N=n(36),I=n.n(N),E=Object(p.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profile,r=e.error;return Object(d.jsxs)("form",{onSubmit:t,children:[Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Save"})}),r&&Object(d.jsx)("div",{className:I.a.formSummaryError,children:r}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Full name"}),": ",Object(O.c)(O.a,"full name","fullName",[])]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Looking for a job"}),": ",Object(O.c)(O.a,"","lookingForAJob",[],{type:"checkbox"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"My professional skills"}),": ",Object(O.c)(O.b,"My professional skills","lookingForAJobDescription",[])]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"About me"}),": ",Object(O.c)(O.b,"About me","aboutMe",[])]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Contacts"}),": ",Object.keys(n.contacts).map((function(e){return Object(d.jsxs)("div",{className:C.a.contact,children:[Object(d.jsxs)("b",{children:[e,":"]})," ",Object(O.c)(O.a,e,"contacts."+e,[])]},e)}))]})]})})),U=function(e){var t=e.contactTitle,n=e.contactValue;return Object(d.jsxs)("div",{className:C.a.contact,children:[Object(d.jsx)("b",{children:t}),": ",n]})},T=function(e){var t=e.profile,n=e.isOwner,r=e.activateEditMode;return Object(d.jsxs)("div",{children:[n&&Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:r,children:"Edit info"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Looking for a job"}),": ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"My professional skills"}),": ",t.lookingForAJobDescription]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"About me"}),": ",t.aboutMe]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Contacts"}),": ",Object.keys(t.contacts).map((function(e){return Object(d.jsx)(U,{contactTitle:e,contactValue:t.contacts[e]})}))]})]})},L=function(e){var t=e.profile,n=e.status,c=e.updateUserStatus,a=e.isOwner,s=e.savePhoto,o=e.saveProfile,i=Object(r.useState)(!1),u=Object(w.a)(i,2),l=u[0],j=u[1];if(!t)return Object(d.jsx)(S.a,{});return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:C.a.descriptionBlock,children:[Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:t.fullName})}),Object(d.jsxs)("div",{className:C.a.mainPhotoContainer,children:[Object(d.jsx)("img",{src:t.photos.large||k.a,className:C.a.mainPhoto}),a&&Object(d.jsxs)("label",{className:C.a.fileInput,children:[Object(d.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&s(e.target.files[0])}}),"Update photo"]})]}),Object(d.jsx)(y,{status:n,updateUserStatus:c}),l?Object(d.jsx)(E,{onSubmit:function(e){o(e).then((function(){j(!1)}))},initialValues:t,profile:t}):Object(d.jsx)(T,{profile:t,isOwner:a,activateEditMode:function(){j(!0)}})]})})};t.a=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(L,{profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),Object(d.jsx)(P,{store:e.store,isOwner:e.isOwner})]})}},16:function(e,t,n){e.exports={nav:"Navbar_nav__2ur61",item:"Navbar_item__1uoWl",activeLink:"Navbar_activeLink__3k9Tc"}},170:function(e,t,n){},171:function(e,t,n){},24:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__324tk",mainPhotoContainer:"ProfileInfo_mainPhotoContainer__2m0ZZ",mainPhoto:"ProfileInfo_mainPhoto__25C98",fileInput:"ProfileInfo_fileInput__2HBOS",contact:"ProfileInfo_contact__22Wgf"}},29:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){return e?void 0:"Required"},c=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},299:function(e,t,n){},300:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(67),s=n.n(a),o=(n(170),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,302)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))}),i=n(39),u=n(40),l=n(42),j=n(41),d=n(11),b=n(18),f=(n(171),n(16)),p=n.n(f),h=n(0),O=function(){return Object(h.jsxs)("nav",{className:p.a.nav,children:[Object(h.jsx)("div",{className:"".concat(p.a.item," ").concat(p.a.activeLink),children:Object(h.jsx)(b.b,{to:"/profile",activeClassName:p.a.activeLink,children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})}),Object(h.jsx)("div",{className:p.a.item,children:Object(h.jsx)(b.b,{to:"/dialogs",activeClassName:p.a.activeLink,children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})}),Object(h.jsx)("div",{className:p.a.item,children:Object(h.jsx)(b.b,{to:"/news",activeClassName:p.a.activeLink,children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"})}),Object(h.jsx)("div",{className:p.a.item,children:Object(h.jsx)(b.b,{to:"/music",activeClassName:p.a.activeLink,children:"\u041c\u0443\u0437\u044b\u043a\u0430"})}),Object(h.jsx)("div",{className:p.a.item,children:Object(h.jsx)(b.b,{to:"/users",activeClassName:p.a.activeLink,children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})}),Object(h.jsx)("div",{className:p.a.item,children:Object(h.jsx)(b.b,{to:"/settings",activeClassName:p.a.activeLink,children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})})]})},g=n(15),m=n(8),v=n.n(m),x=n(14),P=n(26),w=n(3),_=n(12),C=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(w.a)(Object(w.a)({},e),r):e}))},S="FOLLOW",y="UNFOLLOW",k="SET_USERS",N="SET_CURRENT_PAGE",I="SET_TOTAL_USERS_COUNT",E="TOGGLE_IS_FETCHING",U="TOGGLE_IS_FOLLOWING_PROGRESS",T={users:[],pageSize:50,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},L=function(e){return{type:S,userId:e}},A=function(e){return{type:y,userId:e}},F=function(e){return{type:N,currentPage:e}},M=function(e){return{type:E,isFetching:e}},z=function(e,t){return{type:U,isFetching:e,userId:t}},R=function(){var e=Object(x.a)(v.a.mark((function e(t,n,r,c){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(z(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(c(n)),t(z(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(w.a)(Object(w.a)({},e),{},{users:C(e.users,t.userId,"id",{followed:!0})});case y:return Object(w.a)(Object(w.a)({},e),{},{users:C(e.users,t.userId,"id",{followed:!1})});case k:return Object(w.a)(Object(w.a)({},e),{},{users:Object(P.a)(t.users)});case N:return Object(w.a)(Object(w.a)({},e),{},{currentPage:t.currentPage});case I:return Object(w.a)(Object(w.a)({},e),{},{totalUsersCount:t.count});case E:return Object(w.a)(Object(w.a)({},e),{},{isFetching:t.isFetching});case U:return Object(w.a)(Object(w.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(P.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},D=n(56),G=n(43),V=n(37),H=n(73),J=n.n(H),W=n(133),X=n.n(W),Z=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,a=e.onPageChanged,s=e.portionSize,o=void 0===s?10:s,i=Math.ceil(t/n),u=[],l=1;l<=i;l++)u.push(l);var j=Math.ceil(i/o),d=Object(r.useState)(1),b=Object(V.a)(d,2),f=b[0],p=b[1],O=(f-1)*o+1,g=f*o;return Object(h.jsxs)("div",{className:J.a.paginator,children:[f>1&&Object(h.jsx)("button",{onClick:function(){p(f-1)},children:"PREV"}),u.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(h.jsx)("span",{className:X()(Object(G.a)({},J.a.selectedPage,c===e),J.a.pageNumber),onClick:function(t){a(e)},children:e},e)})),j>f&&Object(h.jsx)("button",{onClick:function(){p(f+1)},children:"NEXT"})]})},K=n(134),q=n.n(K),Q=n(71),Y=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,c=e.unfollow;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{children:Object(h.jsx)(b.b,{to:"/profile/"+t.id,children:Object(h.jsx)("img",{src:null!=t.photos.small?t.photos.small:Q.a,className:q.a.userPhoto,alt:"{}"})})}),Object(h.jsx)("div",{children:t.followed?Object(h.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Unfollow"}):Object(h.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Follow"})})]}),Object(h.jsxs)("span",{children:[Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{children:t.name}),Object(h.jsx)("div",{children:t.status})]}),Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{children:"user.location.country"}),Object(h.jsx)("div",{children:"user.location.city"})]})]})]})},$=function(e){var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,c=e.onPageChanged,a=e.users,s=Object(D.a)(e,["totalUsersCount","pageSize","currentPage","onPageChanged","users"]);return Object(h.jsxs)("div",{children:[Object(h.jsx)(Z,{totalItemsCount:t,pageSize:n,currentPage:r,onPageChanged:c}),Object(h.jsx)("div",{children:a.map((function(e){return Object(h.jsx)(Y,{user:e,followingInProgress:s.followingInProgress,follow:s.follow,unfollow:s.unfollow},e.id)}))})]})},ee=n(31),te=n(9),ne=n(139),re=Object(ne.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ce=function(e){return e.usersPage.pageSize},ae=function(e){return e.usersPage.totalUsersCount},se=function(e){return e.usersPage.currentPage},oe=function(e){return e.usersPage.isFetching},ie=function(e){return e.usersPage.followingInProgress},ue=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[this.props.isFetching?Object(h.jsx)(ee.a,{}):null,Object(h.jsx)($,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(c.a.Component),le=Object(te.d)(Object(g.b)((function(e){return{users:re(e),pageSize:ce(e),totalUsersCount:ae(e),currentPage:se(e),isFetching:oe(e),followingInProgress:ie(e)}}),{follow:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:R(n,e,_.d.follow.bind(_.d),L);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:R(n,e,_.d.unfollow.bind(_.d),A);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:F,toggleFollowingProgress:z,getUsers:function(e,t){return function(){var n=Object(x.a)(v.a.mark((function n(r){var c;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(M(!0)),r(F(e)),n.next=4,_.d.getUsers(e,t);case 4:c=n.sent,r(M(!1)),r((s=c.items,{type:k,users:s})),r((a=c.totalCount,{type:I,count:a}));case 8:case"end":return n.stop()}var a,s}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ue),je=n(94),de=n.n(je),be=function(e){return Object(h.jsxs)("header",{className:de.a.header,children:[Object(h.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/1239/1239608.png",alt:""}),Object(h.jsx)("div",{className:de.a.loginBlock,children:e.isAuth?Object(h.jsxs)("div",{children:[e.login," - ",Object(h.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(h.jsx)(b.b,{to:"/login",children:"Login"})})]})},fe=n(25),pe="social-network/auth/SET_USER_DATA",he="social-network/auth/GET_CAPTCHA_URL_SUCCESS",Oe={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},ge=function(e,t,n,r){return{type:pe,payload:{userId:e,email:t,login:n,isAuth:r}}},me=function(e){return{type:he,payload:{captchaUrl:e}}},ve=function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){var n,r,c,a,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.me();case 2:0===(n=e.sent).resultCode&&(r=n.data,c=r.id,a=r.email,s=r.login,t(ge(c,a,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},xe=function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.c.getCaptchaUrl();case 2:n=e.sent,r=n.url,t(me(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:case he:return Object(w.a)(Object(w.a)({},e),t.payload);default:return e}},we=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)(be,Object(w.a)({},this.props))}}]),n}(c.a.Component),_e=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.logout();case 2:0===e.sent.resultCode&&t(ge(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(we),Ce=n(128),Se=n(10),ye=n(29),ke=n(36),Ne=n.n(ke),Ie=Object(Ce.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(h.jsxs)("form",{onSubmit:t,children:[Object(Se.c)(Se.a,"Email","email",[ye.b]),Object(Se.c)(Se.a,"Password","password",[ye.b],{type:"password"}),Object(Se.c)(Se.a,null,"rememberMe",[],{type:"checkbox"},"remember me"),r&&Object(h.jsx)("img",{src:r}),r&&Object(Se.c)(Se.a,"Symbols from image","captcha",[ye.b]),n&&Object(h.jsx)("div",{className:Ne.a.formSummaryError,children:n}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Login"})})]})})),Ee=Object(g.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var c=Object(x.a)(v.a.mark((function c(a){var s,o;return v.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,_.a.login(e,t,n,r);case 2:0===(s=c.sent).resultCode?a(ve()):(10===s.resultCode&&a(xe()),o=s.messages.length>0?s.messages[0]:"Some error",a(Object(fe.a)("login",{_error:o})));case 4:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(h.jsx)(d.a,{to:"/profile"}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"LOGIN"}),Object(h.jsx)(Ie,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})})),Ue="INITIALIZED_SUCCESS",Te={initialized:!1},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ue:return Object(w.a)(Object(w.a)({},e),{},{initialized:!0});default:return e}},Ae=n(69),Fe=n(127),Me=n(138),ze=n(129),Re=Object(te.c)({profilePage:Ae.b,dialogsPage:Fe.a,usersPage:B,auth:Pe,form:ze.a,app:Le}),Be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.d,De=Object(te.e)(Re,Be(Object(te.a)(Me.a))),Ge=function(e){return function(t){return Object(h.jsx)(c.a.Suspense,{fallback:Object(h.jsx)(ee.a,{}),children:Object(h.jsx)(e,Object(w.a)({},t))})}},Ve=c.a.lazy((function(){return n.e(3).then(n.bind(null,304))})),He=c.a.lazy((function(){return n.e(4).then(n.bind(null,303))})),Je=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(h.jsxs)("div",{className:"app-wrapper",children:[Object(h.jsx)(_e,{}),Object(h.jsx)(O,{}),Object(h.jsxs)("div",{className:"app-wrapper-content",children:[Object(h.jsx)(d.b,{path:"/dialogs",render:Ge(Ve)}),Object(h.jsx)(d.b,{path:"/profile/:userId?",render:Ge(He)}),Object(h.jsx)(d.b,{path:"/users",render:function(){return Object(h.jsx)(le,{})}}),Object(h.jsx)(d.b,{path:"/login",render:function(){return Object(h.jsx)(Ee,{})}})]})]}):Object(h.jsx)(ee.a,{})}}]),n}(c.a.Component),We=Object(te.d)(d.f,Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(ve());Promise.all([t]).then((function(){e({type:Ue})}))}}}))(Je),Xe=function(e){return Object(h.jsx)(b.a,{children:Object(h.jsx)(g.a,{store:De,children:Object(h.jsx)(We,{})})})};s.a.render(Object(h.jsx)(Xe,{}),document.getElementById("root")),o()},31:function(e,t,n){"use strict";n(1);var r=n.p+"static/media/preloader.087b5cb2.svg",c=n(0);t.a=function(e){return Object(c.jsx)("div",{style:{backgroundColor:"white"},children:Object(c.jsx)("img",{src:r})})}},36:function(e,t,n){e.exports={formControl:"FormControls_formControl__y1wRb",error:"FormControls_error__2bhsa",formSummaryError:"FormControls_formSummaryError__gihVx"}},69:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return v})),n.d(t,"g",(function(){return x})),n.d(t,"e",(function(){return P})),n.d(t,"f",(function(){return w}));var r=n(43),c=n(8),a=n.n(c),s=n(14),o=n(26),i=n(3),u=n(12),l=(n(140),n(25)),j="ADD_POST",d="DELETE_POST",b="SET_USER_PROFILE",f="SET_STATUS",p="SAVE_PHOTO_SUCCESS",h={posts:[],profile:null,status:""},O=function(e){return{type:j,newPostText:e}},g=function(e){return{type:f,status:e}},m=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.d.getProfile(e);case 2:r=t.sent,n({type:b,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(g(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(g(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n((c=r.data.photos,{type:p,photos:c}));case 4:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n,c){var s,o,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=c().auth.userId,t.next=3,u.b.saveProfile(e);case 3:if(0!==(o=t.sent).resultCode){t.next=8;break}n(m(s)),t.next=12;break;case 8:return i=(i=o.messages[0].split(">")[1]).substring(0,i.length-1).toLowerCase(),n(Object(l.a)("edit-profile",{contacts:Object(r.a)({},i,o.messages[0])})),t.abrupt("return",Promise.reject(o.messages[0]));case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[n])});case d:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case b:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case f:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case p:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}},71:function(e,t,n){"use strict";t.a=n.p+"static/media/user.ab7efdc7.png"},73:function(e,t,n){e.exports={paginator:"Paginator_paginator__MP5nP",pageNumber:"Paginator_pageNumber__2F9Mw",selectedPage:"Paginator_selectedPage__PTMwb"}},94:function(e,t,n){e.exports={header:"Header_header__eo1KS",loginBlock:"Header_loginBlock__1QISy"}},97:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__h4Hhy",posts:"MyPosts_posts__3zVUO"}}},[[300,1,2]]]);
//# sourceMappingURL=main.0de1ada3.chunk.js.map