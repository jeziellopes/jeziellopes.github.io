import { useCallback, useState } from 'react'

export const useSearch = () => {
  const [search, setSearch] = useState('')

  const onChange = useCallback(
    (e: any) => {
      setSearch(e.target.value)
    },
    [search]
  )

  return { search, onChange }
}
