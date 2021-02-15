<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <!-- <button v-on:click="addTodo">ADD</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
    -->
      <h3 slot="header">
        <i
          class="closeModalBtn far fa-window-close"
          @click="showModal = false"
        ></i>
      </h3>
      <input
        type="text"
        placeholder="입력하세요."
        slot="body"
        v-model="newTodoItem"
        v-on:keyup.enter="addTodo"
      />
      <span slot="footer">Todo를 입력하지 않았습니다.</span>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";
export default {
  data: function() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo: function() {
      if (this.newTodoItem !== "") {
        const text = this.newTodoItem.trim();
        // this.$emit("addTodoItem", this.newTodoItem);
        this.$store.commit("addOneItem", text);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput: function() {
      this.newTodoItem = "";
    },
  },
  components: {
    Modal: Modal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background-color: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>
