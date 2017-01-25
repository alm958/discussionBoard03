app.factory('commentFactory', ['$http', '$route','$routeParams', function( $http, $route, $routeParams ){
    var factory = {};
    factory.commentlist = [];
    factory.addComment = function(comment, callback){
        $http.post(`/comments/topic/${id}`, comment)
            .then(function(addedComment){
                factory.commentlist.push(addedComment);
                callback();
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.getComments = function(callback){
        var id = $route.current.params.id;
        $http.get(`/comments/topic/${id}`)
            .then(function(comments){
                factory.commentlist = comments.data
                callback(factory.commentlist);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.getInitComments = function(){
        var id = $route.current.params.id;
        return $http.get(`/comments/topic/${id}`)
    }

    return factory;
}])
