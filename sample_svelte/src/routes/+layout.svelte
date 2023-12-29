<script>
  import "../app.css";
  import { page } from '$app/stores';
  import { derived } from 'svelte/store';

  // フッダーヘッターを表示しないパス
  const simpleLayoutPath = ['/login', '/signup'];
  const isSimpleLayout = derived(page, $page =>
    simpleLayoutPath.some(path => $page.url.pathname.startsWith(path))
  );
</script>

{#if !$isSimpleLayout}
  <div class='bg-yellow-400 text-white mx-auto w-full'>
    <div class='flex justify-between w-full mx-auto sm:w-[1100px]'>
      <div>
        <div class='flex justify-between'>ヘッダー</div>
      </div>
    </div>
  </div>
{/if}

<slot />

{#if !$isSimpleLayout}
  <div class='bg-yellow-400 text-white mx-auto w-full py-20'>
    <div class='flex justify-between w-full mx-auto sm:w-[1100px]'>
      <div>
        <div class='flex justify-between mb-20'>フッター</div>
      </div>
    </div>
  </div>
{/if}