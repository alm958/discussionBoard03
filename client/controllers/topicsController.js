app.controller('topicsController', ['$scope','$route','$routeParams', '$cookies', 'topicFactory', 'postFactory', 'commentFactory','userFactory', 'topic', 'posts', 'comments', function topicsController($scope,$route,$routeParams, $cookies, topicFactory, postFactory, commentFactory, userFactory, topic, posts, comments){

    $scope.currentUserName = $cookies.get('currentUserName');
    $scope.currentUserId = $cookies.get('currentUserId');
    $scope.sortType     = 'created_at'; // set the default sort type
    $scope.sortReverse  = true;
    $scope.postlist = postFactory.postlist;
    $scope.commentlist = commentFactory.commentlist;


    function GetPList(list){
        $scope.postlist = list;
    }
    function GetCList(list){
        $scope.commentlist = list;
    }



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
        console.log(posts);
        console.log(posts.data);
        $scope.topic = topic.data;
        $scope.postlist = posts.data;
        $scope.commentlist = comments.data;
    }
    $scope.addPost = function(){
        $scope.nPost.user = $cookies.get('currentUserId');
        $scope.nPost.topic = $route.current.params.id;
        console.log($scope.nPost);
        postFactory.addPost($scope.nPost, function(){
            console.log('in Controller addPost callback');
            $scope.nPost = {};
            $scope.getPosts();
            $scope.updatePostcount();
        });
    }
    $scope.addComment = function(nComment){
        console.log(nComment);
        nComment.user = $cookies.get('currentUserId');
        nComment.topic = $route.current.params.id;
        console.log(nComment);
        commentFactory.addComment(nComment, function(){
            console.log('in Controller addComment callback');
            nComment = {};
            $scope.getComments();
            $scope.updateCommentcount();
        });
    }
    $scope.updatePostcount = function(){
        console.log('in controller updatePostcount');
        userFactory.updatePostCount($scope.currentUserId);
    }
    $scope.updateCommentcount = function(){
        console.log('in controller updatePostcount');
        userFactory.updateCommentCount($scope.currentUserId);
    }
    $scope.getPosts = function(){
        postFactory.getPosts(GetPList);
    }
    $scope.getComments = function(){
        commentFactory.getComments(GetCList);
    }
    $scope.upvote = function(postid){
        postFactory.upvote(postid, function(updatedPost){
            var updateIndex = $scope.postlist.findIndex(x => x._id === updatedPost._id);
            if (updateIndex > -1) {
                $scope.postlist[updateIndex].upvote = updatedPost.upvote;
            }
        });
    }
    $scope.downvote = function(postid){
        postFactory.downvote(postid, function(updatedPost){
            var updateIndex = $scope.postlist.findIndex(x => x._id === updatedPost._id);
            if (updateIndex > -1) {
                $scope.postlist[updateIndex].downvote = updatedPost.downvote;
            }
        });
    }


}])
