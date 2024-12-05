<script setup >
    import {RouterLink} from 'vue-router'
</script>

<template>
    <footer class="px-[200px] max-1100:px-7 py-7 flex space-x-16 max-1100:flex-col max-1100:space-x-0 max-1100:space-y-9" >
        <div class="w-[200px]" >
            <h1 class="text-2xl font-bold text-red-500" ><span class="text-red-700 opacity-65" >About </span>Us</h1>
            <div class="w-[100px] h-[1px] mt-[10px] mb-5 bg-gray-500 " ></div>
            <p class="text-gray-600" >We are a company with strong work ethics and a professional <br> attitude, <span class="font-bold text-red-500" >Pheonix Technology</span> is steadfast in its commitment to serving the ever-evolving demands of the Hardware services  for both Computer and Network accesories.</p>
        </div>
        <div>
            <h1 class=" text-2xl text-red-500 font-bold " ><span class="text-red-700 opacity-65" >Company</span> Links</h1>
            <div class="w-[100px] h-[1px] mt-[10px] mb-5 bg-gray-500 " ></div>
            <ul>
                <li class="text-red-700  ml-4 list-disc" ><RouterLink to="/" class="opacity-65 underline" >Home</RouterLink></li>
                <li class="text-red-700  ml-4 list-disc" ><RouterLink to="#" class="opacity-65 underline" >About</RouterLink></li>
                <li class="text-red-700  ml-4 list-disc" ><RouterLink to="#" class="opacity-65 underline" >Our Service</RouterLink></li>
                <li class="text-red-700  ml-4 list-disc" ><RouterLink to="#" class="opacity-65 underline" >Application</RouterLink></li>
            </ul>
        </div>
        <div  >
            <h1 class=" text-2xl text-red-500 font-bold " ><span class="text-red-700 opacity-65" >Contact</span> US</h1>
            <div class="w-[100px] h-[1px] mt-[10px] mb-5 bg-gray-500 " ></div>
            <div class="flex flex-col space-y-4" >
                <p class="text-gray-700 w-[350px]" ><span class=" font-bold" >Address : </span>Shop no 7 , 108/1, MGA complex, sp road cross , banglore 560002</p>
                <p class="text-gray-700" ><span class=" font-bold">Tel : </span>8867393755</p>
                <p class="text-gray-700" ><span class=" font-bold">Tel : </span>9902271251</p>
                <p class="text-gray-700" ><span class=" font-bold">Email : </span>nayanagowdaAmmu9538@gmail.com</p>
            </div>
        </div>
    </footer>
</template>