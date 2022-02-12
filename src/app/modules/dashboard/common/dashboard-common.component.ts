import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApexOptions } from 'ng-apexcharts';
import { DashboardCommonService } from './dashboard-common.service';
import { UserService } from 'app/core/user/user.service';
import { User } from 'app/core/user/user.types';

@Component({
  selector: 'dashboard-common',
  templateUrl: './dashboard-common.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardCommonComponent implements OnInit, OnDestroy {
  chartGithubIssues: ApexOptions = {};
  chartTaskDistribution: ApexOptions = {};
  chartBudgetDistribution: ApexOptions = {};
  chartWeeklyExpenses: ApexOptions = {};
  chartMonthlyExpenses: ApexOptions = {};
  chartYearlyExpenses: ApexOptions = {};
  data: any;
  selectedProject: string = 'ACME Corp. Backend App';
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  user: User;

  /**
   * Constructor
   */
  constructor(
    private _dashboardCommonService: DashboardCommonService,
    private _userService: UserService,
    private _router: Router,
    private _cdr: ChangeDetectorRef
  ) {
    this._userService.get().subscribe({
      next: (v) => {
        this.user = v['data']
        _cdr.detectChanges()
      }
    })
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Get the data
    this.data = {
      overview: {
          'this-week': {
            'sgc-open'    : 214,
            'sgc-r-close' : 75,
            'sgc-close'   : 3,
            'sci-open'    : 214,
            'sci-r-close' : 75,
            'sci-close'   : 3,
          },
          'last-week': {
            'sgc-open'    : 214,
            'sgc-r-close' : 75,
            'sgc-close'   : 3,
            'sci-open'    : 214,
            'sci-r-close' : 75,
            'sci-close'   : 3,
          }
        },
        labels  : ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        series  : {
        'this-week': [
            {
              name: 'Nuevas solicitudes',
              type: 'area',
              data: [0, 1, 0, 2, 1, 3, 4]
            }
          ],
          'last-week': [
            {
              name: 'Nuevas solicitudes',
              type: 'area',
              data: [3, 4, 4, 5, 7, 6, 0]
            }
          ]
        }
    }
    this._prepareChartData()

    // Attach SVG fill fixer to all ApexCharts
    window['Apex'] = {
      chart: {
        events: {
          mounted: (chart: any, options?: any): void => {
            this._fixSvgFill(chart.el);
          },
          updated: (chart: any, options?: any): void => {
            this._fixSvgFill(chart.el);
          }
        }
      }
    };
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Fix the SVG fill references. This fix must be applied to all ApexCharts
   * charts in order to fix 'black color on gradient fills on certain browsers'
   * issue caused by the '<base>' tag.
   *
   * Fix based on https://gist.github.com/Kamshak/c84cdc175209d1a30f711abd6a81d472
   *
   * @param element
   * @private
   */
  private _fixSvgFill(element: Element): void {
    // Current URL
    const currentURL = this._router.url;

    // 1. Find all elements with 'fill' attribute within the element
    // 2. Filter out the ones that doesn't have cross reference so we only left with the ones that use the 'url(#id)' syntax
    // 3. Insert the 'currentURL' at the front of the 'fill' attribute value
    Array.from(element.querySelectorAll('*[fill]'))
      .filter(el => el.getAttribute('fill').indexOf('url(') !== -1)
      .forEach((el) => {
        const attrVal = el.getAttribute('fill');
        el.setAttribute('fill', `url(${currentURL}${attrVal.slice(attrVal.indexOf('#'))}`);
      });
  }

  /**
   * Prepare the chart data from the data
   *
   * @private
   */
  private _prepareChartData(): void {
    // Github issues
    this.chartGithubIssues = {
      chart: {
        fontFamily: 'inherit',
        foreColor: 'inherit',
        height: '100%',
        type: 'area',
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      // colors: ['#64748B', '#94A3B8'],
      dataLabels: {
        enabled: true,
        enabledOnSeries: [0],
        background: {
          borderWidth: 0
        }
      },
      grid: {
        borderColor: 'var(--fuse-border)'
      },
      labels: this.data.labels,
      legend: {
        show: false
      },
      plotOptions: {
        bar: {
          columnWidth: '50%'
        }
      },
      series: this.data.series,
      states: {
        hover: {
          filter: {
            type: 'darken',
            value: 0.75
          }
        }
      },
      stroke: {
        width: [3, 0]
      },
      tooltip: {
        followCursor: true,
        theme: 'dark'
      },
      xaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          color: 'var(--fuse-border)'
        },
        labels: {
          style: {
            colors: 'var(--fuse-text-secondary)'
          }
        },
        tooltip: {
          enabled: false
        }
      },
      yaxis: {
        labels: {
          offsetX: -16,
          style: {
            colors: 'var(--fuse-text-secondary)'
          }
        }
      }
    };
  }
}
