<script>
    import {Logo} from '../components';
    export let links;
</script>

<style lang="scss">
$width: 240px;

.sidebar {
    display: flex;
    height: 100%;
    width: $width;
    min-width: $width;
    flex-direction: column;

    &__logo,
    &__navigation {
        margin: 50px auto;
        display: flex;
    }

    &__logo {
        margin-bottom: 0;
        justify-content: center;
    }

    &__navigation {
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
                    <a class="navigation__link" href="{link}">{label}</a>
                </li>
            {/each}
        </ul>
    </nav>
</div>
