import { GameMap, TargetsList } from '../../components';

const HomePage = () => {
    return (
        <div className='flex'>
            <div className='hidden md:flex w-1/3 mx-auto px-4 sm:px-6 lg:px-8'>
                <TargetsList />
            </div>
            <div className='sm:w-screen md:w-2/3 md:mx-auto px-4 sm:px-6 lg:px-8'>
                <GameMap />
            </div>
        </div>
    );
};

export default HomePage;
