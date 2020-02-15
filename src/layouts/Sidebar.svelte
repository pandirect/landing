<script>
    export let links;
    import Logo from '../components/logo/Logo.svelte';
</script>

<div class="sidebar">
    <Logo/>
    <nav>
        <ul>
            {#each links as {link, label}, index }
                <li>
                    <a href="#{link}">{label}</a>
                </li>
            {/each}
        </ul>
    </nav>
</div>
