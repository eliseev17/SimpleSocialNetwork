(this["webpackJsonp01-project"]=this["webpackJsonp01-project"]||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return d}));var r=n(3),c=n(55),s=(n(1),n(52)),a=n.n(s),o=(n(34),n(91)),i=n(0),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,c=e.children,s=n&&r;return Object(i.jsx)("div",{className:a.a.formControl+" "+(s?a.a.error:""),children:Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:c}),s&&Object(i.jsx)("span",{children:r})]})})},l=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,["input","meta"]));return Object(i.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,["input","meta"]));return Object(i.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e,t,n,c){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(i.jsxs)("div",{children:[Object(i.jsx)(o.a,Object(r.a)({component:e,placeholder:t,name:n,validate:c},s))," ",a]})}},12:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(132),c=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"b4dd1893-249e-4612-8ef6-622b06abf27f"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return c.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return c.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return c.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Old method. Please use profileAPI object."),a.getProfile(e)}},a={getProfile:function(e){return c.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return c.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return c.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return c.put("profile",e)}},o={me:function(){return c.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return c.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return c.delete("auth/login").then((function(e){return e.data}))}}},127:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(25),c=n(3),s="SEND-MESSAGE",a={dialogs:[{id:1,name:"\u0418\u0432\u0430\u043d"},{id:2,name:"\u041c\u0430\u0440\u0438\u044f"},{id:3,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440"},{id:4,name:"\u0424\u0451\u0434\u043e\u0440"},{id:5,name:"\u041a\u0438\u0440\u0438\u043b\u043b"}],messages:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442!"},{id:2,message:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430?"},{id:3,message:"React + Redux"},{id:4,message:"Learn JS"},{id:5,message:"\u041f\u043e\u043a\u0430"}]},o=function(e){return{type:s,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.newMessageBody;return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},134:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__3vVIP",selectedPage:"Users_selectedPage__11NTH"}},137:function(e,t,n){e.exports={content:"Post_content__1rU6d",item:"Post_item__Ckbuf"}},140:function(e,t,n){"use strict";var r=n(1),c=n.n(r),s=(n(299),n(3)),a=n(68),o=n(25),i=n(97),u=n.n(i),l=n(137),j=n.n(l),d=n(0),b=function(e){return Object(d.jsxs)("div",{className:j.a.item,children:[Object(d.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/149/149071.png",alt:""}),e.message,Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Like"})," ",e.likesCount]})]})},f=n(91),p=n(128),O=n(34),h=n(11),g=Object(O.a)(10),v=function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(f.a,{name:"newPostText",component:h.b,placeholder:"Post message",validate:[O.b,g]})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Add post"})})]})};v=Object(p.a)({form:"ProfileAddNewPostForm"})(v);var m=c.a.memo((function(e){var t=Object(o.a)(e.posts).reverse().map((function(e){return Object(d.jsx)(b,{message:e.message,likesCount:e.likesCount})}));return Object(d.jsxs)("div",{className:u.a.postsBlock,children:[e.isOwner?Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"My posts"}),Object(d.jsx)(v,{onSubmit:function(t){e.addPost(t.newPostText)}})]}):Object(d.jsx)("h3",{children:"Posts"}),Object(d.jsx)("div",{className:u.a.posts,children:t})]})})),x=n(14),P=Object(x.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(a.a)(t))}}}))((function(e){return Object(d.jsx)(m,Object(s.a)({},e))})),w=n(36),_=n(24),S=n.n(_),C=n(29),k=function(e){var t=Object(r.useState)(!1),n=Object(w.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(e.status),o=Object(w.a)(a,2),i=o[0],u=o[1];Object(r.useEffect)((function(){u(e.status)}),[e.status]);var l=function(){s(!c),c||e.updateUserStatus(i)};return Object(d.jsxs)("div",{children:[!c&&Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Status: "}),Object(d.jsx)("span",{onDoubleClick:l,children:e.status||"No status"})]}),c&&Object(d.jsx)("div",{children:Object(d.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:l,value:i})})]})},y=n(71),N=Object(p.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profile;return Object(d.jsxs)("form",{onSubmit:t,children:[Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Save"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Full name"}),": ",Object(h.c)(h.a,"full name","fullName",[])]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Looking for a job"}),": ",Object(h.c)(h.a,"","lookingForAJob",[],{type:"checkbox"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"My professional skills"}),": ",Object(h.c)(h.b,"My professional skills","lookingForAJobDescription",[])]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"About me"}),": ",Object(h.c)(h.b,"About me","aboutMe",[])]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Contacts"}),": ",Object.keys(n.contacts).map((function(e){return Object(d.jsxs)("div",{className:S.a.contact,children:[Object(d.jsxs)("b",{children:[e,":"]})," ",Object(h.c)(h.a,e,"contacts."+e,[])]})}))]})]})})),I=function(e){var t=e.contactTitle,n=e.contactValue;return Object(d.jsxs)("div",{className:S.a.contact,children:[Object(d.jsx)("b",{children:t}),": ",n]})},E=function(e){var t=e.profile,n=e.isOwner,r=e.activateEditMode;return Object(d.jsxs)("div",{children:[n&&Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:r,children:"Edit info"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Looking for a job"}),": ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"My professional skills"}),": ",t.lookingForAJobDescription]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"About me"}),": ",t.aboutMe]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Contacts"}),": ",Object.keys(t.contacts).map((function(e){return Object(d.jsx)(I,{contactTitle:e,contactValue:t.contacts[e]})}))]})]})},T=function(e){var t=e.profile,n=e.status,c=e.updateUserStatus,s=e.isOwner,a=e.savePhoto,o=e.saveProfile,i=Object(r.useState)(!1),u=Object(w.a)(i,2),l=u[0],j=u[1];if(!t)return Object(d.jsx)(C.a,{});return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:S.a.descriptionBlock,children:[Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:t.fullName})}),Object(d.jsxs)("div",{className:S.a.mainPhotoContainer,children:[Object(d.jsx)("img",{src:t.photos.large||y.a,className:S.a.mainPhoto}),s&&Object(d.jsxs)("label",{className:S.a.fileInput,children:[Object(d.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&a(e.target.files[0])}}),"Update photo"]})]}),Object(d.jsx)(k,{status:n,updateUserStatus:c}),l?Object(d.jsx)(N,{onSubmit:function(e){o(e),j(!1)},initialValues:t,profile:t}):Object(d.jsx)(E,{profile:t,isOwner:s,activateEditMode:function(){j(!0)}})]})})};t.a=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(T,{profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),Object(d.jsx)(P,{store:e.store,isOwner:e.isOwner})]})}},16:function(e,t,n){e.exports={nav:"Navbar_nav__2ur61",item:"Navbar_item__1uoWl",activeLink:"Navbar_activeLink__3k9Tc"}},170:function(e,t,n){},171:function(e,t,n){},24:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__324tk",mainPhotoContainer:"ProfileInfo_mainPhotoContainer__2m0ZZ",mainPhoto:"ProfileInfo_mainPhoto__25C98",fileInput:"ProfileInfo_fileInput__2HBOS",contact:"ProfileInfo_contact__22Wgf"}},29:function(e,t,n){"use strict";n(1);var r=n.p+"static/media/preloader.087b5cb2.svg",c=n(0);t.a=function(e){return Object(c.jsx)("div",{style:{backgroundColor:"white"},children:Object(c.jsx)("img",{src:r})})}},299:function(e,t,n){},300:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(66),a=n.n(s),o=(n(170),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,302)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))}),i=n(38),u=n(39),l=n(41),j=n(40),d=n(10),b=n(18),f=(n(171),n(16)),p=n.n(f),O=n(0),h=function(){return Object(O.jsxs)("nav",{className:p.a.nav,children:[Object(O.jsx)("div",{className:"".concat(p.a.item," ").concat(p.a.activeLink),children:Object(O.jsx)(b.b,{to:"/profile",activeClassName:p.a.activeLink,children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})}),Object(O.jsx)("div",{className:p.a.item,children:Object(O.jsx)(b.b,{to:"/dialogs",activeClassName:p.a.activeLink,children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})}),Object(O.jsx)("div",{className:p.a.item,children:Object(O.jsx)(b.b,{to:"/news",activeClassName:p.a.activeLink,children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"})}),Object(O.jsx)("div",{className:p.a.item,children:Object(O.jsx)(b.b,{to:"/music",activeClassName:p.a.activeLink,children:"\u041c\u0443\u0437\u044b\u043a\u0430"})}),Object(O.jsx)("div",{className:p.a.item,children:Object(O.jsx)(b.b,{to:"/users",activeClassName:p.a.activeLink,children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})}),Object(O.jsx)("div",{className:p.a.item,children:Object(O.jsx)(b.b,{to:"/settings",activeClassName:p.a.activeLink,children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})})]})},g=n(14),v=n(8),m=n.n(v),x=n(15),P=n(25),w=n(3),_=n(12),S=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(w.a)(Object(w.a)({},e),r):e}))},C="FOLLOW",k="UNFOLLOW",y="SET_USERS",N="SET_CURRENT_PAGE",I="SET_TOTAL_USERS_COUNT",E="TOGGLE_IS_FETCHING",T="TOGGLE_IS_FOLLOWING_PROGRESS",U={users:[],pageSize:50,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},F=function(e){return{type:C,userId:e}},L=function(e){return{type:k,userId:e}},A=function(e){return{type:N,currentPage:e}},M=function(e){return{type:E,isFetching:e}},z=function(e,t){return{type:T,isFetching:e,userId:t}},B=function(){var e=Object(x.a)(m.a.mark((function e(t,n,r,c){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(z(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(c(n)),t(z(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(w.a)(Object(w.a)({},e),{},{users:S(e.users,t.userId,"id",{followed:!0})});case k:return Object(w.a)(Object(w.a)({},e),{},{users:S(e.users,t.userId,"id",{followed:!1})});case y:return Object(w.a)(Object(w.a)({},e),{},{users:Object(P.a)(t.users)});case N:return Object(w.a)(Object(w.a)({},e),{},{currentPage:t.currentPage});case I:return Object(w.a)(Object(w.a)({},e),{},{totalUsersCount:t.count});case E:return Object(w.a)(Object(w.a)({},e),{},{isFetching:t.isFetching});case T:return Object(w.a)(Object(w.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(P.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},D=n(55),G=n(70),V=n(36),J=n(73),H=n.n(J),W=n(133),X=n.n(W),Z=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,s=e.onPageChanged,a=e.portionSize,o=void 0===a?10:a,i=Math.ceil(t/n),u=[],l=1;l<=i;l++)u.push(l);var j=Math.ceil(i/o),d=Object(r.useState)(1),b=Object(V.a)(d,2),f=b[0],p=b[1],h=(f-1)*o+1,g=f*o;return Object(O.jsxs)("div",{className:H.a.paginator,children:[f>1&&Object(O.jsx)("button",{onClick:function(){p(f-1)},children:"PREV"}),u.filter((function(e){return e>=h&&e<=g})).map((function(e){return Object(O.jsx)("span",{className:X()(Object(G.a)({},H.a.selectedPage,c===e),H.a.pageNumber),onClick:function(t){s(e)},children:e},e)})),j>f&&Object(O.jsx)("button",{onClick:function(){p(f+1)},children:"NEXT"})]})},K=n(134),q=n.n(K),Q=n(71),Y=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,c=e.unfollow;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:Object(O.jsx)(b.b,{to:"/profile/"+t.id,children:Object(O.jsx)("img",{src:null!=t.photos.small?t.photos.small:Q.a,className:q.a.userPhoto,alt:"{}"})})}),Object(O.jsx)("div",{children:t.followed?Object(O.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Unfollow"}):Object(O.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Follow"})})]}),Object(O.jsxs)("span",{children:[Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:t.name}),Object(O.jsx)("div",{children:t.status})]}),Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:"user.location.country"}),Object(O.jsx)("div",{children:"user.location.city"})]})]})]})},$=function(e){var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,c=e.onPageChanged,s=e.users,a=Object(D.a)(e,["totalUsersCount","pageSize","currentPage","onPageChanged","users"]);return Object(O.jsxs)("div",{children:[Object(O.jsx)(Z,{totalItemsCount:t,pageSize:n,currentPage:r,onPageChanged:c}),Object(O.jsx)("div",{children:s.map((function(e){return Object(O.jsx)(Y,{user:e,followingInProgress:a.followingInProgress,follow:a.follow,unfollow:a.unfollow},e.id)}))})]})},ee=n(29),te=n(9),ne=n(139),re=Object(ne.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ce=function(e){return e.usersPage.pageSize},se=function(e){return e.usersPage.totalUsersCount},ae=function(e){return e.usersPage.currentPage},oe=function(e){return e.usersPage.isFetching},ie=function(e){return e.usersPage.followingInProgress},ue=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[this.props.isFetching?Object(O.jsx)(ee.a,{}):null,Object(O.jsx)($,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(c.a.Component),le=Object(te.d)(Object(g.b)((function(e){return{users:re(e),pageSize:ce(e),totalUsersCount:se(e),currentPage:ae(e),isFetching:oe(e),followingInProgress:ie(e)}}),{follow:function(e){return function(){var t=Object(x.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:B(n,e,_.c.follow.bind(_.c),F);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(x.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:B(n,e,_.c.unfollow.bind(_.c),L);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:A,toggleFollowingProgress:z,getUsers:function(e,t){return function(){var n=Object(x.a)(m.a.mark((function n(r){var c;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(M(!0)),r(A(e)),n.next=4,_.c.getUsers(e,t);case 4:c=n.sent,r(M(!1)),r((a=c.items,{type:y,users:a})),r((s=c.totalCount,{type:I,count:s}));case 8:case"end":return n.stop()}var s,a}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ue),je=n(94),de=n.n(je),be=function(e){return Object(O.jsxs)("header",{className:de.a.header,children:[Object(O.jsx)("img",{src:"https://uploads-ssl.webflow.com/5f8f7f6f45a2ba8926f2e652/5f9acb9b4c0d417a29a8dfbe_Exemplifi_Branding.png",alt:""}),Object(O.jsx)("div",{className:de.a.loginBlock,children:e.isAuth?Object(O.jsxs)("div",{children:[e.login," - ",Object(O.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(O.jsx)(b.b,{to:"/login",children:"Login"})})]})},fe=n(31),pe="social-network/auth/SET_USER_DATA",Oe={userId:null,email:null,login:null,isAuth:!1},he=function(e,t,n,r){return{type:pe,payload:{userId:e,email:t,login:n,isAuth:r}}},ge=function(){return function(){var e=Object(x.a)(m.a.mark((function e(t){var n,r,c,s,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.me();case 2:0===(n=e.sent).resultCode&&(r=n.data,c=r.id,s=r.email,a=r.login,t(he(c,s,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:return Object(w.a)(Object(w.a)({},e),t.payload);default:return e}},me=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsx)(be,Object(w.a)({},this.props))}}]),n}(c.a.Component),xe=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(x.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.logout();case 2:0===e.sent.resultCode&&t(he(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(me),Pe=n(128),we=n(11),_e=n(34),Se=n(52),Ce=n.n(Se),ke=Object(Pe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(O.jsxs)("form",{onSubmit:t,children:[Object(we.c)(we.a,"Email","email",[_e.b]),Object(we.c)(we.a,"Password","password",[_e.b],{type:"password"}),Object(we.c)(we.a,null,"rememberMe",[],{type:"checkbox"},"remember me"),n&&Object(O.jsx)("div",{className:Ce.a.formSummaryError,children:n}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{children:"Login"})})]})})),ye=Object(g.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(x.a)(m.a.mark((function r(c){var s,a;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_.a.login(e,t,n);case 2:0===(s=r.sent).resultCode?c(ge()):(a=s.messages.length>0?s.messages[0]:"Some error",c(Object(fe.a)("login",{_error:a})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(O.jsx)(d.a,{to:"/profile"}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"LOGIN"}),Object(O.jsx)(ke,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Ne="INITIALIZED_SUCCESS",Ie={initialized:!1},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return Object(w.a)(Object(w.a)({},e),{},{initialized:!0});default:return e}},Te=n(68),Ue=n(127),Fe=n(138),Le=n(129),Ae=Object(te.c)({profilePage:Te.b,dialogsPage:Ue.a,usersPage:R,auth:ve,form:Le.a,app:Ee}),Me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.d,ze=Object(te.e)(Ae,Me(Object(te.a)(Fe.a))),Be=function(e){return function(t){return Object(O.jsx)(c.a.Suspense,{fallback:Object(O.jsx)(ee.a,{}),children:Object(O.jsx)(e,Object(w.a)({},t))})}},Re=c.a.lazy((function(){return n.e(3).then(n.bind(null,304))})),De=c.a.lazy((function(){return n.e(4).then(n.bind(null,303))})),Ge=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(O.jsxs)("div",{className:"app-wrapper",children:[Object(O.jsx)(xe,{}),Object(O.jsx)(h,{}),Object(O.jsxs)("div",{className:"app-wrapper-content",children:[Object(O.jsx)(d.b,{path:"/dialogs",render:Be(Re)}),Object(O.jsx)(d.b,{path:"/profile/:userId?",render:Be(De)}),Object(O.jsx)(d.b,{path:"/users",render:function(){return Object(O.jsx)(le,{})}}),Object(O.jsx)(d.b,{path:"/login",render:function(){return Object(O.jsx)(ye,{})}})]})]}):Object(O.jsx)(ee.a,{})}}]),n}(c.a.Component),Ve=Object(te.d)(d.f,Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(ge());Promise.all([t]).then((function(){e({type:Ne})}))}}}))(Ge),Je=function(e){return Object(O.jsx)(b.a,{children:Object(O.jsx)(g.a,{store:ze,children:Object(O.jsx)(Ve,{})})})};a.a.render(Object(O.jsx)(Je,{}),document.getElementById("root")),o()},34:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){return e?void 0:"Required"},c=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},52:function(e,t,n){e.exports={formControl:"FormControls_formControl__y1wRb",error:"FormControls_error__2bhsa",formSummaryError:"FormControls_formSummaryError__gihVx"}},68:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return m})),n.d(t,"f",(function(){return x}));var r=n(8),c=n.n(r),s=n(15),a=n(25),o=n(3),i=n(12),u=(n(140),"ADD_POST"),l="DELETE_POST",j="SET_USER_PROFILE",d="SET_STATUS",b="SAVE_PHOTO_SUCCESS",f={posts:[],profile:null,status:""},p=function(e){return{type:u,newPostText:e}},O=function(e){return{type:d,status:e}},h=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfile(e);case 2:r=t.sent,n({type:j,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(O(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n((c=r.data.photos,{type:b,photos:c}));case 4:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n,r){var s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r().auth.userId,t.next=3,i.b.saveProfile(e);case 3:0===t.sent.data.resultCode&&n(h(s));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(a.a)(e.posts),[n])});case l:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case j:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case d:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case b:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}},71:function(e,t,n){"use strict";t.a=n.p+"static/media/user.ab7efdc7.png"},73:function(e,t,n){e.exports={paginator:"Paginator_paginator__MP5nP",pageNumber:"Paginator_pageNumber__2F9Mw",selectedPage:"Paginator_selectedPage__PTMwb"}},94:function(e,t,n){e.exports={header:"Header_header__eo1KS",loginBlock:"Header_loginBlock__1QISy"}},97:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__h4Hhy",posts:"MyPosts_posts__3zVUO"}}},[[300,1,2]]]);
//# sourceMappingURL=main.8b4d0b50.chunk.js.map