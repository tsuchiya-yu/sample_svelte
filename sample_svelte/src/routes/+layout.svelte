<script>
  import "../app.css";
  import { page } from '$app/stores';
  import { derived } from 'svelte/store';
  import { isLoggedIn } from '$lib/auth';
  import FooterGroup from '$lib/components/layout/footerGroup.svelte';

  // フッダーヘッターを表示しないパス
  const simpleLayoutPath = ['/login', '/signup'];
  const isSimpleLayout = derived(page, $page =>
    simpleLayoutPath.some(path => $page.url.pathname.startsWith(path))
  );

  // フッターのグループ定義
  let poricies = [
    { title: 'プライバシーポリシー', url: '/privacy' },
    { title: '利用規約', url: '/terms' }
  ];
  let announces = [
    { title: 'お知らせ一覧', url: '/announces' },
  ];
  let accontsForNotSignIn = [
    { title: '会員登録', url: '/signup' },
    { title: 'ログイン', url: '/login' },
  ];
  let accontsForSignIn = [
    { title: 'マイページ', url: '/mypage' },
    { title: 'プロフィール設定', url: '/mypage/profile' },
    { title: 'ログアウト', url: '/logout' },
  ];

</script>

{#if !$isSimpleLayout}
  <div class='bg-yellow-400 text-white mx-auto w-full flex'>
    <div class='flex justify-between w-full mx-auto sm:w-[1100px]'>
      <div class=''>
        <div class='flex justify-between'>ヘッダー</div>
      </div>
    </div>
  </div>
{/if}

<slot />

{#if !$isSimpleLayout}
  <div class='bg-yellow-400 mx-auto w-full py-20'>
    <div class='inline justify-start w-full mx-auto sm:w-[1100px] sm:flex'>
      <FooterGroup title="お知らせ" links={announces} />
      <FooterGroup title="プライバシーと利用規約" links={poricies} />
      {#if !$isLoggedIn}
        <FooterGroup title="アカウント" links={accontsForNotSignIn} />
      {:else}
        <FooterGroup title="アカウント" links={accontsForSignIn} />
      {/if}
    </div>
  </div>
{/if}