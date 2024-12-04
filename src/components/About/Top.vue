<template>
    <main  >
        <div class="flex relative " >
            <div class="about bg-red-500 h-[350px] w-[600px] flex justify-center items-center z-10 bg-opacity-60" >
                <h1 class="font-bold text-white text-6xl" >About Us</h1>
            </div>
            <div class="p-0 overflow-hidden absolute right-0" >
                <img src="https://i.pcmag.com/imagery/roundups/0067KVthfOytnra14VzQ5PK-40..v1700160551.jpg" alt="" class="h-[350px] w-screen object-cover">
            </div>
        </div>
    </main>
</template>

<style scoped >
    .about{
        border-bottom-right-radius: 300px
    }
    @media (max-width : 1100px) {
        main{
            display: none;
        }
    }
</style>

