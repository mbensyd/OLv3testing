<script>
    import { dets } from '../store.js';
    let name = $dets.userName;
    import Breadcrumbs from './Breadcrumbs.svelte';

</script>


<nav class="py-0 fixed w-full z-20 top-0 left-0 backdrop-blur-sm">
  <div class="bg-white bg-opacity-25 w-full">
    <div class="container flex flex-wrap justify-between">
    <div  class="flex items-center">
        <img src="https://images.squarespace-cdn.com/content/v1/5c30205d31d4df783d82330f/1553057471617-JERH924CM0PORJVO1OHJ/LU+cropped.png" class="mr-12 h-12 ml-7 sm:h-15" alt="Logo">

        <Breadcrumbs />     
    </div>
    

    <div class="w-full md:flex md:w-auto md:order-9" id="navbar-sticky">
      <ul class="flex flex-col p-4 mt-4 md:flex-row md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <div class="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
            <span class="font-medium text-gray-600 dark:text-gray-300">MB</span>
          </div>
        </li>
      </ul>
    </div>
    </div>
  </div>
  </nav>

<slot />


   <!-- footer -->
<footer class="fixed bottom-0 left-0 z-20 p-4 w-full bg-white border-t bg-opacity-100 border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 PGx™
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <button data-sveltekit-prefetch href="/dashboard" class="mt-1 py-2 px-5 text-sm font-normal text-center rounded-full shadow-xl text-white bg-cyan-600 border hover:text-cyan-600 hover:font-bold hover:border border-cyan-600 hover:bg-white hover:bg-opacity-60" >
                DISCOVER MORE
            </button> 
        </li>
    </ul>
    
</footer>



  

<style>
    button {
        -webkit-appearance: none;
        background: none;
        border: none;
        background-color: #1B9AB8;
        color: white;
        transition: transform 150ms ease-out;
    }
    button:hover {
        transform: scale(1.1);
    }
    button:active {
        transform: scale(0.9);
    }
</style>


  
  




