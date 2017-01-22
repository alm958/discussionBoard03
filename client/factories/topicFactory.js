app.factory('topicFactory', ['$http','$route','$routeParams', function($http, $route, $routeParams){
    var factory = {};
    factory.topiclist = [];
    factory.addTopic = function(topic, callback){
        $http.post('/topics', topic)
            .then(function(addedTopic){
                factory.topiclist.push(addedTopic);
                console.log(addedTopic);
                callback();
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.getTopics = function(callback){
        $http.get('/topics')
            .then(function(topics){
                factory.topiclist = topics.data;
                callback(factory.topiclist);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.findTopicById = function(){
        console.log('in t-factory find topic by id');
        var id = $route.current.params.id;
        console.log(id);
        $http.get(`/topics/${id}`)
            .then(function(topic){
                console.log('********************');
                console.log(topic);
                return topic;
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.updateTopic = function(topic){
        $http.put(`/topics/${topic._id}`, topic)
            .then(function(response){
                var topic = response.data;
                var updateIndex = factory.topiclist.findIndex(x => x._id === topic._id);
                if (updateIndex > -1) {
                 factory.topiclist[updateIndex] = topic;
                }
            })
            .catch(function(err){
                console.log(err);
            });
    }

    return factory;
}])
