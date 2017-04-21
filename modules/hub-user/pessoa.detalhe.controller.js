'use strict';

angular.module('archetype.pessoa').controller('PessoaDetalheController',
		['$scope', 'api', '$routeParams', '$location', 'bottomAlert', 'dialog',
		 	function($scope, api, $routeParams, $location, bottomAlert, dialog) {

	$scope.voltar = function(){
		$location.path("/listar");
	};
			
	//mensagens de erro
    $scope.showMensagem = false;
    $scope.mensagem = { titulo: "Atenção", texto: "Preencha corretamente os campos abaixo" };
			
    var id = $routeParams.id;
    
    if(id != null && id > 0){
    	api.pessoa.getById(id)
    	.success(function(data){
    		console.log(data.cpf);
    		$scope.pessoa = data;            
		})
		.error(function(response, status, header, config){ 
			dialog.error(response);
		})
		;
    }
    
    
    //metodo que salva a pessoa somente se o formulario estiver valido
    $scope.submitForm = function(){
	    if ($scope.form.$valid) {
	        $scope.savePessoa();
	        $scope.showMensagem = false; 
	    }
	    else{
	        $scope.showMensagem = true;   
	    }
    };
    
    $scope.pessoa = {};
    
    //metodo que envia a pessoa para o serviço
    $scope.savePessoa = function() {
    	if($scope.pessoa.id > 0){
    		api.pessoa.update($scope.pessoa)
        	.success(function(data){
        		dialog.message("Sucesso!", "Pessoa alterada com sucesso!");
				$location.path('/listar');              
			})
			.error(function(response, status, header, config){ 
				dialog.error(response);
			})
			;
    	}
    	else{
	        api.pessoa.insert($scope.pessoa)
	        	.success(function(data){
	        		dialog.message("Sucesso!", "Pessoa cadastrada com sucesso!");  
					$location.path('/listar');            
				})
				.error(function(response, status, header, config){ 
					dialog.error(response);
				})
				;
    	}
    };
    
    $scope.updatePessoa = function(id) {
    	
	    	api.pessoa.getById(id)
	    	.success(function(data){
	    		$scope.pessoa = data;            
			})
			.error(function(response, status, header, config){ 
				dialog.error(response);
			})
			;
    };

	//$scope.listaPessoa();
	
                     
}]);
		