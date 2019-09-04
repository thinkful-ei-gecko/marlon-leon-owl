import React from 'react';



function ParticipantList(props){
  return (
    <ul>
        {
          props.participants.filter(participant => participant.inSession === true ).map(participant => {
          return(
          <li key={participant.id}>
            <img src={participant.avatar} alt="User Avatar" />
            <div class="partInfo">
              <h5>{participant.name}</h5>
              <h6>{participant.onStage ? 'on stage' : 'in session'}</h6>
            </div>
          </li>
        )})}
        {props.participants.filter(participant => participant.inSession === false ).map(participant => {
          return (
            <li key={participant.id}>
              <img src={participant.avatar} alt="User Avatar" />
              <div class="partInfo">
                <h5>{participant.name}</h5>
                <h6>left session</h6>
              </div>
          </li>
        )})
        }

    </ul>
  )
}

export default ParticipantList;