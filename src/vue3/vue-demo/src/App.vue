<template>

  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  <h3 @click="upUser">{{user.name}}</h3>
</template>

<script lang="ts">
import { defineComponent,ref,reactive } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){
    
    const user=reactive({
      name:"hj",
      age:20

    })
    const upUser=()=>{
      user.name="zm"
    }
    return{
     user,
     upUser
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
