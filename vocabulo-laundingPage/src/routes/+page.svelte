<script>
    // Import necessary Svelte lifecycle function and GSAP library
    import { onMount } from "svelte";
    import { gsap } from "gsap";

    // Import the store for managing quiz mode state
    import { isQuizMode } from "../components/quizStore.js";

    // Import all component sections
    import HeaderSection from "../components/HeaderSection.svelte";
    import ScrollComponent from "../components/ScrollComponent.svelte";
    import CategorySection from "../components/CategorySection.svelte";
    import Team from "../components/Team.svelte";
    import Question from "../components/Question.svelte";
    import HomeSection from "../components/HomeSection.svelte";
    import SponsorSection from "../components/SponsorSection.svelte";
    import FeaturesSection from "../components/FeaturesSection.svelte";
    import AboutSection from "../components/AboutSection.svelte";
    import InfoSection from "../components/InfoSection.svelte";
    import BentoSection from "../components/BentoSection.svelte";
    import FooterSection from "../components/FooterSection.svelte";

    // Import global CSS styles
    import "../app.css";

    // Declare variables for header elements that will be bound to the HeaderSection component
    let headerElement;
    let toggleButton;
    let toggleImage;

</script>

<!-- Header section with bindings for header elements -->
<HeaderSection bind:headerElement bind:toggleButton bind:toggleImage />

<!-- Main content wrapper -->
<main>
    <!-- Each section is wrapped in a section tag with a unique id for navigation -->
    <section id="home"><HomeSection /></section>
    <section id="categories"><CategorySection /></section>
    <section id="about"><AboutSection /></section>
    <section id="sponsors"><SponsorSection /></section>
    <section id="info"><InfoSection /></section>
    <section id="bento"><BentoSection /></section>
    <section id="scroll"><ScrollComponent /></section>
    <section id="features"><FeaturesSection /></section>
    <section id="team"><Team /></section>
    <section id="faq"><Question /></section>
</main>

<!-- Footer section -->
<FooterSection />

<style>
    /* Global styles can be added here if needed */
</style>
