app.factory('postFactory', ['$http', '$route','$routeParams', function( $http, $route, $routeParams ){
    var factory = {};
    factory.postlist = [];


    factory.addPost = function(post, callback){
        var id = $route.current.params.id;
        $http.post(`/posts/topic/${id}`, post)
            .then(function(addedPost){
                callback();
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.getPosts = function(callback){
        var id = $route.current.params.id;
        $http.get(`/posts/topic/${id}`)
            .then(function(posts){
                factory.postlist = posts.data
                callback(factory.postlist);
                // return posts;
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.getInitPosts = function(){
        var id = $route.current.params.id;
        return $http.get(`/posts/topic/${id}`)
    }
    factory.updatePost = function(post){
        $http.put(`/posts/${post._id}`, post)
            .then(function(response){
                var post = response.data;
                var updateIndex = factory.postlist.findIndex(x => x._id === post._id);
                if (updateIndex > -1) {
                 factory.postlist[updateIndex] = post;
                }
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.upvote = function(postid, callback){
        $http.put(`posts/upvote/${postid}`)
            .then(function(response){
                callback(response.data);
                console.log(response.data);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.downvote = function(postid, callback){
        $http.put(`posts/downvote/${postid}`)
            .then(function(response){
                callback(response.data);
                console.log(response.data);
            })
            .catch(function(err){
                console.log(err);
            });
    }


    return factory;
}])
