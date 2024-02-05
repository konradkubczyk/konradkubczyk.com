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
                    <i class="bi bi-box-arrow-up-right"></i>
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
