<script lang="ts">
    import { pageSharemodalStore } from '$lib/pageSharemodalStore';

    export function closeModal () {
        pageSharemodalStore.set(false);
    }
</script>

  
{#if $pageSharemodalStore}
    <div class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-40">
        <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div class="modal-content py-4 text-left px-6">
                <div class="flex justify-between items-center pb-3">
                    <p class="text-2xl font-bold">モーダルのタイトル</p>
                    <button on:click={closeModal} class="text-black">
                        ✖️
                    </button>
                </div>
                <div>
                    <p>モーダルの内容</p>
                    <div class="flex justify-end pt-2">
                        <button on:click={closeModal} class="px-4 bg-gray-500 p-3 rounded-lg text-white hover:bg-gray-400">
                            閉じる
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}