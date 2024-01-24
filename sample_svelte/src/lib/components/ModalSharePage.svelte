<script lang="ts">
    import { onMount } from 'svelte';
    import QRCode from 'qrcode';
    import { pageSharemodalStore } from '$lib/pageSharemodalStore';
    import Hr from '$lib/components/Hr.svelte';

    export let url = '';
    export let title = '';

    let canvas: HTMLCanvasElement;

    onMount(() => {
    });

    $: if ($pageSharemodalStore && url && canvas) {
        generateQRCode(url);
    }

    function generateQRCode(url: string) {
        QRCode.toCanvas(canvas, url, {
            errorCorrectionLevel: 'H',
            color: {
                dark: '#000',
                light: '#fff'
            }
        }).then(() => {
            console.log('QRコード生成OK');
        }).catch((error: Error) => {
            console.error('QRコード生成エラー:', error);
        });
    }

    export function closeModal() {
        pageSharemodalStore.set(false);
    }
</script>

{#if $pageSharemodalStore}
    <div class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-40">
        <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div class="modal-content py-4 text-left px-6">
                <div class="flex justify-between items-center pb-3">
                    <p class="text-xl font-bold m-auto">{title}</p>
                    <button on:click={closeModal} class="text-black border-none">✖️</button>
                </div>
                <div>
                    <p class='text-gray-400 p-1.5 '>QRコードで共有する</p>
                    <div class='text-center'>
                        <canvas class='size-full m-auto' bind:this={canvas}></canvas>
                    </div>
                    <Hr/>
                    <p class='text-gray-400 p-1.5 '>SNSで共有する</p>
                    <div class="flex w-full justify-center gap-5 my-4">
                        <a href={`https://www.facebook.com/share.php?u=${url}`} target='_blank' rel='noopener noreferrer'>
                            <img class='w-[42px] h-[42px] cursor-pointer' src='/images/sns/facebook_icon.png'>
                        </a>
                        <a href={`https://social-plugins.line.me/lineit/share?url=${url}`} target='_blank' rel='noopener noreferrer'>
                            <img class='w-[42px] h-[42px] cursor-pointer' src='/images/sns/line_icon.png'>
                        </a>
                        <a href={`https://twitter.com/share?url=${url}`} target='_blank' rel='noopener noreferrer'>
                            <img class='w-[42px] h-[42px] cursor-pointer' src='/images/sns/x_icon.png'>
                        </a>
                    </div>
                </div>
                <div class="flex justify-end pt-2">
                </div>
            </div>
        </div>
    </div>
{/if}
