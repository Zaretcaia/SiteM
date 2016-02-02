(function() {
    'use strict';

    angular.module('app').controller('LKCtrl', function ($scope, $timeout) {
        $scope.clock = "loading clock..."; // initialise the time variable
        $scope.tickInterval = 1000;//ms
        $scope.cropper = {};
        $scope.cropper.sourceImage = null;
        $scope.cropper.croppedImage = null;
        $scope.bounds = {};
        $scope.bounds.left = 0;
        $scope.bounds.right = 0;
        $scope.bounds.top = 0;
        $scope.bounds.bottom = 0;

        var tick = function () {
            $scope.clock = Date.now();// get the current time
            $timeout(tick, $scope.tickInterval); // reset the timer
        }

        // Start the timer
        $timeout(tick, $scope.tickInterval);
    });
})();