import angular from 'angular';
import mod from '../date';
import Controller from '../controllers/GreetingController';


export default angular.module('App.date')
  .directive('greeting', function () {


    return {
      templateUrl: 'app/date/templates/greeting.tpl.html',

      controller: Controller,
      controllerAs: 'cn',
      bindToController: true,

      scope: {
        firstName: '@',
        lastName: '@'
      }
    };
  });