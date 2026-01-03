import { Link, Outlet, Route, Routes } from "react-router-dom";
import About from "./components/About";
// import Store from "./components/Store";
import Home from "./components/Home";
import React from "react";
// import Store from "./components/Store";

// const Store = React.lazy(()=>import('./components/Store').then((module)=>{
//   return {
//     default:module.default
//   }
// }))



const Todo = React.lazy(() =>
  import("./components/Todo").then((module) => {
    return {
      default: module.default,
    };
  })
);

console.log("from app");

function App() {
  const item: number = 45;

  return (
    <>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" element={<Home item={item} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

function NavWrapper() {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem", fontSize: "2rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/errorBoun">ErrorBoun</Link>
      </nav>

      <Outlet />
    </>
  );
}
