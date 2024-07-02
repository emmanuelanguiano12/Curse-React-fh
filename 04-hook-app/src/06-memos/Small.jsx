import { memo } from "react"

export const Small = memo(({value}) => {
    console.log('Me volví a generar:)')

  return (
    <h1>Counter: <small>{value}</small></h1>
  )
})
