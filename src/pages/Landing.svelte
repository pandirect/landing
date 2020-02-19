<script>
    import Sidebar from "../layouts/Sidebar.svelte";
    import Main from "../layouts/_main.svelte";
    import Footer from "../layouts/_footer.svelte";

    import { links } from '../models';;
    import MainSection from "./landing/MainSection.svelte";
    import Services from "./landing/Services.svelte";
    import Articles from "./landing/Articles.svelte";
    import AboutSection from "./landing/AboutSection.svelte";
</script>

<style type="text/scss" lang="scss">
.layout {
    display: flex;
}
</style>

<div class="layout">
    <Sidebar links="{links}"/>
    <Main>
        <MainSection/>
        <Services/>
        <Articles/>
        <AboutSection/>
    </Main>
    <Footer links="{links}"/>
</div>
