<script>
    import Sidebar from "../layouts/Sidebar.svelte";
    import Header from "../layouts/_header.svelte";
    import Main from "../layouts/_main.svelte";
    import Footer from "../layouts/_footer.svelte";

    import { links } from '../models';
    import FooterContent from "./base/FooterContent.svelte";
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
    <div>
        <Header>
            <MainSection/>
        </Header>
        <Main>

            <Services/>
            <Articles/>
            <AboutSection/>
        </Main>
        <Footer>
            <FooterContent links="{links}"/>
        </Footer>
    </div>
</div>
