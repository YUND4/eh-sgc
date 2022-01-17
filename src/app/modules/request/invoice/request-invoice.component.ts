import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector       : 'request-invoice',
    templateUrl    : './request-invoice.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestInvoiceComponent
{

  hidden: boolean = true;
  requestId: number =  0;
  routeSubscriber: Subscription;
    /**
     * Constructor
     */
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
      this.routeSubscriber = this.route.params.subscribe(params => {
        this.requestId = params['id']
      });
    }

    ngOnDestroy() {
      this.routeSubscriber.unsubscribe();
    }

    printPage(): void {
      this.hidden = false
      window.print()
      this.hidden = true
    }
}
