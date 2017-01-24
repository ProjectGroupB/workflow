// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = [{item:"Learn Angular", priority:"Moderate", editing:false, completed:false}, {item:"Learn node", priority:"Low", editing:false, completed:false}];
  $scope.newItem = {
        item: "",
        priority: "",
        editing: false,
        completed: false
  };
  $scope.number = $scope.todos.length;
  $scope.noCompleted = 0;
  $scope.editTextBox = "";

  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem["item"] !== ""){
      $scope.newItem["item"] = document.getElementById("todoInput").value;
      $scope.newItem["priority"] = document.getElementById("priority").value;
      $scope.newItem["editing"] = false;
      $scope.newItem["completed"] = false;
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
    }
    $scope.number++;
  }

  $scope.checkedOff = function(item){
        var index = $scope.todos.indexOf(item);

        if(!$scope.todos[index].completed){
             $scope.todos[index].completed = true;
              $scope.noCompleted++;
              $scope.number--;
        }
 }

  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
    $scope.number = $scope.todos.length;
  }

  $scope.editItem = function(item){
    console.log("in edit");
    var index = $scope.todos.indexOf(item);
    var isEditingElsewhere = false;
    for (i = 0; i < $scope.todos.length; i++){
      if ((i !== index && $scope.todos[i].editing == true) && !$scope.todos[i].completed){
        isEditingElsewhere = true;
      }
    }
    //if editing is true somewhere other than index, do nothing, user should only be able to edit 1 item at a time
    //this doesn't stop the text / edit text field from hiding and showing, but it stops the function from breaking
    //This could be improved, but is basically functional
    if (!isEditingElsewhere){
        if ($scope.todos[index].editing){
            $scope.todos[index].item = $scope.editTextBox;
        } else {
            $scope.editTextBox = $scope.todos[index].item;
        }
        $scope.todos[index].editing = !$scope.todos[index].editing;
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
