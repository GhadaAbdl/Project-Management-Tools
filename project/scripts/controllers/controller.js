angular.module('pmt.controllers',[]).controller('ProjectListController',function($scope,$state,popupService,$window,Project){

     $scope.categories=Project.getCategories();
    
     

    
    
  $scope.projects=Project.query();
    $scope.project=new Project();
    $scope.projectIndex=-1;
    
    $scope.selectProject=function(project,index){
        $scope.projectIndex=index;
        console.log(project);
        $scope.project=project;
    }
    $scope.deleteProject=function(project){
        if(popupService.showPopup('Really delete this?')){
            project.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('ProjectViewController',function($scope,$stateParams,Project,popupService,$window){

    $scope.project=Project.get({id:$stateParams.id});
        $scope.deleteProject=function(project){
        if(popupService.showPopup('Really delete this?')){
            project.$delete(function(){
                $window.location.href='';
            });
        }
    }

     

}).controller('ProjectCreateController',function($scope,$state,$stateParams,Project){

    $scope.teams=Project.getTeams();
    
         $scope.clients=Project.getClients();
  $scope.categories=Project.getCategories();
   
    $scope.project=new Project();

    $scope.addProject=function(){
        $scope.project.$save(function(){
            $state.go('projects');
        });
    }

}).controller('ProjectEditController',function($scope,$state,$stateParams,Project){

      $scope.teams=Project.getTeams();
    
         $scope.clients=Project.getClients();
  $scope.categories=Project.getCategories();
   
    
    $scope.updateProject=function(){
        $scope.project.$update(function(){
            $state.go('projects');
        });
    };
 
    $scope.loadProject=function(){
        $scope.project=Project.get({id:$stateParams.id});
    };

    $scope.loadProject();
});