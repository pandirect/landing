<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export const options = {};
    export let variant = 'text';
    export let disabled = false;
    export let type = void 0;
    export let text = '';

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
    cursor: pointer;
    transition: .25s;

    &:hover {
        color: var(--blue);
    }

    &_outlined,
    &_contained {
        border: 2px solid var(--blue);
        color: var(--blue);

        &:hover {
            box-shadow: 0 4px 12px 4px rgba(34, 144, 255, 0.2);
        }
    }

    &_outlined {
        background: var(--white);

        &:hover {
            color: var(--blue);
        }
    }

    &_contained {
        background: var(--blue);
        color: var(--white);

        &:hover {
            color: var(--white);
        }
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