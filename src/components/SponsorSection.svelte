<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    // Register the ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Array of sponsor objects
    let sponsors = [
        { id: 1, title: "Sponsor 1", logo: "/assets/sponsor/logo1.png" },
        { id: 2, title: "Sponsor 2", logo: "/assets/sponsor/logo2.png" },
        { id: 3, title: "Sponsor 3", logo: "/assets/sponsor/logo3.png" },
        { id: 4, title: "Sponsor 4", logo: "/assets/sponsor/logo1.png" },
        { id: 5, title: "Sponsor 5", logo: "/assets/sponsor/logo2.png" },
        { id: 6, title: "Sponsor 6", logo: "/assets/sponsor/logo3.png" },
        { id: 7, title: "Sponsor 7", logo: "/assets/sponsor/logo1.png" },
        { id: 8, title: "Sponsor 8", logo: "/assets/sponsor/logo2.png" },
        { id: 9, title: "Sponsor 9", logo: "/assets/sponsor/logo3.png" },
        { id: 10, title: "Sponsor 10", logo: "/assets/sponsor/logo1.png" },
        { id: 11, title: "Sponsor 11", logo: "/assets/sponsor/logo2.png" },
        { id: 12, title: "Sponsor 12", logo: "/assets/sponsor/logo3.png" },
    ];

    // Reference to the sponsor container element
    let sponsorContainer;

    // Run this function when the component is mounted
    onMount(() => {
        // Calculate the total width of all sponsors
        const totalWidth = sponsorContainer.scrollWidth;
        // Get the viewport width
        const viewportWidth = window.innerWidth;

        // Create a GSAP animation
        gsap.from(sponsorContainer, {
            x: -(totalWidth - viewportWidth), // Start position
            ease: "none", // Linear animation
            scrollTrigger: {
                trigger: ".sponsor-section", // Element that triggers the animation
                start: "top bottom", // Animation starts when the top of the section hits the bottom of the viewport
                end: "bottom top", // Animation ends when the bottom of the section leaves the top of the viewport
                scrub: true, // Smooth scrubbing effect
            },
        });
    });
</script>

<section class="sponsor-section overflow-hidden py-20">
    <h2 class="text-3xl font-bold text-center mb-8">Nos Soutiens et Sources</h2>
    <div class="sponsor-wrapper overflow-hidden">
        <!-- Bind this element to the sponsorContainer variable -->
        <div
            bind:this={sponsorContainer}
            class="sponsor-container flex gap-10 py-5"
        >
            <!-- Loop through the sponsors array and create elements for each -->
            {#each sponsors as sponsor}
                <div class="sponsor-item flex flex-col items-center gap-3">
                    <img
                        src={sponsor.logo}
                        alt={sponsor.title}
                        class="w-24 h-24 object-contain"
                    />
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    /* Styles for the sponsor section */
    .sponsor-section {
        position: relative;
    }

    .sponsor-wrapper {
        width: 100%;
    }

    .sponsor-container {
        display: inline-flex;
        white-space: nowrap;
    }

    .sponsor-item {
        flex: 0 0 auto;
        transition: transform 0.3s ease-in-out;
    }

    /* Responsive styles for sponsor logos */
    @media (min-width: 640px) {
        .sponsor-item img {
            width: 100px;
            height: 100px;
        }
    }

    @media (min-width: 1024px) {
        .sponsor-item img {
            width: 120px;
            height: 120px;
        }
    }
</style>
