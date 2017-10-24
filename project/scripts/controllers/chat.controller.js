angular.module('pmt.controllersChat',[]).controller('ChatController',function($scope,$state,$stateParams,Project,$firebase){

 var ref = new Firebase("https://alpha-db.firebaseio.com/");
  
  $scope.messages = $firebase(ref);
  
  $scope.addMessage = function(e) {
          if (e.keyCode != 13) return;
          $scope.messages.$add({from: $scope.name, body: $scope.msg});
          $scope.msg = "";
}});