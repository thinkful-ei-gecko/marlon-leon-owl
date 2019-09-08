import React from 'react';
import './Stage.css'

function Stage(props){


    return(
        <div className='stageLog'>
            <div className="stageDisplay">
                {
                props.participants.filter(participant => participant.onStage === true).map(participant => {
                    return (
                    <div className="isOnStage" key={participant.id}>
                        <h4>{participant.name}</h4>
                        <img src={participant.avatar} alt="User Avatar"></img>
                    </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Stage;