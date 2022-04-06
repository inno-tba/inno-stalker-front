import { Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from '../../components';

const HomeRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<div>Home</div>} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </>
    );
};

export default HomeRouter;
