<script lang="ts">
  import { onMount } from 'svelte';
  import client from '../../lib/graphql/apollo';
  import { All_SiteUpdatesDoc } from '../graphql/generated';

  let siteUpdates: { id: number, title: string, content: string, publishedAt: string, updatedAt: string }[] = [];

  onMount(async () => {
    try {
      const response = await client.query({
        query: All_SiteUpdatesDoc,
      });
      siteUpdates = response.data.siteUpdates;
      console.log(siteUpdates);
    } catch (error) {
      console.error('クエリ実行中のエラー:', error);
    }
  });

  // 日付をフォーマット
  function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('ja-JP', options).format(new Date(dateString));
  }

</script>

<h1 class="text-3xl font-bold underline">
お知らせ
</h1>
{#each siteUpdates as update}
  <div>
    <p class="published">{formatDate(update.publishedAt)}</p>
    <h2 class='title'>{update.title}</h2>
    <!-- <p>{update.content}</p> -->
    <!-- <p>Updated: {update.updatedAt}</p> -->
  </div>
{/each}


<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
  .title {
    font-size: 14px;
    font-weight: bold;
  }

  .published {
    font-size: 10px;
    color: #888888;
  }
</style>