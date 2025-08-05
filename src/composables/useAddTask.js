import { ref } from 'vue'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'

const useAddTask = (collectionName) => {
  const error = ref(null)
  const isPending = ref(false)

  const addTask = async (task) => {
    error.value = null
    isPending.value = true

    try {
      await addDoc(collection(db, collectionName), task)
      isPending.value = false
    } catch (err) {
      error.value = 'Can not add a new task'
      console.log(err.message)
      isPending.value = false
    }
  }

  return { addTask, error, isPending }
}

export default useAddTask
