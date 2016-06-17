var app_view2;
(function (app_view2) {
    'use strict';
    angular
        .module('app.view2', [])
        .controller('View2Ctrl', function ($scope) {
        $scope.employees = employee;
        $scope.limiter = employee.length;
        $scope.skip = 0;
        $scope.column = "name";
        $scope.isreverse = false;
        $scope.searchoption = "all";
        $scope.dosorting = function (column) {
            $scope.column = column;
            $scope.isreverse = column == $scope.column ? !$scope.isreverse : true;
        };
        $scope.getreverseclass = function (column) {
            if ($scope.column == column) {
                return $scope.isreverse ? 'arrow-down' : 'arrow-up';
            }
            else {
                return '';
            }
        };
        $scope.search = function (item) {
            if ($scope.searchtext == undefined || $scope.searchtext == '') {
                return true;
            }
            else {
                if ($scope.searchoption !== 'all') {
                    switch ($scope.searchoption) {
                        case 'name':
                            if (item.name.toLowerCase().indexOf($scope.searchtext.toLowerCase()) != -1) {
                                return true;
                            }
                            break;
                        case 'age':
                            if (item.age.toString().indexOf($scope.searchtext) != -1) {
                                return true;
                            }
                            break;
                        case 'gender':
                            if (item.gender.toLowerCase().indexOf($scope.searchtext.toLowerCase()) != -1) {
                                return true;
                            }
                            break;
                        case 'salary':
                            if (item.salary.toString().indexOf($scope.searchtext.toLowerCase()) != -1) {
                                return true;
                            }
                            break;
                    }
                }
                else {
                    if (item.name.toLowerCase().indexOf($scope.searchtext.toLowerCase()) != -1 ||
                        item.age.toString().indexOf($scope.searchtext) != -1 ||
                        item.gender.toLowerCase().indexOf($scope.searchtext.toLowerCase()) != -1 ||
                        item.salary.toString().indexOf($scope.searchtext.toLowerCase()) != -1) {
                        return true;
                    }
                }
            }
            return false;
        };
    });
    var employee = [{
            name: "shubham",
            age: 25,
            gender: "Male",
            salary: 2500.989
        }, {
            name: "satya",
            age: 28,
            gender: "female",
            salary: 290000.956
        }, {
            name: "anil",
            age: 24,
            gender: "Male",
            salary: 52500.954
        }, {
            name: "bob",
            age: 54,
            gender: "Male",
            salary: 11505
        }, {
            name: "helga",
            age: 36,
            gender: "female",
            salary: 3400.9
        }, {
            name: "nikola",
            age: 21,
            gender: "Male",
            salary: 1200.41
        }];
})(app_view2 || (app_view2 = {}));
