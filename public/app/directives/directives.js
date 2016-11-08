angular.module('brasilByBussApp.directives', [])
    .directive('autocomplete', ['$timeout', '$rootScope', function ($timeout, $rootScope) {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                var input = $(elem);
                input.select2({theme: "bootstrap"});
            }
        };
    }])