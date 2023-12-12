<script>
  export let text = ''; // ボタンのテキスト
  export let disabled = false; // ボタンの非活性状態
</script>

<div class='w-full h-11 text-base font-bold inline-flex items-center my-6'>
  <button type="submit" disabled={disabled} class={`bg-rose-600 ${!disabled ? 'text-white' : 'text-gray-100'} inline-flex items-center justify-center border border-transparent rounded px-4 py-3 w-full text-center transition duration-100 ease-in-out align-middle overflow-hidden whitespace-nowrap break-words`}>
    {text}
  </button>
</div>