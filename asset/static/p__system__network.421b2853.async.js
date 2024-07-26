"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5283],{80821:function(X,M,r){r.d(M,{Z:function(){return f}});var N=r(5574),v=r.n(N),L=r(93246),g=r(54006),b=r(31418),D=r(86738),E=r(14726),S=r(83062),T=r(62435),F=r(86074);function f(s){var y=(0,T.useState)(!1),w=v()(y,2),A=w[0],R=w[1],B=b.Z.useApp(),_=(0,g.useIntl)(),P=function(){R(!0),s.action().then(function(x){if(R(!1),typeof s.onSuccess=="function"&&s.onSuccess(x),s.messageSuccess){var u="";typeof s.messageSuccess=="function"?u=s.messageSuccess(x):u=s.messageSuccess,u.indexOf(".")>-1&&(u=_.formatMessage({id:u})),s.asynced?(0,L.Rk)(B,u):(0,L.$h)(B,u)}}).catch(function(x){R(!1),typeof s.onError=="function"&&s.onError(x)})};return s.confirm?(0,F.jsx)(D.Z,{style:{width:500},title:"\u63D0\u793A",description:s.confirm,onConfirm:P,okText:"Yes",cancelText:"No",children:(0,F.jsx)(E.ZP,{disabled:s.disabled,icon:s.icon,loading:A,danger:s.danger,type:s.type,children:s.children})}):(0,F.jsx)(S.Z,{title:s.tips,children:(0,F.jsx)(E.ZP,{disabled:s.disabled,icon:s.icon,loading:A,onClick:P,danger:s.danger,type:s.type,children:s.children})})}},75389:function(X,M,r){r.r(M),r.d(M,{default:function(){return oe}});var N=r(15009),v=r.n(N),L=r(99289),g=r.n(L),b=r(5574),D=r.n(b),E=r(80821),S=r(14946),T=r(93246),F=r(184),f=r(5966),s=r(62370),y=r(97462),w=r(52688),A=r(24739),R=r(17186),B=r(31418),_=r(14726),P=r(34041),K=r(71230),x=r(15746),u=r(62435),e=r(86074),p=(0,u.forwardRef)(function(j,J){var k=(0,u.useState)(!1),W=D()(k,2),Y=W[0],Q=W[1],z=B.Z.useApp(),n=(0,u.useRef)();return(0,u.useImperativeHandle)(J,function(){return{}}),(0,e.jsxs)(F.a,{name:"create",title:"\u521B\u5EFA\u7F51\u7EDC",open:Y,onOpenChange:function(I){Q(I)},formRef:n,trigger:(0,e.jsx)(_.ZP,{type:"primary",children:"\u521B\u5EFA\u7F51\u7EDC"}),onFinish:function(){var V=g()(v()().mark(function I(l){var Z,$,d,m,t,i,h,o,C,O,H,q;return v()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return l.driver=="macvlan"&&(l.driverOptionName||(l.driverOptionName=[],l.driverOptionValue=[]),l.driverOptionName.push("parent"),l.driverOptionValue.push(l.macvlanParentCard)),U.next=3,(0,S.XY)({name:l.name,driver:(Z=l.driver)!==null&&Z!==void 0?Z:"bridge",ipSubnet:($=l.ipSubnet)!==null&&$!==void 0?$:"",ipGateway:(d=l.ipGateway)!==null&&d!==void 0?d:"",ipRange:(m=l.ipRange)!==null&&m!==void 0?m:"",ipAux:l.ipAux,enableIpV6:(t=l.enableIpV6)!==null&&t!==void 0?t:!1,ipV6Subnet:(i=l.ipV6Subnet)!==null&&i!==void 0?i:"",ipV6Gateway:(h=l.ipV6Gateway)!==null&&h!==void 0?h:"",ipV6Range:(o=l.ipV6Range)!==null&&o!==void 0?o:"",ipV6Aux:l.ipV6Aux,driverOption:l.driverOption,internal:(C=l.internal)!==null&&C!==void 0?C:!1,attachable:(O=l.attachable)!==null&&O!==void 0?O:!1});case 3:if(H=U.sent,!(H&&H.data&&H.data.id!="")){U.next=9;break}return(0,T.$h)(z,"\u521B\u5EFA\u7F51\u7EDC\u6210\u529F"),j.onFinish&&j.onFinish(),(q=n.current)===null||q===void 0||q.resetFields(),U.abrupt("return",!0);case 9:case"end":return U.stop()}},I)}));return function(I){return V.apply(this,arguments)}}(),children:[(0,e.jsx)(f.Z,{label:"\u540D\u79F0",tooltip:"\u4E0D\u914D\u7F6E\u5B50\u7F51\u65F6\uFF0C\u4F1A\u81EA\u52A8\u751F\u6210",name:"name",required:!0,rules:[{required:!0}],placeholder:"\u6307\u5B9A\u552F\u4E00\u7684\u7F51\u7EDC\u540D\u79F0"}),(0,e.jsx)(s.Z,{label:"\u7C7B\u578B",name:"driver",children:(0,e.jsxs)(P.Z,{defaultValue:"bridge",children:[(0,e.jsx)(P.Z.Option,{value:"bridge",children:"bridge"}),(0,e.jsx)(P.Z.Option,{value:"ipvlan",children:"ipvlan"}),(0,e.jsx)(P.Z.Option,{value:"macvlan",children:"macvlan"}),(0,e.jsx)(P.Z.Option,{value:"overlay",children:"overlay"})]})}),(0,e.jsx)(y.Z,{name:["driver"],children:function(I){var l=I.driver;if(l=="macvlan")return(0,e.jsx)(f.Z,{label:"\u7236\u7F51\u5361",name:"macvlanParentCard"})}}),(0,e.jsxs)(K.Z,{children:[(0,e.jsx)(x.Z,{span:8,children:(0,e.jsx)(w.Z,{label:"\u81EA\u5B9AIPV4\u5B50\u7F51",name:"userIpV4Subnet"})}),(0,e.jsx)(x.Z,{span:8,children:(0,e.jsx)(w.Z,{name:"internal",label:"\u9694\u79BB\u5916\u90E8\u8BBF\u95EE",initialValue:!1})}),(0,e.jsx)(x.Z,{span:8,children:(0,e.jsx)(w.Z,{name:"attachable",label:"\u5141\u8BB8\u624B\u52A8\u9644\u52A0\u5BB9\u5668",initialValue:!1})})]}),(0,e.jsx)(y.Z,{name:["userIpV4Subnet"],children:function(I){var l=I.userIpV4Subnet;if(l)return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(A.UW,{title:"IPV4\u914D\u7F6E",children:[(0,e.jsx)(f.Z,{label:"\u5B50\u7F51",name:"ipSubnet",width:"md",placeholder:"\u4F8B\u5982: 172.20.0.0/16"}),(0,e.jsx)(f.Z,{label:"\u7F51\u5173",name:"ipGateway",width:"md",placeholder:"\u4F8B\u5982: 172.20.10.11"}),(0,e.jsx)(f.Z,{label:"Ip\u8303\u56F4",name:"ipRange",width:"md",placeholder:"\u4F8B\u5982: 172.20.10.128/25"})]}),(0,e.jsx)(R.u,{name:"ipAux",label:"\u6392\u9664Ip",children:(0,e.jsxs)(A.UW,{children:[(0,e.jsx)(f.Z,{label:"\u8BBE\u5907\u540D\u79F0",name:"ipAuxDevice",width:"md"}),(0,e.jsx)(f.Z,{label:"Ip\u5730\u5740",name:"ipAuxAddress",width:"md"})]})})]})}}),(0,e.jsxs)(K.Z,{children:[(0,e.jsx)(x.Z,{span:8,children:(0,e.jsx)(w.Z,{label:"\u542F\u7528IPV6",name:"enableIpV6"})}),(0,e.jsx)(x.Z,{children:(0,e.jsx)(w.Z,{label:"\u81EA\u5B9AIPV6\u5B50\u7F51",name:"userIpV6Subnet",fieldProps:{onChange:function(I,l){if(I){var Z;(Z=n.current)===null||Z===void 0||Z.setFieldValue("enableIpV6",!0)}}}})})]}),(0,e.jsx)(y.Z,{name:["userIpV6Subnet"],children:function(I){var l=I.userIpV6Subnet;if(l)return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(A.UW,{title:"IPV6\u914D\u7F6E",children:[(0,e.jsx)(f.Z,{label:"\u5B50\u7F51",name:"ipV6Subnet",width:"md",placeholder:"\u4F8B\u5982: 2001:db8::/48"}),(0,e.jsx)(f.Z,{label:"\u7F51\u5173",name:"ipV6Gateway",width:"md",placeholder:"\u4F8B\u5982: 2001:db8::1"}),(0,e.jsx)(f.Z,{label:"Ip\u8303\u56F4",name:"ipV6Range",width:"md",placeholder:"\u4F8B\u5982: 2001:db8::/64"})]}),(0,e.jsx)(R.u,{name:"ipV6Aux",label:"\u6392\u9664Ip",children:(0,e.jsxs)(A.UW,{children:[(0,e.jsx)(f.Z,{label:"\u8BBE\u5907\u540D\u79F0",name:"ipAuxDevice",width:"md"}),(0,e.jsx)(f.Z,{label:"Ip\u5730\u5740",name:"ipAuxAddress",width:"md"})]})})]})}}),(0,e.jsx)(R.u,{name:"driverOption",label:"\u81EA\u5B9A\u4E49\u9A71\u52A8\u914D\u7F6E",children:(0,e.jsxs)(A.UW,{children:[(0,e.jsx)(f.Z,{label:"\u540D\u79F0",name:"driverOptionName",width:"md"}),(0,e.jsx)(f.Z,{label:"\u503C",name:"driverOptionValue",width:"md"})]})})]})}),a=p,re=r(6409),te=r(43425),ae=r(48689),ue=r(90639),ee=r(38345),le=r(66309),G=r(78957),ne=r(96074),ie=r(83062),c=r(26412),se=r(63490),de=r(39711);function oe(){var j=(0,u.useRef)(),J=(0,u.useState)(""),k=D()(J,2),W=k[0],Y=k[1],Q=(0,u.useState)(),z=D()(Q,2),n=z[0],V=z[1],I=(0,u.useState)(),l=D()(I,2),Z=l[0],$=l[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ue.Z,{rowKey:"Name",columns:[{title:"\u540D\u79F0",ellipsis:!0,dataIndex:"Name",render:function(m,t,i,h,o){return t.Name=="none"||t.Name=="bridge"||t.Name=="host"?(0,e.jsxs)(e.Fragment,{children:[t.Name," ",(0,e.jsx)(le.Z,{color:"blue",children:"System"})]}):(0,e.jsx)(e.Fragment,{children:m})}},{title:"\u7C7B\u578B",ellipsis:!0,width:80,dataIndex:"Driver",search:!1},{title:"IPAM Driver",ellipsis:!0,width:120,search:!1,dataIndex:["IPAM","Driver"]},{title:"IPV4",ellipsis:!0,width:150,search:!1,render:function(m,t,i,h,o){return t.IPAM.Config&&t.IPAM.Config[0]?(0,e.jsxs)(G.Z,{direction:"vertical",children:[(0,e.jsx)("div",{children:t.IPAM.Config&&t.IPAM.Config[0].Subnet}),(0,e.jsx)("div",{children:t.IPAM.Config&&t.IPAM.Config[0].Gateway})]}):"-"}},{title:"IPV6",ellipsis:!0,width:150,search:!1,render:function(m,t,i,h,o){return t.IPAM.Config&&t.IPAM.Config[1]?(0,e.jsxs)(G.Z,{direction:"vertical",children:[(0,e.jsx)("div",{children:t.IPAM.Config&&t.IPAM.Config[1].Subnet}),(0,e.jsx)("div",{children:t.IPAM.Config&&t.IPAM.Config[1].Gateway})]}):"-"}},{title:"\u521B\u5EFA\u65F6\u95F4",ellipsis:!0,width:180,search:!1,dataIndex:"Created",render:function(m,t,i,h,o){return new Date(t.Created).toLocaleString()}},{title:"\u64CD\u4F5C",width:100,search:!1,render:function(m,t,i,h,o){return(0,e.jsx)(G.Z,{split:(0,e.jsx)(ne.Z,{type:"vertical"}),children:(0,e.jsx)(_.ZP,{type:"link",onClick:function(){Y(t.Name)},children:(0,e.jsx)(ie.Z,{title:"\u7BA1\u7406",children:(0,e.jsx)(te.Z,{})})})})}}],request:function(){var d=g()(v()().mark(function m(t,i,h){var o;return v()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,(0,S.jR)({name:t.Name});case 2:return o=O.sent,O.abrupt("return",{data:o.data.list,success:!0,total:o.data.list.length});case 4:case"end":return O.stop()}},m)}));return function(m,t,i){return d.apply(this,arguments)}}(),toolBarRender:function(){return[(0,e.jsx)(a,{onFinish:function(){var t,i;!((t=j.current)===null||t===void 0)&&t.reloadAndRest&&((i=j.current)===null||i===void 0||i.reloadAndRest())}}),(0,e.jsx)(E.Z,{action:function(){return(0,S.CI)()},onSuccess:function(){var t,i;return!((t=j.current)===null||t===void 0)&&t.reloadAndRest&&((i=j.current)===null||i===void 0||i.reloadAndRest()),!0},onError:function(){var t,i;return!((t=j.current)===null||t===void 0)&&t.reset&&((i=j.current)===null||i===void 0||i.reset()),!0},messageSuccess:"\u6E05\u9664\u6210\u529F",confirm:"\u662F\u5426\u6E05\u7406\u672A\u4F7F\u7528\u7684\u7F51\u7EDC\uFF1F",children:"\u6E05\u7406\u672A\u4F7F\u7528\u7F51\u7EDC"})]},rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},actionRef:j,tableAlertOptionRender:function(m){var t=m.selectedRowKeys;return(0,e.jsx)(G.Z,{size:16,children:(0,e.jsx)(E.Z,{danger:!0,type:"primary",action:function(){return(0,S._x)({name:t})},onSuccess:function(){var h,o;return!((h=j.current)===null||h===void 0)&&h.reloadAndRest&&((o=j.current)===null||o===void 0||o.reloadAndRest()),!0},onError:function(){var h,o;return!((h=j.current)===null||h===void 0)&&h.reset&&((o=j.current)===null||o===void 0||o.reset()),!0},messageSuccess:"\u5220\u9664\u6210\u529F",children:"\u6279\u91CF\u5220\u9664"})})},pagination:(0,re.O)()}),(0,e.jsxs)(F.a,{title:"\u7F51\u7EDC\u8BE6\u60C5",open:W!="",onOpenChange:function(m){m?W&&(0,S.IS)({name:W}).then(function(t){if(t.data.info.Containers){var i=[];Object.keys(t.data.info.Containers).map(function(h){t.data.info.Containers[h].Id=h,i.push(t.data.info.Containers[h])}),$(i)}else $([]);V(t.data.info)}):Y("")},submitter:!1,children:[(0,e.jsx)(ee.Z,{ghost:!0,children:(0,e.jsxs)(c.Z,{labelStyle:{width:"180px"},column:1,bordered:!0,children:[(0,e.jsx)(c.Z.Item,{label:"\u540D\u79F0",children:n==null?void 0:n.Name}),(0,e.jsx)(c.Z.Item,{label:"Id",children:n==null?void 0:n.Id}),(0,e.jsx)(c.Z.Item,{label:"Driver",children:n==null?void 0:n.Driver}),(0,e.jsx)(c.Z.Item,{label:"Scope",children:n==null?void 0:n.Scope}),(0,e.jsx)(c.Z.Item,{label:"Attachable",children:n!=null&&n.Attachable?"\u662F":"\u5426"}),(0,e.jsx)(c.Z.Item,{label:"Internal",children:n!=null&&n.Internal?"\u662F":"\u5426"}),(n==null?void 0:n.IPAM.Config)&&(n==null?void 0:n.IPAM.Config[0])&&(0,e.jsx)(c.Z.Item,{label:"IPV4",children:(0,e.jsxs)(c.Z,{labelStyle:{width:"150px"},column:1,bordered:!0,children:[(0,e.jsx)(c.Z.Item,{label:"Subnet",children:n==null?void 0:n.IPAM.Config[0].Subnet}),(0,e.jsx)(c.Z.Item,{label:"Gateway",children:n==null?void 0:n.IPAM.Config[0].Gateway}),(0,e.jsx)(c.Z.Item,{label:"IP Range ",children:n==null?void 0:n.IPAM.Config[0].IPRange}),(0,e.jsx)(c.Z.Item,{label:"Excluded IPs",children:(n==null?void 0:n.IPAM.Config[0].AuxiliaryAddresses)&&Object.keys(n==null?void 0:n.IPAM.Config[0].AuxiliaryAddresses).map(function(d){return(n==null?void 0:n.IPAM.Config[0].AuxiliaryAddresses[d])+" ,"})})]})}),(n==null?void 0:n.IPAM.Config)&&(n==null?void 0:n.IPAM.Config[1])&&(0,e.jsx)(c.Z.Item,{label:"IPV6",children:(0,e.jsxs)(c.Z,{labelStyle:{width:"150px"},column:1,bordered:!0,children:[(0,e.jsx)(c.Z.Item,{label:"Subnet",children:n==null?void 0:n.IPAM.Config[1].Subnet}),(0,e.jsx)(c.Z.Item,{label:"Gateway",children:n==null?void 0:n.IPAM.Config[1].Gateway}),(0,e.jsx)(c.Z.Item,{label:"IP Range ",children:n==null?void 0:n.IPAM.Config[1].IPRange}),(0,e.jsx)(c.Z.Item,{label:"Excluded IPs",children:(n==null?void 0:n.IPAM.Config[1].AuxiliaryAddresses)&&Object.keys(n==null?void 0:n.IPAM.Config[1].AuxiliaryAddresses).map(function(d){return(n==null?void 0:n.IPAM.Config[1].AuxiliaryAddresses[d])+" ,"})})]})}),(n==null?void 0:n.Options)&&Object.keys(n==null?void 0:n.Options).length>0&&(0,e.jsx)(c.Z.Item,{label:"Options",children:(0,e.jsx)(c.Z,{labelStyle:{width:"150px"},column:1,bordered:!0,children:Object.keys(n==null?void 0:n.Options).map(function(d){return(0,e.jsx)(c.Z.Item,{label:d,children:n.Options[d]},d)})})}),(n==null?void 0:n.Labels)&&Object.keys(n==null?void 0:n.Labels).length>0&&(0,e.jsx)(c.Z.Item,{label:"Lables",children:(0,e.jsx)(c.Z,{labelStyle:{width:"150px"},column:1,bordered:!0,children:Object.keys(n==null?void 0:n.Labels).map(function(d){return(0,e.jsx)(c.Z.Item,{label:d,children:n.Labels[d]},d)})})})]})}),(0,e.jsx)(ee.Z,{title:"\u7F51\u7EDC\u5185\u5BB9\u5668",ghost:!0,children:(0,e.jsx)(se.Z,{rowKey:"Id",columns:[{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"Name",render:function(m,t,i){return(0,e.jsx)(de.rU,{target:"_blank",to:"/app/detail/edit/".concat(t.Id),children:t.Name})}},{title:"IPV4",dataIndex:"IPv4Address"},{title:"IPV6",dataIndex:"IPv6Address"},{title:"MacAddress",dataIndex:"MacAddress"},{title:"\u64CD\u4F5C",render:function(m,t,i){return(0,e.jsx)(G.Z,{split:(0,e.jsx)(ne.Z,{type:"vertical"}),children:(0,e.jsx)(E.Z,{type:"text",action:function(){var o,C;return(0,S.t9)({name:(o=n==null?void 0:n.Id)!==null&&o!==void 0?o:"",containerName:(C=t.Id)!==null&&C!==void 0?C:""})},messageSuccess:"\u5BB9\u5668\u6210\u529F\u9000\u51FA\u8BE5\u7F51\u7EDC",onSuccess:function(){var o=Z==null?void 0:Z.filter(function(C){return C.Id!=t.Id});$(o)},children:(0,e.jsx)(ae.Z,{})},"delete")})}}],dataSource:Z,pagination:!1})})]})]})}},14946:function(X,M,r){r.d(M,{CI:function(){return F},HY:function(){return _},IS:function(){return D},XY:function(){return w},_3:function(){return K},_x:function(){return s},jR:function(){return S},t9:function(){return R}});var N=r(15009),v=r.n(N),L=r(99289),g=r.n(L),b=r(54006);function D(u){return E.apply(this,arguments)}function E(){return E=g()(v()().mark(function u(e){return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,b.request)("/api/app/network/get-detail",{method:"POST",data:e}));case 1:case"end":return a.stop()}},u)})),E.apply(this,arguments)}function S(u){return T.apply(this,arguments)}function T(){return T=g()(v()().mark(function u(e){return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,b.request)("/api/app/network/get-list",{method:"POST",data:e}));case 1:case"end":return a.stop()}},u)})),T.apply(this,arguments)}function F(){return f.apply(this,arguments)}function f(){return f=g()(v()().mark(function u(){return v()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,b.request)("/api/app/network/prune",{method:"POST"});case 2:return p.abrupt("return",p.sent);case 3:case"end":return p.stop()}},u)})),f.apply(this,arguments)}function s(u){return y.apply(this,arguments)}function y(){return y=g()(v()().mark(function u(e){return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,b.request)("/api/app/network/delete",{method:"POST",data:e});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},u)})),y.apply(this,arguments)}function w(u){return A.apply(this,arguments)}function A(){return A=g()(v()().mark(function u(e){return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,b.request)("/api/app/network/create",{method:"POST",data:e});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},u)})),A.apply(this,arguments)}function R(u){return B.apply(this,arguments)}function B(){return B=g()(v()().mark(function u(e){return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,b.request)("/api/app/network/disconnect",{method:"POST",data:e});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},u)})),B.apply(this,arguments)}function _(u){return P.apply(this,arguments)}function P(){return P=g()(v()().mark(function u(e){return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,b.request)("/api/app/network/connect",{method:"POST",data:e});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},u)})),P.apply(this,arguments)}function K(u){return x.apply(this,arguments)}function x(){return x=g()(v()().mark(function u(e){return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,b.request)("/api/app/network/get-container-list",{method:"POST",data:e}));case 1:case"end":return a.stop()}},u)})),x.apply(this,arguments)}},6409:function(X,M,r){r.d(M,{O:function(){return N}});function N(){return{showSizeChanger:!0,defaultPageSize:20}}}}]);