(function () {
    'use strict';
        /**
         * @ngdoc module
         * @name groupRoom.Module:trackStateModule
         * 
         * @description
         * This module is application startup Module
        */        
    angular.module('groupRoom.trackStateModule', [])
    
        /**
         * @ngdoc service
         * @name groupRoom.Module:trackState
         * 
         * @description
         * Service to track state of activity ceel
         */
        .service('trackState', function () {
            return {
                stateCounter: 0
            }
        })
})();
