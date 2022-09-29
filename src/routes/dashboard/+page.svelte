<script>
    /*export let data;
    let item = data.modules;
    console.log(item);*/
    import { scale } from 'svelte/transition';
    import { cubicIn, cubicOut } from 'svelte/easing';
    import { fly } from 'svelte/transition'


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
           color:red; 
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

    .closed {
        color: blue;
    }

    .hidden {
        display: none;
    }

</style>


<div class="flex flex-row">
    {#each modules as mod}
    <div class="{clicked === `${mod.Title}` ? '' : 'closed'} basis-0 grow h-screen bg-cover hover:grow-[1.5] {show === `${mod.Title}` ? 'active' : ''}  {current === `${mod.Title}` ? 'selected' : ''}" 
    on:mouseenter="{() => current = `${mod.Title}`}" style="background-image: url({mod.image})">

            <h1>{mod.Title}</h1>
            <p>{mod.Description}</p>
            <a href="/dashboard/${mod.Title}" data-sveltekit-prefetch type="button" 
            on:click="{() => show = `${mod.Title}`}" on:click="{() => clicked = `${mod.Title}`}" on:click="{press}"  on:click="{modPage}">
            Get Started
</a>
            {#if isShow}
            <p>
                Some text
            </p>
            {/if}
        
    </div>
    {/each}
</div>
