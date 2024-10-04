<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    // Register ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Declare variable to store the currently selected team member
    let selectedMember;

    // Array of team members with their details
    let team = [
        {
            id: 1,
            name: "Arrué",
            surname: "Marianne",
            role: "Machine Learning",
            description:
                "Experte en apprentissage automatique et pédagogie, Marianne apporte des solutions innovantes à l'équipe.",
            photo: "/assets/team/Marianne.png",
            linkedin: "https://www.linkedin.com/in/mariannearrue/",
            github: "https://github.com/MarianneHolbie",
            email: "mailto:arrue.marianne@gmail.com",
            portfolio: "https://mariannearrue.vercel.app/",
        },
        {
            id: 2,
            name: "Tessier",
            surname: "Vanessa",
            role: "Développeuse mobile",
            description:
                "Spécialisée en développement full-stack et front-end pour le web et le mobile. A conçu l'intégralité de l'application Vocabul'o Quiz ainsi que son UI/UX.",
            photo: "/assets/team/Vanessa.png",
            linkedin: "https://linkedin.com/in/vanessa-tessier",
            github: "https://github.com/TessierV",
            email: "mailto:vanessa.tessier31@gmail.com",
            portfolio: "https://tessiervanessa.netlify.app/",
        },
        {
            id: 3,
            name: "Assenat",
            surname: "Amandine",
            role: "Développeuse mobile",
            description: "Spécialisée en développement full-stack et front-end pour le web et le mobile. A conçu l'intégralité de l'application Vocabul'o Kid ainsi que son UI/UX.",
            photo: "/assets/team/Amandine.png",
            linkedin:
                "https://www.linkedin.com/in/amandine-assenat-designer-graphique-developpeuse-front-end/",
            github: "https://github.com/Amandine4731",
            email: "mailto:didineassenat@gmail.com",
            portfolio: "https://amandineasenat.com", //missing good one
        },
    ];

    // Reactive statement to set the default selected member to the first team member
    $: selectedMember = selectedMember || team[0];

    // Function to handle member selection
    const selectMember = (member) => {
        selectedMember = member;

        // Animation for member info when a new member is selected
        gsap.to(".member-info", {
            y: 20,
            duration: 0.3,
            onComplete: () => {
                gsap.to(".member-info", {
                    y: 0,
                    duration: 0.3,
                });
            },
        });

        // Animation for member photo when a new member is selected
        gsap.to(".member-photo", {
            scale: 0.9,
            duration: 0.3,
            onComplete: () => {
                gsap.to(".member-photo", {
                    scale: 1,
                    duration: 0.3,
                });
            },
        });
    };

    // Lifecycle function to set up animations when the component is mounted
    onMount(() => {
        // Animation with scrollback for the main section
        gsap.fromTo(
            ".team-section",
            { y: 100 },
            {
                y: 0,
                scrollTrigger: {
                    trigger: ".team-section",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    toggleActions: "play reverse play reverse",
                },
            },
        );

        // Animation for the member's photo
        gsap.fromTo(
            ".left-column",
            { x: -50 },
            {
                x: 0,
                scrollTrigger: {
                    trigger: ".left-column",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    toggleActions: "play reverse play reverse",
                },
            },
        );

        // Animation for the member's information
        gsap.fromTo(
            ".right-column",
            { x: 50 },
            {
                x: 0,
                scrollTrigger: {
                    trigger: ".right-column",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    toggleActions: "play reverse play reverse",
                },
            },
        );

        // Animation for each link button
        gsap.fromTo(
            ".column-info",
            { y: 20 },
            {
                y: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".right-column",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    toggleActions: "play reverse play reverse",
                },
            },
        );

        // Animation for the member selection section
        gsap.fromTo(
            ".member-selection",
            { y: 50 },
            {
                y: 0,
                scrollTrigger: {
                    trigger: ".member-selection",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    toggleActions: "play reverse play reverse",
                },
            },
        );

        // Animation for each member button
        gsap.fromTo(
            ".team-member",
            { y: 20 },
            {
                y: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".member-selection",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    toggleActions: "play reverse play reverse",
                },
            },
        );
    });
</script>

<!-- Main container for the team component -->
<div class="team-component py-32 px-5">
    <!-- Team section title -->
    <h2 class="text-4xl font-bold text-center mb-12">L'Équipe</h2>
    <!-- Main section with team member description -->
    <section
        class="team-section h-auto flex flex-wrap w-full justify-center items-center"
    >
        <div
            class="w-full sm:w-5/6 flex flex-wrap sm:flex-nowrap justify-between gap-4"
        >
            <!-- Left side: Display of the member's photo -->
            <div
                class="left-column w-full sm:w-1/3 min-h-[300px] text-center text-white"
            >
                {#if selectedMember && selectedMember.photo}
                    <img
                        src={selectedMember.photo}
                        alt={selectedMember.name}
                        class="member-photo w-full h-auto rounded-lg p-8"
                    />
                {:else}
                    <div
                        class="member-photo w-full h-full bg-gray-300 rounded-lg flex items-center justify-center"
                    >
                        <p>Photo non disponible</p>
                    </div>
                {/if}
            </div>

            <!-- Right side: Description of the selected member -->
            <div
                class="bg-gray-100 right-column w-full sm:w-2/3 p-8 text-black rounded-lg"
            >
                <div class="member-info">
                    {#if selectedMember}
                        <div class="mb-6">
                            <h2 class="text-3xl font-semibold">
                                {selectedMember.name}
                                {selectedMember.surname}
                            </h2>
                            <p class="italic text-sm">{selectedMember.role}</p>
                            <p class="w-2/3 py-10">
                                {selectedMember.description}
                            </p>
                        </div>
                        <!-- Four buttons for more information -->
                        <div
                            class="w-full flex flex-wrap justify-between gap-4"
                        >
                            <!-- LinkedIn button -->
                            <a
                                href={selectedMember.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="info-link"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    ><path
                                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                                    ></path><rect
                                        x="2"
                                        y="9"
                                        width="4"
                                        height="12"
                                    ></rect><circle cx="4" cy="4" r="2"
                                    ></circle></svg
                                >
                                <p>LinkedIn</p>
                            </a>
                            <!-- GitHub button -->
                            <a
                                href={selectedMember.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="info-link"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    ><path
                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                    ></path></svg
                                >
                                <p>GitHub</p>
                            </a>
                            <!-- Email button -->
                            <a href={selectedMember.email} class="info-link">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    ><path
                                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                                    ></path><polyline points="22,6 12,13 2,6"
                                    ></polyline></svg
                                >
                                <p>Email</p>
                            </a>
                            <!-- Portfolio button -->
                            <a
                                href={selectedMember.portfolio}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="info-link"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    ><path
                                        d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                                    ></path></svg
                                >
                                <p>Portfolio</p>
                            </a>
                        </div>
                    {:else}
                        <p>Aucun membre sélectionné</p>
                    {/if}
                </div>
            </div>
        </div>
    </section>

    <!-- Section for selecting team members -->
    <section
        class="member-selection w-full flex flex-col items-center justify-center mt-4"
    >
        <div class="w-full sm:w-5/6 flex flex-wrap justify-center gap-4">
            {#each team as member}
                <!-- Button for each team member -->
                <button
                    class="bg-gray-100 team-member w-max cursor-pointer p-4 text-black rounded-lg flex items-center justify-around gap-5"
                    class:selected={selectedMember &&
                        selectedMember.id === member.id}
                    on:click={() => selectMember(member)}
                    aria-label="Select team member"
                >
                    <!-- Square icon for each member -->
                    <div
                        class="w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center"
                    >
                        <img
                            src={member.photo}
                            alt={member.name}
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <p class="font-semibold">
                            {member.name}
                            {member.surname}
                        </p>
                        <p class="italic text-left text-sm">{member.role}</p>
                    </div>
                </button>
            {/each}
        </div>
    </section>
</div>

<style>
    /* Styles for the team component */
    .team-component {
        margin-bottom: 2rem;
    }

    /* Styles for team member buttons */
    .team-member {
        transition:
            transform 0.3s ease,
            background-color 0.3s ease;
    }

    .team-member:hover {
        transform: scale(1.05);
    }

    .team-member.selected {
        border: 1px solid #000000;
    }

    /* Responsive styles for smaller screens */
    @media (max-width: 640px) {
        .team-member {
            width: 100%;
        }
    }

    /* Styles for info columns */
    .column-info {
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    .column-info:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    /* Styles for info links */
    .info-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        border: 1px solid #000000;
        border-radius: 0.75rem;
        padding: 0.5rem;
        height: 80px;
        flex: 1;
        min-width: 80px;
        text-align: center;
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    .info-link:hover {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transform: scale(0.95);
    }

    .info-link p {
        font-size: 12px;
        margin: 0;
    }
</style>
