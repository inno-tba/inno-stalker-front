import { useEffect } from 'react';
import { LoginRouter } from './routers';

const App = () => {
    useEffect(() => {
        document.title = 'InnoStalker';
    }, []);

    return <LoginRouter />;
};

export default App;
