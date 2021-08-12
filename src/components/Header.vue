<template>
  <div class="md-block h-16 md:flex md:h-22 2xl:mb-0 xl:mb-0 lg:mb-0  md:mb-0 mb-40 ">
    <div class="flex-1 py-2" >
        <router-link to="/"><img alt="app logo" class="h-16 ml-8 md:w-2/6 block" src="../assets/nintendo.png"></router-link> 
    </div>
    <div class="flex-1 text-right py-3 mx-20 px-20 text-lg font-light md:text-center 2xl:text-right">
        <router-link to="/games" class="md:inline block"><span class="font-light italic mx-12">Jeux</span></router-link> 
        <router-link to="/consoles" class="md:inline block"><span class="font-light italic mx-12">Consoles</span></router-link>
        <router-link to="/news" class="block md:inline"><span class="font-light italic mx-12">News</span></router-link>  
    </div>
  </div>
</template>