<script lang="ts">
import MenuItem from "./MenuItem.svelte";

export let isOpen: boolean;
</script>

<div
        id="menu-container"
        class={isOpen
          ? "sm:block opacity-100 w-full sm:w-min flex-grow flex transition-opacity duration-300 delay-75"
          : "sm:block opacity-0 sm:opacity-100 w-full sm:w-min flex-grow flex transition-opacity duration-300"}
>
    <menu class="flex gap-5 sm:gap-5 flex-col sm:flex-row justify-end">
        <MenuItem
                href="#experience"
                text="Experience"
                on:closeMenu
        />
        <MenuItem
                href="#skills"
                text="Skills"
                on:closeMenu
        />
        <MenuItem
                href="#portfolio"
                text="Portfolio"
                on:closeMenu
        />
        <MenuItem
                href="#contact"
                text="Contact"
                on:closeMenu
        />
    </menu>
</div>
