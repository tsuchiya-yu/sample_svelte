<script lang="ts">
import { onMount } from 'svelte';
import client from '../../../../lib/graphql/apollo';
import type { ShopMst } from '../../../types';
import { ShopMstsDoc} from '../../../graphql/generated';
import Heading from '$lib/components/Heading.svelte';

let shopMsts: ShopMst[] = [];

onMount(async () => {
    // Shopマスタの取得
    const { data } = await client.query({
        query: ShopMstsDoc,
    });
    $: shopMsts = data.shopMsts;
});

const today = new Date().toISOString().split('T')[0];

</script>

<div class='relative flex-grow w-full max-w-xl mx-auto p-6 lg:p-8'>
  <Heading text="活動を投稿する" />
  <select class="block w-full p-2 border border-gray-300 rounded shadow">
    {#each shopMsts as shopMst}
        <option value={shopMst.code}>{shopMst.name}</option>
    {/each}
  </select>
  <div class="mt-4">
    <input type="date" class="block w-full p-2 border border-gray-300 rounded shadow" max={today}>
  </div>
</div>
