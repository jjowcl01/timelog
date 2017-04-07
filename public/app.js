var app = angular.module('app', ['ngRoute', 'firebase']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      template: '<home timelogs-in-order="$resolve.timelogsInOrder"></home>',
      resolve: {
        timelogsInOrder: function(fbRef, timelogList) {
       
            var query = fbRef.getTimelogsRef().orderByChild("id");
            return timelogList(query).$loaded();
         
        }
      }
    })

    .otherwise('/home')
})

