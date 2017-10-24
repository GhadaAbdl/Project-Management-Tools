angular.module('pmt.services',[]).factory('Project',function($resource){
    return $resource('http://127.0.0.1:18080/PMT-web/rest/project/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        },
        'getCategories':{
            isArray:true,
            method:"GET",
            params:{id:'categories'}
        },
        'getClients':{
            isArray:true,
            method:"GET",
            params:{id:'clients'}
        },
        'getTeams':{
            isArray:true,
            method:"GET",
            params:{id:'teams'}
        }
    
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});