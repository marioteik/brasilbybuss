'use strict';

angular.module('brasilByBussApp.results', [])
    .component('results', {
        templateUrl: './public/app/results/results.html',
        controller: function ResultsController($rootScope) {
            this.city = {};
            var _this = this;

            $rootScope.$watch('city', function (newval) {
                if(newval)
                    _this.city = newval;
            });
        }
    });