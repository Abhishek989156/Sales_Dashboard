import React, { useContext } from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { ImageSharp, ListAltOutlined } from '@mui/icons-material';
import { DarkModeContext } from '../context/darkModeContext';
const Navbar = () => {


  const{ dispatch} =useContext(DarkModeContext)
  return (
    <div className='navbar'>
        <div className='wrapper'>

          <div className="search">
            <SearchIcon className='icon'/>
            <input type='text' placeholder='Search...'></input>
          </div>

          <div className="items">



            <div className="item">
              <LanguageIcon className='icon'/>
              English

              
            </div>

            <div className="item">
              <DarkModeIcon className='icon' onClick={()=>dispatch({type:"TOGGLE"})} />
              

              
            </div>

            <div className="item">
              <FullscreenIcon className='icon'/>

              
            </div>

            <div className="item">
              <NotificationsIcon className='icon'/>
              <div className="counter">1</div>
            </div>

            <div className="item">
              <ChatBubbleOutlineIcon className='icon'/>
              <div className="counter">2</div>
            </div>
            <div className="item">
              <ListAltOutlined className='icon'/>
            </div>
            <div className="item">
              <img src='<a href="https://www.vecteezy.com/free-vector/man-avatar">Man Avatar Vectors by Vecteezy</a>' className='avatar'></img>
            </div>





          </div>
        </div>
      
    </div>
  )
}

export default Navbar
