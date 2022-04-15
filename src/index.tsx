import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';

const container = document.getElementById('root');
if (!container) throw new Error('No container found');
const root = createRoot(container);

root.render(
    <RecoilRoot>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </RecoilRoot>
);
