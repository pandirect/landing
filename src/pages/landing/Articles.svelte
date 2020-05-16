<script>
    import {Button} from '../../components/';

    const articles = [
        {
            title: 'article name',
            url: '',
            preview: ''
        },
        {
            title: 'article name',
            url: '',
            preview: ''
        },
        {
            title: 'article name',
            url: '',
            preview: ''
        },
        {
            title: 'Все статьи',
            url: '/cases',
            preview: ''
        },
    ];
</script>

<style lang="scss">
    .articles {
        &__title {
            font-family: "SFDisplay-Light", sans-serif;
            font-size: 34px;
            color: var(--black);
            line-height: 36px;
            margin-bottom: 40px;
        }

        &__items {
            display: flex;
            margin: auto;
            flex-wrap: wrap;
        }
    }

    .article {
        $width: 250px;

        width: $width;
        margin: 0 60px 30px 0;
        position: relative;

        &:first-child {
            margin-left: 0;
        }

        &__substrate {
            position: absolute;
            top: 0;
            left: 0;
            width: $width;
            height: 180px;
            opacity: 0;
            transition: .25s;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover {
                opacity: 1;
            }

            &:before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: -1;
                background: var(--purple);
                opacity: 0.75;
                border-radius: 5px;
            }
        }

        &__image {
            width: 100%;
            height: 180px;
            border-radius: 5px;
        }

        &__title {
            font-family: "SFDisplay-Light", sans-serif;
            font-size: 16px;
            color: var(--black);
            line-height: 24px;
            text-align: center;
            display: block;
            width: 100%;
            margin-top: 5px;
        }
    }

    @media (max-width: 1550px) {
        .article {
            margin: 0 auto 0 0;
        }
    }
</style>

<div class="articles">
    <h3 class="articles__title">Наши статьи</h3>
    <div class="articles__items">
        {#each articles as article, index (index)}
            <div class="article">
                <div class="article__substrate">
                    <a class="article__link" href="{article.url}">
                        <Button variant="outlined">Подробнее</Button>
                    </a>
                </div>
                <img src="{article.image}" alt="" class="article__image"/>
                <span class="article__title">{article.title}</span>
            </div>
        {/each}
    </div>
</div>
