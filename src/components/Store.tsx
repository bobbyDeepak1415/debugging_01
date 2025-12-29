import { useState } from "react"

export const Store = () => {

  const [isLoggedIn,setIsloggedIn]=useState(false)

  return (
    <div>
      <h1>Store</h1>
      <button onClick={handleLogin}>Login</button>
      <br></br>
      <br></br>
      <p>{isLoggedIn}</p>
    </div>
  )
}


