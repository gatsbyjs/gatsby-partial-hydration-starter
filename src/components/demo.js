/**
 * To mark a component as client side, you add the "use client" directive.
 * @see {@link https://github.com/reactjs/rfcs/blob/2348bd8ed7fb66fedf04726eb046065be7f4e23f/text/0227-server-module-conventions.md}
 */
"use client"

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
