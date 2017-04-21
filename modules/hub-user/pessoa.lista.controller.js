
angular.module('archetype.pessoa').controller('PessoaListaController',
		['$scope', 'api', '$routeParams', '$location', 'bottomAlert', 'dialog',  
		 	function($scope, api, $routeParams, $location, bottomAlert, dialog) {
	
			$scope.seletor = {};
			
			$scope.listaPessoa = function(){                	
				api.pessoa.getByFilter($scope.seletor)
				.success(function(data){
					$scope.lista = data; 
				})
				.error(function(response, status, header, config){ 
					dialog.error(response);
				})
				;
			};	
			$scope.deletePessoa = function(id) {
		        api.pessoa.deleteById(id)
		        	.success(function(data){
		        		dialog.message("Sucesso!", "Pessoa removida com sucesso!"); 
		    			$scope.listaPessoa();             
					})
					.error(function(response, status, header, config){ 
						dialog.error(response);
					})
					;
		    };
		    
		    $scope.updatePessoa = function(id) {
					$location.path('/pessoa/' + id); 
		    };

			$scope.listaPessoa();	
}]);