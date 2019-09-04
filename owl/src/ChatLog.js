import React from 'react';
import './ChatLog.css'

function sortMessageType(event, participants, notation){
    let obj = participants.find(participant => event.participantId === participant.id);
    if (event.type === 'message'){
        return (
            <div className="personChatMessage">
                <img src={obj.avatar} alt='Avatar ID'></img>
                <h5>{obj.name} <span>{Date(event.timeStamp)}</span></h5>
                <p>{event.message}</p>
            </div>
        )
    }
    else {
        return (
            <div className="personChat">
                <h6>{obj.name} {notation[event.type]}</h6>
            </div>
        )
    }
}

function ChatLog(props){
    return(
        <ul>
            {
                props.chatEvents.sort((a,b) => a.timestamp - b.timestamp).map(event => {
                return(
                    <li key={event.timestamp + event.type + event.participantId}>
                      {sortMessageType(event, props.participants, props.notation)}
                    </li>
                )
            })
        }
        </ul>
    )
}

export default ChatLog;