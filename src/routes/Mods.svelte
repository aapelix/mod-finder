<script>
  let query = "";
  let mods = [];

  fetch("https://api.modrinth.com/v2/search?limit=10")
    .then((response) => response.json())
    .then((data) => {
      mods = data.hits;
    });

  function search() {
    fetch(`https://api.modrinth.com/v2/search?query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        mods = data.hits;
      });
  }
</script>

<div class="m-2">
  <input
    type="text"
    placeholder="Search..."
    class="m-2 p-5 text-xl rounded-lg bg-secondary text-white focus:outline-none"
    bind:value={query}
    on:input={() => search()}
  />
  <div class="flex flex-wrap">
    {#each mods as mod}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="text-white p-5 bg-secondary m-2 rounded-lg hover:scale-110 duration-300 max-w-xs w-52 h-60 cursor-pointer"
        on:click={() => {
          window.open(`https://modrinth.com/mod/${mod.slug}/version/latest`);
        }}
      >
        <div class="flex justify-center items-center">
          <img src={mod.icon_url} class="w-10 rounded-lg" alt="" />
          <p class="m-2 font-bold">{mod.title}</p>
        </div>
        <p class="mt-2 text-center">{mod.description}</p>
      </div>
    {/each}
  </div>
</div>
