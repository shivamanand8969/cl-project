<script setup >
    import {RouterLink, useRouter} from 'vue-router'
    import { ref} from 'vue';

    let navbar_mobilemode = ref(false)
    const router = useRouter()

    const routing = (path) => {
        navbar_mobilemode.value = false
        router.push(path)
    }
</script>

<template>
    <transition name="mobile-trans" >
    <div class="text-lg absolute flex flex-col w-full h-full items-center bg-red-50 z-10" v-if="navbar_mobilemode">
        <div class="pt-14 flex justify-end w-full pr-12" >
            <button @click="navbar_mobilemode = false"><i class="fas fa-multiply text-3xl"></i></button>
        </div>
        <ul id="nav-elements" class="flex flex-col  space-y-6 justify-between items-center mt-[100px]" >
                <li @click="routing('/')" >Home</li>
                <li @click="routing('/about')" >About</li>
                <li @click="routing('/service')" >Services</li>
                <li @click="routing('/contact')" >Contact</li>
        </ul>
    </div>
    </transition>

    <nav class="flex pl-[70px] w-full pr-14 justify-between items-center h-[90px] bg-red-50" >
        <div class="logo"><h1 class="text-4xl font-bold text-red-500" >Pheonix Technology</h1></div>
        <div class="flex space-x-10" >
            <ul id="nav_elements" class="flex space-x-12 justify-between items-center " >
                <li><RouterLink to="/" active-class="active">Home</RouterLink></li>
                <li><RouterLink to="/about" active-class="active">About</RouterLink></li>
                <li><RouterLink to="/service" active-class="active" >Services</RouterLink></li>
                <li><RouterLink to="/contact" active-class="active" >Contact</RouterLink></li>
            </ul>
<a href="tel:+98802 19196">
  <button class="w-[130px] h-[50px] rounded-full text-md bg-purple-950 text-white" id="contact-btn">
    <i class="fas fa-phone mr-3"></i>Call Now
  </button>
</a>
            <button class="hidden" id="bar" @click="navbar_mobilemode = true"><i class="fas fa-bars text-3xl"></i></button>
        </div>
    </nav>
</template>

<style scoped >
    li{
        font-size: 17px;
        font-weight:500;
        transition: all 0.5s ease-in-out;
        position: relative;
    }
    .active{
        color: #f73051;
    }
    li::after, .active::after{
        content: '';
        position: absolute;
        height: 3px;
        width: 0%;
        left: 0;
        bottom: -6px;
        background-color: #f73051;
        transition: 0.5s;
    }
    .active::after{
        width: 100%;
    }
    
    li:hover::after{
        width: 100%;
    }
    li:hover{
        color: #f73051;
    }

    .mobile-trans-enter-active, .mobile-trans-leave-active{
        transition: all 0.5s ease-in-out;
    }
    .mobile-trans-enter-from, .mobile-trans-leave-to{
        opacity: 0;
        transform: translateY(-10px);
    }

    @media (max-width : 1100px) {
        li{
            font-size: 26px;
            font-weight: 400;
            margin: 0px 0px;
        }
        #nav_elements{
            display: none;
        }
        nav{
            padding : 0px 20px;
            height: 120px;
        }
        #burger{
            display: block;
        }
        #contact-btn{
            display: none;
        }
        #bar{
            display: block
        }
    }
</style>