var monphind=function(t){"use strict"
const e=function(t){const e=new CSSStyleSheet
e.replaceSync(":host{\n    -moz-user-select: none;\n    user-select: none;\n    -webkit-user-select: none;\n    -webkit-tap-highlight-color: transparent;\n}"),t.adoptedStyleSheets.push(e)},n=t=>{class n extends HTMLElement{static observedAttributes=Object.keys(t.props||{})
static defineElement(){customElements.define(t.name,this)}#t={}
#e=(()=>{const e={}
for(const n in t.props)e[n]=typeof t.props[n]
return e})()
constructor(){super()
const n=this.attachShadow({mode:"open"})
n.innerHTML=t.template??"",((t,n)=>{try{e(t)
const o=new CSSStyleSheet
o.replaceSync(n??""),t.adoptedStyleSheets.push(o)}catch{e(t)
const o=document.createElement("style")
o.textContent=n??"",t.insertBefore(o,t.firstChild)}})(n,t.style)
const{props:o}=t||{props:{}}
this.#t={...o}
for(const e in o)Object.defineProperty(this,e,{get:()=>this.#t?.[e],set:n=>{const o=this.getAttribute(e)
let s
switch(this.#e[e]){case"number":s=Number(n)
break
case"boolean":s="true"==n
break
default:s=String(n)}if(this.#t[e]!=n&&(this.#t[e]=s,t?.dispatch?.propChanged?.call?.(this,e,n)),o==n)return
const r=e.toLowerCase()
t.syncProps?.includes(e)&&this.setAttribute(r,n)}})
const s=t?.setup?.call(this,n)||{}
for(const t in s)Object.defineProperty(this,t,{get:()=>s[t]})}connectedCallback(){t.dispatch?.connected?.call(this)}disconnectedCallback(){t.dispatch?.disconnected?.call(this)}attributeChangedCallback(t,e,n){this[t]=n??""}}return n},o={type:"",disabled:!1,value:""}
class s extends(n({name:"m-button",template:'<slot name="start"></slot>\n        <slot></slot>\n<slot name="end"></slot>',style:":host {\n    padding: 8px 20px;\n    box-sizing: border-box;\n    border-radius: 14px;\n    background-color: var(--m-button-default-backgroundColor,white);\n    display: inline-flex;\n    align-items: center;\n    justify-content:space-between;\n    font-size: 0.85em;\n    transition: transform 0.2s, box-shadow 0.4s, background-color 0.3s, color 0.3s;\n    color: var(--m-button-default-textColor,black);\n}\n::slotted(m-icon[slot=start]),::slotted(m-circular-progress[slot=start]) , ::slotted(svg[slot=start]) {\n    color:currentColor;\n    fill:currentColor;\n    width: 30px;\n    height: 30px;\n}\n::slotted(m-icon[slot=end]) ,::slotted(m-circular-progress[slot=end]) , ::slotted(svg[slot=end]) {\n    color:currentColor;\n    fill:currentColor;\n    width: 30px;\n    height: 30px;\n}\n::slotted([slot=start]){\n    margin-right:10px;\n}\n::slotted([slot=end]){\n    margin-left:10px;\n}\n:host(:not([disabled=true]):hover) {\n    transform: translateY(-2px);\n    cursor: pointer;\n    box-shadow: 0px 4px 30px var(--m-button-default-hover-boxShadowColor,rgba(70,70,70,0.237));\n}\n:host(:not([disabled=true]):active) {\n    transform: scale(0.95);\n    cursor: pointer;\n    box-shadow: 0px 4px 30px var(--m-button-default-active-boxShadowColor,#2ea1f9d6);\n    background-color: var(--m-button-default-active-backgroundColor,#2EA2F9);\n    color: var(--m-button-default-active-textColor,white);\n}\n:host([disabled=true]) {\n    background-color: var(--m-button-default-disabled-backgroundColor,#EFEFEF);\n    color: var(--m-button-default-disabled-textColor,#BABABA);\n}\n:host([type=outlined]) {\n    background-color: transparent;\n    border: 1.5px solid var(--m-button-outlined-borderColor,black);\n    transition: border 0.2s, background-color 0.2s;\n    color: var(--m-button-outlined-textColor,black);\n}\n:host([type=outlined]:not([disabled=true]):hover) {\n    box-shadow: none;\n    background-color: var(--m-button-outlined-hover-backgroundColor,black);\n    color: var(--m-button-outlined-hover-textColor,white);\n    transform: none;\n}\n:host([type=outlined]:not([disabled=true]):active) {\n    background-color: var(--m-button-outlined-active-backgroundColor,#555555);\n    border: 1.5px solid var(--m-button-outlined-active-borderColor,#555555);\n}\n:host([type=outlined][disabled=true]) {\n    border: 1.5px solid var(--m-button-outlined-disabled-borderColor,#EFEFEF);\n    color: var(--m-button-outlined-disabled-textColor,#BABABA);\n}\n:host([type=text]) {\n    background-color: transparent;\n    transition: background-color 0.2s, color 0.2s;\n    color: var(--m-button-text-textColor,black);\n}\n:host([type=text]:not([disabled=true]):hover) {\n    box-shadow: none;\n    transform: none;\n    background-color: var(--m-button-text-hover-backgroundColor,#EFEFEF);\n}\n:host([type=text]:not([disabled=true]):active) {\n    background-color: var(--m-button-text-active-backgroundColor,#2EA2F9);\n}\n:host([type=text][disabled=true]) {\n    color: var(--m-button-outlined-disabled-textColor,#BABABA);\n}\n:host([disabled=true]){\n    pointer-events:none;\n}",syncProps:["disabled","type","value"],dispatch:{propChanged(t,e){"value"===t&&(this.innerText=String(e))}},props:o})){}s.defineElement()
const r={search:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path></svg>',home:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>',settings:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"></path></svg>',done:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path></svg>',favorite:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"></path></svg>',add:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>',delete:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>',arrow_back:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"></path></svg>',arrow_forward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"></path></svg>',arrow_upward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"></path></svg>',array_downward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"></path></svg>',refresh:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>',more:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"></path></svg>',download:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>',upload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>',token:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-80 120-280v-400l360-200 360 200v400L480-80ZM364-590q23-24 53-37t63-13q33 0 63 13t53 37l120-67-236-131-236 131 120 67Zm76 396v-131q-54-14-87-57t-33-98q0-11 1-20.5t4-19.5l-125-70v263l240 133Zm40-206q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm40 206 240-133v-263l-125 70q3 10 4 19.5t1 20.5q0 55-33 98t-87 57v131Z"></path></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M560-680v-80h320v80H560Zm0 160v-80h320v80H560Zm0 160v-80h320v80H560Zm-240-40q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-160v-76q0-21 10-40t28-30q45-27 95.5-40.5T320-360q56 0 106.5 13.5T522-306q18 11 28 30t10 40v76H80Zm86-80h308q-35-20-74-30t-80-10q-41 0-80 10t-74 30Zm154-240q17 0 28.5-11.5T360-520q0-17-11.5-28.5T320-560q-17 0-28.5 11.5T280-520q0 17 11.5 28.5T320-480Zm0-40Zm0 280Z"></path></svg>',password:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M80-200v-80h800v80H80Zm46-242-52-30 34-60H40v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Z"></path></svg>',mail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"></path></svg>',github:'<svg viewBox="0 0 1024 1024"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>'},i={name:""}
class a extends(n({name:"m-icon",template:"<slot></slot>",style:"\n:host {\n    display: inline-flex;\n    fill:currentColor;\n    width:24px;\n    height:24px;\n    justify-content:center;\n    align-items:center;\n}\n::slotted(*),svg,img{\n    width:100%;\n    height:100%;\n}\n",props:i,syncProps:["name"],dispatch:{propChanged(t,e){if("name"==t){if(!r[e])throw new Error("This icon does not exist in the built-in icon.")
this.innerHTML=r[e]}}},setup(){const t=this.getAttribute("name")
if(t&&""===this.innerHTML){if(null==r[t])throw new Error("This icon does not exist in the built-in icon.")
this.innerHTML=r[t]}return{}}})){}a.defineElement()
const l={disabled:!1,type:""}
class d extends(n({template:"<slot>icon</slot>",style:":host {\n    padding: 8px;\n    box-sizing: border-box;\n    border-radius: 50%;\n    background-color: var(--m-icon-button-default-backgroundColor,white);\n    display: inline-flex;\n    align-items: center;\n    justify-content:space-between;\n    transition: transform 0.2s, box-shadow 0.4s, background-color 0.3s, color 0.3s;\n}\n:host(:not([disabled=true]):hover) {\n    transform: translateY(-2px);\n    cursor: pointer;\n    box-shadow: 0px 4px 30px var(--m-icon-button-default-hover-boxShadowColor,rgba(70,70,70,0.237));\n}\n:host(:not([disabled=true]):active) {\n    transform: scale(0.95);\n    cursor: pointer;\n    box-shadow: 0px 4px 30px var(--m-icon-button-default-active-boxShadowColor,#2ea1f9d6);\n    background-color: var(--m-icon-button-default-active-backgroundColor,#2EA2F9);\n    color: var(--m-icon-button-default-active-textColor,white);\n}\n:host([disabled=true]) {\n    background-color: var(--m-icon-button-default-disabled-backgroundColor,#EFEFEF);\n    color: var(--m-icon-button-default-disabled-textColor,#BABABA);\n}\n:host([type=outlined]) {\n    background-color: transparent;\n    border: 1.5px solid var(--m-icon-button-outlined-borderColor,black);\n    transition: border 0.2s, background-color 0.2s;\n}\n:host([type=outlined]:not([disabled=true]):hover) {\n    box-shadow: none;\n    background-color: var(--m-icon-button-outlined-hover-backgroundColor,black);\n    color: var(--m-icon-button-outlined-hover-textColor,white);\n    transform: none;\n}\n:host([type=outlined]:not([disabled=true]):active) {\n    background-color: var(--m-icon-button-outlined-active-backgroundColor,#555555);\n    border: 1.5px solid var(--m-icon-button-outlined-active-borderColor,#555555);\n}\n:host([type=outlined][disabled=true]) {\n    border: 1.5px solid var(--m-icon-button-outlined-disabled-borderColor,#EFEFEF);\n    color: var(--m-icon-button-outlined-disabled-textColor,#BABABA);\n}\n:host([type=text]) {\n    background-color: transparent;\n    transition: background-color 0.2s, color 0.2s;\n}\n:host([type=text]:not([disabled=true]):hover) {\n    box-shadow: none;\n    transform: none;\n    background-color: var(--m-icon-button-text-hover-backgroundColor,#EFEFEF);\n}\n:host([type=text]:not([disabled=true]):active) {\n    background-color: var(--m-icon-button-text-active-backgroundColor,#2EA2F9);\n}\n:host([type=text][disabled=true]) {\n    color: var(--m-icon-button-outlined-disabled-textColor,#BABABA);\n}\n:host([disabled=true]){\n    pointer-events:none;\n}",props:l,name:"m-icon-button",syncProps:["disabled","type"]})){}d.defineElement()
const h={disabled:!1}
class c extends(n({name:"m-fab",style:":host {\ndisplay: inline-flex;\nalign-items: center;\nbackground-color: var(--m-fab-backgroundColor,white);\nborder-radius: 15px;\npadding: 5px;\nfont-size: 14px;\ntransition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;\n}\nslot{\nmargin: 10px;\ndisplay: flex;\n}\n:host(:not([disabled=true]):hover) {\ntransform: translateY(-3px);\ncursor: pointer;\nbackground-color: var(--m-fab-hover-backgroundColor,rgb(247,247,247));\nbox-shadow: 0px 4px 15px var(--m-fab-hover-boxShadowColor,rgba(70,70,70,0.237));\n}\n:host(:not([disabled=true]):active) {\ntransform: scale(0.95);\nbackground-color: var(--m-fab-active-backgroundColor,#2EA2F9);\ncolor: var(--m-fab-active-color,white);\nbox-shadow: 0px 4px 20px var(--m-fab-active-boxShadowColor,#2ea1f9d6);\n}\n:host([disabled=true]){\nbackground-color:var(--m-fab-disabled-backgroundColor,#EFEFEF);\ncolor:var(--m-fab-disabled-color,#BABABA);\npointer-events:none;\n}\n",template:'<slot name="start"></slot>\n<slot></slot>\n<slot name="end"></slot>',props:h,syncProps:["disabled"]})){}c.defineElement()
const u={checked:!1,indeterminate:!1,disabled:!1}
class p extends(n({name:"m-checkbox",template:'\n        <div class="checkbox">\n            <div class="checked">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">\n                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path>\n                </svg>\n            </div>\n            <div class="indeterminate">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">\n                    <path d="M200-440v-80h560v80H200Z"></path>\n                </svg>\n            </div>\n        </div>\n        <slot></slot>',style:":host {\ndisplay: inline-flex;\nalign-items: center;\n}\n:host(:hover) {\ncursor: pointer;\nfilter: brightness(90%);\n}\n:host slot {\ntransition: color 0.3s;\n}\n:host .checkbox {\nwidth: 18px;\nheight: 18px;\nborder: 2px solid var(--m-checkbox-borderColor,black);\nmargin-right: 10px;\nborder-radius: 8px;\ntransition: color 0.3s;\nposition: relative;\n}\n:host svg {\nfill: currentColor;\n}\n:host .checked,\n:host .indeterminate {\ntransform: scale(0.5);\nopacity: 0;\ntransition: transform 0.3s, opacity 0.3s;\ncolor: var(--m-checkbox-checked-svg-color,white);\nposition: absolute;\ntop: 0;\nbottom: 0;\nleft: 0;\nright: 0;\n}\n:host([checked=true]:not([indeterminate=true])) .checkbox {\nborder: 2px solid var(--m-checkbox-checked-color,#2EA2F9);\nbackground-color: var(--m-checkbox-checked-color,#2EA2F9);\n}\n:host([checked=true]:not([indeterminate=true])) .checked {\ntransform: scale(1);\nopacity: 1;\n}\n:host([checked=true]:not([indeterminate=true])) slot {\ncolor: var(--m-checkbox-checked-color,#2EA2F9);\n}\n:host([checked=true][indeterminate=true]) .checkbox {\nborder: 2px solid var(--m-checkbox-checked-indeterminate-color,rgb(131,130,130));\nbackground-color: var(--m-checkbox-checked-indeterminate-color,rgb(131,130,130));\n}\n:host([checked=true][indeterminate=true]) .indeterminate {\ntransform: scale(1);\nopacity: 1;\n}\n:host([checked=true][indeterminate=true]) slot {\ncolor: var(--m-checkbox-checked-indeterminate-color,rgb(131,130,130));\n}\n:host([disabled=true]) {\ncolor: var(--m-checkbox-disabled-color,#BABABA) !important;\npointer-events: none;\n}\n:host([disabled=true]) slot {\ncolor: var(--m-checkbox-disabled-color,#BABABA) !important;\n}\n:host([disabled=true][checked=true]) .checkbox {\nbackground-color: var(--m-checkbox-disabled-color,#BABABA) !important;\n}\n:host([disabled=true]) .checkbox {\nborder: 2px solid var(--m-checkbox-disabled-color,#BABABA) !important;\n}",props:u,setup(){return this.addEventListener("click",(()=>{this.checked=!this.checked,this.dispatchEvent(new Event("change"))})),{}},syncProps:["disabled","indeterminate","checked"]})){}p.defineElement()
const v=(t,e,n)=>{const o=t.querySelectorAll(e),s=new Array
t:for(const t of o){for(const e in n)if(t?.[e]!=n[e])continue t
s.push(t)}return s},m="m-radio",b={name:"",value:"",checked:!1,disabled:!1}
function g(){const t=this.name
if(t){v(document.body,m,{name:t}).forEach((t=>{t.checked=!1,t!=this&&t.dispatchEvent(new Event("change"))}))}this.dispatchEvent(new Event("change")),this.checked=!0}class x extends(n({name:m,template:'\n<div class="radio">\n<div class="checked"></div>\n</div>\n<slot></slot>',style:":host {\ndisplay: inline-flex;\nalign-items: center;\n}\n:host(:hover) {\ncursor: pointer;\nfilter: brightness(90%);\n}\n:host slot {\ntransition: color 0.3s;\n}\n:host .radio {\nwidth: 18px;\nheight: 18px;\nborder: 2px solid var(--m-radio-borderColor,black);\nmargin-right: 10px;\nborder-radius: 100%;\ntransition: color 0.3s;\nposition: relative;\n}\n:host .radio .checked {\nposition: absolute;\ntop: 0;\nbottom: 0;\nleft: 0;\nright: 0;\nborder-radius: 100%;\nmargin: auto;\nwidth: 14px;\nheight: 14px;\nbackground-color: var(--m-radio-checked-color,#2EA2F9);\ntransform: scale(0.8);\nopacity: 0;\ntransition: transform 0.3s, opacity 0.3s;\n}\n:host([checked=true]) .radio {\nborder: 2px solid var(--m-radio-checked-color,#2EA2F9);\n}\n:host([checked=true]) .radio .checked {\ntransform: scale(1);\nopacity: 1;\n}\n:host([checked=true]) slot {\ncolor: var(--m-radio-checked-color,#2EA2F9);\n}\n:host([disabled=true]) {\npointer-events: none;\n}\n:host([disabled=true]) .radio {\nborder: 2px solid var(--m-radio-disabled-color,#BABABA);\n}\n:host([disabled=true]) .radio .checked {\nbackground-color: var(--m-radio-disabled-color,#BABABA);\n}\n:host([disabled=true]) slot {\ncolor: var(--m-radio-disabled-color,#BABABA) !important;\n}",props:b,syncProps:["name","checked","disabled","value"],dispatch:{propChanged(t,e){if("value"!==t)return
const n=this.name
v(document.body,m,{name:n}).forEach((t=>{t.checked=!1}))
v(document.body,m,{name:n,value:e})[0].checked=!0}},setup(){return this.addEventListener("click",(()=>{g.apply(this)})),{}}})){}x.defineElement()
const w={disabled:!1,labeled:!1,min:0,max:100,value:0,step:1},f=(t,e,n,o,s)=>{if(!s)return
const r=.5*(n-e)+e
t.hiddened.textContent=`${o}/${n}`,t.normal.textContent=`${o}/${n}`,o<r?(t.normal.style.display="none",t.hiddened.style.display="initial"):(t.hiddened.style.display="none",t.normal.style.display="initial")}
class k extends(n({name:"m-slider",style:":host {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: start;\n    width: 300px;\n    height: 40px;\n    background-color: var(--m-slider-backgroundColor,#EFEFEF);\n    border-radius: 12px;\n    position: relative;\n    overflow:hidden;\n    cursor:pointer;\n}\n:host p.hidden-value {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    font-size: 13px;\n    color: var(--m-slider-hiddenlabel-color,gray);\n    pointer-events: none;\n    display: none;\n}\n:host p.value {\n    position: absolute;\n    width: -moz-fit-content;\n    width: fit-content;\n    left: 0;\n    bottom: 0;\n    top: 0;\n    right: 0;\n    height: -moz-fit-content;\n    height: fit-content;\n    font-size: 13px;\n    color: var(--m-slider-label-color,rgb(255,255,255));\n    margin: auto;\n    pointer-events: none;\n    display: none;\n}\n:host[labeled=true] p.value, :host[labeled=true] p.hidden-value {\n    display: initial;\n}\n:host .slider {\n    width: 0%;\n    height: 100%;\n    border-radius: 12px;\n    background-color: var(--m-slider-slider-backgroundColor,#2EA2F9);\n    position: relative;\n}\n:host .slider .slider-bar {\n    position: absolute;\n    right: 5px;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    width: 2px;\n    border-radius: 100px;\n    height: 15px;\n    background-color: white;\n}\n:host([disabled=true]) {\n    cursor: default;\n    pointer-events:none;\n}\n:host([disabled=true]) .slider-bar {\n    display: none;\n}",template:'\n                <div class="slider">\n                        <p class="value"></p>\n                        <div class="slider-bar"></div>\n                </div>\n                <p class="hidden-value"></p>',props:w,syncProps:["disabled","labeled","value","min","max","step"],dispatch:{propChanged(t,e){if("value"===t){let t=Number(e)
t<this.min&&(t=this.min),t>this.max&&(t=this.max)
const n=(t-this.min)/(this.max-this.min)*100,o=this.shadowRoot?.querySelector(".slider")
o.style.width=`${n}%`
const s={hiddened:this.shadowRoot?.querySelector(".hidden-value"),normal:this.shadowRoot?.querySelector(".value")}
f(s,this.min,this.max,t,this.labeled),this.value!==t&&(this.value=t)}}},setup(){const t=this.shadowRoot?.querySelector(".slider")
let e,n=!1
const o=null!==this.value?Number(this.value):this.min
t.style.width=(o-this.min)/(this.max-this.min)*100+"%"
const s={hiddened:this.shadowRoot?.querySelector(".hidden-value"),normal:this.shadowRoot?.querySelector(".value")}
let r
return setTimeout((()=>{f(s,this.min,this.max,this.value,this.labeled)})),this?.addEventListener("mousedown",(o=>{e=o.clientX,n=!0,r=parseInt(getComputedStyle(t).width)/this.getBoundingClientRect().width*100})),document?.addEventListener("mouseup",(()=>n=!1)),document?.addEventListener("mousemove",(o=>{if(!n)return
const{width:i,left:a}=this.getBoundingClientRect(),l=e-a
let d=(o.clientX-a-l)/i*100+r
d>=100?d=100:d<=0&&(d=0),t.style.width=`${d}%`
const h=Number((Math.round((this.max-this.min)*d/100/this.step)*this.step+this.min).toFixed(2))
this.value=h>this.max?this.max:h,f(s,this.min,this.max,this.value,this.labeled),this.dispatchEvent(new Event("input"))})),this?.addEventListener("touchstart",(o=>{e=o.touches[0].clientX,n=!0,r=parseInt(getComputedStyle(t).width)/this.getBoundingClientRect().width*100})),document?.addEventListener("touchend",(()=>n=!1)),document?.addEventListener("touchmove",(o=>{if(!n)return
const{width:i,left:a}=this.getBoundingClientRect(),l=e-a
let d=(o.touches[0].clientX-a-l)/i*100+r
d>=100?d=100:d<=0&&(d=0),t.style.width=`${d}%`
const h=Number((Math.round((this.max-this.min)*d/100/this.step)*this.step+this.min).toFixed(2))
this.value=h>this.max?this.max:h,f(s,this.min,this.max,this.value,this.labeled),this.dispatchEvent(new Event("input"))})),{}}})){}k.defineElement()
var y=(t,e)=>{let n
return function(...o){n=setTimeout((()=>{clearTimeout(n),t.apply(this,[...o])}),e)}}
const q={value:"",index:0}
class C extends(n({name:"m-segmented-button",style:":host {\n    width: -moz-fit-content;\n    display:block;\n    width: fit-content;\n    border-radius: 10000000px;\n    padding: 5px;\n    position: relative;\n    background-color: var(--m-segmented-button-backgroundColor,white);\n}\n:host .selected-slider {\n    position: absolute;\n    top: 0;\n    left: 5px;\n    bottom: 0;\n    margin: auto;\n    height: -moz-fit-content;\n    height: fit-content;\n    padding: 10px 0;\n    font-size: 14px;\n    border-radius: 10000000px;\n    z-index: 1;\n    background-color: var(--m-segmented-button-slider-backgroundColor,#2EA2F9);\n    color: white;\n    transition: left 0.3s, box-shadow 0.3s, transform 0.2s, width 0.3s;\n    cursor: pointer;\n    text-align:center;\n    white-space:nowrap;\n    display:none;\n}\n:host .selected-slider:hover {\n    box-shadow: 0px 4px 20px var(--m-segmented-button-slider-hover-boxShadowColor,#2ea1f9d6);\n}\n:host .selected-slider:active {\n    transform: scale(0.96);\n}\n:host slot {\n    display: flex;\n    width: -moz-fit-content;\n    width: 100%;\n}\n",template:'\n        <div class="selected-slider"></div>\n        <slot></slot>',syncProps:["value"],props:q,dispatch:{propChanged(t,e){if("value"===t){const t=this.querySelectorAll("m-segmented-button-item")
for(const n in t)if(t[n].value==e){this.index=Number(n)
break}const{left:n,width:o}=t[this.index].getBoundingClientRect(),{offsetLeft:s}=this,r=this.shadowRoot?.querySelector(".selected-slider")
r.style.left=n-s+"px",r.style.width=`${o}px`,r.innerHTML=t[this.index].innerHTML}}},setup(){return setTimeout((()=>{let t=this.offsetLeft,e=this.getBoundingClientRect().width
const n=this.shadowRoot?.querySelector(".selected-slider"),o=getComputedStyle(n).transition,s=v(this,"m-segmented-button-item",{selected:!0})
if(s[0]){const e=this.querySelectorAll("m-segmented-button-item")
for(let t=0;t<e.length;t++)if(e[t]===s[0]){this.index=t
break}const o=s[0].innerHTML,r=s[0].value||"",{width:i,left:a}=s[0].getBoundingClientRect(),l=a-t
n.style.left=`${l}px`,n.style.width=`${i}px`,n.innerHTML=o,this.value=r}else{let e=0
const o=this.querySelectorAll("m-segmented-button-item")
if(!0===o[e].disabled){e=NaN
for(const t in o)if(!1===o[t].disabled){e=Number(t)
break}}if("NaN"===e.toString())throw new Error("The default selection is misinitialized. Be sure to have at least one non-disabled element in the group list.")
const s=o[e].innerHTML,r=o[e].value||"",{width:i,left:a}=o[e].getBoundingClientRect()
n.style.left=a-t+"px",n.style.width=`${i}px`,n.innerHTML=s,this.value=r,this.index=e}const r=this.querySelectorAll("m-segmented-button-item")
for(let e=0;e<r.length;e++)r[e].addEventListener("click",(()=>{if(e===this.index)return
this.index=e
const{value:o,innerHTML:s}=r[e],{width:i,left:a}=r[e].getBoundingClientRect()
n.style.width=`${i}px`,n.style.left=a-t+"px",this.value=o,n.innerHTML=s,this.dispatchEvent(new Event("change"))}))
const i=y(((t,e)=>{e.style.transition=t}),300),a=new ResizeObserver((s=>{const a=s[0].contentRect.width
if(a!=e){e=a,t=this.offsetLeft
const s={newWidth:r[this.index].getBoundingClientRect().width,newLeft:r[this.index].getBoundingClientRect().left}
n.style.transition="none",n.style.width=`${s.newWidth}px`,n.style.left=s.newLeft-t+"px",i(o,n)}}))
a.observe(this),n.style.display="initial"})),{}}})){}C.defineElement()
const B={selected:!1,value:"",disabled:!1}
class E extends(n({name:"m-segmented-button-item",props:B,style:":host {\n  padding: 10px 20px;\n  font-size: 14px;\n  border-radius: 10000000px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  width:100%;\n  text-align:center;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n}\n:host slot{\n    white-space:nowrap;\n}\n:host(:hover) {\n  background-color: var(--m-segmented-button-item-hover-backgroundColor,#F2F2F2);\n}\n:host(:active) {\n  background-color: var(--m-segmented-button-item-active-backgroundColor,#e2e2e2);\n}\n:host([disabled=true]){\n  pointer-events:none;\n  color:gray;\n}",template:"<slot></slot>",syncProps:["disabled"]})){}E.defineElement()
const T={unknow:!1,value:0,max:100}
class A extends(n({name:"m-linear-progress",style:":host {\n    background-color: var(--m-linear-progress-thumb-color,#EFEFEF);\n    height: 3px;\n    width: 300px;\n    border-radius: 10px;\n    overflow: hidden;\n    position: relative;\n    display:block;\n}\n:host .value {\n    background-color: var(--m-linear-progress-value-color,#2EA2F9);\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 0%;\n    height: 100%;\n    border-radius: 10px;\n}\n:host([unknown=true]) .value {\n    width: 30%;\n    animation: unknow-value cubic-bezier(0, 0, 0, 0) 3s infinite normal;\n}\n@keyframes unknow-value {\n    0% {\n        left: -30%;\n        width: 30%;\n    }\n    50% {\n        width: 10%;\n    }\n    100% {\n        width: 30%;\n        left: 130%;\n    }\n}",template:'<div class="value"></div>',props:T,syncProps:["value"],dispatch:{propChanged(t,e){if("value"==t){const t=e||0,n=this.max
let o=Number(t)/n*100
o>100&&(o=100),o<0&&(o=0)
const s=this.shadowRoot?.querySelector(".value")
s.style.width=`${o}%`}}},setup(t){let e=(this.value||0)/(this.max||100)*100
e>100&&(e=100),e<0&&(e=0)
const n=t?.querySelector(".value")
return n.style.width=`${e}%`,{}}})){}A.defineElement()
const Z=320*Math.PI,S=`:host {\n    display: block;\n    width: 40px;\n    height: 40px;\n    color: var(--m-circular-progress-fillColor,#2EA2F9);\n}\n:host svg{\n    width: inherit;\n    height: inherit;\n    color: currentColor;\n}\n:host svg ellipse {\n    stroke: currentColor;\n    stroke-dasharray: ${Z}px;\n    stroke-dashoffset: var(--dashoffset,${Z}px);\n    stroke-linecap: round;\n}\n:host([unknown=true]) svg {\n    animation: unknown-value 1s linear infinite;\n}\n:host([unknown=true]) svg ellipse {\n    stroke-dasharray: ${Z}px;\n    stroke-linecap: round;\n    stroke-dashoffset: 314;\n}\n@keyframes unknown-value {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}`,F={unknown:!1,value:100,max:100}
class M extends(n({name:"m-circular-progress",template:'<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">\n            <defs></defs>\n            <ellipse style="fill: none; stroke-width: 30px; " cx="250" cy="250" rx="160"\n                ry="160"></ellipse>\n            </svg>',style:S,props:F,syncProps:["unknown","value"],dispatch:{propChanged(t,e){if("value"===t){const t=this.max,n=this.shadowRoot?.querySelector("svg")
n?.style.setProperty("--dashoffset",String(Z*(1-Number(e)/t)))}}},setup(t){const e=this.value,n=this.max,o=t?.querySelector("svg")
return o?.style.setProperty("--dashoffset",String(Z*(1-e/n))),{}}})){}return M.defineElement(),t.Button=s,t.Checkbox=p,t.CircularProgress=M,t.FAB=c,t.Icon=a,t.IconButton=d,t.LinearProgress=A,t.Radio=x,t.SegmentedButton=C,t.SegmentedButtonItem=E,t.Slider=k,t}({})
