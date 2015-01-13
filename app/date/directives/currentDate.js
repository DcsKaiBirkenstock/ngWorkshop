import angular from 'angular';
import mod from '../date';

export default angular.module('App.date')
  .directive('currentDate', function () {


    return {
      templateUrl: 'app/date/templates/currentDate.tpl.html'
    };
  });