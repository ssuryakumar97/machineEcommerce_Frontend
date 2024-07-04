import { useSelector } from "react-redux";
import CheckOut from "./components/Checkout";
import Pay from "./components/Pay";
import Success from "./components/Success";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import {BrowserRouter as Router, Routes, Route, Navigate, Outlet} from "react-router-dom"


const PrivateRoute = ({isAuthenticated}) => {
  return isAuthenticated ? (
    <>
      <Outlet/>
    </> ): (
      <Navigate to="/login"/>
    )
  
}


function App() {
  const {currentUser: user, isUserAuthenticated} = useSelector((state) => state.user);
  console.log(user, isUserAuthenticated)
  
console.log(user)
  return (
   
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<PrivateRoute isAuthenticated={isUserAuthenticated}/>}>
              <Route path="/cart" element={<Cart />} />
            </Route>
            {/* <Route path="/" element={user ? <Navigate to="/" /> : <Login />} /> */}
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductPage />} />
            
            
            <Route path="/pay" element={<Pay/>} /> {/*stripe*/}
            <Route path="/checkout" element={<CheckOut/>} /> {/*Razor pay*/}
            <Route path="/success" element={<Success/>} />
          </Routes>
        </Router>
      
  )
}

export default App;
