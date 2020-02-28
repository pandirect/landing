<script>
  import {Button} from '../../components/button';

  const values = {};
  const emails = [
    'info@pandirect.ru',
    'pechischev.vladimir@pandirect.ru',
    'baev.vsevolod@pandirect.ru',
  ];
  let body = '';
  $: body = `Телефон: ${values.phone}.
  Сообщение: ${values.message}`;
</script>

<style lang="scss">
  .about {
    display: flex;
    padding-top: 80px;
    background-image: url(./assets/about/map.svg);
    background-repeat: no-repeat;
    max-width: 1210px;
  }

  .about-info {
    max-width: 550px;
    padding-right: 50px;

    &__title {
      color: var(--black);
      font-size: 42px;
      line-height: 45px;
    }

    &__description {
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
    <form action={`mailto:${emails.join(';')}?subject=Pandirect - ${values.name}&body=${body}`} method="post" enctype="text/plain">
      <div class="form__line">
        <div class="form__field">
          <label class="form__label">Как к Вам обращаться?</label>
          <input type="text" bind:value={values.name} class="form__input" placeholder="Ваше имя"/>
        </div>
        <div class="form__field">
          <label class="form__label">Телефон</label>
          <input type="text" bind:value={values.phone} class="form__input" placeholder="+7 (XXX) XXX-XX-XX"/>
        </div>
      </div>
      <div class="form__line">
        <textarea class="form__textarea" bind:value={values.message} placeholder="Введите Ваше сообщение…"></textarea>
      </div>
      <div class="about-form__submit">
        <Button variant="outlined" type="submit">Отправить</Button>
      </div>
    </form>
  </div>
</div>
