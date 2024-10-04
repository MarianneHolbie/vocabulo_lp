<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { isQuizMode } from "./quizStore.js";
    import StatisticsSection from "./StatisticsSection.svelte";

    gsap.registerPlugin(ScrollTrigger);

    let aboutText1, aboutText2, aboutDescription, aboutBox;
    let bgImage1, bgImage2;

    // Reactive statements for content based on quiz mode
    $: quizImage1 = $isQuizMode
        ? "/assets/about/pictureQuiz.png"
        : "/assets/about/phoneKid.png";

    $: quizImage2 = $isQuizMode
        ? "/assets/about/phoneQuiz.png"
        : "/assets/about/pictureKid.png";

    $: boxTitle1 = $isQuizMode
        ? "La première application de quiz"
        : "Rendre les livres jeunesses";

    $: boxTitle2 = $isQuizMode
        ? "pour les personnes sourdes"
        : "accessibles aux enfants sourds";

    $: boxSubtitle = $isQuizMode ? "Vocabul'o Quiz" : "Vocabul'o Kid";

    $: aboutBackground = $isQuizMode
        ? "/assets/about/peopleAppQuiz.png"
        : "/assets/about/peopleAppKid.png";

    $: boxDescription = $isQuizMode
        ? "L'application est conçue spécifiquement pour les personnes sourdes. Vocabul’o vous permet de renforcer votre maîtrise du français. Que vous soyez débutant ou avancé, découvrez des mots nouveaux et révisez ceux déjà appris grâce à un parcours personnalisé."
        : "L'application permet de scanner le texte de livres pour enfants, et de mettre en évidence, dans les phrases, les mots identifiés avec leur signe ou leur définition en LSF. Vous pourrez ensuite, ajouter les mots découverts à votre dictionnaire personalisé. Un code couleur vous donne accés aux fonctions grammaticales des mots.";

    $: boxText = $isQuizMode
        ? "concue pour enrichir votre vocabulaire avec 1991 questions uniques."
        : "Reconnaissance optique de caractères.";

    // Set up animations when component mounts
    onMount(() => {
        const scrollTriggerConfig = {
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            toggleActions: "play reverse play reverse",
        };

        const aboutText1Animation = gsap.fromTo(
            aboutText1,
            { x: -100 },
            {
                x: 0,
                duration: 1,
                scrollTrigger: { ...scrollTriggerConfig, trigger: aboutText1 },
            },
        );

        const aboutText2Animation = gsap.fromTo(
            aboutText2,
            { x: 100 },
            {
                x: 0,
                duration: 1,
                scrollTrigger: { ...scrollTriggerConfig, trigger: aboutText2 },
            },
        );

        const aboutDescriptionAnimation = gsap.fromTo(
            aboutDescription,
            { y: 100 },
            {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    ...scrollTriggerConfig,
                    trigger: aboutDescription,
                },
            },
        );

        const aboutBoxAnimation = gsap.fromTo(
            aboutBox,
            { y: 100 },
            {
                y: 0,
                duration: 1,
                scrollTrigger: { ...scrollTriggerConfig, trigger: aboutBox },
            },
        );

        const bgImage1Animation = gsap.fromTo(
            bgImage1,
            { y: 0 },
            {
                y: -20,
                ease: "none",
                scrollTrigger: { ...scrollTriggerConfig, trigger: aboutText1 },
            },
        );

        const bgImage2Animation = gsap.fromTo(
            bgImage2,
            { y: 0 },
            {
                y: -20,
                ease: "none",
                scrollTrigger: { ...scrollTriggerConfig, trigger: aboutText2 },
            },
        );

        return () => {
            // Cleanup animations
            [
                aboutText1Animation,
                aboutText2Animation,
                aboutDescriptionAnimation,
                aboutBoxAnimation,
                bgImage1Animation,
                bgImage2Animation,
            ].forEach((animation) => animation.kill());
        };
    });
</script>

<section
    class="about h-auto flex bg-gray-100 flex-col justify-center items-center py-40"
    style="border-radius: 42px"
>
    <div class="w-full sm:w-5/6 text-center">
        <h2 class="text-4xl font-bold text-center mb-12">À propos</h2>

        <!-- First text block with background image -->
        <div
            bind:this={aboutText1}
            class="about-text-1 gap-8 mb-2 items-center justify-center flex text-black relative"
        >
            <div
                bind:this={bgImage1}
                class="bg-image"
                style="background-image: url({quizImage1});"
            ></div>
            <h1 class="text-4xl font-bold text-left relative z-10">
                {boxTitle1}
            </h1>
        </div>

        <!-- Second text block with background image -->
        <div
            bind:this={aboutText2}
            class="about-text-2 gap-8 flex items-center justify-center text-black relative"
        >
            <h1 class="text-4xl text-right font-bold relative z-10">
                {boxTitle2}
            </h1>
            <div
                bind:this={bgImage2}
                class="bg-image"
                style="background-image: url({quizImage2});"
            ></div>
        </div>

        <div
            bind:this={aboutDescription}
            class="flex justify-center about-description text-black p-10"
        >
            <p class="sm:w-2/3">{boxDescription}</p>
        </div>

        <div
            bind:this={aboutBox}
            class="content-end text-right p-5 shadow-text text-white rounded-xl h-96 w-full mb-5"
            style="scale: 0.95; background-image: url({aboutBackground}); background-size: cover; background-position: center;"
        >
            <h1 class="text-3xl font-semibold">{boxSubtitle}</h1>
            <p>{boxText}</p>
        </div>
    </div>
    <!-- Statistics section component -->
    <StatisticsSection />
</section>

<style>
    .about-text-1,
    .about-text-2 {
        position: relative;
    }

    .bg-image {
        width: 120px;
        height: 50px;
        border-radius: 50px;
        background-size: cover;
        background-position: center;
        position: relative;
        overflow: hidden;
    }

    .bg-image::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: inherit;
        background-size: cover;
        background-position: center;
        background-attachment: local;
    }
    .shadow-text {
        text-shadow: 1px 0 10px rgba(0, 0, 0, 0.6);
    }
</style>
