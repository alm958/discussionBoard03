app.factory('commentFactory', ['$http', function($http){
    var factory = {};
    factory.commentlist = [];
    factory.addComment = function(comment, callback){
        $http.post('/comments', comment)
            .then(function(addedComment){
                factory.commentlist.push(addedComment);
                callback();
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.getComments = function(callback){
        $http.get(`/comments/topic/${Tid}`)
            .then(function(comments){
                return comments;
            })
            .catch(function(err){
                console.log(err);
            });
    }

    return factory;
}])
