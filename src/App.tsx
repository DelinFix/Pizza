import { Route, Routes } from "react-router-dom"
import React, { lazy } from "react"
import "./scss/app.scss"

const Home = lazy(() => import("./pages/Home"))
const Cart = lazy(() => import("./pages/Cart"))
const NotFound = lazy(() => import("./pages/NotFound"))
const MainLayout = lazy(() => import("./Layout/MainLayout"))

//TODO create MainRouter

function App() {
  return (
    <React.Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </React.Suspense>
  )
}

export default App
