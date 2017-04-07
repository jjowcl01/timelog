
angular.module('app').component('timelogListDisplay', {
  bindings: {
    timelogs: '=timelogData',
    selectTimelog: '&'
  },
  templateUrl: '/timelogs/timelogListDisplay.html',
  controller: function() {
    this.deleteTimelog = function(timelog) {
      alert("Are you sure you want to delete this timelog?");
      this.timelogs.$remove(timelog);
    }
    
    this.clickEdit = function(timelog) {
      this.selectTimelog({timelog: timelog})
    }
  }
})