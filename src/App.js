import Header from './Header'; //Include Header
import Footer from './Footer'; //Include Footer
import Home from './Home'
import Shop from './Shop'
import SingleProduct from './SingleProduct'
import Cart from './Cart'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Header></Header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          <Footer></Footer>
        </BrowserRouter>
     
    </div>
  );
}
export default App;