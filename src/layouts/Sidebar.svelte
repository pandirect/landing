<script>
    export let links;
    import Logo from '../components/logo/Logo.svelte';
</script>

<div class="sidebar">
    <Logo/>
    <nav id="navbar" class="navbar" data-target="#navbar">
        <ul class="nav main-menu-navigate navigate">
            {#each links as {link, label}, index }
                <li class="nav-item navigate-item">
                    <a class="nav-link active" href="#{link}">{label}</a>
                </li>
            {/each}
        </ul>
    </nav>
</div>