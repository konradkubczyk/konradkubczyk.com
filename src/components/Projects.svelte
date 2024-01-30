<script lang="ts">
    /*
     * This Source Code Form is subject to the terms of the Mozilla Public
     * License, v. 2.0. If a copy of the MPL was not distributed with this
     * file, You can obtain one at https://mozilla.org/MPL/2.0/.
     */

    import ProjectCard from "./ProjectCard.svelte";

    interface Project {
        name: string;
        description: string;
        tags: string[];
        repository: string;
        language: string;
        live?: string;
        group?: boolean;
    }

    export let projects: Project[];

    let tags: Set<string> = new Set([...projects.map(project => project.tags)].flat());
    let activeFilters: Set<string> = new Set();

    function toggleFilter(this: HTMLElement) {
        const filter = this.innerHTML.trim();
        if (!activeFilters.has(filter)) {
            activeFilters = new Set([...activeFilters, filter]);
        } else {
            activeFilters = new Set([...activeFilters].filter(item => item !== filter));
        }
    }

    function matchesFilters(tags: string[], filters: Set<string>, mode: "all" | "any" = "all") {
        const filtersArray = Array.from(filters);
        if (mode === "all") {
            return filtersArray.every(tag => tags.includes(tag));
        } else {
            return filtersArray.some(tag => tags.includes(tag));
        }
    }
</script>

<div
        id="portfolio"
        class="flex gap-5 flex-col xl:flex-row justify-between"
>
    <div class="flex flex-col justify-end">
        <div class="flex flex-col-reverse">
            <h2 class="text-3xl sm:text-4xl text-neutral-100">
                Portfolio
            </h2>
            <span
                    class="text-sm uppercase font-semibold tracking-widest text-neutral-100/50 mb-2"
            >
              My projects
            </span>
        </div>
    </div>
    <div
            class="flex gap-2 flex-wrap xl:flex-wrap-reverse xl:justify-end xl:items-start"
    >
        {#each tags as tag}
            <button
                    class="flex items-center text-center uppercase font-semibold tracking-wide text-sm bg-neutral-800/25 px-3 py-2 rounded-full border border-zinc-600/50 transition duration-200 text-neutral-100/75 hover:bg-neutral-700/25 hover:border-zinc-500/75 cursor-pointer select-none whitespace-nowrap"
                    on:click={toggleFilter}
                    style={activeFilters.has(tag) ? "background: white; border-color: white; color: black;" : ""}
            >
                {tag}
            </button>
        {/each}
    </div>
</div>
<div id="projects" class="mt-5 flex gap-5 flex-col sm:flex-row flex-wrap">
    {#each projects as project}
        {#if matchesFilters(project.tags, activeFilters)}
            <ProjectCard
                    name={project.name}
                    description={project.description}
                    tags={project.tags}
                    repository={project.repository}
                    language={project.language}
                    live={project.live}
                    group={project.group}
            />
        {/if}
    {/each}
    {#if activeFilters.size > 0 && projects.filter(project => matchesFilters(project.tags, activeFilters)).length === 0}
        <p
                id="no-projects-for-criteria-alert"
                class="text-white/70 mt-5"
        >
            No projects match the selected criteria.
            <button
                    class="underline hover:text-white transition"
                    on:click={() => activeFilters = new Set()}
            >
                Click here
            </button>
            to reset the filters.
        </p>
    {/if}
</div>
