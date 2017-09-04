document.addEventListener("DOMContentLoaded", function(){

  var vm = new Vue({
    el: '#app',
    data: { 
      todos: [
        { id: 0, text: '合いびき肉を買ってくる', done: false },
        { id: 1, text: '胡椒を買ってくる', done: false },
      ],
      newTodoText: ''
    },
    methods: {
      getNewId: function(){
        return this.todos.length;
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
