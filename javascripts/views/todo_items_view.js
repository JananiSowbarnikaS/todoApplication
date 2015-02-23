$(function () {
    application.views.TodoItemsView = Backbone.View.extend({
        el: ".app_container",
        template: _.template('<b><%= title %></b> <%= description %>'),

        initialize: function(){
          this.render();
        },

        render: function () {
            var todoItem = this.model;
            this.$el.html(this.template(todoItem));
            return this.$el;
        }
    });
});
