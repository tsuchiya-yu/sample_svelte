<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let text = '';
  export let disabled = false;
  export let type: 'button' | 'submit' | 'reset' = 'button'; // 型を明示的に指定

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('click');
  }
</script>

<div class='w-full h-11 text-base font-bold inline-flex items-center my-6'>
  <button
    type={type}
    disabled={disabled}
    class={`bg-yellow-400 ${!disabled ? 'text-white' : 'text-gray-100'} inline-flex items-center justify-center border border-transparent rounded px-4 py-3 w-full text-center transition duration-100 ease-in-out align-middle overflow-hidden whitespace-nowrap break-words outline-none`}
    on:click={handleClick}
  >
    {text}
  </button>
</div>
