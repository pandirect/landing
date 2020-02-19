<script>
    import {services} from '../../models';

    let selectedService = services[0];

    function selectService(index) {
        selectedService = services[index];
    }
</script>

<section class="services">
    <div class="service-groups">
        {#each services as service, index}
            <button on:click={() => selectService(index)}>{service.group}</button>
        {/each}
    </div>
    <div class="services-container">
        <div class="service">
            <div class="service__image">
                <img alt="{selectedService.group}" title="{selectedService.group}" src="../assets/services/{selectedService.image}"/>
            </div>
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
</section>