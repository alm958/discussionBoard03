var usersController = require('./../controllers/usersCont.js');
var topicsController = require('./../controllers/topicsCont.js');
var postsController = require('./../controllers/postsCont.js');
var commentsController = require('./../controllers/commentsCont.js');

module.exports = function(app){

    app.post('/users', usersController.regLogUser);
    // app.get('/users/:id', usersController.getOneById);
    app.put('/users/topics/:id', usersController.updateTopicCount);
    // app.put('/users/post/:id', usersController.updatePostCount);
    // app.put('/users/comment/:id', usersController.updateCommentCount);
    //
    app.post('/topics', topicsController.create);
    app.get('/topics', topicsController.index);
    app.get('/topics/:id', topicsController.getOneById);
    // app.put('/topics/:id', topicsController.update);
    //
    app.get('/posts/topic/:Tid', postsController.index);
    // app.post('/posts/topic/:Tid', postsController.create);
    // app.put('/posts/:id', postsController.update);
    //
    app.get('/comments/topic/:Tid', commentsController.index);
    // app.post('/comments/post/:Pid', commentsController.create);

};
