var app = angular.module("myApp", ['ui.router','restangular']);


app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/birth');

    // Resolve est utilisé pour detecter le changement de position dans larborescence
    $stateProvider
      .state('birth', {
        url: '/birth',
        controller: 'myCtrl',
        resolve: {
            myApp: ['service',
                function(service) {
                    return service.getMessage('Birth');
                }
            ],
            appli: function() { return {}; }
        },
        template: '<div class="col-md-12">You are borned<br><button ui-sref="birth.childhood" class="col-md-12">childhood</button><div ui-view></div></div>'
      })
      .state('birth.childhood', {
        url: '/childhood',
        controller: 'myCtrl',
        resolve: {
            myApp: ['service',
                function(service) {

                return service.getMessage('Childhood');

            }],
            appli: function() { return {}; }
        },
        template: '<div class="col-md-12 study">You are grown up<br><button ui-sref="birth.childhood.study" class="col-md-6">study</button><button ui-sref="birth.childhood.career" class="col-md-6">career</button><div ui-view></div></div>'
      })
      .state('birth.childhood.study', {
        url: '/study',
        controller: 'myCtrl',
        resolve: {
            myApp: ['service',
                function(service) {

                return service.getMessage('Study');

            }],
            appli: function() { return {}; }
        },
        template: '<div class="col-md-12 study">Really ?<br><button ui-sref=".phd" class="col-md-6">phd</button> <button ui-sref=".workinglife" class="col-md-6">workinglife</button><div ui-view></div></div>'
      })
      .state('birth.childhood.study.phd', {
        url: '/phd',
        controller: 'myCtrl',
        resolve: {
            myApp: ['service',
                function(service) {

                return service.getMessage('Phd');

            }],
            appli: function() { return {}; }
        },
        template: '<div class="col-md-12 study">Great, What next ?<br><button ui-sref=".workinglife" class="col-md-12">workinglife</button><div ui-view></div></div>'
      })
      .state('birth.childhood.career', {
        url: '/career',
        controller: 'myCtrl',
        resolve: {
            myApp: ['service',
                function(service) {

                return service.getMessage('Career');

            }],
            appli: function() { return {}; }
        },
        template: '<div class="col-md-12 study">GoodLuck !<br><button ui-sref=".workinglife" class="col-md-12">workinglife</button><div ui-view></div></div>'
      });

    addWorkingLife($stateProvider, 'birth.childhood.study');
    addWorkingLife($stateProvider, 'birth.childhood.study.phd');
    addWorkingLife($stateProvider, 'birth.childhood.career');

    function addWorkingLife($stateProvider, parent){


      $stateProvider.state(`${parent}.workinglife`, {
        url: '/worklife',
        controller: 'myCtrl',
        resolve: {
            myApp: ['service',
                function(service) {

                return service.getMessage('WorkingLife');

            }],

            appli: function() { return {}; }
        },
        template: '<div class="col-md-12 study">Good old days<br><button ui-sref=".pension" class="col-md-12">pension</button><div ui-view></div></div>'
      })
      .state(`${parent}.workinglife.pension`, {
        url: '/pension',
        controller: 'myCtrl',
        resolve: {
            myApp: ['service',
                function(service) {

                return service.getMessage('Pension');

            }],
            appli: function() { return {}; }
        },
        template: '<div class="col-md-12 study">Good old days<br><button ui-sref=".death" class="col-md-12">death</button><div ui-view></div></div>'
      })
      .state(`${parent}.workinglife.pension.death`, {
        url: '/death',
        controller: 'myCtrl',
        resolve: {
            myApp: ['service',
                function(service) {

                return service.getMessage('Death');

            }],
            appli: function() { return {}; }
        },
        template: '<div class="col-md-12 study">RIP<br><button ui-sref="birth" class="col-md-12">birth</button></div>'
      });

    }




  });
