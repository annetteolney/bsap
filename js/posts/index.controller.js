"use strict";

(function(){
  angular
  .module("posts")
  .controller("PostIndexController", [
    "PostFactory",
    PostIndexControllerFunction
  ]);

  function PostIndexControllerFunction(PostFactory){
    var vm = this;
    vm.posts = PostFactory.query();
  }
}());
