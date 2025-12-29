import { useState } from "react";

export const Store = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  // const [msg,setMsg]=useState("")

  return (
    <div>
      <h1>Store</h1>

      {isLoggedIn ? <button>Logout</button> : <button>Login</button>}

      <br></br>
      <br></br>
    </div>
  );
};
