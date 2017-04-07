angular.module('app').component('home', {
  templateUrl: '/home/home.html',
  bindings: {
    timelogsInOrder: '='
  },
  controller: function() {
    
    this.createTimelog = function(timelogData) {
      this.timelogsInOrder.$add(timelogData);
    }
    
    this.editTimelog = function(timelog) {
      this.editedTimelog = timelog;
    }
    
    this.updateTimelog = function() {
      this.timelogsInOrder.$save(this.editedTimelog);
    }
  }
})