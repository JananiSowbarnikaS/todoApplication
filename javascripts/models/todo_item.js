$(function () {
    application.models.TodoItem = Backbone.Model.extend({

        initialize: function (item) {
            this.title = item.title;
            this.description = item.description;
        }

    });

});
