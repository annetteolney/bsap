"use strict";

(function(){
  angular
  .module("posts")
  .controller("PostNewController", [
    "PostFactory",
    "$state",
    PostNewControllerFunction
  ]);

  function PostNewControllerFunction(PostFactory, $state){
    var vm = this;
    vm.post = new PostFactory();
    vm.create = function(){
      vm.post.$save();
      alert("You have successfully posted something new!")
      $state.go("postIndex")
    }
  }

}());
