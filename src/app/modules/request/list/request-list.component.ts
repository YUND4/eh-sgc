import { Component, OnInit } from '@angular/core';
import { String } from 'lodash';

export interface PeriodicElement {
  type: string;
  tech_lead: string;
  date: string;
  desc: string;
  role: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { type: "sgc", tech_lead: 'Diego Palacios', date: "02/12/2021", desc: 'Incumpliento de la ISO 27001', role: "aud" },
  { type: "sgc", tech_lead: 'Bladimir Rodriguez', date: "02/12/2021", desc: 'Problemas en la compra de infrastructura', role: "lead" },
  { type: "sgc", tech_lead: 'Edwin Marin', date: "02/12/2021", desc: 'Error en duracion del contrato', role: "admin" },
  { type: "sgc", tech_lead: 'Carlos Sarmiento', date: "02/12/2021", desc: 'Inconsistencias financieras', role: "admin" },
  { type: "sgc", tech_lead: 'Diego Palacios', date: "02/12/2021", desc: 'Reporte negativo de facturacion', role: "admin" },
  { type: "sci", tech_lead: 'Diego Palacios', date: "02/12/2021", desc: 'Apreciacion incorrecta de tiempos', role: "admin" },
  { type: "sci", tech_lead: 'Edwin Marin', date: "02/12/2021", desc: 'Asignacion alta de presupuesto', role: "admin" },
  { type: "sci", tech_lead: 'Bladimir Rodriguez', date: "02/12/2021", desc: 'Problemas internos', role: "admin" },
  { type: "sci", tech_lead: 'Bladimir Rodriguez', date: "02/12/2021", desc: 'Falta HSEQ', role: "admin" },
  { type: "sci", tech_lead: 'Edwin Marin', date: "02/12/2021", desc: 'Nombramiento incorrecto', role: "admin" },
];

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {
  displayedColumns: string[] = ['type', 'tech_lead', 'date', 'desc', 'options'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
