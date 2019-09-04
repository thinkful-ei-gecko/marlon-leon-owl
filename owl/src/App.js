import React from 'react';
import ParticipantList from './ParticipantList';
import Stage from './Stage';
import ChatLog from './ChatLog'
import './App.css';

function App(props) {
  return (
   
    <main className='App'>
        <section className='mainContainer'>
            <div className='stageLeft'>
                <div className='topBar left'>
                    <ul>
                      <li className="switchViewOfLeftSide">Chat</li>
                      <li className="switchViewOfLeftSide">Participants (2)</li>
                      <li>Buttons</li>
                    </ul>
                </div>
                <div className='participantList'>
                  <ParticipantList participants={props.store.participants} />
                </div>
                <div className='chatLog'>
                  <ChatLog chatEvents={props.store.chatEvents} participants={props.store.participants} notation={props.store.notation}/>
                </div>
            </div>
            <div className='stageRight'>
                <div className='topBar right'>
                    <ul>
                        <li>Left Arrow Button</li>
                        <li>Stage</li>
                        <li>Leon's Screen X</li>
                    </ul>
                </div>
                <div className='stageLog'>
                 <Stage participants={props.store.participants}/>
                </div>
            </div>
        </section>
        <section className='bottomFooter'>
          <p>Test data 2 ---- fillllllll </p>
        </section>
    </main>
  );
}

export default App;
