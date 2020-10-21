import React,{useState,useEffect} from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddIcon from '@material-ui/icons/AddCircle'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import GiftIcon from '@material-ui/icons/Gif'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import Message from './Message.js'
import { useSelector } from 'react-redux'
import {selectChannelName,selectChannelId} from './features/appSlice'
import {selectUser} from './features/userSlice'
import db from './Firebase'
import fireBase from 'firebase'



function Chat() {
    const User = useSelector(selectUser)
    const channelHead= useSelector(selectChannelName)
    const channelid= useSelector(selectChannelId)

    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])
    useEffect(() => {
        if(channelid){
        db.collection('channels').doc(channelid).collection("messages").
        orderBy('timeStamp','desc').onSnapshot((snapshot)=>{
            setMessages(snapshot.docs.map(doc=>doc.data()))
        })
    }

    }, [channelid])
    const sendMessage=(e)=>{
        e.preventDefault()
        db.collection('channels').doc(channelid).collection('messages').add({
            message:input,
            user:User,
            timeStamp:fireBase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }

    return (
        <div className="chat">
            <ChatHeader/>
            <div className="chat__message">
                {messages?.map((message)=>{
                return(
                  <Message timestamp={message.timeStamp} message={message.message} user={message.user}/>
                  ) 
                    

                })}

            </div>
            <div className="chat__input">
            <AddIcon fontSize="large"/>
            <form >
                <input disabled={!channelid} type="text" value={input} placeholder="Enter Message" onChange={(e)=>{setInput(e.target.value)}}/>
                <button disabled={!channelid} className="chatInput__button" type="submit" onClick={sendMessage}>Submit</button>
            </form>
            <div className="chat__inputIcons">
                <CardGiftcardIcon fontSize="large"/>
                <GiftIcon fontSize="large"/>
                <EmojiEmotionsIcon fontSize="large"/>
            </div>
            </div>
        </div>
    )
}

export default Chat
