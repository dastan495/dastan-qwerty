import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import { useState } from "react";
import AddElectronics from "./components/AddElectronics/AddElectronics";
import AboutProfile from "./components/AboutProfile/AboutProfile";
import AboutUs from "./components/AboutUs/AboutUs";
import Complain from "./components/Complain/Complain";
import axios from "axios";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import EditForm from "./components/EditForm/EditForm";
// import Footer from "./components/Footer/Footer";

function App() {
  const API = "http://localhost:8000/products";
  const [electronics, setElectronic] = useState([]);
  const [oneProduct, setOneProduct] = useState(null);

  function addProduct(newElectronik) {
    axios.post(API, newElectronik);
  }

  async function getProducts() {
    let result = await axios.get(API);
    setElectronic(result.data);
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  async function getOneProduct(id) {
    let result = await axios.get(`${API}/${id}`);
    setOneProduct(result.data);
  }
  async function updateProduct(id, editProduct) {
    await axios.patch(`${API}/${id}`, editProduct);
    getProducts();
  }
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                deleteProduct={deleteProduct}
                electronics={electronics}
                getProducts={getProducts}
              />
            }
          />
          <Route
            path="/add-electronic"
            element={<AddElectronics addProduct={addProduct} />}
          />
          <Route
            path="/edit/:id"
            element={
              <EditForm
                updateProduct={updateProduct}
                oneProduct={oneProduct}
                getOneProduct={getOneProduct}
              />
            }
          />
          <Route path="/about-profile" element={<AboutProfile />} />
          <Route path="admin-panel" element={<AdminPanel />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/complain" element={<Complain />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
