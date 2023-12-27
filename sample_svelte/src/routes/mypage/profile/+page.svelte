<script lang="ts">
    import { onMount } from 'svelte';
    import { ShopMstsDoc, }  from '../../../graphql/generated';
    import { browser } from '$app/environment';
    import client from '../../../../lib/graphql/apollo';
    import { checkLoginStatus, currentUser } from '$lib/auth';
    import InputField from '$lib/components/InputField.svelte';
    import InputLabelHalf from '$lib/components/InputLabelHalf.svelte';
    import SelectField from '$lib/components/SelectField.svelte';
    import TextareaField from '$lib/components/TextareaField.svelte';
    import Button from '$lib/components/Button.svelte';
    import Heading from '$lib/components/Heading.svelte';
    import Hr from '$lib/components/Hr.svelte';
    import { CreateUserProfileDoc, CreateUserSnsDoc} from '../../../graphql/generated';
    import type { CreateUserProfileInput, UserSnsCreateInput } from '../../../graphql/generated';

    let name = '';
    let catchphrase = '';
    let introduction = '';
    let selectedShopCode = '';
    let x = '';
    let facebook = '';
    let instagram = '';

    let shopMsts: { code: string, name: string}[] = [];

    onMount(async () => {
        await checkLoginStatus();
        try {
          const { data } = await client.query({
            query: ShopMstsDoc,
          });
          $: shopMsts = data.shopMsts;
        } catch (error) {
          console.error('Error fetching shop msts:', error);
        }
    });

    // プロフィールを更新する
    async function update() {
      try {
        const user = await currentUser();
        const email = user.email;
        // UserProfileの作成
        const userProfileData: CreateUserProfileInput = {
                user: { connect: { email: email } },
                shopMst: selectedShopCode ? { connect: { code: selectedShopCode } } : undefined,
                catchphrase: catchphrase,
                introduction: introduction
            };
        const { data: userProfileRes } = await client.mutate({
          mutation: CreateUserProfileDoc,
          variables: {
              data: userProfileData
          }
        });
        // UserSnsの作成
        const userSnsData: UserSnsCreateInput = {
                user: { connect: { email: email } },
                x: x,
                facebook: facebook,
                instagram: instagram
            };
        const { data: userSnsRes } = await client.mutate({
          mutation: CreateUserSnsDoc,
          variables: {
              data: userSnsData
          }
        });

      } catch (error) {
        // エラーハンドリング
        console.error('Update failed', error);
      }
    }

    // 前のページに戻る
    function goBack() {
        if (browser) {
            window.history.back();
        }
    }
</script>

<div class='relative flex-grow w-full max-w-xl mx-auto p-6 lg:p-8'>
    <Heading text="プロフィール編集" />
    <form on:submit|preventDefault={update}>
        <div style='display: flex; align-items: baseline;'>
            <InputLabelHalf forId="name" text="ニックネーム" />
            <InputField id="name" type="text" placeholder="はなこ" bind:value={name} required/>
        </div>
        <div style='display: flex; align-items: baseline;'>
            <InputLabelHalf forId="catchphrase" text="ひとこと" />
            <InputField id="catchphrase" type="text" placeholder="365日中本！" bind:value={catchphrase} required/>
        </div>
        <div style='display: flex; align-items: baseline;'>
            <InputLabelHalf forId="catchphrase" text="ホーム" />
            <SelectField id="shop" bind:value={selectedShopCode} options={shopMsts} required blank={true} />
        </div>
        <div style='display: flex; align-items: baseline;'>
            <InputLabelHalf forId="introduction" text="自己紹介" />
            <TextareaField id="introduction" placeholder="初めて中本に行ったのは二十歳の時。それから10年ずっと通い続けています。" bind:value={introduction} required />
        </div>
        <Hr/>
        <p class='text-gray-400 p-1.5 text-lg'>SNS</p>
        <div style='display: flex; align-items: baseline;'>
            <InputLabelHalf forId="introduction" text="X(旧Twitter)" />
            <InputField id="x" type="text" placeholder="@nakamoto" bind:value={x} />
        </div>
        <div style='display: flex; align-items: baseline;'>
            <InputLabelHalf forId="introduction" text="Facebook" />
            <InputField id="facebook" type="text" placeholder="10000000000000" bind:value={facebook} />
        </div>
        <div style='display: flex; align-items: baseline;'>
          <InputLabelHalf forId="introduction" text="インスタ" />
          <InputField id="instagram" type="text" placeholder="10000000000000" bind:value={instagram} />
      </div>
        <Button text="更新する" type='submit' disabled={!name} />
        <p class='text-center text-gray-400 cursor-pointer' on:click={goBack}>もどる</p>
    </form>
</div>
