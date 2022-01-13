import { useEffect, useState } from "react"
import SideBar from "./compnents/SideBar"
import axios from "axios"
import StoreContext from "./uiltes/StoreContext"
import { Box, CssBaseline } from "@mui/material"

import { toast, ToastContainer } from "react-toastify"
import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./Pages/Login"

import Profile from "./Pages/Profile"
import Products from "./Pages/Products"
import Orders from "./Pages/Orders"
import OneProduct from "./Pages/OneProduct"
import OneOrder from "./Pages/OneOrder"
function App() {
  const [profile, setProfile] = useState(null)
  const [products, setProducts] = useState([])
  const [orders, setOrder] = useState([])
  const navigate = useNavigate()
  //-------------------------profile-------------------//
  const getProfile = async () => {
    const response = await axios.get("http://localhost:7000/api/auth/seller/profile", {
      headers: {
        Authorization: localStorage.tokenSeller,
      },
    })
    setProfile(response.data)
  }

  const editProfile = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const profileBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        username: form.elements.username.value,
        email: form.elements.email.value,
        nameStore: form.elements.nameStore.value,
        phone: form.elements.phone.value,
        photo: form.elements.photo.value,
        aboutYourBusiness: form.elements.aboutYourBusiness.value,
      }
      await axios.put(`http://localhost:7000/api/auth/seller/profile-edit`, profileBody, {
        headers: {
          Authorization: localStorage.tokenSeller,
        },
      })
      getProfile()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteProfile = async profileId => {
    try {
      await axios.delete(`http://localhost:7000/api/auth/seller/profile/${profileId}`, {
        headers: {
          Authorization: localStorage.tokenSeller,
        },
      })
      toast.success("profile is deleted")
      getProfile()
      navigate("/login")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //-------------------------------products--------------//
  const myProducts = async () => {
    const response = await axios.get("http://localhost:7000/api/product/myProduct", {
      headers: {
        Authorization: localStorage.tokenSeller,
      },
    })
    setProducts(response.data)
  }
  const addProduct =async e=>{
    e.preventDefault()
    try{
      const form = e.target
      const productBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        quantity: form.elements.quantity.value,
        price: form.elements.price.value,
        image: form.elements.image.value,
      }
      await axios.post("http://localhost:7000/api/product/new-product",productBody, {
        headers: {
          Authorization: localStorage.tokenSeller,
        },
      })

      myProducts()
    }catch(error){
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editProduct = async (e, productId) => {
    e.preventDefault()
    try {
      const form = e.target
      const productBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        quantity: form.elements.quantity.value,
        price: form.elements.price.value,
        image: form.elements.image.value,
      }
      await axios.put(`http://localhost:7000/api/product/edit-product/${productId}`, productBody, {
        headers: {
          Authorization: localStorage.tokenSeller,
        },
      })
      myProducts()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteProduct =async productId=>{
    try{
      await axios.delete(`http://localhost:7000/api/product/delete-product/${productId}`, {
        headers: {
          Authorization: localStorage.tokenSeller,
        },
      })
      toast.success("product is deleted")
      myProducts()
 
    }catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const productSearch = e => {
    e.preventDefault()
    const form = e.target
    const searchText = form.elements.productSearch.value

    const productFound = products.find(product => product.title === searchText)
    if (productFound) return navigate(`/product/${productFound._id}`)


    toast.error("not found")
  }
   //---------------------------------order-------------------------//
   const getOrders = async () => {
    const response = await axios.get("http://localhost:7000/api/auth/seller/order", {
      headers: {
        Authorization: localStorage.tokenSeller,
      },
    })
    setOrder(response.data)
  }

  const editOrder =async (e,orderId)=>{
    e.preventDefault()
    console.log("dfghjkl");
try{
  const form=e.target
  const orderBody={
    status:form.elements.status.value,
  }
  await axios.put(`http://localhost:7000/api/auth/seller/order/${orderId}`,orderBody, {
    headers: {
      Authorization: localStorage.tokenSeller,
    },
  })
  getOrders()
}catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const orderSearch = e => {
    e.preventDefault()
    const form = e.target
    const searchText = form.elements.orderSearch.value

    const orderFound = orders.find(order => order.userId.username === searchText)
    if (orderFound) return navigate(`/order/${orderFound._id}`)
getOrders()

    toast.error("not found")
  }
  //------------------------------------------------//
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const sellerBody = {
        email: form.elements.email.value,
        username: form.elements.username.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:7000/api/auth/seller/login", sellerBody)
      localStorage.tokenSeller = response.data
      toast.success("login success")
      navigate("/profile")
      getProfile()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const logout = async () => {
    localStorage.removeItem("tokenSeller")
  }

  useEffect(() => {
    getProfile()
    myProducts()
    getOrders()
  }, [])
  const store = {
    profile,
    deleteProfile,
    login,
    logout,
    editProfile,
    products,
    editProduct,
    deleteProduct,
    addProduct,
    getOrders,
    orders,
    editOrder,
    productSearch,
    orderSearch
  }
  return (
    <StoreContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/product/:productId" element={<OneProduct />} />
            <Route path="/order/:orderId" element={<OneOrder />} />
            <Route path="/product" element={<Products />} />
            <Route path="/order" element={<Orders />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </Box>
    </StoreContext.Provider>
  )
}

export default App
