!function(){const t=document.createElement("template"),e=document.createElement("style");t.innerHTML='\n        <div class="toggle-box">\n            <h2 class="toggle-box-title">Title of the box</h2>\n            <div class="toggle-box-body">\n                <slot name="text1">\n                <slot name="text2">\n            </div>\n        </div>\n    ',e.textContent="\n        .toggle-box {\n            padding: 10px;\n            background-color: #eee;\n            margin-bottom: 10px;\n            border: 1px solid #ccc;\n        }\n        .toggle-box-title {\n            margin: 0;\n            padding: 5px;\n            cursor: pointer;\n        }\n        .toggle-box-body {\n            padding: 10px;\n        }\n        .toggle-box-body-hide {\n            display: none;\n        }\n    ";window.customElements.define("app-toggle-box",class extends HTMLElement{constructor(){super(),this.onToggle=this.onToggle.bind(this),this.shadow=this.attachShadow({mode:"open"}),this.shadow.appendChild(e.cloneNode(!0)),this.shadow.appendChild(t.content.cloneNode(!0)),this.toggleTitle=this.shadow.querySelector(".toggle-box-title"),this.toggleBody=this.shadow.querySelector(".toggle-box-body")}connectedCallback(){this.toggleBody.classList.toggle("toggle-box-body-hide",!this.state),this.toggleTitle.textContent=this.title,this.toggleTitle.addEventListener("click",this.onToggle,!1)}onToggle(){this.toggleBody.classList.toggle("toggle-box-body-hide")}get title(){return this.hasAttribute("title")?this.getAttribute("title"):"Untitled"}get state(){const t=this.hasAttribute("state")?this.getAttribute("state"):"true";let e=!0;return"false"===t&&(e=!1),"true"===t&&(e=!0),e}})}(),function(){const t=document.createElement("template"),e=document.createElement("style");t.innerHTML='\n        <div class="tags">\n            <span class="tags-item">Paris <span class="tags-remove">x</span></span>\n            <input type="text" class="tags-input" placeholder="Add tag">\n        </div>\n    ',e.textContent="\n        :host(.test) {\n            background-color: #ddd;\n            border-radius: 3px;\n            padding: 10px;\n            display: block;\n            margin-bottom: 10px;\n        }\n\n        :host-context(.container) {\n            padding: 30px;\n            background-color: red;\n\n            left: 0;\n            top: 0;\n            margin-top: 30px;\n            display: block;\n        }\n\n        .tags {\n            display: flex;\n            flex-wrap: wrap;\n            padding: 2px 0;\n            border-radius: 4px;\n            border: 1px solid #b6b6b6;\n            background-color: white;\n        }\n\n        .tags-item {\n            display: flex;\n            align-items: center;\n            padding: 4px;\n            margin: 4px 0 4px 6px;\n            border: 1px solid #DDD;\n            border-radius: 2px;\n            background-color: #F6F6F6;\n        }\n\n        .tags-remove {\n            margin-left: 10px;\n            cursor: pointer;\n        }\n\n        .tags-input {\n            flex: 1;\n            height: 100%;\n            margin: 8px 0;\n            padding-left: 6px;\n            outline: none;\n            border: 0;\n            font: inherit;\n        }\n\n        .tags-input,\n        .tags-input:focus {\n            outline-offset: -2px;\n        }\n    ";class n extends HTMLElement{constructor(){super()}getName(){return"John"}}window.customElements.define("app-tags",class extends n{constructor(){super(),console.log(this.getName()),this.onAdd=this.onAdd.bind(this),this.onRemove=this.onRemove.bind(this),this.shadowDom=this.attachShadow({mode:"open"}),this.shadowDom.appendChild(e.cloneNode(!0)),this.shadowDom.appendChild(t.content.cloneNode(!0)),this.tags=this.shadowDom.querySelector(".tags"),this.input=this.shadowDom.querySelector(".tags-input")}onRemove(t){t.target.classList.contains("tags-remove")&&t.target.parentNode.remove()}onAdd(t){const e=t.target;"Enter"!==t.key&&"Tab"!==t.key||(t.preventDefault(),e.value.trim()&&(this.tag=document.createElement("span"),this.tag.className="tags-item",this.tag.innerHTML=`${e.value} <span class="tags-remove">x</span>`,this.tags.insertBefore(this.tag,e),e.value=""))}connectedCallback(){this.tags.addEventListener("click",this.onRemove,!1),this.input.addEventListener("keydown",this.onAdd,!1)}disconnectedCallback(){this.tags.removeEventListener("click",this.onRemove,!1),this.input.removeEventListener("keydown",this.onAdd,!1)}})}(),function(){const t=document.createElement("template");t.innerHTML='\n        <h2 class="title">Hello World Component</h2>\n        <p>Bonjour <span class="app-name"></span></p>\n        <input class="app-input">\n    ';const e="\n        .title {\n            color: royalblue;\n        }\n        .app-input {\n            width: 300px;\n            border: 1px solid #ccc;\n            outline: none;\n        }\n    ";window.customElements.define("app-hello",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.shadow.appendChild(t.content.cloneNode(!0))}connectedCallback(){const t=document.createElement("style");t.textContent=e,this.shadow.appendChild(t),this.shadow.querySelector(".app-name").textContent=this.prenom,this.shadow.querySelector(".app-input").addEventListener("input",t=>{this.shadow.querySelector(".title").innerText=t.target.value})}get prenom(){return this.hasAttribute("prenom")?this.getAttribute("prenom"):"tout le monde"}set prenom(t){this.setAttribute("prenom",t)}})}();