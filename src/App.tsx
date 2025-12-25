import { Link, Outlet, Route, Routes } from "react-router-dom";
import About from "./components/About";
// import Store from "./components/Store";
import Home from "./components/Home";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/store" element={<Store />}></Route>
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
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
      </nav>

      <Outlet />
    </>
  );
}
