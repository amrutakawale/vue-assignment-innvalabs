// src/App.vue
<template>
  <div>
    <button @click="showQuestion1">Show Question 1</button>
    <div v-if="que1">
      <ParentComponent />
    </div>
  </div>
  <hr />
  <div>
    <button @click="showQuestion2">Show Question 2</button>
    <div v-if="que2" id="app">
      <UserList />
    </div>
  </div>
  <hr />
  <div>
    <button @click="showQuestion3">Show Question 3</button>
    <div v-if="que3">
      <FormBlocks />
    </div>
  </div>
</template>

<script>
import UserList from './components/UserList.vue';
import FormBlocks from './components/FormBlocks.vue';
import ParentComponent from './components/Question1/ParentComponent.vue'
export default {
  components: {
    UserList,
    FormBlocks,
    ParentComponent
  },
  data(){
    return{
      que1: false,
      que2: false,
      que3: false,
    }
  },
  methods:{
    showQuestion1(){
      this.que1 = !this.que1;
    },
    showQuestion2() {
      this.que2 = !this.que2;
    },
    showQuestion3() {
      console.log(this.que3, "qww");
      this.que3 = !this.que3;
    },
  }
};
</script>
