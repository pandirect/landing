<script>
    import {fade} from 'svelte/transition';
    import {create_in_transition} from 'svelte/internal';
    import {services} from '../../models';
    import {Button} from '../../components';

    let selectedService = services[0];

    let element;
    let intro;

    function animate() {
        if (!intro) {
            intro = create_in_transition(element, fade, {duration: 300});
        }
        intro.start();
    }

    function selectService(index) {
        selectedService = services[index];
        animate();
    }
</script>

<style lang="scss">
    .service-groups {
        display: flex;
        justify-content: center;
        margin-bottom: 60px;

        &__name {
            font-family: "SFDisplay-Medium", sans-serif;
            font-size: 18px;
            line-height: 21px;
            margin: 0 5px;
        }
    }

    .service {
        display: flex;

        &__image {
            margin: 0 70px;
            width: 600px;
        }

        &__info {
            padding-right: 60px;
        }

        &__title {
            font-family: "SFDisplay-Light", sans-serif;
            font-size: 36px;
            color: var(--black);
            line-height: 42px;
            margin-bottom: 30px;
        }

        &__description {
            font-family: "SFDisplay-Light", sans-serif;
            font-size: 18px;
            color: var(--bright-grey);
            line-height: 27px;
            margin-bottom: 30px;
        }

        &__items {
            font-family: "SFDisplay-Light", sans-serif;
            font-size: 21px;
            line-height: 21px;
            color: var(--black);
            list-style-type: circle;
            margin-left: 30px;

            > li {
                margin: 0 0 20px
            }
        }
    }

    @media (max-width: 1600px) {
        .service {
            &__image {
                margin: 0 30px;
                width: 40%;
            }
        }
    }

    @media (max-width: 1100px) {
        .service {
            &__image {
                display: none;
            }

            &__info {
                padding: 0;
            }

            &-groups {
                margin-bottom: 20px;
                display: flex;
                flex-wrap: wrap;

                &__name {
                    margin: 10px 5px;
                }
            }
        }
    }
</style>

<div class="service-groups">
    {#each services as service, index}
        <div class="service-groups__name">
            <Button
                    on:click={() => selectService(index)}
                    variant={selectedService === service ? 'contained' : ''}
            >{service.group}</Button>
        </div>
    {/each}
</div>
<div class="services-container">
    <div class="service" bind:this={element}>
        <img
            class="service__image"
            alt="{selectedService.group}"
            title="{selectedService.group}"
            src="./assets/services/{selectedService.image}"
        />
        <div class="service__info">
            <p class="service__title">{selectedService.title}</p>
            <p class="service__description">{selectedService.description}</p>
            <ul class="service__items">
                {#each selectedService.items as item}
                    <li>{item}</li>
                {/each}
            </ul>
        </div>
    </div>
</div>
