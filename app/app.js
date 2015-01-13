import angular from 'angular';
import router from 'angular-ui-router';

import d1 from 'app/date/directives/currentDate';
import d2 from 'app/date/directives/greeting';
import d3 from 'app/backend/directives/randomJoke';

import dateService from 'app/date/services/dateService';
import { setHttp, setQ } from 'app/backend/services/restBackend';
import Joke from 'app/backend/models/Joke';


angular.module('App', [
  'ui.router',
  'App.date',
  'App.backend'
])
  .config(function ($stateProvider, $urlRouterProvider, $sceProvider) {

    $sceProvider.enabled(false);

    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "app/main/templates/home.tpl.html"
      });


  })
.run(function ($http, $q) {
    setHttp($http);
    setQ($q);
  });
