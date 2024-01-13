<script lang="ts">
    /*
     * This Source Code Form is subject to the terms of the Mozilla Public
     * License, v. 2.0. If a copy of the MPL was not distributed with this
     * file, You can obtain one at https://mozilla.org/MPL/2.0/.
     */

    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();

    export let href: string;
    export let text: string;

    function closeMenu() {
        dispatch('closeMenu');
    }
</script>

<li>
    <a
            href="{href}"
            class="flex items-center text-2xl sm:text-sm rounded sm:px-3 py-2 sm:uppercase text-white/75 sm:tracking-wider hover:text-white active:text-white sm:hover:bg-neutral-600/50 sm:hover:active:scale-95 transition"
            draggable="false"
            on:click={() => closeMenu()}
    >
        {text}
    </a>
</li>
