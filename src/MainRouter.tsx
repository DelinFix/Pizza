import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

const Home = lazy(() => import("./pages/Home"))
const Cart = lazy(() => import("./pages/Cart"))
const NotFound = lazy(() => import("./pages/NotFound"))
const MainLayout = lazy(() => import("./Layout/MainLayout"))

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default MainRouter
