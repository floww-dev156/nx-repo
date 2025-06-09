import { useMemo } from 'react'

const useYearsArray = (startYear = 1800) =>
   useMemo(() => {
      const currentYear = new Date().getFullYear()
      const endYear = currentYear + 10
      return Array.from(
         { length: endYear - startYear + 1 },
         (_, i) => startYear + i
      )
   }, [])

export default useYearsArray
