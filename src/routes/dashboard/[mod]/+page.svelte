<script>
    import { modules } from "$lib/data/module.json";
    import { page } from '$app/stores';
    import { dets } from '../../store.js';
    import { actLink } from '../../store.js';
    import { toggleActivityComplete } from "../../store.js";

    //breadcrumb update
    import { BreadCrumbs } from '../../store.js';
    $BreadCrumbs = {
    [$page.params.mod]: `#`
    };

    console.log($dets.newUrl);

    let pageID = $page.params.mod;
    let pageMod = '';

    // return index for the module loaded on the page
    var indexMod = modules.findIndex(function(post, index) {
        if(post.Title === pageID)
            return true;
        });
    console.log(indexMod);

    // get properties from the module loaded on current page
    pageMod = modules[indexMod];
    console.log(pageMod);

    //add xAPI to activities TODO: do this on next route using url data - prevents refresh/clear cache bug and losing this. 
    let xapiTag = $page.url.search;
    //console.log(xapiTag);
    let indexUrl = xapiTag.indexOf("embedded");
    //console.log(indexUrl);
    let addUrl = xapiTag.substring(indexUrl);
    //console.log(addUrl);

</script>



<div class=" bg-gradient-to-r from-indigo-500 h-screen bg-cover w-full" style="background-image: linear-gradient(1deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 42%)), url({pageMod.image}!)">
    <div class="flex flex-col justify-center items-center">
        <div class="object-center mx-[10%] mt-28 flex flex-col justify-center items-center">
        <div>
            <h1 class="text-3xl font-semibold pt-12 text-white">{pageMod.Title}</h1>
            <p class="pt-4 text-white">{pageMod.Description}</p>
        </div>



        <div class="p-4 mt-12 w-full max-w-2xl bg-white bg-opacity-60 rounded-lg shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
            <ol class="my-2 space-y-3">
                {#each pageMod.toDoList as item}
                <li class="flex items-center p-3 bg-opacity-70 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <input bind:checked={item.status} type="checkbox" class="mx-3 w-4 h-4">
                    <span class:checked={item.status} class="flex-1 ml-3 whitespace-nowrap">{item.text}</span>
                    <a data-sveltekit-prefetch href="/dashboard/{pageMod.Title}/{item.text}{$dets.newUrl}" on:click="{() => $actLink=(`${item.link}+${addUrl}`)}" class="test mt-1 py-2 px-5 text-sm font-normal text-center rounded-full shadow-xl text-white bg-cyan-600 border hover:text-cyan-600 hover:font-normal hover:border border-cyan-600 hover:bg-white hover:bg-opacity-60">START</a>
                </li>
                {/each}
            </ol>
        </div>
        </div>
    </div>
</div>

<style>
    .checked {
    text-decoration: line-through;
}
a {
  -webkit-appearance: none;
  background: none;
  border: none;
  background-color: #1B9AB8;
  color: white;
  transition: transform 150ms ease-out;
}
a:hover {
  transform: scale(1.1);
}
a:active {
  transform: scale(0.9);
}

li {
  -webkit-appearance: none;
  transition: transform 150ms ease-out;
}

li:hover {
  transform: scale(1.02);
}


</style>