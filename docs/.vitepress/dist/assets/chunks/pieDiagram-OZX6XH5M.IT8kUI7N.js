import{p as U}from"./chunk-OQCM5LHU.BHtELf8H.js";import{ad as y,a5 as z,aE as j,z as q,p as Z,q as H,s as J,g as K,c as Q,b as X,_ as u,l as F,r as Y,d as tt,A as et,E as at,L as rt,k as nt}from"../app.C0n36_hB.js";import{p as it}from"./gitGraph-YCYPL57B.D0GKfm-4.js";import{d as O}from"./arc.D1ILNSRj.js";import{o as st}from"./ordinal.BYWQX77i.js";import"./framework.DX8ksQZH.js";import"./theme.DGCmxsrD.js";import"./baseUniq.DnOS1g_Z.js";import"./basePickBy.CIqyyhZ3.js";import"./clone.BwcQLVQl.js";import"./init.Gi6I4Gst.js";function ot(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function lt(t){return t}function ct(){var t=lt,a=ot,m=null,o=y(0),g=y(z),x=y(0);function i(e){var r,l=(e=j(e)).length,c,A,h=0,p=new Array(l),n=new Array(l),v=+o.apply(this,arguments),w=Math.min(z,Math.max(-z,g.apply(this,arguments)-v)),f,T=Math.min(Math.abs(w)/l,x.apply(this,arguments)),$=T*(w<0?-1:1),d;for(r=0;r<l;++r)(d=n[p[r]=r]=+t(e[r],r,e))>0&&(h+=d);for(a!=null?p.sort(function(S,C){return a(n[S],n[C])}):m!=null&&p.sort(function(S,C){return m(e[S],e[C])}),r=0,A=h?(w-l*$)/h:0;r<l;++r,v=f)c=p[r],d=n[c],f=v+(d>0?d*A:0)+$,n[c]={data:e[c],index:r,value:d,startAngle:v,endAngle:f,padAngle:T};return n}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:y(+e),i):t},i.sortValues=function(e){return arguments.length?(a=e,m=null,i):a},i.sort=function(e){return arguments.length?(m=e,a=null,i):m},i.startAngle=function(e){return arguments.length?(o=typeof e=="function"?e:y(+e),i):o},i.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:y(+e),i):g},i.padAngle=function(e){return arguments.length?(x=typeof e=="function"?e:y(+e),i):x},i}var P=q.pie,G={sections:new Map,showData:!1,config:P},b=G.sections,W=G.showData,pt=structuredClone(P),ut=u(()=>structuredClone(pt),"getConfig"),gt=u(()=>{b=new Map,W=G.showData,Y()},"clear"),dt=u(({label:t,value:a})=>{b.has(t)||(b.set(t,a),F.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ft=u(()=>b,"getSections"),mt=u(t=>{W=t},"setShowData"),ht=u(()=>W,"getShowData"),R={getConfig:ut,clear:gt,setDiagramTitle:Z,getDiagramTitle:H,setAccTitle:J,getAccTitle:K,setAccDescription:Q,getAccDescription:X,addSection:dt,getSections:ft,setShowData:mt,getShowData:ht},vt=u((t,a)=>{U(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),St={parse:u(async t=>{const a=await it("pie",t);F.debug(a),vt(a,R)},"parse")},yt=u(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),xt=yt,At=u(t=>{const a=[...t.entries()].map(o=>({label:o[0],value:o[1]})).sort((o,g)=>g.value-o.value);return ct().value(o=>o.value)(a)},"createPieArcs"),wt=u((t,a,m,o)=>{F.debug(`rendering pie chart
`+t);const g=o.db,x=tt(),i=et(g.getConfig(),x.pie),e=40,r=18,l=4,c=450,A=c,h=at(a),p=h.append("g");p.attr("transform","translate("+A/2+","+c/2+")");const{themeVariables:n}=x;let[v]=rt(n.pieOuterStrokeWidth);v??(v=2);const w=i.textPosition,f=Math.min(A,c)/2-e,T=O().innerRadius(0).outerRadius(f),$=O().innerRadius(f*w).outerRadius(f*w);p.append("circle").attr("cx",0).attr("cy",0).attr("r",f+v/2).attr("class","pieOuterCircle");const d=g.getSections(),S=At(d),C=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12],D=st(C);p.selectAll("mySlices").data(S).enter().append("path").attr("d",T).attr("fill",s=>D(s.data.label)).attr("class","pieCircle");let L=0;d.forEach(s=>{L+=s}),p.selectAll("mySlices").data(S).enter().append("text").text(s=>(s.data.value/L*100).toFixed(0)+"%").attr("transform",s=>"translate("+$.centroid(s)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-(c-50)/2).attr("class","pieTitleText");const M=p.selectAll(".legend").data(D.domain()).enter().append("g").attr("class","legend").attr("transform",(s,E)=>{const k=r+l,_=k*D.domain().length/2,B=12*r,V=E*k-_;return"translate("+B+","+V+")"});M.append("rect").attr("width",r).attr("height",r).style("fill",D).style("stroke",D),M.data(S).append("text").attr("x",r+l).attr("y",r-l).text(s=>{const{label:E,value:k}=s.data;return g.getShowData()?`${E} [${k}]`:E});const I=Math.max(...M.selectAll("text").nodes().map(s=>(s==null?void 0:s.getBoundingClientRect().width)??0)),N=A+e+r+l+I;h.attr("viewBox",`0 0 ${N} ${c}`),nt(h,c,N,i.useMaxWidth)},"draw"),Ct={draw:wt},Lt={parser:St,db:R,renderer:Ct,styles:xt};export{Lt as diagram};
