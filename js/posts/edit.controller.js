"use strict";

  (function(){
    angular
    .module("posts")
    .controller("PostEditController", [
      "PostFactory",
      "$stateParams",
      "$state",
      PostEditControllerFunction
    ]);

    function PostEditControllerFunction(PostFactory, $stateParams, $state){
      var vm = this;
      vm.post = PostFactory.get({id: $stateParams.id});
      vm.update = function(){
        vm.post.$update({id: $stateParams.id}).then(function(){
          alert("You've successfully updated this post!")
          $state.go("postIndex")
        });
      }

      var vm = this;
      vm.destroy = function(){
        vm.post.$delete({id: $stateParams.id}).then(function(){
          alert("You've removed this post")
          $state.go("postIndex")
        })
      }
    }
    
  }());
