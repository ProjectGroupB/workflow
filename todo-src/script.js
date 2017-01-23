// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = [{item:"Learn Angular", priority:"Moderate"}, {item:"Learn node", priority:"Low"}];
  $scope.newItem = {
        item: "",
        priority: ""
  };

  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem["item"] !== ""){
      $scope.newItem["item"] = document.getElementById("todoInput").value;
      $scope.newItem["priority"] = document.getElementById("priority").value;
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
    }
  }

  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }


});

/*************************
 * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 *
 * *********************/
