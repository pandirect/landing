<style lang="scss">
@mixin setSocialNetworksIcon($icon) {
    &[data-type=#{$icon}] {
        &:before {
            content: "";
            height: 21px;
            width: 21px;
            display: block;
            float: left;
            background-image: url("./assets/about/#{$icon}.svg");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 21px 21px;
            margin-right: 10px;
        }
    }
}

.contacts {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 150px auto 0;

    &__item {
        font-family: "SFDisplay-Light", sans-serif;
        font-size: 18px;
        line-height: 21px;
        margin: 0 30px;

        @include setSocialNetworksIcon('phone');
        @include setSocialNetworksIcon('mail');

        > a {
            color: var(--bright-grey);
        }
    }
}

@media (max-width: 900px) {
    .contacts {
        justify-content: left;

        &__item {
            margin: 10px 30px;
        }
    }
}
</style>

<div class="contacts">
    <div class="contacts__item" data-type="phone"><a href="tel:+79023582158">+7 (902) 358-21-58</a></div>
    <div class="contacts__item" data-type="mail"><a href="mailto:info@pandirect.ru">info@pandirect.ru</a></div>
</div>
