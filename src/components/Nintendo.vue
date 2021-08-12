<template>
  <div id="nintendoContainer" class="h-full">
  <div id="subNintendoContainer" class="flex">
    <div id="heleprContainer" class="bg-transparent w-2/5">
    </div>
    <div id="modalContainer" class="w-3/5">
         <div id="modal" class="relative h-screen bg-blue-700 opacity-50">
        </div>
        <div class="md:w-1/2 md:mt-48 w-full text-center absolute top-14 right-0"> 
            <NintendoDescription /> 
        </div>
    </div>
  </div>
  </div>
</template>
<script>
import NintendoDescription from '@/components/NintendoDescription.vue'
export default {
  name: 'Nintendo',
  components : {
    NintendoDescription
  }
}
</script>
<style scoped>
    #nintendoContainer{
        background-image: url('/heros.png'); 
        background-repeat:no-repeat; 
        background-size:contain;   
    }
     #heleprContainer{

      width: 40%;
      border-right: 200px solid rgba(29, 78, 216,0.5);
      border-bottom: 1057px solid transparent;
      box-sizing:border-box;
    }
    #modalContainer{
      width: 60%;
      box-sizing:border-box;
    }
</style>