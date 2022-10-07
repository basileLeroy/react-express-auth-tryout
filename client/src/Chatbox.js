import './App.css';
import io from 'socket.io-client'
import {useEffect, useState} from "react";

const socket = io.connect('http://localhost:5000')
function ChatBox() {
    // async on body
    const [message, setMessage] = useState('');
    const [messageReceived, setMessageReceived] = useState('');
    useEffect(() => {
        socket.on("emit_message", (data) => {
            setMessageReceived(data.message)
        })
    },[socket])
    const sendMessage = () => {
        // console.log(message);
        socket.emit("new_message", {message: message})
    }

    return (
        <>
            <div className="Chat">
                <div id="messageBox">
                    <h1>Message board:</h1>
                    <hr/>
                    {messageReceived}
                </div>
                <input placeholder='Message...' id={'message'} onChange={(event) => {setMessage(event.target.value)}}/>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </>
    );
}

export default ChatBox;
