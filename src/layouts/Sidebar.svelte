<script>
    import {Logo, LogoMobile, HamburgerMenu} from '../components';
    import Contacts from "../pages/landing/Contacts.svelte";

    import { getLocation } from '../helpers';

    import {onMount} from 'svelte';

    export let links;
    export let isInvert;

    let isOpen = false;
    let invertColor;
    $: invertColor = isInvert ? "purple" : "white";

    function handleMobileMenu() {
        isOpen = !isOpen;
        invertColor = isOpen || isInvert ? "purple" : "white";
    }

    let path = getLocation();

    onMount(() => {
        // TODO: temp solution, need listen location changed in global
        window.addEventListener('popstate', (event) => {
            $: path = getLocation();
        });
    });

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
        z-index: 3;

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

        &-mobile, &__contact {
            display: none;
        }
    }

    .navigation {
        width: 100%;

        &__item {
            position: relative;
            display: flex;
        }

        &__link {
            font-family: "Roboto-Regular", sans-serif;
            color: var(--grey);
            border-left: 6px solid var(--invisible);
            display: block;
            padding-left: 50px;
            margin: 8px 0;
            font-size: 1em;
            transition: .25s;

            &:focus,
            &_active {
                border-left-color: var(--blue);
                color: var(--blue);
                font-family: "Roboto-Medium", sans-serif;
            }

            &:hover {
                color: var(--blue);
            }
        }
    }

    @media (max-width: 900px) {
        .sidebar {
            max-width: 100%;
            height: auto;
            position: absolute;
            box-shadow: none;
            transition: .25s;

            &[data-invert=true] {
                background-color: #ffffff;
                box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
            }

            &__logo {
                display: none;
            }

            &__navigation {
                display: none;
            }

            &-mobile {
                display: flex;
                justify-content: space-between;
                margin: 40px 40px 30px 30px;
            }

            &__hamburger {
                cursor: pointer;
            }

            &[data-open="true"] {
                width: 100vw;
                height: 100vh;
                background-color: #ffffff;

                .sidebar {
                    &__navigation, &__contact {
                        display: block;
                    }
                }
            }
        }
    }
</style>

<div class="sidebar" data-open="{isOpen}" data-invert={isInvert}>
    <a href="/" class="sidebar__logo">
        <Logo/>
    </a>
    <div class="sidebar-mobile">
        <a href="/">
            <LogoMobile colorType="{invertColor}"/>
        </a>
        <div class="sidebar__hamburger" on:click={handleMobileMenu}>
            <HamburgerMenu colorType="{invertColor}" isOpen="{isOpen}"/>
        </div>
    </div>
    <nav class="sidebar__navigation" on:click={isOpen ? handleMobileMenu : void 0}>
        <ul class="navigation">
            {#each links as {link, label}, index }
                <li class="navigation__item">
                    <a class="navigation__link"
                       class:navigation__link_active="{path.fragment === link.substr(1)}"
                       href={link}
                    >{label}</a>
                </li>
            {/each}
        </ul>
    </nav>
    <div class="sidebar__contact">
        <Contacts/>
    </div>
</div>
