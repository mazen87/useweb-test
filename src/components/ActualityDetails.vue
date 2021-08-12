<template>
<div class="flex bg-gray-100">
    <div>   <img alt="actuality logo" class="z-10 m-24" v-bind:src="actuality.image"></div>
    <div class=" m-24 ">  
        <div><h1 class="font-extrabold text-4xl mb-24 text-center">{{actuality.title}}</h1></div>
        <div><p>{{actuality.description}}</p></div>
    </div>
</div>

</template>
<script>
import axios from 'axios'
export default {
    name:'ActualityDetails',
    data () {
        return {
            id:this.$route.params.id,
            actuality : {}
        }
    },
    async created(){
     try{

      const myActuality = await axios.get('http://localhost:3000/news/'+this.id)
      this.actuality    = myActuality.data
    }catch (e){
      console.error(e)
    }   
    }
}
</script>
<style scoped>

</style>