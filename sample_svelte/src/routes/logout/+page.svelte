<script lang="ts">
    import { onMount } from 'svelte';
    import { signOut } from '$lib/auth';
    import { goto } from '$app/navigation';
    
    onMount(async () => {
        alert('ログアウトしました。');
        signOut();
        goto('/');
    });
</script>

<div class='relative flex-grow w-full max-w-xl mx-auto p-6 lg:p-8'>
</div>