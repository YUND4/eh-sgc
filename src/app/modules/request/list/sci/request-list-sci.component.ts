import { Component, OnInit } from '@angular/core';
import { String } from 'lodash';

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
  displayedColumns: string[] = ['id', 'tech_lead', 'date', 'desc', 'options'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
