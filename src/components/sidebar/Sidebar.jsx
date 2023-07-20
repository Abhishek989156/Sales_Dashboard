import React, { useContext } from 'react'
import './sidebar.css'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PeopleIcon from '@mui/icons-material/People';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../context/darkModeContext';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect } from 'react';



const Sidebar = () => {

  const{dispatch}=useContext(DarkModeContext)
  

const handleDarkmode=()=>{
  
   dispatch({type:"DARK"});
  }

  const handleLightmode=()=>{
    dispatch({type:"LIGHT"})
  }

  return (
    <div className='sidebar'>

        <div className='top'>
          <Link to={"/"} style={{textDecoration:"none"}} >
           <span className='logo'>Home</span>
          </Link>

         

        </div>

        <hr/>



        <div className='center'>
          <ul>
            <p className='title'>MAIN</p>
            <li>
              <SpaceDashboardIcon className='icon'/>
              <span>Dashboard</span>

            </li>
            <p className='title'>LIST</p>
            <Link to="/users" style={{textDecoration:"none" ,color:"black"}}>

           
            <li>
              <PeopleIcon className='icon'></PeopleIcon>
              <span className='user'>Users</span>

            </li>
             </Link>

            <Link to="/products" style={{textDecoration:"none" ,color:"black"}}>
              
           
            <li>
              <ProductionQuantityLimitsIcon className='icon'/>
              <span className='user'>Products</span>

            </li>
             </Link>
            <li>
              <BorderColorIcon className='icon'/>
              <span>Orders</span>

            </li>
            <li>
              <LocalShippingIcon className='icon'/>
              <span>Delivery</span>

            </li>
            <p className='title'>USEFULL</p>
            <li>
              <QueryStatsIcon className='icon'/>

              <span>Stats</span>

            </li>
            <li>
              <CircleNotificationsIcon className='icon'/>
              <span>Notifications</span>

            </li>
            <p className='title'>SERVICE</p>
            <li>
            
              <HealthAndSafetyIcon className='icon'/>
              <span>System Health</span>

            </li>
            <li>
              <AutoStoriesIcon className='icon'/>
              <span>Logs</span>

            </li>
            <li>
              <SettingsIcon className='icon'/>
              <span>Settings</span>

            </li>
            <p className='title'>USER</p>
            <li>

              <AccountCircleIcon className='icon'/>
              <span>Profile</span>

            </li>
            <li>
              <LogoutIcon className='icon'/>
              <span>Logout</span>

            </li>
          </ul>

        </div>




        <div className='bottom'>

          <div className="colourOption" onClick={()=>dispatch({type:"LIGHT"})} ></div>
          <div className="colourOption" onClick={()=>dispatch({type:"DARK"})} ></div>
          
        
        
        </div>
      
    </div>
  )
}

export default Sidebar
