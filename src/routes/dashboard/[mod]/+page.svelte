<script>
    import { modules } from "$lib/data/module.json";
    import { page } from '$app/stores';
    import { dets } from '../../store.js';

    //build rise link to save progress from user details

    const authURL = encodeURIComponent($dets.auth);
    const endpointURL = encodeURIComponent($dets.endpoint);
    const nameURL = encodeURIComponent($dets.userName);
    const mboxURL = encodeURIComponent($dets.userMbox);
    const regURL = encodeURIComponent($dets.reg);

    console.log(mboxURL);

    let pageID = $page.params.mod;
    let pageMod = modules;
    console.log(pageID);

    // needs refactoring so it is fully dynamic
    if (pageID === '$Selecting your Fish$') {
        console.log("mod0");
        pageMod = modules[0];
    } else if (pageID === '$Selecting Optimal Genes$') {
        console.log("mod1");
        pageMod = modules[1];
    } else {
        pageMod = modules[2];
    };

    console.log(pageMod);
    console.log(pageID);
    console.log(pageMod.image);
    {pageMod.toDoList};
</script>

<style>
    	.checked {
        text-decoration: line-through;
    }
</style>

<div class=" bg-gradient-to-r from-indigo-500 h-screen bg-cover w-full " style="background-image: linear-gradient(1deg, rgb(0 0 0 / 0%),              rgb(0 0 0 / 42%)), url({pageMod.image})">
    <div class="flex flex-col justify-center items-center">
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
                    <a href="/dashboard/${pageMod.Title}/${item.text}${$dets.newUrl}">Start</a>
                </li>
                {/each}
            </ol>
        </div>
    </div>
</div>
