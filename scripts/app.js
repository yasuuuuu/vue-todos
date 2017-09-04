document.addEventListener("DOMContentLoaded", function(){

  Vue.component('todo', {
    template: '<li>{{ todo.text }}</li>',
    props: {
      todo: Object
    }
  })

  var vm = new Vue({
    el: '#app',
    data: { 
      todos: [
        { text: 'hogehoge' },
        { text: 'hogehoge2' },
      ],
      newTodoText: ''
    },
    methods: {
      addTodo: function(){
        this.todos.push({ text: this.newTodoText })
        this.newTodoText = '';
      }
    }
  })

});
