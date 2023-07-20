import React from 'react'
import "./new.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { BorderAll, BorderColor, DriveFolderUploadOutlined } from '@mui/icons-material';

const New = ({inputs,title}) => {


  const[file,setfile]=useState("");
  
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>

        <div className="bottom">
          <div className="left">
            <img className='image' 
            src={file ? URL.createObjectURL(file) :"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" }
            alt=""
             />
          </div>
          <div className="right">
            <form className='form' >
            <div className="formInput">
                <label className='label' htmlFor='file'>
                 Image: <DriveFolderUploadOutlined className='icon' />
                </label>
                <input 
                className='input' 
                type="file" id="file"  
                onChange={e=>setfile(e.target.files[0])} 
                style={{display:"none"}}
                />
            </div>
              


             {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input className='input' type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
             
            <button className='button'>Send</button>
              
            

            </form>
            
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default New
