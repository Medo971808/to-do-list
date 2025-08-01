<template>
    <section class="text-center p-15 block" v-if="!showLogin">
        <form @submit.prevent="handleSignup">
            <h1 class="mb-7 font-oswald text-3xl font-extrabold text-left lg:ml-[22%]">Sign up</h1>
            <input type="text" required  placeholder="First Name" v-model="firstName"
            class="w-[60%] mb-4 bg-[#FFF9F9] border-2 border-black rounded-lg h-8 pl-5"
            >

            <input type="text" required placeholder="Last Name" v-model="lastName"
            class="w-[60%] mb-4 bg-[#FFF9F9] border-2 border-black rounded-lg h-8 pl-5"
            >

            <input type="email" required placeholder="E-mail address" v-model="email"
            class="w-[60%] mb-4 bg-[#FFF9F9] border-2 border-black rounded-lg h-8 pl-5"
            >

            <input type="password" required placeholder="Password" v-model="password"
            class="w-[60%] mb-4 bg-[#FFF9F9] border-2 border-black rounded-lg h-8 pl-5"
            >

            <input type="password" required placeholder="Re-enter the password" v-model="confirmPassword"
            class="w-[60%] mb-6 bg-[#FFF9F9] border-2 border-black rounded-lg h-8 pl-5"
            >

            <p class="text-red-600  px-4 text-md mb-3 font-semibold" v-if="error">{{ error }}</p>

            <button class="w-[60%] bg-[#271b67] hover:bg-[#1c173e] text-white h-10 rounded-xl mb-3" :disabled="isPending">Sign Up</button>
        </form>
        <p class="text-sm text-black ">
          Don't have an account?
          <button class="text-black font-bold ml-1" @click="$emit('switchToLogin')" :disabled="isPending">Sign In</button>
        </p>
    </section>
</template>

<script>
import { ref } from 'vue';
import Login from './Login';
import useSignup from '@/composables/useSignup';
import { useRouter } from 'vue-router';

export default {
  components: { Login },
  emits: ['switchToLogin'],
  setup() {
    const showLogin = ref(false)

    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const {error, signup, isPending} = useSignup()
    const router = useRouter()

    const handleSignup = async () => {
        if(password.value !== confirmPassword.value) {
            error.value = 'Passwords do not match'
            return
        }
        await signup(email.value, password.value, `${firstName.value} ${lastName.value}`)

        if(!error.value){
            router.push({name: 'Main'})
        }
    }


    return { showLogin, firstName, lastName, email, password, confirmPassword, handleSignup, error, isPending }
  }
}
</script>