"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5738],{75516:function(ne,Y,e){e.d(Y,{Z:function(){return s}});var Q=e(89035),r=e(37476),H=e(38345),m=e(97462),j=e(62370),V=e(54006),R=e(14726),z=e(63490),I=e(78045),K=e(67294),O=e(85893);function s(i){return(0,O.jsx)(r.Y,{trigger:(0,O.jsx)(R.ZP,{type:"dashed",icon:(0,O.jsx)(Q.Z,{}),children:"Console"}),submitter:!1,children:(0,O.jsxs)(H.Z,{children:[(0,O.jsx)(m.Z,{name:["entryCmd"],children:function(w){var S,P=w.entryCmd,h=P?"/bin/"+P:"/bin/sh";return(0,O.jsx)(z.Z,{columns:[{title:"\u5BB9\u5668\u540D\u79F0",key:"name",dataIndex:"name",ellipsis:!0},{title:"\u5DE5\u4F5C\u76EE\u5F55",key:"workDir",dataIndex:"workDir"},{title:"\u72B6\u6001",key:"status",dataIndex:"status",width:150},{title:"\u64CD\u4F5C",key:"status",width:150,render:function(c,d,G){return(0,O.jsx)(V.Link,{to:"/console/".concat(i.container.Id,"?cmd=").concat(encodeURIComponent(h),"&workDir=").concat(encodeURIComponent(i.container.Config.WorkingDir?i.container.Config.WorkingDir:"/")),target:"_blank",children:"\u767B\u5F55"})}}],dataSource:[{key:1,name:i.container.Id,status:i.container.State.Status,workDir:(S=i.container.Config.WorkingDir)!==null&&S!==void 0?S:"/"}],rowKey:"key",pagination:!1})}}),(0,O.jsx)(j.Z,{name:"entryCmd",label:"Shell\u73AF\u5883\uFF08\u4EC5\u505A\u9ED8\u8BA4\u73AF\u5883\uFF0C\u767B\u5F55\u540E\u53EF\u5207\u6362\u81F3\u5176\u4ED6\u73AF\u5883\uFF09",style:{marginTop:15},initialValue:"sh",children:(0,O.jsxs)(I.ZP.Group,{children:[(0,O.jsx)(I.ZP,{value:"bash",children:"/bin/bash"}),(0,O.jsx)(I.ZP,{value:"sh",children:"/bin/sh"})]})})]})})}},80821:function(ne,Y,e){e.d(Y,{Z:function(){return O}});var Q=e(5574),r=e.n(Q),H=e(93246),m=e(54006),j=e(31418),V=e(86738),R=e(14726),z=e(83062),I=e(67294),K=e(85893);function O(s){var i=(0,I.useState)(!1),k=r()(i,2),w=k[0],S=k[1],P=j.Z.useApp(),h=(0,m.useIntl)(),g=function(){S(!0),s.action().then(function(d){if(S(!1),typeof s.onSuccess=="function"&&s.onSuccess(d),s.messageSuccess){var G="";typeof s.messageSuccess=="function"?G=s.messageSuccess(d):G=s.messageSuccess,G.indexOf(".")>-1&&(G=h.formatMessage({id:G})),s.asynced?(0,H.Rk)(P,G):(0,H.$h)(P,G)}}).catch(function(d){S(!1),typeof s.onError=="function"&&s.onError(d)})};return s.confirm?(0,K.jsx)(V.Z,{style:{width:500},title:"\u63D0\u793A",description:s.confirm,onConfirm:g,okText:"Yes",cancelText:"No",children:(0,K.jsx)(R.ZP,{disabled:s.disabled,icon:s.icon,loading:w,danger:s.danger,type:s.type,children:s.children})}):(0,K.jsx)(z.Z,{title:s.tips,children:(0,K.jsx)(R.ZP,{disabled:s.disabled,icon:s.icon,loading:w,onClick:g,danger:s.danger,type:s.type,children:s.children})})}},37798:function(ne,Y,e){e.r(Y),e.d(Y,{default:function(){return Ie}});var Q=e(5574),r=e.n(Q),H=e(15009),m=e.n(H),j=e(99289),V=e.n(j),R=e(28031),z=e(93613),I=e(29158),K=e(2741),O=e(10641),s=e(14726),i=e(67294),k=(0,i.createContext)({}),w=k,S=e(24969),P=e(48689),h=e(42075),g=e(80821),c=e(88484),d=e(37476),G=e(91604),te=e(97961),re=e(54006),n=e(85893);function _(){var l=(0,i.useRef)(),p=(0,i.useContext)(w),x=p.fileListRef,D=p.containerMd5,A=p.currentPath,C=(0,re.useModel)("@@initialState"),Z=C.initialState,F=C.loading,W=C.error,$=C.refresh,B=C.setInitialState;return(0,n.jsx)(d.Y,{formRef:l,trigger:(0,n.jsx)(s.ZP,{icon:(0,n.jsx)(c.Z,{}),children:"\u4E0A\u4F20"}),title:"\u4E0A\u4F20\u6587\u4EF6\u5230\u5BB9\u5668",onFinish:function(){var U=V()(m()().mark(function N(L){var f,o,M,v;return m()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return M=[],L.importFileList&&L.importFileList.map(function(E){M.push({name:E.name,path:E.response.data.path})}),(0,R.ZU)({fileList:M,md5:D,destPath:A}),(f=l.current)===null||f===void 0||f.resetFields(),x&&typeof((o=x.current)===null||o===void 0?void 0:o.reloadAndRest)=="function"&&((v=x.current)===null||v===void 0||v.reloadAndRest()),a.abrupt("return",!0);case 6:case"end":return a.stop()}},N)}));return function(N){return U.apply(this,arguments)}}(),children:(0,n.jsx)(G.Z,{name:"importFileList",fieldProps:{multiple:!0,name:"file",action:"/api/common/attach/upload",headers:{Authorization:"Bearer "+localStorage.getItem("token")},onRemove:function(N){return new Promise(function(L){var f;(0,te._2)({path:(f=N.response.data.path)!==null&&f!==void 0?f:""}).then(function(o){L(!0)})})}}})})}var b=e(23430),J=e(93162);function t(l){var p=(0,i.useContext)(w),x=p.containerMd5;return(0,n.jsx)(g.Z,{action:function(){return(0,R._U)({md5:x,fileList:l.selectFileList})},onSuccess:function(A){var C=new Blob([A],{type:"application/zip"});(0,J.saveAs)(C,"export.zip")},icon:(0,n.jsx)(b.Z,{}),children:"\u4E0B\u8F7D"})}var ae=e(38345),X=e(63434),me=e(24739),de=e(5966),fe=e(64317),oe=e(31418),q=e(93246);function he(l){var p=(0,i.useRef)(),x=(0,i.useContext)(w),D=x.currentPath,A=x.reloadFileList,C=x.containerMd5,Z=(0,i.useState)(),F=r()(Z,2),W=F[0],$=F[1],B=oe.Z.useApp(),U=(0,i.useState)(!1),N=r()(U,2),L=N[0],f=N[1],o=function(u){var a=u.split(""),E=0,y=0,T=0;return a[1]=="r"&&(E+=4),a[2]=="w"&&(E+=2),a[3]=="x"&&(E+=1),a[4]=="r"&&(y+=4),a[5]=="w"&&(y+=2),a[6]=="x"&&(y+=1),a[7]=="r"&&(T+=4),a[8]=="w"&&(T+=2),a[9]=="x"&&(T+=1),"".concat(E).concat(y).concat(T)},M=function(u){var a;if((a=p.current)===null||a===void 0||a.setFieldValue("permission",u),u.length>=1){var E;(E=p.current)===null||E===void 0||E.setFieldsValue({ownerRead:u[0]&4,ownerWrite:u[0]&2,ownerExec:u[0]&1})}if(u.length>=2){var y;(y=p.current)===null||y===void 0||y.setFieldsValue({groupRead:u[1]&4,groupWrite:u[1]&2,groupExec:u[1]&1})}if(u.length>=3){var T;(T=p.current)===null||T===void 0||T.setFieldsValue({everyoneRead:u[2]&4,everyoneWrite:u[2]&2,everyoneExec:u[2]&1})}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.ZP,{onClick:function(){if(l.selectFileObject.length==0){var u;return(u=p.current)===null||u===void 0||u.resetFields(),(0,q.YZ)(B,"\u8BF7\u5148\u9009\u62E9\u8981\u4FEE\u6539\u7684\u6587\u4EF6\u6216\u662F\u76EE\u5F55"),f(!1),!1}else(0,R.lE)({md5:C}).then(function(a){if(a.data.list.length==0)return(0,q.YZ)(B,"\u8BE5\u5BB9\u5668\u4E0D\u652F\u6301\u4FEE\u6539\u6587\u4EF6\u6743\u9650"),f(!1),!1;$(a.data.list),f(!0)})},children:"\u6743\u9650"}),(0,n.jsxs)(d.Y,{modalProps:{forceRender:!0},title:l.selectFileObject.length==1?"\u4FEE\u6539 ".concat(l.selectFileObject[0].name," \u6743\u9650"):"\u6279\u91CF\u6587\u4EF6\u4FEE\u6539\u6743\u9650",layout:"horizontal",open:L,onOpenChange:function(u){if(f(u),l.selectFileObject.length==1){var a;M(o(l.selectFileObject[0].mode));var E=l.selectFileObject[0].owner;W&&W.map(function(y){y.uid==E&&(E=y.username)}),(a=p.current)===null||a===void 0||a.setFieldValue("owner",E)}},formRef:p,onValuesChange:function(u,a){if(u.permission)M(u.permission);else{var E=["-",a.ownerRead?"r":"-",a.ownerWrite?"w":"-",a.ownerExec?"x":"-",a.groupRead?"r":"-",a.groupWrite?"w":"-",a.groupExec?"x":"-",a.everyoneRead?"r":"-",a.everyoneWrite?"w":"-",a.everyoneExec?"x":"-"];M(o(E.join("")))}},onFinish:function(){var v=V()(m()().mark(function u(a){var E,y,T,ue;return m()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:return T=[],l.selectFileObject.map(function(Se){T.push(Se.name)}),ee.next=4,(0,R.OQ)({md5:C,fileList:T,mod:parseInt((E=a.permission)!==null&&E!==void 0?E:"600"),hasChildren:(y=a.hasChildren)!==null&&y!==void 0?y:!0,owner:a.owner});case 4:return ue=ee.sent,A(),ee.abrupt("return",!0);case 7:case"end":return ee.stop()}},u)}));return function(u){return v.apply(this,arguments)}}(),children:[(0,n.jsxs)(ae.Z,{direction:"row",gutter:[20,10],children:[(0,n.jsxs)(ae.Z,{bordered:!0,title:"\u6240\u6709\u8005",headerBordered:!0,children:[(0,n.jsx)(X.Z,{label:"\u8BFB\u53D6",name:"ownerRead"}),(0,n.jsx)(X.Z,{label:"\u5199\u5165",name:"ownerWrite"}),(0,n.jsx)(X.Z,{label:"\u6267\u884C",name:"ownerExec"})]}),(0,n.jsxs)(ae.Z,{bordered:!0,title:"\u7528\u6237\u7EC4",headerBordered:!0,children:[(0,n.jsx)(X.Z,{label:"\u8BFB\u53D6",name:"groupRead"}),(0,n.jsx)(X.Z,{label:"\u5199\u5165",name:"groupWrite"}),(0,n.jsx)(X.Z,{label:"\u6267\u884C",name:"groupExec"})]}),(0,n.jsxs)(ae.Z,{bordered:!0,title:"\u516C\u5171",headerBordered:!0,children:[(0,n.jsx)(X.Z,{label:"\u8BFB\u53D6",name:"everyoneRead"}),(0,n.jsx)(X.Z,{label:"\u5199\u5165",name:"everyoneWrite"}),(0,n.jsx)(X.Z,{label:"\u6267\u884C",name:"everyoneExec"})]})]}),(0,n.jsx)(ae.Z,{children:(0,n.jsxs)(me.UW,{children:[(0,n.jsx)(de.Z,{label:"\u6743\u9650",name:"permission",fieldProps:{maxLength:3},width:"xs"}),(0,n.jsx)(fe.Z,{label:"\u6240\u6709\u8005",name:"owner",width:"sm",options:W==null?void 0:W.map(function(v){return v.username})}),(0,n.jsx)(X.Z,{label:"\u5E94\u7528\u5230\u5B50\u76EE\u5F55",name:"hasChildren",initialValue:!0})]})})]})]})}function pe(l){var p=(0,i.useContext)(w),x=p.currentPath,D=p.reloadFileList,A=p.containerMd5,C=oe.Z.useApp();return(0,n.jsx)(s.ZP,{onClick:function(){if(l.selectFileObject.length==0)return(0,q.YZ)(C,"\u8BF7\u5148\u9009\u62E9\u8981\u89E3\u538B\u7684 zip \u6587\u4EF6"),!1;if(l.selectFileObject.length>1)return(0,q.YZ)(C,"\u89E3\u538B\u64CD\u4F5C\u53EA\u652F\u6301\u5355\u6587\u4EF6\u64CD\u4F5C"),!1;var F=l.selectFileObject[0];if(F.name.lastIndexOf(".zip")!=F.name.length-4)return(0,q.YZ)(C,"\u89E3\u538B\u64CD\u4F5C\u53EA\u652F\u6301 zip \u6587\u4EF6"),!1;(0,R.gb)({md5:A,file:F.name}).then(function(W){D()})},children:"\u89E3\u538B"})}function ve(l){var p=(0,i.useContext)(w),x=p.fileListRef,D=p.containerMd5,A=p.currentPath,C=p.editFileRef;return(0,n.jsxs)(h.Z,{size:16,wrap:!0,children:[(0,n.jsx)(t,{selectFileList:l.selectFileList}),(0,n.jsx)(_,{}),(0,n.jsx)(he,{selectFileObject:l.selectFileObject}),(0,n.jsx)(pe,{selectFileObject:l.selectFileObject}),(0,n.jsx)(s.ZP,{type:"primary",icon:(0,n.jsx)(S.Z,{}),onClick:function(){var F;(F=C.current)===null||F===void 0||F.newFile()},children:"\u65B0\u5EFA\u6587\u4EF6"}),(0,n.jsx)(g.Z,{danger:!0,type:"default",icon:(0,n.jsx)(P.Z,{}),action:function(){return(0,R.Yx)({md5:D,fileList:l.selectFileList})},onSuccess:function(){var F;if(x&&typeof((F=x.current)===null||F===void 0?void 0:F.reloadAndRest)=="function"){var W;(W=x.current)===null||W===void 0||W.reloadAndRest()}},messageSuccess:"\u5220\u9664\u6210\u529F",children:"\u5220\u9664"})]})}var ie=e(83062),se=e(66309);function _e(l){return l.change==0?(0,n.jsx)(ie.Z,{title:"\u5728\u5BB9\u5668\u8FD0\u884C\u65F6\u88AB\u4FEE\u6539",children:(0,n.jsx)(se.Z,{color:"blue",children:"MODIFIED"})}):l.change==1?(0,n.jsx)(ie.Z,{title:"\u5728\u5BB9\u5668\u8FD0\u884C\u65F6\u65B0\u589E\u7684\u6587\u4EF6",children:(0,n.jsx)(se.Z,{color:"green",children:"ADD"})}):l.change==2?(0,n.jsx)(ie.Z,{title:"\u5728\u5BB9\u5668\u8FD0\u884C\u65F6\u88AB\u5220\u9664\u6587\u4EF6",children:(0,n.jsx)(se.Z,{color:"error",children:"DELETED"})}):l.change==100?(0,n.jsx)(ie.Z,{title:"\u6302\u8F7D\u7684\u6301\u4E45\u5316\u76EE\u5F55",children:(0,n.jsx)(se.Z,{color:"cyan",children:"VOLUME"})}):(0,n.jsx)(n.Fragment,{})}var ge=e(19632),ce=e.n(ge),Fe=e(27254),Ee=e(46464),je=(0,i.forwardRef)(function(l,p){var x=(0,i.useContext)(w),D=x.showPath,A=(0,i.useState)([{title:"\u6839\u76EE\u5F55",path:"/"}]),C=r()(A,2),Z=C[0],F=C[1];(0,i.useImperativeHandle)(p,function(){return{addHistory:function(B,U){F([].concat(ce()(Z),[{title:B,path:U}]))},initHistory:function(B){F([{title:"\u6839\u76EE\u5F55",path:"/"}].concat(ce()(B)))}}});var W=function(B){D(Z[B].title,Z[B].path);var U=Z.filter(function(N,L){return L<=B});F(ce()(U))};return(0,n.jsx)(h.Z.Compact,{children:Z.map(function($,B){return(0,n.jsx)(s.ZP,{icon:(0,n.jsx)(Fe.Z,{}),type:"dashed",onClick:function(){W(B)},children:B==Z.length-1?(0,n.jsx)(Ee.Z.Text,{copyable:{text:$.path},children:$.title}):$.title},B)})})}),Pe=je,xe=e(97269),Ce=e(62370),ye=e(90672),Oe=e(97462),De=e(45360),Re=e(85576),Me=e(95089),Te=(0,i.forwardRef)(function(l,p){var x,D=(0,i.useContext)(w),A=D.currentPath,C=D.reloadFileList,Z=D.containerMd5,F=(0,i.useRef)(),W=(0,i.useState)(!1),$=r()(W,2),B=$[0],U=$[1],N=oe.Z.useApp(),L=De.ZP.useMessage(),f=r()(L,2),o=f[0],M=f[1];return(0,i.useImperativeHandle)(p,function(){return{newFile:function(){var u;U(!0),(u=F.current)===null||u===void 0||u.resetFields()},editFile:function(u,a,E){var y;(y=F.current)===null||y===void 0||y.resetFields(),o.open({type:"loading",content:"\u6B63\u5728\u83B7\u53D6\u6587\u4EF6\u5185\u5BB9",duration:0}),(0,R.LK)({md5:Z,file:a}).then(function(T){var ue,le;if(T.data.content==""&&E!="0"){(0,q.YZ)(N,"\u4E0D\u652F\u6301\u7F16\u8F91\u7684\u6587\u4EF6\u7C7B\u578B"),U(!1);return}(ue=F.current)===null||ue===void 0||ue.setFieldValue("newValue",T.data.content),(le=F.current)===null||le===void 0||le.setFieldValue("newName",u),o.destroy(),U(!0)}).finally(function(){o.destroy()})}}}),(0,n.jsxs)(n.Fragment,{children:[M,(0,n.jsx)(Re.Z,{width:"800px",title:(x=F.current)!==null&&x!==void 0&&x.getFieldValue("newName")?"\u7F16\u8F91\u6587\u4EF6":"\u65B0\u5EFA\u6587\u4EF6",open:B,onCancel:function(){return U(!1)},footer:!1,forceRender:!0,children:(0,n.jsxs)(xe.A,{formRef:F,onFinish:function(){var v=V()(m()().mark(function u(a){var E;return m()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return(0,R.C4)({destPath:A,file:a.newName.indexOf("/")!==0?"/"+a.newName:a.newName,content:a.newValue,md5:Z}),(E=F.current)===null||E===void 0||E.resetFields(),U(!1),C(),T.abrupt("return",!0);case 5:case"end":return T.stop()}},u)}));return function(u){return v.apply(this,arguments)}}(),children:[(0,n.jsx)(de.Z,{label:"\u6587\u4EF6\u540D",tooltip:"\u7F16\u8F91\u6587\u4EF6\u65F6\u4FEE\u6539\u6587\u4EF6\u540D\u53EF\u5B9E\u73B0\u590D\u5236\u529F\u80FD",name:"newName",fieldProps:{addonBefore:A},placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D\uFF1B\u652F\u6301\u65B0\u5EFA\u76EE\u5F55\uFF0C\u9700\u8981\u6307\u5B9A\u5B8C\u6574\u8DEF\u5F84\uFF0C\u4F8B\u5982\uFF1A/test/test.txt"}),(0,n.jsxs)(Ce.Z,{label:"\u5185\u5BB9",children:[(0,n.jsx)(ye.Z,{hidden:!0,name:"newValue"}),(0,n.jsx)(Oe.Z,{name:["newValue"],children:function(u){var a=u.newValue;return(0,n.jsx)(Me.ZP,{theme:"dark",height:"500px",value:a,onChange:function(y){var T;(T=F.current)===null||T===void 0||T.setFieldValue("newValue",y)}})}})]})]})})]})}),we=Te,Be=e(75516),Le=e(60335);function be(l){var p=(0,i.useRef)(),x=(0,i.useRef)(),D=(0,i.useRef)(),A=(0,i.useState)("/"),C=r()(A,2),Z=C[0],F=C[1],W=(0,i.useState)(),$=r()(W,2),B=$[0],U=$[1];(0,i.useEffect)(function(){if(l.initialValue){for(var L,f=l.initialValue.split("/"),o=[],M="",v=1;v<f.length;v++)M+="/"+f[v],o.push({title:f[v],path:M});N(f[f.length-1],l.initialValue),(L=p.current)===null||L===void 0||L.initHistory([].concat(o))}(0,Le.jV)({md5:l.md5}).then(function(u){u.data&&U(u.data.info)})},[l.initialValue]);var N=function(f,o){var M,v;if((M=p.current)===null||M===void 0||M.addHistory(f,o),F(o),D&&typeof((v=D.current)===null||v===void 0?void 0:v.reloadAndRest)=="function"){var u;(u=D.current)===null||u===void 0||u.reloadAndRest()}};return(0,n.jsxs)(w.Provider,{value:{fileListRef:D,containerMd5:l.md5,currentPath:Z,showPath:N,reloadFileList:function(){var f;if(D&&typeof((f=D.current)===null||f===void 0?void 0:f.reloadAndRest)=="function"){var o;(o=D.current)===null||o===void 0||o.reloadAndRest()}},editFileRef:x},children:[(0,n.jsx)(O.Z,{scroll:{x:"max-content"},rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},toolBarRender:function(){var f=[];return B!=null&&B.Id&&f.push((0,n.jsx)(Be.Z,{container:B,workDir:Z},"console")),[].concat(f)},tableAlertOptionRender:function(f){var o=f.selectedRowKeys,M=f.selectedRows,v=[];return M.map(function(u){v.push(u.name)}),[(0,n.jsx)(ve,{selectFileList:v,selectFileObject:M},"1")]},headerTitle:(0,n.jsx)(Pe,{ref:p}),actionRef:D,search:!1,rowKey:"showName",pagination:!1,request:V()(m()().mark(function L(){return m()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",new Promise(function(M,v){l.md5&&(0,R.V9)({md5:l.md5,path:Z}).then(function(u){if(u.data.list){var a={data:u.data.list,success:!0,total:u.data.list.length};M(a)}else M({data:[],success:!0,total:0})})}));case 1:case"end":return o.stop()}},L)})),columns:[{title:"\u540D\u79F0",dataIndex:"showName",key:"name",render:function(a,o,M,v,u){var a;return o.isDir?a=(0,n.jsx)(s.ZP,{onClick:function(){return N(o.showName,o.name)},type:"link",icon:(0,n.jsx)(z.Z,{}),children:o.showName}):o.linkName?a=(0,n.jsx)(s.ZP,{type:"text",icon:(0,n.jsx)(I.Z,{}),children:"".concat(o.showName," -> ").concat(o.linkName)}):a=(0,n.jsx)(s.ZP,{type:"text",icon:(0,n.jsx)(K.Z,{}),onClick:function(){var y;(y=x.current)===null||y===void 0||y.editFile(o.showName,o.name,o.size)},children:o.showName}),a}},{title:"\u72B6\u6001",key:"status",width:110,render:function(f,o,M,v,u){return(0,n.jsx)(_e,{change:o.change})}},{title:"\u6743\u9650",dataIndex:"mode",key:"mode"},{title:"\u7528\u6237",dataIndex:"owner"},{title:"\u7528\u6237\u7EC4",dataIndex:"group"},{title:"\u5927\u5C0F",dataIndex:"size",key:"size"},{title:"\u4FEE\u6539\u65F6\u95F4",dataIndex:"modTime",key:"modTime"}]}),(0,n.jsx)(we,{ref:x})]})}var Ze=be;function Ae(){var l,p,x=(0,re.useParams)(),D=(0,re.useSearchParams)(),A=r()(D,2),C=A[0],Z=A[1];return(0,n.jsx)("div",{children:(0,n.jsx)(Ze,{md5:(l=x.id)!==null&&l!==void 0?l:"",initialValue:(p=C.get("path"))!==null&&p!==void 0?p:""})})}var Ie=Ae},28031:function(ne,Y,e){e.d(Y,{C4:function(){return h},LK:function(){return S},OQ:function(){return c},V9:function(){return V},Yx:function(){return s},ZU:function(){return K},_U:function(){return z},gb:function(){return k},lE:function(){return re},vp:function(){return G}});var Q=e(15009),r=e.n(Q),H=e(99289),m=e.n(H),j=e(54006);function V(_){return R.apply(this,arguments)}function R(){return R=m()(r()().mark(function _(b){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,j.request)("/api/app/explorer/get-path-list",{data:b,method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},_)})),R.apply(this,arguments)}function z(_){return I.apply(this,arguments)}function I(){return I=m()(r()().mark(function _(b){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,j.request)("/api/app/explorer/export",{data:b,method:"POST",responseType:"blob"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},_)})),I.apply(this,arguments)}function K(_){return O.apply(this,arguments)}function O(){return O=m()(r()().mark(function _(b){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,j.request)("/api/app/explorer/import",{data:b,method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},_)})),O.apply(this,arguments)}function s(_){return i.apply(this,arguments)}function i(){return i=m()(r()().mark(function _(b){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,j.request)("/api/app/explorer/delete",{data:b,method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},_)})),i.apply(this,arguments)}function k(_){return w.apply(this,arguments)}function w(){return w=m()(r()().mark(function _(b){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,j.request)("/api/app/explorer/unzip",{data:b,method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},_)})),w.apply(this,arguments)}function S(_){return P.apply(this,arguments)}function P(){return P=m()(r()().mark(function _(b){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,j.request)("/api/app/explorer/get-content",{data:b,method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},_)})),P.apply(this,arguments)}function h(_){return g.apply(this,arguments)}function g(){return g=m()(r()().mark(function _(b){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,j.request)("/api/app/explorer/import-file-content",{data:b,method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},_)})),g.apply(this,arguments)}function c(_){return d.apply(this,arguments)}function d(){return d=m()(r()().mark(function _(b){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,j.request)("/api/app/explorer/chmod",{data:b,method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},_)})),d.apply(this,arguments)}function G(_){return te.apply(this,arguments)}function te(){return te=m()(r()().mark(function _(b){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,j.request)("/api/app/volume/backup",{data:b,method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},_)})),te.apply(this,arguments)}function re(_){return n.apply(this,arguments)}function n(){return n=m()(r()().mark(function _(b){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,j.request)("/api/app/explorer/get-passwd",{data:b,method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},_)})),n.apply(this,arguments)}},60335:function(ne,Y,e){e.d(Y,{IE:function(){return z},IW:function(){return V},KK:function(){return k},LJ:function(){return S},eE:function(){return s},jV:function(){return K}});var Q=e(15009),r=e.n(Q),H=e(99289),m=e.n(H),j=e(54006);function V(h){return R.apply(this,arguments)}function R(){return R=m()(r()().mark(function h(g){return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,j.request)("/api/app/container/status",{method:"POST",data:g}));case 1:case"end":return d.stop()}},h)})),R.apply(this,arguments)}function z(h){return I.apply(this,arguments)}function I(){return I=m()(r()().mark(function h(g){return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,j.request)("/api/app/container/get-list",{data:g,method:"POST"}));case 1:case"end":return d.stop()}},h)})),I.apply(this,arguments)}function K(h){return O.apply(this,arguments)}function O(){return O=m()(r()().mark(function h(g){return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,j.request)("/api/app/container/get-detail",{data:g,method:"POST"}));case 1:case"end":return d.stop()}},h)})),O.apply(this,arguments)}function s(h){return i.apply(this,arguments)}function i(){return i=m()(r()().mark(function h(g){return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,j.request)("/api/app/container/update",{data:g,method:"POST"}));case 1:case"end":return d.stop()}},h)})),i.apply(this,arguments)}function k(){return w.apply(this,arguments)}function w(){return w=m()(r()().mark(function h(){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,j.request)("/api/app/container/prune",{method:"POST"}));case 1:case"end":return c.stop()}},h)})),w.apply(this,arguments)}function S(h){return P.apply(this,arguments)}function P(){return P=m()(r()().mark(function h(g){return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,j.request)("/api/app/container/export",{method:"POST",data:g,responseType:"blob"}));case 1:case"end":return d.stop()}},h)})),P.apply(this,arguments)}},97961:function(ne,Y,e){e.d(Y,{MF:function(){return w},_2:function(){return i},fN:function(){return R},hG:function(){return O},ii:function(){return V},vC:function(){return I}});var Q=e(15009),r=e.n(Q),H=e(99289),m=e.n(H),j=e(54006),V=[{name:"amd64",arch:"amd64"},{name:"arm64",arch:"arm64"},{name:"i386",arch:"386"},{name:"arm/v6",arch:"arm"},{name:"arm/v7",arch:"arm"},{name:"arm/v8",arch:"arm64"},{name:"ppc64le",arch:"ppc64le"},{name:"riscv64",arch:"riscv64"}];function R(P){return z.apply(this,arguments)}function z(){return z=m()(r()().mark(function P(h){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,j.request)("/api/app/image/create-by-dockerfile",{method:"POST",data:h}));case 1:case"end":return c.stop()}},P)})),z.apply(this,arguments)}function I(P){return K.apply(this,arguments)}function K(){return K=m()(r()().mark(function P(h){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,j.request)("/api/app/image/import-by-container-tar",{method:"POST",data:h}));case 1:case"end":return c.stop()}},P)})),K.apply(this,arguments)}function O(P){return s.apply(this,arguments)}function s(){return s=m()(r()().mark(function P(h){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,j.request)("/api/app/image/import-by-image-tar",{method:"POST",data:h}));case 1:case"end":return c.stop()}},P)})),s.apply(this,arguments)}function i(P){return k.apply(this,arguments)}function k(){return k=m()(r()().mark(function P(h){return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,j.request)("/api/common/attach/delete",{method:"POST",data:h});case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},P)})),k.apply(this,arguments)}function w(){return S.apply(this,arguments)}function S(){return S=m()(r()().mark(function P(){return r()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",(0,j.request)("/api/app/image/get-template-list",{method:"POST"}));case 1:case"end":return g.stop()}},P)})),S.apply(this,arguments)}}}]);