/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
  // {
  //   id: 'dashboard',
  //   title: 'Inicio',
  //   subtitle: 'Bienvenido',
  //   type: 'group',
  //   icon: 'heroicons_outline:home',
  //   children: [
  //     {
  //       id: 'dashboard.common',
  //       title: 'Escritorio',
  //       type: 'basic',
  //       icon: 'heroicons_outline:clipboard-check',
  //       link: '/dashboard/common'
  //     }
  //   ]
  // },
  {
    id: 'menu',
    title: 'Menu',
    subtitle: '',
    type: 'group',
    icon: 'heroicons_outline:home',
    children: [
      {
        id: 'sgc',
        title: 'SGC',
        subtitle: '',
        type: 'collapsable',
        icon: 'mat_outline:data_usage',
        children: [
          {
            id: 'request',
            title: 'Solicitudes',
            subtitle: '',
            type: 'collapsable',
            icon: '',
            children: [
              {
                id: 'request.create',
                title: 'Nuevo',
                type: 'basic',
                icon: 'heroicons_outline:pencil-alt',
                link: '/request/create'
              },
              {
                id: 'request.list',
                title: 'Listar',
                type: 'basic',
                icon: 'heroicons_outline:menu-alt-2',
                link: '/request/list'
              },
              {
                id: 'request.detail',
                title: 'Detalle',
                type: 'basic',
                icon: 'heroicons_outline:newspaper',
                link: '/request/detail'
              },
              {
                id: 'request.trace',
                title: 'Seguimiento',
                type: 'basic',
                icon: 'feather:search',
                link: '/request/trace'
              },
              {
                id: 'request.invoice',
                title: 'Radicado',
                type: 'basic',
                icon: 'heroicons_outline:mail',
                link: '/request/invoice'
              },
            ],
          },
          {
            id: 'report',
            title: 'Reportes',
            subtitle: '',
            type: 'collapsable',
            icon: '',
            children: [
              {
                id: 'report.by_date',
                title: 'Por fecha',
                type: 'basic',
                icon: 'feather:calendar',
                link: '/report/by_date'
              },
            ]
          },
        ],
      },
      {
        id: 'sci',
        title: 'SCI',
        subtitle: '',
        type: 'collapsable',
        icon: 'feather:check',
        children: [
          {
            id: 'request',
            title: 'Solicitudes',
            subtitle: '',
            type: 'collapsable',
            icon: '',
            children:[
              {
                id: 'request.create',
                title: 'Nuevo',
                type: 'basic',
                icon: 'heroicons_outline:pencil-alt',
                link: '/request/create'
              },
              {
                id: 'request.list',
                title: 'Listar',
                type: 'basic',
                icon: 'heroicons_outline:menu-alt-2',
                link: '/request/list'
              },
              {
                id: 'request.detail',
                title: 'Detalle',
                type: 'basic',
                icon: 'heroicons_outline:newspaper',
                link: '/request/detail'
              },
              {
                id: 'request.trace',
                title: 'Seguimiento',
                type: 'basic',
                icon: 'feather:search',
                link: '/request/trace'
              },
              {
                id: 'request.invoice',
                title: 'Radicado',
                type: 'basic',
                icon: 'heroicons_outline:mail',
                link: '/request/invoice'
              },
            ]
          },
          {
            id: 'report',
            title: 'Reportes',
            subtitle: '',
            type: 'collapsable',
            icon: '',
            children:[
              {
                id: 'report.by_date',
                title: 'Por fecha',
                type: 'basic',
                icon: 'feather:calendar',
                link: '/report/by_date'
              },
            ]
          },
        ]
      },
    ]
  },
];

export const compactNavigation: FuseNavigationItem[] = [
  {
    id: 'example',
    title: 'Example',
    type: 'basic',
    icon: 'heroicons_outline:chart-pie',
    link: '/example'
  }
];
export const futuristicNavigation: FuseNavigationItem[] = [
  {
    id: 'example',
    title: 'Example',
    type: 'basic',
    icon: 'heroicons_outline:chart-pie',
    link: '/example'
  }
];
export const horizontalNavigation: FuseNavigationItem[] = [
  {
    id: 'example',
    title: 'Example',
    type: 'basic',
    icon: 'heroicons_outline:chart-pie',
    link: '/example'
  }
];
