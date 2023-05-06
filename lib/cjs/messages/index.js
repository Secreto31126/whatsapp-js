"use strict";var m=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var K=Object.getOwnPropertyNames;var Q=Object.prototype.hasOwnProperty;var W=(n,t)=>{for(var e in t)m(n,e,{get:t[e],enumerable:!0})},X=(n,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of K(t))!Q.call(n,s)&&s!==e&&m(n,s,{get:()=>t[s],enumerable:!(r=G(t,s))||r.enumerable});return n};var Z=n=>X(m({},"__esModule",{value:!0}),n);var et={};W(et,{ActionButtons:()=>A,ActionCatalog:()=>T,ActionList:()=>S,Address:()=>f,Audio:()=>D,Birthday:()=>_,Body:()=>M,BodyComponent:()=>g,BodyParameter:()=>U,Button:()=>L,ButtonComponent:()=>j,ButtonParameter:()=>y,Contacts:()=>h,Currency:()=>q,DateTime:()=>V,Document:()=>I,Email:()=>w,Footer:()=>B,Header:()=>O,HeaderComponent:()=>z,HeaderParameter:()=>F,Image:()=>R,Interactive:()=>v,Language:()=>u,ListSection:()=>k,Location:()=>c,Media:()=>i,Name:()=>b,Organization:()=>x,Phone:()=>C,Product:()=>N,ProductSection:()=>d,Reaction:()=>p,Row:()=>P,Sticker:()=>H,Template:()=>$,Text:()=>l,Url:()=>E,Video:()=>J});module.exports=Z(et);var l=class{get _type(){return"text"}constructor(t,e){if(t.length>4096)throw new Error("Text body must be less than 4096 characters");this.body=t,e&&(this.preview_url=e)}_build(){return JSON.stringify(this)}};var c=class{get _type(){return"location"}constructor(t,e,r,s){this.longitude=t,this.latitude=e,r&&(this.name=r),s&&(this.address=s)}_build(){return JSON.stringify(this)}};var p=class{get _type(){return"reaction"}constructor(t,e=""){if(e&&!/^\p{Extended_Pictographic}$/u.test(e))throw new Error("Reaction emoji must be a single emoji");this.message_id=t,this.emoji=e}_build(){return JSON.stringify(this)}};var h=class{get _type(){return"contacts"}constructor(...t){this.component=[];for(let e of t){let r={};for(let s of e){let o=s._type;if(s._many)o in r||Object.defineProperty(r,o,{value:[]}),r[o].push(s._build());else{if(o in r)throw new Error(`Contact already has a ${o} component and _many is set to false`);r[o]=s._build()}}if(!r.name)throw new Error("Contact must have a name component");this.component.push(r)}}_build(){return JSON.stringify(this.component)}},f=class{get _many(){return!0}get _type(){return"addresses"}constructor(t,e,r,s,o,a,Y){t&&(this.country=t),e&&(this.country_code=e),r&&(this.state=r),s&&(this.city=s),o&&(this.street=o),a&&(this.zip=a),Y&&(this.type=Y)}_build(){return this}},_=class{get _many(){return!1}get _type(){return"birthday"}constructor(t,e,r){if(t.length!==4)throw new Error("Year must be 4 digits");if(e.length!==2)throw new Error("Month must be 2 digits");if(r.length!==2)throw new Error("Day must be 2 digits");this.birthday=`${t}-${e}-${r}`}_build(){return this.birthday}},w=class{get _many(){return!0}get _type(){return"emails"}constructor(t,e){t&&(this.email=t),e&&(this.type=e)}_build(){return this}},b=class{get _many(){return!1}get _type(){return"name"}constructor(t,e,r,s,o,a){if(this.formatted_name=t,e&&(this.first_name=e),r&&(this.last_name=r),s&&(this.middle_name=s),o&&(this.suffix=o),a&&(this.prefix=a),Object.keys(this).length<2)throw new Error("Name must have at least one of the following: first_name, last_name, middle_name, prefix, suffix")}_build(){return this}},x=class{get _many(){return!1}get _type(){return"org"}constructor(t,e,r){t&&(this.company=t),e&&(this.department=e),r&&(this.title=r)}_build(){return this}},C=class{get _many(){return!0}get _type(){return"phones"}constructor(t,e,r){t&&(this.phone=t),e&&(this.type=e),r&&(this.wa_id=r)}_build(){return this}},E=class{get _many(){return!0}get _type(){return"urls"}constructor(t,e){t&&(this.url=t),e&&(this.type=e)}_build(){return this}};var v=class{get _type(){return"interactive"}constructor(t,e,r,s){if(t._type!=="product"&&!e)throw new Error("Interactive must have a body component");if(t._type==="product"&&r)throw new Error("Interactive must not have a header component if action is a single product");if(t._type==="product_list"&&r?.type!=="text")throw new Error("Interactive must have a text header component if action is a product list");if(r&&t._type!=="button"&&r?.type!=="text")throw new Error("Interactive header must be of type text");this.type=t._type,this.action=t,e&&(this.body=e),r&&(this.header=r),s&&(this.footer=s)}_build(){return JSON.stringify(this)}},M=class{constructor(t){if(t.length>1024)throw new Error("Body text must be less than 1024 characters");this.text=t}},B=class{constructor(t){if(t.length>60)throw new Error("Footer text must be 60 characters or less");this.text=t}},O=class{constructor(t){if(typeof t=="string"){if(t.length>60)throw new Error("Header text must be 60 characters or less");this.type="text"}else if(this.type=t._type,"caption"in t)throw new Error(`Header ${this.type} must not have a caption`);this[this.type]=t}},A=class{get _type(){return"button"}constructor(...t){if(t.length>3)throw new Error("Reply buttons must have between 1 and 3 buttons");let e=t.map(s=>s[s.type].id);if(e.length!==new Set(e).size)throw new Error("Reply buttons must have unique ids");let r=t.map(s=>s[s.type].title);if(r.length!==new Set(r).size)throw new Error("Reply buttons must have unique titles");this.buttons=t}},L=class{constructor(t,e){if(t.length>256)throw new Error("Button id must be 256 characters or less");if(/^ | $/.test(t))throw new Error("Button id cannot have leading or trailing spaces");if(e.length>20)throw new Error("Button title must be 20 characters or less");this.type="reply",this.reply={title:e,id:t}}},S=class{get _type(){return"list"}constructor(t,...e){if(t.length>20)throw new Error("Button content must be 20 characters or less");if(e.length>10)throw new Error("Action must have between 1 and 10 sections");if(e.length>1&&!e.every(r=>"title"in r))throw new Error("All sections must have a title if more than 1 section is provided");this.button=t,this.sections=e}},k=class{constructor(t,...e){if(t&&t.length>24)throw new Error("Section title must be 24 characters or less");if(!e.length||e.length>10)throw new Error("Section must have between 1 and 10 rows");t&&(this.title=t),this.rows=e}},P=class{constructor(t,e,r){if(t.length>200)throw new Error("Row id must be 200 characters or less");if(e.length>24)throw new Error("Row title must be 24 characters or less");if(r&&r.length>72)throw new Error("Row description must be 72 characters or less");this.id=t,this.title=e,r&&(this.description=r)}};function tt(n){return n[0]instanceof d}var T=class{get _type(){return this.product_retailer_id?"product":"product_list"}constructor(t,...e){let r=tt(e);if(r&&e.length>1){if(e.length>10)throw new Error("Catalog must have between 1 and 10 product sections");for(let s of e)if(!("title"in s))throw new Error("All sections must have a title if more than 1 section is provided")}this.catalog_id=t,r?this.sections=e:this.product_retailer_id=e[0].product_retailer_id}},d=class{constructor(t,...e){if(t&&t.length>24)throw new Error("Section title must be 24 characters or less");if(e.length>30)throw new Error("Section must have between 1 and 30 products");t&&(this.title=t),this.product_items=e}},N=class{constructor(t){this.product_retailer_id=t}};var i=class{constructor(t,e=!1){this[e?"id":"link"]=t}_build(){return JSON.stringify(this)}},D=class extends i{get _type(){return"audio"}constructor(t,e=!1){super(t,e)}},I=class extends i{constructor(e,r=!1,s,o){super(e,r);s&&(this.caption=s),o&&(this.filename=o)}get _type(){return"document"}},R=class extends i{constructor(e,r=!1,s){super(e,r);s&&(this.caption=s)}get _type(){return"image"}},H=class extends i{get _type(){return"sticker"}constructor(t,e=!1){super(t,e)}},J=class extends i{constructor(e,r=!1,s){super(e,r);s&&(this.caption=s)}get _type(){return"video"}};var $=class{get _type(){return"template"}constructor(t,e,...r){if(this.name=t,this.language=typeof e=="string"?new u(e):e,r.length){let s=r.length===1&&r[0]instanceof g;this.components=r.map(o=>o._build(s)).flat()}}_build(){return JSON.stringify(this)}},u=class{constructor(t,e="deterministic"){this.policy=e,this.code=t}},q=class{get _type(){return"currency"}constructor(t,e,r){if(t<=0)throw new Error("Currency must have an amount_1000 greater than 0");this.amount_1000=t,this.code=e,this.fallback_value=r}},V=class{get _type(){return"date_time"}constructor(t){this.fallback_value=t}},j=class{constructor(t,...e){if(e.length>3)throw new Error("ButtonComponent must have between 1 and 3 parameters");let r=t==="url"?"text":"payload",s=e.map(o=>new y(o,r));this.type="button",this.sub_type=t,this.parameters=s}_build(){return this.parameters.map((t,e)=>({type:this.type,sub_type:this.sub_type,index:e.toString(),parameters:[t]}))}},y=class{constructor(t,e){this.type=e,this[e]=t}},z=class{constructor(...t){this.type="header",this.parameters=t}_build(){return this}},F=class{constructor(t){if(typeof t=="string"){if(t.length>60)throw new Error("Header text must be 60 characters or less");this.type="text"}else{if(t._type==="location"&&!(t.name&&t.address))throw new Error("Header location must have a name and address");this.type=t._type}Object.defineProperty(this,this.type,{value:t})}},g=class{constructor(...t){this.type="body",this.parameters=t}_build(t){if(this.parameters&&!t){for(let e of this.parameters)if(e.text&&e.text?.length>1024)throw new Error("Body text must be 1024 characters or less")}return this}},U=class{constructor(t){if(typeof t=="string"){if(t.length>32768)throw new Error("Body text must be 32768 characters or less");this.type="text"}else this.type=t._type;Object.defineProperty(this,this.type,{value:t})}};0&&(module.exports={ActionButtons,ActionCatalog,ActionList,Address,Audio,Birthday,Body,BodyComponent,BodyParameter,Button,ButtonComponent,ButtonParameter,Contacts,Currency,DateTime,Document,Email,Footer,Header,HeaderComponent,HeaderParameter,Image,Interactive,Language,ListSection,Location,Media,Name,Organization,Phone,Product,ProductSection,Reaction,Row,Sticker,Template,Text,Url,Video});