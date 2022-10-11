<script>
    import Layout from '../+layout.svelte';
    import { dets } from '../store.js';
    import { page } from '$app/stores';
    import { modules } from "$lib/data/module.json";
    console.log($dets.newUrl);

    //breadcrumb
    import { BreadCrumbs } from '../store.js';
    $BreadCrumbs = {
    Dashboard: `#`
    };

    //cat
    let name = $dets.userName;

    //images - need to be refactored so are dynamic. No idea how to link in sveltekit. 
   // import mod1 from '$lib/images/mod1.png';
   // import mod2 from '$lib/images/mod2.png';

    //setting up dynamic css
    let current = false;
    let show = false;
    let isShow = false;
    let clicked = false;

    //REMOVE - used for opening full card within same page - now routing to new URL instead so people can use browser back button as expected
    async function press() {
            //console.log('happy');
            const collection = document.getElementsByClassName("closed");
                for (let i = 0; i < collection.length; i++) {
                collection[i].classList.add("hidden");
            }
    };


    async function modPage() {
            isShow = !isShow
    };
</script>

<div class="flex flex-row">
    {#each modules as mod}
    <div class="{clicked === `${mod.Title}` ? '' : 'closed'} card basis-0 grow h-screen bg-cover hover:grow-[1.5] {show === `${mod.Title}` ? 'active' : ''}  {current === `${mod.Title}` ? 'selected' : ''}" 
    on:mouseenter="{() => current = `${mod.Title}`}" style="background-image: linear-gradient(1deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 40%)), url('{mod.image}{name}')">
        <div class="object-center mx-[10%] mt-28 flex flex-col justify-center items-center">
            <h1 class="text-3xl font-semibold pt-12 text-white">{mod.Title}</h1>
            <section class="card-text">
                <p class="content pt-8 text-white">{mod.Description}</p>
                <a data-sveltekit-prefetch href="/dashboard/{mod.Title}{$dets.newUrl}" class=" test mt-8 inline-flex py-2 px-7 text-l font-medium text-center rounded-full shadow-xl text-white bg-teal-500 border hover:text-teal-500 hover:font-bold hover:border border-teal-500 hover:bg-white hover:bg-opacity-60" 
                on:click="{() => show = `${mod.Title}`}" on:click="{() => clicked = `${mod.Title}`}" on:click="{press}"  on:click="{modPage}">
                LET'S GO </a>
            </section>
        </div>
    </div>
    {/each}
</div>

<style>
    /*card hover animation*/
    .card:hover {
        transition: all 400ms cubic-bezier(0.175, 0.685, 0.2, 1.275);
    }

    /*button appearing*/
    .card section {
        display: inline;
        opacity: 0;
        transition-property: opacity;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 450ms;
    }

    .card:hover section {
        display:inline;
        opacity: 1;

    }

    /*.selected p {
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

    */
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
</style>