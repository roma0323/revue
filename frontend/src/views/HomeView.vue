<template>
      <div class = "  container grid   sm:grid-cols-2  lg:grid-cols-3  grid-cols-1 gap-6  sm:px-8 md:px-20 px-2  mt-16 mx-auto "> 
    <div v-for="post in posts" v-bind:key="post.id">
      <div class="font-serif drop-shadow-lg w-full h-full flex flex-col justify-between  bg-gray-100   rounded-lg  border border-gray-200  pt-6 px-6 pb-3">
                    
                    <div >
                        <h4 class=" truncate border-b-2 border-gray-300   text-2xl pb-1 mb-2 uppercase">{{ post.title }}</h4>
                        <p class="h-48 mx-2 mb-2  overflow-hidden break-words  text-md">{{ post.description }}</p>
                    </div>
                    <div class=" flex justify-end  ">
                        <span class="px-2 py-1.5 mb-2 rounded-lg bg-gradient-to-b from-teal-100 to-blue-100 	 text-xs ">{{ post.createdAt}}</span><!--<%=article.createdAt.toLocaleDateString()%>-->
                    </div>
                        
                    <div>
                        
                        
                    </div>   
               
                </div> 
    
  </div>
    
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
    <FooterModule/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import FooterModule from '@/components/FooterModule.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    FooterModule
  }
  ,
  data(){
    return{
      posts:[],
    }
  },
  mounted(){
  axios.get('http://localhost:5000/index')
  .then(response =>{
    this.posts = response.data;
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  },
}
import axios from 'axios'
</script>
