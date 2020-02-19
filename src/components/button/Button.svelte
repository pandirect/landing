<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let options = {};
    const {text} = options;
</script>

<button on:click={() => dispatch('click')}>
    <slot>{text}</slot>
</button>