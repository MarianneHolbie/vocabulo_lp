<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { isQuizMode } from "./quizStore.js";

    gsap.registerPlugin(ScrollTrigger);

    // References to DOM elements
    let column1, column2, column3;
    let phone1, phone2;
    let switchButton;
    let logo, title, description;
    let bgImage1, bgImage3;

    // Define text content for Quiz and Kid modes
    const QUIZ_TEXTS = {
        title: "Vocabul'o Quiz",
        column1: "Quiz personnalisé",
        column2:
            "est une plateforme d'apprentissage qui combine la méthode des répétitions espacées et un système de recommendation personnalisée des mots pour favoriser la progression de l'utilisateur.",
        column3: "Divers thèmes",
    };

    const KID_TEXTS = {
        title: "Vocabul'o Kid",
        column1: "Mot adapté",
        column2:
            "Capturez un texte d'un livre pour enfant et l'application identifie les mots, les relie à la base de données et vous propose leurs définitions dans le dictionnaire.",
        column3: " ",
    };

    // Reactive statements to set content and images based on quiz mode
    $: texts = $isQuizMode ? QUIZ_TEXTS : KID_TEXTS;
    $: backgroundImage1 = $isQuizMode
        ? "/assets/category/pictureQuiz.png"
        : "/assets/category/phoneKid.png";
    $: backgroundImage3 = $isQuizMode
        ? "/assets/category/phoneQuiz.png"
        : "/assets/category/pictureKid.png";
    $: logoIcon = $isQuizMode
        ? "/assets/category/logoQuiz.png"
        : "/assets/category/logoKid.png";
    $: buttonText = $isQuizMode ? "Vocabul'o Kid" : "Vocabul'o Quiz";

    function toggleMode() {
        isQuizMode.update((mode) => !mode);

        // Smooth animation for text and logo
        gsap.to([logo, title, description], {
            opacity: 0,
            y: -10,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.inOut",
            onComplete: () => {
                gsap.to([logo, title, description], {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.inOut",
                });
            },
        });

        // Smooth cross-fade animation for background images
        gsap.to(bgImage1, {
            opacity: 0,
            scale: 1.05,
            duration: 0.7,
            ease: "power2.inOut",
            onComplete: () => {
                gsap.set(bgImage1, {
                    backgroundImage: `url(${backgroundImage1})`,
                });
                gsap.to(bgImage1, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.7,
                    ease: "power2.inOut",
                });
            },
        });

        gsap.to(bgImage3, {
            opacity: 0,
            scale: 1.05,
            duration: 0.7,
            ease: "power2.inOut",
            onComplete: () => {
                gsap.set(bgImage3, {
                    backgroundImage: `url(${backgroundImage3})`,
                });
                gsap.to(bgImage3, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.7,
                    ease: "power2.inOut",
                });
            },
        });
    }

    // Set up animations when component mounts
    onMount(() => {
        gsap.set([column1, column2, column3], { autoAlpha: 0 });
        gsap.set(column1, { x: -100 });
        gsap.set(column2, { y: 100 });
        gsap.set(column3, { x: 100 });

        // Create a timeline for scroll-triggered animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".categories",
                start: "top center",
                end: "bottom center",
                toggleActions: "play reverse play reverse",
                scrub: 1,
            },
        });

        // Add animations to the timeline
        tl.to([column1, column2, column3], {
            duration: 0.6,
            autoAlpha: 1,
            x: 0,
            y: 0,
            ease: "power3.out",
            stagger: 0,
        }).to(
            [phone1, phone2],
            {
                duration: 0.6,
                autoAlpha: 1,
                y: 0,
                ease: "power3.out",
            },
            "-=0.3"
        );

        // Continuous bounce animation for the switch button
        if (switchButton) {
            gsap.to(switchButton, {
                y: "-10px",
                duration: 0.6,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });
        }
    });
</script>

<section class="categories flex justify-between items-center py-20">
    <div
        class="w-full py-20 min-h-[120vh] text-center rounded-xl flex flex-col md:flex-row gap-16 justify-between"
    >
        <!-- Left column with background image -->
        <div
            bind:this={column1}
            class="column flex-1 p-5 text-center mb-4 md:mb-0 relative overflow-visible flex flex-col justify-between self-start"
            style="min-width: 300px; border-radius: 0 15px 15px 0; background-size: cover; background-position: top;"
        >
            <div
                bind:this={bgImage1}
                class="absolute inset-0 bg-cover bg-top rounded-r-xl"
                style="background-image: url('{backgroundImage1}');"
            ></div>
            <p class="relative z-10">{texts.column1}</p>
        </div>

        <!-- Center column with mode switch -->
        <div
            bind:this={column2}
            class="bg-gray-800 column flex-1 p-5 rounded-xl text-white text-center mb-4 self-center md:mb-0 flex flex-col justify-around space-y-3"
        >
            <img
                bind:this={logo}
                src={logoIcon}
                alt="Logo"
                class="w-10 h-10 mx-auto"
            />
            <div>
                <h2 bind:this={title} class="text-2xl font-semibold">
                    {texts.title}
                </h2>
                <p
                    style="margin-top: 2px; font-size: 12px"
                    bind:this={description}
                >
                    {texts.column2}
                </p>
            </div>
            <button
            bind:this={switchButton}
            on:click={toggleMode}
            class="gradient-border-button py-2 px-4 rounded-full relative overflow-hidden inline-block mx-auto"
        >
            <span style="font-size: 12px" class="relative z-10"
                >Changer pour {buttonText}</span
            >
        </button>
        </div>

        <!-- Right column with background image -->
        <div
            bind:this={column3}
            class="h-[200px] column flex-1 p-5 text-black text-center mb-4 md:mb-0 relative overflow-visible flex flex-col justify-between self-end"
            style="min-width: 300px; border-radius: 15px 0 0 15px; background-size: cover; background-position: top;"
        >
            <div
                bind:this={bgImage3}
                class="absolute inset-0 bg-cover bg-top rounded-l-xl"
                style="background-image: url('{backgroundImage3}');"
            ></div>
            <p class="relative z-10">{texts.column3}</p>
        </div>
    </div>
</section>

<style>
    /* Responsive styles for mobile devices */
    @media (max-width: 767px) {
        .column:nth-child(odd) {
            min-height: calc(50vh - 2.5rem);
        }
        .column:nth-child(even) {
            width: 300px;
        }
    }
    @media (min-width: 768px) {
        .column:nth-child(even) {
            height: 400px;
        }
        .column:nth-child(odd) {
            height: 320px;
        }
    }

    /* Styles for the gradient border button */
    .gradient-border-button {
        background-color: #212937;
        transition: all 0.3s ease;
    }

    .gradient-border-button::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 9999px;
        padding: 1px;
        background: linear-gradient(90deg, #69b59e, #7daed6, #aa8ac9);

        -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
    }

    .gradient-border-button:hover {
        transform: scale(1.05);
    }

    .gradient-border-button:hover::before {
        opacity: 0.8;
    }
</style>
