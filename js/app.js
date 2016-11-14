"use strict";

(function(){
  angular.module("bsap", [
    "ui.router",
    "posts"
  ])
  .config([
  "$stateProvider",
  RouterFunction
  ]);


  function RouterFunction($stateProvider){
    $stateProvider
    .state("postIndex", {
      url: "/posts",
      templateUrl: "js/posts/index.html",
      controller: "PostIndexController",
      controllerAs: "PostIndexViewModel"
    });
  }


}());
