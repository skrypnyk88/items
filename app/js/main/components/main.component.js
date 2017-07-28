module.exports = angular
  .module('school_area.main.component',[])
  .component('mainComponent', {
    templateUrl: './app/js/main/components/main.template.html',
    controller: MainController
  });

function MainController() {
  console.log("hello 1")
  var ctrl = this;
};
