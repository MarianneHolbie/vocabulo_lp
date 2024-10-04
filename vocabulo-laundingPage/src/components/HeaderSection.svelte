<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { isQuizMode } from "../components/quizStore.js";

    // Props for DOM elements
    export let headerElement;
    export let toggleButton;
    export let toggleImage;

    let isMenuOpen = false;
    let lastScrollTop = 0;
    let hideTimeout;

    // Function to toggle mobile menu
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    // Function to toggle between quiz and kid mode
    function toggleMode() {
        isQuizMode.update((mode) => !mode);

        // Animate toggle button
        gsap.to(toggleButton, {
            scale: 1.1,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: "bounce.out",
        });

        // Animate toggle image
        gsap.to(toggleImage, {
            rotation: "+=360",
            duration: 0.5,
            ease: "power2.inOut",
        });
    }

    // Function to handle scroll events
    function handleScroll() {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            // Scroll down: hide header
            gsap.to(headerElement, {
                y: -100,
                duration: 0.3,
                ease: "power2.inOut",
            });
        } else {
            // Scroll up: show header
            showHeader();
        }
        lastScrollTop = st <= 0 ? 0 : st;
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(showHeader, 2000);
    }

    // Function to show header
    function showHeader() {
        gsap.to(headerElement, {
            y: 0,
            duration: 0.3,
            ease: "power2.inOut",
        });
    }

    onMount(() => {
        // Initial animation for header
        gsap.from(headerElement, {
            y: -100,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
        });

        // Continuous animation for toggle button
        gsap.to(toggleButton, {
            scale: 1.1,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<header
    bind:this={headerElement}
    style="background-color: black; border-radius: 0 0 30px 30px"
    class="text-white shadow-md p-4 px-8 fixed top-0 left-0 w-full z-50"
>
    <div class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <a href="#home" class="hover:text-gray-300">
            <img
                src="/assets/VocabuloTypo.png"
                alt="Mode Icon"
                class="object-contain"
                style="height: 35px"
            />
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
            <a href="#about" class="hover:text-gray-300">À propos</a>
            <a href="#info" class="hover:text-gray-300">Histoire</a>
            <a href="#bento" class="hover:text-gray-300">Fonctionnalités</a>
            <a href="#team" class="hover:text-gray-300">Équipe</a>
            <a href="#faq" class="hover:text-gray-300">FAQ</a>
        </nav>

        <!-- Mode Toggle Button -->
        <button
            bind:this={toggleButton}
            on:click={toggleMode}
            style="width: 190px"
            class="toggle-button flex items-center justify-center self-center content-center space-x-2 px-4 py-2 rounded-full transition duration-300 bg-black"
        >
            <img
                bind:this={toggleImage}
                src={$isQuizMode
                    ? "/assets/category/logoQuiz.png"
                    : "/assets/category/logoKid.png"}
                alt="Mode Icon"
                class="object-contain"
            />
            <span
                >{$isQuizMode ? "Changer pour Enfant" : "Changer pour Quiz"}
            </span>
        </button>

        <!-- Mobile Menu Button -->
        <button
            class="md:hidden text-white focus:outline-none"
            on:click={toggleMenu}
        >
            <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                ></path>
            </svg>
        </button>
    </div>

    <!-- Mobile Navigation -->
    {#if isMenuOpen}
        <nav class="md:hidden mt-4 space-y-2">
            <a href="#about" class="block hover:text-gray-300">À propos</a>
            <a href="#info" class="block hover:text-gray-300">Info</a>
            <a href="#bento" class="block hover:text-gray-300"
                >Fonctionnalités</a
            >
            <a href="#team" class="block hover:text-gray-300">Équipe</a>
            <a href="#faq" class="block hover:text-gray-300">FAQ</a>
        </nav>
    {/if}
</header>

<style>
    .toggle-button {
        position: relative;
        background-color: black !important;
        border: 2px solid transparent;
        background-clip: padding-box;
        z-index: 1;
        font-size: 12px;
    }

    .toggle-button img {
        height: 14px;
        width: 14px;
    }

    .toggle-button::before {
        content: "";
        position: absolute;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        background: linear-gradient(90deg, #69b59e, #7daed6, #aa8ac9);
        border-radius: inherit;
        z-index: -1;
        animation: gradientShift 5s ease infinite;
    }

    .toggle-button::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: black;
        border-radius: inherit;
        z-index: -1;
    }

    @keyframes gradientShift {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>
