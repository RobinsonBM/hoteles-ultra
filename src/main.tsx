import './mocks/mirage/config.js';
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './routes/Login.tsx';
import { ProfileView } from './routes/ProfileView.tsx';
import { RoutesDashboard } from './routes/RoutesDashboard.tsx';
import Home from './routes/Home.tsx';
import ReactDOM from 'react-dom/client';
import { NavbarMenu } from './components/NavbarMenu.tsx';
import { Footer } from './components/Footer.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route
                path='/'
                element={
                    <>
                        <NavbarMenu />
                        <Home />
                        <Footer />
                    </>
                }
            />
            <Route path='admin' element={<Login />} />
            <Route path='dashboard' element={<RoutesDashboard />} />
            <Route path='profile/:username' element={<ProfileView />} />
        </Routes>
    </BrowserRouter>
);
