<script>
  export let url = ''; // リンクのURL
  export let text = ''; // リンクのテキスト
</script>

<div class='text-right text-sm'>
  <a href={url} class='text-blue-500 cursor-pointer no-underline'>{text}</a>
</div>