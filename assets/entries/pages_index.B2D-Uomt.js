import{i,j as e,s as p,f as d,a as s,p as m,b as u,R as g,P as x,c as f}from"../chunks/chunk-CwoVjROg.js";/* empty css                      */const y=({data:o})=>{const{pageMeta:t}=o,{origin:r}=new URL(o.url),n={"@context":"https://schema.org","@type":"WebSite",name:p,url:r};let l=t.socialImageUrl;return t.socialImageAssetName&&(l=`${r}${i({src:t.socialImageAssetName,format:"raw"})}`),e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:site_name",content:p}),l&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:a,content:c})=>e.jsx("meta",{property:a,content:c},a)),d&&e.jsx("link",{rel:"icon",href:i({src:`${s}${d.name}`,width:144,height:144,fit:"pad",quality:100,format:"auto"})}),m.map(a=>e.jsx("link",{rel:"preload",href:`${s}${a.name}`,as:"font",crossOrigin:"anonymous"},a.id)),u.map(a=>e.jsx("link",{rel:"preload",href:`${s}${a.name}`,as:"image"},a.id))]})},j=Object.freeze(Object.defineProperty({__proto__:null,Head:y},Symbol.toStringTag,{value:"Module"})),h=({data:o})=>{const{system:t,resources:r,url:n}=o;return e.jsx(g.Provider,{value:{imageLoader:i,assetBaseUrl:s,resources:r},children:e.jsx(x,{system:t},n)})},S=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),T={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{T as configValuesSerialized};
