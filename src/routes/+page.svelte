<script>
  let notiText;
  export let data;
  let { products } = data;
  $: ({ products } = data);

  let search_results = products;
  let search;

  function search_product(input = "") {
    let results = [];
    if (input !== "") {
      products.forEach((product) => {
        if (product.description.toLowerCase().includes(input.toLowerCase())) {
          results.push(product);
        }
      });
    }
    return results;
  }
  function searching() {
    if (search.length >= 1) {
      search_results = search_product(search);
    } else {
      search_results = products;
    }
  }

  function search_reset() {
    search = "";
    search_results = products;
  }

  function SortArray(x, y) {
    if (x.description.toLowerCase() < y.description.toLowerCase()) {
      return -1;
    }
    if (x.description.toLowerCase() > y.description.toLowerCase()) {
      return 1;
    }
    return 0;
  }

  function removeNotification() {
    notiText.style.display = "none";
  }
</script>

<div class="container is-fluid">
  <header>
    <h1 class="title">Keviiin</h1>
  </header>
  <main class="section is-flex is-justify-content-center">
    <table class="table is-bordered is-striped">
      <thead>
        <tr>
          <td colspan="2"
            ><strong
              >List of Products without Bar Code
            </strong>({search_results.length})</td
          >
        </tr>
        <tr>
          <td colspan="2">
            <article class="field">
              <p class="control has-icons-left">
                <!-- svelte-ignore a11y-autofocus -->
                <input
                  class="input is-primary"
                  type="text"
                  name="description"
                  id="description"
                  placeholder="write description or part "
                  bind:value={search}
                  on:input={searching}
                  on:click={search_reset}
                  autofocus
                />
                <span class="icon is-left">
                  <ion-icon name="search-outline" />
                </span>
              </p>
            </article>
          </td>
        </tr>
        <tr>
          <th>Code</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {#if search_results.length > 0}
          {#each search_results as product}
            <tr>
              <td>{String(product.id).padStart(6, "0")}</td>
              <td>{product.description}</td>
            </tr>
          {/each}
        {:else}
          <div class="notification is-warning" bind:this={notiText}>
            <button class="delete" on:click={removeNotification} />
            Avisame para agregar el codigo/producto que hace falta. Atte. Kevin.
          </div>
          <!-- {alert("Falta un codigo? Avisame para agregarlos!! Atte. Kevin")} -->
          <!-- <tr>
            <td>0x6</td>
            <td>¿other product? Avisadme! Atte. Kevin</td>
          </tr> -->
        {/if}
      </tbody>
    </table>
  </main>
</div>

<style>
  @import url("bulma/css/bulma.min.css");

  .notification {
    position: fixed;
    top: 10%;
    right: 10%;
  }
</style>
