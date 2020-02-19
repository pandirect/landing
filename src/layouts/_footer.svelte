<script>
    import {Logo} from "../components";

    export let links;
</script>

<footer>
    <section>
        <Logo/>
    </section>
    <section>
        <p class="footer-section__description">
            Digital-агентство с большим опытом работы на российском рынке по разработке web-приложений любой сложности
        </p>
    </section>
    <section>
        <ul>
            {#each links as {link, label}, index }
                <li>
                    <a href="#{link}">{label}</a>
                </li>
            {/each}
        </ul>
    </section>
    <section>
        <p class="footer-section__copyright">
            © 2019 Pandirect. Делаем сайты с <img src="./assets/heart.png" alt="Любовью" title="" />
        </p>
    </section>
</footer>