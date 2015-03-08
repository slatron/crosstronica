function drawTool(drawStateFactory, palleteFactory) {

  return {
    scope: {},

    restrict: 'E',
    replace: true,

    templateUrl: '/js/angular_app/directives/panels/draw_tool/drawTool.html',

    controllerAs: 'drawtoolVM',
    bindToController: true,

    controller: function () {
      var vm = this;

      vm.drawState = drawStateFactory.get();

      vm.enableDrawMode = function(mode) {
        drawStateFactory.setMode(mode);
      };

      vm.borderMode = function(mode) {
        drawStateFactory.setBorderMode(mode);
      };

      vm.deleteColor = function() {
        if (confirm('Are you sure you want to to delete ' + drawStateFactory.get().paint.selected.name + '?')) {
          var id = drawStateFactory.get().paint.selected._id;
          palleteFactory.deleteColor(id).then(
            function(success) {
              console.log('Successful color deletion: ', success);
              drawStateFactory.selected();
            },
            function(error) {
              console.error(error);
            }
          );
        }
      };

    }
  };

}

angular.module('Crosstronica').
directive('drawTool', drawTool);
