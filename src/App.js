import Header from "./shared/components/layouts/Header";
import Menu from "./shared/components/layouts/Menu";
import Slider from "./shared/components/layouts/Slider";
import Sidebar from "./shared/components/layouts/Sidebar";
import Footer from "./shared/components/layouts/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Product from "./pages/Products";
import Success from "./pages/Success";
import Search from "./pages/Search";
import Page404 from "./pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        {/*	Body	*/}
        <div id="body">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <Menu/>
              </div>
            </div>
            <div className="row">
              <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                <Slider />

                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/Cart" element={<Cart/>} />
                  <Route path="/Category" element={<Category/>} />
                  <Route path="/Product" element={<Product/>} />
                  <Route path="/Success" element={<Success/>} />
                  <Route path="/Search" element={<Search/>} />
                  <Route path="*" element={<Page404/>} />
                </Routes>
              </div>

              <Sidebar />
            </div>
          </div>
        </div>
        {/*	End Body	*/}
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
