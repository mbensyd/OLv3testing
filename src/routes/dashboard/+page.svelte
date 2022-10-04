<script>
    import { dets } from '../store.js';
    //import { page } from '$app/stores';

    //get xapi ?search from url mega hack don't do
    //const newUrl = $page.url.search;
    //console.log(newUrl);

    //testing data store from first screen
    console.log(dets);


    //images - need to be refactored so are dynamic. No idea how to link in sveltekit. 
    import mod1 from '$lib/images/mod1.png';
    import mod2 from '$lib/images/mod2.png';

    let current = false;
    import { modules } from "$lib/data/module.json";
    import Layout from '../+layout.svelte';
    let show = false;
    let isShow = false;

    let clicked = false;

    async function press() {
            console.log('happy');
            const collection = document.getElementsByClassName("closed");
                for (let i = 0; i < collection.length; i++) {
                collection[i].classList.add("hidden");
            }
    };

    async function modPage() {
            isShow = !isShow
    };
</script>

<style>

    p, a {
        display: none;
    }
    .selected p {
           display: inline;
        }
    
    .selected a {
        display: inline;
    }

    .active {
        background-size: cover
    }

    .active a {
        display: none;
    }

    .hidden {
        display: none;
    }

</style>

<div class="flex flex-row">
    {#each modules as mod}
    <div class="{clicked === `${mod.Title}` ? '' : 'closed'} basis-0 grow h-screen bg-cover hover:grow-[1.5] overlay {show === `${mod.Title}` ? 'active' : ''}  {current === `${mod.Title}` ? 'selected' : ''}" 
    on:mouseenter="{() => current = `${mod.Title}`}" style="background-image: linear-gradient(1deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 42%)), url('{mod.image}')">
        <div class="object-center mx-[10%] mt-28 flex flex-col justify-center items-center">
            <h1 class="text-3xl font-extrabold pt-4 text-white">{mod.Title}</h1>
            <p class="pt-4 text-white">{mod.Description}</p>
            <a class="mt-8 inline-flex py-2 px-7 text-l font-medium text-center rounded-full shadow-xl text-white bg-sky-500 border hover:text-sky-500 hover:font-bold hover:border border-sky-500 hover:bg-white hover:bg-opacity-60" href="/dashboard/${mod.Title}" data-sveltekit-prefetch type="button" 
            on:click="{() => show = `${mod.Title}`}" on:click="{() => clicked = `${mod.Title}`}" on:click="{press}"  on:click="{modPage}">
            Get Started </a>

        </div>
    </div>
    {/each}
</div>
