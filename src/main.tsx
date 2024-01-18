import './mocks/mirage/config.js';
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer.tsx';
import { Home } from './routes/Home.tsx';
import { HotelsProvider } from './context/HotelsProvider.tsx';
import { HotelsView } from './routes/HotelsView.tsx';
import { Login } from './routes/Login.tsx';
import { NavbarMenu } from './components/NavbarMenu.tsx';
import {NextUIProvider} from "@nextui-org/system";
import { RoutesDashboard } from './routes/RoutesDashboard.tsx';
import ReactDOM from 'react-dom/client';
import { HotelView } from './routes/HotelView.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <NextUIProvider>
        <BrowserRouter>
            <HotelsProvider>
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
                            path='hotels/search/:destiny?/:startDate?/:endDate?'
                            element={
                                <>
                                    <NavbarMenu />
                                    <HotelsView />
                                    <Footer />
                                </>
                            }
                        />
                        <Route 
                            path='hotel/:id' 
                            element={
                                <>
                                    <NavbarMenu />
                                    <HotelView />
                                    <Footer />
                                </>
                            } />
                        <Route path='admin' element={<Login />} />
                        <Route path='dashboard/*' element={<RoutesDashboard />} />
                    </Routes>
            </HotelsProvider>
        </BrowserRouter>
    </NextUIProvider>
);
