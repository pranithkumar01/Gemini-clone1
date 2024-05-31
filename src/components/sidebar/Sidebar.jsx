import React, { useContext, useState } from 'react'
import './sidebar.css'
import { assets} from '../../assets/assets'
import { Context } from '../../context/context'
function Sidebar() {
  const [extended,setExtended]=useState(false)
 const {onSent,prevPromt, setRecentPromt,newChat}=useContext(Context)

 const loadpromt= async (prompt)=>{
  setRecentPromt(prompt)
  await onSent(prompt)
 }
 
  return (
    
    <div className='sidebar'> 
      <div className="top">
        <img  onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
        <div onClick={()=>newChat()}  className="new-chat">
            <img src={assets.plus_icon} alt="" />
            {extended?<p>New Chat</p>:null}
        </div>
        {extended?        <div className="recent">
          <p className='recent-title'>Recent</p>
          {prevPromt.map((item,index)=>{
            return(
            <div onClick={()=>loadpromt(item)}  className="recent-entry">
            <img src={assets.message_icon} alt="" />
            <p>{item.slice(0,10)}...</p>
          </div>
          )
          })}
          
        </div>:null}

      </div>
      <div className="bottom">
        <div className="bottenm-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended?<p>Help</p>:null}
          </div>  
          <div className="bottenm-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended?<p>Activity</p>:null}
          </div>
          <div className="bottenm-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended?<p>setting</p>:null}
          </div>   
         </div>
    </div>
    
  )
}

export default Sidebar
