app.controller('topicsController', ['$scope','$route','$routeParams', 'topicFactory', 'topic', function topicsController($scope,$route,$routeParams,topicFactory, topic){

    // function GetList(list){
    //     $scope.topiclist = list;
    // }
    // $scope.topiclist = topicFactory.topiclist;
    //
    //
    // $scope.addTopic = function(){
    //     console.log($scope.newTopic);
    //     topicFactory.addTopic($scope.newTopic, function(){
    //         $scope.newTopic = {};
    //         $scope.getTopics();
    //     });
    //     console.log($scope.topiclist);
    // }
    //
    // $scope.getTopics = function(){
    //     topicFactory.getTopics(GetList);
    // }
    // $scope.findTopicById = function(){
    //     console.log($route.current.params.id);
    //     var id = $route.current.params.id;
    //     var topic = topicFactory.findTopic(id);
    //     $scope.topic = topic;
    // }
    // $scope.updateTopic = function(){
    //     console.log($scope.topic);
    //     topicFactory.updateTopic($scope.topic)
    // }
    $scope.setInit = function(){
        console.log("in set init");
        console.log(topic);
        $scope.topic = topic;
        console.log($scope.topic);
    }


}])
