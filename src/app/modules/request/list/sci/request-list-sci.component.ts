import { Component, OnInit } from '@angular/core';
import { String } from 'lodash';
import { RequestModel } from '../../../../shared/models/request.model';
import { RequestService } from 'app/shared/services/request.service';
import { FormBuilder } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

export interface PeriodicElement {
  id: number;
  tech_lead: string;
  date: string;
  desc: string;
  role: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 251, tech_lead: 'Diego Palacios', date: "02/12/2021", desc: 'Incumpliento de la ISO 271', role: "aud" },
  { id: 341, tech_lead: 'Bladimir Rodriguez', date: "02/12/2021", desc: 'Problemas en la compra de infrastructura', role: "lead" },
  { id: 889, tech_lead: 'Edwin Marin', date: "02/12/2021", desc: 'Error en duracion del contrato', role: "admin" },
  { id: 125, tech_lead: 'Carlos Sarmiento', date: "02/12/2021", desc: 'Inconsistencias financieras', role: "admin" },
  { id: 678, tech_lead: 'Diego Palacios', date: "02/12/2021", desc: 'Reporte negativo de facturacion', role: "admin" },
  { id: 1208, tech_lead: 'Diego Palacios', date: "02/12/2021", desc: 'Apreciacion incorrecta de tiempos', role: "admin" },
  { id: 4087, tech_lead: 'Edwin Marin', date: "02/12/2021", desc: 'Asignacion alta de presupuesto', role: "admin" },
  { id: 9035, tech_lead: 'Bladimir Rodriguez', date: "02/12/2021", desc: 'Problemas internos', role: "admin" },
  { id: 12308, tech_lead: 'Bladimir Rodriguez', date: "02/12/2021", desc: 'Falta HSEQ', role: "admin" },
  { id: 12509, tech_lead: 'Edwin Marin', date: "02/12/2021", desc: 'Nombramiento incorrecto', role: "admin" },
];

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list-sci.component.html',
  styleUrls: ['./request-list-sci.component.scss']
})
export class RequestListSCIComponent implements OnInit {
  displayedColumns: string[] = ['id', 'process_lead_name', 'detected_date', 'request_description', 'options'];
  formFieldHelpers: string[] = [''];
  dataSource = ELEMENT_DATA;
  requests: RequestModel[] = [];
  totalItems: number =  1;
  itemsPerPage: number = 10;
  currentPage: number = 0;
  postPerPage: number = 0;

  constructor(private _service: RequestService, private _formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.updateTable();
  }

  onPaginate(pageEvent: PageEvent) {
    this.postPerPage = +pageEvent.pageSize;
    this.currentPage = +pageEvent.pageIndex + 1;
    this.updateTable();
  }

  updateTable() {
    this._service.getRequests({
      page: this.currentPage,
      per_page: this.postPerPage
    }).subscribe({
      next: (response: any) => {
        this.requests = response.data.map((record: any) => new RequestModel(record))
        this.currentPage = response.current_page
        this.itemsPerPage = parseInt(response.per_page)
        this.totalItems = response.total
        console.log(response)
      },
      error: (e) => {
        console.log(e)
      }
    });
  }

  getFormFieldHelpersAsString(): string {
    return this.formFieldHelpers.join(' ');
  }

}
