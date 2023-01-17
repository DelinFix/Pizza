import React from "react"
import MainRouter from "./MainRouter"
import "./scss/app.scss"

const App = () => {
    return (
        <React.Suspense fallback={<div>Загрузка...</div>}>
            <MainRouter />
        </React.Suspense>
    )
}

export default App
