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
      $scope.edits.push(false);
      $scope.newItem = "";
    }
  }

  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
    $scope.edits.splice(index, 1);
  }

  $scope.editItem = function(item){
    console.log("in edit");
    var index = $scope.todos.indexOf(item);
    var isEditingElsewhere = false;
    for (i = 0; i < $scope.editing.length; i++){
      if (i !== index && $scope.editing[i] == true){
        isEditingElsewhere = true;
      }
    }
    //if editing is true somewhere other than index, do nothing, user should only be able to edit 1 item at a time
    //this doesn't stop the text / edit text field from hiding and showing, but it stops the function from breaking
    //This could be improved, but is basically functional
    if (!isEditingElsewhere){
        if ($scope.editing[index]){
            $scope.todos[index] = $scope.editTextBox;
        } else {
            $scope.editTextBox = $scope.todos[index];
        }
        $scope.editing[index] = !$scope.editing[index];
    }
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
