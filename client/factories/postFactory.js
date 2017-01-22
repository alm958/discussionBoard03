app.factory('postFactory', ['$http', function($http){
    var factory = {};
    factory.postlist = [];
    factory.addPost = function(post, callback){
        $http.post('/posts', post)
            .then(function(addedPost){
                factory.postlist.push(addedPost);
                callback();
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.getPosts = function(callback){
        $http.get(`/posts/topic/${Tid}`)
            .then(function(posts){
                return posts;
            })
            .catch(function(err){
                console.log(err);
            });
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

    return factory;
}])
