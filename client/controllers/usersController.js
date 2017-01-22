app.controller('usersController', ['$scope','$route','$routeParams', 'userFactory',function usersController($scope,$route,$routeParams,userFactory){

    $scope.regLogUser = function(){
        console.log('cs userController regLogUser');
        console.log($scope.user);
        userFactory.regLogUser($scope.user,function(){
            $scope.user = {};
        });
    }


}])
