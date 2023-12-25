<script>
  export let id = '';
  /**
   * @type {any[]}
   */
  export let options = []; // { value: string, name: string }[] の形式
  export let value = '';
  export let required = false;
  export let blank = false;
</script>

<div class="w-full">
  <select bind:value={value} {id} {required} class="text-left appearance-none bg-transparent text-primary block flex-auto outline-none p-4 w-full bg-primary border border-primary rounded box-border text-base font-normal leading-snug m-0 mt-1 mb-6">
      {#if blank}
        <option value="" disabled>選択してください</option>
      {/if}
      {#each options as option}
          <option value={option.code}>{option.name}</option>
      {/each}
  </select>
</div>
