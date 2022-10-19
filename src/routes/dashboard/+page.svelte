<script>
    import Layout from '../+layout.svelte';
    import { dets } from '../store.js';
    import { page } from '$app/stores';
    import { modules } from "$lib/data/module.json";
    console.log($dets.newUrl);
    console.log(modules);

    //breadcrumb
    import { BreadCrumbs } from '../store.js';
    $BreadCrumbs = {
    
    };

    //cat
    let name = $dets.userName;

    //images - need to be refactored so are dynamic. No idea how to link in sveltekit. 
   // import mod1 from '$lib/images/mod1.png';
   // import mod2 from '$lib/images/mod2.png';

    //setting up dynamic css
    let show = false;

</script>

<div class="flex flex-row">
    {#each modules as mod}
    <div class="card basis-0 grow h-screen bg-cover {show === `${mod.Title}` ? 'active' : ''}" 
    on:click="{() => show = `${mod.Title}`}" style="background-image: linear-gradient(1deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 40%)), url('{mod.image}{name}'); filter: grayscale(80%)">
        <div class="object-center mx-[10%] mt-28 flex flex-col justify-center items-center">
            <h1 class="text-left text-3xl font-semibold pt-12 text-white">{mod.Title}</h1>
            <section class="card-text">
                <p class="content pt-8 text-white">{mod.Description}</p>
                <a data-sveltekit-prefetch href="/dashboard/{mod.Title}{$dets.newUrl}" class=" test mt-8 inline-flex py-2 px-7 text-l font-medium text-center rounded-full shadow-xl text-white bg-teal-500 border hover:text-teal-500 hover:font-bold hover:border border-teal-500 hover:bg-white hover:bg-opacity-60" 
                >
                LET'S GO </a>
            </section>
        </div>
    </div>
    {/each}
</div>

<style>
    /*card hover animation*/

    .card {
        transition-duration: 500ms;
    }

    .card:hover {
        transition: all 350ms cubic-bezier(0.175, 0.685, 0.2, 1.275);
        filter: grayscale(50%) !important;
        cursor: pointer;
        transition-duration: 500ms;
        transform: scale(1.025);
    }

    /*button appearing*/
    .card section { 
        opacity: 0;
      
        transition: all 0.35s 0.1s ease-out 0.5s;
    }

    .card.active section {
        display:inline;
        opacity: 1;
        transition: all 0.35s 0.1s ease-out 0.5s;
    }

    .card.active {
        filter: none !important;
        cursor:auto;
        flex-grow: 2.1;

    }


    .card.active:hover {
        transform:none;
    }

    .hidden {
        display: none;
    }

    
    a {
        -webkit-appearance: none;
        background: none;
        border: none;
        background-color: #990033;
        color: white;
        transition: transform 150ms ease-out;
    }
    a:hover {
        transform: scale(1.1);
    }
    a:active {
        transform: scale(0.9);
    }
</style>