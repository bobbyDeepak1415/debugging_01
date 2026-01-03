import { useState } from "react";

export function Store() {
  const [isLoddedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Store</h1>

      <button onClick={() => setIsLoggedIn((prev) => !prev)}>
        {isLoddedIn ? "LogOut" : "Login"}
      </button>
      <br></br>
      <br></br>
      <p>{isLoddedIn ? "user is logged in" : "user is logged out"}</p>
    </div>
  );
}


