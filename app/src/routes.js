routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

    $stateProvider.state({
        name: 'home',
        url: '/',
        component: 'app'
    });

    $stateProvider.state({
        name: 'login',
        url: '/login',
        component: 'login'
    });


    $urlRouterProvider.otherwise('/');
}