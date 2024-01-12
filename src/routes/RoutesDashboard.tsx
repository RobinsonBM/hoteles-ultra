import { Route, Routes } from 'react-router-dom';
import { DashboardView } from './DashboardView';
import { Sidebar } from './Sidebar';

export const RoutesDashboard = () => {
    return (
        <div className='d-flex'>
            <section className='sidebar d-flex flex-column justify-content-between'>
                <Sidebar />
            </section>
            <article className='content'>
                <Routes>
                    <Route path='/' element={<DashboardView />} />
                </Routes>
            </article>
        </div>
    );
};
