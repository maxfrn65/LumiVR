<template>
  <div class="hero flex flex-col h-screen bg-[url('assets/hero.png')] bg-cover">
    <header class="flex items-center gap-6 py-12 px-32">
      <img src="../src/assets/logo.png" class="w-12" alt="Logo de LumiVR">
      <h3 class="text-white">LumiVR</h3>
    </header>
    <div class="h-full flex items-center justify-center">
      <div>
        <h1>Gérez vos lumières — vivez la scène.</h1>
        <img src="../src/assets/asterisk.svg" alt="">
        <ButtonM text="Découvrez LumiVR" />
        <h3>Un projet MMI réalisé par Erwan Couturier, Adrien Guillemot et Maxime Fourna.</h3>
      </div>
    </div>
  </div>
  <div class="flex flex-col pt-24 gap-24 bg-black">
    <div class="flex columns-2 h-96 px-48 gap-8">
      <div class="w-2/3">
        <h1>Donnez vie à votre idée de conception de lumière.</h1>
      </div>
      <aside class="w-1/3">
        <div>
          <nav class="flex flex-col gap-5 border-2 border-white/10 p-8 rounded-[0.625rem]">
            <h3>Sommaire</h3>
            <div class="flex flex-col gap-3">
              <div class="flex items-center gap-2.5">
                <img class="w-6 aspect-auto" src="../src/assets/asterisk.svg" alt=""><h3><a href="#">À propos de LumiVR</a></h3>
              </div>
              <div class="flex items-center gap-2.5">
                <img class="w-6 aspect-auto" src="../src/assets/asterisk.svg" alt=""><h3><a href="#">Les solutions</a></h3>
              </div>
              <div class="flex items-center gap-2.5">
                <img class="w-6 aspect-auto" src="../src/assets/asterisk.svg" alt=""><h3><a href="#">Roadmap</a></h3>
              </div>
              <div class="flex items-center gap-2.5">
                <img class="w-6 aspect-auto" src="../src/assets/asterisk.svg" alt=""><h3><a href="#">Financement</a></h3>
              </div>
              <div class="flex items-center gap-2.5">
                <img class="w-6 aspect-auto" src="../src/assets/asterisk.svg" alt=""><h3><a href="#">L'équipe</a></h3>
              </div>
            </div>
          </nav>
          <div></div>
        </div>
      </aside>
    </div>
    <div>
      <hr class="w-full">
    </div>
    <footer class="bg-fuchsia-200 h-32"></footer>
  </div>
</template>

<script setup>

import ButtonM from "@/components/button-m.vue";
</script>
