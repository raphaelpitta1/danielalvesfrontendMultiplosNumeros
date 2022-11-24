angular
  .module("Sorteio", ["ngRoute", "ngSanitize", "pascalprecht.translate"])
  .config(function ($routeProvider, $translateProvider) {
    //  $locationProvider.html5Mode(true);
   
    $routeProvider.when("/sorteio", {
      templateUrl: "./view/home.html",
      controller: "PagamentoController",
    });
    
    $routeProvider.when("/pagamento", {
      templateUrl: "./view/Pagamento.html",
      controller: "PagamentoController",
    });
    
  });
