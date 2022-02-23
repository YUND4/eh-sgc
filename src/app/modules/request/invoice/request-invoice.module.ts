import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { RequestInvoiceComponent } from './request-invoice.component';
import { routes } from './request-invoice.routing';
import { MatButtonModule } from '@angular/material/button';
import { RequestService } from 'app/shared/services/request.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseInterceptor } from 'app/shared/base/base.interceptor';

@NgModule({
  declarations: [
    RequestInvoiceComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CdkScrollableModule,
    MatButtonModule
  ],
  providers: [
    RequestService,
    { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true }
  ]
})
export class RequestInvoiceModule {
}
