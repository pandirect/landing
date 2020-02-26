<script>
    import {Logo, LogoMobile, HamburgerMenu} from '../components';
    import Contacts from "../pages/landing/Contacts.svelte";

    export let links;
    let isOpen = false;
    let colorType = "white";

    function handleMobileMenu() {
        isOpen = !isOpen;
        colorType = isOpen ? "purple" : "white";
    }
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

    @media (max-width: 768px) {
        .sidebar {
            max-width: 100%;
            height: auto;
            position: absolute;
            box-shadow: none;
            transition: .25s;

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

<div class="sidebar" data-open="{isOpen}">
    <a href="/" class="sidebar__logo">
        <Logo/>
    </a>
    <div class="sidebar-mobile">
        <a href="/">
            <LogoMobile colorType="{colorType}"/>
        </a>
        <div class="sidebar__hamburger" on:click={handleMobileMenu}>
            <HamburgerMenu colorType="{colorType}" isOpen="{isOpen}"/>
        </div>
    </div>
    <nav class="sidebar__navigation" on:click={handleMobileMenu}>
        <ul class="navigation">
            {#each links as {link, label}, index }
                <li class="navigation__item">
                    <a class="navigation__link" href="#{link}">{label}</a>
                </li>
            {/each}
        </ul>
    </nav>
    <div class="sidebar__contact">
        <Contacts />
    </div>
</div>
