<template>
  <div class="hero flex flex-col h-screen bg-[url('assets/hero.png')] bg-cover">
    <header class="flex items-center gap-6 py-12 px-32">
      <img src="../src/assets/logo.png" class="w-12" alt="Logo de LumiVR">
      <h3 class="text-white">LumiVR</h3>
    </header>
    <div class="h-full flex items-center justify-center">
      <div class="h-fit flex justify-between items-center flex-col gap-10">
        <h1>Gérez vos lumières — vivez la scène.</h1>
        <img class="h-7" src="../src/assets/asterisk.svg" alt="">
        <ButtonM class="w-fit" text="Découvrez LumiVR" />
        <h3>Un projet MMI réalisé par Erwan Couturier, Adrien Guillemot et Maxime Fourna.</h3>
      </div>
    </div>
  </div>
  <div class="flex flex-col pt-24 gap-24 bg-[#000]">
    <div class="flex columns-2 px-48 gap-8">
      <div class="w-2/3">
        <h1>Donnez vie à votre idée de conception de lumière.</h1>
      </div>
      <aside class="w-1/3">
        <div class="flex flex-col gap-7">
          <nav class="flex flex-col gap-5 border-2 border-white/10 p-8 rounded-[0.625rem]">
            <h3>Sommaire</h3>
            <div class="flex flex-col gap-3">
              <AsideNavLink text="À propos de LumiVR" />
              <AsideNavLink text="Les solutions" />
              <AsideNavLink text="Roadmap" />
              <AsideNavLink text="Financement" />
              <AsideNavLink text="L'équipe" />
            </div>
          </nav>
          <div class="flex flex-col gap-7 border-2 border-white/10 p-8 rounded-[0.625rem]">
            <h3>Participez au projet</h3>
            <div class="flex flex-col gap-4">
              <div class="flex gap-2.5 items-center w-full">
                <NumberInput /><span>€</span>
              </div>
              <div class="flex flex-col gap-4">
                <ButtonM url="#" text="Faire un don" />
                <ALink text="Voir les contreparties" />
              </div>
            </div>
          </div>
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
import AsideNavLink from "@/components/aside-nav-link.vue";
import NumberInput from "@/components/inputs/number-input.vue";
import ALink from "@/components/a-link.vue";
</script>
