import{i,B as l,P as n,o as a,c as o,m as t,Q as s,g as r,a as d}from"./index-D0rdocrX.js";import{g as c}from"./index-B-CIxz7X.js";var p=i`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,u={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},m=l.extend({name:"card",style:p,classes:u}),f={name:"BaseCard",extends:n,style:m,provide:function(){return{$pcCard:this,$parentInstance:this}}},b={name:"Card",extends:f,inheritAttrs:!1};function $(e,y,v,h,g,k){return a(),o("div",t({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(a(),o("div",t({key:0,class:e.cx("header")},e.ptm("header")),[s(e.$slots,"header")],16)):r("",!0),d("div",t({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(a(),o("div",t({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(a(),o("div",t({key:0,class:e.cx("title")},e.ptm("title")),[s(e.$slots,"title")],16)):r("",!0),e.$slots.subtitle?(a(),o("div",t({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[s(e.$slots,"subtitle")],16)):r("",!0)],16)):r("",!0),d("div",t({class:e.cx("content")},e.ptm("content")),[s(e.$slots,"content")],16),e.$slots.footer?(a(),o("div",t({key:1,class:e.cx("footer")},e.ptm("footer")),[s(e.$slots,"footer")],16)):r("",!0)],16)],16)}b.render=$;var C={name:"Dropdown",extends:c,mounted:function(){console.warn("Deprecated since v4. Use Select component instead.")}};export{b as a,C as s};
