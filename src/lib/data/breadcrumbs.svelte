<script>
import { BreadCrumbs } from '../../routes/store.js'
</script>


      {#each Object.entries($BreadCrumbs) as [label, url] (label)}
      <li aria-current="page">
        <div class="flex items-center">
            <a href={url}>{label}</a>
        </div>
      </li>
      {/each}
