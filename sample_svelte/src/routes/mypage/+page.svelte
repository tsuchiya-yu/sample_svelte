<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { checkLoginStatus, currentUser } from '$lib/auth';
    import type { User } from '../../types';
    import Button from '$lib/components/Button.svelte';
    import ButtonReverse from '$lib/components/ButtonReverse.svelte';

    let user: User | null = null;

    onMount(async () => {
        await checkLoginStatus();
        user = await currentUser();
        console.log('user:', user);
    });

    function gotoProfileEdit() {
        goto('/mypage/profile');
    }

    function gotoProfile() {
        if (user && user.id) {
            goto(`/users/${user.id}/profile`);
        }
    }

    function gotoActivities() {
        goto('/mypage/activities');
    }
</script>

<div class='relative flex-grow w-full max-w-xl mx-auto p-6 lg:p-8'>
    <div class="flex items-baseline">
        <img class='w-32 h-32 object-contain m-auto' src={user?.userImageFile}/>
        <div>
            <h3 class='font-bold text-xl'>{user?.name ? user.name : '　'}</h3>
            <div class='flex items-baseline'>
                <div class='mr-3'>
                    <Button text="プロフィール編集" paddingClass="px-2 py-1" on:click={gotoProfileEdit}/>
                </div>
                <div>
                    <ButtonReverse text="プロフィールページ" paddingClass="px-2 py-1" on:click={gotoProfile}/>
                </div>
            </div>
            <div class='flex items-baseline'>
                <div>
                    <ButtonReverse text="活動を投稿する" paddingClass="px-2 py-1" on:click={gotoActivities}/>
                </div>
            </div>
        </div>
    </div>
</div>
