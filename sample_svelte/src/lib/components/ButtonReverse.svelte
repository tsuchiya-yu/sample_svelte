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
    class={`bg-white text-yellow-400 inline-flex items-center justify-center border border-yellow-400 rounded px-4 py-3 w-full text-center transition duration-100 ease-in-out align-middle overflow-hidden whitespace-nowrap break-words outline-none ${!disabled ? '' : 'opacity-50'}`}
    on:click={handleClick}
  >
    {text}
  </button>
</div>
