<script>
    import IconWithText from './assets/IconWithText.svelte';
</script>

<style lang="scss">
    .logo {
        display: block;
    }

    @media (max-width: 768px) {
        .logo {
            display: none;
        }
    }
</style>

<div class="logo">
    <IconWithText/>
</div>
