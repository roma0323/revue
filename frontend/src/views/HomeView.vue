<template>
      <div class = "  container grid   sm:grid-cols-2  lg:grid-cols-3  grid-cols-1 gap-6  sm:px-8 md:px-20 px-2  mt-16 mx-auto "> 
    <div v-for="article in articles" v-bind:key="article.id">
      <div class="font-serif drop-shadow-lg w-full h-full flex flex-col justify-between  bg-gray-100   rounded-lg  border border-gray-200  pt-6 px-6 pb-3">
                    
                    <div >
                        <h4 class=" truncate border-b-2 border-gray-300   text-2xl pb-1 mb-2 uppercase">{{ article.title }}</h4>
                        <p class="h-48 mx-2 mb-2  overflow-hidden break-words  text-md">{{ article.description }}</p>
                    </div>
                    <div class=" flex justify-end  ">
                        <span class="px-2 py-1.5 mb-2 rounded-lg bg-gradient-to-b from-teal-100 to-blue-100 	 text-xs ">{{ article.createdAt}}</span><!--<%=article.createdAt.toLocaleDateString()%>-->
                    </div>
            <router-link :to="`/EditArticle/${article._id}`" class=" m-2 self-center active:scale-125 hover:underline-offset-4 hover:scale-110 hover:text-yellow-500  transition ease-out duration-300">login/out</router-link>
             <button v-on:click="deletearticle(article._id)" class=" underline active:scale-125 hover:underline-offset-4 hover:scale-110 hover:text-green-500  transition ease-out duration-1000 mr-4 ml-2 self-center " >Delete</button>       
      </div> 
    
  </div>
    
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
    <FooterModule/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'
import FooterModule from '../components/FooterModule.vue'
import postservice from '../postservice'
import axios from 'axios'
import router from '@/router'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    FooterModule
  }
  ,
  data(){
    return{
      articles:[],
    }
  },
  methods:{
       deletearticle(id){
           postservice.DeleteArticle(`http://localhost:5000/articles/${id}`)
          
          router.push({ path: '/about' })       
           
      },

  },
  mounted(){
  axios.get('http://localhost:5000/index')
  .then(response =>{
    this.articles = response.data;
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  },
}

</script>
