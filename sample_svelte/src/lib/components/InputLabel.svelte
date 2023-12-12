<script>
  export let forId = ''; // 関連付けるinputフィールドのID
  export let text = ''; // ラベルのテキスト
</script>

<span class='flex items-center mb-1'>
  <label for={forId} class='text-sm font-bold leading-snug'>{text}</label>
</span>
