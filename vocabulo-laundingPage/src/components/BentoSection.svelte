<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { isQuizMode } from "./quizStore.js";

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    let infoSection2;
    let bentoItems;
    let switchButton;
    let switchLogo;
    let aboutDescription;

    // Reactive statements for content based on quiz mode
    $: buttonText = $isQuizMode ? "Changer pour Enfant" : "Changer pour Quiz";
    $: logoIcon = $isQuizMode
        ? "/assets/category/logoQuiz.png"
        : "/assets/category/logoKid.png";

    $: boxDescription = $isQuizMode
        ? "Découvrez les fonctionnalités qui rendent notre application incontournable. Grâce à des outils simples et intuitifs, vous pouvez apprendre à votre rythme, découvrir de nouveaux mots, et améliorer votre vocabulaire. Chaque fonctionnalité est pensée pour vous offrir une expérience pratique, adaptée à vos besoins et facile à utiliser au quotidien."
        : "Découvrez les fonctionnalités qui vont rendre la littérature jeunesse accessible et ouvrir un monde d'histoires aux enfants sourds. Grâce à utilisation simple et intuitive, les textes deviennent augmentés de leur signe en LSF, leur définition. Sans compter la mise en avant des catégories et fonctions grammaticales. N'ayez plus peur du français écrit.";

    // Reactive background images
    $: bgImage1 = $isQuizMode ? "" : "";
    $: bgImage2 = $isQuizMode
        ? "assets/bento/4Quiz.png"
        : "assets/bento/4Kid.png";
    $: bgImage3 = $isQuizMode
        ? "assets/bento/3Quiz.png"
        : "assets/bento/3Quiz.png";
    $: bgImage5 = $isQuizMode
        ? "assets/bento/5Quiz.png"
        : "assets/bento/5Kid.png";

    // Reactive SVG icons
    $: icon1 = $isQuizMode
        ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 4H16.5C17.12 4 17.67 4.02 18.16 4.09C20.79 4.38 21.5 5.62 21.5 9V15C21.5 18.38 20.79 19.62 18.16 19.91C17.67 19.98 17.12 20 16.5 20H7.5C6.88 20 6.33 19.98 5.84 19.91C3.21 19.62 2.5 18.38 2.5 15V9C2.5 5.62 3.21 4.38 5.84 4.09C6.33 4.02 6.88 4 7.5 4Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.5 10H17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 15.5H7.02H17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.0941 10H10.1031" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.09412 10H7.1031" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`
        : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 4H16.5C17.12 4 17.67 4.02 18.16 4.09C20.79 4.38 21.5 5.62 21.5 9V15C21.5 18.38 20.79 19.62 18.16 19.91C17.67 19.98 17.12 20 16.5 20H7.5C6.88 20 6.33 19.98 5.84 19.91C3.21 19.62 2.5 18.38 2.5 15V9C2.5 5.62 3.21 4.38 5.84 4.09C6.33 4.02 6.88 4 7.5 4Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.5 10H17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 15.5H7.02H17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.0941 10H10.1031" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.09412 10H7.1031" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
    $: icon2 = $isQuizMode
        ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 4.66994V16.74C22 17.7 21.22 18.5999 20.26 18.7199L19.93 18.76C17.75 19.05 14.39 20.1599 12.47 21.2199C12.21 21.3699 11.78 21.3699 11.51 21.2199L11.47 21.2C9.54997 20.15 6.20003 19.05 4.03003 18.76L3.73999 18.7199C2.77999 18.5999 2 17.7 2 16.74V4.65993C2 3.46993 2.96997 2.56994 4.15997 2.66994C6.25997 2.83994 9.43997 3.89997 11.22 5.00997L11.47 5.15993C11.76 5.33994 12.24 5.33994 12.53 5.15993L12.7 5.04995C13.33 4.65995 14.13 4.26994 15 3.91994V7.99996L17 6.66994L19 7.99996V2.77999C19.27 2.72999 19.53 2.69995 19.77 2.67995H19.83C21.02 2.57995 22 3.46994 22 4.66994Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 5.48999V20.49" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19 2.78003V8L17 6.66998L15 8V3.91998C16.31 3.39998 17.77 2.98003 19 2.78003Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`
        : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.0004 17.2C22.0004 18.1 21.7504 18.95 21.3004 19.67C20.4704 21.06 18.9504 22 17.2004 22C15.4504 22 13.9204 21.06 13.1004 19.67C12.6604 18.95 12.4004 18.1 12.4004 17.2C12.4004 14.55 14.5504 12.4 17.2004 12.4C19.8504 12.4 22.0004 14.55 22.0004 17.2Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.3301 17.2L16.5101 18.38L19.0701 16.02" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 8.69C22 10.66 21.49 12.4 20.69 13.91C19.81 12.98 18.57 12.4 17.2 12.4C14.55 12.4 12.4 14.55 12.4 17.2C12.4 18.43 12.87 19.55 13.63 20.4C13.26 20.57 12.92 20.71 12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.09998 7.56 3.09998C9.37 3.09998 10.99 3.98002 12 5.33002C13.01 3.98002 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.6 22 8.69Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
    $: icon3 = $isQuizMode
        ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.03009 12.42C2.39009 17.57 6.76009 21.76 11.9901 21.99C15.6801 22.15 18.9801 20.43 20.9601 17.72C21.7801 16.61 21.3401 15.87 19.9701 16.12C19.3001 16.24 18.6101 16.29 17.8901 16.26C13.0001 16.06 9.00009 11.97 8.98009 7.13996C8.97009 5.83996 9.24009 4.60996 9.73009 3.48996C10.2701 2.24996 9.62009 1.65996 8.37009 2.18996C4.41009 3.85996 1.70009 7.84996 2.03009 12.42Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`
        : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.03009 12.42C2.39009 17.57 6.76009 21.76 11.9901 21.99C15.6801 22.15 18.9801 20.43 20.9601 17.72C21.7801 16.61 21.3401 15.87 19.9701 16.12C19.3001 16.24 18.6101 16.29 17.8901 16.26C13.0001 16.06 9.00009 11.97 8.98009 7.13996C8.97009 5.83996 9.24009 4.60996 9.73009 3.48996C10.2701 2.24996 9.62009 1.65996 8.37009 2.18996C4.41009 3.85996 1.70009 7.84996 2.03009 12.42Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
    $: icon4 = $isQuizMode
        ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 3.11 16.44 3.11 16.44M3.11 16.44H7.63M3.11 16.44V21.44M2 12C2 6.48 6.44 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`
        : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 3.11 16.44 3.11 16.44M3.11 16.44H7.63M3.11 16.44V21.44M2 12C2 6.48 6.44 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `;
    $: icon5 = $isQuizMode
        ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2V5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 2V5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 13H15" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 17H12" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 3.5C19.33 3.68 21 4.95 21 9.65V15.83C21 19.95 20 22.01 15 22.01H9C4 22.01 3 19.95 3 15.83V9.65C3 4.95 4.67 3.69 8 3.5H16Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `
        : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.2902 4.13999L17.2202 7.92997C17.2102 8.44997 17.5403 9.13999 17.9603 9.44999L20.4403 11.33C22.0303 12.53 21.7703 14 19.8703 14.6L16.6403 15.61C16.1003 15.78 15.5303 16.37 15.3903 16.92L14.6203 19.86C14.0103 22.18 12.4902 22.41 11.2302 20.37L9.47024 17.52C9.15024 17 8.39024 16.61 7.79024 16.64L4.45028 16.81C2.06028 16.93 1.38027 15.55 2.94027 13.73L4.92025 11.43C5.29025 11 5.46024 10.2 5.29024 9.65998L4.28029 6.42997C3.69029 4.52997 4.75028 3.47999 6.64028 4.09999L9.59029 5.06999C10.0903 5.22999 10.8403 5.11998 11.2603 4.80998L14.3403 2.58998C16.0003 1.38998 17.3302 2.08999 17.2902 4.13999Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.9099 22L18.8799 18.97" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
    $: icon6 = $isQuizMode
        ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2V5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 2V5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 8.5V13.63C20.11 12.92 18.98 12.5 17.75 12.5C16.52 12.5 15.37 12.93 14.47 13.66C13.26 14.61 12.5 16.1 12.5 17.75C12.5 18.73 12.78 19.67 13.26 20.45C13.63 21.06 14.11 21.59 14.68 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 11H13" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 16H9.62" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23 17.75C23 18.73 22.72 19.67 22.24 20.45C21.96 20.93 21.61 21.35 21.2 21.69C20.28 22.51 19.08 23 17.75 23C16.6 23 15.54 22.63 14.68 22C14.11 21.59 13.63 21.06 13.26 20.45C12.78 19.67 12.5 18.73 12.5 17.75C12.5 16.1 13.26 14.61 14.47 13.66C15.37 12.93 16.52 12.5 17.75 12.5C18.98 12.5 20.11 12.92 21 13.63C22.22 14.59 23 16.08 23 17.75Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.75 20.25C17.75 18.87 18.87 17.75 20.25 17.75C18.87 17.75 17.75 16.63 17.75 15.25C17.75 16.63 16.63 17.75 15.25 17.75C16.63 17.75 17.75 18.87 17.75 20.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`
        : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42004 11.9999 8.42004C13.9799 8.42004 15.5799 10.02 15.5799 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.9998 20.27C15.5298 20.27 18.8198 18.19 21.1098 14.59C22.0098 13.18 22.0098 10.81 21.1098 9.39997C18.8198 5.79997 15.5298 3.71997 11.9998 3.71997C8.46984 3.71997 5.17984 5.79997 2.88984 9.39997C1.98984 10.81 1.98984 13.18 2.88984 14.59C5.17984 18.19 8.46984 20.27 11.9998 20.27Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `;

    // Title
    $: title1 = $isQuizMode ? "Clavier LSF" : "Clavier LSF";
    $: title2 = $isQuizMode ? "Dictionnaire" : "Dictionnaire personnalisé";
    $: title3 = $isQuizMode
        ? "Thème clair et foncé"
        : "Thème clair et foncé (prochainement)";
    $: title5 = $isQuizMode ? "Quiz" : "Recherche";
    $: title6 = $isQuizMode ? "Quiz Hybride" : "Grammaire";

    // Descriptions
    $: desc1 = $isQuizMode
        ? "Profitez de notre clavier interactif qui vous permet de basculer facilement entre un clavier traditionnel et un clavier en pictogrammes de lettres LSF. Idéal pour apprendre et pratiquer l'alphabet en langue des signes française à votre rythme !"
        : "Profitez de notre clavier interactif qui vous permet de basculer facilement entre un clavier traditionnel et un clavier en pictogrammes de lettres LSF. Idéal pour apprendre et pratiquer l'alphabet en langue des signes française à votre rythme !";
    $: desc2 = $isQuizMode
        ? "Découvrez notre dictionnaire enrichi avec des vidéos pour chaque mot et définition. Consultez non seulement la signification des mots, mais aussi leur interprétation en vidéo pour une expérience d'apprentissage interactive et visuelle !"
        : "Stockez dans votre dictionnaire, les mots que vous avez déjà rencontré. Accédez à leur définition, leur signe, leur catégorie grammaticale en un clin d'oeil.";
    $: desc3 = $isQuizMode
        ? "Personnalisez votre expérience en passant facilement du thème clair au thème sombre dans les paramètres. Choisissez l'option qui vous convient le mieux pour une lecture confortable à tout moment de la journée !"
        : "Personnalisez votre expérience en passant facilement du thème clair au thème sombre dans les paramètres. Choisissez l'option qui vous convient le mieux.";
    $: desc4 = $isQuizMode
        ? "Basculer entre le mode Quiz et le mode Enfant"
        : "Basculer entre le mode Quiz et le mode Enfant";
    $: desc5 = $isQuizMode
        ? "Notre quiz vous permet de tester vos connaissances avec des questions aléatoires ou triées par thèmes et catégories. Découvrez de nouveaux mots avec des supports visuels tels que des vidéos ou des images, disponibles pour enrichir votre apprentissage !"
        : "Recherchez par catégorie grammaticale, ou en tapant les lettres ou leur signe avec le clavier en LSF.";
    $: desc6 = $isQuizMode
        ? "Le Quiz Hybride utilise le machine learning pour faciliter la maîtrise du vocabulaire français, spécialement conçu pour les personnes sourdes. Avec des quiz interactifs quotidiens et thématiques, vous pratiquez et découvrez de nouveaux mots adaptés à votre niveau, pour un apprentissage toujours personnalisé."
        : "En un coup d'oeil, identifiez la catégorie grammaticale d'un mot.";

    function toggleMode() {
        isQuizMode.update((mode) => !mode);

        // Animation for all cards
        gsap.to(bentoItems.querySelectorAll(".bento-item"), {
            scale: 0.95,
            opacity: 0.8,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.inOut",
            onComplete: () => {
                gsap.to(bentoItems.querySelectorAll(".bento-item"), {
                    scale: 1,
                    opacity: 1,
                    duration: 0.3,
                    stagger: 0.05,
                    ease: "power2.inOut",
                });
            },
        });

        // Specific animation for switch logo
        gsap.to(switchLogo, {
            rotation: "+=360",
            duration: 0.5,
            ease: "power2.inOut",
        });

        // Animation for description
        gsap.to(aboutDescription, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            onComplete: () => {
                gsap.to(aboutDescription, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                });
            },
        });
    }

    onMount(() => {
        // Scroll-triggered animation for each card
        bentoItems.querySelectorAll(".bento-item").forEach((item) => {
            gsap.fromTo(
                item,
                { y: 50, opacity: 0.7 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom-=100",
                        end: "bottom center",
                        toggleActions: "play reverse play reverse",
                        scrub: 1,
                    },
                },
            );
        });

        // Animation for description
        gsap.fromTo(
            aboutDescription,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: aboutDescription,
                    start: "top bottom-=100",
                    end: "bottom center",
                    toggleActions: "play reverse play reverse",
                    scrub: 1,
                },
            },
        );

        // Continuous animation for switch button
        gsap.to(switchButton, {
            scale: 1.1,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    });
</script>

<section bind:this={infoSection2} class="h-auto w-full py-20">
    <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">
            Nos Fonctionnalités
        </h2>
        <div
            bind:this={aboutDescription}
            class="about-description justify-center flex flex-col self-center content-center items-center text-black pb-20"
        >
            <p class="text-center w-3/4">{boxDescription}</p>
        </div>
        <div
            bind:this={bentoItems}
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
            <div
                style="min-height: 250px; background-image: url('{bgImage1}'); background-size: cover; background-position: center;"
                class="bento-item flex flex-col bg-gray-100 justify-between rounded-xl p-4"
            >
                <div class="flex items-center justify-end mb-4">
                    <div class="text-12px flex-shrink-0 bg-black">
                        <div class="flex items-center justify-center">
                            {@html icon1}
                        </div>
                    </div>
                </div>
                <div>
                    <h4 class="text-xl font-bold mb-2">{title1}</h4>
                    <p style="font-size: 12px;">{desc1}</p>
                </div>
            </div>

            <div
                style="min-height: 250px; background-image: url('{bgImage2}'); background-size: cover; background-position: center; position: relative;"
                class="bento-item flex flex-col justify-between rounded-xl p-4 sm:col-span-2 md:col-span-2"
            >
                <div
                    style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(185deg, rgba(0,0,0,0) 0%, rgba(0,0,0, 0.2) 60%, rgba(0,0,0, 0.7) 100%); pointer-events: none;"
                    class="rounded-xl"
                ></div>

                <div class="flex items-center justify-end mb-4 relative z-10">
                    <div class="text-12px flex-shrink-0 bg-black">
                        <div class="flex items-center justify-center">
                            {@html icon2}
                        </div>
                    </div>
                </div>
                <div class="text-white relative z-10">
                    <h4 class="text-xl font-bold mb-2">{title2}</h4>
                    <p style="font-size: 12px;" class="w-4/5">{desc2}</p>
                </div>
            </div>

            <div
                style="min-height: 250px; background-image: url('{bgImage3}'); background-size: cover; background-position: center;"
                class="bento-item flex flex-col justify-between rounded-xl p-4"
            >
                <div class="flex items-center justify-end mb-4">
                    <div class="text-12px flex-shrink-0 bg-black">
                        <div class="flex items-center justify-center">
                            {@html icon3}
                        </div>
                    </div>
                </div>
                <div class="text-white">
                    <h4 class="shadow-text text-xl font-bold mb-2">{title3}</h4>
                    <p style="font-size: 12px;" class="shadow-text">{desc3}</p>
                </div>
            </div>

            <div
                style="min-height: 250px;"
                class="bento-item flex flex-col bg-gray-800 rounded-xl p-4"
            >
                <div class="flex items-center justify-end">
                    <div class="text-12px flex-shrink-0 bg-black">
                        <div class="flex items-center justify-center">
                            {@html icon4}
                        </div>
                    </div>
                </div>
                <div
                    class="text-white flex flex-col gap-4 justify-center content-center self-center items-center text-center"
                >
                    <img
                        bind:this={switchLogo}
                        src={logoIcon}
                        alt="Logo"
                        class="w-10 h-10 mx-auto"
                    />
                    <p style="font-size: 12px;" class="w-2/3">{desc4}</p>
                    <button
                        bind:this={switchButton}
                        on:click={toggleMode}
                        class="gradient-border-button py-2 px-4 rounded-full relative overflow-hidden inline-block mx-auto"
                    >
                        <span class="text-12px relative z-10">{buttonText}</span
                        >
                    </button>
                </div>
            </div>

            <div
                style="min-height: 250px; background-image: url('{bgImage5}'); background-size: cover; background-position: center; position: relative;"
                class="bento-item flex flex-col justify-between rounded-xl p-4 row-span-2"
            >
                <div
                    style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(185deg, rgba(0,0,0,0) 0%, rgba(0,0,0, 0.2) 60%, rgba(0,0,0, 0.7) 100%); pointer-events: none;"
                    class="rounded-xl"
                ></div>

                <div class="flex items-center justify-end mb-4 relative z-10">
                    <div class="text-12px flex-shrink-0 bg-black">
                        <div class="flex items-center justify-center">
                            {@html icon5}
                        </div>
                    </div>
                </div>
                <div class="text-white relative z-10">
                    <h4 class="text-xl font-bold mb-2">{title5}</h4>
                    <p style="font-size: 12px;">{desc5}</p>
                </div>
            </div>
            <div
                style="min-height: 250px;"
                class="bento-item flex flex-col bg-gray-100 justify-between rounded-xl p-4 sm:col-span-2 md:col-span-2"
            >
                <div class="flex items-center justify-end mb-4">
                    <div class="text-12px flex-shrink-0 bg-black">
                        <div class="flex items-center justify-center">
                            {@html icon6}
                        </div>
                    </div>
                </div>
                <div>
                    <h4 class="text-xl font-bold mb-2">{title6}</h4>
                    <p class="w-4/5" style="font-size: 12px;">{desc6}</p>
                </div>
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
        opacity: 0.9;
    }
    .shadow-text {
        text-shadow: 1px 0 10px rgba(0, 0, 0, 0.6);
    }
</style>
