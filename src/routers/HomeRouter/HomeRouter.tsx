import { Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from '../../components';
import { HomePage } from '../../pages';

const HomeRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='*' element={<Navigate to='/home' />} />
                <Route path='/home' element={<HomePage />} />
            </Routes>
        </>
    );
};

export default HomeRouter;
