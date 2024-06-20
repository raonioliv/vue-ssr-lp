import { ref } from "vue"

export const useAsync = (url: string, shouldRun: Boolean = true) => {
  let result = ref(null)
  let error = ref(null)
}
