/* eslint-disable */
import * as moment from 'moment';

export const activities = [
  {
    id: '493190c9-5b61-4912-afe5-78c21f1044d7',
    icon: 'heroicons_outline:information-circle',
    description: '<strong>Auditor 1</strong> creo una solicitud para <strong>Diego Palacios</strong>',
    date: moment().subtract(4, 'days').toISOString(), // 25 minutes ago
    extraContent: `<div class="font-bold">Error en la seguridad</div><br>
                        <div>No se cumple la norma ISO 27001</div>`
  },
  {
    id: '6e3e97e5-effc-4fb7-b730-52a151f0b641',
    image: 'assets/images/avatars/male-04.jpg',
    description: '<strong>Diego Palacios</strong> reviso la solicitud',
    date: moment().subtract(4, 'days').toISOString(), // 50 minutes ago
    useRouter: true
  },
  {
    id: 'b91ccb58-b06c-413b-b389-87010e03a120',
    icon: 'heroicons_outline:cube-transparent',
    description: '<strong>Diego Palacios</strong> completo el analisis de causas',
    date: moment().subtract(4, 'day').toISOString(), // 3 hours ago
    useRouter: true
  },
  {
    id: '541416c9-84a7-408a-8d74-27a43c38d797',
    icon: 'heroicons_outline:cube',
    description: '<strong>Diego Palacios</strong> completo el plan de mejoramiento',
    date: moment().subtract(2, 'day').toISOString(), // 5 hours ago
    useRouter: true
  },
  {
    id: 'fd0f01b4-f3de-4333-add5-cd86850279f8',
    image: 'assets/images/avatars/female-02.jpg',
    description: '<strong>Leidy Bernate</strong> reviso el seguimiento',
    date: moment().subtract(2, 'day').toISOString(), // 1 day ago,
    useRouter: true
  },
  {
    id: '8f8e1bf9-4661-4939-9e43-390957b60f42',
    image: 'assets/images/avatars/female-02.jpg',
    description: '<strong>Leidy Bernate</strong> indico que el plan de mejoramiento esta incompleto',
    date: moment().subtract(1, 'days').toISOString(), // 3 days ago
    extraContent: `<div class="font-bold">Informacion incompleta</div><br>
                        <div>La politica de seguridad no cumple los requisitos minimos</div>`
  },
  {
    id: '30af917b-7a6a-45d1-822f-9e7ad7f8bf69',
    image: 'assets/images/avatars/male-04.jpg',
    description: '<strong>Diego Palacios</strong> actualizo el plan de mejoramiento',
    date: moment().subtract(24, 'hours').toISOString() // 4 days ago
  },
  {
    id: '8f8e1bf9-4661-4939-9e43-390957b60f47',
    image: 'assets/images/avatars/female-02.jpg',
    description: '<strong>Leidy Bernate</strong> acepto el plan de mejoramiento',
    date: moment().subtract(50, 'minutes').toISOString() // 3 days ago
  },
  {
    id: '8f8e1bf9-4661-4939-9e43-390957b60f43',
    icon: 'heroicons_solid:star',
    description: '<strong>Leidy Bernate</strong> cerro la solicitud',
    date: moment().subtract(25, 'minutes').toISOString() // 3 days ago
  },
];
