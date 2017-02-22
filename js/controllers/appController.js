app.controller('AppController', function() {
    var vm = this;
    vm.nav = [
       {
        url:"#/",
        title:"Home"
       },{
        url:"#/squadre",
        title:"Squadre"
       },{
           url:'#/calciatori',
           title:"Calciatori"
       }
    ];
});
