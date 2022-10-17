<script>
    import { modules } from "$lib/data/module.json";
    import { page } from '$app/stores';
    import { dets } from '../../store.js';
    import { actLink } from '../../store.js';
    import { BreadCrumbs } from '../../store.js';
    $BreadCrumbs['About Us'] = `#`;
</script>


<div>
<!--SMES-->    
    <div class="mt-32 flex justify-center items-center" >
        <div class="p-16 max-w-3xl bg-white bg-opacity-70 rounded-3xl shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-8 text-3xl font-normal tracking-tight text-gray-900 dark:text-white">Meet <span class="font-bold">PodName's</span> Industry Experts</h5>
            <p class="mb-8 font-x text-xl text-gray-800 dark:text-gray-700">This is a brief sentence about PGx's mission to work with industry experts.</p>
            <a href="#" class="flex flex-col items-center  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-20 rounded-t-lg md:h-auto md:w-40 md:rounded-none md:rounded-l-lg" src="https://cem.uplb.edu.ph/wp-content/uploads/2019/11/placeholder-face-big.png" alt="">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Salmon</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </a>
            <br>
            <a href="#" class="flex flex-col items-center  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-20 rounded-t-lg md:h-auto md:w-40 md:rounded-none md:rounded-l-lg" src="https://cem.uplb.edu.ph/wp-content/uploads/2019/11/placeholder-face-big.png" alt="">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Neil</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </a>
        </div>
    </div>
    
<!--PGX-->
    <div class="mt-32 flex justify-center items-center" >
        <div class="p-16 max-w-4xl bg-white bg-opacity-70 rounded-3xl shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-8 text-3xl font-normal tracking-tight text-gray-900 dark:text-white">Meet the PGx team behind <span class="font-bold">PodName</span></h5>
            <p class="mb-8 font-x text-xl text-gray-800 dark:text-gray-700">This is a brief sentence about PGx's mission to work with industry experts.</p>
            <a href="#" class="flex flex-col items-center  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-20 rounded-t-lg md:h-auto md:w-40 md:rounded-none md:rounded-l-lg" src="https://cem.uplb.edu.ph/wp-content/uploads/2019/11/placeholder-face-big.png" alt="">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Yasmine</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Learning Designer</p>
                </div>
            </a>
            <br>
            <a href="#" class="flex flex-col items-center  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-20 rounded-t-lg md:h-auto md:w-40 md:rounded-none md:rounded-l-lg" src="https://cem.uplb.edu.ph/wp-content/uploads/2019/11/placeholder-face-big.png" alt="">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Botong</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lead Learning Designer</p>
                </div>
            </a>
        <!--rest of the team-->
            <section>
                <div class="py-8 px-0  max-w-screen-s  lg:py-16 lg:px-2">
                    <div>
                        <h5 class="mb-8 text-xl font-normal tracking-tight text-gray-900 dark:text-white">Our team</h5>
                    </div> 
                    <div class="grid sm:gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div class="text-center text-gray-500 dark:text-gray-400">
                            <img class="mx-auto mb-4 w-25 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar">
                            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Bonnie Green</a>
                            </h3>
                            <p>CEO/Co-founder</p>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400">
                            <img class="mx-auto mb-4 w-25 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="Helene Avatar">
                            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Helene Engels</a>
                            </h3>
                            <p>CTO/Co-founder</p>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400">
                            <img class="mx-auto mb-4 w-25 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Avatar">
                            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Jese Leos</a>
                            </h3>
                            <p>SEO & Marketing</p>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400">
                            <img class="mx-auto mb-4 w-25 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="Joseph Avatar">
                            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Joseph Mcfall</a>
                            </h3>
                            <p>Sales</p>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400">
                            <img class="mx-auto mb-4 w-25 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia Avatar">
                            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Lana Byrd</a>
                            </h3>
                            <p>Web Designer</p>
                        </div>

                        
                    </div>  
                </div>
              </section>
        </div>
    </div>

</div>
  
<style>

</style>



