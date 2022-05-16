<template>
   <div class="font-serif drop-shadow-lg w-full h-full flex flex-col justify-between  bg-gray-100  rounded-lg border border-gray-200  px-8 pt-4 pb-3 ">

    <div >
        <label for="title" class="text-xl">Title</label>
        <input required v-model="article.title" type="text" name="title" id="title" class=" text-xl  rounded-md w-full h-10  break-words  text-md">
        <!--<input required type="text" value="<%=article.title %>" name="title" id="title" class=" text-xl  rounded-md w-full h-10  break-words  text-md">-->

    </div>

    <div class="mt-2">
        <label for="description" class="text-xl">description</label>
        <textarea   v-model="article.description" type="text" name="description" id="description" class=" rounded-md w-full h-36  break-words  text-md"></textarea>
        <!--<textarea  type="text" name="description" id="description" class=" rounded-md w-full h-36  break-words  text-md"><%=article.description%></textarea>-->
    </div>

    <div  >
        <label for="markdown" class="text-xl">markdown</label>
        <textarea required  v-model="article.markdown" type="text" name="markdown" id="markdown" class=" rounded-md w-full h-8 break-words  text-md"></textarea>
    </div>

    <div class="flex justify-end mt-3">

        
            <button v-on:click="createpost" class=" underline active:scale-125 hover:underline-offset-4 hover:scale-110 hover:text-green-500  transition ease-out duration-1000 mr-4 ml-2 self-center " >Save</button>
        
       <router-link to="/" class="underline active:scale-125 hover:underline-offset-4 hover:scale-110 hover:text-yellow-500  transition ease-out duration-300">cancel</router-link> 
    </div>
    
    </div>

</template>

<script>
// @ is an alias to /src

import postservice from '../postservice'
import router from '@/router'
export default {
  name: 'HomeViewcs',
   data(){
    return{
      article:{title:'',description:'',markdown:'dont need to type'},
      
    }
  }
  , /*headers: {
            "Access-Control-Allow-Origin" : "http://localhost:8080/",},*/
  methods:{
       async createpost (){
           let resdb = await postservice.PostArticle('http://localhost:5000/articles',this.article)
           console.log(resdb)
           router.push({ path: '/' })   
      },
      
  }
}
</script>