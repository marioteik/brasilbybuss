'use strict';

angular.module('brasilByBussApp.search', [])
    .component('search', {
        templateUrl: './public/app/search/search.html',
        controller: function SearchController(ApiService, $scope, $rootScope) {
            var _this = this;
            _this.cities = [];
            _this.btn = 'Carregando';

            ApiService.getCities(function (cities) {
                _this.cities = cities;
                _this.btn = 'Buscar';
            });

            this.getResults = function (city) {
                $rootScope.city = city;
            };
        }
    });