(function(){

  angular
       .module('contracts')
       .controller('ContractsController', ['$scope',
          ContractsController
       ]);


  function ContractsController( $scope) {
    var self = this;

    $scope.main.isViewLoading = false;
    self.displayName     = "Contracting view";
    self.contractNumber = "00934756245";
  }

})();
