import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";
import { ref } from "vue";

const error = ref(null);
const isPending = ref(false);

const signout = async () => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await signOut(auth);
    error.value = null;
    return res;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
};

const useSignout = () => {
  return { error, signout, isPending };
};

export default useSignout;
