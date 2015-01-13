import angular from 'angular';
import mod from '../backend';
import Controller from '../controllers/RandomJokeController';

export default angular.module('App.backend')
  .directive('randomJoke', function () {

    var link = function() {

    };


    return {
      templateUrl: 'app/backend/templates/randomJoke.tpl.html',

      controller: Controller,
      controllerAs: 'cn',
      bindToController: true,
      link: link,

      scope: {}
    };
  });