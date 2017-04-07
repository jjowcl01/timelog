angular.module('app').factory('fbRef', function(rootRef) {
  return {

    getTimelogsRef: function() {
      return rootRef.child('timelogs');
    }
  }
})