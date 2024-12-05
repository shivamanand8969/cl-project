<script setup >
    import { useRouter } from 'vue-router';
    let router = useRouter()
</script>

<template>
    <main class="flex p-7 justify-center bg-red-50 w-full  pt-16" >
        <div class="flex justify-center" >
            <div class="ml-[100px] about-images" >
                <img src="../assets/aboutcompo1.jfif" alt="" class="p-1 translate-x-[-150px] translate-y-[20px] rounded-2xl z-10" >
                <img src="../assets/aboutcompo2.jfif" alt="" class=" rounded-2xl h-[250px] w-[250px] object-cover ">
            </div>
        </div>
        <div class="w-[45%] last ml-[50px] mt-5" >
            <div class="flex space-x-4 items-center" >
                <div class="text-7xl font-bold max-1100:text-6xl text-red-600" >15</div>
                <div>
                    <h1 class=" text-xl max-1100:text-xl text-red-600 font-bold" ><span class="text-gray-500" >Years of Expert in </span>Computer & Laptop Sales, <br>Services, and Network Accessories.</h1>
                </div>
            </div>
            <div class="w-[300px] h-[1px] mt-[30px] mb-4 bg-gray-500" ></div>  
            <div>
                <p>Phoenix Technology is  one-stop solution for all computer hardware, laptop sales, and networking needs. From selling new and refurbished laptops of all brands, repairing desktops, and assembling branded PCs to setting up secure network infrastructures, we ensure  technology runs smoothly and efficiently. Our team of certified professionals is skilled in diagnosing and resolving both hardware and software issues, providing reliable support and maintenance for businesses and individuals alike.</p><br> <span class="mt-2"> Whether it’s upgrading your system, optimizing network performance, selling network accessories, or troubleshooting complex IT challenges, Phoenix Technology is committed to delivering fast, efficient, and cost-effective solutions tailored to your needs.</span>
            </div>  

           
        </div>
    </main>
</template>

<style scoped >
    @media (max-width:1100px) {
        main{
            flex-direction: column;
        }
        .about-images img{
            width: 200px;
        }
        .about-images{
            /* margin-left: 10px */
            padding-left: 40px;
        }
        
        .last{
            width: 100%;
            margin-left: 0px
        }
    }
</style>