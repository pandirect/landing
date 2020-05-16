<script>
    const {classes, ...rest} = $$restProps;

</script>

<style lang="scss">
    .section {
        margin: 0 auto 100px;
    }

    @media (max-width: 1550px) {
        .section {
            margin: 0 30px 100px;

            &:first-child {
                margin: 0 auto 100px;
            }
        }
    }
</style>

<section class="section" {...rest}>
    <slot></slot>
</section>