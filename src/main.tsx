import './mocks/mirage/config.js';
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChooseUsernameView } from './routes/ChooseUsernameView.tsx';
import { EditProfileView } from './routes/EditProfileView.tsx';
import { Login } from './routes/Login.tsx';
import { Logout } from './routes/Logout.tsx';
import { ProfileView } from './routes/ProfileView.tsx';
import { RoutesDashboard } from './routes/RoutesDashboard.tsx';
import App from './App.tsx';
import ReactDOM from 'react-dom/client';
import { NavbarMenu } from './components/NavbarMenu.tsx';
import { Footer } from './components/footer.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route
                path='/'
                element={
                    <>
                        <NavbarMenu />
                        <App />
                        <Footer />
                    </>
                }
            />
            <Route path='admin' element={<Login />} />
            <Route path='dashboard' element={<RoutesDashboard />} />
            <Route path='dashboard/profile' element={<EditProfileView />} />
            <Route path='logout' element={<Logout />} />
            <Route path='profile/:username' element={<ProfileView />} />
            <Route path='choose-username' element={<ChooseUsernameView />} />
        </Routes>
    </BrowserRouter>
);
