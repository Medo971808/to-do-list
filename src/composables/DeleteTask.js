import { doc, deleteDoc } from "firebase/firestore"
import { db } from "@/firebase/config"
import { ref } from "vue"

const deleteTask = (collection, id) => {
  const error = ref(null)

  const remove = async () => {
    error.value = null
    try {
      const docRef = doc(db, collection, id)
      await deleteDoc(docRef)
    } catch (err) {
      console.log(err.message)
      error.value = "Failed to delete the task"
    }
  }

  return { remove, error }
}

export default deleteTask
