<script>
    export let isOpen = false;
    export let colorType = "white";

    let color;
    $: color = getColor(colorType);

    function getColor(type) {
        switch (type) {
            case "white":
                return "#ffffff";
            case "purple":
                return "#627CE0";
            default:
                return "#ffffff";
        }
    }
</script>

<style lang="scss">
    .hamburger-mobile {
        display: none;
        flex-wrap: wrap;
        position: relative;
        width: 26px;
        transition: .25s;

        span {
            position: absolute;
            left: 0;
            display: block;
            width: 100%;
            opacity: 1;
            height: 2px;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .25s ease-in-out;
            -moz-transition: .25s ease-in-out;
            -o-transition: .25s ease-in-out;
            transition: .25s ease-in-out;

            &:nth-child(1) {
                top: 0;
            }

            &:nth-child(2) {
                top: 8px;
            }

            &:nth-child(3) {
                top: 16px;
            }
        }

        &[data-open="true"] {
            span {
                &:nth-child(1) {
                    top: 8px;
                    -webkit-transform: rotate(135deg);
                    -moz-transform: rotate(135deg);
                    -o-transform: rotate(135deg);
                    transform: rotate(135deg);
                }

                &:nth-child(2) {
                    opacity: 0;
                    left: -60px;
                }

                &:nth-child(3) {
                    top: 8px;
                    -webkit-transform: rotate(-135deg);
                    -moz-transform: rotate(-135deg);
                    -o-transform: rotate(-135deg);
                    transform: rotate(-135deg);
                }
            }
        }
    }

    @media (max-width: 768px) {
        .hamburger-mobile {
            display: flex;
        }
    }
</style>

<div class="hamburger-mobile" data-open="{isOpen}">
    <span style="background-color: {color}"></span>
    <span style="background-color: {color}"></span>
    <span style="background-color: {color}"></span>
</div>
