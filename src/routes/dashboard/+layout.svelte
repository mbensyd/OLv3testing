
<script>
    import { dets } from '../store.js';
</script>

<nav class="bg-white bg-opacity-20 px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo">
        <span class="self-center text-xl font-semibold whitespace-nowrap text-white">PGx</span>
    </a>
    <div class="flex md:order-8">       
        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-10 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
    <div class=" w-full md:flex md:w-auto md:order-9" id="navbar-sticky">
      <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-10 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href={`/dashboard${$dets.newUrl}`} class="block py-2 pr-4 pl-3 text-white rounded  md:hover:text-sky-500  md:bg-transparent md:p-0 " aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  
 
<footer class="fixed bottom-0 left-0 z-20 p-4 w-full bg-white border-t bg-opacity-100 border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">PGx™</a>
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a data-sveltekit-prefetch href="/dashboard" class="mt-1 py-2 px-5 text-sm font-normal text-center rounded-full shadow-xl text-white bg-sky-500 border hover:text-sky-500 hover:font-normal hover:border border-sky-500 hover:bg-white hover:bg-opacity-60" >
                Discover more pods
            </a> 
        </li>
    </ul>
</footer>

  
  

<slot />



