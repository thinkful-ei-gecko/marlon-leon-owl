import React from 'react';
import './ChatLog.css'


/*ParticipantList.find



*/
function sortMessageType(props){
    if (props.type === 'message'){
        return (
            <img src='props.id' alt='Avatar ID'></img>
        )
    }
}

function ChatLog(props){


    return(
        <ul>
            {
                props.chatEvents.sort(a,b => a.timestamp - b.timestamp).map(event => {
                return(
                    <li>
                      {sortMessageType(event)}
                    </li>
                )
            })
        }
        </ul>
    )
}

export default ChatLog;