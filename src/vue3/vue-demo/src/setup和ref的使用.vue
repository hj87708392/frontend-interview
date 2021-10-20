<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  <div @click="updataCount">{{count}}</div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){
    let count =ref(1)
    function updataCount(){
      count.value++
    }
    console.log(1)
    
    return{
      count,updataCount
    }
   
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
