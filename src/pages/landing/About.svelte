<script>
  import {Button} from '../../components/button';
  import IMask from 'imask';
  import {onMount} from 'svelte';

  const values = {};
  const emails = [
    'info@pandirect.ru',
    'pechischev.vladimir@pandirect.ru',
    'baev.vsevolod@pandirect.ru',
  ];
  let body = '';
  $: body = `Телефон: ${values.phone}.
  Сообщение: ${values.message}`;

  let phoneElement;
  let nameElement;
  onMount(() => {
    IMask(phoneElement, {mask: '+{7} (000) 000-00-00'});
    IMask(nameElement, {mask: /^[a-zA-Zа-яёА-ЯЁ]+$/ui});
  });
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
    <form
      method="post"
      enctype="text/plain"
      action={`mailto:${emails.join(';')}?subject=Pandirect - ${values.name}&body=${body}`}
    >
      <div class="form__line">
        <div class="form__field">
          <label class="form__label">Как к Вам обращаться?</label>
          <input
            type="text"
            required
            class="form__input"
            placeholder="Ваше имя"
            bind:value={values.name}
            bind:this={nameElement}
          />
        </div>
        <div class="form__field">
          <label class="form__label">Телефон</label>
          <input
            type="tel"
            required
            class="form__input"
            placeholder="+7 (XXX) XXX-XX-XX"
            bind:this={phoneElement}
            bind:value={values.phone}/>
        </div>
      </div>
      <div class="form__line">
        <textarea
          class="form__textarea"
          required
          placeholder="Введите Ваше сообщение…"
          bind:value={values.message}
        ></textarea>
      </div>
      <div class="about-form__submit">
        <Button variant="outlined" type="submit">Отправить</Button>
      </div>
    </form>
  </div>
</div>
