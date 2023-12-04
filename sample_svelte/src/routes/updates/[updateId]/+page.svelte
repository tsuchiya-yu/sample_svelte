<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { siteUpdatesStore } from '$lib/store';
    import { formatDate } from '$lib/helpers';
    // import client from '$lib/graphql/apollo';
    // import { All_SiteUpdatesDoc } from '$lib/graphql/generated';
  
    let id: string;
    $: id = $page.params.updateId;
    let siteUpdate: {
		[x: string]: any; title: any; publishedAt: string; content: string; updatedAt: string;};
  
    onMount(async () => {
      const updates = $siteUpdatesStore;
      console.log(updates);
      const found = updates.find(update => update.id.toString() === id);
  
      if (found) {
        siteUpdate = found;
      } else {
        // TODO: graphql呼び出す！(バックからかなぁ)
        // try {
        //   const response = await client.query({
        //     query: All_SiteUpdatesDoc,
        //     variables: { id: parseInt(id) },
        //   });
  
        //   if (response.data.siteUpdates.length === 0) {
        //     goto('/404');
        //   } else {
        //     siteUpdate = response.data.siteUpdates[0];
        //   }
        // } catch (error) {
        //   console.error('Error fetching update:', error);
        // }
      }
    });
  </script>
  
  <div class='p-20 mx-auto w-[1100px] max-w-full bg-gray-200 rounded-3xl'>
    {#if siteUpdate}
        <h1 class="text-3xl font-bold">{siteUpdate.title}</h1>
        <p>{formatDate(siteUpdate.publishedAt)}</p>
        <p>{siteUpdate.content}</p>
    {/if}
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