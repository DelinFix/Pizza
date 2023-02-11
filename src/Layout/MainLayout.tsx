import { Outlet } from "react-router-dom"

// components
import { Header } from "components"

const MainLayout = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout
