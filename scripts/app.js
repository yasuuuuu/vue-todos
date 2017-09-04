document.addEventListener("DOMContentLoaded", function(){

  var vm = new Vue({
    el: '#app',
    data: { 
      todos: [],
      newTodoText: ''
    },
    methods: {
      getNewId: function(){
        return new Date().getTime().toString(16) + Math.floor(Math.random() * 10000).toString(16);
      },
      addTodo: function(){
        this.todos.push({ id: this.getNewId(), text: this.newTodoText, done: false })
        this.newTodoText = '';
      },
      deleteTodo: function(id){
        for(var i=0; i<this.todos.length;i++){
          if(this.todos[i].id == id) {
            this.todos.splice(i, 1);
            return;
          }
        }
      }
    }
  })

});
