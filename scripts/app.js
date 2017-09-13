document.addEventListener("DOMContentLoaded", function(){

  const vm = new Vue({
    el: '#app',
    data: { 
      todos: [],
      newTodoText: ''
    },
    methods: {
      getNewId() {
        return new Date().getTime().toString(16) + Math.floor(Math.random() * 10000).toString(16);
      },
      addTodo() {
        this.todos.push({ id: this.getNewId(), text: this.newTodoText, done: false })
        this.newTodoText = '';
      },
      deleteTodo(id) {
        for(let i=0; i < this.todos.length; i++){
          if(this.todos[i].id === id) {
            this.todos.splice(i, 1);
            return;
          }
        }
      }
    }
  })

});
