// 日付をフォーマット
export function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Intl.DateTimeFormat('ja-JP', options).format(new Date(dateString));
}