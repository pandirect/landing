<script>
    import {Title, Articles, Services, Contacts, About} from './landing';
    import Sidebar from '../layouts/Sidebar.svelte';
    import Main from '../layouts/_main.svelte';
    import Footer from '../layouts/_footer.svelte';

    import { links } from '../models';
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
    @media (max-width: 768px) {
        .layout {
            flex-wrap: wrap;
        }

        .content {
            max-width: 100%;
        }
    }
</style>

<div class="layout">
    <Sidebar links="{links}"/>
    <div class="content">
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
