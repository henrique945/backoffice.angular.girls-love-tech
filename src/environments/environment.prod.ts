export const environment = {
  production: true,
  app_name: 'Girls Love Tech',
  icon_name: '/assets/img/logo.png',
  api_endpoint: 'https://api-girlslovetech.herokuapp.com',
  config: {
    redirectToWhenAuthenticated: '/dashboard/user',
    redirectToWhenUnauthenticated: '/login',
  },
};
