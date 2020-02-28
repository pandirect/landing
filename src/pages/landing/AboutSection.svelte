<script>
    import {Button} from '../../components/button';

    let name = '';
    let phone = '';
    let message = '';
</script>

<style lang="scss">
    .about {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 80px;
        background-image: url(./assets/about/map.svg);
        background-repeat: no-repeat;
        max-width: 1100px;
        width: calc(100% - 60px);
    }

    .about-info {
        max-width: 550px;
        margin-right: 50px;

        &__title {
            font-family: "SFDisplay-Light", sans-serif;
            color: var(--black);
            font-size: 42px;
            line-height: 45px;
        }

        &__description {
            font-family: "SFDisplay-Light", sans-serif;
            font-size: 18px;
            color: var(--bright-grey);
            line-height: 31px;
            margin: 30px 0 38px;
        }
    }

    .about-form {
        max-width: 500px;

        &__submit {
            margin-top: 20px;
        }
    }

    .form {
        &__label {
            font-family: "SFDisplay-Light", sans-serif;
            font-size: 12px;
            line-height: 14px;
        }

        &__input, &__textarea {
            font-family: "SFDisplay-Light", sans-serif;
            font-size: 16px;
            line-height: 21px;
        }
    }

    @media (max-width: 1410px) {
        .about {
            > div {
                width: 100%;
                max-width: 640px;
                padding: 0;
            }

            .about-info {
                margin: 0 auto 30px;
            }

            .about-form {
                margin: auto;
            }
        }
    }
    @media (max-width: 550px) {
        .form {
            &__line {
                flex-wrap: wrap;
                margin-bottom: 30px;
            }
            &__field {
                &:first-child, &:last-child {
                    width: 100%;
                    margin: auto;
                }
            }
        }
    }
</style>

<div class="about section">
    <div class="about-info">
        <div class="about-info__title">Узнайте о нас больше</div>
        <p class="about-info__description">
            Не можете сформулировать проблему, которая стоит перед Вашим бизнесом? Мы готовы в этом помочь,
            оказав бесплатную консультацию и предложив подходящие решения
        </p>
    </div>
    <div class="about-form form">
        <form>
            <div class="form__line">
                <div class="form__field">
                    <label class="form__label">Как к Вам обращаться?</label>
                    <input type="text" bind:value={name} class="form__input" placeholder="Ваше имя"/>
                </div>
                <div class="form__field">
                    <label class="form__label">Телефон</label>
                    <input type="text" bind:value={phone} class="form__input" placeholder="+7 (XXX) XXX-XX-XX"/>
                </div>
            </div>
            <div class="form__line">
                <textarea class="form__textarea" bind:value={message} placeholder="Введите Ваше сообщение…"></textarea>
            </div>
            <div class="about-form__submit">
                <Button variant="outlined" type="submit">Отправить</Button>
            </div>
        </form>
    </div>
</div>
