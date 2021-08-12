<template>
     <div>
        <div id="elementContainer" class="my-64  font-sans ml-24 md:text:center text-left">
            <h1 class="text-5xl text-white md:text-left text-center">NINTENDO!</h1><br><br>
            <h3 class="text-2xl text-white md:text-left text-center" >LA PASSION DE GEEKER, MAIS PAS TROP.</h3><br><br>
            <p class="text-white text-lg md:text-left text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
                Cras in magna arcu. Pellentesque habitant morbi tristique <br>
                senectus et netus et malesuada fames ac turpis egestas. <br>
                Curabitur mollis a ex quis tempor.
            </p>
           <router-link to="/games"><button class="btn btn-orange">  <div class="flex"><div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg></div><div>DECOUVREZ NOS JEUX</div></div></button></router-link>
        </div>
        </div>
</template>
<script>
    export default {
        name : 'NintendoDescription'
    }
</script>
<style scoped>
  .btn {
    @apply font-bold py-2 px-4 my-10 w-64 h-12 lg:ml-12 ml-24 ;
  }
  .btn-orange {
    @apply bg-yellow-500 text-white;
  }
  .btn-orange:hover {
    @apply bg-yellow-600;
  }
</style>