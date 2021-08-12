<template>
  <div class="news h-screen">
     <div class="bg-gray-100 h-full pb-16" id="newsHome">
      <div class="py-16">
        <header><h3 class="text-4xl font-extrabold">News</h3></header>
      </div>
      
      <div id="actuality" class="xl:flex block mx-28">
          <Actuality class="flex-1 mx-2 mt-4" v-for="actuality of news" :key="actuality.id" :my-actuality="actuality" />
      </div>
    </div>
   </div>
</template>
<script>
import Actuality from '@/components/Actuality.vue'
import axios from 'axios'
  export default {
    name : "News",
    data () {
      return {
        news : []
      }
    },
      async created () {
    try{
      const myNews = await axios.get('http://localhost:3000/news')
      this.news    = myNews.data
    }catch (e){
      console.error(e)
    }
  },
  components:{
    Actuality
  }
  }
</script>
