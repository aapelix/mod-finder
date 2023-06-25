<script>
  let name = "aapelix";
  let visible = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<nav
  class="bg-primary h-full w-60 fixed top-0 left-0 overflow-x-hidden text-center"
>
  <div class="pt-10">
    <div class="flex justify-center items-center">
      <div
        class="p-2 w-[calc(100%-50px)] m-1 pb-6 border-b-2 border-solid border-secondary"
      >
        <button
          class="flex items-center justify-center hover:scale-110 duration-300"
          on:click={() => {
            visible = !visible;
          }}
        >
          <img
            src="https://mc-heads.net/avatar/{name}"
            class="h-14 rounded-md"
            alt="Your avatar"
          />
          <p class="text-white text-xl ml-5 font-bold">
            {name.toUpperCase()}
          </p>
        </button>
      </div>
    </div>
    {#if visible}
      <div
        class="absolute w-56 rounded-lg ml-2 text-center flex justify-center items-center flex-col bg-black -translate-y-4"
      >
        <button
          class="text-xl block text-white text-center m-5 hover:text-green-400 duration-100"
          >Add Account</button
        >
        <button
          class="text-xl block text-white text-center m-5 hover:text-green-400 duration-100"
          >Change skin</button
        >
        <button
          class="text-xl block text-white text-center m-5 hover:text-green-400 duration-100"
          >Change Account</button
        >
      </div>
    {/if}
    <div class="pt-6">
      <a
        class="p-3 text-xl block text-white cursor-pointer hover:text-green-400 duration-100"
        href="#/"
      >
        Instances
      </a>
      <a
        class="p-3 text-xl block text-white cursor-pointer hover:text-green-400 duration-100"
        href="#/mods"
      >
        Mods
      </a>
      <a
        class="p-3 text-xl block text-white cursor-pointer hover:text-green-400 duration-100"
        href="#/settings"
      >
        Settings
      </a>
    </div>
  </div>
</nav>
