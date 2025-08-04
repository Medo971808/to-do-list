<template>
  <auth-layout>
    <section>
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
        
        <p class="text-red-600 px-4 text-md mb-3 font-semibold" v-if="error">{{ error }}</p>
        
        <button class="w-[60%] bg-[#271b67] hover:bg-[#1c173e] text-white h-10 rounded-xl mb-3" :disabled="isPending">Sign In</button>
      </form>
        <p class="text-sm text-black ">
          Already have an account?
          <router-link :to="{name: 'Signup'}" class="text-black font-bold ml-1" :disabled="isPending">Sign up</router-link>
        </p>
    </section>
  </auth-layout>
</template>

<script>
import { ref } from 'vue';
import useLogin from '@/composables/useLogin';
import { useRouter } from 'vue-router';
import AuthLayout from '@/components/AuthLayout.vue'

export default {
  components: { AuthLayout },
  setup() {
    const email = ref('')
    const password = ref('')
    const {error, login, isPending} = useLogin()
    const router = useRouter()
    
    const handleLogin = async () => {
        await login(email.value, password.value)
        if(!error.value){
            router.push({name: 'Hero'})
        }
    }

    return { handleLogin, email, password, error, isPending }
  }
}
</script>