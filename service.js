// Ensemble de methodes d'appel a l'api
// Message est la variable bindé
app.service("service",['Restangular',
    function(Restangular) {      

        this.message = "Yolo";

        this.getBirth = function() {

          var singleSearch = Restangular.oneUrl('betaSearch', 'http://foaas.com/that/car');         
          this.message = singleSearch.get().then(function(response){
            return response.message;
          })
          
        };

        this.getChildhood = function() {

          var singleSearch = Restangular.oneUrl('betaSearch', 'http://foaas.com/off/toto/terre');         
          this.message = singleSearch.get().then(function(response){
            return response.message;
          })

        };

        this.getStudy = function() {

          var singleSearch = Restangular.oneUrl('betaSearch', 'http://foaas.com/you/peuimporte/paris');         
          this.message = singleSearch.get().then(function(response){
            return response.message;
          })          

        };

        this.getPhd = function() {
          
          var singleSearch = Restangular.oneUrl('betaSearch', 'http://foaas.com/shakespeare/yolo/titi');         
          this.message = singleSearch.get().then(function(response){
            return response.message;
          })

        };

        this.getCareer = function() {
          
          var singleSearch = Restangular.oneUrl('betaSearch', 'http://foaas.com/everything/paris');         
          this.message = singleSearch.get().then(function(response){
            return response.message;
          })

        };

        this.getWorkingLife = function() {
          
          var singleSearch = Restangular.oneUrl('betaSearch', 'http://foaas.com/everyone/lala');         
          this.message = singleSearch.get().then(function(response){
            return response.message;
          })

        };

        this.getPension = function() {
          
          var singleSearch = Restangular.oneUrl('betaSearch', 'http://foaas.com/fascinating/tutu');         
          this.message = singleSearch.get().then(function(response){
            return response.message;
          })

        };

        this.getDeath = function() {

          var singleSearch = Restangular.oneUrl('betaSearch', 'http://foaas.com/yoda/marine/nantes');         
          this.message = singleSearch.get().then(function(response){
            return response.message;
          })

        };


    }]
);