<script>
    let name = '';
    let phone = '';
    let message = '';
</script>

<div class="about-section">
    <div class="about-info">
        <div class="about-container">
            <h2 class="title">Узнайте о нас больше</h2>
            <p class="description">
                Не можете сформулировать проблему, которая стоит перед Вашим бизнесом? Мы готовы в этом помочь,
                оказав бесплатную консультацию и предложив подходящие решения
            </p>
        </div>
        <div class="about-form">
            <form>
                <div class="line">
                    <div class="field">
                        <label class="field__label">Как к Вам обращаться?</label>
                        <input type="text" bind:value={name} class="field__input" placeholder="Ваше имя" />
                    </div>
                    <div class="field">
                        <label class="field__label">Телефон</label>
                        <input type="text" bind:value={phone} class="field__input" placeholder="+7 (XXX) XXX-XX-XX" />
                    </div>
                </div>
                <textarea class="textarea" bind:value={message} placeholder="Введите Ваше сообщение…"></textarea>
                <button class="button button-white" type="submit">Отправить</button>
            </form>
        </div>
    </div>
    <div class="about-contacts">
        <div class="about-contacts__item" data-type="phone">+7 (902) 358-21-58</div>
        <div class="about-contacts__item" data-type="mail">info@pandirect.ru</div>
    </div>
</div>

<style type="text/scss" lang="scss">

</style>