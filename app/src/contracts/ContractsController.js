(function(){
  'use strict';

  angular
       .module('contracts')
       .controller('ContractsController', ['$scope', 'contractService',
          ContractsController
       ]);


  function ContractsController( $scope, contractService ) {
    var self = this;

    $scope.main.isViewLoading = false;
    self.displayName     = "Contracting view";
    self.contractNumber = "00934756245";

    self.getContractInfo = function() {
      $scope.main.isViewLoading = true;
      contractService.getInfo(self.contractNumber)
      .then(function(info) {
        $scope.main.isViewLoading = false;
        self.contractInfo = info;
      })
      .catch(function(err) {
        alert(err);
      });
    };
  }

})();
