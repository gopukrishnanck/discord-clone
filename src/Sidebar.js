import React from 'react'
import { useEffect ,useState} from 'react';

import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import SidebarChannel from './SidebarChannel'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import CallIcon from '@material-ui/icons/Call'
import {Avatar} from '@material-ui/core'
import MicIcon from '@material-ui/icons/Mic'
import HeadeSetIcon from '@material-ui/icons/Headset'
import SettingsIcon from '@material-ui/icons/Settings'
import {useSelector,useDispatch} from 'react-redux'
import {selectUser} from './features/userSlice'
import db, {auth} from './Firebase'





function Sidebar() {
  const user = useSelector(selectUser)
  const [channel, setChannels] = useState()
useEffect(() => {
    db.collection('channels').onSnapshot((snapshot)=>{
        setChannels(snapshot.docs.map(doc=>({
            id:doc.id,
            channel:doc.data()
        })))
    })
 
}, [])
const handleAtChannel=()=>{
    const channelName = prompt('Enter a new channel name')
    if(channelName){
        db.collection('channels').add({
            channelName:channelName
        })
    }

}
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Gk Discord</h3>
                <ExpandMoreIcon/>
            </div>
            <div className="sidebar__chaneel">
                <div className="sidebar__channelHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon/>
                        <h4>Text channel</h4>
                    </div>
                    <AddIcon onClick={handleAtChannel} className="sidebar__addChannel"/>
                </div>
                <div className="sidebar__channellist">
                  {
                      channel?.map(({id,channel})=>{
                          return(

                              <SidebarChannel key={id} id={id} channelName={channel.channelName}/>
                          )

                      })
                  }

                </div>
            </div>
            <div className="sidebar__voice">
                <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large"/>
                <div className="sidebar__voiceInfo"><h3>Voice Connected</h3><p>Stream</p></div>

            <div className="sidebar__voiceIcons">
                <InfoOutlinedIcon/>
                <CallIcon/>
            </div>
            </div>
            <div className="sidebar__profile">
            <Avatar onClick={()=>auth.signOut()} className="avatar" src={user.photo} />
            <div className="sidebar__profileInfo">
                <h3>{user.displayName}</h3>
                <p>{user.uId.substring(0,5)}</p>
            </div>
            <div className="sidebar__profileIcons">
                <MicIcon/>
                <HeadeSetIcon/>
                <SettingsIcon/>
            </div>
            </div>
        </div>
    )
}

export default Sidebar
