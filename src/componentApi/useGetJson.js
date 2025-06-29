import { storeToRefs } from 'pinia'
import { useJsonStore } from '../stores/json'
export const useGetJosn = () => {
  const jsonStore = useJsonStore()

  const { menu, menuItem, flootData, product, actions } = storeToRefs(jsonStore)
  return { menu, menuItem, flootData, product, actions }
}
