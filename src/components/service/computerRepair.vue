<script setup >
   import computerrepairbg from './computerrepairbg.vue';
   import AboutCompRep from './AboutCompRep.vue';
   import HomepageFooter from '../HomepageFooter.vue';
</script>

<template>
    <main>
        <computerrepairbg/>
        <AboutCompRep/>
        <section class="w-[80%] my-10 pl-[160px]" >
            <h1 class="text-2xl font-bold my-2 text-red-500" ><span class="text-red-700 opacity-60" >The One Stop Service Shop for </span>All Your Computer And Laptop Services</h1>
            <div class="w-[600px] h-[1px] mt-[10px] mb-7 bg-gray-500 " ></div>
            <p class="text-gray-700" >Choose Pheonix Technology for all your computer and laptop rental needs and enjoy "peace of mind" with our flexible and cost-effective lease agreements. Here's why we're the rental experts</p>
            <ul class="px-4" >
                <li class="my-1 list-disc" ><span class="font-semibold" >Expert Guidance: </span>Professional advice to ensure all your IT requirements are met.</li>
                <li class="my-1 list-disc" ><span class="font-semibold" >Unmatched Value: </span>Highly competitive prices and exceptional value for money.</li>
                <li class="my-1 list-disc" ><span class="font-semibold" >Seamless Experience: </span>Hassle-free hire, delivery, setup, and pickup.</li>
                <li class="my-1 list-disc" ><span class="font-semibold" >Reliable Support: </span>Fast and dependable technical support for all your rental needs.</li>
                <li class="my-1 list-disc" ><span class="font-semibold" >Complete Office Solutions: </span>We also provide additional office essentials like printers, monitors, and accessories.</li>
                <li class="my-1 list-disc" ><span class="font-semibold" >Access to the Latest Tech: </span>Rent the latest models from top brands, available in major cities including Bangalore and Hyderabad.</li>
            </ul>
        </section>
        <HomepageFooter/>
    </main>
</template>