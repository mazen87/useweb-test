<template>
  <div class="actuality">
  <div class="z-10 relative">
   <img alt="actuality logo" class="z-10" v-bind:src="myActuality.image">
  </div>
         
          <div id="actualityContent" class="z-20 bg-white p-12 text-left md:w-auto -mt-16 z-20 relative">
            <h6 class="mb-2 text-sm">{{myActuality.detail}}</h6>
            <h4 class="font-bold text-2xl mb-2">{{myActuality.title}}</h4>
            <p class="mb-12">{{myActuality.description}}</p>
            <router-link v-bind:to="'/new/'+myActuality.id" class="btn btn-orange">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 m-auto mt-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
            </router-link>
          </div>
  </div>
</template>
<script>
    export default {
        name : 'Actuality',
        props: {
            myActuality: {}
        },
    }
</script>
<style scoped>
    img{
        height:350px;
        width:110%
    }
    #actualityContent{
        width:90%;
    }
    .btn {
     @apply font-bold  w-20 h-20 mb-0 bottom-0 right-0 absolute;
    }
    .btn-orange {
    @apply bg-yellow-500 text-white;
    }
    .btn-orange:hover {
    @apply bg-yellow-600;
    }

</style>
