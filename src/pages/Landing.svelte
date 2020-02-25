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
    width: 100vw;
    height: 100vh;
}

.content {
    width: 100%;
    max-width: 1920px;
    overflow-x: hidden;
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
