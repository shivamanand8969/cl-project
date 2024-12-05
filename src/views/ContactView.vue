<script setup>
import { ref } from 'vue'; 
import HomepageFooter from '@/components/HomepageFooter.vue'; 

const scriptURL = 'https://script.google.com/macros/s/AKfycbxzzuvA9R_GBlQY1VQfvl5ctiFy_2QQv1EWCq2UgJpp_lUbbR5It_go0Iy0rkdCJu8_/exec';
let form_data = ref({
    fname: '',
    lname: '',
    email: '',
    contact: null,
    message: ''
});
let successMessage = ref("")
let errorMessage = ref("")

const submitForm = (e) => {
    e.preventDefault();    
        const fname = form_data.value.fname;
    const lname = form_data.value.lname;
    const email = form_data.value.email;
    const contact = form_data.value.contact;
    const message = form_data.value.message;

    // Create the WhatsApp message
    const whatsappNumber = "9902271251"; // Your WhatsApp number
    const whatsappMessage = `Hello, here are the details:\n\nName: ${fname} ${lname}\nEmail: ${email}\nContact: ${contact}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Redirect to WhatsApp with the message
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank'); // Opens in a new tab
    return;
    const formData = new FormData();
    formData.append('fname', form_data.value.fname);
    formData.append('lname', form_data.value.lname);
    formData.append('email', form_data.value.email);
    formData.append('contact', form_data.value.contact);
    formData.append('message', form_data.value.message);
 
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(
            (response) => {
                successMessage.value = "Contact details saved sucessfully"
                console.log('Success!', response)
            }
        )
        .catch((error) => console.error('Error!', error.message));
    
    form_data.value.fname = ""
    form_data.value.lname = ""
    form_data.value.email = ""
    form_data.value.contact = ""
    form_data.value.message = ""
};
</script>

<template>
  <main>
    <div>
      <img src="../assets/contact-bg.png" alt="" class="w-screen h-[70vh] max-1100:h-[40vh]" />
    </div>
    <div class="translate-y-[-220px] max-1100:translate-y-0">
      <div class="mx-[200px] max-1100:mx-1">
        <div class="py-20 max-1100:py-12 px-12 max-1100:px-5 flex max-1100:flex-col space-x-24 max-1100:space-x-0 max-1100:space-y-10 bg-white">
          <div class="w-[500px] max-1100:w-full">
            <h1 class="text-4xl font-bold text-red-500 mb-10">
              Apllication Form
            </h1>
            <div class="flex flex-col space-y-7 text-slate-800">
              <p>Contact us if you require assistance with any of the rental equipment or services we offer.</p>
              <div class="flex justify-between flex-col">
                <div class="flex gap-2">
                  <h1 class="font-bold mb-2">Phone</h1>
                  <p>8867393755</p>
                </div>
                <div class="flex gap-2">
                  <h1 class="font-bold mb-2">Phone</h1>
                  <p>9902271251</p>
                </div>
                <div class="flex gap-2">
                  <h1 class="font-bold mb-2">Email</h1>
                  <p>nayanagowdaammu9538@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form name="submit-to-google-sheet" @submit="submitForm" class="flex flex-col space-y-5 text-sm">
              <div class="flex space-x-6 max-1100:space-x-1">
                <div>
                  <p>First Name <span class="text-red-500" >*</span></p>
                  <input type="text" v-model="form_data.fname" class=" px-1 border mt-2 border-black h-[37px]" required/>
                </div>
                <div>
                  <p>Last Name <span class="text-red-500" >*</span></p>
                  <input type="text" v-model="form_data.lname" class=" px-1 border mt-2 border-black h-[37px]" required />
                </div>
              </div>
              <div>
                <p>Email <span class="text-red-500" >*</span></p>
                <input type="text" v-model="form_data.email" class=" px-1 border mt-2 w-full border-black h-[37px]"  required/>
              </div>
              <div>
                <p>Contact number <span class="text-red-500" >*</span></p>
                <input type="number" v-model="form_data.contact" class=" px-1 border mt-2 w-full border-black h-[37px]" required/>
              </div>
              <div>
                <p>Message</p>
                <textarea v-model="form_data.message" class=" px-1 py-1 border mt-2 w-full border-black h-[70px]"></textarea>
              </div>
              <p class="text-sm font-bold text-green-600" v-if="successMessage" >{{ successMessage }}</p>
              <p class="text-sm font-bold text-red-600" v-if="errorMessage" >{{ errorMessage }}</p>
              <button type="submit" class="w-full rounded-lg bg-red-500 text-white text-center h-[35px]">
                  Send
                </button>
            </form>
          </div>
        </div>
        <div class="w-full h-[1px] mt-[10px] mb-5 bg-gray-500"></div>
      </div>
      <HomepageFooter />
    </div>
  </main>
</template>
