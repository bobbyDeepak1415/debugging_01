import { useState } from "react";

export const Store = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Store</h1>

      <button onClick={() => setIsLoggedIn((prev) => !prev)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <p>{isLoggedIn ? "user is LoggedIn" : "user is logged out"}</p>
    </div>
  );
};
