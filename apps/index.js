(function () {
    'use strict';
        /**
         * @ngdoc module
         * @name groupRoom.Module:groupRoom
         * 
         * @description
         * This module is application startup Module
        */        
    
    var groupRoom = angular.module('groupRoom', [
        'grouproom.acitivity',
        'groupRoom.trackStateModule'
        ])
        /**
         * @ngdoc controller
         * @name groupRoom.controller:indexController
         * 
         * @description
         * This Controller is use as startup function.Which is use to invoke the application on startup
        */        
        .controller('indexController', function () {
            
        });
})();