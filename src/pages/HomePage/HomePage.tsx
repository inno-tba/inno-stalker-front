import { useEffect } from 'react';
import { GameMap } from '../../components';

const HomePage = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <div className='flex h-92vh'>
            <GameMap />
        </div>
    );
};

export default HomePage;
