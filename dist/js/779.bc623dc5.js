"use strict";(self["webpackChunkiq_test"]=self["webpackChunkiq_test"]||[]).push([[779],{4248:function(e,r,t){t.d(r,{Z:function(){return p}});var n=t(3396);const s=e=>((0,n.dD)("data-v-4fcaea4c"),e=e(),(0,n.Cn)(),e),a={id:"external"},c=s((()=>(0,n._)("div",{id:"internal"},null,-1))),o=[c];function i(e,r,t,s,c,i){return(0,n.wg)(),(0,n.iD)("div",a,o)}var l={name:"ProgressBar",props:["progress"],mounted(){const e=document.querySelector("#internal");e.style.width=this.progress}},d=t(89);const u=(0,d.Z)(l,[["render",i],["__scopeId","data-v-4fcaea4c"]]);var p=u},6427:function(e,r,t){t.d(r,{Z:function(){return i}});var n=t(3396);function s(e,r,t,s,a,c){return(0,n.wg)(),(0,n.iD)("p",null,[(0,n.WI)(e.$slots,"default",{},void 0,!0)])}var a={name:"QstParagraph"},c=t(89);const o=(0,c.Z)(a,[["render",s],["__scopeId","data-v-2d6c2396"]]);var i=o},4834:function(e,r,t){t.d(r,{Z:function(){return p}});var n=t(3396),s=t(7139);const a=["id","onClick"],c=["id"],o=["id"];function i(e,r,t,i,l,d){return(0,n.wg)(),(0,n.iD)("div",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.answers,((e,r)=>((0,n.wg)(),(0,n.iD)("div",{key:r,class:"ans-wrapper",id:`ans-wrapper-${r}`,onClick:t=>d.selectAns(e,r)},[(0,n._)("div",{class:"circle",id:`circle-${r}`},null,8,c),(0,n._)("p",{class:"answer",id:`ans-${r}`},(0,s.zw)(e),9,o)],8,a)))),128))])}var l={name:"StandartAnswer",props:["answers","itemHeight","circleMrg"],mounted(){const e=document.querySelectorAll(".ans-wrapper");e.forEach((e=>e.style.height=this.itemHeight));const r=document.querySelectorAll(".circle");r.forEach((e=>e.style.margin=this.circleMrg))},methods:{selectAns(e,r){const t=document.querySelectorAll(".ans-wrapper"),n=document.querySelectorAll(".circle"),s=document.querySelectorAll(".answer");t.forEach((e=>e.style.backgroundColor="rgba(242, 243, 243, 0.15)")),n.forEach((e=>e.style.cssText="background: transparent; border: 1px solid #FFFFFF;")),s.forEach((e=>e.style.color="#FFFFFF"));const a=document.querySelector(`#ans-wrapper-${r}`),c=document.querySelector(`#circle-${r}`),o=document.querySelector(`#ans-${r}`);a.style.backgroundColor="#FFC700",c.style.cssText="background: #2950C2; border: 1px solid #272727;",o.style.color="#272727",this.$emit("ansSelected",e)}}},d=t(89);const u=(0,d.Z)(l,[["render",i],["__scopeId","data-v-1b36adc8"]]);var p=u},7380:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n=t(3396),s=t(7139),a=t.p+"img/piramid.b27953e4.png";const c=e=>((0,n.dD)("data-v-198ee3f3"),e=e(),(0,n.Cn)(),e),o=c((()=>(0,n._)("img",{src:a,alt:"Piramid"},null,-1)));function i(e,r,t,a,c,i){const l=(0,n.up)("ProgressBar"),d=(0,n.up)("QstParagraph"),u=(0,n.up)("StandartAnswer");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(l,{progress:"65.77%"}),(0,n.Wm)(d,{id:"question"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(c.question),1)])),_:1}),o,(0,n.Wm)(u,{class:"answers",answers:c.answers,itemHeight:"30.12%",circleMrg:"auto 28px auto 35px",onAnsSelected:i.transmitAns},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e.ans),1)])),_:1},8,["answers","onAnsSelected"])],64)}var l=t(4248),d=t(6427),u=t(4834),p={name:"Qst10",components:{ProgressBar:l.Z,QstParagraph:d.Z,StandartAnswer:u.Z},data(){return{question:"Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:",answers:["Оно остроконечное","Оно устойчиво","Оно находится в состоянии равновесия"]}},methods:{transmitAns(e){let r={piramidFeature:e};this.$emit("ansTransmited",r)}}},m=t(89);const g=(0,m.Z)(p,[["render",i],["__scopeId","data-v-198ee3f3"]]);var w=g}}]);
//# sourceMappingURL=779.bc623dc5.js.map