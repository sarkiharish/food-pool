import React, { useState } from 'react'

export default function Profile(props) {
    const [count, setCount] = useState(0)
  return (
 <>
       <h1>Profile of FUnctional component</h1>
    <h3>Hi Harish Bhai k x kbr</h3>
    <h5>Name : {props.name}</h5>
    <h5>Count : {count}</h5>
    <button onClick={() => {setCount(1)}}>SET COUNT</button>
 </>
  )
}
