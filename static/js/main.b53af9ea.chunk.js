(this.webpackJsonpappchatmanager=this.webpackJsonpappchatmanager||[]).push([[0],{110:function(e,t,i){},123:function(e,t,i){"use strict";i.r(t);var s=i(0),c=i.n(s),a=i(21),n=i.n(a),r=i(13),o=i.n(r),l=i(24),h=i(29),d=i(30),j=i(22),b=i(34),u=i(33),p=(i(25),i(110),i(4)),x=i(125),O=i(126),g=i(127),v=i(128),m=i(129),f=i(130),y=i(131),k=i(132),w=i(124),S=i(133),A=i(134),P=i(135),C=i(2),T="modalCardAppChangeTheme",_="popoutVersionApp",z=[363163789],V=function(e){Object(b.a)(i,e);var t=Object(u.a)(i);function i(e){var s;return Object(h.a)(this,i),(s=t.call(this,e)).state={lights:["bright_light","space_gray"],activeView:"errors",activePanel:"whitePage",activeAppTheme:"bright_light",activeTab:"updates",snackbar:null,popout:null,popoutHistory:[],activeModal:null,modalHistory:[],user:null,id:null,error:null,buttonShowError:!1},s.sic={icmSG:"white",icmBL:"black"},s.modalBack=function(){s.setActiveModal(s.state.modalHistory[s.state.modalHistory.length-2])},s.popoutBack=function(){s.setActivePopout([s.state.modalHistory.length-2])},s.replButtonError=s.replButtonError.bind(Object(j.a)(s)),s}return Object(d.a)(i,[{key:"goPanel",value:function(e){this.setState({activePanel:e})}},{key:"goPage",value:function(e,t){this.setState({activeView:e,activePanel:t})}},{key:"sendPush",value:function(e,t){var i=this;"cancel"==t&&(t=Object(C.jsx)(x.a,{width:26,height:26})),this.setState({snackbar:Object(C.jsx)(p.x,{layout:"vertical",onClose:function(){return i.setState({snackbar:null})},before:Object(C.jsx)(p.c,{size:26,children:t}),children:e})})}},{key:"replButtonError",value:function(){1==this.state.buttonShowError&&this.setState({buttonShowError:!1}),0==this.state.buttonShowError&&this.setState({buttonShowError:!0})}},{key:"setPopout",value:function(e,t){var i=this;"getVersionInfo"==e&&this.setState({snackbar:null,popout:Object(C.jsx)(p.u,{onClick:function(){return i.setState({popout:null})},children:Object(C.jsxs)("div",{style:{backgroundColor:"var(--background_content)",borderRadius:8,width:"85%",position:"relative",padding:"12px"},children:[Object(C.jsx)(p.t,{style:{"font-size":"18px"},icon:Object(C.jsx)(O.a,{width:56,height:56}),children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"}),Object(C.jsxs)(p.k,{children:[Object(C.jsx)(p.o,{before:Object(C.jsx)(g.a,{}),after:Object(C.jsx)(p.g,{size:"s",children:"Beta"}),textWrap:"full",children:Object(C.jsx)(p.G,{style:{"font-size":"14px"},children:" \u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f: 1.0.0 "})}),Object(C.jsx)(p.o,{before:Object(C.jsx)(v.a,{width:24,height:24}),textWrap:"full",children:Object(C.jsx)(p.G,{style:{"font-size":"14px"},children:" \u0414\u0430\u0442\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f: 24.02.2022 "})})]})]})})}),"loadingPage"==e&&this.setState({snackbar:null,popout:Object(C.jsx)(p.u,{children:Object(C.jsx)("div",{style:{backgroundColor:"var(--background_content)",borderRadius:8,width:"auto",position:"relative",padding:"12px"},children:Object(C.jsxs)(p.h,{children:[Object(C.jsx)(p.z,{size:"large",style:{margin:"20px 0"}}),Object(C.jsxs)(p.G,{style:{"text-align":"center",color:"gray"},children:[" ",t," "]})]})})})})}},{key:"changeAppTheme",value:function(){"bright_light"==this.state.activeAppTheme?this.setState({activeAppTheme:"space_gray"}):this.setState({activeAppTheme:"bright_light"})}},{key:"setSheme",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.state.lights.includes(e);t&&(i=!i),this.setState({activeAppTheme:i?"bright_light":"space_gray"}),o.a.send("VKWebAppSetViewSettings",{status_bar_style:i?"dark":"light",action_bar_color:i?"#FFF":"#000"})}},{key:"setActivePopout",value:function(e){var t=this;this.setState({snackbar:null}),e==_&&(e=Object(C.jsx)(p.u,{onClick:function(){return t.setActivePopout(null)},children:Object(C.jsxs)("div",{style:{backgroundColor:"var(--background_content)",borderRadius:8,width:"85%",position:"relative",padding:"12px"},children:[Object(C.jsx)(p.t,{style:{"font-size":"18px"},icon:Object(C.jsx)(O.a,{width:56,height:56}),children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"}),Object(C.jsxs)(p.k,{children:[Object(C.jsx)(p.o,{before:Object(C.jsx)(g.a,{}),after:Object(C.jsx)(p.g,{size:"s",children:"Beta"}),textWrap:"full",children:Object(C.jsx)(p.G,{style:{"font-size":"14px"},children:" \u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f: 1.0.0 "})}),Object(C.jsx)(p.o,{before:Object(C.jsx)(v.a,{width:24,height:24}),textWrap:"full",children:Object(C.jsx)(p.G,{style:{"font-size":"14px"},children:" \u0414\u0430\u0442\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f: 24.02.2022 "})})]})]})})),e=e||null;var i=this.state.popoutHistory?Object(l.a)(this.state.popoutHistory):[];null==e||(-1!==i.indexOf(e)?i=i.splice(0,i.indexOf(e)+1):i.push(e)),this.setState({popout:e,popoutHistory:i})}},{key:"setActiveModal",value:function(e){this.setState({snackbar:null}),e=e||null;var t=this.state.modalHistory?Object(l.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"quotApp",value:function(){o.a.send("VKWebAppClose")}},{key:"componentDidMount",value:function(){var e=this;this.setPopout("loadingPage","\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u0412\u0430\u0448\u0435\u043c \u043f\u0440\u043e\u0444\u0438\u043b\u0435..."),"/getAccess"==window.location.pathname&&setTimeout((function(){e.setState({user:363163789,id:363163789,popout:null}),e.goPage("home","main")}),2e3),o.a.send("VKWebAppGetUserInfo").then((function(t){setTimeout((function(){e.setState({user:t,id:t.id,popout:null}),~z.indexOf(t.id)?e.goPage("home","main"):(e.setState({error:"Error 1: The user is not found in the system. Access denied."}),e.goPage("errors","main"))}),2e3)})).catch((function(t){setTimeout((function(){e.setState({activeView:"errors",activePanel:"main",error:t})}),2e3)})),o.a.subscribe((function(t){var i=t.detail,s=i.type,c=i.data;"VKWebAppUpdateConfig"===s&&e.setSheme(c.sheme)}))}},{key:"render",value:function(){var e=this,t=Object(C.jsx)(p.q,{activeModal:this.state.activeModal,onClose:this.modalBack,children:Object(C.jsx)(p.p,{id:T,onClose:function(){return e.setActiveModal(null)},icon:"space_gray"==e.state.activeAppTheme?Object(C.jsx)(m.a,{width:50,height:50}):Object(C.jsx)(f.a,{width:50,height:50}),header:"\u0421\u043c\u0435\u043d\u0430 \u0442\u0435\u043c\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",subheader:Object(C.jsxs)(p.G,{children:["\u0423 \u0432\u0430\u0441 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430 ",Object(C.jsxs)("b",{children:[" ",e.state.activeAppTheme.replace(/bright_light/gi,"\u0441\u0432\u0435\u0442\u043b\u0430\u044f").replace(/space_gray/gi,"\u0442\u0451\u043c\u043d\u0430\u044f")," "]})," \u0442\u0435\u043c\u0430. "]}),actions:Object(C.jsx)(p.e,{size:"m",mode:(e.state.activeAppTheme,"accent"),appearance:"bright_light"==e.state.activeAppTheme?"light":"dark",onClick:function(){return e.changeAppTheme()},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})})});return Object(C.jsx)(p.f,{scheme:this.state.activeAppTheme,children:Object(C.jsx)(p.a,{children:Object(C.jsx)(p.b,{children:Object(C.jsx)(p.B,{popout:this.state.popout,modal:t,children:Object(C.jsxs)(p.A,{children:[Object(C.jsxs)(p.v,{activeView:this.state.activeView,style:{"margin-bottom":"3%"},children:[Object(C.jsx)(p.H,{id:"home",activePanel:this.state.activePanel,children:Object(C.jsxs)(p.r,{id:"main",children:[Object(C.jsx)(p.s,{children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(C.jsx)(p.k,{children:Object(C.jsx)(p.t,{icon:Object(C.jsx)(y.a,{width:58,height:58}),children:Object(C.jsx)(p.G,{style:{"font-size":"19px"},children:"\u0412\u0435\u0434\u0443\u0442\u0441\u044f \u0442\u0435\u0445. \u0440\u0430\u0431\u043e\u0442\u044b"})})})]})}),Object(C.jsxs)(p.H,{id:"more",activePanel:this.state.activePanel,children:[Object(C.jsxs)(p.r,{id:"main",children:[Object(C.jsx)(p.s,{children:"\u0415\u0449\u0451"}),Object(C.jsx)(p.k,{header:Object(C.jsx)(p.l,{style:{color:"gray"},children:"\u0421\u043c\u0435\u043d\u0430 \u0442\u0435\u043c\u044b"}),children:Object(C.jsx)(p.d,{header:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0435\u043c\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",asideMode:"expand",onClick:function(){return e.setActiveModal(T)},before:"space_gray"==e.state.activeAppTheme?Object(C.jsx)(m.a,{fill:e.sic.icmSG,width:30,height:30}):Object(C.jsx)(f.a,{fill:e.sic.icmBL,width:30,height:30})})}),Object(C.jsxs)(p.k,{header:Object(C.jsx)(p.l,{style:{color:"gray"},children:"\u0412\u0435\u0440\u0441\u0438\u0438"}),children:[Object(C.jsx)(p.d,{header:"\u0412\u0435\u0440\u0441\u0438\u0438 ChatManager Bot",subheader:"\u041d\u043e\u0432\u044b\u0435 \u0438 \u043f\u0440\u043e\u0448\u043b\u044b\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u0447\u0430\u0442-\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430",asideMode:"expand",onClick:function(){return e.sendPush("\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.","cancel")},before:Object(C.jsx)(O.a,{fill:"bright_light"==e.state.activeAppTheme?e.sic.icmBL:e.sic.icmSG,width:30,height:30})}),Object(C.jsx)(p.d,{header:"\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",subheader:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",asideMode:"expand",onClick:function(){return e.setActivePopout(_)},before:Object(C.jsx)(O.a,{fill:"bright_light"==e.state.activeAppTheme?e.sic.icmBL:e.sic.icmSG,width:30,height:30})})]}),Object(C.jsx)(p.j,{children:"\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f: 1.0.0"}),Object(C.jsx)(p.y,{size:16})]}),Object(C.jsxs)(p.r,{id:"updateV",children:[Object(C.jsx)(p.s,{left:Object(C.jsx)(p.m,{onClick:function(){return e.goPanel("main")},children:Object(C.jsx)(k.a,{fill:"612db5"})}),children:"UpVs"}),Object(C.jsxs)(p.k,{children:[Object(C.jsx)(p.h,{children:"updates"==e.state.activeTab?Object(C.jsx)(p.h,{style:{color:"gray"},children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0439 \u043d\u0435\u0442"}):Object(C.jsx)(p.h,{style:{color:"gray"},children:"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0435\u0441\u0442\u044c!"})}),Object(C.jsxs)(p.i,{filled:!0,vertical:"bottom",children:[Object(C.jsx)(p.w,{wide:!0}),Object(C.jsxs)(p.E,{children:[Object(C.jsx)(p.F,{selected:"updates"===this.state.activeTab,onClick:function(){return e.setState({activeTab:"updates"})},after:Object(C.jsx)(p.g,{mode:"prominent",size:"s",children:"+"}),children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"}),Object(C.jsx)(p.F,{selected:"corrections"===this.state.activeTab,onClick:function(){return e.setState({activeTab:"corrections"})},after:Object(C.jsx)(p.g,{mode:"primary",size:"s",children:"-"}),children:"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"})]})]})]})]})]}),Object(C.jsxs)(p.H,{id:"errors",activePanel:this.state.activePanel,children:[Object(C.jsxs)(p.r,{id:"main",children:[Object(C.jsx)(p.s,{children:"Chat Manager"}),Object(C.jsxs)("div",{style:{backgroundColor:"var(--background_content)",borderRadius:8,width:"auto","vertical-align":"center",position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"12px"},children:[Object(C.jsx)(p.h,{children:Object(C.jsx)(w.a,{width:68,height:68,fill:"#ff0f00d1"})}),Object(C.jsx)(p.h,{children:Object(C.jsx)(p.G,{style:{"text-align":"center",color:"gray","font-size":"19px"},children:" \u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u0434\u0430\u0447\u0435 \u043f\u0440\u0430\u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0430. "})}),Object(C.jsx)(p.h,{children:Object(C.jsx)(p.e,{size:"m",mode:"secondary",onClick:this.replButtonError,children:this.state.buttonShowError?"\u0421\u043a\u0440\u044b\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443"})}),e.state.buttonShowError?Object(C.jsxs)(c.a.Fragment,{children:[Object(C.jsx)(p.w,{style:{margin:"12px 0"}}),Object(C.jsx)(p.h,{style:{"border-radius":"8px",background:"#eb776e76"},children:Object(C.jsx)(p.G,{children:e.state.error})}),Object(C.jsx)(p.h,{children:Object(C.jsxs)(p.n,{href:"https://vk.com/im?sel=-207901232",target:"_blank",children:[" ",Object(C.jsx)("b",{children:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432 \u0442\u0435\u0445. \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443"})," "]})})]}):void 0]}),Object(C.jsx)(p.i,{vertical:"bottom",children:Object(C.jsx)(p.h,{children:Object(C.jsx)(p.e,{after:Object(C.jsx)(S.a,{width:24,height:24}),style:{color:"#eb4b3fd8"},size:"l",mode:"neutral",stretched:!0,onClick:this.quotApp,children:" \u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f "})})})]}),Object(C.jsx)(p.r,{id:"whitePage",children:Object(C.jsx)(p.s,{children:" Chat Manager "})})]})]}),this.state.snackbar,"updateV"!=e.state.activePanel&"errors"!=e.state.activeView?Object(C.jsx)(p.i,{vertical:"bottom",children:Object(C.jsxs)(p.C,{itemsLayout:"horizontal",style:{position:"static"},children:[Object(C.jsx)(p.D,{style:{cursor:"pointer"},selected:"home"==e.state.activeView,onClick:function(){return e.goPage("home","main")},text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",children:Object(C.jsx)(A.a,{})}),Object(C.jsx)(p.D,{style:{cursor:"pointer"},selected:"more"==e.state.activeView,onClick:function(){return e.goPage("more","main")},text:"\u0415\u0449\u0451",children:Object(C.jsx)(P.a,{})})]})}):void 0]})})})})})}}]),i}(c.a.Component),B=V;o.a.send("VKWebAppInit"),n.a.render(Object(C.jsx)(B,{}),document.getElementById("root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.b53af9ea.chunk.js.map