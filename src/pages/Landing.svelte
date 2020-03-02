<script>
    import {Title, Articles, Services, Contacts, About} from './landing';
    import Sidebar from '../layouts/Sidebar.svelte';
    import Main from '../layouts/_main.svelte';
    import Footer from '../layouts/_footer.svelte';

    import { links } from '../models';
    import { onMount } from 'svelte';

    let contentElement = null;
    let invert = false;

    const mobileSidebarHeight = 96;

    onMount(() => {
        contentElement.addEventListener('scroll', function() {
            let heightOfMainBlock = document.getElementsByClassName("main")[0].clientHeight;
            invert = contentElement.scrollTop + mobileSidebarHeight > heightOfMainBlock;
        });
    })
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
    <div class="content" bind:this={contentElement}>
        <Main>
            <Title/>
            <Services/>
            <Articles/>
            <About/>
            <Contacts/>
        </Main>
        <Footer links="{links}"/>
    </div>
</div>
