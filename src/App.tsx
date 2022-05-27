import { useEffect } from 'react';
import { LoginRouter } from './routers';
//
// const App = () => {
//     useEffect(() => {
//         document.title = 'InnoStalker';
//     }, []);
//
//     return <LoginRouter />;
// };
//
// export default App;

import React from 'react';

const App = () => {
    useEffect(() => {
        document.title = 'InnoStalker';
    }, []);
    console.log('IM in app')

        return <LoginRouter />;

    // return(
    //     <p>Hello world для проекта - ijl</p>
    // )
}

export default App;