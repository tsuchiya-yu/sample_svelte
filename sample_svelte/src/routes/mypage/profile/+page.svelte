<script lang="ts">
    import { onMount } from 'svelte';
    import gql from 'graphql-tag';
    import { isLoggedIn, checkLoginStatus } from '$lib/auth';

    const IS_USER_LOGGED_IN = gql`
        query IsUserLoggedIn {
            isUserLoggedIn
        }
    `;

    onMount(async () => {
        await checkLoginStatus();
    });
</script>

<h1>{$isLoggedIn ? 'ログイン済み' : '未ログイン'}</h1>
