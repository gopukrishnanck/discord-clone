import React from 'react'
import'./SidebarChannel.css'
import {useSelector,useDispatch} from 'react-redux'
import {setChanneInfo} from './features/appSlice'



function SidebarChannel({id,channelName}) {
    const dispatch= useDispatch()
    return (
        <div className="sidebar__channel" onClick={()=>dispatch(setChanneInfo({
            channelId:id,
            channelName:channelName
        }))}> 
            <h4><span className="sidebarChannel__hash">#</span>{channelName}</h4>
        </div>
    )
}

export default SidebarChannel
