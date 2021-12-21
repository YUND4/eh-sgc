import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'request-invoice',
    templateUrl    : './request-invoice.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestInvoiceComponent
{

  hidden: boolean = true;
    /**
     * Constructor
     */
    constructor()
    {
    }

    printPage(): void {
      this.hidden = false
      window.print()
      this.hidden = true
    }
}
