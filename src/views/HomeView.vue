<script setup >
    import About from '@/components/About.vue';
    import Service from '@/components/Service.vue';
    import choose from '@/components/choose.vue';
    import How from '@/components/How.vue';
    import client from '@/components/client.vue';
    import HomepageFooter from '@/components/HomepageFooter.vue';
    import { useRouter } from 'vue-router';

    let router = useRouter()
</script>

<template>
    <main>
        <section class="p-4 flex justify-center w-full items-center py-[80px]  space-x-8" >
            <div>
                <div class="home-text flex flex-col " >
                    <h3 class="text-xl leading-normal" >Leading in hardware services since 2004, with a <br> focus on laptop sales and expert support.</h3>
                    <h1  id="text-anime" class="text-5xl inline-block font-bold leading-tight">Your perfect <span class="text-red-600" >Hardware</span><br> <span class="text-red-600" >Solution</span> and Sales Partner</h1>
                </div>
                <button @click="router.push('/')" class="px-7 py-2 rounded-full bg-red-400 text-white font-bold mt-7">Explore More</button>
                
            </div>
            <div  id="home-img" class="w-[400px] overflow-hidden rounded-full flex justify-center items-center " >
                <img id="img" src="../assets/bg.png" alt="" class="w-[400px] h-[400px] rounded-full duration-500" >
            </div>
        </section>
        <div class="bg-red-400 service-box flex justify-center " >
            <div class=" service-div bg-red-700 py-8 px-6 text-white flex justify-center items-center space-x-5 w-[350px]" >
                <div>
                    <i class="fas fa-medal text-6xl mt-4 " ></i>
                </div>
                <div>
                    <p class="text-md" ><span class="text-4xl font-bold" >30+</span> TYPES OF HARDWARE SERVICES AVAILABLE</p>
                </div>
            </div>
            <div class=" service-div bg-red-400 py-8 px-6 text-white flex justify-center items-center space-x-5 w-[350px]" >
                <div>
                    <i class="fa-solid fa-tag text-6xl rotate-180" ></i>
                </div>
                <div>
                    <p class="text-md" ><span class="text-4xl font-bold" >PARTNERED</span><br>WITH LEADING BRANDS</p>
                </div>
            </div>
            <div class=" service-div bg-red-700 py-8 px-6 text-white flex justify-center items-center space-x-5 w-[350px]" >
                <div>
                    <i class="fas fa-users text-6xl mt-4 " ></i>
                </div>
                <div>
                    <p class="text-md" ><span class="text-4xl font-bold" >2000+</span><br>HAPPY USERS</p>
                </div>
            </div>
        </div>
        <About/>
        <Service/>
        <choose/>
        <How/>
        <client/>
        <HomepageFooter/>
    </main>
</template>

<style scoped >
#home-img:hover #img{
    transform: scale(1.2);
}

#text-anime {
    border-right: 2px solid transparent;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation: 
    typing 2s steps(37) 1s,
    cursor .4s step-end 1s 6 alternate;
}
@keyframes cursor {
    50%, 75%{border-color: black;}
}
@keyframes typing {
    from {width: 0;}
}
@media (max-width:1100px) {
    #home-img:hover #img{
        transform: scale(1);
    }
    section{
        flex-direction: column;
        justify-content: start;
        /* margin-top: 30px; */
    }
    .home-text h3{
        font-size: 18px;
    }
    .home-text h1{
        font-size: 25px;
        margin-bottom: 10px;
    }
    .home-text{
        flex-direction: column-reverse;
    }
    button{
        width: 150px;
        height: 31px;
        font-size: 14px;
        /* margin-top: 10px; */
        padding: 0px;
    }
    img{
        height: 280px;
        width: 280px;
        margin-top: 20px;
        margin-right: 30px;
    }
    .service-box{
        flex-direction: column;
        align-items: center;
    }
    .service-div{
        width: 100%;
    }
}
</style>