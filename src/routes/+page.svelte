<script>
    
	import Layout from "./+layout.svelte";
    import { page } from '$app/stores';
    import { dets } from './store.js';
    
    dets.set($page.url.search);
    console.log($dets);
    let auth = $dets.searchParams.get('auth');
    console.log(auth);


   // export let data;
    //var actor = $page.data.actorDets;
    //var registration = $page.data.reg;
    //var endpoint = $page.data.endpoint;
   // var auth = $page.data.auth;

    // not working WHY?? sad. onMount also not working - 500 error
    //let url = '';
    //url = window.location.search;
    //console.log(url);

    import bgspace from '$lib/images/bgspace.png';
    //const str = 'https://media.openlearning.com/4Jh4yBPJcDuCXNxsYrro9Uvgt5jKdyjaV6YjRM4anuHJUKVRNErrTVo4coG5GXvF.1663640714/css-filter-cards/dist/index.html?activity_id=https%3A%2F%2Fwww.openlearning.com%2Fcourses%2Fanother-experiment%2Fhomepage%2F%3Fblock%3D63285c74a2c28f2c7b735c39%26embedded%3Dtrue&actor=%7B%22objectType%22%3A%22Agent%22%2C%22name%22%3A%22Matthew%22%2C%22mbox%22%3A%22mailto%3A5a49ac24117bd0379934a3c0%40users.openlearning.com%22%7D&auth=Basic%20NWE0OWFjMjQxMTdiZDAzNzk5MzRhM2MwIDYzMjg1YzFhZjUyMjVhM2UyZWIwNjQzOCA2MzI4NWM3NGEyYzI4ZjJjN2I3MzVjMzkgMTY2Mzk3MjE4MTowUUJ4clUzSi9yTnE1L2xJVUJOZUwzZXNoMm5wejVLQWs3b0s0S1U5YklrPQ%3D%3D&endpoint=https%3A%2F%2Fwww.openlearning.com%2Fxapi%2F&registration=fd168900-3813-11ed-a438-00f5225a3e2e';
    //var urlParams = new URLSearchParams(window.location.search);
    //var actor = JSON.parse(urlParams.get('actor'));
    //console.log(actor);

    //const authURL = encodeURIComponent(auth);
    //const endpointURL = encodeURIComponent(endpoint);
    //const nameURL = encodeURIComponent(actor.name);
   // const mboxURL = encodeURIComponent(actor.mbox);
   // const regURL = encodeURIComponent(registration);

</script>

<style>

</style>



  
<div class="bg-cover bg-center w-full h-screen" style="background-image: url('{bgspace}')">
    <nav class="pt-4">
        <div class="mx-12 my-10 flex flex-wrap justify-between items-center">

        </div>
    </nav>

    <div class="mt-32 flex justify-center items-center" >
        <div class="p-16 max-w-2xl bg-white bg-opacity-70 rounded-3xl shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Hey, <span class="font-normal">NAME FAIL 🥲</span></h5>
            <p class="mb-8 font-normal text-xl text-gray-800 dark:text-gray-700"><span class="font-bold">Your mission </span>is to conduct a life cycle assessment of the entire environmental management system (EMS) of your company with the aim of reaching net zero carbon emission reduction goals.</p>
            <a data-sveltekit-prefetch href="/dashboard" class="mt-2 inline-flex py-2 px-7 text-l font-medium text-center rounded-full shadow-xl text-white bg-sky-500 border hover:text-sky-500 hover:font-bold hover:border border-sky-500 hover:bg-white hover:bg-opacity-60" >
                LAUNCH LEARN SPACE
            </a>
        </div>
    </div>
    
</div>
  





