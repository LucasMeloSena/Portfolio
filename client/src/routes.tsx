import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BasePage from './pages/BasePage'
import Page404 from './pages/Page404'
import Home from './pages/Home'

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<BasePage/>}>
                        <Route path='/home' element={<Home/>}></Route>
                        <Route path="*" element={<Page404/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes