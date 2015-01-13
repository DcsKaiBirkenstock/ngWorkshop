import angular from 'angular';
import mod from '../date';
import Controller from '../controllers/GreetingController';
import dateService from '../services/dateService';

export default angular.module('App.date')
  .directive('greeting', function () {

    var link = function (scope) {

      scope.$watch(function () { return dateService.currentDate }, function (newValue) {
        //console.log('current date changed', newValue);
      });

    };

    return {
      templateUrl: 'app/date/templates/greeting.tpl.html',

      controller: Controller,
      controllerAs: 'cn',
      bindToController: true,
      link: link,

      scope: {
        firstName: '@',
        lastName: '@'
      }
    };
  });