"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[334],{53334:(S,v,o)=>{o.r(v),o.d(v,{RequestTraceSGCModule:()=>K,routes:()=>_});var g=o(91553),m=o(90086),x=o(904),u=o(28167),l=o(59112),h=o(74383),c=o(69859),y=o(16400),I=o(82255),U=o(51382),t=o(83668),s=o(49133),k=o(15882),f=o(86019),T=o(29),C=o(21237),J=o(69179),Z=o(12605),A=o(66289),b=o(87444),q=o(89009),G=o(38620);function R(r,i){1&r&&(t.TgZ(0,"div",53),t._UZ(1,"div",54),t.qZA())}function P(r,i){1&r&&(t.TgZ(0,"div",55),t._UZ(1,"div",56),t.qZA())}function O(r,i){1&r&&(t.TgZ(0,"div",57),t._UZ(1,"div",58),t.qZA())}const F=function(r){return{"bg-gray-200":r}};function N(r,i){if(1&r){const e=t.EpF();t.TgZ(0,"div",46),t.NdJ("click",function(){const a=t.CHM(e),d=a.$implicit,p=a.$implicit;return t.oxw(2).setForm(d,p)}),t.YNc(1,R,2,0,"div",47),t.YNc(2,P,2,0,"div",48),t.YNc(3,O,2,0,"div",49),t._uU(4),t.TgZ(5,"div",50),t.TgZ(6,"div",51),t._uU(7),t.qZA(),t.TgZ(8,"div",52),t._uU(9),t.qZA(),t.qZA(),t.qZA()}if(2&r){const e=i.$implicit,n=i.$implicit,a=t.oxw(2);t.Q6J("ngClass",t.VKq(7,F,a.selectedIndex==n)),t.xp6(1),t.Q6J("ngIf",e.percentage<39),t.xp6(1),t.Q6J("ngIf",e.percentage>40&&e.percentage<69),t.xp6(1),t.Q6J("ngIf",e.percentage>70),t.xp6(1),t.hij(" ",e.percentage,"% "),t.xp6(3),t.Oqu(e.goal_description),t.xp6(2),t.Oqu(a.formatDate(e.created_at))}}function Q(r,i){1&r&&(t.TgZ(0,"div",59),t.TgZ(1,"div",50),t.TgZ(2,"div",60),t._uU(3," Todavia no has hecho nigun seguimiento! "),t.qZA(),t.qZA(),t.qZA())}function M(r,i){if(1&r){const e=t.EpF();t.TgZ(0,"mat-tab",14),t.TgZ(1,"div",15),t.TgZ(2,"div",16),t.TgZ(3,"div",17),t.TgZ(4,"form",18),t.TgZ(5,"div",19),t.TgZ(6,"div",20),t.TgZ(7,"mat-form-field",21),t.TgZ(8,"mat-label"),t._uU(9,"Breve descripcion del seguimiento"),t.qZA(),t._UZ(10,"input",22),t.qZA(),t.TgZ(11,"mat-form-field",23),t.TgZ(12,"mat-label"),t._uU(13,"Avance"),t.qZA(),t._UZ(14,"input",24),t.qZA(),t.qZA(),t._UZ(15,"div",25),t.TgZ(16,"div",26),t.TgZ(17,"div",27),t.TgZ(18,"mat-label"),t._uU(19,"Seguimiento"),t.qZA(),t._UZ(20,"quill-editor",28),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"div",29),t.TgZ(22,"div",30),t._UZ(23,"div",31),t.ALo(24,"percent"),t._UZ(25,"mat-progress-bar",32),t.qZA(),t.TgZ(26,"div",33),t.TgZ(27,"button",34),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw().create(d)}),t.TgZ(28,"span",35),t.ynx(29),t.TgZ(30,"span"),t._uU(31,"Publicar seguimiento"),t.qZA(),t.BQk(),t._UZ(32,"mat-icon",36),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(33,"div",37),t.TgZ(34,"fuse-card",38),t.TgZ(35,"div",39),t.TgZ(36,"button",40),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw().new(d)}),t.TgZ(37,"span",41),t.ynx(38),t.TgZ(39,"span"),t._uU(40,"Nuevo seguimiento"),t.qZA(),t.BQk(),t._UZ(41,"mat-icon",42),t.qZA(),t.qZA(),t.qZA(),t.TgZ(42,"div",43),t.YNc(43,N,10,9,"div",44),t.YNc(44,Q,4,0,"div",45),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&r){const e=i.$implicit,n=t.oxw();t.Q6J("label",n.data[e].goal_description),t.xp6(4),t.Q6J("formGroup",n.formControl),t.xp6(16),t.Q6J("modules",n.quillConfiguration),t.xp6(3),t.Q6J("matTooltip",t.lcZ(24,12,n.getPercentage(n.trackings[n.data[e]])/100))("matTooltipPosition","above")("matTooltipClass","-mb-0.5"),t.xp6(2),t.Q6J("color",n.getColor())("value",n.getPercentage(n.trackings[n.data[e]])),t.xp6(7),t.Q6J("svgIcon","heroicons_solid:arrow-sm-right"),t.xp6(9),t.Q6J("svgIcon","heroicons_solid:plus"),t.xp6(2),t.Q6J("ngForOf",n.trackings[e]),t.xp6(1),t.Q6J("ngIf",0==n.data.length)}}let Y=(()=>{class r{constructor(e,n,a,d,p,w,X){this._formBuilder=e,this._wizardService=n,this._trackingService=a,this._route=d,this._cdr=p,this.locale=w,this._alert=X,this.upgradePlanD=[],this.data={},this.quillConfiguration={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{color:[]},{background:[]}],["link"],["clean"]]},this.trackings={},this._route.params.subscribe(W=>{this.requestId=W.id,this.loadStep4()}),this.formControl=this._formBuilder.group({goal_description:["",[s.kI.required]],follow_process_description:["",[s.kI.required]],percentage:["",[s.kI.required]]})}formatDate(e){return(0,f.p6)(e,"dd/MM/yyyy HH:mm",this.locale)}loadStep4(){this._wizardService.retriveStep(4,k._.toLocaleLowerCase(),this.requestId).subscribe({next:e=>{for(let n=0;n<e.data.length;n++)this.data[e.data[n].id]=e.data[n],this.addCauses(this.upgradePlanD),this._cdr.detectChanges();this.getAll()}})}addCauses(e){e.length<5&&e.push(e.length+1)}removeCauses(e){e.length>1&&e.pop()}new(e){this.trackings[e][this.trackings[e].length-1].percentage<100&&(this.formControl.setValue({goal_description:"",follow_process_description:"",percentage:""}),this.selectedIndex=null,this.formControl.enable())}create(e){if(this.formControl.valid)if(this.formControl.get("percentage").value)this._alert.confirmation("Al marcar un seguimiento al 100% esta accion correctiva se cerrara, \xbfDeseas continuar?").afterClosed().subscribe({next:n=>{if("confirmed"==n){console.log(n);const a=Object.assign({},this.formControl.value);a.upgrade_plan_id=e,this._trackingService.createTracking(a).subscribe({next:d=>{this.getAll(),this.formControl.setValue({goal_description:"",follow_process_description:"",percentage:""})}})}}});else{const n=Object.assign({},this.formControl.value);n.upgrade_plan_id=e,this._trackingService.createTracking(n).subscribe({next:a=>{this.getAll(),this.formControl.setValue({goal_description:"",follow_process_description:"",percentage:""})}})}else console.log("invalido")}setForm(e,n){this.formControl.setValue({goal_description:e.goal_description,follow_process_description:e.follow_process_description,percentage:e.percentage}),this.selectedIndex=n,this.formControl.disable()}getPercentage(e){return e&&0!=e.length?(this.lastPercentage=e[e.length-1].percentage,this.lastPercentage):0}getColor(){return"primary"}getAll(){this.trackings={},Object.keys(this.data).forEach(e=>{this._trackingService.getTrackings(e).subscribe({next:n=>{this.trackings[e]=n.data,this.trackings[e][this.trackings[e].length-1].percentage>=100&&this.formControl.disable(),this._cdr.detectChanges()}})})}get object(){return Object}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(s.qu),t.Y36(T.a),t.Y36(C.e),t.Y36(g.gz),t.Y36(t.sBO),t.Y36(t.soG),t.Y36(J.c))},r.\u0275cmp=t.Xpm({type:r,selectors:[["request-trace"]],decls:20,vars:2,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex-auto","p-6","sm:p-10"],[1,"max-w-full"],[1,"max-w-6xl"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"flex","flex-wrap","w-full"],[1,"flex","w-2/3"],[1,"flex","flex-col","h-130","shadow","rounded-2xl","overflow-hidden","bg-card","w-full","mt-5"],[3,"formGroup"],[1,"m-5"],[1,"mt-4","text-lg","font-medium"],[1,"w-2/3","pr-2"],["matInput","","name","goal_description","formControlName","goal_description"],[1,"w-1/3","pr-2"],["matInput","","type","number","name","percentage","formControlName","percentage"],[1,"w-12","h-1","my-6","border-t-2"],[1,"flex","overflow-y-auto"],[1,"w-full"],["formControlName","follow_process_description",3,"modules"],[1,"flex","flex-col","w-full","mt-auto"],[1,"relative","h-0.5"],[1,"z-10","absolute","inset-x-0","h-6","-mt-3",3,"matTooltip","matTooltipPosition","matTooltipClass"],[1,"h-0.5",3,"color","value"],[1,"px-6","py-4","text-right","bg-gray-50","dark:bg-transparent"],["mat-stroked-button","",3,"click"],[1,"inline-flex","items-center"],[1,"ml-1.5","icon-size-5",3,"svgIcon"],[1,"flex","w-1/3"],[1,"flex","overflow-y-auto","flex-col-reverse","max-h-130","ml-5","mt-5","w-full"],[1,"px-6","py-4","text-right"],["mat-button","",1,"bg-primary","text-white",3,"click"],[1,"inline-flex","items-start"],[1,"ml-1.5","icon-size-5","text-white",3,"svgIcon"],[1,"flex","flex-col","flex-auto","flex-shrink"],["class","flex items-center mt-2","style","cursor: pointer;",3,"ngClass","click",4,"ngFor","ngForOf"],["class","flex items-center mt-2",4,"ngIf"],[1,"flex","items-center","mt-2",2,"cursor","pointer",3,"ngClass","click"],["class","flex items-end ml-2 w-1 h-4 bg-red-200 rounded\n                          overflow-hidden mr-2",4,"ngIf"],["class","flex items-end ml-2 w-1 h-4 bg-orange-200\n                          rounded overflow-hidden mr-2",4,"ngIf"],["class","flex items-end ml-2 w-1 h-4 bg-green-100\n                            rounded overflow-hidden mr-2",4,"ngIf"],[1,"flex","flex-col","min-w-0","m-2","ml-5"],[1,"text-xl","font-medium","leading-none"],[1,"text-l","truncate","leading-none","mt-1"],[1,"flex","items-end","ml-2","w-1","h-4","bg-red-200","rounded","overflow-hidden","mr-2"],[1,"flex","w-full","h-1/3","bg-red-600"],[1,"flex","items-end","ml-2","w-1","h-4","bg-orange-200","rounded","overflow-hidden","mr-2"],[1,"flex","w-full","h-2/4","bg-orange-400"],[1,"flex","items-end","ml-2","w-1","h-4","bg-green-100","rounded","overflow-hidden","mr-2"],[1,"flex","w-full","h-full","bg-green-400"],[1,"flex","items-center","mt-2"],[1,"text-xl","text-center","font-medium","leading-none"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div"),t.TgZ(5,"a",4),t._uU(6,"Solicitud"),t.qZA(),t.qZA(),t.TgZ(7,"div",5),t._UZ(8,"mat-icon",6),t.TgZ(9,"a",7),t._uU(10,"Seguimiento"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",8),t.TgZ(12,"h2",9),t._uU(13," Seguimiento "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",10),t.TgZ(15,"div",11),t.TgZ(16,"div",10),t.TgZ(17,"div",12),t.TgZ(18,"mat-tab-group"),t.YNc(19,M,45,14,"mat-tab",13),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(8),t.Q6J("svgIcon","heroicons_solid:chevron-right"),t.xp6(11),t.Q6J("ngForOf",n.object.keys(n.data)))},directives:[l.Hw,Z.SP,f.sg,Z.uX,s._Y,s.JL,s.sg,u.KE,u.hX,h.Nt,s.Fj,s.JJ,s.u,s.wV,A.g6,b.gM,q.pW,m.lW,G.y,f.O5,f.mk],pipes:[f.Zx],encapsulation:2}),r})();var E=o(42318),j=o(98727),B=o(6731),D=o(44522),z=o(88182),$=o(19966),L=o(79851),H=o(55259),V=o(21561);const _=[{path:"",component:Y}];let K=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({providers:[C.e,T.a,{provide:D.TP,useClass:z.X,multi:!0}],imports:[[g.Bz.forChild(_),m.ot,x.p9,u.lN,l.Ps,h.c,c.Fk,y.LD,I.T5,U.m,Z.Nh,E.Ad,j.FA,B.XK,$.ZX,L.Bb,A.fi.forRoot({modules:{syntax:!0,toolbar:[["bold","italic","underline"],[{align:[]},{list:"ordered"},{list:"bullet"}],["clean"]]}}),H.J,V.H,b.AV,q.Cv]]}),r})()},21237:(S,v,o)=>{o.d(v,{e:()=>u});var g=o(45452),m=o(83668),x=o(44522);let u=(()=>{class l{constructor(c){this._http=c}getTrackings(c){return this._http.get(`${g._}/api/tracking?upgrade_plan_id=${c}`)}createTracking(c){return this._http.post(`${g._}/api/tracking/create`,{tracking:c})}}return l.\u0275fac=function(c){return new(c||l)(m.LFG(x.eN))},l.\u0275prov=m.Yz7({token:l,factory:l.\u0275fac}),l})()}}]);