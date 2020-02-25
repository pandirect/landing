<script>
    import {Logo} from '../components';
    export let links;
</script>

<style lang="scss">
$width: 240px;

.sidebar {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width: $width;
    box-shadow: 0 0 32px 16px rgba(0, 0, 0, .05);
    z-index: 2;

    &__logo {
        display: flex;
        margin: 50px auto 0;
        justify-content: center;
    }

    &__navigation {
        display: flex;
        margin: auto;
        width: 100%;
    }
}

.navigation {
    width: 100%;

    &__item {
        position: relative;
        display: flex;
    }

    &__link {
        color: var(--grey);
        border-left: 6px solid var(--white);
        display: block;
        padding-left: 50px;
        margin: 8px 0;
        font-size: 1em;
        transition: .25s;

        &:focus {
            border-left-color: var(--blue);
            color: var(--blue);
        }

        &:hover {
            color: var(--blue);
        }
    }
}
</style>

<div class="sidebar">
    <a href="/" class="sidebar__logo">
        <Logo />
    </a>
    <nav class="sidebar__navigation">
        <ul class="navigation">
            {#each links as {link, label}, index }
                <li class="navigation__item">
                    <a class="navigation__link" href="#{link}">{label}</a>
                </li>
            {/each}
        </ul>
    </nav>
</div>
