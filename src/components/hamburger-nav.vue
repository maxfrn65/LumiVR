<template>
  <nav class="fixed top-0  left-0 w-full z-10 flex flex-wrap items-center justify-between p-5 gap-5 bg-black border-2 border-white/10 rounded-2xl">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4">
        <img src="./logo.png" class="w-12" alt="Logo de LumiVR">
        <h3 class="font-bold leading-relaxed  mr-4 py-2 whitespace-nowrap uppercase text-white" href="#">
          LumiVR
        </h3>
        <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg></i></button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow flex flex-col">
        <nav class="p-8">
          <div class="flex flex-col gap-3">
            <AsideNavLink text="À propos de LumiVR" url="#a-propos" />
            <AsideNavLink text="Les solutions" url="#solutions" />
            <AsideNavLink text="Les abonnements" url="#abonnements" />
            <AsideNavLink text="Le client" url="#client" />
            <AsideNavLink text="Roadmap" url="#roadmap" />
            <AsideNavLink text="Technologies" url="#technologies" />
            <AsideNavLink text="Financement" url="#financement" />
            <AsideNavLink text="L'équipe" url="#equipe"/>
          </div>
        </nav>
        <div class="flex flex-col gap-7 border-2 border-white/10 p-8 rounded-[0.625rem]">
          <h3>Participez au projet</h3>
          <div class="flex flex-col gap-4">
            <div class="flex gap-2.5 items-center w-full">
              <NumberInput /><span>€</span>
            </div>
            <div class="flex flex-col gap-4">
              <ButtonM text="Faire un don" onclick="modal_dons_1.showModal()"/>
              <ALink text="Voir les contreparties" onclick="modal_contreparties_1.showModal()" />
            </div>
            <dialog id="modal_contreparties_1" class="modal modal-bottom sm:modal-middle">
              <div class="modal-box h-fit p-5 gap-5 bg-black border-2 border-white/10 rounded-2xl">
                <h3>Vos contreparties !</h3>
                <div class="space-y-2 flex flex-col gap-2.5 mt-8">
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit flex justify-start items-center">
                      <span class="text-white text-lg font-bold me-2">5€</span>
                    </div>
                    <span class="text-white/80">Accès au coulisse d'un concert de votre choix avec une consommation offerte (soft ou bière)</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit flex justify-start items-center">
                      <span class="text-white text-lg font-bold me-2">10€</span>
                    </div>
                    <span class="text-white/80">Une place de musée</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit flex justify-start items-center">
                      <span class="text-white text-lg font-bold me-2">25€</span>
                    </div>
                    <span class="text-white/80">T-shirt avec le brodage "LumiVR"</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit flex justify-start items-center">
                      <span class="text-white text-lg font-bold me-2">45€</span>
                    </div>
                    <span class="text-white/80">Une place en carrée d'Or d'un concert de votre choix avec une consommation offerte (soft ou bière)</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit flex justify-start items-center">
                      <span class="text-white text-lg font-bold me-2">75€</span>
                    </div>
                    <span class="text-white/80">Une place à l'opéra Garnier pour la représentation de votre choix avec une consommation offerte (soft ou bière)</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit flex justify-start items-center">
                      <span class="text-white text-lg font-bold me-2">100€</span>
                    </div>
                    <span class="text-white/80">Une place en carrée d'Or d'un concert de votre choix et le sweat avec le brodage "LumiVR"</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit flex justify-start items-center">
                      <span class="text-white text-lg font-bold me-2">200€</span>
                    </div>
                    <span class="text-white/80">Un accès en avant première niveau 1 "LumiVR"</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit flex justify-start items-center">
                      <span class="text-white text-lg font-bold me-2">500€</span>
                    </div>
                    <span class="text-white/80">Un accès en avant première niveau 1 "LumiVR" avec un casque Meta quest 3 </span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit flex justify-start items-center">
                      <span class="text-white text-lg font-bold me-2">800€</span>
                    </div>
                    <span class="text-white/80">Full Madness Comfort Pass à Tomorrowland (Accès à Tomorrowland + accès à toutes les zones Comfort pour 1 week-end)</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit flex justify-start items-center">
                      <span class="text-white text-lg font-bold me-2">1500€</span>
                    </div>
                    <span class="text-white/80">Un accès en avant première niveau 2 "LumiVR" avec un casque Meta quest 3 </span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit flex justify-start items-center">
                      <span class="text-white text-lg font-bold me-2">2000€</span>
                    </div>
                    <span class="text-white/80">Un accès en avant première niveau 2 "LumiVR" avec une journée de formation sur le pupitre d'éclairage de votre choix (GrandMA, Chamsys ...) et un casque Meta quest 3 </span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit flex justify-start items-center">
                      <span class="text-white text-lg font-bold me-2">6000€</span>
                    </div>
                    <span class="text-white/80">Un accès en avant première niveau 3 "LumiVR" avec une semaine de formation sur le pupitre d'éclairage de votre choix (GrandMA, Chamsys ...) et un casque Meta quest 3 </span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit flex justify-start items-center">
                      <span class="text-white text-lg font-bold me-2">22000€</span>
                    </div>
                    <span class="text-white/80">Un accès en avant première niveau 3 "LumiVR", une journée de formation sur le pupitre d'éclairage de votre choix (GrandMA, Chamsys ...), un Fader Wing ou Programmer Wing de la marque de votre choix et un casque Meta quest 3 </span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit flex justify-center items-center">
                      <span class="text-white text-bold me-2">85000€</span>
                      <ArrowRight size="18"/>
                    </div>
                    <span class="text-white/80">Un accès en avant première niveau 3 "LumiVR", une semaine de formation sur le pupitre d'éclairage de votre choix (GrandMA, Chamsys ...), un pupitre d'éclairage DMX lite de la marque de votre choix et un casque Meta quest 3 </span>
                  </div>
                </div>
                <div class="modal-action">
                  <form method="dialog">
                    <button class=" opacity-100 px-6 py-4 backdrop-blur-sm bg-white/10 border-[0.5px] border-white/30 rounded-full hover:bg-white/20 transition-all active:bg-white/10 w-fit">Fermer</button>
                  </form>
                </div>
              </div>
            </dialog>
            <dialog id="modal_dons_1" class="modal modal-bottom sm:modal-middle">
              <div class="modal-box h-fit p-5 gap-5 bg-black border-2 border-white/10 rounded-2xl">
                <h3>Merci pour votre participation !</h3>
                <div class="modal-action">
                  <form method="dialog">
                    <button class=" opacity-100 px-6 py-4 backdrop-blur-sm bg-white/10 border-[0.5px] border-white/30 rounded-full hover:bg-white/20 transition-all active:bg-white/10 w-fit">Fermer</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import AsideNavLink from './aside-nav-link.vue';
import ALink from './a-link.vue';
import NumberInput from './inputs/number-input.vue';
import ButtonM from './button-m.vue';

const showMenu = ref(false);

const toggleNavbar = () => {
  showMenu.value = !showMenu.value;
};
</script>
