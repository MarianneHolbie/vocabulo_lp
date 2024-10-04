<script>
    // Import necessary functions and libraries
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { isQuizMode } from "./quizStore.js";

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // References to DOM elements
    let infoSection1;
    let infoLeftColumn1, infoRightColumn1, infoSubColumns1;

    // Reactive statement to set background image based on quiz mode
    $: backgroundImage = $isQuizMode
        ? "assets/info/infoSectionKid.png"
        : "assets/info/infoSectionKid.png";

    // Set up animations when component mounts
    onMount(() => {
        // Animate left column
        gsap.from(infoLeftColumn1, {
            x: -100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: infoSection1,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        });

        // Animate right column
        gsap.from(infoRightColumn1, {
            x: 100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: infoSection1,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        });

        // Animate sub-columns
        gsap.from(infoSubColumns1.children, {
            y: 50,
            opacity: 0,
            duration: 0.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: infoSubColumns1,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        });
    });
</script>

<!-- Info Section -->
<section
    bind:this={infoSection1}
    style="border-radius: 42px"
    class="bg-gray-100 h-auto flex flex-wrap w-full justify-center items-center py-20"
>
    <div class="w-full sm:w-5/6 flex flex-col sm:flex-row justify-between">
        <!-- Left Column -->
        <div
            bind:this={infoLeftColumn1}
            class="left-column w-full sm:w-2/3 py-5 text-black"
        >
            <h2 class="text-3xl uppercase font-bold mb-6 px-8">
                L'Histoire de Vocabul'o
            </h2>
            <p class="mb-12 w-full sm:w-2/3 px-8">
                Vocabul'o est né d'une prise de conscience profonde des difficultés
                rencontrées par la communauté sourde face à la langue écrite.
                Conscients de cet enjeu et du peu d'outils dédiés, nous avons créé une solution
                innovante, basée sur l'intelligence artificielle,
                pour combler ce fossé linguistique. À travers nos deux applications -
                 Vocabul'o Quiz et Vocabul'o Kid -, nous espérons transmettre la passion des histoires et
                 de la langue écrite à un public qui en est trop souvent éloigné.
            </p>
            <!-- Sub-columns with statistics -->
            <div
                bind:this={infoSubColumns1}
                class="w-full flex flex-col sm:flex-row justify-center items-center sm:items-start gap-8 sm:gap-4"
            >
                <!-- Statistic items -->
                <div
                    class="column-item flex flex-col items-center sm:items-start text-center sm:text-left p-5"
                >
                    <h3 class="text-4xl font-bold uppercase">80%</h3>
                    <p class="mt-2" style="font-size: 12px">
                        Des adultes sourds ont des difficultés avec la lecture.
                    </p>
                </div>
                <div
                    class="column-item flex flex-col items-center sm:items-start text-center sm:text-left p-5"
                >
                    <h3 class="text-4xl font-bold uppercase">80%</h3>
                    <p class="mt-2" style="font-size: 12px">
                        Des enfants sourds en âge de lire sont analphabètes.
                    </p>
                </div>
                <div
                    class="column-item flex flex-col items-center sm:items-start text-center sm:text-left p-5"
                >
                    <h3 class="text-4xl font-bold uppercase">70%</h3>
                    <p class="mt-2 w-2/3" style="font-size: 12px">
                        Des sourds en France peinent à trouver des ressources
                        éducatives.
                    </p>
                </div>
            </div>
        </div>

        <!-- Right Column -->
        <div
            bind:this={infoRightColumn1}
            class="right-column w-full sm:w-1/3 p-5 rounded-xl min-h-[250px] text-center text-white mt-8 sm:mt-0"
            style="min-height: 200px; max-width: 80%; background-image: url({backgroundImage}); background-size: cover; background-position: center;"
        >
            <div class="flex items-center justify-end mb-4">
                <div class="text-12px flex-shrink-0 bg-black">
                    <div class="flex items-center justify-center">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.29999 18.0399V16.8799C5.99999 15.4899 4.10999 12.7799 4.10999 9.89993C4.10999 4.94993 8.65999 1.06993 13.8 2.18993C16.06 2.68993 18.04 4.18993 19.07 6.25993C21.16 10.4599 18.96 14.9199 15.73 16.8699V18.0299C15.73 18.3199 15.84 18.9899 14.77 18.9899H9.25999C8.15999 18.9999 8.29999 18.5699 8.29999 18.0399Z"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M8.5 22C10.79 21.35 13.21 21.35 15.5 22"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <p class="px-5 text-12px bg-black">Histoire</p>
            </div>
        </div>
    </div>
</section>

<style>
    .text-12px {
        font-size: 12px;
        min-height: 30px;
        min-width: 30px;
        line-height: 1;
        align-items: center;
        align-content: center;
        border-radius: 25px;
    }
</style>
