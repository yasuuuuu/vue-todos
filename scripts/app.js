document.addEventListener("DOMContentLoaded", function(){

  Vue.component('todo-list-item', {
    template: '<li v-bind:class="{ completed: todo.done }" v-bind:key="todo.id"><input type="checkbox" v-model="todo.done"> {{ todo.text }} <input type="button" v-on:click="deleteFunc(todo.id)" value="削除"></li>',
    props: {
      todo: Object,
      deleteFunc: Function,
    },
  });

  Vue.component('todo-form', {
    template: '<form v-on:submit.prevent="addTodo"><input type="text" v-model="newTodoText"/><input type="submit" value="書き込み" /></form>',
    props: {
      addFunc: Function,
    },
    data() {
      return {
        newTodoText: '',
      }
    },
    methods: {
      getNewId() {
        return new Date().getTime().toString(16) + Math.floor(Math.random() * 10000).toString(16);
      },
      addTodo() {
        const newTodo = { id: this.getNewId(), text: this.newTodoText, done: false };
        this.newTodoText = '';
        this.$emit('todo-added', newTodo);
      }
    }
  });

  const vm = new Vue({
    el: '#app',
    data: { 
      todos: [],
    },
    methods: {
      deleteTodo(id) {
        for(let i = 0; i < this.todos.length; i++){
          if(this.todos[i].id === id) {
            this.todos.splice(i, 1);
            return;
          }
        }
      }
    }
  })
});