import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import Homescreen from './componenets/Homescreen';
import Aboutus from './componenets/Aboutus';
import ResultLoginPage from './componenets/ResultLoginPage';
import ResultDisplayer from './componenets/ResultDisplayer';


//here you will declare rules for roouting
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<Homescreen/>}/>
      <Route  path='/about' element={<Aboutus/>}/>
      <Route  path='/result/loginpage' element={<ResultLoginPage/>}/>
      <Route path='/resultpage/:anyValue' element={<ResultDisplayer/>}/>

    </Route>
  )
) 
//i misspelled cerateRoutesFromElemnts 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);

reportWebVitals();