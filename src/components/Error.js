import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {

    const err = useRouteError();

  return (
    <div>
        <h1>Opps!!</h1>
        <br />
        <h2>Something went wrong 🙁🙁</h2>
        <h2>{err.status + " : " + err.statusText}</h2>
    </div>
  )
}

export default Error