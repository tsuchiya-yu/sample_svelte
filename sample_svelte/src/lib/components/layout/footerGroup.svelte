<script lang="ts">
    export let title: string = '';
    export let links: { title: string; url: string }[] = [];
  </script>
  
  <div class='px-6 py-2.5'>
    <div class='justify-between mb-20 mt-5 text-lg mb-4 font-bold'>{title}</div>
    {#each links as link (link.title)}
      <a href={link.url} class='block mb-2 cursor-pointer'>{link.title}</a>
    {/each}
  </div>
  