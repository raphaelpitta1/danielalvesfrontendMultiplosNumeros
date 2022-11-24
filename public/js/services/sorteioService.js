angular.module('Sorteio').factory('sorteioService', function ($http){
        var resultado = function(){
         return $http.get(
          'http://localhost:8080/process_payment/resultado'
         
        );
      };

      return{ 
          resultado : resultado

      }
});