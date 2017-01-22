app.factory('userFactory', ['$http', '$location', '$cookies', function($http, $location, $cookies){
    var factory = {};
    var currentUserName = $cookies.get('currentUserName');
    var currentUserId = $cookies.get('currentUserId');

    factory.regLogUser = function(user, callback){
        console.log('userFactory regLogUser');
        console.log(user);
        $http.post('/users', user)
            .then(function(returnedUser){
                console.log('got this far');
                $cookies.put('currentUserName',returnedUser.data.name);
                $cookies.put('currentUserId',returnedUser.data._id);
                $location.path('/dashboard');
                callback();
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.getUsers = function(callback){
        $http.get('/users')
            .then(function(users){
                factory.userlist = users.data;
                callback(factory.userlist);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.findUser = function(id){
        return factory.userlist.find(user => user._id == id)
    };
    factory.updateTopicCount = function(userid){
        console.log('in factory updateTopiccount');
        console.log(userid);
        $http.put(`/users/topics/${userid}`)
            .then(function(response){
                console.log('back from server post updateTopiccount');
            })
            .catch(function(err){
                console.log(err);
            });
    }


    return factory;
}])
