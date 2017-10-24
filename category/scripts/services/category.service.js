
angular.module('pmt.servicesC',[]).factory('Category',function($resource){
    return $resource('http://127.0.0.1:18080/PMT-web/rest/category/:id',{id:'@_id'}, {
  update: {
            method: 'PUT'
        }
});
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});