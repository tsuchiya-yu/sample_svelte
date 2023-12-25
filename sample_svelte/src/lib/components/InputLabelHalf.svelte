<script>
  export let forId = ''; // 関連付けるinputフィールドのID
  export let text = ''; // ラベルのテキスト
</script>

<span class='flex items-center mb-1'>
  <label for={forId} class='text-base font-bold leading-snug w-52'>{text}</label>
</span>
