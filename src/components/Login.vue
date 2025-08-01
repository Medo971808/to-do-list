<template>
    <section v-if="!showSignup" class="text-center p-15 block h-auto">
        <form @submit.prevent="handleLogin">
            <h1 class="mb-7 font-oswald text-3xl font-extrabold text-left ml-[22%]">Sign in</h1>

            <input type="email" required v-model="email" 
            placeholder="E-mail address" 
            class="w-[60%] mb-4 bg-[#FFF9F9] border-2 border-black rounded-lg h-8 pl-5"
            >

            <input type="password" required v-model="password" 
            placeholder="Re-enter the password" 
            class="w-[60%] mb-6 bg-[#FFF9F9] border-2 border-black rounded-lg h-8 pl-5"
            >

            <p class="text-red-600  px-4 text-md mb-3 font-semibold" v-if="error">{{ error }}</p>

            <button class="w-[60%] bg-[#76DE37] h-10 rounded-xl mb-3" :disabled="isPending">Sign In</button>
        </form>
        <p class="text-sm text-black ">
          Already have an account?
          <button class="text-black font-bold ml-1" @click="$emit('switchToSignup')" :disabled="isPending">Sign up</button>
        </p>
    </section>
</template>

<script>
import { ref } from 'vue';
import Signup from './Signup.vue';
import useLogin from '@/composables/useLogin';
import { useRouter } from 'vue-router';

export default {
  components: { Signup },
  emits: ['switchToSignup'],
  setup() {
    const showSignup = ref(false)

    const email = ref('')
    const password = ref('')
    const {error, login, isPending} = useLogin()
    const router = useRouter()
    
    const handleLogin = async () => {
        await login(email.value, password.value)
        if(!error.value){
            router.push({name: 'Main'})
        }
    }

    return { showSignup, handleLogin, email, password, error, isPending }
  }
}
</script>