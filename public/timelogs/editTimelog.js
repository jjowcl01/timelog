angular.module('app').component('editTimelog', {
  templateUrl: '/timelogs/editTimelog.html',
  bindings: {
    createNewTimelog: '&',
    editedTimelog: '=',
    updateTimelog: '&'
  },
  controller: function($scope) {
    
    $scope.$watch('$ctrl.editedTimelog', (function(newData) {
      if(!!newData) {
        this.editing = true;
        this.id = newData.id;
                this.name = newData.name;
        this.project = newData.project;
        var date = new Date(newData.date);
                this.date = date.toLocaleDateString();

        var time = new Date(newData.time);
                        this.time = time.toLocaleTimeString();
      }
    }).bind(this))
    
    this.save = function() {
      this.editedTimelog.id = this.id;
      this.editedTimelog.project = this.project;
      this.editedTimelog.name = this.name;
      this.editedTimelog.date = new Date(this.date).toJSON();
        this.editedTimelog.time = new Date(this.time).toJSON();
      this.updateTimelog();
      this.setDefaults();
      this.editing = false;
      this.editedTimelog = null;
    }
    
    this.cancel = function() {
      this.setDefaults();
      this.editing = false;
      this.editedTimelog = null;
    }
    
    this.setDefaults = function() {
      this.id = '';
      this.project = '';
      this.name = '';
    this.date = new Date();
      this.time = new Date(1970, 0, 1, 0, 0, 0);
    }
    this.setDefaults();
    
    this.create = function() {
      this.timelogData = {
        id: this.id,
        project: this.project,
        name: this.name,
        date: new Date(this.date).toJSON(),
        time: new Date(this.time).toJSON()
      }
      alert("Are you sure you want to add this timelog?");
      this.setDefaults();
      this.createNewTimelog({timelogData: this.timelogData})
    }
  }
})