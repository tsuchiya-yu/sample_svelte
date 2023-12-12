<script>
    export let id = '';
    export let type = 'text'; // デフォルトのタイプ
    export let placeholder = '';
    export let value = '';
    export let required = false;
  
    // アクションを定義
    /**
	 * @param {HTMLInputElement} node
	 */
    function setType(node) {
      node.type = type;
    }
</script>
  
<div class='inline-flex w-full items-center rounded cursor-text overflow-hidden relative'>
    <input use:setType {id} {placeholder} bind:value class='border-gray-700 text-left appearance-none bg-transparent text-primary block flex-auto outline-none p-4 w-full bg-primary border border-primary rounded box-border text-base font-normal leading-snug m-0 mt-1 mb-4' {required}>
</div>
  