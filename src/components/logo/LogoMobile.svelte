<script>
    import Text from "./assets/Text.svelte";
    export let colorType;
</script>

<style lang="scss">
    .logo-mobile {
        display: none;
    }

    @media (max-width: 900px) {
        .logo-mobile {
            display: block;
        }
    }
</style>

<div class="logo-mobile">
    <Text type="{colorType}"/>
</div>
