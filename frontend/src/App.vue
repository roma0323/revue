<template>

<nav class="sticky top-0 left-0 z-10 h-20 flex justify-between  bg-gradient-to-r from-gray-100 to-white border-gray-200">
        <h1>{{ User.backend }}</h1>
         <h1>{{ User.a }}</h1>
         <h1>{{arrayy[0]}}</h1>
    <!--<h1>{{changearray()}}</h1>--> 
        <router-link to="/"><svg class="relative bottom-4 right-2 w-14   hover:scale-105  active:scale-110 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.6 96.1c-12.95-.625-24.66 9.156-25.52 22.37C191.2 131.7 201.2 143.1 214.4 143.1c79.53 5.188 148.4 74.09 153.6 153.6c.8281 12.69 11.39 22.43 23.94 22.43c.5156 0 1.047-.0313 1.578-.0625c13.22-.8438 23.25-12.28 22.39-25.5C409.3 191.8 320.3 102.8 217.6 96.1zM224 0C206.3 0 192 14.31 192 32s14.33 32 32 32c123.5 0 224 100.5 224 224c0 17.69 14.33 32 32 32s32-14.31 32-32C512 129.2 382.8 0 224 0zM172.3 226.8C157.7 223.9 144 235.8 144 250.6v50.37c0 10.25 7.127 18.37 16.75 21.1c18.13 6.75 31.26 24.38 31.26 44.1c0 26.5-21.5 47.1-48.01 47.1c-26.5 0-48.01-21.5-48.01-47.1V120c0-13.25-10.75-23.1-24.01-23.1l-48.01 .0076C10.75 96.02 0 106.8 0 120v247.1c0 89.5 82.14 160.2 175 140.7c54.38-11.5 98.27-55.5 109.8-109.7C302.2 316.1 247.8 241.8 172.3 226.8z"/></svg></router-link> 
        <span class=" font-serif flex  pl-4">
          <router-link to="/about"  class=" m-2 self-center active:scale-125 hover:underline-offset-4 hover:scale-110 hover:text-yellow-500  transition ease-out duration-300">login/out</router-link>
          <router-link to="/NewArticle" class="p-1.5 rounded-md bg-gradient-to-b from-teal-300 to-blue-300 hover:from-blue-300 hover:to-teal-300 	 text-white active:scale-125  hover:scale-110   transition ease-out duration-700 mr-4 ml-2 self-center ">NewArticle</router-link>
        </span>
    </nav>
<router-view/>

</template>
<script>
export default {
  name: 'HelloWorldddd',
  
  props: {
    msg: String
  }
  ,
  data(){
    return{
      User:{a:5},
      arrayy:["第一個",5,7]
    }
  },
  mounted(){
  axios.get('http://localhost:5000/test_vue')
  .then(response =>{
    console.log(response.data);
     this.User = response.data;
    this.arrayy = [7,7,7];
    
    
  })
  .catch(function (error) {
    console.log(error);
  });
  },
  /*methods:{
    changearray(){
      this.arrayy = [7,7,7];
      return arrayy[0]
    }
  }*/
  }
import axios from 'axios'
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
