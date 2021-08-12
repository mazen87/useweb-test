<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Nintendo />
    <div class="lg:flex block">
     <div class="flex-1">
      <div id="nav" class="mx-24">
         <ul class="sm:flex block">
          <li class="flex-1 sm:h-10 sm:w-1 h-8 mb-4" v-bind:id="person.id" v-for="person of persons" :key="person.id"> <button v-on:click="showPerson(person)">{{person.title}}</button></li> 
        </ul>
      </div>

      <!-- person content-->
      <div class="text-left m-24 font-bold font-sans">
        <h1 class="text-4xl ml-20">{{actualPerson.title}}</h1>
        <h3 class="text-2xl font-medium ml-20 mt-12"> {{actualPerson.subTitle}} </h3>
        <p class="text-xl font-medium p-8 mx-8 mt-12"> {{actualPerson.description}}</p>
      </div>
     </div>
     <!-- person image -->
     <div class="flex-1">
      <img alt="person logo" class="w-full h-full" v-bind:src="actualPerson.image">
     </div>
    </div>
    <!-- news -->
    <div class="bg-gray-100 h-full pb-16" id="newsHome">
      <div class="py-16">
        <header><h3 class="text-4xl font-extrabold">Actualités</h3></header>
      </div>
      
      <div id="actuality" class="xl:flex block mx-28">
          <Actuality class="flex-1 mx-2 mt-4" v-for="actuality of news" :key="actuality.id" :my-actuality="actuality" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Nintendo from  '@/components/Nintendo.vue'
import Actuality from '@/components/Actuality.vue'
import axios from 'axios'


export default {
  name: 'Home',
  data () {
    return {
      persons : [],
      news : [],
      actualPerson :{},
    }
  },
  async created () {
    try{
      const myPersons = await axios.get('http://localhost:3000/persons')
      const myNews = await axios.get('http://localhost:3000/news')
      this.persons = myPersons.data
      this.news    = myNews.data
      this.actualPerson = this.persons[0]
   }catch (e){
      console.error(e)
    }
  },
  methods : {
    showPerson (person) {
      const element = document.getElementById(person.id)
      element.style.borderBottom = "solid 2px orange"
      for(let i=0; i<this.persons.length;i++){
        if(this.persons[i].id != person.id){
          document.getElementById(this.persons[i].id).style.borderBottom = "transparent"
        }
      }
      this.actualPerson = person
    },
    activePerson () {
         document.getElementById(this.actualPerson.id).style.borderBottom = "solid 2px orange"
    }
  },
  components: {
   // HelloWorld,
   Nintendo,
   Actuality

  }
}
</script>
<style scoped>
    #nav {
      padding: 30px;
    }

    #nav button {
      font-weight: bold;
      color: #2c3e50;
    }
    #actuality{
      height:600px;
    }
</style>
