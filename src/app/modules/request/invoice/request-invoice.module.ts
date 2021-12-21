import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { RequestInvoiceComponent } from './request-invoice.component';
import { routes } from './request-invoice.routing';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    RequestInvoiceComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CdkScrollableModule,
    MatButtonModule
  ]
})
export class RequestInvoiceModule {
}
