<script>
    import Logo from "../../components/logo/Logo.svelte";
    export let links;
</script>

<div>
    <section>
        <Logo/>
    </section>
    <section>
        <p class="footer-section__description">
            Digital-агентство с большим опытом работы на российском рынке по разработке web-приложений любой
            сложности
        </p>
    </section>
    <section>
        <ul class="nav main-menu-navigate navigate">
            {#each links as {link, label}, index }
                <li class="nav-item navigate-item">
                    <a class="nav-link active" href="#{link}">{label}</a>
                </li>
            {/each}
        </ul>
    </section>
    <section>
        <p class="footer-section__copyright">
            © 2019 Pandirect. Делаем сайты с <img src="./assets/heart.png" alt="Любовью" title="" />
        </p>
    </section>
</div>

