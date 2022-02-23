import { formatDate } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, LOCALE_ID, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SGC } from 'app/shared/constants/request-types.constants';
import { RequestService } from 'app/shared/services/request.service';

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
  request: any;
    /**
     * Constructor
     */
    constructor(
      private route: ActivatedRoute,
      private _service: RequestService,
      @Inject(LOCALE_ID) public locale: string,
      private _cdr: ChangeDetectorRef
      ) {
      this.route.params.subscribe(params => {
        this.requestId = params['id']
        this._service.findRequest(this.requestId, SGC).subscribe({
          next: (v) => {
            if (v['data'].length == 1) {
              this.request = v['data'][0]
              this._cdr.detectChanges()
            }
            console.log(this.request)
          }
        })
      });

    }

    formatDate(date: string) {
      return formatDate(date, 'MMM d, y', this.locale)
    }

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      
    }

    printPage(): void {
      this.hidden = false
      window.print()
      this.hidden = true
    }
}
