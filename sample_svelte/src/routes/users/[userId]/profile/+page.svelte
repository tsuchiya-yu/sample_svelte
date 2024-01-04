<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { GetUserDoc } from '../../../../graphql/generated';
    import client from '../../../../../lib/graphql/apollo';
    import type { User } from '../../../../types';

    let id: number;
    $: id = Number($page.params.userId);

    let user: User | null = null;

    onMount(async () => {
        try {
            const { data: userRes } = await client.query({
                query: GetUserDoc,
                variables: {
                id: id,
            }
            });
            user = userRes.user;
            console.log(user);
        } catch (error) {
          console.error('Error fetch user:', error);
        }
    });
</script>
<h1>プロフィールページ</h1>
<pre>{JSON.stringify(user, null, 2)}</pre>