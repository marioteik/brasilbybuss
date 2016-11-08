'use strict';

angular.module('brasilByBussApp.services', [])
    .service('ApiService', function ($http) {
        this.url = '/busca';

        this.getCities = function (cb) {
            var _this = this;

            $http({
                method: 'GET',
                url: _this.url
            }).then(function(response) {
                cb(response.data);
            }, function(err) {
                return cb(err);
            });
        };
    });

