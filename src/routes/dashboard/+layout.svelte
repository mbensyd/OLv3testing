<script>
    import { dets } from '../store.js';
    let name = $dets.userName;
    import Breadcrumbs from './Breadcrumbs.svelte';
    import { Avatar, Dropdown, DropdownHeader, DropdownItem, DropdownDivider, Tooltip } from "flowbite-svelte"

    //app drawer
    import { Drawer, Button, CloseButton } from 'flowbite-svelte';
    import { sineIn } from 'svelte/easing';
    let hidden = true;
    let transitionParamsRight = {
          x: 320,
          duration: 200,
          easing: sineIn
        };

</script>


<nav class="py-0 fixed w-full z-20 top-0 left-0 backdrop-blur-sm">
  <div class="bg-white bg-opacity-40 w-full flex flex-wrap justify-between">
    <div  class="flex items-center">
        <img src="https://img.icons8.com/color/48/000000/cat--v2.png" class="mr-12 h-12 ml-10 sm:h-8" alt="Logo">
        <Breadcrumbs />     
    </div>
     
    <div class="w-full md:flex md:w-auto md:order-9" id="navbar-sticky">
      <ul class="flex flex-col p-4 mt-4 md:flex-row md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <div class="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
            <button class="font-medium text-gray-600 dark:text-gray-300" on:click={() => (hidden = false)}>MB</button>
          </div>
        </li>
      </ul>

    </div>
  </div>
  </nav>

  <Drawer rightOffset="top-0 h-screen right-0" placement='right' transitionType="fly" transitionParams={transitionParamsRight} bind:hidden={hidden} id='sidebar'>
    <div class='flex items-center z-50'>
      <h5
        id="drawer-label"
        class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
        <h3>Hi {name}</h3>
      </h5>
      <CloseButton on:click={() => (hidden = true)} class='mb-4 dark:text-white'/>
        </div>
        <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
          Some Random Text Here. 
        </p>
      <div class="grid grid-cols-2 gap-4">
        <Button color="light" target="_blank" rel="noopener noreferrer" href="https://westernsydneyux.slack.com/archives/CAK3PBKQT">SLACK</Button>
      </div>
    </Drawer>



  <slot />


   <!-- footer -->
<footer class="fixed bottom-0 left-0 z-20 p-10 w-full bg-white border-t bg-opacity-100 border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
  <span class="text-2xl font-bold text-gray-800 ml-8 dark:text-gray-400">PGx???</span>
  <span class="text-sm text-gray-500 w-3/4 dark:text-gray-400">PGx aims to deliver a differentiated learning experience by providing flexible, relevant and sustainable career development programmes that are underpinned by active, innovative partnerships and applied research.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-red-800 dark:text-gray-400 sm:mt-0">
        <li>
            <a data-sveltekit-prefetch href="/dashboard/aboutUs" class="mt-1 py-2 px-5 text-sm font-normal text-center rounded-full shadow-xl text-white bg-red-800 border hover:text-red-800 hover:font-bold hover:border border-red-800 hover:bg-white hover:bg-opacity-60" >
                ABOUT PGx
            </a> 
        </li>
    </ul>
    
</footer>



  

<style>
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


  
  




