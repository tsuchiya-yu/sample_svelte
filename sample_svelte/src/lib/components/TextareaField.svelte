<script>
  export let id = '';
  export let placeholder = '';
  export let value = ''; // この変数は親コンポーネントと双方向バインドされます
  export let required = false;
  export let rows = 3; // デフォルトの行数
  export let cols = 50; // デフォルトの列幅
</script>

<div class='inline-flex w-full items-center rounded cursor-text overflow-hidden relative'>
  <textarea {id} {placeholder} bind:value={value} {required} {rows} {cols} class='border-gray-700 text-left appearance-none bg-transparent text-primary block flex-auto outline-none p-4 w-full bg-primary border border-primary rounded box-border text-base font-normal leading-snug m-0 mt-1 mb-6'/>
</div>
