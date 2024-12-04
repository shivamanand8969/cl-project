<script setup >
    import { useRouter } from 'vue-router';
    let router = useRouter()
</script>

<template>
    <main class="pb-10" >
        <h1 class="text-center text-3xl font-bold  mt-8 text-red-500 " ><span class="text-gray-500" >Our</span> Services</h1>
        <div class="flex justify-center" >
            <div class="w-[200px] h-[1px] mt-[10px] mb-5 bg-gray-500 " ></div>  
        </div>
        <p class="text-center text-gray-800 mb-14" >Expert Computer Hardware Solutions and Quality Laptops Backed by 20+ Years of Experience.</p>
        <div class="flex justify-center items-center max-1100:flex-col space-x-16 mb-4 max-1100:space-y-9" >
            <div class="w-[250px] border  flex flex-col items-center justify-center h-[230px] rounded-sm shadow-gray-500 shadow-md px-6 cursor-pointer" @click="router.push('/')" >
                <div>
                    <i class="fas fa-tools text-8xl text-gray-900 mb-3"></i>
                </div>
                <div  >
                    <h1 class="text-gray-900 font-bold text-lg text-center "  >Computer and Laptop Repair Services</h1>
                </div>
            </div>
            <div class="w-[250px] border  flex flex-col items-center justify-center h-[230px] rounded-sm shadow-gray-500 shadow-md px-6 translate-x-[-2rem]" @click="router.push('/')" >
                <div>
                    <i class="fas fa-microchip text-8xl text-gray-900 mb-3"></i>
                </div>
                <div>
                    <h1 class="text-gray-900 font-bold text-xl text-center" >Chip-Level Diagnostics & Repair</h1>
                </div>
            </div>
            <div class="w-[250px] border  flex flex-col items-center justify-center h-[230px] rounded-sm shadow-gray-500 shadow-md px-6 max-1100:mr-16 translate-x-[-2rem]" >
                <div>
                    <i class="fas fa-laptop text-9xl text-gray-900 mb-3"></i>
                </div>
                <div>
                    <h1 class="text-gray-900 font-bold text-xl text-center" >Laptop Sales & Rental Support</h1>
                </div>
            </div>
        </div>

    </main>
</template>