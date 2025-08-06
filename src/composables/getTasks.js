import { ref } from 'vue'
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase/config'

const getTasks = (collectionName, userId) => {
  const tasks = ref([])
  const error = ref(null)

  const colRef = collection(db, collectionName)

  let q = query(
    colRef,
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  )

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const results = []
    snapshot.docs.forEach(doc => {
      results.push({ id: doc.id, ...doc.data() })
    })
    tasks.value = results
    error.value = null
  }, (err) => {
    console.error(err.message)
    error.value = 'Could not fetch tasks'
  })

  return { tasks, error, unsubscribe }
}

export default getTasks
