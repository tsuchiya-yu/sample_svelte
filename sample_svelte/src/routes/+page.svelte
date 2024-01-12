<script lang="ts">
  import { onMount } from 'svelte';
  import { formatDate } from '$lib/helpers';
  import client from '../../lib/graphql/apollo';
  import { AllSiteUpdatesDoc } from '../graphql/generated';
  import { siteUpdatesStore } from '$lib/store';

  let siteUpdates: { id: number, title: string, content: string, publishedAt: string, updatedAt: string }[] = [];

  onMount(async () => {
    try {
      const response = await client.query({
        query: AllSiteUpdatesDoc,
      });
      siteUpdatesStore.set(response.data.siteUpdates);
      $: siteUpdates = $siteUpdatesStore;
      console.log(siteUpdates);
    } catch (error) {
      console.error('クエリ実行中のエラー:', error);
    }
  });

</script>

<div class="container mx-auto px-4 py-8">
  <div class="bg-gray-100 rounded-3xl rounded px-8 pt-6 pb-8 mb-4">
    <h1 class="text-3xl font-bold">お知らせ</h1>
      <div class='py-4'>
        {#each siteUpdates as update}
          <div class='py-2'>
            <p class="published text-sm">{formatDate(update.publishedAt)}</p>
            <h2 class='title text-base'>{update.title}</h2>
            <a href="/updates/{update.id}">詳細画面へのリンク</a>
          </div>
        {/each}
      </div>
  </div>
</div>


<style lang="postcss">
  .title {
    /* font-size: 14px; */
    font-weight: bold;
  }

  .published {
    /* font-size: 10px; */
    color: #888888;
  }
</style>