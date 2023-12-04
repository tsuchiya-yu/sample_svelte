<script lang="ts">
  import { onMount } from 'svelte';
  import { formatDate } from '$lib/helpers';
  import client from '../../lib/graphql/apollo';
  import { All_SiteUpdatesDoc } from '../graphql/generated';
  import { siteUpdatesStore } from '$lib/store';

  let siteUpdates: { id: number, title: string, content: string, publishedAt: string, updatedAt: string }[] = [];

  onMount(async () => {
    try {
      const response = await client.query({
        query: All_SiteUpdatesDoc,
      });
      siteUpdatesStore.set(response.data.siteUpdates);
      $: siteUpdates = $siteUpdatesStore;
      console.log(siteUpdates);
    } catch (error) {
      console.error('クエリ実行中のエラー:', error);
    }
  });

</script>

<div class='p-20 mx-auto w-[1100px] max-w-full bg-gray-200 rounded-3xl'>
  <h1 class="text-3xl font-bold">お知らせ</h1>
    <div class='py-4'>
      {#each siteUpdates as update}
        <div class='py-2'>
          <p class="published text-sm">{formatDate(update.publishedAt)}</p>
          <h2 class='title text-base'>{update.title}</h2>
          <a href="/updates/{update.id}">詳細</a>
          <!-- <p>{update.content}</p> -->
          <!-- <p>Updated: {update.updatedAt}</p> -->
        </div>
      {/each}
    </div>
</div>


<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
  .title {
    /* font-size: 14px; */
    font-weight: bold;
  }

  .published {
    /* font-size: 10px; */
    color: #888888;
  }
</style>