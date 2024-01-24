<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { GetUserDoc } from '../../../../graphql/generated';
    import client from '../../../../../lib/graphql/apollo';
    import type { User,ShopMst } from '../../../../types';
    import { ShopMstsDoc} from '../../../../graphql/generated';
    import { pageSharemodalStore } from '$lib/pageSharemodalStore'; 
    import ModalSharePage from '$lib/components/ModalSharePage.svelte';

    let id: number;
    $: id = Number($page.params.userId);

    let user: User | null = null;
    let shopMsts: ShopMst[] = [];

    let shopName = '';

    // 現在ページのURL
    $: currentPageUrl = $page.url.toString();

    onMount(async () => {
        pageSharemodalStore.set(false);

        try {
            // ユーザ情報の取得
            const { data: userRes } = await client.query({
                query: GetUserDoc,
                variables: {
                id: id,
            }
            });
            user = userRes.user;
            console.log('user:', user);

            // Shopマスタの取得
            const { data } = await client.query({
                query: ShopMstsDoc,
            });
            $: shopMsts = data.shopMsts;
            $: shopName = getNameByCode(user?.userProfile?.shopMstCode || '');
        
        } catch (error) {
          console.error('Error fetch user:', error);
        }
    });

    // codeからショップの名称を取得
    function getNameByCode(code: string) {
        const shop = shopMsts.find(shop => shop.code === code);
        return shop ? shop.name : '';
    }

    // モーダルを開く
    function openModal() {
        pageSharemodalStore.set(true);
    }
</script>

<div class='relative flex-grow w-full max-w-xl mx-auto p-6 lg:p-8'>
    {#if user}
        <div class="text-center" style='margin-left: 200px;' on:click={openModal}>
            <img class='w-[24px] inline-block cursor-pointer' src='/images/share.png'/>
        </div>

        <img class='w-32 h-32 m-auto rounded-full object-cover' src={user.userImageFile}/>
        <h1 class='text-center font-bold text-2xl m-1'>{user.name}</h1>
        <h2 class='text-center text-xl'>{user.userProfile?.catchphrase}</h2>

        <div class="flex w-full justify-center gap-5 my-4">
            {#if user.userSns?.facebook}
                <a href={`https://www.facebook.com/${user.userSns.facebook}`} target='_blank' rel='noopener noreferrer'>
                    <img class='w-[42px] h-[42px] cursor-pointer' src='/images/sns/facebook_icon.png'>
                </a>
            {/if}
            {#if user.userSns?.instagram}
                <a href={`https://www.instagram.com/${user.userSns.instagram}`} target='_blank' rel='noopener noreferrer'>
                    <img class='w-[42px] h-[42px] cursor-pointer' src='/images/sns/instagram_icon.png'>
                </a>
            {/if}
            {#if user.userSns?.x}
                <a href={`https://twitter.com/${user.userSns.x}`} target='_blank' rel='noopener noreferrer'>
                    <img class='w-[42px] h-[42px] cursor-pointer' src='/images/sns/x_icon.png'>
                </a>
            {/if}
        </div>

        <div class="flex items-center my-2">
            <p class="min-w-[100px] mr-4 text-gray-400">ホーム</p>
            <p>{shopName}</p>
        </div>

        <div class="flex items-center my-2">
            <p class="min-w-[100px] mr-4 text-gray-400">プロフィール</p>
            <p>{user.userProfile?.introduction} {user.userProfile?.introduction} {user.userProfile?.introduction}</p>
        </div>

        <ModalSharePage title={`${user.name}|プロフィールページ`} url={currentPageUrl} />
    {/if}

</div>