export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: any;
  title?: boolean;
  children?: any;
  variant?: string;
  attributes?: object;
  divider?: boolean;
  class?: string;
}

export const menuItems: NavData[] = [
  {
    name: 'ISP System',
    url: '/home',
    icon: 'icon-notebook'
  },
  {
    title: true,
    name: 'Participante'
  },
  {
    name: 'Atualizar Perfil',
    url: '/atualizar-perfil',
    icon: 'icon-user'
  },
  {
    name: 'Consultar Carteiras',
    url: '/carteiras',
    icon: 'fa fa-pie-chart'
  },
  {
    name: 'Solicitações',
    url: '/solicitacoes',
    icon: 'fa fa-comments'
  },
  {
    name: 'Rentabilidade',
    url: '/rentabilidade',
    icon: 'fa fa-bar-chart'
  }
];
