<script>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';    
    export let url;

</script>

//TODO: For setting up smoother page transitions - later

{#key url}
    <div 
    in:slide={{ duration: 500, delay: 100 }}
    out:slide={{ duration: 500, easing: quintOut}}
    >

        <slot />

</div>

{/key}

