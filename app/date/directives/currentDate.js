import angular from 'angular';
import mod from '../date';
import Controller from '../controllers/CurrentDateController';
import dateService from '../services/dateService';


export default angular.module('App.date')
  .directive('currentDate', function ($interval) {

    var link = function (scope) {
      let controller = scope.cn;

      $interval(function () {
        let date = controller.getCurrentDate();
        controller.currentDate = date;
        dateService.currentDate = date;
      }, 2000);

    };


    return {
      templateUrl: 'app/date/templates/currentDate.tpl.html',

      controller: Controller,
      controllerAs: 'cn',
      bindToController: true,
      link: link,

      scope: {}
    };
  });