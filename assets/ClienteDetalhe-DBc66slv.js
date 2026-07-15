import{i as L,B as A,j as R,O as $,P as U,o as c,c as d,Q as z,m as u,e as C,R as P,g as b,t as l,f as w,h,S as q,a as i,F as B,r as E,b as n,_ as ee,n as x,d as p,s as te,l as ie}from"./index-D0rdocrX.js";import{_ as j}from"./ClienteFormDialog-JAs4B9Zl.js";import{f as se,c as ae,s as re,a as oe,b as le,d as ne}from"./index-B-CIxz7X.js";import{a as ce,s as de}from"./index-Dx8iC6cF.js";import{a as S,s as ue}from"./api-DbVJb6Kl.js";import{s as pe}from"./index-ChK9RKX0.js";var me=L`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,ve={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},be=A.extend({name:"chip",style:me,classes:ve}),he={name:"BaseChip",extends:U,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:be,provide:function(){return{$pcChip:this,$parentInstance:this}}},M={name:"Chip",extends:he,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(t){(t.key==="Enter"||t.key==="Backspace")&&this.close(t)},close:function(t){this.visible=!1,this.$emit("remove",t)}},computed:{dataP:function(){return R({removable:this.removable})}},components:{TimesCircleIcon:$}},ge=["aria-label","data-p"],fe=["src"];function ye(e,t,a,m,s,r){return s.visible?(c(),d("div",u({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root"),{"data-p":r.dataP}),[z(e.$slots,"default",{},function(){return[e.image?(c(),d("img",u({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,fe)):e.$slots.icon?(c(),C(P(e.$slots.icon),u({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(c(),d("span",u({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):b("",!0),e.label?(c(),d("div",u({key:3,class:e.cx("label")},e.ptm("label")),l(e.label),17)):b("",!0)]}),e.removable?z(e.$slots,"removeicon",{key:0,removeCallback:r.close,keydownCallback:r.onKeydown},function(){return[(c(),C(P(e.removeIcon?"span":"TimesCircleIcon"),u({class:[e.cx("removeIcon"),e.removeIcon],onClick:r.close,onKeydown:r.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):b("",!0)],16,ge)):b("",!0)}M.render=ye;var ke=L`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`,xe={root:function(t){var a=t.props;return["p-avatar p-component",{"p-avatar-image":a.image!=null,"p-avatar-circle":a.shape==="circle","p-avatar-lg":a.size==="large","p-avatar-xl":a.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},we=A.extend({name:"avatar",style:ke,classes:xe}),Ce={name:"BaseAvatar",extends:U,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:we,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function I(e){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(e)}function O(e,t,a){return(t=_e(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function _e(e){var t=Se(e,"string");return I(t)=="symbol"?t:t+""}function Se(e,t){if(I(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var m=a.call(e,t);if(I(m)!="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var V={name:"Avatar",extends:Ce,inheritAttrs:!1,emits:["error"],methods:{onError:function(t){this.$emit("error",t)}},computed:{dataP:function(){return R(O(O({},this.shape,this.shape),this.size,this.size))}}},ze=["aria-labelledby","aria-label","data-p"],Pe=["data-p"],Ie=["data-p"],Ue=["src","alt","data-p"];function Be(e,t,a,m,s,r){return c(),d("div",u({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi("root"),{"data-p":r.dataP}),[z(e.$slots,"default",{},function(){return[e.label?(c(),d("span",u({key:0,class:e.cx("label")},e.ptm("label"),{"data-p":r.dataP}),l(e.label),17,Pe)):e.$slots.icon?(c(),C(P(e.$slots.icon),{key:1,class:w(e.cx("icon"))},null,8,["class"])):e.icon?(c(),d("span",u({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon"),{"data-p":r.dataP}),null,16,Ie)):e.image?(c(),d("img",u({key:3,src:e.image,alt:e.ariaLabel,onError:t[0]||(t[0]=function(){return r.onError&&r.onError.apply(r,arguments)})},e.ptm("image"),{"data-p":r.dataP}),null,16,Ue)):b("",!0)]})],16,ze)}V.render=Be;var Le=L`
    .p-progressbar {
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`,Ae={root:function(t){var a=t.instance;return["p-progressbar p-component",{"p-progressbar-determinate":a.determinate,"p-progressbar-indeterminate":a.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},De=A.extend({name:"progressbar",style:Le,classes:Ae}),Ee={name:"BaseProgressBar",extends:U,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:De,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},N={name:"ProgressBar",extends:Ee,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"},dataP:function(){return R({determinate:this.determinate,indeterminate:this.indeterminate})}}},Re=["aria-valuenow","data-p"],Te=["data-p"],qe=["data-p"],Oe=["data-p"];function je(e,t,a,m,s,r){return c(),d("div",u({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100","data-p":r.dataP},e.ptmi("root")),[r.determinate?(c(),d("div",u({key:0,class:e.cx("value"),style:r.progressStyle,"data-p":r.dataP},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(c(),d("div",u({key:0,class:e.cx("label"),"data-p":r.dataP},e.ptm("label")),[z(e.$slots,"default",{},function(){return[h(l(e.value+"%"),1)]})],16,qe)):b("",!0)],16,Te)):r.indeterminate?(c(),d("div",u({key:1,class:e.cx("value"),"data-p":r.dataP},e.ptm("value")),null,16,Oe)):b("",!0)],16,Re)}N.render=je;var Me=L`
    .p-breadcrumb {
        background: dt('breadcrumb.background');
        padding: dt('breadcrumb.padding');
        overflow-x: auto;
    }

    .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: dt('breadcrumb.gap');
    }

    .p-breadcrumb-separator {
        display: flex;
        align-items: center;
        color: dt('breadcrumb.separator.color');
    }

    .p-breadcrumb-separator-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }

    .p-breadcrumb-item-link {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: dt('breadcrumb.item.gap');
        transition:
            background dt('breadcrumb.transition.duration'),
            color dt('breadcrumb.transition.duration'),
            outline-color dt('breadcrumb.transition.duration'),
            box-shadow dt('breadcrumb.transition.duration');
        border-radius: dt('breadcrumb.item.border.radius');
        outline-color: transparent;
        color: dt('breadcrumb.item.color');
    }

    .p-breadcrumb-item-link:focus-visible {
        box-shadow: dt('breadcrumb.item.focus.ring.shadow');
        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
        outline-offset: dt('breadcrumb.item.focus.ring.offset');
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
        color: dt('breadcrumb.item.hover.color');
    }

    .p-breadcrumb-item-label {
        transition: inherit;
    }

    .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.color');
        transition: inherit;
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.hover.color');
    }
`,Ve={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",separatorIcon:"p-breadcrumb-separator-icon",item:function(t){var a=t.instance;return["p-breadcrumb-item",{"p-disabled":a.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},Ne=A.extend({name:"breadcrumb",style:Me,classes:Ve}),Fe={name:"BaseBreadcrumb",extends:U,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:Ne,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},F={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:U,props:{item:null,templates:null,index:null},methods:{onClick:function(t){this.item.command&&this.item.command({originalEvent:t,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var t=this.item,a=t.to,m=t.url,s=typeof window<"u"?window.location.pathname:"";return a===s||m===s?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var t=this;return{action:u({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(m){return t.onClick(m)}},this.ptm("itemLink",this.ptmOptions)),icon:u({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:u({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},Ke=["href","target","aria-current"];function Qe(e,t,a,m,s,r){return r.visible()?(c(),d("li",u({key:0,class:[e.cx("item"),a.item.class]},e.ptm("item",r.ptmOptions)),[a.templates.item?(c(),C(P(a.templates.item),{key:1,item:a.item,label:r.label(),props:r.getMenuItemProps},null,8,["item","label","props"])):(c(),d("a",u({key:0,href:a.item.url||"#",class:e.cx("itemLink"),target:a.item.target,"aria-current":r.isCurrentUrl(),onClick:t[0]||(t[0]=function(){return r.onClick&&r.onClick.apply(r,arguments)})},e.ptm("itemLink",r.ptmOptions)),[a.templates&&a.templates.itemicon?(c(),C(P(a.templates.itemicon),{key:0,item:a.item,class:w(e.cx("itemIcon",r.ptmOptions))},null,8,["item","class"])):a.item.icon?(c(),d("span",u({key:1,class:[e.cx("itemIcon"),a.item.icon]},e.ptm("itemIcon",r.ptmOptions)),null,16)):b("",!0),a.item.label?(c(),d("span",u({key:2,class:e.cx("itemLabel")},e.ptm("itemLabel",r.ptmOptions)),l(r.label()),17)):b("",!0)],16,Ke))],16)):b("",!0)}F.render=Qe;var K={name:"Breadcrumb",extends:Fe,inheritAttrs:!1,components:{BreadcrumbItem:F,ChevronRightIcon:se}};function He(e,t,a,m,s,r){var v=q("BreadcrumbItem"),f=q("ChevronRightIcon");return c(),d("nav",u({class:e.cx("root")},e.ptmi("root")),[i("ol",u({class:e.cx("list")},e.ptm("list")),[e.home?(c(),C(v,u({key:0,item:e.home,class:e.cx("homeItem"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):b("",!0),(c(!0),d(B,null,E(e.model,function(_,g){return c(),d(B,{key:_.label+"_"+g},[e.home||g!==0?(c(),d("li",u({key:0,class:e.cx("separator"),ref_for:!0},e.ptm("separator")),[z(e.$slots,"separator",{},function(){return[n(f,u({"aria-hidden":"true",class:e.cx("separatorIcon"),ref_for:!0},e.ptm("separatorIcon")),null,16,["class"])]})],16)):b("",!0),n(v,{item:_,index:g,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}K.render=He;const Ge={name:"ClienteDetalhe",components:{ClienteFormDialog:j},data(){return{filtroUsuario:"",filtroStatusUser:null,statusUserOpts:[{label:"Todos",value:null},{label:"Ativo",value:"ativo"},{label:"Inativo",value:"inativo"}],breadHome:{icon:"pi pi-home",to:"/admin/dashboard"},breadItems:[{label:"Clientes",to:"/admin/clientes"},{label:"..."}],cliente:{nome:"",iniciais:"",cor:"#6366f1",plano:"",status:"",cidade:"",uf:"",segmento:"",cnpj:"",desde:"",usuariosAtivos:0,limiteUsuarios:0},uso:{trilhasCriadas:0,trilhasIA:0,quizzesRealizados:0,mediaDiaria:0,taxaConclusao:0},ia:{requisicoes:0},usoMensal:[],trilhasPorSetor:[],usuarios:[],dialogUsuario:!1,usuarioSelecionado:null,dialogEditar:!1,dialogDesativar:!1,carregando:!1}},mounted(){this.loadClienteData()},computed:{usoPct(){return this.cliente.limiteUsuarios?Math.round(this.cliente.usuariosAtivos/this.cliente.limiteUsuarios*100):0},maxQuizzesMes(){return Math.max(...this.usoMensal.map(e=>e.quizzes),1)},usuariosFiltrados(){return this.usuarios.filter(e=>{const t=!this.filtroUsuario||e.nome.toLowerCase().includes(this.filtroUsuario.toLowerCase())||e.email.toLowerCase().includes(this.filtroUsuario.toLowerCase()),a=!this.filtroStatusUser||e.status===this.filtroStatusUser;return t&&a})}},methods:{async runTrackedRequest(e,t,a="GET"){try{return await t()}catch(m){throw console.error(`Erro ${a} ${e}:`,m),m}},async loadClienteData(){var t,a,m;this.carregando=!0;const e=this.$route.params.id||1;try{const[s,r]=await Promise.all([this.runTrackedRequest(`clientes/${e}/`,async()=>await S.getClienteById(e)),this.runTrackedRequest(`clientes/${e}/stats/`,async()=>await S.getClienteStats(e))]);if(s!=null&&s.data&&(Object.assign(this.cliente,s.data),this.breadItems=[{label:"Clientes",to:"/admin/clientes"},{label:this.cliente.nome}]),r!=null&&r.data){const v=r.data;Object.assign(this.uso,{trilhasCriadas:v.trilhasCriadas??this.uso.trilhasCriadas,trilhasIA:v.trilhasIA??this.uso.trilhasIA,quizzesRealizados:v.quizzesRealizados??this.uso.quizzesRealizados,mediaDiaria:v.mediaDiaria??this.uso.mediaDiaria,taxaConclusao:v.taxaConclusao??this.uso.taxaConclusao}),v.requisicoesIA!=null&&(this.ia.requisicoes=v.requisicoesIA),(t=v.usoMensal)!=null&&t.length&&(this.usoMensal=v.usoMensal),(a=v.trilhasPorSetor)!=null&&a.length&&(this.trilhasPorSetor=v.trilhasPorSetor),(m=v.usuarios)!=null&&m.length&&(this.usuarios=v.usuarios)}}catch(s){console.error("Erro ao carregar dados do cliente:",s)}finally{this.carregando=!1}},handleEditarCliente(){this.dialogEditar=!0},async salvarEdicao(e){const t=this.$route.params.id||1;try{await this.runTrackedRequest(`clientes/${t}/`,async()=>{const a=await S.putCliente(t,e);a!=null&&a.data&&Object.assign(this.cliente,a.data)},"PUT"),this.dialogEditar=!1,this.$toast.add({severity:"success",summary:"Sucesso",detail:"Cliente atualizado com sucesso.",life:3e3})}catch(a){console.error("Erro ao editar cliente:",a),this.$toast.add({severity:"error",summary:"Erro",detail:"Não foi possível salvar as alterações.",life:4e3})}},async confirmarAlterarStatus(){const e=this.$route.params.id||1,t=this.cliente.status==="ativo"?"inativo":"ativo";try{await this.runTrackedRequest(`clientes/${e}/`,async()=>{await S.putCliente(e,{status:t}),this.cliente.status=t},"PUT"),this.dialogDesativar=!1,this.$toast.add({severity:"success",summary:"Sucesso",detail:`Cliente ${t==="ativo"?"reativado":"desativado"} com sucesso.`,life:3e3})}catch(a){console.error("Erro ao alterar status do cliente:",a),this.$toast.add({severity:"error",summary:"Erro",detail:"Não foi possível alterar o status.",life:4e3})}},async handleUsuarioClick(e){const t=this.usuarios.find(a=>a.id===e);if(t){this.usuarioSelecionado=t,this.dialogUsuario=!0;return}try{const a=await this.runTrackedRequest(`usuarios/${e}/`,async()=>await S.getUserById(e));a!=null&&a.data&&(this.usuarioSelecionado=a.data,this.dialogUsuario=!0)}catch(a){console.error("Erro ao carregar usuario:",a)}},statusSeverity(e){return{ativo:"success",inativo:"danger"}[e]||"secondary"}}},Je={class:"cliente-detalhe"},Xe={class:"surface-card border-round p-4 mb-4"},We={class:"flex align-items-start gap-4"},Ye={class:"flex-1"},Ze={class:"flex align-items-center gap-2 mb-1"},$e={class:"m-0 text-900 text-2xl font-bold"},et={key:0,class:"pi pi-crown mr-1",style:{"font-size":"0.75rem"}},tt={class:"flex align-items-center gap-3 text-500 text-sm mb-3"},it={class:"usuarios-resumo"},st={class:"usuarios-resumo-header"},at={class:"text-500 font-normal ml-1"},rt={class:"flex flex-column align-items-end gap-2"},ot={class:"flex gap-2"},lt={class:"metrics-grid mb-4"},nt={class:"flex align-items-center gap-3"},ct={class:"text-2xl font-bold text-900"},dt={class:"text-xs text-500 mt-1"},ut={class:"flex align-items-center gap-3"},pt={class:"text-2xl font-bold text-900"},mt={class:"text-xs text-500 mt-1"},vt={class:"flex align-items-center gap-3"},bt={class:"text-2xl font-bold text-900"},ht={class:"body-grid"},gt={class:"main-col"},ft={class:"uso-grid mb-4"},yt={class:"uso-bar-wrap"},kt={class:"uso-bar-label"},xt={class:"uso-bar-val"},wt={class:"flex gap-4"},Ct={class:"flex-1"},_t={class:"flex align-items-center justify-content-between gap-2 w-full mb-1"},St={class:"text-xs text-700"},zt={class:"text-xs font-semibold flex-shrink-0"},Pt={class:"flex-1 text-center"},It={class:"taxa-circle"},Ut={viewBox:"0 0 64 64",width:"80",height:"80"},Bt=["stroke-dashoffset"],Lt={class:"taxa-val"},At={class:"usuarios-card-header"},Dt={class:"flex align-items-center gap-2"},Et={class:"flex align-items-center gap-2"},Rt={class:"font-semibold text-900 text-sm"},Tt={class:"text-xs text-500"},qt={class:"usr-col-sub mt-1"},Ot={class:"usr-col-main"},jt={class:"usr-col-sub"},Mt={class:"usr-pontuacao"},Vt={class:"usr-col-main"},Nt={class:"usr-col-main"},Ft={class:"usr-col-sub"},Kt={class:"sidebar-col"},Qt={class:"info-list"},Ht={class:"info-item"},Gt={class:"info-item"},Jt={class:"info-value"},Xt={class:"excluir-content"},Wt={class:"excluir-aviso"},Yt={key:0,class:"ucard"},Zt={class:"ucard-avatar-wrap"},$t=["src"],ei={class:"ucard-identity"},ti={class:"ucard-nome"},ii={class:"ucard-email"},si={class:"ucard-badges"},ai={class:"ucard-metrics"},ri={class:"ucard-metric"},oi={class:"ucard-metric-val"},li={class:"ucard-metric"},ni={class:"ucard-metric-val"},ci={class:"ucard-details"},di={class:"ucard-detail-item"},ui={class:"ucard-detail-val"},pi={class:"ucard-detail-item"},mi={class:"ucard-detail-val"},vi={class:"ucard-detail-item"},bi={class:"ucard-detail-val"},hi={class:"ucard-detail-item"},gi={class:"ucard-detail-val"};function fi(e,t,a,m,s,r){const v=K,f=ae,_=N,g=te,k=ce,D=pe,Q=re,H=ue,G=oe,J=de,X=V,y=le,W=M,Y=ne,Z=j,T=ie;return c(),d("div",Je,[n(v,{home:s.breadHome,model:s.breadItems,class:"mb-4 surface-card border-round px-3 py-2"},null,8,["home","model"]),i("div",Xe,[i("div",We,[i("div",{class:"empresa-avatar flex-shrink-0",style:x({background:s.cliente.cor})},l(s.cliente.iniciais),5),i("div",Ye,[i("div",Ze,[i("h2",$e,l(s.cliente.nome),1),n(f,{value:s.cliente.plano,class:w("plano-"+s.cliente.plano.toLowerCase())},{default:p(()=>[s.cliente.plano==="Enterprise"?(c(),d("i",et)):b("",!0),h(" "+l(s.cliente.plano),1)]),_:1},8,["value","class"]),n(f,{value:s.cliente.status,severity:r.statusSeverity(s.cliente.status)},null,8,["value","severity"])]),i("div",tt,[i("span",null,[t[8]||(t[8]=i("i",{class:"pi pi-map-marker mr-1"},null,-1)),h(l(s.cliente.cidade)+", "+l(s.cliente.uf),1)]),i("span",null,[t[9]||(t[9]=i("i",{class:"pi pi-tag mr-1"},null,-1)),h(l(s.cliente.segmentoDisplay||s.cliente.segmento),1)]),i("span",null,[t[10]||(t[10]=i("i",{class:"pi pi-id-card mr-1"},null,-1)),h("CNPJ "+l(s.cliente.cnpj),1)]),i("span",null,[t[11]||(t[11]=i("i",{class:"pi pi-calendar mr-1"},null,-1)),h("Cliente desde "+l(s.cliente.desde),1)])]),i("div",it,[i("div",st,[t[12]||(t[12]=i("span",{class:"text-sm text-600"},"Usuários ativos",-1)),i("span",{class:w(["text-sm font-semibold",r.usoPct>90?"text-red-500":"text-900"])},[h(l(s.cliente.usuariosAtivos)+" / "+l(s.cliente.limiteUsuarios)+" ",1),i("span",at,"("+l(r.usoPct)+"%)",1)],2)]),n(_,{value:r.usoPct,showValue:!1,class:"usuarios-bar",pt:{value:{style:{background:r.usoPct>90?"#ef4444":r.usoPct>70?"#f59e0b":"var(--primary-color)"}}}},null,8,["value","pt"])])]),i("div",rt,[i("div",ot,[n(g,{label:"Editar",icon:"pi pi-pencil",size:"small",outlined:"",onClick:r.handleEditarCliente},null,8,["onClick"]),n(g,{label:s.cliente.status==="ativo"?"Desativar":"Ativar",icon:s.cliente.status==="ativo"?"pi pi-ban":"pi pi-check-circle",severity:s.cliente.status==="ativo"?"danger":"success",size:"small",outlined:"",onClick:t[0]||(t[0]=o=>s.dialogDesativar=!0)},null,8,["label","icon","severity"])])])])]),i("div",lt,[n(k,{class:"metric-card"},{content:p(()=>[i("div",nt,[t[15]||(t[15]=i("div",{class:"metric-icon bg-blue-50"},[i("i",{class:"pi pi-book text-blue-500"})],-1)),i("div",null,[t[14]||(t[14]=i("div",{class:"text-xs text-500 uppercase mb-1"},"Trilhas Criadas",-1)),i("div",ct,l(s.uso.trilhasCriadas),1),i("div",dt,[t[13]||(t[13]=i("i",{class:"pi pi-sparkles mr-1 text-violet-400"},null,-1)),h(l(s.uso.trilhasIA)+" geradas com IA",1)])])])]),_:1}),n(k,{class:"metric-card"},{content:p(()=>[i("div",ut,[t[18]||(t[18]=i("div",{class:"metric-icon bg-green-50"},[i("i",{class:"pi pi-check-circle text-green-500"})],-1)),i("div",null,[t[17]||(t[17]=i("div",{class:"text-xs text-500 uppercase mb-1"},"Quizzes Realizados",-1)),i("div",pt,l(s.uso.quizzesRealizados.toLocaleString("pt-BR")),1),i("div",mt,[t[16]||(t[16]=i("i",{class:"pi pi-chart-line mr-1 text-green-400"},null,-1)),h(l(s.uso.mediaDiaria)+" por dia (média)",1)])])])]),_:1}),n(k,{class:"metric-card"},{content:p(()=>[i("div",vt,[t[21]||(t[21]=i("div",{class:"metric-icon bg-violet-50"},[i("i",{class:"pi pi-bolt text-violet-500"})],-1)),i("div",null,[t[19]||(t[19]=i("div",{class:"text-xs text-500 uppercase mb-1"},"Requisições IA",-1)),i("div",bt,l(s.ia.requisicoes.toLocaleString("pt-BR")),1),t[20]||(t[20]=i("div",{class:"text-xs text-500 mt-1"},[i("i",{class:"pi pi-calendar mr-1"}),h("Mês atual")],-1))])])]),_:1})]),i("div",ht,[i("div",gt,[n(k,{class:"mb-4"},{title:p(()=>t[22]||(t[22]=[i("div",{class:"flex align-items-center gap-2"},[i("i",{class:"pi pi-chart-bar text-primary"}),h(" Uso do Sistema ")],-1)])),content:p(()=>[i("div",ft,[(c(!0),d(B,null,E(s.usoMensal,o=>(c(),d("div",{key:o.mes,class:"uso-bar-item"},[i("div",yt,[i("div",{class:"uso-bar-fill",style:x({height:o.quizzes/r.maxQuizzesMes*64+"px",background:"var(--primary-color)",opacity:o.atual?1:.4})},null,4)]),i("div",kt,l(o.mes),1),i("div",xt,l(o.quizzes),1)]))),128))]),n(D),i("div",wt,[i("div",Ct,[t[23]||(t[23]=i("div",{class:"text-xs text-500 uppercase mb-2"},"Trilhas por Setor",-1)),(c(!0),d(B,null,E(s.trilhasPorSetor,o=>(c(),d("div",{key:o.setor,class:"mb-2"},[i("div",_t,[i("span",St,l(o.setor),1),i("span",zt,l(o.qtd),1)]),n(_,{value:o.pct,showValue:!1,style:{height:"6px"},pt:{value:{style:{background:o.cor}}}},null,8,["value","pt"])]))),128))]),n(D,{layout:"vertical"}),i("div",Pt,[t[25]||(t[25]=i("div",{class:"text-xs text-500 uppercase mb-2"},"Taxa de Conclusão",-1)),i("div",It,[(c(),d("svg",Ut,[t[24]||(t[24]=i("circle",{cx:"32",cy:"32",r:"28",fill:"none",stroke:"var(--surface-200)","stroke-width":"8"},null,-1)),i("circle",{cx:"32",cy:"32",r:"28",fill:"none",stroke:"var(--primary-color)","stroke-width":"8","stroke-dasharray":"175.9","stroke-dashoffset":175.9*(1-s.uso.taxaConclusao/100),"stroke-linecap":"round",transform:"rotate(-90 32 32)"},null,8,Bt)])),i("div",Lt,l(s.uso.taxaConclusao)+"%",1)]),t[26]||(t[26]=i("div",{class:"text-xs text-500 mt-2"},"Trilhas concluídas",-1))])])]),_:1}),n(k,null,{content:p(()=>[i("div",At,[t[27]||(t[27]=i("div",{class:"flex align-items-center gap-2"},[i("i",{class:"pi pi-users text-primary"}),i("span",{class:"font-semibold",style:{"font-size":"1rem"}},"Usuários do Cliente")],-1)),i("div",Dt,[n(G,null,{default:p(()=>[n(Q,{class:"pi pi-search"}),n(H,{modelValue:s.filtroUsuario,"onUpdate:modelValue":t[1]||(t[1]=o=>s.filtroUsuario=o),placeholder:"Buscar usuário...",size:"small"},null,8,["modelValue"])]),_:1}),n(J,{modelValue:s.filtroStatusUser,"onUpdate:modelValue":t[2]||(t[2]=o=>s.filtroStatusUser=o),options:s.statusUserOpts,optionLabel:"label",optionValue:"value",placeholder:"Todos os status",showClear:"",size:"small",style:{"min-width":"150px"}},null,8,["modelValue","options"])])]),n(Y,{value:r.usuariosFiltrados,rows:10,rowsPerPageOptions:[10,25,50],paginator:"",loading:s.carregando,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport",currentPageReportTemplate:"{first}–{last} de {totalRecords} usuários",responsiveLayout:"scroll",stripedRows:"",dataKey:"id"},{default:p(()=>[n(y,{header:"Usuário",style:{"min-width":"200px"}},{body:p(({data:o})=>[i("div",Et,[n(X,{label:o.iniciais,shape:"circle",size:"small",style:x({background:o.avatarBg,color:"#fff"})},null,8,["label","style"]),i("div",null,[i("div",Rt,l(o.nome),1),i("div",Tt,l(o.email),1)])])]),_:1}),n(y,{header:"Setor / Cargo",style:{"min-width":"160px"}},{body:p(({data:o})=>[n(W,{label:o.setor,class:"text-xs py-0 px-2"},null,8,["label"]),i("div",qt,l(o.cargo),1)]),_:1}),n(y,{header:"Trilhas",style:{width:"90px"}},{body:p(({data:o})=>[i("div",Ot,l(o.trilhas),1),i("div",jt,l(o.concluidas)+" concl.",1)]),_:1}),n(y,{header:"Pontuação",style:{width:"110px"}},{body:p(({data:o})=>[i("div",Mt,[t[28]||(t[28]=i("i",{class:"pi pi-star-fill usr-pontuacao-star"},null,-1)),i("span",Vt,l(o.pontuacao.toLocaleString("pt-BR")),1)])]),_:1}),n(y,{header:"Último Acesso",style:{width:"130px"}},{body:p(({data:o})=>[i("div",Nt,l(o.ultimoAcesso),1),i("div",Ft,l(o.horario),1)]),_:1}),n(y,{header:"Status",style:{width:"100px"}},{body:p(({data:o})=>[n(f,{value:o.statusDisplay||o.status,severity:o.status==="ativo"?"success":"secondary"},null,8,["value","severity"])]),_:1}),n(y,{header:"",style:{width:"60px"}},{body:p(({data:o})=>[n(g,{icon:"pi pi-eye",text:"",rounded:"",size:"small",severity:"secondary",onClick:yi=>r.handleUsuarioClick(o.id)},null,8,["onClick"])]),_:1})]),_:1},8,["value","loading"])]),_:1})]),i("div",Kt,[n(k,{class:"mb-4"},{title:p(()=>t[29]||(t[29]=[i("div",{class:"flex align-items-center gap-2"},[i("i",{class:"pi pi-file-edit text-primary"}),h(" Contrato ")],-1)])),content:p(()=>[i("div",Qt,[i("div",Ht,[t[30]||(t[30]=i("span",{class:"info-label"},"Plano",-1)),n(f,{value:s.cliente.plano,class:w("plano-"+s.cliente.plano.toLowerCase())},null,8,["value","class"])]),n(D,{class:"my-2"}),i("div",Gt,[t[31]||(t[31]=i("span",{class:"info-label"},"Limite usuários",-1)),i("span",Jt,l(s.cliente.limiteUsuarios),1)])])]),_:1})])]),n(Z,{visible:s.dialogEditar,"onUpdate:visible":t[3]||(t[3]=o=>s.dialogEditar=o),modoEdicao:!0,dadosIniciais:s.cliente,onSalvar:r.salvarEdicao},null,8,["visible","dadosIniciais","onSalvar"]),n(T,{visible:s.dialogDesativar,"onUpdate:visible":t[5]||(t[5]=o=>s.dialogDesativar=o),header:s.cliente.status==="ativo"?"Desativar Cliente":"Ativar Cliente",modal:!0,style:{width:"440px"},draggable:!1},{footer:p(()=>[n(g,{label:"Cancelar",severity:"secondary",text:"",onClick:t[4]||(t[4]=o=>s.dialogDesativar=!1)}),n(g,{label:s.cliente.status==="ativo"?"Desativar":"Ativar",icon:s.cliente.status==="ativo"?"pi pi-ban":"pi pi-check-circle",severity:s.cliente.status==="ativo"?"danger":"success",onClick:r.confirmarAlterarStatus},null,8,["label","icon","severity","onClick"])]),default:p(()=>[i("div",Xt,[i("i",{class:w(["pi excluir-icon",s.cliente.status==="ativo"?"pi-ban":"pi-check-circle"]),style:x({color:s.cliente.status==="ativo"?"var(--orange-500)":"var(--green-500)"})},null,6),i("div",null,[i("p",null,l(s.cliente.status==="ativo"?"Tem certeza que deseja desativar este cliente?":"Deseja reativar o acesso deste cliente?"),1),i("strong",null,l(s.cliente.nome),1),i("p",Wt,l(s.cliente.status==="ativo"?`Todos os ${s.cliente.usuariosAtivos} usuários perderão o acesso imediatamente. Os dados serão mantidos.`:"O cliente e seus usuários voltarão a ter acesso completo à plataforma."),1)])])]),_:1},8,["visible","header"]),n(T,{visible:s.dialogUsuario,"onUpdate:visible":t[7]||(t[7]=o=>s.dialogUsuario=o),showHeader:!1,modal:!0,style:{width:"480px"},draggable:!1,pt:{content:{style:{padding:0,borderRadius:"12px",overflow:"hidden"}}}},{default:p(()=>[s.usuarioSelecionado?(c(),d("div",Yt,[i("div",{class:"ucard-banner",style:x({background:s.usuarioSelecionado.avatarBg||"#6366f1"})},[n(g,{icon:"pi pi-times",text:"",rounded:"",size:"small",class:"ucard-close",onClick:t[6]||(t[6]=o=>s.dialogUsuario=!1)})],4),i("div",Zt,[s.usuarioSelecionado.avatarUrl?(c(),d("img",{key:0,src:s.usuarioSelecionado.avatarUrl,class:"ucard-avatar-img",alt:"Foto"},null,8,$t)):(c(),d("div",{key:1,class:"ucard-avatar-initials",style:x({background:s.usuarioSelecionado.avatarBg||"#6366f1"})},l(s.usuarioSelecionado.iniciais),5))]),i("div",ei,[i("h3",ti,l(s.usuarioSelecionado.nome),1),i("span",ii,l(s.usuarioSelecionado.email),1),i("div",si,[n(f,{value:s.usuarioSelecionado.statusDisplay||s.usuarioSelecionado.status,severity:s.usuarioSelecionado.status==="ativo"?"success":"secondary"},null,8,["value","severity"]),n(f,{value:s.usuarioSelecionado.perfil,severity:"secondary"},null,8,["value"])])]),i("div",ai,[i("div",ri,[t[32]||(t[32]=i("i",{class:"pi pi-star-fill ucard-metric-icon",style:{color:"#f59e0b"}},null,-1)),i("span",oi,l((s.usuarioSelecionado.pontuacao||0).toLocaleString("pt-BR")),1),t[33]||(t[33]=i("span",{class:"ucard-metric-label"},"XP",-1))]),t[36]||(t[36]=i("div",{class:"ucard-metric-divider"},null,-1)),i("div",li,[t[34]||(t[34]=i("i",{class:"pi pi-clock ucard-metric-icon",style:{color:"var(--primary-color)"}},null,-1)),i("span",ni,l(s.usuarioSelecionado.ultimoAcesso||"—"),1),t[35]||(t[35]=i("span",{class:"ucard-metric-label"},"Último acesso",-1))])]),i("div",ci,[i("div",di,[t[38]||(t[38]=i("i",{class:"pi pi-id-card"},null,-1)),i("div",null,[t[37]||(t[37]=i("span",{class:"ucard-detail-label"},"Login",-1)),i("span",ui,l(s.usuarioSelecionado.username),1)])]),i("div",pi,[t[40]||(t[40]=i("i",{class:"pi pi-briefcase"},null,-1)),i("div",null,[t[39]||(t[39]=i("span",{class:"ucard-detail-label"},"Cargo",-1)),i("span",mi,l(s.usuarioSelecionado.cargo||"—"),1)])]),i("div",vi,[t[42]||(t[42]=i("i",{class:"pi pi-building"},null,-1)),i("div",null,[t[41]||(t[41]=i("span",{class:"ucard-detail-label"},"Setor",-1)),i("span",bi,l(s.usuarioSelecionado.setor||"—"),1)])]),i("div",hi,[t[44]||(t[44]=i("i",{class:"pi pi-hashtag"},null,-1)),i("div",null,[t[43]||(t[43]=i("span",{class:"ucard-detail-label"},"Matrícula",-1)),i("span",gi,l(s.usuarioSelecionado.matricula||"—"),1)])])])])):b("",!0)]),_:1},8,["visible"])])}const zi=ee(Ge,[["render",fi],["__scopeId","data-v-221e2ccd"]]);export{zi as default};
