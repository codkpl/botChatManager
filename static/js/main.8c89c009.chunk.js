(this.webpackJsonpappchatmanager=this.webpackJsonpappchatmanager||[]).push([[0],{111:function(e,t,i){},124:function(e,t,i){"use strict";i.r(t);var c=i(0),n=i.n(c),a=i(21),s=i.n(a),r=i(13),o=i.n(r),l=i(32),d=i(28),h=i(29),j=i(22),b=i(34),u=i(33),p=(i(24),i(111),i(4)),x=i(126),O=i(127),g=i(128),v=i(129),m=i(130),f=i(131),y=i(132),k=i(125),w=i(133),S=i(134),C=i(135),A=i(2),P="modalCardAppChangeTheme",V=[363163789],T=function(e){Object(b.a)(i,e);var t=Object(u.a)(i);function i(e){var c;return Object(d.a)(this,i),(c=t.call(this,e)).state={activeView:"errors",activePanel:"whitePage",activeAppTheme:"light",activeTab:"updates",snackbar:null,popout:null,activeModal:null,modalHistory:[],user:null,id:null,error:null,buttonShowError:!1},c.modalBack=function(){c.setActiveModal(c.state.modalHistory[c.state.modalHistory.length-2])},c.replButtonError=c.replButtonError.bind(Object(j.a)(c)),c}return Object(h.a)(i,[{key:"goPanel",value:function(e){this.setState({activePanel:e})}},{key:"goPage",value:function(e,t){this.setState({activeView:e,activePanel:t})}},{key:"sendPush",value:function(e,t){var i=this;"cancel"==t&&(t=Object(A.jsx)(x.a,{width:26,height:26})),this.setState({snackbar:Object(A.jsx)(p.x,{layout:"vertical",onClose:function(){return i.setState({snackbar:null})},before:Object(A.jsx)(p.c,{size:26,children:t}),children:e})})}},{key:"replButtonError",value:function(){1==this.state.buttonShowError&&this.setState({buttonShowError:!1}),0==this.state.buttonShowError&&this.setState({buttonShowError:!0})}},{key:"setPopout",value:function(e,t){var i=this;"getVersionInfo"==e&&this.setState({snackbar:null,popout:Object(A.jsx)(p.u,{onClick:function(){return i.setState({popout:null})},children:Object(A.jsxs)("div",{style:{backgroundColor:"var(--background_content)",borderRadius:8,width:"85%",position:"relative",padding:"12px"},children:[Object(A.jsx)(p.t,{style:{"font-size":"18px"},icon:Object(A.jsx)(O.a,{width:56,height:56}),children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"}),Object(A.jsxs)(p.k,{children:[Object(A.jsx)(p.o,{before:Object(A.jsx)(g.a,{}),after:Object(A.jsx)(p.g,{size:"s",children:"Beta"}),textWrap:"full",children:Object(A.jsx)(p.F,{style:{"font-size":"17px"},children:" \u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f: 1.0.0 "})}),Object(A.jsx)(p.o,{before:Object(A.jsx)(v.a,{width:24,height:24}),textWrap:"full",children:Object(A.jsx)(p.F,{style:{"font-size":"17px"},children:" \u0414\u0430\u0442\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f: 24.02.2022 "})})]})]})})}),"loadingPage"==e&&this.setState({snackbar:null,popout:Object(A.jsx)(p.u,{children:Object(A.jsx)("div",{style:{backgroundColor:"var(--background_content)",borderRadius:8,width:"auto",position:"relative",padding:"12px"},children:Object(A.jsxs)(p.h,{children:[Object(A.jsx)(p.y,{size:"large",style:{margin:"20px 0"}}),Object(A.jsxs)(p.F,{style:{"text-align":"center",color:"gray"},children:[" ",t," "]})]})})})})}},{key:"changeAppTheme",value:function(){"light"==this.state.activeAppTheme?(this.setState({activeAppTheme:"dark",activeModal:null}),o.a.send("VKWebAppSetViewSettings",{action_bar_style:"dark",action_bar_color:"#000000"})):(this.setState({activeAppTheme:"light",activeModal:null}),o.a.send("VKWebAppSetViewSettings",{action_bar_style:"light",action_bar_color:"#000000"}))}},{key:"setModal",value:function(e){var t=this;~["modalCardAppChangeTheme"].indexOf(e)?this.setState({popout:null,snackbar:null,activeModal:Object(A.jsx)(p.q,{activeModal:e,onClose:function(){return t.setState({activeModal:null})},children:Object(A.jsx)(p.p,{id:"modalCardAppChangeTheme",onClose:function(){return t.setState({activeModal:null})},icon:Object(A.jsx)(m.a,{width:50,height:50}),header:"\u0421\u043c\u0435\u043d\u0430 \u0442\u0435\u043c\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",subheader:Object(A.jsxs)(p.F,{children:["\u0423 \u0432\u0430\u0441 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430 ",Object(A.jsxs)("b",{children:[" ",t.state.activeAppTheme.replace(/light/gi,"\u0441\u0432\u0435\u0442\u043b\u0430\u044f").replace(/dark/gi,"\u0442\u0451\u043c\u043d\u0430\u044f")," "]})," \u0442\u0435\u043c\u0430. "]}),actions:Object(A.jsx)(p.e,{size:"m",mode:"primary",onClick:function(){return t.changeAppTheme()},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})})})}):this.sendPush("\u041c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043e\u043d\u043e \u0431\u044b\u043b\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e \u0438\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e.","cancel")}},{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(l.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"quotApp",value:function(){o.a.send("VKWebAppClose")}},{key:"componentDidMount",value:function(){var e=this;this.setPopout("loadingPage","\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u0412\u0430\u0448\u0435\u043c \u043f\u0440\u043e\u0444\u0438\u043b\u0435..."),"/getAccess"==window.location.pathname&&setTimeout((function(){e.setState({user:363163789,id:363163789,popout:null}),e.goPage("home","main")}),2e3),o.a.send("VKWebAppGetUserInfo").then((function(t){setTimeout((function(){e.setState({user:t,id:t.id,popout:null}),~V.indexOf(t.id)?e.goPage("home","main"):(e.setState({error:"Error 1: The user is not found in the system. Access denied."}),e.goPage("errors","main"))}),2e3)})).catch((function(t){setTimeout((function(){e.setState({activeView:"errors",activePanel:"main",error:t})}),2e3)})),o.a.subscribe((function(t){var i=t.detail,c=i.type,n=i.data;"VKWebAppUpdateConfig"===c&&(sheme=n.sheme,e.setState({activeAppTheme:sheme}))})),o.a.send("VKWebAppSetViewSettings",{action_bar_style:"dark",action_bar_color:"#000000"}),o.a.send("VKWebAppSetViewSettings",{action_bar_style:"light",action_bar_color:"#00152e"})}},{key:"render",value:function(){var e=this,t=Object(A.jsx)(p.q,{activeModal:this.state.activeModal,onClose:this.modalBack,children:Object(A.jsx)(p.p,{id:P,onClose:function(){return e.setActiveModal(null)},icon:Object(A.jsx)(m.a,{width:50,height:50}),header:"\u0421\u043c\u0435\u043d\u0430 \u0442\u0435\u043c\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",subheader:Object(A.jsxs)(p.F,{children:["\u0423 \u0432\u0430\u0441 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430 ",Object(A.jsxs)("b",{children:[" ",e.state.activeAppTheme.replace(/light/gi,"\u0441\u0432\u0435\u0442\u043b\u0430\u044f").replace(/dark/gi,"\u0442\u0451\u043c\u043d\u0430\u044f")," "]})," \u0442\u0435\u043c\u0430. "]}),actions:Object(A.jsx)(p.e,{size:"m",mode:"primary",onClick:function(){return e.changeAppTheme()},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})})});return Object(A.jsx)(p.f,{appearance:this.state.activeAppTheme,children:Object(A.jsx)(p.a,{children:Object(A.jsx)(p.b,{children:Object(A.jsx)(p.A,{popout:this.state.popout,modal:t,children:Object(A.jsxs)(p.z,{children:[Object(A.jsxs)(p.v,{activeView:this.state.activeView,style:{"margin-bottom":"3%"},children:[Object(A.jsx)(p.G,{id:"home",activePanel:this.state.activePanel,children:Object(A.jsxs)(p.r,{id:"main",children:[Object(A.jsx)(p.s,{children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(A.jsx)(p.k,{children:Object(A.jsx)(p.t,{icon:Object(A.jsx)(f.a,{width:58,height:58}),children:Object(A.jsx)(p.F,{style:{"font-size":"19px"},children:"\u0412\u0435\u0434\u0443\u0442\u0441\u044f \u0442\u0435\u0445. \u0440\u0430\u0431\u043e\u0442\u044b"})})})]})}),Object(A.jsxs)(p.G,{id:"more",activePanel:this.state.activePanel,children:[Object(A.jsxs)(p.r,{id:"main",children:[Object(A.jsx)(p.s,{children:"\u0415\u0449\u0451"}),Object(A.jsx)(p.k,{header:Object(A.jsx)(p.l,{style:{color:"gray"},children:"\u0421\u043c\u0435\u043d\u0430 \u0442\u0435\u043c\u044b"}),children:Object(A.jsx)(p.d,{header:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0435\u043c\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",asideMode:"expand",onClick:function(){return e.setActiveModal(P)},before:Object(A.jsx)(p.c,{style:{"background-color":"#d4b8d9af"},size:38,children:Object(A.jsx)(m.a,{fill:"black",width:30,height:30})})})}),Object(A.jsxs)(p.k,{header:Object(A.jsx)(p.l,{style:{color:"gray"},children:"\u0412\u0435\u0440\u0441\u0438\u0438"}),children:[Object(A.jsx)(p.d,{header:"\u0412\u0435\u0440\u0441\u0438\u0438 ChatManager Bot",subheader:"\u041d\u043e\u0432\u044b\u0435 \u0438 \u043f\u0440\u043e\u0448\u043b\u044b\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u0447\u0430\u0442-\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430",asideMode:"expand",onClick:function(){return e.sendPush("\u0414\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043b\u0438 \u043e\u043d\u0430 \u0431\u044b\u043b\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0430.","cancel")},before:Object(A.jsx)(p.c,{style:{"background-color":"#d4b8d9af"},size:38,children:Object(A.jsx)(O.a,{fill:"black",width:30,height:30})})}),Object(A.jsx)(p.d,{header:"\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",subheader:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",asideMode:"expand",onClick:function(){return e.setPopout("getVersionInfo")},before:Object(A.jsx)(p.c,{style:{"background-color":"#d4b8d9af"},size:38,children:Object(A.jsx)(O.a,{fill:"black",width:30,height:30})})})]}),Object(A.jsx)(p.j,{children:"\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f: 1.0.0"})]}),Object(A.jsxs)(p.r,{id:"updateV",children:[Object(A.jsx)(p.s,{left:Object(A.jsx)(p.m,{onClick:function(){return e.goPanel("main")},children:Object(A.jsx)(y.a,{fill:"612db5"})}),children:"UpVs"}),Object(A.jsxs)(p.k,{children:[Object(A.jsx)(p.h,{children:"updates"==e.state.activeTab?Object(A.jsx)(p.h,{style:{color:"gray"},children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0439 \u043d\u0435\u0442"}):Object(A.jsx)(p.h,{style:{color:"gray"},children:"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0435\u0441\u0442\u044c!"})}),Object(A.jsxs)(p.i,{filled:!0,vertical:"bottom",children:[Object(A.jsx)(p.w,{wide:!0}),Object(A.jsxs)(p.D,{children:[Object(A.jsx)(p.E,{selected:"updates"===this.state.activeTab,onClick:function(){return e.setState({activeTab:"updates"})},after:Object(A.jsx)(p.g,{mode:"prominent",size:"s",children:"+"}),children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"}),Object(A.jsx)(p.E,{selected:"corrections"===this.state.activeTab,onClick:function(){return e.setState({activeTab:"corrections"})},after:Object(A.jsx)(p.g,{mode:"primary",size:"s",children:"-"}),children:"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"})]})]})]})]})]}),Object(A.jsxs)(p.G,{id:"errors",activePanel:this.state.activePanel,children:[Object(A.jsxs)(p.r,{id:"main",children:[Object(A.jsx)(p.s,{children:"Chat Manager"}),Object(A.jsxs)("div",{style:{backgroundColor:"var(--background_content)",borderRadius:8,width:"auto","vertical-align":"center",position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"12px"},children:[Object(A.jsx)(p.h,{children:Object(A.jsx)(k.a,{width:68,height:68,fill:"#ff0f00d1"})}),Object(A.jsx)(p.h,{children:Object(A.jsx)(p.F,{style:{"text-align":"center",color:"gray","font-size":"19px"},children:" \u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u0434\u0430\u0447\u0435 \u043f\u0440\u0430\u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0430. "})}),Object(A.jsx)(p.h,{children:Object(A.jsx)(p.e,{size:"m",mode:"secondary",onClick:this.replButtonError,children:this.state.buttonShowError?"\u0421\u043a\u0440\u044b\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443"})}),e.state.buttonShowError?Object(A.jsxs)(n.a.Fragment,{children:[Object(A.jsx)(p.w,{style:{margin:"12px 0"}}),Object(A.jsx)(p.h,{style:{"border-radius":"8px",background:"#eb776e76"},children:Object(A.jsx)(p.F,{children:e.state.error})}),Object(A.jsx)(p.h,{children:Object(A.jsxs)(p.n,{href:"https://vk.com/im?sel=-207901232",target:"_blank",children:[" ",Object(A.jsx)("b",{children:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432 \u0442\u0435\u0445. \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443"})," "]})})]}):void 0]}),Object(A.jsx)(p.i,{vertical:"bottom",children:Object(A.jsx)(p.h,{children:Object(A.jsx)(p.e,{after:Object(A.jsx)(w.a,{width:24,height:24}),style:{color:"#eb4b3fd8"},size:"l",mode:"neutral",stretched:!0,onClick:this.quotApp,children:" \u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f "})})})]}),Object(A.jsx)(p.r,{id:"whitePage",children:Object(A.jsx)(p.s,{children:" Chat Manager "})})]})]}),this.state.snackbar,"updateV"!=e.state.activePanel&"errors"!=e.state.activeView?Object(A.jsx)(p.i,{vertical:"bottom",children:Object(A.jsxs)(p.B,{itemsLayout:"horizontal",style:{position:"static"},children:[Object(A.jsx)(p.C,{style:{cursor:"pointer"},selected:"home"==e.state.activeView,onClick:function(){return e.goPage("home","main")},text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",children:Object(A.jsx)(S.a,{})}),Object(A.jsx)(p.C,{style:{cursor:"pointer"},selected:"more"==e.state.activeView,onClick:function(){return e.goPage("more","main")},text:"\u0415\u0449\u0451",children:Object(A.jsx)(C.a,{})})]})}):void 0]})})})})})}}]),i}(n.a.Component);o.a.send("VKWebAppInit"),s.a.render(Object(A.jsx)(T,{}),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.8c89c009.chunk.js.map