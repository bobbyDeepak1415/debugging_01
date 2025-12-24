import { Link, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      
       
      <Routes>
        <Route path="/" element={<NavWrapper/>}>
        <Route path="/" element={<Home/>}></Route>
        </Route>

      </Routes>
      
    </>
  )
}




export default App


function NavWrapper(){
  return <>
  <nav>

  
  <Link to='/'>Home</Link>
  <Link to='/store'>Store</Link>
  <Link to='/about'>About</Link>
  </nav>

  </>
}