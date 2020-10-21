import React from 'react'
import './chatHeader.css'
import NotificationIcon from '@material-ui/icons/Notifications'
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded'
import PeopleAltRoundedicon from '@material-ui/icons/PeopleAltRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import SendRoundedIcon from '@material-ui/icons/SendRounded'
import HelpRoundedIcon from '@material-ui/icons/HelpRounded'
import { useSelector } from 'react-redux'
import {selectChannelName} from './features/appSlice'



function ChatHeader() {
    const channelHead= useSelector(selectChannelName)
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
    <h3><span className="chatHeaderHash">#</span>{channelHead}</h3>
      </div>
      <div className="chatHeader__right">
          <NotificationIcon/>
          <EditLocationRoundedIcon/>
          <PeopleAltRoundedicon/>
          <div className="chatHeader__search">
              <input type="text" placeholder="Search"/>
              <SearchRoundedIcon/>
          </div>
          <SendRoundedIcon/>
          <HelpRoundedIcon/>
      </div>
    </div>
  )
}

export default ChatHeader
