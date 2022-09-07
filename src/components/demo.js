// To mark a component as client side, you add the "client export" directive.
// @see https://github.com/reactjs/rfcs/pull/189#issuecomment-1116482278
"client export"

import React, { useCallback, useState } from "react"

export function Demo() {
  const [counter, setCounter] = useState(0)
  const onClick = useCallback(() => {
    setCounter(counter => counter + 1)
  }, [])

  return (
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
      <p style={{ margin: 0 }}>Current counter: {counter}</p>
      <button onClick={onClick}>Add counter</button>
    </div>
  )
}
