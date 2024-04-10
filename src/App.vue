<template>
  <div class="hero flex flex-col h-screen bg-[url('assets/hero.png')] bg-cover ">
    <header class="flex items-center gap-6 py-12 px-32 max-xl:hidden">
      <img src="../src/assets/logo.png" class="w-12" alt="Logo de LumiVR">
      <h3 class="text-white">LumiVR</h3>
    </header>
    <div class="h-full flex items-center justify-center max-xl:p-5">
      <div class="h-fit flex justify-between items-center flex-col gap-10">
        <h1 class=" max-xl:text-center">Gérez vos lumières — vivez la scène.</h1>
        <img class="h-7" src="../src/assets/asterisk.svg" alt="">
        <ButtonM class="w-fit" text="Découvrez LumiVR" href="#a-propos"/>
        <h3 class="max-xl:text-center">Un projet MMI réalisé par Erwan Couturier, Adrien Guillemot et Maxime Fourna.</h3>
      </div>
    </div>
  </div>
  <hamburger-nav class="max-xl:block xl:hidden"/>
  <div class="flex flex-col pt-24 gap-24 bg-[#000] max-xl:p-5">
    <div class="flex columns-2 px-48 gap-8 max-xl:px-2 max-xl:flex-col">
      <div class="w-3/4 max-xl:w-full">
        <section class="flex flex-col gap-12">
          <h1 class="max-xl:text-left">Donnez vie à votre idée de conception de lumière.</h1>
          <div class="w-full grid grid-cols-4 grid-rows-2 gap-2.5 max-xl:flex max-xl:flex-col">
            <div class="aspect-square max-xl:aspect-auto p-5 flex justify-center flex-col gap-5 bg-white/5 border-2 border-white/10 rounded-2xl">
              <Users size="32"/>
              <h3>Collaborez en temps réel</h3>
            </div>
            <div class="aspect-square max-xl:aspect-auto p-5 flex justify-center flex-col gap-5 bg-white/5 border-2 border-white/10 rounded-2xl">
              <Theater size="32"/>
              <h3>Vivez votre scène.</h3>
            </div>
            <div class="col-span-2 max-xl:aspect-auto col-start-1 p-5 flex justify-center flex-col gap-5 bg-white/5 border-2 border-white/10 rounded-2xl">
              <Sparkles size="32"/>
              <h3>Compatible avec Grand MA Lightning, le logiciel leader pour la gestion de votre scène.</h3>
            </div>
            <div class="max-xl:aspect-square col-span-2 row-span-2 col-start-3 row-start-1 bg-[url('assets/img_01.png')] bg-cover border-2 border-white/10 rounded-2xl">
            </div>
          </div>
        </section>
        <section class="flex flex-col mt-40" id="a-propos">
          <h1>À propos de LumiVR.</h1>
          <h3 class="text-white text-justify mt-12">Comment concevoir une solution de réalité virtuelle qui offre une immersion  dans un show lumière 3D GrandMA, tout en garantissant une synchronisation entre la simulation virtuelle et la console lumière ?</h3>
          <p class="mt-7 text-justify">Nous souhaitons introduire une solution innovante et immersive sur le marché de la conception d'éclairage professionnel. L’'utilisation du logiciel répond au secteur du spectacle vivant, des théatres, de l’événementiel, des installations fixes, et d'autres domaines nécessitant une gestion avancée de l'éclairage.</p>
          <div class="mt-14" id="solutions">
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
                <img class="h-7" src="../src/assets/asterisk.svg" alt="asterick">
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
          <div class="mt-14 flex flex-col gap-7" id="abonnements">
            <h2>Les abonnements.</h2>
            <div class="flex items-center justify-center gap-3 mt-8">
              <h4>Annuel</h4>
              <input type="checkbox" class="toggle-pricing toggle toggle-xl [--tglbg:black] bg-white/20 border-white/20" @change="togglePricing" />
              <h4>Mensuel</h4>
            </div>
            <div id="yearly-pricing" class="grid grid-cols-3 gap-5 max-lg:flex max-lg:flex-col">
              <div class="rounded-xl border-2 border-white/20 flex flex-col gap-5 px-5 py-7 h-fit shadow-card backdrop-blur-2xl">
                <div class="text-center flex flex-col gap-4">
                  <h3 class="text-white">Niveau 1</h3>
                  <h4>600€/an</h4>
                </div>
                <hr>
                <div class="space-y-2 flex flex-col gap-2.5">
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">15 projets max</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Simulation en temps réel en VR</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Intégration avec les consoles d'éclairage</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Création de cues, de transitions et de séquences d'éclairage complexes pour des spectacles</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Accès à la bibliothèque d’assets de niveau 1</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Accès au support technique</span>
                  </div>
                </div>
              </div>
              <div class="rounded-xl border-2 border-white/20 flex flex-col gap-5 px-5 border-yellow-950 shadow-card-selected backdrop-blur-2xl py-7 h-fit">
                <div class="text-center flex flex-col gap-4">
                  <h3 class="text-white">Niveau 2</h3>
                  <h4>1200€/an</h4>
                </div>
                <hr>
                <div class="space-y-2 flex flex-col gap-2.5">
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Toutes les fonctionalités du niveau 1</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Collaboration et gestion de projet</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Support VCS</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Analyse photométrique</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Outils d'édition IA</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Gestion du poids de l'éclairage sur la structure</span>
                  </div>
                </div>
              </div>
              <div class="rounded-xl border-2 border-white/20 flex flex-col gap-5 px-5 py-7 h-fit shadow-card backdrop-blur-2xl">
                <div class="text-center flex flex-col gap-4">
                  <h3 class="text-white">Niveau 3</h3>
                  <h4>3000€/an</h4>
                </div>
                <hr>
                <div class="space-y-2 flex flex-col gap-2.5">
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Toutes les fonctionalités du niveau 1 et 2</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Simulation physique avancée</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Simulation des interaction lumières/matières</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Conception automatique d’éclairage avec IA</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Synchronisation son/lumière</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Analyse de la conception d’énergie</span>
                  </div>
                </div>
              </div>
            </div>
            <div id="monthly-pricing" class="hidden grid-cols-3 gap-5">
              <div class="rounded-xl border-2 border-white/20 flex flex-col gap-5 px-5 py-7 h-fit shadow-card backdrop-blur-2xl">
                <div class="text-center flex flex-col gap-4">
                  <h3 class="text-white">Niveau 1</h3>
                  <h4>65€/mois</h4>
                </div>
                <hr>
                <div class="space-y-2 flex flex-col gap-2.5">
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">15 projets max</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Simulation en temps réel en VR</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Intégration avec les consoles d'éclairage</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Création de cues, de transitions et de séquences d'éclairage complexes pour des spectacles</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Accès à la bibliothèque d’assets de niveau 1</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Accès au support technique</span>
                  </div>
                </div>
              </div>
              <div class="rounded-xl border-2 border-white/20 flex flex-col gap-5 px-5 border-yellow-950 shadow-card-selected backdrop-blur-2xl py-7 h-fit">
                <div class="text-center flex flex-col gap-4">
                  <h3 class="text-white">Niveau 2</h3>
                  <h4>125€/mois</h4>
                </div>
                <hr>
                <div class="space-y-2 flex flex-col gap-2.5">
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Toutes les fonctionalités du niveau 1</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Collaboration et gestion de projet</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Support VCS</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Analyse photométrique</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Outils d'édition IA</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Gestion du poids de l'éclairage sur la structure</span>
                  </div>
                </div>
              </div>
              <div class="rounded-xl border-2 border-white/20 flex flex-col gap-5 px-5 py-7 h-fit shadow-card backdrop-blur-2xl">
                <div class="text-center flex flex-col gap-4">
                  <h3 class="text-white">Niveau 3</h3>
                  <h4>300€/mois</h4>
                </div>
                <hr>
                <div class="space-y-2 flex flex-col gap-2.5">
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Toutes les fonctionalités du niveau 1 et 2</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Simulation physique avancée</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Simulation des interaction lumières/matières</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Conception automatique d’éclairage avec IA</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Synchronisation son/lumière</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <div class="w-fit">
                      <Check size="18"/>
                    </div>
                    <span class="text-white/80">Analyse de la conception d’énergie</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="flex flex-col mt-40" id="client">
          <h1>Le client.</h1>
          <h3 class="text-white text-justify mt-12">SAS HZ Événementiel est un prestataire technique événementiel spécialisé dans la conception et la réalisation d'événements liée au son/éclairage/structure/vidéo.</h3>
          <p class="mt-7 text-justify">Situé au cœur de l’aube (Bréviandes-10), son équipe combine passion, créativité et expertise pour donner vie à des prestations uniques. Ainsi, elle propose des solutions clés en main pour des prestations événementielles ou culturelles.</p>
          <div class="mt-14">
            <div class="pt-8">
              <div class="w-full grid grid-cols-4 grid-rows-2 gap-2.5 max-xl:flex max-xl:flex-col">
                <div class="aspect-square bg-[url('assets/img_02.jpg')] bg-cover p-5 flex flex-col justify-end items-start gap-5 rounded-2xl">
                </div>
                <div class="aspect-square bg-[url('assets/img_05.jpg')] bg-cover p-5 flex flex-col justify-end items-start gap-5 rounded-2xl">
                </div>
                <div class="col-span-2 max-xl:aspect-square col-start-1 p-5 bg-[url('assets/img_03.jpg')] bg-cover flex flex-col justify-end items-start gap-5 rounded-2xl">
                </div>
                <div class="col-span-2 max-xl:aspect-square row-span-2 p-5 col-start-3 row-start-1 bg-[url('assets/img_04.jpg')] flex flex-col justify-end items-start bg-cover rounded-2xl">
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="flex flex-col mt-40" id="roadmap">
          <h1>Roadmap.</h1>
          <h3 class="text-white text-justify mt-12">La roadmap représente nos objectifs et notre avancement à atteindre pour assurer le bon déroulement du projet.</h3>
          <div class="mt-8">
            <ul class="timeline timeline-snap-icon max-xl:timeline-compact timeline-vertical mt-8">
              <li>
                <div class="timeline-middle m-5">
                  <img src="../src/assets/etoile.svg" alt="">
                </div>
                <div class="timeline-start xl:text-end">
                  <h3><time>07/03/2024</time></h3>
                </div>
                <div class="timeline-end xl:text-start mb-10">
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
                <div class="timeline-start xl:text-end xl:hidden">
                  <h3><time>19/03/2024</time></h3>
                </div>
                <div class="timeline-end xl:text-start mb-10 xl:hidden">
                  <div class="h-fit p-8 flex justify-center items-start flex-col items-start gap-5 bg-white/5 border-2 border-white/10 rounded-2xl">
                    <img src="../src/assets/vector_2.svg" alt="">
                    <p>Placement des lumières  sur Unity grâce à des fonctions.
                      Attribution de la même plage IP à Unity et Grandma 3  pour permettre leur communication directe via le Artnet.</p>
                  </div>
                </div>
                <div class="timeline-end xl:text-end max-xl:hidden">
                  <h3><time>19/03/2024</time></h3>
                </div>
                <div class="timeline-start xl:text-start mb-10 max-xl:hidden">
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
                <div class="timeline-start xl:text-end">
                  <h3><time>26/03/2024</time></h3>
                </div>
                <div class="timeline-end xl:text-start mb-10">
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
                <div class="timeline-start xl:text-end xl:hidden">
                  <h3><time>05/04/2024</time></h3>
                </div>
                <div class="timeline-end xl:text-start mb-10 xl:hidden">
                  <div class="h-fit p-8 flex justify-center items-start flex-col items-start gap-5 bg-white/5 border-2 border-white/10 rounded-2xl">
                    <img src="../src/assets/vector_4.svg" alt="">
                    <p>Ajout des modèles 3D ainsi que du système permettant la synchronisation entre GrandMA 3 et Unity.</p>
                  </div>
                </div>
                <div class="timeline-end xl:text-end max-xl:hidden">
                  <h3><time>05/04/2024</time></h3>
                </div>
                <div class="timeline-start xl:text-start mb-10  max-xl:hidden">
                  <div class="h-fit p-8 flex justify-center items-start flex-col items-start gap-5 bg-white/5 border-2 border-white/10 rounded-2xl">
                    <img src="../src/assets/vector_4.svg" alt="">
                    <p>Ajout des modèles 3D ainsi que du système permettant la synchronisation entre GrandMA 3 et Unity.</p>
                  </div>
                </div>
                <hr/>
              </li>
            </ul>
            <div class="mt-8">
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
          <div class="mt-8" id="technologies">
            <h2>Les technologies utilisées.</h2>
            <div>
              <div class="flex justify-start items-center mt-8">
                <img src="../src/assets/logo_unity.png" alt="logo_unity" height="30" width="30">
                <h3 class="ms-3">Unity</h3>
              </div>
              <p class="mt-8">
                Unity est l'outil de choix pour créer l'environnement virtuel qui donne vie aux spectacles lumière conçus avec Grandma3 dans une expérience de réalité virtuelle immersive.<br>
                <br>Grâce à ses fonctionnalités avancées telles que la modélisation 3D, les outils d'animation, les effets visuels et la physique, Unity offre la possibilité de créer des environnements virtuels réalistes et captivants. La restitution de la scène dans Unity s'effectue grâce au parsing des fichiers XML exportés depuis Grandma3.<br>
                <br>Ces fichiers contiennent une multitude d'informations, telles que la configuration des projecteurs, les presets des caractéristiques associées aux appareils, ainsi que les séquences du spectacle. Chaque projecteur est identifié par un ID unique (FID), ce qui permet de retrouver les presets et les séquences qui lui sont associés dans les autres fichiers.<br>
                Une fois ces données récupérées, le processus consiste à créer dynamiquement chaque projecteur et à lui attribuer les informations correspondantes, permettant ainsi de les placer correctement dans la scène virtuelle.
              </p>
              <div class="flex justify-start items-center mt-8">
                <img src="../src/assets/logo_GM3.jpeg" alt="logo_unity" height="30" width="57">
                <h3 class="ms-3">GrandMA 3</h3>
              </div>
              <p class="mt-8">
                GrandMA3 est un logiciel professionnel de contrôle d'éclairage largement utilisé dans l'industrie du spectacle pour construire des spectacles lumière en 3D. Les fichiers XML exportés contiennent des informations essentielles telles que le patch des projecteurs, les presets et les séquences liées à la scène du spectacle.<br>
                <br>Ensuite, le plugin développé pour Unity vient enrichir cette intégration en établissant une communication bidirectionnelle entre Unity et GrandMA3 via le protocole Art-Net. Ce plugin permet à GrandMA3 de fournir des informations en temps réel sur la séquence de la scène, facilitant ainsi la synchronisation et le contrôle des appareils directement depuis l'environnement de développement Unity.
              </p>
            </div>
          </div>
        </section>
        <section class="flex flex-col mt-40" id="financement">
          <h1>Financement du projet.</h1>
          <div class="flex justify-start items-center mt-8">
            <img class="h-7" src="../src/assets/asterisk.svg" alt="asterick">
            <h3 class="ms-3">Lever de fonds entre 50 500 et 120 000€ sur un an.</h3>
          </div>
          <div class="flex justify-start items-center mt-8">
            <img class="h-7" src="../src/assets/asterisk.svg">
            <h3 class="ms-3">Si cet objectif est dépassé nous pourrons même ajouter des fonctionnalités ou embaucher une 4ème personne pour accélérer le développement.</h3>
          </div>
        </section>
        <section class="flex flex-col mt-40" id="equipe">
          <h1>L'équipe.</h1>
          <div class="w-full grid grid-cols-3 grid-rows-1 gap-2.5 px-5 mt-8 max-xl:flex max-xl:flex-col ">
            <div class="aspect-square col-auto row-span-1 bg-[url('assets/img_erwan.jpeg')] bg-cover p-5 flex flex-col justify-end items-start rounded-2xl">
              <h3>Erwan Couturier</h3>
              <p>Chef de projet</p>
            </div>
            <div class="aspect-square col-auto row-span-1 bg-[url('assets/img_maxime.jpeg')] bg-center bg-cover p-5 flex flex-col justify-end items-start rounded-2xl">
              <h3>Maxime Fourna</h3>
              <p>Développeur</p>
            </div>
            <div class="aspect-square col-auto bg-[url('assets/img_adrien.jpeg')] bg-cover p-5 flex flex-col justify-end items-start rounded-2xl">
              <h3>Adrien Guillemot</h3>
              <p>Développeur</p>
            </div>
          </div>
        </section>
        <section class="flex flex-col mt-40" id="contact">
          <div class="h-fit p-8 gap-5 bg-white/5 border-2 border-white/10 rounded-2xl">
            <div class="flex flex-col justify-center items-center">
            <h1 class="max-xl:text-center">Envie d'en savoir plus ?</h1>
              <ButtonM class="w-fit mt-8" text="Contactez-nous !" onclick="modal_contact.showModal()" />
              <dialog id="modal_contact" class="modal modal-bottom sm:modal-middle">
                <div class="modal-box h-fit p-5 gap-5 bg-black border-2 border-white/10 rounded-2xl grid">
                  <label class="input col-auto input-bordered flex items-center gap-2">
                    Nom
                    <input type="text" class="grow" placeholder="William" />
                  </label>
                  <label class="input col-auto input-bordered flex items-center gap-2">
                    Prénom
                    <input type="text" class="grow" placeholder="Turner" />
                  </label>
                  <label class="input col-auto input-bordered flex items-center gap-2">
                    Email
                    <input type="text" class="grow" placeholder="willturner@gmail.com" />
                  </label>
                  <textarea type="text"  class="input-bordered input h-24" placeholder="Votre message ..."></textarea>
                  <div class="modal-action">
                    <form method="dialog">
                      <button class=" opacity-100 px-6 py-4 backdrop-blur-sm bg-white/10 border-[0.5px] border-white/30 rounded-full hover:bg-white/20 transition-all active:bg-white/10 w-fit">Envoyer</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </section>
      </div>
      <aside class="w-1/4 max-xl:hidden">
        <div class="sticky top-5 z-50 overflow-y-auto">
          <div class="flex flex-col gap-7">
            <nav class="flex flex-col gap-5 border-2 border-white/10 p-8 rounded-[0.625rem]">
              <h3>Sommaire</h3>
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
                  <ButtonM text="Faire un don" onclick="modal_dons.showModal()"/>
                  <ALink text="Voir les contreparties" onclick="modal_contreparties.showModal()" />
                </div>
                <dialog id="modal_contreparties" class="modal modal-bottom sm:modal-middle">
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
                            <span class="text-white text-lg font-bold me-2">85000€</span>
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
                <dialog id="modal_dons" class="modal modal-bottom sm:modal-middle">
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
      </aside>
    </div>
    <div class="mt-8 px-48 max-xl:px-0">
      <hr class="w-full">
    </div>
    <footer class="mb-8">
      <div class="flex justify-center items-center h-full flex-col">
        <img src="../src/assets/logo.png" class="w-12" alt="Logo de LumiVR">
        <p class="text-white mt-8">© 2024 LumiVR. Tous droits réservés.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { Users, Theater, Sparkles, Check, ArrowRight } from 'lucide-vue-next';
import ButtonM from "@/components/button-m.vue";
import AsideNavLink from "@/components/aside-nav-link.vue";
import NumberInput from "@/components/inputs/number-input.vue";
import ALink from "@/components/a-link.vue";
import HamburgerNav from "@/components/hamburger-nav.vue";
import {ref, onMounted} from "vue";

const monthlyPricingGrid = ref(null);
const yearlyPricingGrid = ref(null);

onMounted(() => {
  // Récupérez les éléments du DOM après le montage du composant
  monthlyPricingGrid.value = document.getElementById("monthly-pricing");
  yearlyPricingGrid.value = document.getElementById("yearly-pricing");
});

const togglePricing = (event) => {
  const isChecked = event.target.checked;

  if (isChecked) {
    monthlyPricingGrid.value.style.display = "grid";
    yearlyPricingGrid.value.style.display = "none";
  } else {
    monthlyPricingGrid.value.style.display = "none";
    yearlyPricingGrid.value.style.display = "grid";
  }
}

</script>

