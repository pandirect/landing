<script>
    const illustratePath = '../assets/illustrate.svg';
</script>

<style type="text/scss" lang="scss">
.main {
    &__content {
        position: relative;
        display: flex;
        width: 100%;
        height: 900px;
        background: url('../assets/background.svg') no-repeat;
    }

    &__text {
        margin: auto auto auto 6% ;
        max-width: 600px;
        color: var(--white);
        z-index: 2;
    }

    &__image {
        position: absolute;
        left: 52%;
        top: 0;
        bottom: 0;
        margin: auto;
        height: 600px;
        background: url('../assets/main/lines.svg') no-repeat;
    }

    &__description {
        &_big {
            font-size: 40px;
            line-height: 50px;
            margin: 10px 0 15px;
        }

        &_small {
            font-size: 15px;
            line-height: 24px;
        }
    }
}
</style>

<div class="main section">
    <div class="main__content">
        <div class="main__text">
            <p class="main__title">Digital-агентство «Pandirect»</p>
            <p class="main__description main__description_big">Многолетний опыт разработки web-проектов на службе Ваших идей</p>
            <p class="main__description main__description_small">
                Индивидуальный подход помогает нам вникнуть в проблемы наших клиентов и сделать хороший
                продукт, отвечающий всем поставленным требованиям, эффективно и в срок.
            </p>
            <!--<a class="nav-link button button-blue" href="#about">Создать сайт</a>-->
        </div>
        <div class="main__image">
            <img src={illustratePath} class="illustrate" alt="" title="" style="height: inherit"/>
        </div>
    </div>
</div>