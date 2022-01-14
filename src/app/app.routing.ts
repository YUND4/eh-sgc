import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

  // Redirect empty path to '/request/list'
  { path: '', pathMatch: 'full', redirectTo: 'request/list/sgc' },

  // Redirect signed in user to the '/request/list'
  //
  // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
  // path. Below is another redirection for that path to redirect the user to the desired
  // location. This is a small convenience to keep all main routes together here on this file.
  { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'request/list/sgc' },

  // Auth routes for guests
  {
    path: '',
    canActivate: [NoAuthGuard],
    canActivateChild: [NoAuthGuard],
    component: LayoutComponent,
    data: {
      layout: 'empty'
    },
    children: [
      { path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule) },
      { path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule) },
      { path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule) },
      { path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule) },
      { path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule) }
    ]
  },

  // Auth routes for authenticated users
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: LayoutComponent,
    data: {
      layout: 'empty'
    },
    children: [
      { path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule) },
      { path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule) }
    ]
  },

  // Landing routes
  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: 'empty'
    },
    children: [
      { path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule) },
    ]
  },

  // Admin routes
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: LayoutComponent,
    resolve: {
      initialData: InitialDataResolver,
    },
    children: [
      {
        path: 'dashboard', children: [
          { path: 'common', loadChildren: () => import('app/modules/dashboard/common/dashboard-common.module').then(m => m.DashboardCommonModule) },
        ]
      },
      {
        path: 'request', children: [
          { path: 'create/sci', loadChildren: () => import('app/modules/request/create/sci/request-create-sci.module').then(m => m.RequestCreateSCIModule) },
          { path: 'create/sgc', loadChildren: () => import('app/modules/request/create/sgc/request-create-sgc.module').then(m => m.RequestCreateSGCModule) },
          { path: 'list/sgc', loadChildren: () => import('app/modules/request/list/sgc/request-list-sgc.module').then(m => m.RequestListSGCModule) },
          { path: 'list/sci', loadChildren: () => import('app/modules/request/list/sci/request-list-sci.module').then(m => m.RequestListSCIModule) },
          { path: 'detail', loadChildren: () => import('app/modules/request/detail/request-detail.module').then(m => m.RequestDetailModule) },
          { path: 'trace/sgc', loadChildren: () => import('app/modules/request/trace/sgc/request-trace-sgc.module').then(m => m.RequestTraceSGCModule) },
          { path: 'trace/sci', loadChildren: () => import('app/modules/request/trace/sci/request-trace-sci.module').then(m => m.RequestTraceSCIModule) },
          { path: 'invoice', loadChildren: () => import('app/modules/request/invoice/request-invoice.module').then(m => m.RequestInvoiceModule) },
        ],
      },
      {
        path: 'report', children: [
          { path: 'by_date', loadChildren: () => import('app/modules/report/by-date/report-by-date.module').then(m => m.ReportByDateModule) },
        ],
      },
    ],
  }
];
