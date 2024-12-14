import{G as x}from"./constants.24c44c43.js";import{m as j,b as D,u as B}from"./index.ae2b6956.js";import{u as L}from"./JsonValues.3fcfec97.js";import{B as V}from"./RadioToggle.333e7750.js";import{C as M}from"./RobotsMeta.12cd00ab.js";import{C}from"./SettingsRow.9f92e269.js";import"./translations.d159963e.js";import{_ as O}from"./_plugin-vue_export-helper.eefbdd86.js";import{_ as a,s as S}from"./default-i18n.20001971.js";import{v as m,o as s,c as T,C as _,l as i,k as u,b as r,a as A,x as w,t as y}from"./runtime-dom.esm-bundler.5c3c7d72.js";import{t as G}from"./Editor.cf7b5e9d.js";import{u as I}from"./Tags.36fc4b35.js";import{C as R}from"./Caret.d9cc70ba.js";import{C as N}from"./GoogleSearchPreview.c38187f9.js";import{C as P}from"./HtmlTagsEditor.48d4a46c.js";const p="all-in-one-seo-pack",E={setup(){const{getJsonValue:l,setJsonValue:t}=L();return{GLOBAL_STRINGS:x,getJsonValue:l,licenseStore:j(),optionsStore:D(),rootStore:B(),setJsonValue:t}},components:{BaseRadioToggle:V,CoreRobotsMeta:M,CoreSettingsRow:C},props:{type:{type:String,required:!0},object:{type:Object,required:!0},options:{type:Object,required:!0},showBulk:Boolean,noMetaBox:Boolean,includeKeywords:Boolean},data(){return{titleCount:0,descriptionCount:0,strings:{robotsSetting:a("Robots Meta Settings",p),bulkEditing:a("Bulk Editing",p),readOnly:a("Read Only",p),otherOptions:a("Other Options",p),keywords:a("Keywords",p),removeCategoryBase:a("Remove Category Base Prefix",p)}}},computed:{title(){return S(a("%1$s Title",p),this.object.singular)},showPostThumbnailInSearch(){return S(a("Show %1$s Thumbnail in Google Custom Search",p),this.object.singular)},showMetaBox(){return S(a("Show %1$s Meta Box",p),"AIOSEO")},showOtherOptions(){var l;return(l=this.object)!=null&&l.buddyPress?!1:!this.noMetaBox&&(!this.licenseStore.isUnlicensed||this.type!=="taxonomies")}}},U={class:"aioseo-sa-ct-advanced"},q={class:"other-options"};function J(l,t,e,n,o,c){const g=m("core-robots-meta"),b=m("core-settings-row"),h=m("base-radio-toggle"),k=m("base-toggle"),v=m("base-select");return s(),T("div",U,[_(b,{name:o.strings.robotsSetting},{content:i(()=>[_(g,{options:e.options.advanced.robotsMeta,mainOptions:e.options},null,8,["options","mainOptions"])]),_:1},8,["name"]),e.showBulk?(s(),u(b,{key:0,name:o.strings.bulkEditing,align:""},{content:i(()=>[_(h,{modelValue:e.options.advanced.bulkEditing,"onUpdate:modelValue":t[0]||(t[0]=d=>e.options.advanced.bulkEditing=d),name:`${e.object.name}BulkEditing`,options:[{label:n.GLOBAL_STRINGS.disabled,value:"disabled"},{label:n.GLOBAL_STRINGS.enabled,value:"enabled"},{label:o.strings.readOnly,value:"read-only"}]},null,8,["modelValue","name","options"])]),_:1},8,["name"])):r("",!0),e.type==="taxonomies"&&e.object.name==="category"?(s(),u(b,{key:1,name:o.strings.removeCategoryBase,align:""},{content:i(()=>[_(h,{modelValue:n.optionsStore.options.searchAppearance.advanced.removeCategoryBase,"onUpdate:modelValue":t[1]||(t[1]=d=>n.optionsStore.options.searchAppearance.advanced.removeCategoryBase=d),name:"removeCategoryBase",options:[{label:n.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:n.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"])]),_:1},8,["name"])):r("",!0),c.showOtherOptions?(s(),u(b,{key:2,name:o.strings.otherOptions},{content:i(()=>[A("div",q,[_(k,{modelValue:e.options.advanced.showMetaBox,"onUpdate:modelValue":t[2]||(t[2]=d=>e.options.advanced.showMetaBox=d)},{default:i(()=>[w(y(c.showMetaBox),1)]),_:1},8,["modelValue"])])]),_:1},8,["name"])):r("",!0),n.optionsStore.options.searchAppearance.advanced.useKeywords&&e.includeKeywords?(s(),u(b,{key:3,name:o.strings.keywords,align:""},{content:i(()=>[_(v,{multiple:"",taggable:"",options:n.getJsonValue(e.options.advanced.keywords)||[],modelValue:n.getJsonValue(e.options.advanced.keywords)||[],"onUpdate:modelValue":t[3]||(t[3]=d=>e.options.advanced.keywords=n.setJsonValue(d)),"tag-placeholder":o.strings.tagPlaceholder},null,8,["options","modelValue","tag-placeholder"])]),_:1},8,["name"])):r("",!0)])}const de=O(E,[["render",J]]),f="all-in-one-seo-pack",K={setup(l){const{parseTags:t}=I({separator:l.separator});return{parseTags:t,rootStore:B()}},components:{BaseRadioToggle:V,CoreAlert:R,CoreGoogleSearchPreview:N,CoreHtmlTagsEditor:P,CoreSettingsRow:C},props:{type:{type:String,required:!0},object:{type:Object,required:!0},separator:{type:String,required:!0},options:{type:Object,required:!0},edit:{type:Boolean,default(){return!0}}},data(){return{GLOBAL_STRINGS:x,titleCount:0,descriptionCount:0,strings:{showInSearchResults:a("Show in Search Results",f),clickToAddTitle:a("Click on the tags below to insert variables into your title.",f),metaDescription:a("Meta Description",f),clickToAddDescription:a("Click on the tags below to insert variables into your meta description.",f)}}},watch:{show(l){if(l){this.options.advanced.robotsMeta.noindex=!1,this.options.advanced.robotsMeta.nofollow===!1&&this.options.advanced.robotsMeta.noarchive===!1&&this.options.advanced.robotsMeta.notranslate===!1&&this.options.advanced.robotsMeta.noimageindex===!1&&this.options.advanced.robotsMeta.nosnippet===!1&&this.options.advanced.robotsMeta.noodp===!1&&parseInt(this.options.advanced.robotsMeta.maxSnippet)===-1&&parseInt(this.options.advanced.robotsMeta.maxVideoPreview)===-1&&this.options.advanced.robotsMeta.maxImagePreview.toLowerCase()==="large"&&(this.options.advanced.robotsMeta.default=!0);return}this.options.advanced.robotsMeta.default=!1,this.options.advanced.robotsMeta.noindex=!0}},computed:{title(){return S(a("%1$s Title",f),this.object.singular)},show(){return this.options.show},noIndexDescription(){return S(a('Choose whether your %1$s should be included in search results. If you select "No", then your %1$s will be noindexed and excluded from the sitemap so that search engines ignore them.',f),this.object.label)},noindexAlertDescription(){return S(a("Your %1$s will be noindexed and excluded from the sitemap so that search engines ignore them. You can still control how their page title looks like below.",f),this.object.label)}},methods:{getParsedDefaultTags(l,t,e){var n,o,c;return((c=(o=(n=this.rootStore.aioseo.postData.postTypes.find(g=>t===g.name&&(g==null?void 0:g.defaultTags)))==null?void 0:n.defaultTags)==null?void 0:o[l])==null?void 0:c[e])||G.getDefaultTags(l,t,e)}}},Y={class:"aioseo-sa-ct-title-description"},H={class:"aioseo-description"},z={key:0};function F(l,t,e,n,o,c){const g=m("base-radio-toggle"),b=m("core-alert"),h=m("core-settings-row"),k=m("core-google-search-preview"),v=m("core-html-tags-editor");return s(),T("div",Y,[_(h,{name:o.strings.showInSearchResults,align:""},{content:i(()=>[e.edit?(s(),u(g,{key:0,modelValue:e.options.show,"onUpdate:modelValue":t[0]||(t[0]=d=>e.options.show=d),name:`${e.object.name}ShowInSearch`,options:[{label:o.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:o.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","name","options"])):r("",!0),e.edit?r("",!0):(s(),u(g,{key:1,modelValue:!0,name:`${e.object.name}ShowInSearch`,options:[{label:o.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:o.GLOBAL_STRINGS.yes,value:!0}]},null,8,["name","options"])),A("div",H,[e.options.show?(s(),T("span",z,y(c.noIndexDescription),1)):r("",!0),e.options.show?r("",!0):(s(),u(b,{key:1,type:"blue"},{default:i(()=>[w(y(c.noindexAlertDescription),1)]),_:1}))])]),_:1},8,["name"]),e.edit?(s(),u(h,{key:0,name:o.GLOBAL_STRINGS.preview},{content:i(()=>[_(k,{title:n.parseTags(e.options.title),description:n.parseTags(e.options.metaDescription)},null,8,["title","description"])]),_:1},8,["name"])):r("",!0),_(h,{name:c.title},{content:i(()=>[e.edit?(s(),u(v,{key:0,modelValue:e.options.title,"onUpdate:modelValue":t[1]||(t[1]=d=>e.options.title=d),"line-numbers":!1,single:"","tags-context":`${e.object.name}Title`,"default-tags":c.getParsedDefaultTags(e.type,e.object.name,"title")},{"tags-description":i(()=>[w(y(o.strings.clickToAddTitle),1)]),_:1},8,["modelValue","tags-context","default-tags"])):r("",!0),e.edit?r("",!0):(s(),u(v,{key:1,"line-numbers":!1,single:"","tags-context":`${e.object.name}Title`,"default-tags":c.getParsedDefaultTags(e.type,e.object.name,"title")},{"tags-description":i(()=>[w(y(o.strings.clickToAddTitle),1)]),_:1},8,["tags-context","default-tags"]))]),_:1},8,["name"]),e.options.show?(s(),u(h,{key:1,name:o.strings.metaDescription},{content:i(()=>[e.edit?(s(),u(v,{key:0,modelValue:e.options.metaDescription,"onUpdate:modelValue":t[2]||(t[2]=d=>e.options.metaDescription=d),"line-numbers":!1,description:"","tags-context":`${e.object.name}Description`,"default-tags":c.getParsedDefaultTags(e.type,e.object.name,"description")},{"tags-description":i(()=>[w(y(o.strings.clickToAddDescription),1)]),_:1},8,["modelValue","tags-context","default-tags"])):r("",!0),e.edit?r("",!0):(s(),u(v,{key:1,"line-numbers":!1,"tags-context":`${e.object.name}Description`,"default-tags":c.getParsedDefaultTags(e.type,e.object.name,"description")},{"tags-description":i(()=>[w(y(o.strings.clickToAddDescription),1)]),_:1},8,["tags-context","default-tags"]))]),_:1},8,["name"])):r("",!0)])}const ue=O(K,[["render",F],["__scopeId","data-v-4db7f1ef"]]);export{de as A,ue as T};