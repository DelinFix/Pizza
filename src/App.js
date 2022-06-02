import './scss/app.scss'
import Header from "./components/Header"
import React, {useState} from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Cart from "./pages/Cart"

export const SearchContext = React.createContext('')

function App() {
    const [searchValue, setSearchValue] = useState('')

  return (
      <BrowserRouter>
          <div className="wrapper">
              <SearchContext.Provider value={{ searchValue, setSearchValue }}>
                  <Header/>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/cart" element={<Cart/>}/>
                      <Route path="*" element={<NotFound/>}/>
                  </Routes>
              </SearchContext.Provider>
          </div>
      </BrowserRouter>
  )
}

export default App
