(this.webpackJsonpappchatmanager=this.webpackJsonpappchatmanager||[]).push([[0],{112:function(e,t,i){},125:function(e,t,i){"use strict";i.r(t);var c=i(0),n=i.n(c),s=i(21),r=i.n(s),a=i(13),o=i.n(a),l=i(28),d=i(29),h=i(22),j=i(33),b=i(32),u=(i(24),i(112),i(4)),x=i(127),p=i(128),O=i(129),f=i(130),g=i(131),v=i(132),m=i(133),k=i(126),y=i(134),w=i(135),C=i(136),P=i(2),S=[363163789],A=function(e){Object(j.a)(i,e);var t=Object(b.a)(i);function i(e){var c;return Object(l.a)(this,i),(c=t.call(this,e)).state={activeView:"errors",activePanel:"whitePage",activeAppTheme:"light",activeTab:"updates",snackbar:null,popout:null,activeModal:null,user:null,id:null,error:null,buttonShowError:!1},c.replButtonError=c.replButtonError.bind(Object(h.a)(c)),c}return Object(d.a)(i,[{key:"goPanel",value:function(e){this.setState({activePanel:e})}},{key:"goPage",value:function(e,t){this.setState({activeView:e,activePanel:t})}},{key:"sendPush",value:function(e,t){var i=this;"cancel"==t&&(t=Object(P.jsx)(x.a,{width:26,height:26})),this.setState({snackbar:Object(P.jsx)(u.v,{layout:"vertical",onClose:function(){return i.setState({snackbar:null})},before:Object(P.jsx)(u.b,{size:26,children:t}),children:e})})}},{key:"replButtonError",value:function(){1==this.state.buttonShowError&&this.setState({buttonShowError:!1}),0==this.state.buttonShowError&&this.setState({buttonShowError:!0})}},{key:"setPopout",value:function(e,t){var i=this;"getVersionInfo"==e&&this.setState({snackbar:null,popout:Object(P.jsx)(u.s,{onClick:function(){return i.setState({popout:null})},children:Object(P.jsxs)("div",{style:{backgroundColor:"var(--background_content)",borderRadius:8,width:"85%",position:"relative",padding:"12px"},children:[Object(P.jsx)(u.r,{style:{"font-size":"18px"},icon:Object(P.jsx)(p.a,{width:56,height:56}),children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"}),Object(P.jsxs)(u.i,{children:[Object(P.jsx)(u.m,{before:Object(P.jsx)(O.a,{}),after:Object(P.jsx)(u.e,{size:"s",children:"Beta"}),textWrap:"full",children:Object(P.jsx)(u.D,{style:{"font-size":"17px"},children:" \u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f: 1.0.0 "})}),Object(P.jsx)(u.m,{before:Object(P.jsx)(f.a,{width:24,height:24}),textWrap:"full",children:Object(P.jsx)(u.D,{style:{"font-size":"17px"},children:" \u0414\u0430\u0442\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f: 24.02.2022 "})})]})]})})}),"loadingPage"==e&&this.setState({snackbar:null,popout:Object(P.jsx)(u.s,{children:Object(P.jsx)("div",{style:{backgroundColor:"var(--background_content)",borderRadius:8,width:"auto",position:"relative",padding:"12px"},children:Object(P.jsxs)(u.f,{children:[Object(P.jsx)(u.w,{size:"large",style:{margin:"20px 0"}}),Object(P.jsxs)(u.D,{style:{"text-align":"center",color:"gray"},children:[" ",t," "]})]})})})})}},{key:"changeAppTheme",value:function(){"light"==this.state.activeAppTheme?this.setState({activeAppTheme:"dark"}):this.setState({activeAppTheme:"light"})}},{key:"setModal",value:function(e){var t=this;~["modalCardAppChangeTheme"].indexOf(e)?this.setState({popout:null,snackbar:null,activeModal:Object(P.jsx)(u.o,{activeModal:e,onClose:function(){return t.setState({activeModal:null})},children:Object(P.jsx)(u.n,{id:"modalCardAppChangeTheme",onClose:function(){return t.setState({activeModal:null})},icon:Object(P.jsx)(g.a,{width:50,height:50}),header:"\u0421\u043c\u0435\u043d\u0430 \u0442\u0435\u043c\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",subheader:Object(P.jsxs)(u.D,{children:["\u0423 \u0432\u0430\u0441 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430 ",Object(P.jsxs)("b",{children:[" ",this.state.activeAppTheme.replace(/light/gi,"\u0441\u0432\u0435\u0442\u043b\u0430\u044f").replace(/dark/gi,"\u0442\u0451\u043c\u043d\u0430\u044f")," "]})," \u0442\u0435\u043c\u0430. "]}),actions:Object(P.jsx)(u.d,{size:"m",mode:"primary",onClick:function(){return t.changeAppTheme()},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})})})}):this.sendPush("\u041c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043e\u043d\u043e \u0431\u044b\u043b\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e \u0438\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e.","cancel")}},{key:"quotApp",value:function(){o.a.send("VKWebAppClose")}},{key:"componentDidMount",value:function(){this.setPopout("loadingPage","\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u0412\u0430\u0448\u0435\u043c \u043f\u0440\u043e\u0444\u0438\u043b\u0435...")}},{key:"render",value:function(){var e=this;return Object(c.useEffect)((function(){o.a.subscribe((function(t){var i=t.detail,c=i.type,n=i.data;"VKWebAppUpdateConfig"===c&&(sheme=n.sheme.replace(/vkcom_light/gi,"light").replace(/vkcom_dark/gi,"dark"),e.setState({activeAppTheme:sheme}))})),o.a.send("VKWebAppGetUserInfo").then((function(t){setTimeout((function(){e.setState({user:t,id:t.id,popout:null}),~S.indexOf(t.id)?e.goPage("home","main"):(e.setState({error:"Error 1: The user is not found in the system. Access denied."}),e.goPage("errors","main"))}),2e3)})).catch((function(t){setTimeout((function(){e.setState({activeView:"errors",activePanel:"main",error:t})}),2e3)})),"/getAccess"==window.location.pathname&&setTimeout((function(){e.setState({user:363163789,id:363163789,popout:null}),e.goPage("home","main")}),2e3)})),Object(P.jsx)(ConfigProvider,{appearance:this.state.activeAppTheme,children:Object(P.jsx)(AdaptivityProvider,{children:Object(P.jsx)(u.a,{children:Object(P.jsx)(u.y,{popout:this.state.popout,modal:this.state.activeModal,children:Object(P.jsxs)(u.x,{children:[Object(P.jsxs)(u.t,{activeView:this.state.activeView,style:{"margin-bottom":"3%"},children:[Object(P.jsx)(u.E,{id:"home",activePanel:this.state.activePanel,children:Object(P.jsxs)(u.p,{id:"main",children:[Object(P.jsx)(u.q,{children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(P.jsx)(u.i,{children:Object(P.jsx)(u.r,{icon:Object(P.jsx)(v.a,{width:58,height:58}),children:Object(P.jsx)(u.D,{style:{"font-size":"19px"},children:"\u0412\u0435\u0434\u0443\u0442\u0441\u044f \u0442\u0435\u0445. \u0440\u0430\u0431\u043e\u0442\u044b"})})})]})}),Object(P.jsxs)(u.E,{id:"more",activePanel:this.state.activePanel,children:[Object(P.jsxs)(u.p,{id:"main",children:[Object(P.jsx)(u.q,{children:"\u0415\u0449\u0451"}),Object(P.jsx)(u.i,{header:Object(P.jsx)(u.j,{style:{color:"gray"},children:"\u0421\u043c\u0435\u043d\u0430 \u0442\u0435\u043c\u044b"}),children:Object(P.jsx)(u.c,{header:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0435\u043c\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",asideMode:"expand",onClick:function(){return e.setModal("modalCardAppChangeTheme")},before:Object(P.jsx)(u.b,{style:{"background-color":"#d4b8d9af"},size:38,children:Object(P.jsx)(g.a,{fill:"black",width:30,height:30})})})}),Object(P.jsxs)(u.i,{header:Object(P.jsx)(u.j,{style:{color:"gray"},children:"\u0412\u0435\u0440\u0441\u0438\u0438"}),children:[Object(P.jsx)(u.c,{header:"\u0412\u0435\u0440\u0441\u0438\u0438 ChatManager Bot",subheader:"\u041d\u043e\u0432\u044b\u0435 \u0438 \u043f\u0440\u043e\u0448\u043b\u044b\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u0447\u0430\u0442-\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430",asideMode:"expand",onClick:function(){return e.sendPush("\u0414\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043b\u0438 \u043e\u043d\u0430 \u0431\u044b\u043b\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0430.","cancel")},before:Object(P.jsx)(u.b,{style:{"background-color":"#d4b8d9af"},size:38,children:Object(P.jsx)(p.a,{fill:"black",width:30,height:30})})}),Object(P.jsx)(u.c,{header:"\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",subheader:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",asideMode:"expand",onClick:function(){return e.setPopout("getVersionInfo")},before:Object(P.jsx)(u.b,{style:{"background-color":"#d4b8d9af"},size:38,children:Object(P.jsx)(p.a,{fill:"black",width:30,height:30})})})]}),Object(P.jsx)(u.h,{children:"\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f: 1.0.0"})]}),Object(P.jsxs)(u.p,{id:"updateV",children:[Object(P.jsx)(u.q,{left:Object(P.jsx)(u.k,{onClick:function(){return e.goPanel("main")},children:Object(P.jsx)(m.a,{fill:"612db5"})}),children:"UpVs"}),Object(P.jsxs)(u.i,{children:[Object(P.jsx)(u.f,{children:"updates"==e.state.activeTab?Object(P.jsx)(u.f,{style:{color:"gray"},children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0439 \u043d\u0435\u0442"}):Object(P.jsx)(u.f,{style:{color:"gray"},children:"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0435\u0441\u0442\u044c!"})}),Object(P.jsxs)(u.g,{filled:!0,vertical:"bottom",children:[Object(P.jsx)(u.u,{wide:!0}),Object(P.jsxs)(u.B,{children:[Object(P.jsx)(u.C,{selected:"updates"===this.state.activeTab,onClick:function(){return e.setState({activeTab:"updates"})},after:Object(P.jsx)(u.e,{mode:"prominent",size:"s",children:"+"}),children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"}),Object(P.jsx)(u.C,{selected:"corrections"===this.state.activeTab,onClick:function(){return e.setState({activeTab:"corrections"})},after:Object(P.jsx)(u.e,{mode:"primary",size:"s",children:"-"}),children:"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"})]})]})]})]})]}),Object(P.jsxs)(u.E,{id:"errors",activePanel:this.state.activePanel,children:[Object(P.jsxs)(u.p,{id:"main",children:[Object(P.jsx)(u.q,{children:"Chat Manager"}),Object(P.jsxs)("div",{style:{backgroundColor:"var(--background_content)",borderRadius:8,width:"auto","vertical-align":"center",position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"12px"},children:[Object(P.jsx)(u.f,{children:Object(P.jsx)(k.a,{width:68,height:68,fill:"#ff0f00d1"})}),Object(P.jsx)(u.f,{children:Object(P.jsx)(u.D,{style:{"text-align":"center",color:"gray","font-size":"19px"},children:" \u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u0434\u0430\u0447\u0435 \u043f\u0440\u0430\u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0430. "})}),Object(P.jsx)(u.f,{children:Object(P.jsx)(u.d,{size:"m",mode:"secondary",onClick:this.replButtonError,children:this.state.buttonShowError?"\u0421\u043a\u0440\u044b\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443"})}),e.state.buttonShowError?Object(P.jsxs)(n.a.Fragment,{children:[Object(P.jsx)(u.u,{style:{margin:"12px 0"}}),Object(P.jsx)(u.f,{style:{"border-radius":"8px",background:"#eb776e76"},children:Object(P.jsx)(u.D,{children:e.state.error})}),Object(P.jsx)(u.f,{children:Object(P.jsxs)(u.l,{href:"https://vk.com/im?sel=-207901232",target:"_blank",children:[" ",Object(P.jsx)("b",{children:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432 \u0442\u0435\u0445. \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443"})," "]})})]}):void 0]}),Object(P.jsx)(u.g,{vertical:"bottom",children:Object(P.jsx)(u.f,{children:Object(P.jsx)(u.d,{after:Object(P.jsx)(y.a,{width:24,height:24}),style:{color:"#eb4b3fd8"},size:"l",mode:"neutral",stretched:!0,onClick:this.quotApp,children:" \u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f "})})})]}),Object(P.jsx)(u.p,{id:"whitePage",children:Object(P.jsx)(u.q,{children:" Chat Manager "})})]})]}),this.state.snackbar,"updateV"!=e.state.activePanel&"errors"!=e.state.activeView?Object(P.jsx)(u.g,{vertical:"bottom",children:Object(P.jsxs)(u.z,{itemsLayout:"horizontal",style:{position:"static"},children:[Object(P.jsx)(u.A,{style:{cursor:"pointer"},selected:"home"==e.state.activeView,onClick:function(){return e.goPage("home","main")},text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",children:Object(P.jsx)(w.a,{})}),Object(P.jsx)(u.A,{style:{cursor:"pointer"},selected:"more"==e.state.activeView,onClick:function(){return e.goPage("more","main")},text:"\u0415\u0449\u0451",children:Object(P.jsx)(C.a,{})})]})}):void 0]})})})})})}}]),i}(n.a.Component);o.a.send("VKWebAppInit"),r.a.render(Object(P.jsx)(A,{}),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.fa6da847.chunk.js.map