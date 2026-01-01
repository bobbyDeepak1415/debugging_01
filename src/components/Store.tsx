import { useState } from "react";

export const Store = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h1>Store</h1>

      <button onClick={(prev)=>setIsLoggedIn(!prev)}>{isLoggedIn ? "Logout" :"Login"}</button>

      
    </>
  );
};
