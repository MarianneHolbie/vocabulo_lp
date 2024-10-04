<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { isQuizMode } from "./quizStore.js";

    // Register ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Declare variables for each column to be animated
    let column1, column2, column3, column4, column5;

    // Reactive declarations for content that changes based on quiz mode
    $: sectionTitle = $isQuizMode
        ? "Statistiques Quiz"
        : "Statistiques Vocabul'o Kid";
    $: colNumb1 = $isQuizMode ? "5" : "+500";
    $: colText1 = $isQuizMode ? "Quiz" : "Livres analysés";
    $: colNumb2 = $isQuizMode ? "34 000" : "34 000";
    $: colText2 = $isQuizMode ? "Définitions LSF" : "Définitions LSF";
    $: colNumb3 = $isQuizMode ? "27 076" : "27 076";
    $: colText3 = $isQuizMode ? "Signes" : "Signes";
    $: colNumb4 = $isQuizMode ? "14" : "84 %";
    $: colText4 = $isQuizMode ? "Catégories" : "Précision OCR";
    $: colNumb5 = $isQuizMode ? "71" : "10";
    $: colText5 = $isQuizMode ? "Sous-catégories" : "Catégories grammatical";

    // Lifecycle function to set up animations when the component is mounted
    onMount(() => {
        // Set initial state of columns (invisible and moved down)
        gsap.set([column1, column2, column3, column4, column5], {
            autoAlpha: 0,
            y: 50,
        });

        // Create a timeline for the animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".statistics-section",
                start: "top center",
                end: "bottom center",
                toggleActions: "play reverse play reverse",
                scrub: 1,
            },
        });

        // Animate columns to fade in and move up
        tl.to([column1, column2, column3, column4, column5], {
            duration: 0.6,
            autoAlpha: 1,
            y: 0,
            ease: "power3.out",
            stagger: 0.1,
        });
    });
</script>

<!-- Main container for the statistics section -->
<section class="statistics-section w-full flex justify-center items-center">
    <div
        class="w-full max-w-5l px-4 flex flex-wrap justify-center items-stretch gap-4"
    >
        <!-- Column 1 -->
        <div
            bind:this={column1}
            class="column w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-5 bg-white rounded-xl text-black text-center mb-4 flex flex-col justify-center"
        >
            <h2 class="text-4xl font-bold">{colNumb1}</h2>
            <p class="mt-2 text-lg">{colText1}</p>
        </div>
        <!-- Column 2 -->
        <div
            bind:this={column2}
            class="column w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-5 bg-white rounded-xl text-black text-center mb-4 flex flex-col justify-center"
        >
            <h2 class="text-4xl font-bold">{colNumb2}</h2>
            <p class="mt-2 text-lg">{colText2}</p>
        </div>
        <!-- Column 3 -->
        <div
            bind:this={column3}
            class="column w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-5 bg-white rounded-xl text-black text-center mb-4 flex flex-col justify-center"
        >
            <h2 class="text-4xl font-bold">{colNumb3}</h2>
            <p class="mt-2 text-lg">{colText3}</p>
        </div>
        <!-- Column 4 -->
        <div
            bind:this={column4}
            class="column w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-5 bg-white rounded-xl text-black text-center mb-4 flex flex-col justify-center"
        >
            <h2 class="text-4xl font-bold">{colNumb4}</h2>
            <p class="mt-2 text-lg">{colText4}</p>
        </div>
        <!-- Column 5 -->
        <div
            bind:this={column5}
            class="column w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-5 bg-white rounded-xl text-black text-center mb-4 flex flex-col justify-center"
        >
            <h2 class="text-4xl font-bold">{colNumb5}</h2>
            <p class="mt-2 text-lg">{colText5}</p>
        </div>
    </div>
</section>

<style>
    /* Styles for the statistics section */
    .statistics-section {
        display: flex;
        align-items: center;
    }

    /* Set a minimum height for the columns */
    .column {
        min-height: 200px;
    }

    /* Responsive styles for smaller screens */
    @media (max-width: 640px) {
        .column {
            min-height: 150px;
        }
    }
</style>
