"use strict";(self["webpackChunkiq_test"]=self["webpackChunkiq_test"]||[]).push([[954],{5580:function(e,r,n){n.d(r,{Z:function(){return p}});var t=n(3396);const s=e=>((0,t.dD)("data-v-2ed33d47"),e=e(),(0,t.Cn)(),e),o={id:"external"},a=s((()=>(0,t._)("div",{id:"internal"},null,-1))),c=[a];function d(e,r,n,s,a,d){return(0,t.wg)(),(0,t.iD)("div",o,c)}var l={name:"ProgressBar",props:["progress"],mounted(){const e=document.querySelector("#internal");e.style.width=this.progress}},i=n(89);const u=(0,i.Z)(l,[["render",d],["__scopeId","data-v-2ed33d47"]]);var p=u},9649:function(e,r,n){n.d(r,{Z:function(){return p}});var t=n(3396),s=n(7139);const o=["id","onClick"],a=["id"],c=["id"];function d(e,r,n,d,l,i){return(0,t.wg)(),(0,t.iD)("div",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(n.answers,((e,r)=>((0,t.wg)(),(0,t.iD)("div",{key:r,class:"ans-wrapper",id:`ans-wrapper-${r}`,onClick:n=>i.selectAns(e,r)},[(0,t._)("div",{class:"circle",id:`circle-${r}`},null,8,a),(0,t._)("p",{class:"answer",id:`ans-${r}`},(0,s.zw)(e),9,c)],8,o)))),128))])}var l={name:"StandartAnswer",props:["answers","itemHeight"],mounted(){const e=document.querySelectorAll(".ans-wrapper");e.forEach((e=>e.style.height=this.itemHeight))},methods:{selectAns(e,r){const n=document.querySelectorAll(".ans-wrapper"),t=document.querySelectorAll(".circle"),s=document.querySelectorAll(".answer");n.forEach((e=>e.style.backgroundColor="rgba(242, 243, 243, 0.15)")),t.forEach((e=>e.style.cssText="background: transparent; border: 1px solid #FFFFFF;")),s.forEach((e=>e.style.color="#FFFFFF"));const o=document.querySelector(`#ans-wrapper-${r}`),a=document.querySelector(`#circle-${r}`),c=document.querySelector(`#ans-${r}`);o.style.backgroundColor="#FFC700",a.style.cssText="background: #2950C2; border: 1px solid #181818;",c.style.color="#0D0C11",t.forEach((e=>e.style.margin=this.circleMrg)),this.$emit("ansSelected",e)}}},i=n(89);const u=(0,i.Z)(l,[["render",d],["__scopeId","data-v-8af1d4d2"]]);var p=u},9954:function(e,r,n){n.r(r),n.d(r,{default:function(){return p}});var t=n(3396),s=n(7139);const o={id:"question"};function a(e,r,n,a,c,d){const l=(0,t.up)("ProgressBar"),i=(0,t.up)("StandartAnswer");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(l,{progress:"9.62%"}),(0,t._)("p",o,(0,s.zw)(c.question),1),(0,t.Wm)(i,{class:"answers",answers:c.answers,itemHeight:"22.32%",onAnsSelected:d.transmitAns},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(e.ans),1)])),_:1},8,["answers","onAnsSelected"])],64)}var c=n(5580),d=n(9649),l={name:"Qst2",components:{ProgressBar:c.Z,StandartAnswer:d.Z},data(){return{question:"Enter your age:",answers:["Under 18","From 18 to 27","From 28 to 37","From 38"]}},methods:{transmitAns(e){let r={age:e};this.$emit("ansTransmited",r)}}},i=n(89);const u=(0,i.Z)(l,[["render",a],["__scopeId","data-v-eb7bdcb4"]]);var p=u}}]);
//# sourceMappingURL=954.11bba62b.js.map