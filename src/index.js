import ReactDOM from 'react-dom/client';

import App from './components/app';
    //Importing Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';
    //Component CSS
import './static/styles.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
)