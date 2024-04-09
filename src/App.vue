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
        <section class="flex flex-col gap-12">
          <h1>Donnez vie à votre idée de conception de lumière.</h1>
          <div class="w-full grid grid-cols-4 grid-rows-2 gap-2.5">
            <div class="aspect-square p-5 flex justify-center flex-col gap-5 bg-white/5 border-2 border-white/10 rounded-2xl">
              <Users size="32"/>
              <h3>Collaborez en temps réel</h3>
            </div>
            <div class="aspect-square p-5 flex justify-center flex-col gap-5 bg-white/5 border-2 border-white/10 rounded-2xl">
              <Theater size="32"/>
              <h3>Vivez votre scène.</h3>
            </div>
            <div class="col-span-2 col-start-1 p-5 flex justify-center flex-col gap-5 bg-white/5 border-2 border-white/10 rounded-2xl">
              <Sparkles size="32"/>
              <h3>Compatible avec Grand MA Lightning, le logiciel leader pour la gestion de votre scène.</h3>
            </div>
            <div class="col-span-2 row-span-2 col-start-3 row-start-1 bg-[url('assets/img_01.png')] bg-cover border-2 border-white/10 rounded-2xl">
            </div>
          </div>
        </section>
        
        <section class="flex flex-col mt-40">
          <h1>À propos de LumiVR.</h1>
          <h3 class="text-white text-justify mt-12">Comment concevoir une solution de réalité virtuelle qui offre une immersion  dans un show lumière 3D GrandMA, tout en garantissant une synchronisation entre la simulation virtuelle et la console lumière ?</h3>
          <p class="mt-7 text-justify">Nous souhaitons introduire une solution innovante et immersive sur le marché de la conception d'éclairage professionnel. L’'utilisation du logiciel répond au secteur du spectacle vivant, des théatres, de l’événementiel, des installations fixes, et d'autres domaines nécessitant une gestion avancée de l'éclairage.</p>
          <div class="mt-14">
            <h2>Les solutions.</h2>
            <div class="pt-8">
              <div class="flex flex-row items-center">
                <img class="h-7" src="../src/assets/asterisk.svg" alt="">
                <p class="ps-5 text-justify">Offrir une interface immersive permettant d’ajuster en temps réel les caractéristiques d’un show lumière dans un environnement de réalité virtuel.</p>
              </div>
              <div class="my-5">
                <hr class="w-full">
              </div>
              <div class="flex flex-row items-center">
                <img class="h-7" src="../src/assets/asterisk.svg" alt="">
                <p class="ps-5 text-justify">Offrir une interface immersive permettant d’ajuster en temps réel les caractéristiques d’un show lumière dans un environnement de réalité virtuel.</p>
              </div>
              <div class="my-5">
                <hr class="w-full">
              </div>
              <div class="flex flex-row items-center">
                <img class="h-7" src="../src/assets/asterisk.svg" alt="">
                <p class="ps-5 text-justify">Les éclairagistes peuvent prévisualiser de manière réaliste et détaillée le show qu’ils conçoivent avant même le début de la production, réduisant ainsi les imprévus et optimisant le processus de mise en scène.</p>
              </div>
              <div class="my-5">
                <hr class="w-full">
              </div>
              <div class="flex flex-row items-center">
                <img class="h-7" src="../src/assets/asterisk.svg" alt="">
                <p class="ps-5 text-justify">Permet la collaboration à plusieurs dans même environnement virtuel et de faciliter la gestion du projet grâce au VCS, afin de créer des shows lumière complexes.</p>
              </div>
              <div class="my-5">
                <hr class="w-full">
              </div>
              <div class="flex flex-row items-center">
                <img class="h-7" src="../src/assets/asterisk.svg" alt="">
                <p class="ps-5 text-justify">Compatibilité matérielle étendue à la plupart des consoles de pupitrage (GrandMA Lightning, ChamSys ...).</p>
              </div>
              <div class="my-5">
                <hr class="w-full">
              </div>
              <div class="flex flex-row items-center">
                <img class="h-7" src="../src/assets/asterisk.svg" alt="asterick">
                <p class="ps-5 text-justify">Technologie disponible sur les casques Meta quest 2&3 mais a terme, nous souhaitons prendre en charge la majorité des casques de VR.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="flex flex-col mt-40">
          <h1>Le client.</h1>
          <h3 class="text-white text-justify mt-12">SAS HZ Événementiel est un prestataire technique événementiel spécialisé dans la conception et la réalisation d'événements liée au son/éclairage/structure/vidéo.</h3>
          <p class="mt-7 text-justify">Situé au cœur de l’aube (Bréviandes-10), son équipe combine passion, créativité et expertise pour donner vie à des prestations uniques. Ainsi, elle propose des solutions clés en main pour des prestations événementielles ou culturelles.</p>
          <div class="mt-14">
            <div class="pt-8">
              <div class="w-full grid grid-cols-4 grid-rows-2 gap-2.5">
                <div class="aspect-square bg-[url('assets/img_02.jpg')] bg-cover p-5 flex flex-col justify-end items-start gap-5 bg-white/5 border-2 border-white/10 rounded-2xl">
                </div>
                <div class="aspect-square bg-[url('assets/img_05.jpg')] bg-cover p-5 flex flex-col justify-end items-start gap-5 bg-white/5 border-2 border-white/10 rounded-2xl">
                </div>
                <div class="col-span-2 col-start-1 p-5 bg-[url('assets/img_03.jpg')] bg-cover flex flex-col justify-end items-start gap-5 bg-white/5 border-2 border-white/10 rounded-2xl">
                </div>
                <div class="col-span-2 row-span-2 p-5 col-start-3 row-start-1 bg-[url('assets/img_04.jpg')] flex flex-col justify-end items-start bg-cover border-2 border-white/10 rounded-2xl">
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="flex flex-col mt-40">
          <h1>Roadmap.</h1>
          <h3 class="text-white text-justify mt-12">La roadmap représente nos objectifs et notre avancement à atteindre pour assurer le bon déroulement du projet.</h3>
          <div class="mt-14">
            <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-8">
              <li>
                <div class="timeline-middle m-5">
                  <img src="../src/assets/etoile.svg" alt="">
                </div>
                <div class="timeline-start md:text-end">
                  <h3><time>07/03/2024</time></h3>
                </div>
                <div class="timeline-end md:text-start mb-10">
                  <div class="h-fit p-8 flex justify-center items-start flex-col items-start gap-5 bg-white/5 border-2 border-white/10 rounded-2xl">
                    <img src="../src/assets/vector_1.svg" alt="">
                    <p>Récupération des XML extraient d’un show GrandMA3. Parsing du XML en C# pour extraire les données. Modification d’un plugin DMX/Artnet Unity.</p>
                  </div>
                </div>
                <hr/>
              </li>
              <li>
                <div class="timeline-middle m-5">
                  <img src="../src/assets/etoile.svg" alt="">
                </div>
                <div class="timeline-end md:text-end">
                  <h3><time>19/03/2024</time></h3>
                </div>
                <div class="timeline-start md:text-start mb-10">
                  <div class="h-fit p-8 flex justify-center items-start flex-col items-start gap-5 bg-white/5 border-2 border-white/10 rounded-2xl">
                    <img src="../src/assets/vector_2.svg" alt="">
                    <p>Placement des lumières  sur Unity grâce à des fonctions.
                      Attribution de la même plage IP à Unity et Grandma 3  pour permettre leur communication directe via le Artnet.</p>
                  </div>
                </div>
                <hr/>
              </li>
              <li>
                <div class="timeline-middle m-5">
                  <img src="../src/assets/etoile.svg" alt="">
                </div>
                <div class="timeline-start md:text-end">
                  <h3><time>26/03/2024</time></h3>
                </div>
                <div class="timeline-end md:text-start mb-10">
                  <div class="h-fit p-8 flex justify-center items-start flex-col items-start gap-5 bg-white/5 border-2 border-white/10 rounded-2xl">
                    <img src="../src/assets/vector_3.svg" alt="">
                    <p>Ajout des mouvements simples (tilt/pan) et animations des lumières.</p>
                  </div>
                </div>
                <hr/>
              </li>

              <li>
                <div class="timeline-middle m-5">
                  <img src="../src/assets/etoile.svg" alt="">
                </div>
                <div class="timeline-end md:text-end">
                  <h3><time>05/04/2024</time></h3>
                </div>
                <div class="timeline-start md:text-start mb-10">
                  <div class="h-fit p-8 flex justify-center items-start flex-col items-start gap-5 bg-white/5 border-2 border-white/10 rounded-2xl">
                    <img src="../src/assets/vector_4.svg" alt="">
                    <p>Ajout des modèles 3D ainsi que du système permettant la synchronisation entre GrandMA 3 et Unity.</p>
                  </div>
                </div>
                <hr/>
              </li>
            </ul>
            <div class="mt-14">
              <div class="pt-8">
                <div class="pt-8">
                  <img src="../src/assets/img_07.png" alt="" class="rounded-2xl">
                  <div class="p-5">
                    <p>Rendu d'un parsing de fichier XML sur Unity</p>
                  </div>
                </div>
                <div class="pt-8">
                  <img src="../src/assets/img_08.jpg" alt="" class="rounded-2xl">
                  <div class="p-5">
                    <p>Show 3D sur GrandMA 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
import { Users, Theater, Sparkles} from 'lucide-vue-next';
import ButtonM from "@/components/button-m.vue";
import AsideNavLink from "@/components/aside-nav-link.vue";
import NumberInput from "@/components/inputs/number-input.vue";
import ALink from "@/components/a-link.vue";
</script>

