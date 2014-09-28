(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('Dashboard', Dashboard);

    function Dashboard($q, dataservice, logger) {
        /*jshint validthis: true */
        var vm = this;

        vm.news = {
            title: 'Customers',
            description: 'Customer news'
        };
        vm.customers = [];
        vm.title = 'Dashboard';

        activate();

        function activate() {
            return $q.all([getCustomers()]).then(function() {
                logger.info('Activated Dashboard View');
            });
        }

        function getCustomers() {
            return dataservice.getCustomers().then(function(data) {
                vm.customers = data;
                return vm.customers;
            });
        }
    }
})();
