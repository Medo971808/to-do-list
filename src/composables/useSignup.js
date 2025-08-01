import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref } from "vue";

const error = ref(null)
const isPending = ref(false)

const signup = async (email, password, displayName) => {
    error.value = null
    isPending.value = true
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        error.value = null
        await updateProfile(res.user, { displayName })
        return res
    } catch (err) {
        switch (err.code) {
            case 'auth/email-already-in-use':
                error.value = 'This email is already in use.';
                break;
            case 'auth/invalid-email':
                error.value = 'The email address is not valid.';
                break;
            case 'auth/weak-password':
                error.value = 'The password is too weak. It should be at least 6 characters.';
                break;
            case 'auth/operation-not-allowed':
                error.value = 'Email/password accounts are not enabled.';
                break;
            default:
                error.value = 'An error occurred during signup. Please try again.';
            }
        } finally {
            isPending.value = false
        }
}

const useSignup = () => {
    return { error, signup, isPending }
}

export default useSignup