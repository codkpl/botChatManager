(this.webpackJsonpappchatmanager=this.webpackJsonpappchatmanager||[]).push([[0],{129:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),s=c(17),a=c.n(s),r=c(14),j=c.n(r),l=c(25),o=c(26),d=c(32),h=c(31),b=(c(21),c(4)),x=c(130),u=c(131),O=c(132),p=c(133),v=c(134),f=c(135),g=c(136),m=c(3),y=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(e){var i;return Object(l.a)(this,c),(i=t.call(this,e)).state={activeView:"home",activePanel:"main",activeTab:"updates",snackbar:null,popout:null},i}return Object(o.a)(c,[{key:"goPanel",value:function(e){this.setState({activePanel:e})}},{key:"goPage",value:function(e,t){this.setState({activeView:e,activePanel:t})}},{key:"sendPush",value:function(e,t){var c=this;"cancel"==t&&(t=Object(m.jsx)(x.a,{width:26,height:26})),this.setState({snackbar:Object(m.jsx)(b.r,{layout:"vertical",onClose:function(){return c.setState({snackbar:null})},before:Object(m.jsx)(b.c,{size:26,children:t}),children:e})})}},{key:"setPopout",value:function(e){var t=this;"getVersionInfo"==e&&this.setState({popout:Object(m.jsx)(b.o,{onClick:function(){return t.setState({popout:null})},children:Object(m.jsxs)("div",{style:{backgroundColor:"var(--background_content)",borderRadius:8,width:"30%",position:"relative",padding:"12px"},children:[Object(m.jsx)(b.n,{icon:Object(m.jsx)(u.a,{width:56,height:56}),children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"}),Object(m.jsxs)(b.j,{children:[Object(m.jsx)(b.g,{children:Object(m.jsx)(b.y,{children:"\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f: 1.0.0"})}),Object(m.jsx)(b.g,{children:Object(m.jsx)(b.y,{children:"\u0414\u0430\u0442\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f: 23.02.2022"})})]})]})})})}},{key:"render",value:function(){var e=this;return Object(m.jsx)(b.b,{children:Object(m.jsx)(b.t,{popout:this.state.popout,children:Object(m.jsxs)(b.s,{children:[Object(m.jsxs)(b.p,{activeView:this.state.activeView,style:{"margin-bottom":"3%"},children:[Object(m.jsx)(b.z,{id:"home",activePanel:this.state.activePanel,children:Object(m.jsxs)(b.l,{id:"main",children:[Object(m.jsx)(b.m,{children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(m.jsx)(b.j,{children:Object(m.jsx)(b.n,{icon:Object(m.jsx)(O.a,{width:58,height:58}),children:Object(m.jsx)(b.y,{style:{"font-size":"18px"},children:"\u0412\u0432\u0435\u0434\u0443\u0442\u0441\u044f \u0442\u0435\u0445. \u0440\u0430\u0431\u043e\u0442\u044b"})})})]})}),Object(m.jsxs)(b.z,{id:"more",activePanel:this.state.activePanel,children:[Object(m.jsxs)(b.l,{id:"main",children:[Object(m.jsx)(b.m,{children:"\u0415\u0449\u0451"}),Object(m.jsx)(b.j,{header:Object(m.jsx)(b.y,{style:{color:"gray",padding:"2px 5px 2px 5px"},children:"\u0412\u0435\u0440\u0441\u0438\u0438"}),children:Object(m.jsxs)(b.g,{children:[Object(m.jsx)(b.d,{header:"\u0412\u0435\u0440\u0441\u0438\u0438 ChatManager Bot",subheader:"\u041d\u043e\u0432\u044b\u0435 \u0438 \u043f\u0440\u043e\u0448\u043b\u044b\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u0447\u0430\u0442-\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430",asideMode:"expand",onClick:function(){return e.sendPush("\u0414\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043b\u0438 \u043e\u043d\u0430 \u0431\u044b\u043b\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0430.","cancel")},before:Object(m.jsx)(b.c,{style:{"background-color":"#d4b8d9af"},size:38,children:Object(m.jsx)(p.a,{fill:"black",width:34,height:34})})}),Object(m.jsx)(b.d,{header:"\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",subheader:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",asideMode:"expand",onClick:function(){return e.setPopout("getVersionInfo")},before:Object(m.jsx)(b.c,{style:{"background-color":"#d4b8d9af"},size:38,children:Object(m.jsx)(p.a,{fill:"black",width:34,height:34})})})]})}),Object(m.jsx)(b.i,{children:"\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f: 1.0.0"})]}),Object(m.jsxs)(b.l,{id:"updateV",children:[Object(m.jsx)(b.m,{left:Object(m.jsx)(b.k,{onClick:function(){return e.goPanel("main")},children:Object(m.jsx)(v.a,{fill:"612db5"})}),children:"UpVs"}),Object(m.jsxs)(b.j,{children:[Object(m.jsx)(b.g,{children:"updates"==e.state.activeTab?Object(m.jsx)(b.g,{style:{color:"gray"},children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0439 \u043d\u0435\u0442"}):Object(m.jsx)(b.g,{style:{color:"gray"},children:"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0435\u0441\u0442\u044c!"})}),Object(m.jsxs)(b.h,{filled:!0,vertical:"bottom",children:[Object(m.jsx)(b.q,{wide:!0}),Object(m.jsxs)(b.w,{children:[Object(m.jsx)(b.x,{selected:"updates"===this.state.activeTab,onClick:function(){return e.setState({activeTab:"updates"})},after:Object(m.jsx)(b.f,{mode:"prominent",size:"s",children:"+"}),children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"}),Object(m.jsx)(b.x,{selected:"corrections"===this.state.activeTab,onClick:function(){return e.setState({activeTab:"corrections"})},after:Object(m.jsx)(b.f,{mode:"primary",size:"s",children:"-"}),children:"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"})]})]})]})]})]})]}),this.state.snackbar,function(){if("updateV"!=e.state.activePanel)return Object(m.jsx)(b.h,{vertical:"bottom",children:Object(m.jsxs)(b.u,{itemsLayout:"horizontal",style:{position:"static"},children:[Object(m.jsx)(b.v,{style:{cursor:"pointer"},selected:"home"==e.state.activeView,onClick:function(){return e.goPage("home","main")},text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",children:Object(m.jsx)(f.a,{})}),Object(m.jsx)(b.v,{style:{cursor:"pointer"},selected:"more"==e.state.activeView,onClick:function(){return e.goPage("more","main")},text:"\u0415\u0449\u0451",children:Object(m.jsx)(g.a,{})})]})})}()]})})})}}]),c}(n.a.Component);j.a.send("VKWebAppInit"),a.a.render(Object(m.jsx)(b.e,{children:Object(m.jsx)(b.a,{children:Object(m.jsx)(y,{})})}),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.067a55f1.chunk.js.map