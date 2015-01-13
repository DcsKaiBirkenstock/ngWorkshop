import angular from 'angular';
import router from 'angular-ui-router';

import d1 from 'app/date/directives/currentDate';
import d2 from 'app/date/directives/greeting';


angular.module('App', [
  'ui.router',
  'App.date'
])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "app/main/templates/home.tpl.html"
      });


  });
