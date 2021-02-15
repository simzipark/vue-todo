import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};
export const store = new Vuex.Store({
  state: {
    headerText: "🌷TODO it🌷",
    todoItems: storage.fetch(),
  },
  getters: {
    storedTodoItems(state) {
      return state.todoItems;
    },
    getHeaderText(state) {
      return state.headerText;
    },
  },
  mutations: {
    addOneItem(state, payload) {
      const obj = {
        completed: false,
        item: payload,
      };
      localStorage.setItem(payload, JSON.stringify(obj));

      //   this.todoItems.push(obj);
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    },
    toggleOneItem(state, payload) {
      // todoItem.completed = !todoItem.completed;  //안티 패턴
      state.todoItems[payload.index].completed = !state.todoItems[payload.index]
        .completed;
      localStorage.removeItem(payload.todoItem.item, payload.index);
      localStorage.setItem(
        payload.todoItem.item,
        JSON.stringify(payload.todoItem)
      );
    },
  },
});
