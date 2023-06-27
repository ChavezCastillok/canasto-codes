<script>
  export let data;
  let { products } = data;
  $: ({ products } = data);
</script>

<table>
  <tr>
    <th>code</th>
    <th>description</th>
  </tr>
  {#each products as product}
    <tr>
      <td>{String(product.id).padStart(6, "0")}</td>
      <td>{product.description}</td>
    </tr>
  {/each}
</table>
