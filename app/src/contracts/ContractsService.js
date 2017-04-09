(function(){
  'use strict';

  angular.module('contracts')
         .service('contractService', ['$q', '$timeout', ContractService]);

  /**
   * Contract DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   */
  function ContractService($q, $timeout){
    var contracts = {
      "00934756245" : {
        "name": "Assurance vie",
        "subscriber": "Benjamin Mercier",
        "entity": "Mon assurance"
      }
    };

    // Promise-based API
    return {
      getInfo : function(contractNumber) {
        // Simulate async nature of real remote calls
        var result = $q.defer();

        $timeout(function() {
            result.resolve(contracts[contractNumber]);
        }, 2000);

        return result.promise;
      }
    };
  }

})();
