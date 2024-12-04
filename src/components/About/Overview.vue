<template>
    <div class="pt-[60px] px-[170px] max-1100:px-6 max-1100:py-5" >
        <div class="flex space-x-3 items-center mb-10" >
            <div class="w-[10px] h-[70px] border-l-4 border-r-2 border-gray-300 " ></div>
            <h1 class="text-4xl font-bold text-red-500 max-1100:text-3xl" ><span class="text-red-700 opacity-65" >Company</span> Overview</h1>
        </div>
        <div class="flex space-x-8 max-1100:flex-col max-1100:space-x-0 max-1100:space-y-6 " >
            <div>
                <p class="w-[500px] leading-relaxed max-1100:w-full text-justify text-gray-700" ><span class="font-bold text-red-700 opacity-75 " >When we began in 2004</span> when India's Hardware sector was still in its infancy, we saw that a huge number of businesses found it challenging to optimize their operations effectively, which led to a delay in ramp-up time that also had an influence on man hours. Because systems were occasionally unavailable and had to be ordered, new hires occasionally had to wait longer than a week or two before they were fully functional. This resulted in lead times that seriously impacted revenue as well as how the workforce perceived the company, which in turn had an impact on employee morale.</p>
            </div>
            <div id="img-box" class="p-1 rounded-md border border-gray-300 shadow-lg " >
                <img id="img" src="../../assets/aboutbg.png" alt="" class="rounded-md" >
            </div>
        </div>
        <div class="max-1100:w-full text-justify text-gray-700" >
            <p class="leading-relaxed my-8" >
                To streamline the process of acquiring, deploying, and maintaining computer hardware and network accessories,<span class="font-bold text-red-700 opacity-75 " > Phoenix Technology focuses on providing tailored solutions to meet business needs.</span> Our commitment to customer satisfaction drives us to ensure that our products and services are of the highest quality. Over the years,span we have established ourselves as a trusted leader in the industry,<span class="font-bold text-red-700 opacity-75 "  >catering to a diverse clientele ranging from large corporations to small and medium-sized enterprises.</span> 
            </p>
            <p class="leading-relaxed my-8"  >
                With a strong emphasis on delivering reliable and effective technology solutions, Phoenix Technology has become synonymous with excellence in computer dealing and selling. <span class="font-bold text-red-700 opacity-75 " >Our goal is to simplify the technology acquisition process for our clients,</span>  ensuring that they receive the best products and support to meet their specific requirements. We take pride in our reputation for quality and reliability, continuously striving to exceed our customers' expectations.
            </p>
        </div>
    </div>
</template>

<style scoped >
    #img-box{
        position: relative;
    }
    #img-box:after{
        position: absolute;
        width: 100%;
        height: 100%;
        content: '';
        background-color: rgb(239, 68, 68);
        top: 0;
        left: 0;
        z-index: 10;
        opacity: 0;
        border-radius:0.375rem;
        transition: all 0.4s ease-in-out;
    }
    #img-box:hover::after{
        opacity: 100%;
    }
</style>