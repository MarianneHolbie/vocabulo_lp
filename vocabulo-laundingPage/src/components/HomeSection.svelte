<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // References to DOM elements for animation
    let homeSection;
    let content;
    let phone;
    let title;
    let description;

    // Set up animations when component mounts
    onMount(() => {
        // Initial set: scale down the section and move elements out of view
        gsap.set(homeSection, { scale: 0.9 });
        gsap.set(content, { x: -50 });
        gsap.set(phone, { y: 100 });
        gsap.set(title, { x: -50 });
        gsap.set(description, { y: 50 });

        // Timeline for initial appearance animation
        const tlInitial = gsap.timeline();
        tlInitial.to(homeSection, {
            duration: 1.5,
            scale: 1,
            ease: "power2.out",
        });

        // Timeline for scroll-triggered animations
        const tlScroll = gsap.timeline({
            scrollTrigger: {
                trigger: homeSection,
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none reverse",
                scrub: 1,
            },
        });

        // Add animations to the scroll timeline
        tlScroll
            .to(content, {
                duration: 1,
                x: 0,
                ease: "power2.out",
            })
            .to(
                title,
                {
                    duration: 0.8,
                    x: 0,
                    ease: "power2.out",
                },
                "-=0.6", // Start 0.6 seconds before the previous animation ends
            )
            .to(
                description,
                {
                    duration: 0.8,
                    y: 0,
                    ease: "power2.out",
                },
                "-=0.6",
            )
            .to(
                phone,
                {
                    duration: 1,
                    y: 0,
                    ease: "power2.out",
                },
                "-=0.6",
            );
    });
</script>

<!-- Home Section -->
<section
    bind:this={homeSection}
    class="flex w-full justify-center items-center h-screen py-20"
    style="z-index: 0;"
>
    <div
        class="home text-white w-6/7 flex flex-wrap justify-between items-center relative z-10 rounded-xl overflow-visible"
        style="scale: 0.9; background-image: url('/assets/background.png'); background-size: cover; background-position: center; height: 80vh;"
    >
        <!-- Content Column -->
        <div
            bind:this={content}
            class="w-full lg:w-1/2 p-8 flex flex-col justify-center"
        >
            <h1 bind:this={title} class="text-4xl font-bold">
                Bienvenue dans l'univers Vocabul'o
            </h1>
            <p bind:this={description} class="mt-4 mb-8">
                Explorez des solutions innovantes conçues pour améliorer la maîtrise
                du français écrit des personnes sourdes, en s'appuyant sur
                des technologies d'intelligence artificielle.
            </p>
        </div>
        <!-- Phone Image Column -->
        <div
            bind:this={phone}
            class="w-full lg:w-1/2 relative flex items-center justify-center"
            style="z-index: 40;"
        >
            <img
                src="/assets/home/Phone.png"
                alt="Phone"
                class="object-fit"
                style="height: 400px; z-index: 40; scale: 1.2;"
            />
        </div>
    </div>
</section>
