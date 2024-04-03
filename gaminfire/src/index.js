import React from 'react';
import ReactDOM from 'react-dom/client';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<App />
<ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false}
closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover
theme="dark" font="helvectica" />
</>
   

);


