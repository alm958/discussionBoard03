app.controller('dashboardController', ['$scope','$route','$routeParams', '$cookies', 'userFactory','topicFactory' ,function dashboardController($scope,$route,$routeParams,$cookies,userFactory,topicFactory){

    $scope.currentUserName = $cookies.get('currentUserName');
    $scope.currentUserId = $cookies.get('currentUserId');
    $scope.sortType     = 'created_at'; // set the default sort type
    $scope.sortReverse  = true;
    $scope.topiclist = topicFactory.topiclist;


    function GetTList(list){
        $scope.topiclist = list;
    }
    // $scope.objectlist = objectFactory.objectlist;
    //
    //
    // $scope.addObject = function(){
    //     console.log($scope.newObject);
    //     objectFactory.addObject($scope.newObject, function(){
    //         $scope.newObject = {};
    //         $scope.getObjects();
    //     });
    //     console.log($scope.objectlist);
    // }
    //
    // $scope.getObjects = function(){
    //     objectFactory.getObjects(GetOList);
    // }
    // $scope.delObject = function(id){
    //     console.log(id);
    //     objectFactory.delObject(id, function(){
    //         $scope.getObjects();
    //     })
    // }
    // $scope.findObjectById = function(){
    //     console.log($route.current.params.id);
    //     var id = $route.current.params.id;
    //     var object = objectFactory.findObject(id);
    //     $scope.object = object;
    // }
    // $scope.updateObject = function(){
    //     console.log($scope.object);
    //     objectFactory.updateObject($scope.object)
    // }
    $scope.addTopic = function(){
        $scope.nTopic.user = $scope.currentUserId;
        console.log($scope.nTopic);
        topicFactory.addTopic($scope.nTopic, function(){
            console.log('in dashboardController addTopic callback');
            $scope.nTopic = {};
            $scope.getTopics();
            $scope.updateTopiccount();
        });
        console.log($scope.topiclist);
    }
    $scope.updateTopiccount = function(){
        console.log('in controller updateTopiccount');
        userFactory.updateTopicCount($scope.currentUserId);
    }
    $scope.getTopics = function(){
        topicFactory.getTopics(GetTList);
    }
    $scope.findTopicById = function(id){
        console.log('in dash cont findTopicById');
        console.log(id);
        topicFactory.findTopicById(id);
    }
    $scope.setCurrentUser = function(){
        $scope.currentUserName = $cookies.get('currentUserName');
    }
    $scope.onLoad = function(){
        $scope.getTopics();
        $scope.setCurrentUser();

    }

}])
