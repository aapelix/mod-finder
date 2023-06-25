<script>
  import Sidebar from "./lib/Sidebar.svelte";
  import Router from "svelte-spa-router";
  import Home from "./routes/Home.svelte";
  import Mods from "./routes/Mods.svelte";
  import Settings from "./routes/Settings.svelte";
  import NotFound from "./routes/NotFound.svelte";

  let routes = {
    "/": Home,
    "/mods": Mods,
    "/settings": Settings,

    "*": NotFound,
  };
</script>

<main>
  <Sidebar />
  <div class="ml-60 mt-8">
    <Router {routes} />
  </div>
</main>
