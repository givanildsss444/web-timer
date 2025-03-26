import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './pages/App'
import App2 from './pages/App2'


export default function RoutesPages() {

    return(


        <BrowserRouter>

            <Routes>

                <Route path='/' element={<App />}/>
                <Route path='/timerdown' element={<App2 />}/>
                <Route path='*' element={<h1>error 404</h1>}/>

            </Routes>

        </BrowserRouter>

    )


}

