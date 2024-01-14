<script lang="ts">
    import { onMount } from 'svelte';
    import { checkLoginStatus } from '$lib/auth';
    import Heading from '$lib/components/Heading.svelte';

    onMount(async () => {
        await checkLoginStatus();
    });
</script>

<div class='relative flex-grow w-full max-w-xl mx-auto p-6 lg:p-8'>
    <Heading text="マイページ" />
</div>