import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

const error = ref(null)
const isPending = ref(null)

const login = async (email, password) => {
    error.value = null
    isPending.value = true

    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        error.value = null
        return res
    } catch(err) {
        error.value = 'An error occurred during login. Please try again.'
    } finally {
        isPending.value = false
    }
}

const useLogin = () => {
    return {error, login, isPending}
}

export default useLogin