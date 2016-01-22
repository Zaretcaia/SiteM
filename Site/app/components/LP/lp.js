(function () {
    'use strict';

    angular.module('app').controller('LPCtrl', function ($scope, $modal) {
        $scope.openLogin = function() {
            $modal.open({
                templateUrl: 'app/components/LP/login.html ',
                size: 'sm',
                windowClass: 'full',
                controller: function ($scope, $modalInstance) {
                    $scope.closeForm = function () {
                        $modalInstance.dismiss();
                    };
                }
            });
        };
        $scope.openReg = function () {
            $modal.open({
                templateUrl: 'app/components/LP/registr.html ',
                size: 'sm',
                windowClass: 'full',
                controller: function ($scope, $modalInstance) {
                    $scope.closeForm = function () {
                        $modalInstance.dismiss();
                    };
                }
            });
        };
    });
})();
