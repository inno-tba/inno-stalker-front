// import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
// import App from './App';
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';
//
// const container = document.getElementById('app');
// if (!container) throw new Error('No container found');
// const root = createRoot(container);
//
// root.render(
//     <RecoilRoot>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </RecoilRoot>
// );

import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

export default () => <App/>;

export const mount = (Сomponent: React.ComponentClass) => {
    ReactDom.render(
        <Сomponent/>,
        document.getElementById('app')
    );

    if(module.hot) {
        module.hot.accept('./app', ()=> {
            ReactDom.render(
                <RecoilRoot>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </RecoilRoot>,
                document.getElementById('app')
            );
        })
    }
};
