(this.webpackJsonpappchatmanager=this.webpackJsonpappchatmanager||[]).push([[0],{110:function(e,t,i){},123:function(e,t,i){"use strict";i.r(t);var c=i(0),s=i.n(c),a=i(21),n=i.n(a),r=i(13),o=i.n(r),l=i(24),h=i(29),d=i(30),j=i(22),b=i(34),p=i(33),u=(i(25),i(110),i(3)),x=i(125),O=i(126),g=i(127),m=i(128),v=i(129),f=i(130),y=i(131),k=i(132),A=i(124),S=i(133),w=i(134),C=i(135),P=i(1),_="modalCardAppChangeTheme",T=[363163789],z=function(e){Object(b.a)(i,e);var t=Object(p.a)(i);function i(e){var c;return Object(h.a)(this,i),(c=t.call(this,e)).state={lights:["bright_light","space_gray"],color:"black",activeView:"errors",activePanel:"whitePage",lc:null,activeAppTheme:"bright_light",activeTab:"updates",snackbar:null,popout:null,popoutHistory:[],activeModal:null,modalHistory:[],user:null,id:null,error:null,buttonShowError:!1},c.modalBack=function(){c.setActiveModal(c.state.modalHistory[c.state.modalHistory.length-2])},c.popoutBack=function(){c.setActivePopout([c.state.modalHistory.length-2])},c.replButtonError=c.replButtonError.bind(Object(j.a)(c)),c}return Object(d.a)(i,[{key:"goPanel",value:function(e){this.setState({activePanel:e})}},{key:"goPage",value:function(e,t){this.setState({activeView:e,activePanel:t})}},{key:"sendPush",value:function(e,t){var i=this;"cancel"==t&&(t=Object(P.jsx)(x.a,{width:26,height:26})),this.setState({snackbar:Object(P.jsx)(u.x,{layout:"vertical",onClose:function(){return i.setState({snackbar:null})},before:Object(P.jsx)(u.c,{size:26,children:t}),children:e})})}},{key:"replButtonError",value:function(){1==this.state.buttonShowError&&this.setState({buttonShowError:!1}),0==this.state.buttonShowError&&this.setState({buttonShowError:!0})}},{key:"setPopout",value:function(e,t){var i=this;"test"==e&&this.setState({snackbar:null,popout:Object(P.jsx)(u.u,{onClick:function(){return i.setState({popout:null})},children:Object(P.jsx)("div",{style:{backgroundColor:"var(--background_content)",borderRadius:8,width:"85%",position:"relative",padding:"12px"},children:Object(P.jsx)(u.k,{children:Object(P.jsx)(u.h,{children:Object(P.jsxs)("b",{children:[" ",t," "]})})})})})}),"loadingPage"==e&&this.setState({snackbar:null,popout:Object(P.jsx)(u.u,{children:Object(P.jsx)("div",{style:{backgroundColor:"var(--background_content)",borderRadius:8,width:"auto",position:"relative",padding:"12px"},children:Object(P.jsxs)(u.h,{children:[Object(P.jsx)(u.z,{size:"large",style:{margin:"20px 0"}}),Object(P.jsxs)(u.G,{style:{textAlign:"center",color:"gray"},children:[" ",t," "]})]})})})})}},{key:"changeAppTheme",value:function(){"bright_light"==this.state.activeAppTheme&&this.setState({activeAppTheme:"space_gray",color:"white"}),"space_gray"==this.state.activeAppTheme&&this.setState({activeAppTheme:"bright_light",color:"black"})}},{key:"setSheme",value:function(e){"birght_light"==e?(this.setState({activeAppTheme:e,color:"black"}),o.a.send("VKWebAppSetViewSettings",{status_bar_style:"dark",action_bar_color:"#FFF"})):(this.setState({activeAppTheme:e,color:"white"}),o.a.send("VKWebAppSetViewSettings",{status_bar_style:"light",action_bar_color:"#000"}))}},{key:"setActivePopout",value:function(e){var t=this;this.setState({snackbar:null}),"popoutVersionApp"==e&&(e=Object(P.jsx)(u.u,{onClick:function(){return t.setActivePopout(null)},children:Object(P.jsxs)("div",{style:{backgroundColor:"var(--background_content)",borderRadius:8,width:"85%",position:"relative",padding:"12px"},children:[Object(P.jsx)(u.t,{style:{fontSize:"18px"},icon:Object(P.jsx)(O.a,{width:56,height:56}),children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"}),Object(P.jsxs)(u.k,{children:[Object(P.jsx)(u.o,{before:Object(P.jsx)(g.a,{}),after:Object(P.jsx)(u.g,{size:"s",children:"Beta"}),textWrap:"full",children:Object(P.jsx)(u.G,{style:{fontSize:"14px"},children:" \u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f: 1.0.0 "})}),Object(P.jsx)(u.o,{before:Object(P.jsx)(m.a,{width:24,height:24}),textWrap:"full",children:Object(P.jsx)(u.G,{style:{fontSize:"14px"},children:" \u0414\u0430\u0442\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f: 24.02.2022 "})})]})]})})),e=e||null;var i=this.state.popoutHistory?Object(l.a)(this.state.popoutHistory):[];null==e||(-1!==i.indexOf(e)?i=i.splice(0,i.indexOf(e)+1):i.push(e)),this.setState({popout:e,popoutHistory:i})}},{key:"setActiveModal",value:function(e){this.setState({snackbar:null}),e=e||null;var t=this.state.modalHistory?Object(l.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"quotApp",value:function(){o.a.send("VKWebAppClose")}},{key:"componentDidMount",value:function(){var e=this;this.setPopout("loadingPage","\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u0412\u0430\u0448\u0435\u043c \u043f\u0440\u043e\u0444\u0438\u043b\u0435..."),"/getAccess"==window.location.pathname&&setTimeout((function(){e.setState({user:363163789,id:363163789,popout:null}),e.goPage("home","main")}),2e3),o.a.subscribe((function(t){var i=t.detail,c=i.type,s=i.data;"VKWebAppUpdateConfig"===c&&e.setSheme(s.sheme),"VKWebAppChangeFragment"===c&&(e.setLC(s.location),o.a.send("VKWebAppSetLocation",{location:""}))})),o.a.send("VKWebAppGetUserInfo").then((function(t){setTimeout((function(){e.setState({user:t,id:t.id,popout:null}),~T.indexOf(t.id)?e.goPage("home","main"):(e.setState({error:"Error 1: The user is not found in the system. Access denied."}),e.goPage("errors","main"))}),2e3)})).catch((function(t){setTimeout((function(){e.setState({activeView:"errors",activePanel:"main",error:t})}),2e3)}))}},{key:"render",value:function(){var e=this,t=Object(P.jsxs)(u.q,{activeModal:this.state.activeModal,onClose:this.modalBack,children:[Object(P.jsx)(u.p,{id:_,onClose:function(){return e.setActiveModal(null)},icon:"space_gray"==e.state.activeAppTheme?Object(P.jsx)(v.a,{width:50,height:50}):Object(P.jsx)(f.a,{width:50,height:50}),header:"\u0421\u043c\u0435\u043d\u0430 \u0442\u0435\u043c\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",subheader:Object(P.jsxs)(u.G,{children:["\u0423 \u0432\u0430\u0441 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430 ",Object(P.jsxs)("b",{children:[" ",e.state.activeAppTheme.replace(/bright_light/gi,"\u0441\u0432\u0435\u0442\u043b\u0430\u044f").replace(/space_gray/gi,"\u0442\u0451\u043c\u043d\u0430\u044f")," "]})," \u0442\u0435\u043c\u0430. "]}),actions:Object(P.jsx)(u.e,{size:"m",mode:(e.state.activeAppTheme,"accent"),appearance:"bright_light"==e.state.activeAppTheme?"light":"dark",onClick:function(){return e.changeAppTheme()},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})}),Object(P.jsx)(u.p,{id:"modalCardAppSnackbar",onClose:function(){return e.setActiveModal(null)},header:"\u0421\u043c\u0435\u043d\u0430 \u0442\u0435\u043c\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",subheader:Object(P.jsxs)(u.G,{children:["\u0423 \u0432\u0430\u0441 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430 ",Object(P.jsxs)("b",{children:[" ",e.state.activeAppTheme.replace(/bright_light/gi,"\u0441\u0432\u0435\u0442\u043b\u0430\u044f").replace(/space_gray/gi,"\u0442\u0451\u043c\u043d\u0430\u044f")," "]})," \u0442\u0435\u043c\u0430. "]}),actions:Object(P.jsx)(u.e,{size:"m",mode:(e.state.activeAppTheme,"accent"),appearance:"bright_light"==e.state.activeAppTheme?"light":"dark",onClick:function(){return e.changeAppTheme()},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})})]});return Object(P.jsx)(u.f,{scheme:this.state.activeAppTheme,children:Object(P.jsx)(u.a,{children:Object(P.jsx)(u.b,{children:Object(P.jsx)(u.B,{popout:this.state.popout,modal:t,children:Object(P.jsxs)(u.A,{children:[Object(P.jsxs)(u.v,{activeView:this.state.activeView,style:{marginBottom:"3%"},children:[Object(P.jsx)(u.H,{id:"home",activePanel:this.state.activePanel,children:Object(P.jsxs)(u.r,{id:"main",children:[Object(P.jsx)(u.s,{children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(P.jsx)(u.k,{children:Object(P.jsx)(u.t,{icon:Object(P.jsx)(y.a,{width:58,height:58}),children:Object(P.jsx)(u.G,{style:{fontSize:"19px"},children:"\u0412\u0435\u0434\u0443\u0442\u0441\u044f \u0442\u0435\u0445. \u0440\u0430\u0431\u043e\u0442\u044b"})})})]})}),Object(P.jsxs)(u.H,{id:"more",activePanel:this.state.activePanel,children:[Object(P.jsxs)(u.r,{id:"main",children:[Object(P.jsx)(u.s,{children:"\u0415\u0449\u0451"}),Object(P.jsx)(u.k,{header:Object(P.jsx)(u.l,{style:{color:"gray"},children:"\u0421\u043c\u0435\u043d\u0430 \u0442\u0435\u043c\u044b"}),children:Object(P.jsx)(u.d,{header:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0435\u043c\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",asideMode:"expand",onClick:function(){return e.setActiveModal(_)},before:Object(P.jsx)(v.a,{fill:this.state.color,width:30,height:30})})}),Object(P.jsxs)(u.k,{header:Object(P.jsx)(u.l,{style:{color:"gray"},children:"\u0412\u0435\u0440\u0441\u0438\u0438"}),children:[Object(P.jsx)(u.d,{header:"\u0412\u0435\u0440\u0441\u0438\u0438 ChatManager Bot",subheader:"\u041d\u043e\u0432\u044b\u0435 \u0438 \u043f\u0440\u043e\u0448\u043b\u044b\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u0447\u0430\u0442-\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430",asideMode:"expand",onClick:function(){return e.sendPush("\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.","cancel")},before:Object(P.jsx)(O.a,{fill:this.state.color,width:30,height:30})}),Object(P.jsx)(u.d,{header:"\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",subheader:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",asideMode:"expand",onClick:function(){return e.goPage("more","appInfo")},before:Object(P.jsx)(O.a,{fill:this.state.color,width:30,height:30})})]}),Object(P.jsx)(u.j,{children:"\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f: 1.0.0"}),Object(P.jsx)(u.y,{size:16})]}),Object(P.jsxs)(u.r,{id:"updateV",children:[Object(P.jsx)(u.s,{left:Object(P.jsx)(u.m,{onClick:function(){return e.goPanel("main")},children:Object(P.jsx)(k.a,{fill:"612db5"})}),children:"UpVs"}),Object(P.jsxs)(u.k,{children:[Object(P.jsx)(u.h,{children:"updates"==e.state.activeTab?Object(P.jsx)(u.h,{style:{color:"gray"},children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0439 \u043d\u0435\u0442"}):Object(P.jsx)(u.h,{style:{color:"gray"},children:"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0435\u0441\u0442\u044c!"})}),Object(P.jsxs)(u.i,{filled:!0,vertical:"bottom",children:[Object(P.jsx)(u.w,{wide:!0}),Object(P.jsxs)(u.E,{children:[Object(P.jsx)(u.F,{selected:"updates"===this.state.activeTab,onClick:function(){return e.setState({activeTab:"updates"})},after:Object(P.jsx)(u.g,{mode:"prominent",size:"s",children:"+"}),children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"}),Object(P.jsx)(u.F,{selected:"corrections"===this.state.activeTab,onClick:function(){return e.setState({activeTab:"corrections"})},after:Object(P.jsx)(u.g,{mode:"primary",size:"s",children:"-"}),children:"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"})]})]})]})]}),Object(P.jsxs)(u.r,{id:"appInfo",children:[Object(P.jsx)(u.s,{left:Object(P.jsx)(u.m,{onClick:function(){return e.goPage("more","main")},children:Object(P.jsx)(k.a,{fill:"612db5"})}),children:" \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),Object(P.jsxs)(u.k,{style:{margin:"2%"},children:[Object(P.jsx)(u.h,{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:Object(P.jsx)(u.c,{mode:"image",size:96,src:"https://psv4.userapi.com/c237131/u363163789/docs/d57/9c723fde8bb9/appIcon_-_576kh576.png?extra=4xKh99PkQKqXCPqoGEhKQgxewBjg4oavPPR05IJqHUdGKeqfpsOWRGW-spH9muuWg5b1qixzxe-jwQIdLhGsaPq8DjDAOO7vE0s5RZO-z5B7npY1i2Eu-PMfDs2R1K47fB8GSfx2yI3CltVS8alNiiYR"})}),Object(P.jsxs)(u.h,{children:[Object(P.jsx)(u.o,{before:Object(P.jsx)(g.a,{}),after:Object(P.jsx)(u.g,{size:"s",children:"Beta"}),textWrap:"full",children:Object(P.jsx)(u.G,{style:{fontSize:"18px"},children:" \u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f: 1.0.0 "})}),Object(P.jsx)(u.o,{before:Object(P.jsx)(m.a,{width:24,height:24}),textWrap:"full",children:Object(P.jsx)(u.G,{style:{fontSize:"18px"},children:" \u0414\u0430\u0442\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f: 24.02.2022 "})})]})]})]})]}),Object(P.jsxs)(u.H,{id:"errors",activePanel:this.state.activePanel,children:[Object(P.jsxs)(u.r,{id:"main",children:[Object(P.jsx)(u.s,{children:"Chat Manager"}),Object(P.jsxs)("div",{style:{backgroundColor:"var(--background_content)",borderRadius:8,width:"auto",verticalAlign:"center",position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"12px"},children:[Object(P.jsx)(u.h,{children:Object(P.jsx)(A.a,{width:68,height:68,fill:"#ff0f00d1"})}),Object(P.jsx)(u.h,{children:Object(P.jsx)(u.G,{style:{textAlign:"center",color:"gray",fontSize:"19px"},children:" \u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u0434\u0430\u0447\u0435 \u043f\u0440\u0430\u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0430. "})}),Object(P.jsx)(u.h,{children:Object(P.jsx)(u.e,{size:"m",mode:"secondary",onClick:this.replButtonError,children:this.state.buttonShowError?"\u0421\u043a\u0440\u044b\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443"})}),e.state.buttonShowError?Object(P.jsxs)(s.a.Fragment,{children:[Object(P.jsx)(u.w,{style:{margin:"12px 0"}}),Object(P.jsx)(u.h,{style:{borderRadius:"8px",background:"#eb776e76"},children:Object(P.jsx)(u.G,{children:e.state.error})}),Object(P.jsx)(u.h,{children:Object(P.jsxs)(u.n,{href:"https://vk.com/im?sel=-207901232",target:"_blank",children:[" ",Object(P.jsx)("b",{children:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432 \u0442\u0435\u0445. \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443"})," "]})})]}):void 0]}),Object(P.jsx)(u.i,{vertical:"bottom",children:Object(P.jsx)(u.h,{children:Object(P.jsx)(u.e,{after:Object(P.jsx)(S.a,{width:24,height:24}),style:{color:"#eb4b3fd8"},size:"l",mode:"overlay",stretched:!0,onClick:this.quotApp,children:" \u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f "})})})]}),Object(P.jsx)(u.r,{id:"whitePage",children:Object(P.jsx)(u.s,{children:" Chat Manager "})})]})]}),this.state.snackbar,"updateV"!=e.state.activePanel&"errors"!=e.state.activeView?Object(P.jsx)(u.i,{vertical:"bottom",children:Object(P.jsxs)(u.C,{itemsLayout:"horizontal",style:{position:"static"},children:[Object(P.jsx)(u.D,{style:{cursor:"pointer"},selected:"home"==e.state.activeView,onClick:function(){return e.goPage("home","main")},text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",children:Object(P.jsx)(w.a,{})}),Object(P.jsx)(u.D,{style:{cursor:"pointer"},selected:"more"==e.state.activeView,onClick:function(){return e.goPage("more","main")},text:"\u0415\u0449\u0451",children:Object(P.jsx)(C.a,{})})]})}):void 0]})})})})})}}]),i}(s.a.Component);o.a.send("VKWebAppInit"),n.a.render(Object(P.jsx)(z,{}),document.getElementById("root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.8fcab263.chunk.js.map