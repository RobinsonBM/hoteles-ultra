import './mocks/mirage/config.js';
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer.tsx';
import { Home } from './routes/Home.tsx';
import { HotelsView } from './routes/HotelsView.tsx';
import { Login } from './routes/Login.tsx';
import { NavbarMenu } from './components/NavbarMenu.tsx';
import { NextUIProvider } from '@nextui-org/react';
import { RoutesDashboard } from './routes/RoutesDashboard.tsx';
import ReactDOM from 'react-dom/client';
import { HotelsProvider } from './context/HotelsProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <HotelsProvider>
            <NextUIProvider>
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
                    <Route
                        path='hoteles'
                        element={
                            <>
                                <NavbarMenu />
                                <HotelsView />
                                <Footer />
                            </>
                        }
                    />
                    <Route path='admin' element={<Login />} />
                    <Route path='dashboard/*' element={<RoutesDashboard />} />
                </Routes>
            </NextUIProvider>
        </HotelsProvider>
    </BrowserRouter>
);
