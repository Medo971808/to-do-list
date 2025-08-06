import { ref } from 'vue'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'

const getOneTask = (collectionName, id) => {
  const task = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const docRef = doc(db, collectionName, id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        task.value = { id: docSnap.id, ...docSnap.data() }
        error.value = null
      } else {
        throw Error('Task not found')
      }
    } catch (err) {
      console.log(err.message)
      error.value = 'Can not display your task, Please try again'
    }
  }

  return { task, error, load }
}

export default getOneTask
