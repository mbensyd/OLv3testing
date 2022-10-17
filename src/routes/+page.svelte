<script>

	import Layout from "./+layout.svelte";
    import bgspace from '$lib/images/bgspace.png';
    //importing det store with url details - different way to get url data. Don't know which one is better. 
    import { dets } from './store.js';
    console.log($dets);
    //import { modules } from "$lib/data/module.json";
    //console.log(modules);


    //import { moduleData } from './store.js';
    //$moduleData = {modules};

    //let moduleDataLoad = $moduleData.modules;

    //console.log(moduleDataLoad);
    

</script>


<div class="bg-cover bg-center w-full h-screen" style="background-image: linear-gradient(1deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 40%)), url('{bgspace}')"> 
    <nav class="pt-4">
        <div class="mx-12 my-10 flex flex-wrap justify-between items-center">

        </div>
    </nav>

    <div class="mt-32 flex justify-center items-center" >
        <div class="p-16 max-w-2xl bg-white bg-opacity-70 rounded-3xl shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Hey, <span class="font-normal">{$dets.userName}</span></h5>
            <p class="mb-8 font-normal text-xl text-gray-800 dark:text-gray-700"><span class="font-bold">Your mission </span>is to conduct a life cycle assessment of the entire environmental management system (EMS) of your company with the aim of reaching net zero carbon emission reduction goals.</p>
            <a data-sveltekit-prefetch href={`/dashboard${$dets.newUrl}`} class="mt-2 inline-flex py-2 px-7 text-l font-medium text-center rounded-full shadow-xl text-white bg-cyan-600 border hover:text-cyan-600 hover:font-bold hover:border border-cyan-600 hover:bg-white hover:bg-opacity-60" >
                LAUNCH LEARNSPACE 
            </a>
        </div>
    </div>
    
</div>
  
<style>
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



