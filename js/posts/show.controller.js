"use strict";

  (function(){
    angular
    .module("posts")
    .controller("PostShowController", [
      "PostFactory",
      "$stateParams",
      PostShowControllerFunction
    ]);

    function PostShowControllerFunction(PostFactory, $stateParams){
      var vm = this;
      vm.post = PostFactory.get({id: $stateParams.id});
    }
  }());
