var formController = angular.module("formModule", [])

formController.controller("FormController", [ "$scope", function($scope){
  
  $scope.errors = {}

  $scope.activateButton = function() {

    $scope.errors = {}

    if (!$scope.name) {
      $scope.errors.name = "error"
      
    }

    if (!$scope.email) {
      $scope.errors.email = "error"
    }
    if (!$scope.website) {
      $scope.errors.website = "error"
    }
    if (!$scope.messages) {
      $scope.errors.messages = "error"
    }

  };

  
}])