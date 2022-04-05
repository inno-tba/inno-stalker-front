import { Routes, Route, Navigate } from 'react-router-dom';

const HomeRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<div>Home</div>} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
};

export default HomeRouter;
