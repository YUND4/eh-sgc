"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[693],{96693:(ot,f,s)=>{s.r(f),s.d(f,{RequestListSGCModule:()=>et,routes:()=>R});var d=s(86019),U=s(94296),I=s(39914);const p="ADMIN";var a=s(53700),L=s(15882);const y={area_code:"",avatar:"",position_code:"",email:"",role_code:"USER",status:"",id:"",name:""};var t=s(83668),h=s(8870),u=s(49133),_=s(91553),x=s(15304),C=s(39260),Z=s(59112),v=s(90086),T=s(28167),q=s(74383),A=s(16400),c=s(960),S=s(58977),G=s(6731),b=s(87444);function N(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"mat-option",33),t._uU(2),t.qZA(),t.BQk()),2&o){const e=i.$implicit;t.xp6(1),t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}function w(o,i){1&o&&(t.TgZ(0,"th",34),t._uU(1," No. "),t.qZA())}function J(o,i){if(1&o&&(t.TgZ(0,"td",35),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e.id," ")}}function Q(o,i){1&o&&(t.TgZ(0,"th",34),t._uU(1," Lider Auditado "),t.qZA())}function D(o,i){if(1&o&&(t.TgZ(0,"td",35),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e.process_lead_name," ")}}function P(o,i){1&o&&(t.TgZ(0,"th",34),t._uU(1," Fecha "),t.qZA())}function F(o,i){if(1&o&&(t.TgZ(0,"td",35),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e.detected_date," ")}}function Y(o,i){1&o&&(t.TgZ(0,"th",34),t._uU(1," Estado "),t.qZA())}function M(o,i){if(1&o&&(t.TgZ(0,"td",35),t._UZ(1,"mat-icon",36),t.qZA()),2&o){const e=i.$implicit,n=t.oxw();t.xp6(1),t.Tol(n.getStatusIconColor(e)),t.Q6J("svgIcon",n.getStatusIcon(e))}}function $(o,i){1&o&&(t.TgZ(0,"th",34),t.TgZ(1,"div",37),t._uU(2,"Opciones"),t.qZA(),t.qZA())}function O(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",43),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().$implicit;return t.oxw().followTracking(r)}),t._UZ(1,"mat-icon",44),t.qZA()}2&o&&(t.xp6(1),t.Q6J("svgIcon","heroicons_outline:book-open"))}function B(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",45),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().$implicit;return t.oxw().followInit(r)}),t._UZ(1,"mat-icon",46),t.qZA()}2&o&&(t.xp6(1),t.Q6J("svgIcon","heroicons_outline:bell"))}function z(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",47),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().$implicit;return t.oxw().followFinish(r)}),t._UZ(1,"mat-icon",48),t.qZA()}2&o&&(t.xp6(1),t.Q6J("svgIcon","heroicons_outline:key"))}function E(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"td",35),t.TgZ(1,"div",10),t.YNc(2,O,2,1,"button",38),t.YNc(3,B,2,1,"button",39),t.YNc(4,z,2,1,"button",40),t.TgZ(5,"button",41),t.TgZ(6,"mat-icon",42),t.NdJ("click",function(){return t.CHM(e),t.oxw().followDetail()}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=i.$implicit,n=t.oxw();t.xp6(2),t.Q6J("ngIf",n.editViability(e,"follow")),t.xp6(1),t.Q6J("ngIf",n.editViability(e,"init")),t.xp6(1),t.Q6J("ngIf",n.editViability(e,"finish")),t.xp6(2),t.Q6J("svgIcon","heroicons_outline:information-circle")}}function H(o,i){1&o&&t._UZ(0,"tr",49)}function j(o,i){1&o&&t._UZ(0,"tr",50)}const k=function(){return["Abierto","Cerrado","Listo para cerrar","Todos"]},V=function(){return[5,10,25,100]};let X=(()=>{class o{constructor(e,n,r,l,m){this._service=e,this._formBuilder=n,this._router=r,this._dialog=l,this._userService=m,this.displayedColumns=["id","process_lead_name","detected_date","status_code","options"],this.formFieldHelpers=[""],this.requests=[],this.totalItems=1,this.itemsPerPage=10,this.currentPage=0,this.postPerPage=0,this.isAdmin=!0,this.currentUser=y,this.searchFormControl=n.group({search:["",[]],status:["Todos",[]]}),this.searchFormControl.get("search").valueChanges.subscribe({next:g=>{}}),this.searchFormControl.get("status").valueChanges.subscribe({next:g=>{}}),this._userService.get().subscribe({next:g=>{this.currentUser=g.data,this.updateTable()}})}onPaginate(e){this.postPerPage=+e.pageSize,this.currentPage=+e.pageIndex+1,this.updateTable()}updateTable(){this._service.getRequests({request_type:L._,page:this.currentPage,per_page:this.postPerPage}).subscribe({next:e=>{this.requests=e.data.map(n=>new U.q(n)),this.currentPage=e.current_page,this.itemsPerPage=parseInt(e.per_page),this.totalItems=e.total,console.log(e)},error:e=>{console.log(e)}})}getFormFieldHelpersAsString(){return this.formFieldHelpers.join(" ")}openDialog(e){this._dialog.open(I.S,{width:"900px",data:e}).afterClosed().subscribe(r=>{console.log(`Dialog result: ${r}`)})}followDetail(){this._router.navigateByUrl("/request/detail")}followTracking(e){this._router.navigateByUrl(`/request/trace/sgc/${e.id}`)}followInit(e){this._router.navigateByUrl(`/request/init/sgc/${e.id}`)}followFinish(e){this._router.navigateByUrl(`/request/finish/sgc/${e.id}`)}editViability(e,n){var r,l,m;return"init"==n?(null===(r=this.currentUser)||void 0===r?void 0:r.role_code)==p||this.currentUser.id==e.process_lead_id&&[a.hA].includes(e.status_code):"follow"==n?(null===(l=this.currentUser)||void 0===l?void 0:l.role_code)==p||this.currentUser.id==e.process_lead_id&&[a.o1].includes(e.status_code):"finish"==n&&(null===(m=this.currentUser)||void 0===m?void 0:m.role_code)==p&&[a.uP].includes(e.status_code)}getStatusIcon(e){return e.status_code==a.o1?"heroicons_outline:cube-transparent":e.status_code==a.hA?"heroicons_outline:minus-sm":e.status_code==a.uP?"heroicons_outline:cube-transparent":e.status_code==a.F$?"heroicons_outline:cube":e.status_code==a._?"heroicons_outline:cube-transparent":"heroicons_outline:cube"}getStatusIconColor(e){return e.status_code==a.o1?"text-blue_eh":e.status_code==a.hA?"text-warn":e.status_code==a.uP?"text-orange_eh":e.status_code==a.F$?"text-green_eh":e.status_code==a._?"text-warn":"text-gray"}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h.s),t.Y36(u.qu),t.Y36(_.F0),t.Y36(x.uw),t.Y36(C.K))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-request-list"]],decls:46,vars:13,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex","justify-end"],["mat-flat-button","",1,"fuse-mat-button-rounded",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"flex-auto","p-6","sm:p-10"],[1,"flex-auto","w-full"],[3,"formGroup"],[1,"w-4/5","pr-5"],["matInput","","formControlName","search","name","search"],[1,"w-1/5"],["name","status","formControlName","status"],[4,"ngFor","ngForOf"],["mat-table","",1,"mat-elevation-z2",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","process_lead_name"],["matColumnDef","detected_date"],["matColumnDef","status_code"],["matColumnDef","options"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"mat-elevation-z2",3,"length","pageSize","pageSizeOptions","page"],[3,"value"],["mat-header-cell",""],["mat-cell",""],[3,"svgIcon"],[1,"flex","justify-end","mr-10"],["mat-icon-button","","matTooltip","Seguimiento","class","mr-2",3,"click",4,"ngIf"],["mat-icon-button","","matTooltip","Atender solicitud","class","mr-2",3,"click",4,"ngIf"],["mat-icon-button","","matTooltip","Evaluar solicitud","class","mr-2",3,"click",4,"ngIf"],["mat-icon-button","","color","primary","matTooltip","Ver detalle",1,"mr-2"],[3,"svgIcon","click"],["mat-icon-button","","matTooltip","Seguimiento",1,"mr-2",3,"click"],[1,"text-orange_eh",3,"svgIcon"],["mat-icon-button","","matTooltip","Atender solicitud",1,"mr-2",3,"click"],[1,"text-warn",3,"svgIcon"],["mat-icon-button","","matTooltip","Evaluar solicitud",1,"mr-2",3,"click"],[1,"text-green_eh",3,"svgIcon"],["mat-header-row",""],["mat-row",""]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div"),t.TgZ(5,"a",4),t._uU(6,"Solicitudes"),t.qZA(),t.qZA(),t.TgZ(7,"div",5),t._UZ(8,"mat-icon",6),t.TgZ(9,"a",7),t._uU(10,"Listar"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",8),t.TgZ(12,"h2",9),t._uU(13," Listar Solicitudes "),t.qZA(),t.TgZ(14,"div",10),t.TgZ(15,"button",11),t._UZ(16,"mat-icon",12),t.TgZ(17,"span",13),t._uU(18,"Nueva solicitud"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",14),t.TgZ(20,"div",15),t.TgZ(21,"form",16),t.TgZ(22,"mat-form-field",17),t._UZ(23,"input",18),t.qZA(),t.TgZ(24,"mat-form-field",19),t.TgZ(25,"mat-select",20),t.YNc(26,N,3,2,"ng-container",21),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"table",22),t.ynx(28,23),t.YNc(29,w,2,0,"th",24),t.YNc(30,J,2,1,"td",25),t.BQk(),t.ynx(31,26),t.YNc(32,Q,2,0,"th",24),t.YNc(33,D,2,1,"td",25),t.BQk(),t.ynx(34,27),t.YNc(35,P,2,0,"th",24),t.YNc(36,F,2,1,"td",25),t.BQk(),t.ynx(37,28),t.YNc(38,Y,2,0,"th",24),t.YNc(39,M,2,3,"td",25),t.BQk(),t.ynx(40,29),t.YNc(41,$,3,0,"th",24),t.YNc(42,E,7,4,"td",25),t.BQk(),t.YNc(43,H,1,0,"tr",30),t.YNc(44,j,1,0,"tr",31),t.qZA(),t.TgZ(45,"mat-paginator",32),t.NdJ("page",function(l){return n.onPaginate(l)}),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(8),t.Q6J("svgIcon","heroicons_solid:chevron-right"),t.xp6(7),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:pencil-alt"),t.xp6(5),t.Q6J("formGroup",n.searchFormControl),t.xp6(5),t.Q6J("ngForOf",t.DdM(11,k)),t.xp6(1),t.Q6J("dataSource",n.requests),t.xp6(16),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("length",n.totalItems)("pageSize",n.itemsPerPage)("pageSizeOptions",t.DdM(12,V)))},directives:[Z.Hw,v.lW,u._Y,u.JL,u.sg,T.KE,q.Nt,u.Fj,u.JJ,u.u,A.gD,d.sg,c.BZ,c.w1,c.fO,c.Dz,c.as,c.nj,S.NW,G.ey,c.ge,c.ev,d.O5,b.gM,c.XQ,c.Gk],styles:["table[_ngcontent-%COMP%]{width:100%}.badge[_ngcontent-%COMP%]{color:#fff!important;font-weight:bold}"]}),o})();var K=s(88182),W=s(44522),tt=s(34504);const R=[{path:"",component:X}];let et=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[C.K,h.s,{provide:W.TP,useClass:K.X,multi:!0}],imports:[[_.Bz.forChild(R),d.ez,Z.Ps,c.p0,v.ot,b.AV,S.TU,T.lN,q.c,u.u5,x.Is,tt.Q,u.UX,A.LD]]}),o})()}}]);