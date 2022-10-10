<script>
import { BreadCrumbs } from '../../routes/store.js'
</script>


      {#each Object.entries($BreadCrumbs) as [label, url] (label)}
      <li aria-current="page">
        <div class="flex items-center">
            {#if url}
            <a href={url}>{label}</a>
            {:else}
            <h1>{label}</h1>
            {/if}
        </div>
      </li>
      {/each}
