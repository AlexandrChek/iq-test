"use strict";(self["webpackChunkiq_test"]=self["webpackChunkiq_test"]||[]).push([[775],{4248:function(e,n,t){t.d(n,{Z:function(){return p}});var s=t(3396);const r=e=>((0,s.dD)("data-v-4fcaea4c"),e=e(),(0,s.Cn)(),e),a={id:"external"},o=r((()=>(0,s._)("div",{id:"internal"},null,-1))),i=[o];function c(e,n,t,r,o,c){return(0,s.wg)(),(0,s.iD)("div",a,i)}var d={name:"ProgressBar",props:["progress"],mounted(){const e=document.querySelector("#internal");e.style.width=this.progress}},u=t(89);const l=(0,u.Z)(d,[["render",c],["__scopeId","data-v-4fcaea4c"]]);var p=l},6427:function(e,n,t){t.d(n,{Z:function(){return c}});var s=t(3396);function r(e,n,t,r,a,o){return(0,s.wg)(),(0,s.iD)("p",null,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])}var a={name:"QstParagraph"},o=t(89);const i=(0,o.Z)(a,[["render",r],["__scopeId","data-v-2d6c2396"]]);var c=i},5731:function(e,n,t){t.d(n,{Z:function(){return l}});var s=t(3396),r=t(7139);const a={class:"ans-wrapper"},o=["id","onClick"];function i(e,n,t,i,c,d){return(0,s.wg)(),(0,s.iD)("div",a,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.answers,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e,class:"square",id:`ans-${e}`,onClick:n=>d.selectAns(e)},(0,r.zw)(e),9,o)))),128))])}var c={name:"WhiteSquareAnswer",props:["answers"],methods:{selectAns(e){const n=document.querySelectorAll(".square");n.forEach((e=>e.style.cssText="border: none; line-height: 37px;"));const t=document.querySelector(`#ans-${e}`);t.style.cssText="border: 6px solid #FFC700; line-height: 1.5;",this.$emit("ansSelected",e)}}},d=t(89);const u=(0,d.Z)(c,[["render",i],["__scopeId","data-v-03a9b95b"]]);var l=u},3814:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var s=t(3396),r=t(7139),a=t.p+"img/people.0d2c2232.png";const o=e=>((0,s.dD)("data-v-972fe724"),e=e(),(0,s.Cn)(),e),i=o((()=>(0,s._)("img",{src:a,alt:"Dancing men"},null,-1)));function c(e,n,t,a,o,c){const d=(0,s.up)("ProgressBar"),u=(0,s.up)("QstParagraph"),l=(0,s.up)("WhiteSquareAnswer");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(d,{progress:"55.77%"}),(0,s.Wm)(u,{id:"question"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(o.question),1)])),_:1}),i,(0,s.Wm)(l,{answers:o.answers,style:{width:"251px"},onAnsSelected:c.transmitAns},null,8,["answers","onAnsSelected"])],64)}var d=t(4248),u=t(6427),l=t(5731),p={name:"Qst8",components:{ProgressBar:d.Z,QstParagraph:u.Z,WhiteSquareAnswer:l.Z},data(){return{question:"Выберите правильную фигуру из четырёх пронумерованных.",answers:["1","2","3","4"]}},methods:{transmitAns(e){let n={dancingMan:e};this.$emit("ansTransmited",n)}}},v=t(89);const w=(0,v.Z)(p,[["render",c],["__scopeId","data-v-972fe724"]]);var f=w}}]);
//# sourceMappingURL=775.fd9bf238.js.map