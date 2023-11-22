<script>
  let isMenuOpen = false;
  let isScrolled = false;

  function checkScrollState() {
    isScrolled = window.scrollY > 0;
  }
  document.addEventListener("scroll", checkScrollState);
  checkScrollState();

  let togglingMenu = false;
  function setMenuOpen(value) {
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
  class={isMenuOpen
    ? "fixed flex justify-center w-full top-0 z-10 p-0 bg-gradient-to-b from-neutral-900 from-20% to-transparent select-none transition-all duration-300"
    : isScrolled
    ? "fixed flex justify-center w-full top-0 z-10 py-5 bg-gradient-to-b from-neutral-900 from-20% to-transparent select-none transition-all duration-300"
    : "fixed flex justify-center w-full top-0 z-10 py-5 sm:py-5 bg-gradient-to-b from-neutral-900 from-20% to-transparent select-none transition-all duration-300"}
>
  <div class="container touch-none">
    <nav
      id="nav"
      class={isMenuOpen
        ? "mx-0 p-10 rounded-none border border-transparent flex items-center backdrop-blur bg-neutral-900/100 shadow transition-all duration-300 flex-col sm:flex-row gap-10 h-screen sm:h-auto"
        : isScrolled
        ? "mx-5 py-5 px-5 rounded-lg border border-zinc-700/50 flex justify-between items-center backdrop-blur bg-neutral-900/80 shadow transition-all duration-300 flex-col sm:flex-row gap-5 h-[4.375rem] sm:h-auto"
        : "mx-5 py-5 px-0 rounded-lg border border-transparent flex justify-between items-center backdrop-blur-none bg-transparent shadow-none transition-all duration-300 flex-col sm:flex-row gap-5 h-[4.375rem] sm:h-auto"}
    >
      <div class="flex justify-between items-center w-full">
        <a
          href="/#"
          class="opacity-80 hover:opacity-100 transition"
          on:click={() => setMenuOpen(false)}
        >
          <img src="/img/brand/logo.svg" alt="Logo" class="h-7 mx-1" />
        </a>
        <button id="menu-button" aria-label="Menu" on:click={() => toggleMenu()}>
          {#if isMenuOpen}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              class="fill-current text-white/75 hover:text-white transition cursor-pointer sm:hidden mx-1"
              viewBox="0 0 384 512"
              ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              /></svg
            >
          {:else}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.2em"
              viewBox="0 0 448 512"
              class="fill-current text-white/75 hover:text-white transition cursor-pointer sm:hidden mx-1"
              ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              /></svg
            >
          {/if}
        </button>
      </div>
      <div
        id="menu-container"
        class={isMenuOpen
          ? "sm:block opacity-100 w-full sm:w-min flex-grow flex transition-opacity duration-300 delay-75"
          : "sm:block opacity-0 sm:opacity-100 w-full sm:w-min flex-grow flex transition-opacity duration-300"}
      >
        <menu class="flex gap-5 sm:gap-5 flex-col sm:flex-row">
          <li>
            <a
              href="#experience"
              class="flex items-center text-2xl sm:text-sm rounded sm:px-3 py-2 sm:uppercase text-white/75 sm:tracking-wider hover:text-white active:text-white sm:hover:bg-neutral-600/50 sm:hover:active:scale-95 transition"
              draggable="false"
              on:click={() => setMenuOpen(false)}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#skills"
              class="flex items-center text-2xl sm:text-sm rounded sm:px-3 py-2 sm:uppercase text-white/75 sm:tracking-wider hover:text-white active:text-white sm:hover:bg-neutral-600/50 sm:hover:active:scale-95 transition"
              draggable="false"
              on:click={() => setMenuOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              class="flex items-center text-2xl sm:text-sm rounded sm:px-3 py-2 sm:uppercase text-white/75 sm:tracking-wider hover:text-white active:text-white sm:hover:bg-neutral-600/50 sm:hover:active:scale-95 transition"
              draggable="false"
              on:click={() => setMenuOpen(false)}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              class="flex items-center text-2xl sm:text-sm rounded sm:px-3 py-2 sm:uppercase text-white/75 sm:tracking-wider hover:text-white active:text-white sm:hover:bg-neutral-600/50 sm:hover:active:scale-95 transition"
              draggable="false"
              on:click={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </menu>
      </div>
    </nav>
  </div>
</header>
