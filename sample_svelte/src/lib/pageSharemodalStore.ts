import { writable } from 'svelte/store';

// ページ共有モーダルの表示状態を管理するストア
// TODO: toreにしなくても良いかも...
export const pageSharemodalStore = writable(false);
