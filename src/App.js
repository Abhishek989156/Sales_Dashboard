import Home from './pages/home/Home';
import Login from './pages/login/Login'
import New from './pages/new/New'
import Single from './pages/single/Single'
import List from './pages/list/List'
import './style/dark.css'
import { useContext, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { productInputs, userInputs } from './formSource';
import { DarkModeContext } from './components/context/darkModeContext';
import { useEffect } from 'react';
function App() {

  useEffect(() => {
    alanBtn({
        key: '44acd88e4a6f75dccf13f3ffe6afdb432e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: ({command}) => {
          if(command === 'testCommand') {
             alert('This is a Alan AI demo');
          }
       }
    });
  }, []);

   const{darkMode}=useContext(DarkModeContext);


   function handleClick() {
    // Add your button click logic here
    alert("Button clicked!");
  }



  
  return (


   

    <div className={darkMode ?"app dark" :"app"}>
     
     <Router>
       
      <Routes>
        <Route path='/' >
          <Route index element={<Home/>}></Route>
          <Route path="login" element={<Login/>}></Route>

          <Route path="users" >
             <Route index element={<List/>}></Route>
             <Route path=':userId' element={<Single/>}></Route>
             <Route path='new' element={<New inputs={userInputs} title="Add New User"/>  }></Route>
          </Route>
          
          <Route path="products" >
             <Route index element={<List/>}></Route>
             <Route path=':productId' element={<Single/>}></Route>
             <Route path='new' element={<New inputs={productInputs} title="Add New Product" />}></Route>
          </Route>

        </Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
