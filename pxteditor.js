var pxt;!function(e){!function(t){let s,o,r,i,n;!function(e){e[e.Stopped=0]="Stopped",e[e.Pending=1]="Pending",e[e.Starting=2]="Starting",e[e.Running=3]="Running"}(s=t.SimState||(t.SimState={})),t.isBlocks=function(t){return e.U.endsWith(t.name,".blocks")},function(e){e.HeaderOnly="errorListHeader",e.Expanded="errorListExpanded"}(o=t.ErrorListState||(t.ErrorListState={})),function(e){e.Muted="muted",e.Unmuted="unmuted",e.Disabled="disabled"}(r=t.MuteState||(t.MuteState={})),function(e){e[e.Hidden=0]="Hidden",e[e.Visible=1]="Visible",e[e.Disabled=2]="Disabled"}(i=t.FilterState||(t.FilterState={})),t.initExtensionsAsync=e=>Promise.resolve({}),t.initFieldExtensionsAsync=e=>Promise.resolve({}),t.HELP_IMAGE_URI="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTMiIGN5PSIxMyIgcj0iMTMiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNy45NTIgOS4xODQwMkMxNy45NTIgMTAuMjU2IDE3LjgxNiAxMS4wNzIgMTcuNTQ0IDExLjYzMkMxNy4yODggMTIuMTkyIDE2Ljc1MiAxMi43OTIgMTUuOTM2IDEzLjQzMkMxNS4xMiAxNC4wNzIgMTQuNTc2IDE0LjU4NCAxNC4zMDQgMTQuOTY4QzE0LjA0OCAxNS4zMzYgMTMuOTIgMTUuNzM2IDEzLjkyIDE2LjE2OFYxNi45NkgxMS44MDhDMTEuNDI0IDE2LjQ2NCAxMS4yMzIgMTUuODQgMTEuMjMyIDE1LjA4OEMxMS4yMzIgMTQuNjg4IDExLjM4NCAxNC4yODggMTEuNjg4IDEzLjg4OEMxMS45OTIgMTMuNDg4IDEyLjUzNiAxMi45NjggMTMuMzIgMTIuMzI4QzE0LjEwNCAxMS42NzIgMTQuNjI0IDExLjE2OCAxNC44OCAxMC44MTZDMTUuMTM2IDEwLjQ0OCAxNS4yNjQgOS45NjgwMiAxNS4yNjQgOS4zNzYwMkMxNS4yNjQgOC4yMDgwMiAxNC40MTYgNy42MjQwMiAxMi43MiA3LjYyNDAyQzExLjc2IDcuNjI0MDIgMTAuNzUyIDcuNzM2MDIgOS42OTYgNy45NjAwMkw5LjE0NCA4LjA4MDAyTDkgNi4wODgwMkMxMC40ODggNS41NjAwMiAxMS44NCA1LjI5NjAyIDEzLjA1NiA1LjI5NjAyQzE0LjczNiA1LjI5NjAyIDE1Ljk2OCA1LjYwODAyIDE2Ljc1MiA2LjIzMjAyQzE3LjU1MiA2Ljg0MDAyIDE3Ljk1MiA3LjgyNDAyIDE3Ljk1MiA5LjE4NDAyWk0xMS40IDIyVjE4LjY0SDE0LjE4NFYyMkgxMS40WiIgZmlsbD0iIzU5NUU3NCIvPgo8L3N2Zz4K",t.initEditorExtensionsAsync=function(){if(!n&&(n=Promise.resolve(),e.appTarget&&e.appTarget.appTheme&&e.appTarget.appTheme.extendFieldEditors)){const t={};n=n.then((()=>e.BrowserUtils.loadBlocklyAsync())).then((()=>e.BrowserUtils.loadScriptAsync("fieldeditors.js"))).then((()=>e.editor.initFieldExtensionsAsync(t))).then((t=>{t.fieldEditors&&t.fieldEditors.forEach((t=>{e.blocks.registerFieldEditor(t.selector,t.editor,t.validator)}))}))}return n}}(e.editor||(e.editor={}))}(pxt||(pxt={})),function(e){!function(t){const s={};function o(e,t,s,o){e.response&&window.parent.postMessage({type:e.type,id:e.id,resp:t,success:s,error:o},"*")}function r(t){return new Promise(((o,r)=>{const i=e.Util.clone(t);i.id=ts.pxtc.Util.guidGen(),t.response&&(s[i.id]={resolve:o,reject:r}),window.parent.postMessage(i,"*"),t.response||o(void 0)}))}t.bindEditorMessages=function(t){const r=(e.appTarget.appTheme.allowParentController||e.shell.isControllerMode())&&e.BrowserUtils.isIFrame(),i=e.appTarget.appTheme.allowPackageExtensions,n=e.appTarget.appTheme.allowSimulatorTelemetry;(r||i||n)&&window.addEventListener("message",(a=>{const c=a.data;if(!c||!/^pxt(host|editor|pkgext|sim)$/.test(c.type))return!1;if("pxtpkgext"===c.type&&i)t().then((e=>{e.handleExtensionRequest(c)}));else if("pxtsim"===c.type&&n){const t=c;"event"===t.action&&(t.category||t.message?e.reportError(t.category,t.message,t.data):e.tickEvent(t.tick,t.data))}else if(r){let r,i=Promise.resolve();if("pxthost"==c.type){const t=s[c.id];t?i=i.then((()=>t.resolve(c))):e.debug(`pxthost: unknown request ${c.id}`)}else"pxteditor"==c.type&&(i=i.then((()=>t().then((t=>{const s=c;switch(e.debug(`pxteditor: ${s.action}`),s.action.toLowerCase()){case"switchjavascript":return Promise.resolve().then((()=>t.openJavaScript()));case"switchpython":return Promise.resolve().then((()=>t.openPython()));case"switchblocks":return Promise.resolve().then((()=>t.openBlocks()));case"startsimulator":return Promise.resolve().then((()=>t.startSimulator()));case"restartsimulator":return Promise.resolve().then((()=>t.restartSimulator()));case"hidesimulator":return Promise.resolve().then((()=>t.collapseSimulator()));case"showsimulator":return Promise.resolve().then((()=>t.expandSimulator()));case"closeflyout":return Promise.resolve().then((()=>t.closeFlyout()));case"unloadproject":return Promise.resolve().then((()=>t.unloadProjectAsync()));case"saveproject":return t.saveProjectAsync();case"redo":return Promise.resolve().then((()=>{const e=t.editor;e&&e.hasRedo()&&e.redo()}));case"undo":return Promise.resolve().then((()=>{const e=t.editor;e&&e.hasUndo()&&e.undo()}));case"setscale":{const e=c;return Promise.resolve().then((()=>t.editor.setScale(e.scale)))}case"stopsimulator":{const e=c;return Promise.resolve().then((()=>t.stopSimulator(e.unload)))}case"newproject":{const e=c;return Promise.resolve().then((()=>t.newProject(e.options)))}case"importproject":{const e=c;return Promise.resolve().then((()=>t.importProjectAsync(e.project,{filters:e.filters,searchBar:e.searchBar})))}case"openheader":{const e=c;return t.openProjectByHeaderIdAsync(e.headerId)}case"startactivity":{const s=c;let o,r=s.path;return/^([jt]s|py|blocks?):/i.test(r)&&(o=/^py:/i.test(r)?e.PYTHON_PROJECT_NAME:/^[jt]s:/i.test(r)?e.JAVASCRIPT_PROJECT_NAME:e.BLOCKS_PROJECT_NAME,r=r.substr(r.indexOf(":")+1)),Promise.resolve().then((()=>t.startActivity({activity:s.activityType,path:r,title:s.title,editor:o,previousProjectHeaderId:s.previousProjectHeaderId,carryoverPreviousCode:s.carryoverPreviousCode})))}case"importtutorial":{const e=c;return Promise.resolve().then((()=>t.importTutorialAsync(e.markdown)))}case"proxytosim":{const e=c;return Promise.resolve().then((()=>t.proxySimulatorMessage(e.content)))}case"renderblocks":{const e=c;return Promise.resolve().then((()=>t.renderBlocksAsync(e))).then((e=>e.xml.then((e=>{r=e.xml}))))}case"renderpython":{const e=c;return Promise.resolve().then((()=>t.renderPythonAsync(e))).then((e=>{r=e.python}))}case"toggletrace":{const e=c;return Promise.resolve().then((()=>t.toggleTrace(e.intervalSpeed)))}case"settracestate":{const e=c;return Promise.resolve().then((()=>t.setTrace(e.enabled,e.intervalSpeed)))}case"setsimulatorfullscreen":{const e=c;return Promise.resolve().then((()=>t.setSimulatorFullScreen(e.enabled)))}case"togglehighcontrast":return Promise.resolve().then((()=>t.toggleHighContrast()));case"sethighcontrast":{const e=c;return Promise.resolve().then((()=>t.setHighContrast(e.on)))}case"togglegreenscreen":return Promise.resolve().then((()=>t.toggleGreenScreen()));case"print":return Promise.resolve().then((()=>t.printCode()));case"pair":return t.pairAsync().then((()=>{}));case"info":return Promise.resolve().then((()=>{r={versions:e.appTarget.versions,locale:ts.pxtc.Util.userLanguage(),availableLocales:e.appTarget.appTheme.availableLocales}}));case"shareproject":{const e=c;return t.anonymousPublishHeaderByIdAsync(e.headerId,e.projectName).then((e=>{r=e}))}case"savelocalprojectstocloud":{const e=c;return t.saveLocalProjectsToCloudAsync(e.headerIds).then((e=>{r={headerIdMap:e}}))}case"requestprojectcloudstatus":{const e=c;return t.requestProjectCloudStatus(e.headerIds)}case"convertcloudprojectstolocal":{const e=c;return t.convertCloudProjectsToLocal(e.userId)}case"setlanguagerestriction":{const e=c;if("no-blocks"===e.restriction)throw console.warn("no-blocks language restriction is not supported"),new Error("no-blocks language restriction is not supported");return t.setLanguageRestrictionAsync(e.restriction)}}return Promise.resolve()})))));i.then((()=>o(c,r,!0,void 0)),(e=>o(c,r,!1,e)))}return!0}),!1)},t.enableControllerAnalytics=function(){if(!e.appTarget.appTheme.allowParentController||!e.BrowserUtils.isIFrame())return;const t=e.tickEvent;e.tickEvent=function(e,s){t&&t(e,s),r({type:"pxthost",action:"event",tick:e,response:!1,data:s})};const s=e.reportException;e.reportException=function(e,t){s&&s(e,t);try{r({type:"pxthost",action:"event",tick:"error",message:e.message,response:!1,data:t})}catch(e){}};const o=e.reportError;e.reportError=function(e,t,s){o&&o(e,t,s),r({type:"pxthost",action:"event",tick:"error",category:e,message:t,data:s})}},t.shouldPostHostMessages=function(){return e.appTarget.appTheme.allowParentController&&e.BrowserUtils.isIFrame()},t.postHostMessageAsync=r}(e.editor||(e.editor={}))}(pxt||(pxt={})),function(e){!function(t){!function(t){function s(e){return`experiments-${"object"==typeof e?e.id:e}`}function o(){const t=e.savedAppTheme(),s={},o=r();return o.forEach((e=>{const o=i(e);t[e.id]=!!o,o&&(s[e.id]=o?1:0)})),o.length&&Object.keys(s).length&&(e.tickEvent("experiments.loaded",s),e.reloadAppTargetVariant()),e.appTarget.appTheme}function r(){const t=e.appTarget.appTheme.experiments;return t?[{id:"print",name:lf("Print Code"),description:lf("Print the code from the current project"),feedbackUrl:"https://github.com/microsoft/pxt/issues/4740"},{id:"greenScreen",name:lf("Green screen"),description:lf("Display a webcam video stream or a green background behind the code."),feedbackUrl:"https://github.com/microsoft/pxt/issues/4738"},{id:"allowPackageExtensions",name:lf("Editor Extensions"),description:lf("Allow Extensions to add buttons in the editor."),feedbackUrl:"https://github.com/microsoft/pxt/issues/4741"},{id:"instructions",name:lf("Wiring Instructions"),description:lf("Generate step-by-step assembly instructions for breadboard wiring."),feedbackUrl:"https://github.com/microsoft/pxt/issues/4739"},{id:"debugger",name:lf("Debugger"),description:lf("Step through code and inspect variables in the debugger"),feedbackUrl:"https://github.com/microsoft/pxt/issues/4729"},{id:"bluetoothUartConsole",name:"Bluetooth Console",description:lf("Receives UART message through Web Bluetooth"),feedbackUrl:"https://github.com/microsoft/pxt/issues/4796"},{id:"bluetoothPartialFlashing",name:"Bluetooth Download",description:lf("Download code via Web Bluetooth"),feedbackUrl:"https://github.com/microsoft/pxt/issues/4807"},{id:"simScreenshot",name:lf("Simulator Screenshots"),description:lf("Download screenshots of the simulator"),feedbackUrl:"https://github.com/microsoft/pxt/issues/5232"},{id:"python",name:lf("Static Python"),description:lf("Use Static Python to code your device"),feedbackUrl:"https://github.com/microsoft/pxt/issues/5390"},{id:"simGif",name:lf("Simulator Gifs"),description:lf("Download gifs of the simulator"),feedbackUrl:"https://github.com/microsoft/pxt/issues/5297"},{id:"qrCode",name:lf("Shared QR Code"),description:lf("Generate a QR Code form the shared project url"),feedbackUrl:"https://github.com/microsoft/pxt/issues/5456"},{id:"importExtensionFiles",name:lf("Import Extension Files"),description:lf("Import Extensions from compiled project files")},{id:"debugExtensionCode",name:lf("Debug Extension Code"),description:lf("Use the JavaScript debugger to debug extension code")},{id:"snippetBuilder",name:lf("Snippet Builder"),description:lf("Try out the new snippet dialogs.")},{id:"experimentalHw",name:lf("Experimental Hardware"),description:lf("Enable support for hardware marked 'experimental' in the hardware seletion dialog")},{id:"checkForHwVariantWebUSB",name:lf("Detect Hardware with WebUSB"),description:lf("When compiling, use WebUSB to detect hardware configuration.")},{id:"githubEditor",name:lf("GitHub editor"),description:lf("Review, commit and push to GitHub."),feedbackUrl:"https://github.com/microsoft/pxt/issues/6419",enableOnline:!0},{id:"githubCompiledJs",name:lf("GitHub Pages JavaScript"),description:lf("Commit compiled javascript when creating a release"),enableOnline:!0},{id:"blocksCollapsing",name:lf("Collapse blocks"),description:lf("Collapse and expand functions or event blocks")},{id:"tutorialBlocksDiff",name:lf("Tutorial Block Diffs"),description:lf("Automatially render blocks diff in tutorials")},{id:"openProjectNewTab",name:lf("Open in New Tab"),description:lf("Open an editor in a new tab.")},{id:"openProjectNewDependentTab",name:lf("Open in New Connected Tab"),description:lf("Open connected editors in different browser tabs.")},{id:"accessibleBlocks",name:lf("Accessible Blocks"),description:lf("Use the WASD keys to move and modify blocks."),feedbackUrl:"https://github.com/microsoft/pxt/issues/6850"},{id:"errorList",name:lf("Error List"),description:lf("Show an error list panel for JavaScript and Python.")},{id:"blocksErrorList",name:lf("Blocks Error List"),description:lf("Show an error list panel for Blocks")}].filter((s=>t.indexOf(s.id)>-1&&!(e.BrowserUtils.isPxtElectron()&&s.enableOnline))):[]}function i(t){return!!e.storage.getLocal(s(t))}function n(t,r){r!=i(t)&&(r?e.storage.setLocal(s(t),"1"):e.storage.removeLocal(s(t)),o())}t.syncTheme=o,t.all=r,t.clear=function(){r().forEach((t=>e.storage.removeLocal(s(t)))),o()},t.someEnabled=function(){return r().some((e=>i(e)))},t.isEnabled=i,t.toggle=function(e){n(e,!i(e))},t.state=function(){const e={};return r().forEach((t=>e[t.id]=i(t))),JSON.stringify(e)},t.setState=n}(t.experiments||(t.experiments={}))}(e.editor||(e.editor={}))}(pxt||(pxt={})),function(e){!function(t){function s(t){const s=e.appTarget.appTheme.invertedMonaco,o=!(!e.appTarget.appTheme.monacoFieldEditors||!e.appTarget.appTheme.monacoFieldEditors.length),r=e.BrowserUtils.isAndroid();let i=monaco.editor.create(t,{model:null,ariaLabel:e.Util.lf("JavaScript editor"),fontFamily:"'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', 'monospace'",scrollBeyondLastLine:!0,language:"typescript",mouseWheelZoom:!1,wordBasedSuggestions:!0,lineNumbersMinChars:3,formatOnPaste:!0,folding:o,glyphMargin:o||e.appTarget.appTheme.debugger,minimap:{enabled:!1},fixedOverflowWidgets:!0,autoIndent:"full",useTabStops:!0,dragAndDrop:!0,matchBrackets:"always",occurrencesHighlight:!1,quickSuggestionsDelay:200,theme:s?"vs-dark":"vs",renderIndentGuides:!0,accessibilityHelpUrl:"",quickSuggestions:{other:!r,comments:!r,strings:!r},acceptSuggestionOnCommitCharacter:!r,acceptSuggestionOnEnter:r?"off":"on",accessibilitySupport:r?"off":"on"});return i.layout(),i}t.syncModels=function(e,t,s,o){if(o)return;let r=monaco.languages.typescript.typescriptDefaults.getExtraLibs(),i={};e.sortedDeps().forEach((e=>{e.getFiles().forEach((o=>{let r=e.id+"/"+o;if(/\.(ts)$/.test(o)&&r!=s){if(!monaco.languages.typescript.typescriptDefaults.getExtraLibs()[r]){let s=e.readFile(o)||"\n";t[r]=monaco.languages.typescript.typescriptDefaults.addExtraLib(s,r)}i[r]="1"}}))})),Object.keys(r).filter((e=>/\.(ts)$/.test(e)&&!i[e])).forEach((e=>{t[e].dispose()}))},t.initMonacoAsync=function(t){return new Promise(((o,r)=>{if("object"==typeof window.monaco)return void o(s(t));let i=window.MonacoPaths,n=()=>{let r=window.require;r.config({paths:i}),r(["vs/editor/editor.main"],(()=>{monaco.languages.register({id:"asm",extensions:[".asm"]}),monaco.languages.setMonarchTokensProvider("asm",{tokenPostfix:"",keywords:["movs","mov","adds","add","adcs","adr","subs","sbcs","sub","rsbs","muls","cmp","cmn","ands","eors","orrs","bics","mvns","tst","lsls","lsrs","asrs","rors","ldr","ldrh","ldrb","ldrsh","ldrsb","ldm","str","strh","strb","stm","push","pop","cbz","cbnz","b","bl","bx","blx","sxth","sxtb","uxth","uxtb","rev","rev16","revsh","svc","cpsid","cpsie","setend","bkpt","nop","sev","wfe","wfi","yield","beq","bne","bcs","bhs","bcc","blo","bmi","bpl","bvs","bvc","bhi","bls","bge","blt","bgt","ble","bal","r0","r1","r2","r3","r4","r5","r6","r7","r8","r9","r10","r11","r12","r13","r14","r15","pc","sp","lr"],typeKeywords:[".startaddr",".hex",".short",".space",".section",".string",".byte"],operators:[],symbols:/[:\*]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/(\.)?[a-z_$\.][\w$]*/,{cases:{"@typeKeywords":"keyword","@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":""}}],[/@\s*[a-zA-Z_\$][\w\$]*/,{token:"annotation"}],[/(#|(0[xX]))?[0-9a-fA-F]+/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,{token:"string.quote",bracket:"@open",next:"@string"}],[/'[^\\']'/,"string"],[/(')(@escapes)(')/,["string","string.escape","string"]],[/'/,"string.invalid"]],comment:[],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"],[/\/\*/,"comment","@comment"],[/;.*$/,"comment"]]}}),monaco.languages.typescript&&(monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSyntaxValidation:!0,noSemanticValidation:!0}),monaco.languages.typescript.typescriptDefaults.setWorkerOptions({customWorkerPath:e.webConfig.typeScriptWorkerJs}),monaco.languages.typescript.typescriptDefaults.setCompilerOptions({allowUnreachableCode:!0,noImplicitAny:!0,allowJs:!1,allowUnusedLabels:!0,target:monaco.languages.typescript.ScriptTarget.ES5,outDir:"built",rootDir:".",noLib:!0,mouseWheelZoom:!1})),o(s(t))}))};if(window.require)n();else{let e=document.createElement("script");e.type="text/javascript",e.src=i["vs/loader"],e.addEventListener("load",n),document.body.appendChild(e)}}))},t.createEditor=s}(e.vs||(e.vs={}))}(pxt||(pxt={})),function(e){!function(t){t.freshHeader=function(t,s){return{target:e.appTarget.id,targetVersion:e.appTarget.versions.target,name:t,meta:{},editor:e.JAVASCRIPT_PROJECT_NAME,pubId:"",pubCurrent:!1,_rev:null,id:e.U.guidGen(),recentUse:s,modificationTime:s,cloudUserId:null,cloudCurrent:!1,cloudVersion:null,cloudLastSyncTime:0,isDeleted:!1}}}(e.workspace||(e.workspace={}))}(pxt||(pxt={})),function(e){!function(e){const t={};e.registerMonacoFieldEditor=function(e,s){t[e]=s},e.getMonacoFieldEditor=function(e){return t[e]}}(e.editor||(e.editor={}))}(pxt||(pxt={})),function(e){!function(t){t.MonacoReactFieldEditor=class{getId(){return"image-editor"}showEditorAsync(t,s,o){return this.fileType=t,this.editrange=s,this.host=o,this.initAsync().then((()=>{const t=this.textToValue(o.getText(s));return t?(this.fv=e.react.getFieldEditorView(this.getFieldEditorId(),t,this.getOptions()),this.fv.onHide((()=>{this.onClosed()})),this.fv.show(),new Promise(((e,t)=>{this.resolver=e,this.rejecter=t}))):Promise.resolve(null)}))}onClosed(){this.resolver&&(this.resolver({range:this.editrange,replacement:this.resultToText(this.fv.getResult())}),this.editrange=void 0,this.resolver=void 0,this.rejecter=void 0)}dispose(){this.onClosed()}initAsync(){return Promise.resolve()}textToValue(e){return null}resultToText(e){return e+""}getFieldEditorId(){return""}getOptions(){return null}}}(e.editor||(e.editor={}))}(pxt||(pxt={})),function(e){!function(t){const s="music-editor";class o extends t.MonacoReactFieldEditor{textToValue(t){this.isPython=-1===t.indexOf("`"),this.text=t;const s=e.parseAssetTSReference(t);if(s){const{type:t,name:o}=s,r=o.trim(),i=e.react.getTilemapProject();this.isAsset=!0;const n=i.lookupAssetByName("song",r);if(n)return n;{const t=i.createNewSong(e.assets.music.getEmptySong(2));return r&&!i.isNameTaken("song",r)&&e.validateAssetName(r)&&(t.meta.displayName=r),t}}const o=/hex\s*(?:`|\(""")\s*([a-fA-F0-9]*)\s*(?:`|"""\))\s*(?:;?)/m.exec(t);if(o){const t=o[1].trim();return r(t?e.assets.music.decodeSongFromHex(t):e.assets.music.getEmptySong(2))}}resultToText(t){var s;if(null===(s=t.meta)||void 0===s?void 0:s.displayName){const s=e.react.getTilemapProject();return t=this.isAsset||s.lookupAsset(t.type,t.id)?s.updateAsset(t):s.createNewSong(t.song,t.meta.displayName),this.isAsset=!0,e.getTSReferenceForAsset(t,this.isPython)}let o=e.assets.music.encodeSongToHex(t.song);return o=this.isPython?`hex("""${o}""")`:"hex`"+o+"`",this.text.replace(/hex\s*(?:`|\(""")\s*([a-fA-F0-9]*)\s*(?:`|"""\))\s*(?:;?)/m,o)}getFieldEditorId(){return s}getOptions(){return{blocksInfo:this.host.blocksInfo()}}}function r(e){return{type:"song",id:"",internalID:0,meta:{},song:e}}t.MonacoSongEditor=o,t.songEditorDefinition={id:s,foldMatches:!0,glyphCssClass:"fas fa-music sprite-focus-hover",heightInPixels:510,matcher:{searchString:'(?:(?:assets\\s*\\.\\s*song)|(?:music\\s*\\.\\s*create(?:S|_s)ong\\s*\\(\\s*hex))\\s*(?:`|\\(\\s*""")(?:(?:[^(){}:\\[\\]"\';?/,+\\-=*&|^%!`~]|\\n)*)\\s*(?:`|"""\\s*\\))',isRegex:!0,matchCase:!0,matchWholeWord:!1},proto:o},t.registerMonacoFieldEditor(s,t.songEditorDefinition)}(e.editor||(e.editor={}))}(pxt||(pxt={})),function(e){!function(t){const s="soundeffect-editor";class o extends t.MonacoReactFieldEditor{textToValue(e){const t={wave:"sine",startFrequency:5e3,endFrequency:0,startVolume:255,endVolume:0,duration:500,effect:"none",interpolation:"linear"};this.value=t;const s=/\(([^)]*)\)/.exec(e)[1].split(",").map((e=>e.replace(/\s/g,"")));if(8!==s.length)return t;switch(s[0]){case"WaveShape.Sawtooth":t.wave="sawtooth";break;case"WaveShape.Square":t.wave="square";break;case"WaveShape.Noise":t.wave="noise";break;case"WaveShape.Triangle":t.wave="triangle";break;case"WaveShape.Sine":default:t.wave="sine"}const o=(e,t)=>isNaN(e)?t:e;switch(t.startFrequency=o(parseInt(s[1]),t.startFrequency),t.endFrequency=o(parseInt(s[2]),t.endFrequency),t.startVolume=o(parseInt(s[3]),t.startVolume),t.endVolume=o(parseInt(s[4]),t.endVolume),t.duration=o(parseInt(s[5]),t.duration),s[6]){case"SoundExpressionEffect.Vibrato":t.effect="vibrato";break;case"SoundExpressionEffect.Tremolo":t.effect="tremolo";break;case"SoundExpressionEffect.Warble":t.effect="warble";break;case"SoundExpressionEffect.None":default:t.effect="none"}switch(s[7]){case"InterpolationCurve.Logarithmic":t.interpolation="logarithmic";break;case"InterpolationCurve.Curve":t.interpolation="curve";break;case"InterpolationCurve.Linear":default:t.interpolation="linear"}return t}resultToText(e){let t,s,o;switch((e=this.value).wave){case"sine":t="WaveShape.Sine";break;case"square":t="WaveShape.Square";break;case"triangle":t="WaveShape.Triangle";break;case"noise":t="WaveShape.Noise";break;case"sawtooth":t="WaveShape.Sawtooth"}switch(e.effect){case"vibrato":s="SoundExpressionEffect.Vibrato";break;case"tremolo":s="SoundExpressionEffect.Tremolo";break;case"warble":s="SoundExpressionEffect.Warble";break;case"none":s="SoundExpressionEffect.None"}switch(e.interpolation){case"curve":o="InterpolationCurve.Curve";break;case"linear":o="InterpolationCurve.Linear";break;case"logarithmic":o="InterpolationCurve.Logarithmic"}return`music.createSoundEffect(${t}, ${Math.round(e.startFrequency)}, ${Math.round(e.endFrequency)}, ${Math.round(e.startVolume)}, ${Math.round(e.endVolume)}, ${Math.round(e.duration)}, ${s}, ${o})`}getFieldEditorId(){return s}getOptions(){return{onClose:()=>this.fv.hide(),onSoundChange:e=>this.value=e,initialSound:this.value,useFlex:!0,useMixerSynthesizer:"microbit"!==e.appTarget.id}}}t.MonacoSoundEffectEditor=o,t.soundEditorDefinition={id:s,foldMatches:!0,glyphCssClass:"fas fa-music sprite-focus-hover",heightInPixels:510,matcher:{searchString:"music\\s*\\.\\s*createSoundEffect\\s*\\(",isRegex:!0,matchCase:!0,matchWholeWord:!1,validateRange:function(e,t){let s=e.startLineNumber,o=0,r=!1,i=0;const n="createSoundEffect",a=t.getLineCount();for(;s<a;){const a=t.getLineContent(s),c=a.indexOf(n);if(-1!==c&&(r=!0,o=c+n.length),r)for(;o<a.length;){const r=a.charAt(o);if("("===r)i++;else if(")"===r&&(i--,0===i))return new monaco.Range(e.startLineNumber,e.startColumn,s,o+t.getLineMinColumn(s)+1);o++}o=0,s++}}},proto:o},t.registerMonacoFieldEditor(s,t.soundEditorDefinition)}(e.editor||(e.editor={}))}(pxt||(pxt={})),function(e){!function(t){const s="image-editor";class o extends t.MonacoReactFieldEditor{textToValue(t){this.isPython=-1===t.indexOf("`");const s=e.parseAssetTSReference(t);if(s){const{type:t,name:o}=s,r=o.trim(),i=e.react.getTilemapProject();this.isAsset=!0;const n=i.lookupAssetByName("image",r);if(n)return n;{const t=i.createNewImage();return r&&!i.isNameTaken("image",r)&&e.validateAssetName(r)&&(t.meta.displayName=r),t}}return{type:"image",id:"",internalID:0,bitmap:e.sprite.imageLiteralToBitmap(t).data(),meta:{},jresData:""}}resultToText(t){var s;if(null===(s=t.meta)||void 0===s?void 0:s.displayName){const s=e.react.getTilemapProject();return t=this.isAsset||s.lookupAsset(t.type,t.id)?s.updateAsset(t):s.createNewProjectImage(t.bitmap,t.meta.displayName),this.isAsset=!0,e.getTSReferenceForAsset(t,this.isPython)}return e.sprite.bitmapToImageLiteral(e.sprite.Bitmap.fromData(t.bitmap),this.isPython?"python":"typescript")}getFieldEditorId(){return"image-editor"}getOptions(){return{initWidth:16,initHeight:16,blocksInfo:this.host.blocksInfo()}}}t.MonacoSpriteEditor=o,t.spriteEditorDefinition={id:s,foldMatches:!0,glyphCssClass:"sprite-editor-glyph sprite-focus-hover",heightInPixels:510,matcher:{searchString:'(?:img|assets\\s*\\.\\s*image)\\s*(?:`|\\(\\s*""")(?:(?:[^(){}:\\[\\]"\';?/,+\\-=*&|^%!`~]|\\n)*)\\s*(?:`|"""\\s*\\))',isRegex:!0,matchCase:!0,matchWholeWord:!1},proto:o},t.registerMonacoFieldEditor(s,t.spriteEditorDefinition)}(e.editor||(e.editor={}))}(pxt||(pxt={})),function(e){!function(t){const s="tilemap-editor";class o extends t.MonacoReactFieldEditor{textToValue(t){const s=this.readTilemap(t),o=e.react.getTilemapProject();return e.sprite.addMissingTilemapTilesAndReferences(o,s),s}readTilemap(t){const s=e.react.getTilemapProject();if(/^\s*tiles\s*\./.test(t)&&(this.isTilemapLiteral=!1,t)){try{return function(e){return{type:"tilemap",id:"",internalID:0,meta:{},data:e}}(e.sprite.decodeTilemap(t,"typescript",s))}catch(e){}return null}this.isTilemapLiteral=!0;const o=/^\s*(tilemap(?:8|16|32)?)\s*(?:`([^`]*)`)|(?:\(\s*"""([^"]*)"""\s*\))\s*$/.exec(t),r=(o[2]||o[3]||"").trim();let i,n;if(this.tilemapLiteral=o[1],r&&(n=ts.pxtc.escapeIdentifier(r),i=s.getTilemap(n)||s.lookupAssetByName("tilemap",r)),!i){let e=16;"tilemap8"===this.tilemapLiteral?e=8:"tilemap32"===this.tilemapLiteral&&(e=32);const[t]=s.createNewTilemap(n,e,16,16);i=s.getTilemap(t),n=t}return i}resultToText(t){const s=e.react.getTilemapProject();return s.pushUndo(),e.sprite.updateTilemapReferencesFromResult(s,t),this.isTilemapLiteral?(s.updateAsset(t),e.getTSReferenceForAsset(t,"python"===this.fileType)):e.sprite.encodeTilemap(t.data,"typescript"===this.fileType?"typescript":"python")}getFieldEditorId(){return"tilemap-editor"}getOptions(){return{initWidth:16,initHeight:16,blocksInfo:this.host.blocksInfo()}}getCreateTilemapRange(){const e=this.editrange.getStartPosition();let t,s=this.editrange.getEndPosition(),o=1;for(;;){t=new monaco.Range(s.lineNumber,s.column,s.lineNumber+1,0);const r=this.host.getText(t);for(let t=0;t<r.length;t++)if("("===r.charAt(t))o++;else if(")"===r.charAt(t)&&(o--,0===o)){const o=new monaco.Position(s.lineNumber,s.column+t+2);return monaco.Range.fromPositions(e,o)}if(s=t.getEndPosition(),s.lineNumber>e.lineNumber+20)return null}}}t.MonacoTilemapEditor=o,t.tilemapEditorDefinition={id:s,foldMatches:!0,alwaysBuildOnClose:!0,glyphCssClass:"sprite-focus-hover ms-Icon ms-Icon--Nav2DMapView",heightInPixels:510,weight:5,matcher:{searchString:'(?:tilemap(?:8|16|32)?\\s*(?:`|\\(""")(?:[ a-zA-Z0-9_]|\\n)*\\s*(?:`|"""\\)))|(?:tiles\\s*\\.\\s*createTilemap\\s*\\([^\\)]+\\))',isRegex:!0,matchCase:!0,matchWholeWord:!1},proto:o},t.registerMonacoFieldEditor(s,t.tilemapEditorDefinition)}(e.editor||(e.editor={}))}(pxt||(pxt={}));