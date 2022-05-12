<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
    
  </div>
</template>

<script>
import postservice from '../postservice'
postservice.showw();
export default {
  name: 'HelloWorldddd',
  
  props: {
    msg: String
  }
}

</script>

