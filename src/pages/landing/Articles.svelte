<script>
    const articles = [
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

<style type="text/scss" lang="scss">

</style>

<div class="articles">
    <h3 class="articles__title">Наши статьи</h3>
    <div class="articles__items">
        {#each articles as article, index (index)}
            <div class="article">
                <div class="article__substrate">
                    <a class="button button_white" href="{article.url}">Подробнее</a>
                    <div class="background"></div>
                </div>
                <img src="{article.image}" alt="" class="article__image" />
                <span class="article__title">{article.title}</span>
            </div>
        {/each}
    </div>
</div>