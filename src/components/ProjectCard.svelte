<script lang="ts">
    export let name: string;
    export let description: string;
    export let tags: string[];
    export let link: string;
</script>

<a
        class="project-card flex-1 flex rounded-lg border border-zinc-600/50 p-5 flex-col gap-3 cursor-pointer bg-neutral-800/25 transition hover:bg-neutral-700/25 justify-between"
        href={link}
        target="_blank"
>
    <div>
        <h3 class="text-2xl font-semibold text-neutral-100">{name}</h3>
        <p class="text-white/70 mt-3">
            {description}
        </p>
    </div>
    <div
            class="flex text-xs text-neutral-100 uppercase gap-2 tracking-wider border-t border-zinc-600/50 pt-5 mt-1 flex-wrap sm:flex-nowrap"
    >
        {#each tags as tag}
            <span class="tag border border-white/10 px-2 py-1 rounded whitespace-nowrap font-semibold text-white/70">
                    {tag}
                </span>
        {/each}
    </div>
</a>
