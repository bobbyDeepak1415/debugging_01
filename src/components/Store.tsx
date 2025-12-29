import { useState } from "react";

export const Store = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h1>Store</h1>

      <button onClick={() => setIsLoggedIn((prev) => !prev)}>
        {isLoggedIn ? "Logout" : "login"}
      </button>
      <br></br>
      <br></br>
    </>
  );
};
