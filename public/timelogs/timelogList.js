angular.module('app').factory('timelogList', function($firebaseArray) {
  var TimelogList = $firebaseArray.$extend({

  });
  
  return function(ref) {
    return new TimelogList(ref);
  }
})