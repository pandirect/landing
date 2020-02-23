<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let options = {};
    export let variant = 'text';
    export let disabled = false;
    export let type = void 0;

    $: outlined = variant === 'outlined';
    $: contained = variant === 'contained';
</script>

<style lang="scss">
.button {
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    padding: 15px 30px;
    border-radius: 29px;
    border: 2px solid var(--white);
    background: none;
    outline: none;

    &_outlined,
    &_contained {
        border: 2px solid var(--blue);
        color: var(--blue);
    }

    &_outlined {
        background: var(--white);
    }

    &_contained {
        background: var(--blue);
        color: var(--white);
    }
}
</style>

<button
    class="button"
    class:button_contained={contained}
    class:button_outlined={outlined}
    class:button_disabled={disabled}
    on:click={() => dispatch('click')}
    type={type}
>
    <slot>{text}</slot>
</button>