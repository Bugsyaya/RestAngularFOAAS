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
                    return service.getBirth();
                }
            ],
            appli: function() { return {}; }
        },
        template: '<div>You are borned<br><button ui-sref="birth.childhood">childhood</button><div ui-view></div></div>'
      })
      .state('birth.childhood', {
        url: '/childhood',
        controller: 'myCtrl',
        resolve: {
            myApp: ['service',
                function(service) {

                return service.getChildhood();
                
            }],
            appli: function() { return {}; }
        },
        template: '<div>You are grown up<br><button ui-sref="birth.childhood.study">study</button><br><button ui-sref="birth.childhood.career">career</button><div ui-view></div></div>'
      })
      .state('birth.childhood.study', {
        url: '/study',
        controller: 'myCtrl',
        resolve: {
            myApp: ['service',
                function(service) {

                return service.getStudy();
                
            }],
            appli: function() { return {}; }
        },
        template: '<div>Really ?<br><button ui-sref=".phd">phd</button> <button ui-sref=".workinglife">workinglife</button><div ui-view></div></div>'
      })
      .state('birth.childhood.study.phd', {
        url: '/phd',
        controller: 'myCtrl',
        resolve: {
            myApp: ['service',
                function(service) {

                return service.getPhd();
                
            }],
            appli: function() { return {}; }
        },
        template: '<div>Great, What next ?<br><button ui-sref=".workinglife">workinglife</button><div ui-view></div></div>'
      })
      .state('birth.childhood.career', {
        url: '/career',
        controller: 'myCtrl',
        resolve: {
            myApp: ['service',
                function(service) {

                return service.getCareer();
                
            }],
            appli: function() { return {}; }
        },
        template: '<div>GoodLuck !<br><button ui-sref=".workinglife">workinglife</button><div ui-view></div></div>'
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

                return service.getWorkingLife();
                
            }],
            appli: function() { return {}; }
        },
        template: '<div>Good old days<br><button ui-sref=".pension">pension</button><div ui-view></div></div>'
      })
      .state(`${parent}.workinglife.pension`, {
        url: '/pension',
        controller: 'myCtrl',
        resolve: {
            myApp: ['service',
                function(service) {

                return service.getPension();
                
            }],
            appli: function() { return {}; }
        },
        template: '<div>Good old days<br><button ui-sref=".death">death</button><div ui-view></div></div>'
      })
      .state(`${parent}.workinglife.pension.death`, {
        url: '/death',
        controller: 'myCtrl',
        resolve: {
            myApp: ['service',
                function(service) {

                return service.getDeath();
                
            }],
            appli: function() { return {}; }
        },
        template: '<div>RIP<br><button ui-sref="birth">birth</button></div>'
      });

    }




  });