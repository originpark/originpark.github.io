import{_ as e,l as o,E as i,k as n,F as p}from"../app.DW2Z05bZ.js";import{p as g}from"./gitGraph-YCYPL57B.CxgDD4J8.js";import"./framework.DX8ksQZH.js";import"./theme.Cb3aU4gq.js";import"./baseUniq.BAs8w2pr.js";import"./basePickBy.BIeI0PlZ.js";import"./clone.D-shxPeY.js";var m={parse:e(async r=>{const a=await g("info",r);o.debug(a)},"parse")},v={version:p},d=e(()=>v.version,"getVersion"),c={getVersion:d},l=e((r,a,s)=>{o.debug(`rendering info diagram
`+r);const t=i(a);n(t,100,400,!0),t.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${s}`)},"draw"),f={draw:l},S={parser:m,db:c,renderer:f};export{S as diagram};