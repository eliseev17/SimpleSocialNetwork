(this["webpackJsonp01-project"]=this["webpackJsonp01-project"]||[]).push([[3],{301:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__wwsO2",dialogsItems:"Dialogs_dialogsItems__1S-Fu",dialog:"Dialogs_dialog__1Sq0k",active:"Dialogs_active__ceU-m",messages:"Dialogs_messages__2XETi",message:"Dialogs_message__2Bnqd"}},304:function(e,s,t){"use strict";t.r(s);var a=t(1),n=t.n(a),i=t(127),c=t(301),o=t.n(c),r=t(16),d=t(0),j=function(e){return Object(d.jsx)("div",{className:o.a.dialog+" "+o.a.active,children:Object(d.jsx)(r.b,{to:"/dialogs/"+e.id,children:e.name})})},l=function(e){return Object(d.jsx)("div",{className:o.a.message,children:e.message})},u=t(91),b=t(128),g=t(24),m=t(32),O=Object(m.a)(50),h=Object(b.a)({form:"dialog-add-message-form"})((function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(u.a,{component:g.b,validate:[m.b,O],placeholder:"Enter your message...",name:"newMessageBody"})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Send"})})]})})),f=function(e){var s=e.dialogsPage,t=s.dialogs.map((function(e){return Object(d.jsx)(j,{name:e.name,id:e.id},e.id)})),a=s.messages.map((function(e){return Object(d.jsx)(l,{message:e.message},e.id)}));return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:o.a.dialogs,children:[Object(d.jsx)("div",{className:o.a.dialogsItems,children:t}),Object(d.jsxs)("div",{className:o.a.messages,children:[Object(d.jsx)("div",{children:a}),Object(d.jsx)(h,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})]})})},p=t(13),x=t(3),v=t(37),_=t(38),w=t(40),D=t(39),S=t(10),y=function(e){return{isAuth:e.auth.isAuth}},N=t(9);s.default=Object(N.d)(Object(p.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(i.b)(s))}}})),(function(e){var s=function(s){Object(w.a)(a,s);var t=Object(D.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(_.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(e,Object(x.a)({},this.props)):Object(d.jsx)(S.a,{to:"/login"})}}]),a}(n.a.Component);return Object(p.b)(y)(s)}))(f)}}]);
//# sourceMappingURL=3.1bbf5f6a.chunk.js.map