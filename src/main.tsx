// import App from './App.tsx';
import './mocks/mirage/config.js';
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChooseUsernameView } from './routes/ChooseUsernameView.tsx';
import { EditProfileView } from './routes/EditProfileView.tsx';
import { Login } from './routes/Login.tsx';
import { Logout } from './routes/Logout.tsx';
import { ProfileView } from './routes/ProfileView.tsx';
import { RoutesDashboard } from './routes/RoutesDashboard.tsx';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            {/* <Route path='/' element={<App />} /> */}
            <Route path='/' element={<Login />} />
            <Route path='dashboard' element={<RoutesDashboard />} />
            <Route path='dashboard/profile' element={<EditProfileView />} />
            <Route path='logout' element={<Logout />} />
            <Route path='profile/:username' element={<ProfileView />} />
            <Route path='choose-username' element={<ChooseUsernameView />} />
        </Routes>
    </BrowserRouter>
);
