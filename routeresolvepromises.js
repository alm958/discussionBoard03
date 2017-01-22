app.factory("newsControllerInitialData", function(messageService, greetingService, $q) {
    return function() {
        var message = messageService.getMessage();
        var greeting = greetingService.getGreeting();

        return $q.all([message, greeting]).then(function(results){
            return {
                message: results[0],
                greeting: results[1]
            };
        });
    }
});
