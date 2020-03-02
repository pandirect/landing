<script>
    import {Logo} from '../components';

    export let links;
</script>

<style lang="scss">
    .footer {
        display: flex;
        margin: 150px auto 100px;
        flex-direction: column;
        align-items: center;
        color: #2d3136;

        &__description {
            font-family: "SFDisplay-Light", sans-serif;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            margin: 30px 0;
        }

        &__links {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: auto;
        }

        &__link {
            font-family: "Roboto-Medium", sans-serif;
            font-size: 14px;
            line-height: 24px;
            color: #2d3136;
            display: block;
            margin: 0 20px;
        }

        &__copyright {
            font-family: "SFDisplay-Light", sans-serif;
            font-size: 18px;
            line-height: 24px;
            margin: 30px auto 0;

            > img {
                height: 20px;
                width: 20px;
                vertical-align: middle;
                border-style: none;
            }
        }
    }

    @media (max-width: 1550px) {
        .footer {
            display: flex;
            width: calc(100% - 60px);
        }
    }
</style>

<footer class="footer">
    <div class="footer__logo">
        <a href="/">
            <Logo/>
        </a>
    </div>
    <div class="footer__description">
        Digital-агентство с большим опытом работы на российском рынке по разработке web-приложений любой сложности
    </div>
    <div class="footer__links">
        {#each links as {link, label}, index }
            <a href="{link}" class="footer__link">{label}</a>
        {/each}
    </div>
    <div class="footer__copyright">
        © 2019 - {new Date().getFullYear()} Pandirect. Делаем сайты с <img src="./assets/heart.png" alt="Любовью" title=""/>
    </div>
</footer>
