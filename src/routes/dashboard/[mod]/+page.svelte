<script>
    import { modules } from "$lib/data/module.json";
    import { page } from '$app/stores';
    import { dets } from './storeLink.js';
    import { actLink } from './storeLink.js';
    console.log(modules);
    console.log(dets);

    let pageID = $page.params.mod;
    let pageMod = '';

    // TODO - refactoring so it is fully dynamic
    if (pageID === '$Selecting your Fish$') {
        console.log("mod0");
        pageMod = modules[0];
    } else if (pageID === '$Selecting Optimal Genes$') {
        console.log("mod1");
        pageMod = modules[1];
    } else {
        pageMod = modules[2];
    };

    //add xAPI to activities TODO: do this on next route using url data - prevents refresh/clear cache bug and losing this. 
    let xapiTag = $page.url.search;
    //console.log(xapiTag);
    let indexUrl = xapiTag.indexOf("embedded");
    //console.log(indexUrl);
    let addUrl = xapiTag.substring(indexUrl);
    //console.log(addUrl);

</script>

<style>
    	.checked {
        text-decoration: line-through;
    }
</style>

<div class=" bg-gradient-to-r from-indigo-500 h-screen bg-cover w-full" style="background-image: linear-gradient(1deg, rgb(0 0 0 / 0%),              rgb(0 0 0 / 42%)), url({pageMod.image})">
    <div class="flex flex-col justify-center items-center">
        <div class="object-center mx-[10%] mt-28 flex flex-col justify-center items-center">
        <div>
            <h1 class="text-3xl font-extrabold pt-4 text-white">{pageMod.Title}</h1>
            <p class="pt-4 text-white">{pageMod.Description}</p>
        </div>
        <div>
            <ol>
                {#each pageMod.toDoList as item}
                <li>
                    <input bind:checked={item.status} type="checkbox">
                    <span class:checked={item.status}>{item.text}</span>
                    <a data-sveltekit-prefetch href="/dashboard/${pageMod.Title}/${item.text}${$dets.newUrl}" on:click="{() => actLink.set(`${item.link}+${addUrl}`)}" on:click="{console.log($actLink)}">Start</a>
                </li>
                {/each}
            </ol>
        </div>
        </div>
    </div>
</div>
