"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[232],{71232:(ee,p,n)=>{n.r(p),n.d(p,{RequestCreateSCIModule:()=>W,routes:()=>F});var f=n(91553),Z=n(90086),S=n(67348),Q=n(58621),m=n(98727),J=n(85694),u=n(28167),g=n(59112),q=n(74383),U=n(83530),N=n(6515),C=n(16400),R=n(5934),O=n(51382),l=n(49133),y=n(94296),T=n(23452),e=n(83668),A=n(8870),h=n(86019),k=n(6731),v=n(80336),x=n(42318),B=n(52329);function Y(o,i){if(1&o&&(e.ynx(0),e.TgZ(1,"mat-option",49),e._uU(2),e.ALo(3,"titlecase"),e.qZA(),e.BQk()),2&o){const t=i.$implicit;e.xp6(1),e.Q6J("value",t),e.xp6(1),e.Oqu(e.lcZ(3,2,t))}}function $(o,i){if(1&o&&(e.TgZ(0,"mat-option",49),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function b(o,i){if(1&o&&(e.ynx(0),e.TgZ(1,"mat-option",49),e._uU(2),e.ALo(3,"titlecase"),e.qZA(),e.BQk()),2&o){const t=i.$implicit;e.xp6(1),e.Q6J("value",t),e.xp6(1),e.Oqu(e.lcZ(3,2,t))}}function L(o,i){if(1&o&&(e.TgZ(0,"mat-option",49),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function D(o,i){if(1&o&&(e.ynx(0),e.TgZ(1,"mat-option",49),e._uU(2),e.ALo(3,"titlecase"),e.qZA(),e.BQk()),2&o){const t=i.$implicit;e.xp6(1),e.Q6J("value",t),e.xp6(1),e.Oqu(e.lcZ(3,2,t))}}function w(o,i){if(1&o&&(e.ynx(0),e.TgZ(1,"mat-option",49),e._uU(2),e.ALo(3,"titlecase"),e.qZA(),e.BQk()),2&o){const t=i.$implicit;e.xp6(1),e.Q6J("value",t),e.xp6(1),e.Oqu(e.lcZ(3,2,t))}}function z(o,i){if(1&o&&(e.ynx(0),e.TgZ(1,"mat-option",49),e._uU(2),e.ALo(3,"titlecase"),e.qZA(),e.BQk()),2&o){const t=i.$implicit;e.xp6(1),e.Q6J("value",t),e.xp6(1),e.Oqu(e.lcZ(3,2,t))}}function M(o,i){if(1&o&&(e.ynx(0),e.TgZ(1,"mat-option",49),e._uU(2),e.qZA(),e.BQk()),2&o){const t=i.$implicit;e.xp6(1),e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}function H(o,i){if(1&o&&(e.ynx(0),e.TgZ(1,"mat-option",49),e._uU(2),e.qZA(),e.BQk()),2&o){const t=i.$implicit;e.xp6(1),e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}function E(o,i){if(1&o&&(e.ynx(0),e.TgZ(1,"mat-option",49),e._uU(2),e.qZA(),e.BQk()),2&o){const t=i.$implicit;e.xp6(1),e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}function G(o,i){if(1&o&&(e.ynx(0),e.TgZ(1,"mat-option",49),e._uU(2),e.qZA(),e.BQk()),2&o){const t=i.$implicit;e.xp6(1),e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}function j(o,i){if(1&o&&(e.ynx(0),e.TgZ(1,"mat-option",49),e._uU(2),e.qZA(),e.BQk()),2&o){const t=i.$implicit;e.xp6(1),e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}let V=(()=>{class o{constructor(t,r,a){this._formBuilder=t,this._router=r,this._service=a,this.formFieldHelpers=[""],this.users=[],this.selectable={detectedFor:[],processLead:[]},this.selectFilter="",this.base64File="",this.requestFormControl=this._formBuilder.group({init_date:[null,[l.kI.required]],detected_date:[null,[l.kI.required]],detected_in:[null,[l.kI.required]],detected_for_id:[null,[l.kI.required]],unfulfilled_requirement:[null,[l.kI.required]],process_lead_id:[null,[l.kI.required]],process_affected:[null,[l.kI.required]],how_detected:[null,[l.kI.required]],action_type:[null,[l.kI.required]],evidence_description:[null,[l.kI.required]],request_description:[null,[l.kI.required]],evidence_file:[null,[l.kI.required]]}),this.selectFormControl=this._formBuilder.group({select_filter:[""]}),this.codeFormControl=this._formBuilder.group({section1:[null,[l.kI.required]],section2:[null,[l.kI.required]],section3:[null,[l.kI.required]],section4:[null,[l.kI.required]],section5:[null,[l.kI.required]]}),this.loadSelectOptions()}loadSelectOptions(){const t=["Opcion 1","Opcion 2"];this.users=[new T.T({name:"Santiago",id:2}),new T.T({name:"Camilo",id:1})],this.selectable.detectedFor.push(...this.users),this.selectable.processLead.push(...this.users),this.processAffected=t,this.howDetected=t,this.actionType=t,this.unfulfilledRequirement=t,this.detectedIn=t,this.codeSection1=["EH","JU"],this.codeSection2=["2001","2002"],this.codeSection3=["BO","SA"],this.codeSection4=["SIS","ADM"],this.codeSection5=["001","002"]}getFormFieldHelpersAsString(){return this.formFieldHelpers.join(" ")}submit(){if(console.log(this.codeFormControl.value),this.requestFormControl.valid&&this.codeFormControl.valid){const s=new y.q(this.requestFormControl.value);let d="",I=!0;for(const c in this.codeFormControl.value)I?(d+=this.codeFormControl.value[c],I=!1):d+=`-${this.codeFormControl.value[c]}`;console.log(d),s.request_code=d,s.evidence_file=this.base64File,s.request_type_code="SCI",this._service.createRequest(s).subscribe({next:c=>{console.log(`Correcto ${c.data}`),this._router.navigateByUrl(`/request/invoice/${c.data.id}`)},error:c=>{console.log(`Error ${c}`)},complete:()=>{console.log("Completado")}})}}onChangeFilter(t){this.inputTimeout&&clearTimeout(this.inputTimeout),this.inputTimeout=setTimeout(()=>{this.selectable[t]=this.users.filter(r=>r.name.toLowerCase().includes(this.selectFormControl.value.select_filter.toLowerCase())),console.log("Filtrado")},500)}OnChangeFile(){console.log("File Changed");let t=new FileReader;t.readAsDataURL(this.requestFormControl.value.evidence_file.files[0]),t.onload=()=>{this.base64File=t.result,console.log("Base 64 convertido")},t.onerror=function(r){console.log("Error: ",r)}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.qu),e.Y36(f.F0),e.Y36(A.s))},o.\u0275cmp=e.Xpm({type:o,selectors:[["request-create"]],decls:117,vars:21,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex-auto","p-6","sm:p-10"],[1,"max-w-6xl"],[1,"flex","flex-col","mt-8","p-8","pb-4","bg-card","rounded-2xl","shadow","overflow-hidden",3,"formGroup"],[1,"w-full"],[1,"w-1/4","pl-2"],["matInput","","name","init_date","formControlName","init_date",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],[1,"w-1/4","pl-4"],["matInput","","name","detected_date","formControlName","detected_date",3,"matDatepicker"],["picker2",""],[1,"w-2/4","pl-4"],["name","detected_in","formControlName","detected_in"],[4,"ngFor","ngForOf"],[1,"w-2/3","pl-2"],["name","detected_for_id","formControlName","detected_for_id"],[3,"formGroup"],["name","select_filter","formControlName","select_filter",3,"input"],[3,"value",4,"ngFor","ngForOf"],[1,"w-1/3","pl-4"],["name","unfulfilled_requirement","formControlName","unfulfilled_requirement"],["name","process_lead_id","formControlName","process_lead_id"],["name","process_affected","formControlName","process_affected"],["name","how_detected","formControlName","how_detected"],["name","action_type","formControlName","action_type"],[1,"w-1/5","pl-2"],["name","section1","formControlName","section1"],[1,"w-1/5","pl-4"],["name","section2","formControlName","section2"],["name","section3","formControlName","section3"],["name","section4","formControlName","section4"],["name","section5","formControlName","section5"],[1,"w-full","pl-2"],["placeholder","Evidencia","name","evidence_file","formControlName","evidence_file",3,"change"],["matSuffix",""],["matInput","","cdkTextareaAutosize","","cdkAutosizeMinRows","3","cdkAutosizeMaxRows","5","name","evidence_description","formControlName","evidence_description"],["autosize","cdkTextareaAutosize"],["matInput","","cdkTextareaAutosize","","cdkAutosizeMinRows","3","cdkAutosizeMaxRows","5","name","request_description","formControlName","request_description"],["mat-button","",1,"bg-primary","text-white",3,"click"],[3,"value"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div"),e.TgZ(5,"a",4),e._uU(6,"Solicitud"),e.qZA(),e.qZA(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Nueva"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"div",8),e.TgZ(12,"h2",9),e._uU(13," Nueva Solicitud "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"div",10),e.TgZ(15,"div",11),e.TgZ(16,"form",12),e.TgZ(17,"div",13),e.TgZ(18,"mat-form-field",14),e.TgZ(19,"mat-label"),e._uU(20,"Fecha inicio"),e.qZA(),e._UZ(21,"input",15),e._UZ(22,"mat-datepicker-toggle",16),e._UZ(23,"mat-datepicker",null,17),e.qZA(),e.TgZ(25,"mat-form-field",18),e.TgZ(26,"mat-label"),e._uU(27,"Fecha detecta"),e.qZA(),e._UZ(28,"input",19),e._UZ(29,"mat-datepicker-toggle",16),e._UZ(30,"mat-datepicker",null,20),e.qZA(),e.TgZ(32,"mat-form-field",21),e.TgZ(33,"mat-label"),e._uU(34,"Detectado en"),e.qZA(),e.TgZ(35,"mat-select",22),e.YNc(36,Y,4,4,"ng-container",23),e.qZA(),e.qZA(),e.qZA(),e.TgZ(37,"div",13),e.TgZ(38,"mat-form-field",24),e.TgZ(39,"mat-label"),e._uU(40,"Detectado por "),e.qZA(),e.TgZ(41,"mat-select",25),e.ynx(42),e.TgZ(43,"mat-option"),e.TgZ(44,"form",26),e.TgZ(45,"ngx-mat-select-search",27),e.NdJ("input",function(){return r.onChangeFilter("detectedFor")}),e.qZA(),e.qZA(),e.qZA(),e.YNc(46,$,2,2,"mat-option",28),e.BQk(),e.qZA(),e.qZA(),e.TgZ(47,"mat-form-field",29),e.TgZ(48,"mat-label"),e._uU(49,"Requisito incumplido"),e.qZA(),e.TgZ(50,"mat-select",30),e.YNc(51,b,4,4,"ng-container",23),e.qZA(),e.qZA(),e.qZA(),e.TgZ(52,"div",13),e.TgZ(53,"mat-form-field",24),e.TgZ(54,"mat-label"),e._uU(55,"Lider del proceso "),e.qZA(),e.TgZ(56,"mat-select",31),e.TgZ(57,"mat-option"),e.TgZ(58,"form",26),e.TgZ(59,"ngx-mat-select-search",27),e.NdJ("input",function(){return r.onChangeFilter("processLead")}),e.qZA(),e.qZA(),e.qZA(),e.YNc(60,L,2,2,"mat-option",28),e.qZA(),e.qZA(),e.TgZ(61,"mat-form-field",29),e.TgZ(62,"mat-label"),e._uU(63,"Proceso afectado"),e.qZA(),e.TgZ(64,"mat-select",32),e.YNc(65,D,4,4,"ng-container",23),e.qZA(),e.qZA(),e.qZA(),e.TgZ(66,"div",13),e.TgZ(67,"mat-form-field",24),e.TgZ(68,"mat-label"),e._uU(69,"Como se detecta "),e.qZA(),e.TgZ(70,"mat-select",33),e.YNc(71,w,4,4,"ng-container",23),e.qZA(),e.qZA(),e.TgZ(72,"mat-form-field",29),e.TgZ(73,"mat-label"),e._uU(74,"Tipo de accion"),e.qZA(),e.TgZ(75,"mat-select",34),e.YNc(76,z,4,4,"ng-container",23),e.qZA(),e.qZA(),e.qZA(),e.TgZ(77,"div",13),e.TgZ(78,"form",26),e.TgZ(79,"mat-form-field",35),e.TgZ(80,"mat-label"),e._uU(81,"Hallazgo No"),e.qZA(),e.TgZ(82,"mat-select",36),e.YNc(83,M,3,2,"ng-container",23),e.qZA(),e.qZA(),e.TgZ(84,"mat-form-field",37),e.TgZ(85,"mat-select",38),e.YNc(86,H,3,2,"ng-container",23),e.qZA(),e.qZA(),e.TgZ(87,"mat-form-field",37),e.TgZ(88,"mat-select",39),e.YNc(89,E,3,2,"ng-container",23),e.qZA(),e.qZA(),e.TgZ(90,"mat-form-field",37),e.TgZ(91,"mat-select",40),e.YNc(92,G,3,2,"ng-container",23),e.qZA(),e.qZA(),e.TgZ(93,"mat-form-field",37),e.TgZ(94,"mat-select",41),e.YNc(95,j,3,2,"ng-container",23),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(96,"div",13),e.TgZ(97,"mat-form-field",42),e.TgZ(98,"mat-label"),e._uU(99,"Evidencia"),e.qZA(),e.TgZ(100,"ngx-mat-file-input",43),e.NdJ("change",function(){return r.OnChangeFile()}),e.qZA(),e.TgZ(101,"mat-icon",44),e._uU(102,"folder"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(103,"div",13),e.TgZ(104,"mat-form-field",42),e.TgZ(105,"mat-label"),e._uU(106,"Descripcion de la evidencia"),e.qZA(),e._UZ(107,"textarea",45,46),e.qZA(),e.qZA(),e.TgZ(109,"div",13),e.TgZ(110,"mat-form-field",42),e.TgZ(111,"mat-label"),e._uU(112,"Descripcion del hallazgo o mejora"),e.qZA(),e._UZ(113,"textarea",47,46),e.qZA(),e.qZA(),e.TgZ(115,"button",48),e.NdJ("click",function(){return r.submit()}),e._uU(116,"Crear una solicitud"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t){const a=e.MAs(24),s=e.MAs(31);e.xp6(8),e.Q6J("svgIcon","heroicons_solid:chevron-right"),e.xp6(8),e.Q6J("formGroup",r.requestFormControl),e.xp6(5),e.Q6J("matDatepicker",a),e.xp6(1),e.Q6J("for",a),e.xp6(6),e.Q6J("matDatepicker",s),e.xp6(1),e.Q6J("for",s),e.xp6(7),e.Q6J("ngForOf",r.detectedIn),e.xp6(8),e.Q6J("formGroup",r.selectFormControl),e.xp6(2),e.Q6J("ngForOf",r.selectable.detectedFor),e.xp6(5),e.Q6J("ngForOf",r.unfulfilledRequirement),e.xp6(7),e.Q6J("formGroup",r.selectFormControl),e.xp6(2),e.Q6J("ngForOf",r.selectable.processLead),e.xp6(5),e.Q6J("ngForOf",r.processAffected),e.xp6(6),e.Q6J("ngForOf",r.howDetected),e.xp6(5),e.Q6J("ngForOf",r.actionType),e.xp6(2),e.Q6J("formGroup",r.codeFormControl),e.xp6(5),e.Q6J("ngForOf",r.codeSection1),e.xp6(3),e.Q6J("ngForOf",r.codeSection2),e.xp6(3),e.Q6J("ngForOf",r.codeSection3),e.xp6(3),e.Q6J("ngForOf",r.codeSection4),e.xp6(3),e.Q6J("ngForOf",r.codeSection5)}},directives:[g.Hw,l._Y,l.JL,l.sg,u.KE,u.hX,q.Nt,l.Fj,m.hl,l.JJ,l.u,m.nW,u.R9,m.Mq,C.gD,h.sg,k.ey,v.nu,x.Yh,B.IC,Z.lW],pipes:[h.rS],styles:[""],encapsulation:2}),o})();var P=n(904),_=n(44522),X=n(88182),K=n(73205);const F=[{path:"",component:V}];let W=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[A.s,K.K,{provide:_.TP,useClass:X.X,multi:!0}],imports:[[_.JF,f.Bz.forChild(F),Z.ot,S.vV,Q.Hi,m.FA,J.t,u.lN,g.Ps,q.c,U.Tx,N.Yd,C.LD,P.p9,x.Ad,R.$A,O.m,l.u5,v.Co]]}),o})()}}]);