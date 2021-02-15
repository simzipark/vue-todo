<template>
  <div id="app">
    <todo-header></todo-header>
    <!-- <todo-input v-on:addTodoItem="addOneItem"></todo-input> -->
    <todo-input></todo-input>
    <!-- <todo-list
      v-bind:propsdata="todoItems"
      v-on:removeItem="removeOneItem"
      v-on:toggleItem="toggleOneItem"
    ></todo-list> -->
    <todo-list></todo-list>

    <!-- <todo-footer v-on:clearAll="clearAllItems"></todo-footer> -->
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

export default {
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    // addOneItem(todoItem) {
    //   const obj = {
    //     completed: false,
    //     item: todoItem,
    //   };
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // removeOneItem(todoItem, index) {
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1);
    // },
    // toggleOneItem(todoItem, index) {
    //   // todoItem.completed = !todoItem.completed;  //안티 패턴
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   localStorage.removeItem(todoItem.item, index);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    // clearAllItems() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // },
  },
  // 뷰 인스턴스 라이프사이클 중 인스턴스가 생성 되자마자 호출되는 훅
  // created() {
  //   if (localStorage.length > 0) {
  //     for (let i = 0; i < localStorage.length; i++) {
  //       if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
  //         this.todoItems.push(
  //           JSON.parse(localStorage.getItem(localStorage.key(i)))
  //         );
  //       }
  //     }
  //   }
  // },
  components: {
    TodoHeader,
    TodoFooter,
    TodoInput,
    TodoList,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: blanchedalmond;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px gainsboro;
}
</style>
