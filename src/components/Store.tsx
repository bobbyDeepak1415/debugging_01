import { useState } from "react";

export const Store = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const handleClick = () => {
    setIsloggedIn((prev) => !prev);
  };

  return (
    <div>
      <h1>Store</h1>

      <button onClick={handleClick}> {isLoggedIn ? "logout" : "login"}</button>
      <br></br>
      <br></br>
      <p>{isLoggedIn ? "user is loggedin" : "user is loggedOut"}</p>
    </div>
  );
};
