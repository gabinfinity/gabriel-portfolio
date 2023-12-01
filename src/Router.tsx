import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'
import { About } from './pages/About/About'
import { Contact } from './pages/Contact/Contact'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Route>
        </Routes>
    )
}