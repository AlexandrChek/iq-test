"use strict";(self["webpackChunkiq_test"]=self["webpackChunkiq_test"]||[]).push([[845],{5580:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(3396);const s=e=>((0,n.dD)("data-v-2ed33d47"),e=e(),(0,n.Cn)(),e),a={id:"external"},i=s((()=>(0,n._)("div",{id:"internal"},null,-1))),o=[i];function c(e,t,r,s,i,c){return(0,n.wg)(),(0,n.iD)("div",a,o)}var u={name:"ProgressBar",props:["progress"],mounted(){const e=document.querySelector("#internal");e.style.width=this.progress}},d=r(89);const l=(0,d.Z)(u,[["render",c],["__scopeId","data-v-2ed33d47"]]);var p=l},4845:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(3396);const s=e=>((0,n.dD)("data-v-c8a118cc"),e=e(),(0,n.Cn)(),e),a=s((()=>(0,n._)("pre",null,"            Results\n            processing\n        ",-1))),i=s((()=>(0,n._)("p",{id:"inscription"}," Determining the style of thinking.......... ......................................................... ",-1)));function o(e,t,r,s,o,c){const u=(0,n.up)("ProgressBar"),d=(0,n.up)("CircularAnimation"),l=(0,n.up)("StarsWrapper");return(0,n.wg)(),(0,n.j4)(l,{class:"processing"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{progress:"100%"}),a,(0,n.Wm)(d),i])),_:1})}r(7658);var c=r(5580),u=r(2409);const d=["id"],l=["id"];function p(e,t,r,s,a,i){return(0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(11,(e=>(0,n._)("div",{class:"circle-wrapper",key:e,id:`wrapper-${e}`},[(0,n._)("div",{class:"circle",id:`circle-${e}`},null,8,l)],8,d))),64)}var h={name:"CircularAnimation2"},v=r(89);const g=(0,v.Z)(h,[["render",p],["__scopeId","data-v-6b479445"]]);var m=g,f={name:"ResultsProcessing",components:{ProgressBar:c.Z,StarsWrapper:u.Z,CircularAnimation:m},beforeRouteLeave(e,t,r){e.path.startsWith("/test/")?r(!1):r()},mounted(){this.getResult()},methods:{getResult(){fetch("https://iq-test-handler.glitch.me",{method:"POST",headers:{"Content-Type":"application/json"},body:this.$route.query.answers}).then((e=>e.text())).then((e=>{this.$router.push({path:"/result",query:{result:e}})}))}}};const _=(0,v.Z)(f,[["render",o],["__scopeId","data-v-c8a118cc"]]);var w=_}}]);
//# sourceMappingURL=845.37d93638.js.map