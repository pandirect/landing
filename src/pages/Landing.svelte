<script>
    import {Title, Articles, Services, Contacts, About} from './landing';
    import {Section} from '../components';
    import Sidebar from '../layouts/Sidebar.svelte';
    import Main from '../layouts/_main.svelte';
    import Footer from '../layouts/_footer.svelte';

    import {links} from '../models';
    import {getLocation} from "../helpers";

    let invert = false;

    const mobileSidebarHeight = 96;

    const onScroll = (event) => {
        const contentElement = event.target;
        let heightOfMainBlock = document.getElementById("main").clientHeight;
        invert = contentElement.scrollTop + mobileSidebarHeight > heightOfMainBlock;

        // TODO: temp solution, need implement in other places later
        const sections = document.querySelectorAll('section');
        const currentLocation = getLocation();
        sections.forEach((section) => {
            const distance = contentElement.scrollTop - section.offsetTop;
            const anchor = section.getAttribute('id');
            if (-30 < distance && distance < 30 && currentLocation.fragment !== anchor) {
                location.hash = `#${anchor}`;
            }
        });
    };
</script>

<style lang="scss">
    .layout {
        display: flex;
        width: 100%;
        height: 100vh;
        max-width: 2560px;
        margin: 0 auto;
    }

    .content {
        width: 100%;
        height: 100vh;
        max-width: calc(100% - 240px);
        overflow-y: auto;
    }

    @media (max-width: 900px) {
        .layout {
            flex-wrap: wrap;
        }

        .content {
            max-width: 100%;
        }
    }
</style>

<div class="layout">
    <Sidebar links="{links}" isInvert={invert}/>
    <div class="content" on:scroll={onScroll}>
        <Main>
            <Section id="main">
                <Title/>
            </Section>
            <Section id="services">
                <Services/>
            </Section>
            <Section id="blog">
                <Articles/>
            </Section>
            <Section id="about">
                <About/>
            </Section>
            <Section id="contacts">
                <Contacts/>
            </Section>
        </Main>
        <Footer links="{links}"/>
    </div>
</div>
