var application = (function () {
    var api = {

        views: {},

        models: {},

        init: function () {
            var todoItem = new application.models.TodoItem({title: "Welcome !", description: "This is a sample todo item with title and description."});
            this.views = new application.views.TodoItemsView({model: todoItem});
            return this;
        }

    };

    return api;
})();