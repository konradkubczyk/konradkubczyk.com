<script lang="ts">
    /*
     * This Source Code Form is subject to the terms of the Mozilla Public
     * License, v. 2.0. If a copy of the MPL was not distributed with this
     * file, You can obtain one at https://mozilla.org/MPL/2.0/.
     */

    import Menu from "./Menu.svelte";

    let isMenuOpen = false;
    let isScrolled = false;

    function checkScrollState() {
        isScrolled = window.scrollY > 0;
    }

    document.addEventListener("scroll", checkScrollState);
    checkScrollState();

    let togglingMenu = false;

    function setMenuOpen(value: boolean) {
        if (togglingMenu) return;
        togglingMenu = true;
        isMenuOpen = value;
        setTimeout(() => (togglingMenu = false), 150);
    }

    function toggleMenu() {
        setMenuOpen(!isMenuOpen);
    }
</script>

<header
        class="fixed flex justify-center w-full top-0 z-10 overflow-hidden select-none transition-all duration-500 bg-gradient-to-b from-neutral-900 from-15% to-transparent
              {isMenuOpen ? 'p-0' : 'pt-5 sm:py-5'}"
>
    <div class="container touch-none">
        <nav
                id="nav"
                class="flex flex-col sm:flex-row sm:h-auto border items-center transition-all duration-500
                      {isMenuOpen ? 'mx-0 p-10 rounded-none border-transparent backdrop-blur bg-neutral-900/100 shadow gap-10 h-dvh'
                        : isScrolled ? 'mx-5 py-5 px-5 rounded-lg border-zinc-700/50 justify-between backdrop-blur bg-neutral-900/80 shadow gap-5 h-[4.375rem]'
                          : 'mx-5 py-5 px-0 rounded-lg border-transparent  justify-between backdrop-blur-none bg-transparent shadow-none gap-5 h-[4.375rem]'}"
        >
            <div class="flex justify-between items-center w-full">
                <a
                        href="/#"
                        class="opacity-80 hover:opacity-100 transition"
                        on:click={() => setMenuOpen(false)}
                >
                    <img src="/img/brand/logo.svg" alt="Logo" class="h-7 mx-1"/>
                </a>
                <button id="menu-button" class="sm:hidden text-white/75 hover:text-white transition cursor-pointer mx-1"
                        aria-label="Menu" on:click={() => toggleMenu()}>
                    {#if isMenuOpen}
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1.5em"
                                class="fill-current"
                                viewBox="0 0 384 512"
                        >
                            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                            />
                        </svg>
                    {:else}
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1.2em"
                                viewBox="0 0 448 512"
                                class="fill-current"
                        >
                            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                    d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                            />
                        </svg
                        >
                    {/if}
                </button>
            </div>
            <Menu
                    isOpen={isMenuOpen}
                    on:closeMenu={() => setMenuOpen(false)}
            />
        </nav>
    </div>
</header>
