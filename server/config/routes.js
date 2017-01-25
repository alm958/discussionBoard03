var usersController = require('./../controllers/usersCont.js');
var topicsController = require('./../controllers/topicsCont.js');
var postsController = require('./../controllers/postsCont.js');
var commentsController = require('./../controllers/commentsCont.js');

module.exports = function(app){

    app.post('/users', usersController.regLogUser);
    // app.get('/users/:id', usersController.getOneById);
    app.put('/users/topics/:id', usersController.updateTopicCount);
    app.put('/users/posts/:id', usersController.updatePostCount);
    app.put('/users/comment/:id', usersController.updateCommentCount);
    //
    app.post('/topics', topicsController.create);
    app.get('/topics', topicsController.index);
    app.get('/topics/:id', topicsController.getOneById);
    // app.put('/topics/:id', topicsController.update);
    //
    app.get('/posts/topic/:id', postsController.index);
    app.post('/posts/topic/:id', postsController.create);
    app.put('/posts/upvote/:id', postsController.upvote);
    app.put('/posts/downvote/:id', postsController.downvote);
    //
    app.get('/comments/topic/:id', commentsController.index);
    app.post('/comments/topic/:id', commentsController.create);

};
