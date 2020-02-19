<script>
    const illustratePath = '../assets/illustrate.svg';
</script>

<style type="text/scss" lang="scss">
    .main__image {
        background: url('../assets/background.svg');
    }
</style>

<div class="main">
    <div class="main__content">
        <div class="main__description">
            <div>
                <p class="main__title">Digital-агентство «Pandirect»</p>
                <h1 class="main__description main__description_short">Многолетний опыт разработки web-проектов на службе Ваших идей</h1>
                <p class="main__description main__description_long">
                    Индивидуальный подход помогает нам вникнуть в проблемы наших клиентов и сделать хороший
                    продукт, отвечающий всем поставленным требованиям, эффективно и в срок.
                </p>
                <!--<a class="nav-link button button-blue" href="#about">Создать сайт</a>-->
            </div>
        </div>
        <div class="main__image">
            <div>
                <img src={illustratePath} class="illustrate" alt="" title="" />
            </div>
        </div>
    </div>
</div>