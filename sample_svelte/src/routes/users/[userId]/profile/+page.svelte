<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { GetUserDoc } from '../../../../graphql/generated';
    import client from '../../../../../lib/graphql/apollo';
    import type { User,ShopMst } from '../../../../types';
    import { ShopMstsDoc} from '../../../../graphql/generated';

    let id: number;
    $: id = Number($page.params.userId);

    let user: User | null = null;
    let shopMsts: ShopMst[] = [];

    let shopName = '';

    onMount(async () => {
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
</script>

<div class='relative flex-grow w-full max-w-xl mx-auto p-6 lg:p-8'>
    {#if user}
        <div class="text-center" style='margin-left: 200px;'>
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
    {/if}


    <div class="modal hidden fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
        
        <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          
          <!-- モーダルコンテンツ -->
          <div class="modal-content py-4 text-left px-6">
            <!-- モーダルヘッダ -->
            <div class="flex justify-between items-center pb-3">
              <p class="text-2xl font-bold">モーダルのタイトル</p>
              <div class="modal-close cursor-pointer z-50">
                <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                  <path d="M12.1 11.9L7.5 7.3l4.6-4.6L11.9.9 6 .9 1.4 5.5l1.4 1.4 4.6-4.6 4.6 4.6-1.4 1.4z"/>
                </svg>
              </div>
            </div>
      
            <!-- モーダルの本文 -->
            <p>ここにモーダルの内容が入ります。</p>
      
            <!-- モーダルフッタ -->
            <div class="flex justify-end pt-2">
              <button class="modal-close px-4 bg-gray-500 p-3 rounded-lg text-white hover:bg-gray-400">閉じる</button>
            </div>
          </div>
        </div>
      </div>
</div>