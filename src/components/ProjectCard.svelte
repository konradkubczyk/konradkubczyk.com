<script lang="ts">
    /*
     * This Source Code Form is subject to the terms of the Mozilla Public
     * License, v. 2.0. If a copy of the MPL was not distributed with this
     * file, You can obtain one at https://mozilla.org/MPL/2.0/.
     */

    export let name: string;
    export let description: string;
    export let tags: string[];
    export let repository: string;
    export let language: string;
    export let live: string | undefined;
    export let group: boolean | undefined;
</script>

<a
        class="project-card flex-1 flex rounded-lg border border-zinc-600/50 p-5 flex-col gap-5 cursor-pointer bg-neutral-800/25 transition hover:bg-neutral-700/25 hover:border-zinc-500/75 active:scale-[0.99] has-[a:active]:scale-100 justify-between select-none max-w-full sm:min-w-72"
        draggable="false"
        href={repository}
        target="_blank"
>
    <div>
        <div class="flex justify-between gap-5 h-8">
            <h3 class="grow text-2xl text-neutral-100 overflow-hidden text-ellipsis leading-none self-center">
                {name}
            </h3>
            {#if live}
                <a
                        class="border border-white/10 px-2 rounded-md text-white/70 uppercase text-xs transition bg-neutral-600/25 hover:bg-neutral-500/35 hover:border-zinc-400/75 hover:active:scale-95 tracking-wide flex gap-1.5 items-center"
                        draggable="false"
                        href="{live}"
                        target="_blank"
                >
                    <svg class="fill-white/70 w-3" xmlns="http://www.w3.org/2000/svg" height="16" width="16"
                         viewBox="0 0 512 512">
                        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
                    </svg>
                    Try
                </a>
            {/if}
        </div>
        <p class="text-white/70 mt-5">
            {description}
        </p>
    </div>
    <div
            class="flex text-xs text-white/25 uppercase gap-3 tracking-wider flex-wrap"
    >
        <span class="text-white/75 font-bold">
            {language}
        </span>
        {#if group}
            <span class="text-white/75 font-bold">
                Group
            </span>
        {:else}
            <span class="text-white/75 font-bold">
                Individual
            </span>
        {/if}
        {#each tags as tag}
            <span class="tag whitespace-nowrap font-semibold">
                    {tag}
                </span>
        {/each}
    </div>
</a>
